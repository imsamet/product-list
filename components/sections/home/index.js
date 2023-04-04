import { useEffect, useState } from 'react';
import cn from 'classnames';
import Checkbox from '../../../elements/checkbox';
import Input from '../../../elements/input';
import Radio from '../../../elements/radio';
import Pagination from '../../pagination/index.';
import ProductCard from '../../productCard';
import Style from './style.module.scss';
import getProducts from '../../../store/actions/Products/getProducts';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../loading';
import { countUp, countDown } from '../../../store/slices/basket';
import Button from '../../../elements/button';
const HomeSection = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(state => state.products);
  const { basket } = useSelector(state => state.basket);
  const [page, setPage] = useState(1);
  const [searchBrands, setSearchBrands] = useState('');
  const [selectBrands, setSelectBrands] = useState([]);
  const [searchModels, setSearchModels] = useState('');
  const [selectModels, setSelectModels] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [bards, setBards] = useState([]);
  const [models, setModels] = useState([]);
  const getData = async () => {
    await dispatch(getProducts());
  };
  useEffect(() => {
    !products && getData();
  }, []);
  useEffect(() => {
    if (products) {
      setFilterProducts(products);
      const newBards = [];
      const newModels = [];
      products?.map(i => {
        !newBards?.some(s => s === i?.brand) && newBards.push(i?.brand);
        !newModels?.some(s => s === i?.model) && newModels.push(i?.model);
      });
      setBards(newBards);
      setModels(newModels);
    }
  }, [products]);
  const filterProduct = () => {
    setFilterProducts(
      products
        .filter(i => (selectBrands.length > 0 ? selectBrands.some(s => s === i?.brand) : true))
        .filter(i => (selectModels.length > 0 ? selectModels.some(s => s === i?.model) : true)),
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
  const handleChangeBards = e => {
    setSearchBrands(e.target.value);
  };
  const handleChangeModels = e => {
    setSearchModels(e.target.value);
  };
  const totalPrice = () => {
    function parseLocaleNumber(stringNumber) {
      var thousandSeparator = Intl.NumberFormat("tr-TR")
        .format(11111)
        .replace(/\p{Number}/gu, '');
      var decimalSeparator = Intl.NumberFormat("tr-TR")
        .format(1.1)
        .replace(/\p{Number}/gu, '');

      return parseFloat(
        stringNumber
          .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
          .replace(new RegExp('\\' + decimalSeparator), '.'),
      );
    }
    let price = 0;
    basket.map(i => {
      price += parseLocaleNumber(i?.price)
    });
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 2,
    }).format(price).replace("₺", "")
  };
  return (
    <section className="section">
      <Loading isOpen={loading} />
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
              <span>Bards</span>
              <div className={Style.filterBox}>
                <Input onChange={handleChangeBards} className={Style.search} />
                {bards
                  ?.filter(i => (searchBrands !== '' ? i.toLowerCase().includes(searchBrands.toLowerCase()) : true))
                  ?.map(i => (
                    <div key={i} className={Style.filterItem}>
                      <Checkbox onChange={() => handleClickBrand(i)} />
                      <span>{i}</span>
                    </div>
                  ))}
              </div>
            </div>
            <div className={Style.filterContainer}>
              <span>Models</span>
              <div className={Style.filterBox}>
                <Input onChange={handleChangeModels} className={Style.search} />
                {models
                  ?.filter(i => (searchModels !== '' ? i.toLowerCase().includes(searchModels.toLowerCase()) : true))
                  ?.map(i => (
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
              {filterProducts?.slice((page - 1) * 12, page * 12)?.map(i => (
                <ProductCard addData={i} id={i?.id} key={i?.id} img={i?.image} price={i?.price} title={i?.name} />
              ))}
            </div>
          </div>
          <div className="col-2">
            {basket.length > 0 && (
              <div className={cn(Style.filterContainer, Style.sticy)}>
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
            <div className={cn(Style.filterContainer, Style.sticy, Style.checkout)}>
              <div className={Style.filterBox}>
                <span>Checkout</span>
                <div className="">
                  <label>
                    Total Price: <span>{totalPrice()}₺</span>
                  </label>
                  <Button>Checkout</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <Pagination pages={Math.ceil(filterProducts?.length / 12)} page={page} setPage={setPage} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
