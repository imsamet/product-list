import { useEffect, useState } from 'react';
import cn from 'classnames';
import Style from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { countUp, countDown } from '../../store/slices/basket';
import Button from '../../elements/button';
import useTotalPrice from '../../hooks/useTotalPrice';
const Checkout = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector(state => state.basket);
  const [total, setTotal] = useState('0,00₺');
  useEffect(() => {
    setTotal(`${useTotalPrice(basket)}₺`);
  }, [basket]);
  return (
    <div className="col-2">
      <div className={cn(Style.sticy)}>
        {basket.length > 0 && (
          <div className={cn(Style.filterContainer)}>
            <span>Cart</span>
            <div className={Style.filterBox}>
              {basket?.map(i => (
                <div className={Style.basketBox}>
                  <div className={Style.headBox}>
                    <h4>{i?.name}</h4>
                    <span>{i?.price}₺</span>
                  </div>
                  <div className={Style.countBox}>
                    <span onClick={() => dispatch(countDown(i?.id))}>-</span>
                    <span className={Style.count}>{i?.count}</span>
                    <span onClick={() => dispatch(countUp(i?.id))}>+</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className={cn(Style.filterContainer, Style.checkout)}>
          <div className={Style.filterBox}>
            <span>Checkout</span>
            <div className="">
              <label>
                Total Price: <span>{total}</span>
              </label>
              <Button>Checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
