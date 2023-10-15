
import Backdrop from "./Backdrop";
import Image from "next/image";

type ImageModalProps = {
  imageModalHandler: () => void;
  url: string;
};

export default function ImageModal({ imageModalHandler, url }: ImageModalProps) {
  return (
    <Backdrop loginModalHandler={imageModalHandler}>
      <style>{`
        
          .image{
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        
        `
      }</style>
      <img className="image" src={url} width={500} height={500} alt={url} />
    </Backdrop>
  );
}