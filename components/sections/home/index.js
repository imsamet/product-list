import { useState } from 'react';
import { PRODUCTS } from '../../../constants';
import Checkbox from '../../../elements/checkbox';
import Input from '../../../elements/input';
import Radio from '../../../elements/radio';
import Pagination from '../../pagination/index.';
import ProductCard from '../../productCard';
import Style from './style.module.scss';
const HomeSection = () => {
  const [page, setPage] = useState(1);
  const pages = Math.ceil(PRODUCTS?.length / 12)
  console.log(PRODUCTS?.length / 12)
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className={Style.filterContainer}>
              <span>Sort By</span>

              <div className={Style.filterBox}>
                <div className={Style.filterItem}>
                  <Radio />
                  <span>Old to new</span>
                </div>
                <div className={Style.filterItem}>
                  <Radio />
                  <span>New to old</span>
                </div>
                <div className={Style.filterItem}>
                  <Radio />
                  <span>Price hight to low</span>
                </div>
                <div className={Style.filterItem}>
                  <Radio />
                  <span>Price low to High</span>
                </div>
              </div>
            </div>
            <div className={Style.filterContainer}>
              <span>Brands</span>
              <div className={Style.filterBox}>
                <Input className={Style.search} />
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>Old to new</span>
                </div>
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>New to old</span>
                </div>
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>Price hight to low</span>
                </div>
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>Price low to High</span>
                </div>
              </div>
            </div>
            <div className={Style.filterContainer}>
              <span>Model</span>
              <div className={Style.filterBox}>
                <Input className={Style.search} />
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>Old to new</span>
                </div>
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>New to old</span>
                </div>
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>Price hight to low</span>
                </div>
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>Price low to High</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className={Style.cardContainer}>
              {PRODUCTS?.slice((page - 1) * 12, page * 12)?.map(i => (
                <ProductCard key={i?.id} img={i?.image} price={i?.price} title={i?.name} />
              ))}
            </div>
          </div>
          <div className="col-12">
            <Pagination pages={pages} page={page} setPage={setPage} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
