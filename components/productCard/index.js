import Image from 'next/image';
import cn from 'classnames';
import Style from './style.module.scss';
import Button from '../../elements/button';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket, removeBasket } from '../../store/slices/basket';
import Link from 'next/link';
const ProductCard = ({ addData, id, img, title, price }) => {
  const dispatch = useDispatch();
  const { basket } = useSelector(state => state.basket);
  const buttonText = basket.some(i => i?.id === id) ? 'Remove to Cart' : 'Add to Cart';
  const handleClick = () => {
    basket.some(i => i?.id === id) ? dispatch(removeBasket(addData)) : dispatch(addBasket(addData));
  };
  return (
    <div className={Style.container}>
      <Link href={`/${id}`}>
        <div className={Style.imgBox}>
          <Image src={img} layout="fill" objectFit="cover" />
        </div>
      </Link>
      <div className={Style.contentBox}>
        <span>{price}</span>
        <h3>{title}</h3>
        <Button className={cn(basket.some(i => i?.id === id) && Style.remove)} onClick={handleClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
