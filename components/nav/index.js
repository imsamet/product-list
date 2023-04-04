import cn from 'classnames';
import Input from '../../elements/input';
import Style from './style.module.scss';
import { Portfeil, Profile } from '../../elements/icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useTotalPrice from '../../hooks/useTotalPrice';
const Nav = () => {
  const { basket } = useSelector(state => state.basket);
  const [total, setTotal] = useState("0,00₺");
  useEffect(() => {
    setTotal(`${useTotalPrice(basket)}₺`)
  }, [basket])
  return (
    <nav className={Style.nav}>
      <div className="container">
        <div className="row">
          <div className={cn('col-2', Style.contentBox)}>
            <h1 className={Style.logo}>Eteration</h1>
          </div>
          <div className={cn('col-8', Style.contentBox)}>
            <Input className={Style.search} placeholder="Search" />
          </div>
          <div className={cn('col-2', Style.contentBox)}>
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
