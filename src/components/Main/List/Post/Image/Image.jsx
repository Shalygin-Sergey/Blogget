import style from './Image.module.css';
import notphoto from './img/notphoto.jpg';


export const Image = () => {
  console.log(style);
  return (
    <>
      <img className={style.img} src={notphoto} alt="" />
    </>
  );
};