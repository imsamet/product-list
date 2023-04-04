import cn from 'classnames';
import Input from '../../elements/input';
import Style from './style.module.scss';
import { Portfeil, Profile } from '../../elements/icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import totalPrice from '../../constants/totalPrice';
const Nav = () => {
  const { basket } = useSelector(state => state.basket);
  const [total, setTotal] = useState("0,00₺");
  useEffect(() => {
    setTotal(`${totalPrice(basket)}₺`)
  }, [basket])
  console.log(totalPrice(basket))
  return (
    <nav className={Style.nav}>
      <div className="container">
        <div className="row">
          <div className={cn('col-4 col-sm-6 col-md-3 col-xl-2', Style.contentBox)}>
            <h1 className={Style.logo}>Eteration</h1>
          </div>
          <div className={cn('col-1 col-sm-1 col-md-6 col-xl-8', Style.contentBox, Style.searchBox)}>
            <Input className={Style.search} placeholder="Search" />
          </div>
          <div className={cn('col-8 col-sm-6 col-md-3 col-xl-2', Style.contentBox)}>
            <div className={Style.basket}>
              <Portfeil />
              <span>{total}</span>
            </div>
            <div className={Style.basket}>
              <Profile />
              <span>Kerem</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
