import style from './Image.module.css';
import notphoto from './img/notphoto.jpg';


export const Image = () => {
  return (
    <>
      <img className={style.img} src={notphoto} alt="" />
    </>
  );
};