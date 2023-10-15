import styles from './Backdrop.module.css'

type BackDropType = {
  children: React.ReactNode;
  loginModalHandler: () => void;
};

export default function Backdrop({
  children,
  loginModalHandler,
}: BackDropType) {
  return (
    <div className={styles.backdrop} onClick={loginModalHandler}>
      {children}
    </div>
  );
}