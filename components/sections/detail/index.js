import { useEffect, useState } from 'react';
import cn from 'classnames';
import Style from './style.module.scss';
import getProducts from '../../../store/actions/Products/getProducts';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../loading';
import { useRouter } from 'next/router';
import Button from '../../../elements/button';
import Image from 'next/image';
import { addBasket, removeBasket } from '../../../store/slices/basket';
const DetailSection = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(state => state.products);
  const { basket } = useSelector(state => state.basket);
  const router = useRouter();
  const [data, setData] = useState(false);
  const getData = async () => {
    await dispatch(getProducts());
  };
  useEffect(() => {
    !products && getData();
  }, []);
  useEffect(() => {
    if (products) {
      const item = products.find(i => i.id === router?.query?.slug);
      item ? setData(item) : router.push('/');
      console.log(item);
    }
  }, [products]);
  const buttonText = basket.some(i => i?.id === router?.query?.slug) ? 'Remove to Cart' : 'Add to Cart';
  const handleClick = () => {
    basket.some(i => i?.id === router?.query?.slug) ? dispatch(removeBasket(data)) : dispatch(addBasket(data));
  };
  return (
    <>
      <Loading isOpen={loading} />
      <div className="col-10">
        <div className={Style.container}>
          <div className={Style.imgBox}>
            <Image src={data?.image} layout="fill" objectFit="cover" />
          </div>
          <div className={Style.contentBox}>
            <h3>{data?.name}</h3>
            <span>{data?.price}</span>
            <Button className={cn(basket.some(i => i?.id === router?.query?.slug) && Style.remove)} onClick={handleClick}>
              {buttonText}
            </Button>
            <p>{data?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailSection;
