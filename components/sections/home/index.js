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
  const [selectBrands, setSelectBrands] = useState([]);
  const [selectModels, setSelectModels] = useState([]);
  const [products, setProducts] = useState(PRODUCTS);
  const pages = Math.ceil(products?.length / 12);
  const bards = [];
  const models = [];
  PRODUCTS.map(i => {
    !bards?.some(s => s === i?.brand) && bards.push(i?.brand);
    !models?.some(s => s === i?.model) && models.push(i?.model);
  });
  const filterProduct = () => {
    setProducts(
      PRODUCTS.filter(i => (selectBrands.length > 0 ? selectBrands.some(s => s === i?.brand) : true)).filter(i =>
        selectModels.length > 0 ? selectModels.some(s => s === i?.model) : true,
      ),
    );
  };
  const handleClickBrand = e => {
    const newSelectedBrands = selectBrands;
    if (newSelectedBrands.some(i => i === e)) {
      const index = newSelectedBrands?.findIndex(x => x === e);
      newSelectedBrands.splice(index, 1);
    } else {
      newSelectedBrands.push(e);
    }
    setSelectBrands(newSelectedBrands);
    filterProduct();
  };
  const handleClickModel = e => {
    const newSelectedModels = selectModels;
    if (newSelectedModels.some(i => i === e)) {
      const index = newSelectedModels?.findIndex(x => x === e);
      newSelectedModels.splice(index, 1);
    } else {
      newSelectedModels.push(e);
    }
    setSelectModels(newSelectedModels);
    filterProduct();
  };
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
              <span>Model</span>
              <div className={Style.filterBox}>
                <Input className={Style.search} />
                {bards?.map(i => (
                  <div key={i} className={Style.filterItem}>
                    <Checkbox onChange={() => handleClickBrand(i)} />
                    <span>{i}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={Style.filterContainer}>
              <span>Brands</span>
              <div className={Style.filterBox}>
                <Input className={Style.search} />
                {models?.map(i => (
                  <div key={i} className={Style.filterItem}>
                    <Checkbox onChange={() => handleClickModel(i)} />
                    <span>{i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className={Style.cardContainer}>
              {products?.slice((page - 1) * 12, page * 12)?.map(i => (
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
