'use client'

import { useEffect, useState } from "react";
import ImageModal from '../components/ImageModal'
import { createPortal } from "react-dom";

type ParamsType = {
  url: string
}

export default function ImageViewer(params: ParamsType) {
  const { url } = params;
  let [imageModal, setImageModal] = useState(false);
  let [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById("portal"));
  }, [imageModal]);

  const imageModalHandler = () => {
    setImageModal(!imageModal);
  };
  const toggle = () => setImageModal(prev=>!prev);
  return (
    <div>
    <style jsx>{`
      .image{
        width: 100%;
        height: 450px;
        object-fit: contain;
      }
    `}
    </style>
    <img className="image" src={url} alt={url} onClick={toggle}/>
    {imageModal && portalElement
        ? createPortal(<ImageModal imageModalHandler={imageModalHandler} url={url}/>, portalElement)
        : null}
    </div>
  )
}