import { useEffect, useState } from 'react';
import Checkbox from '../../../elements/checkbox';
import Input from '../../../elements/input';
import Radio from '../../../elements/radio';
import Pagination from '../../pagination/index.';
import ProductCard from '../../productCard';
import Style from './style.module.scss';
import getProducts from '../../../store/actions/Products/getProducts';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../loading';
const HomeSection = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(state => state.products);
  const [page, setPage] = useState(1);
  const [searchBrands, setSearchBrands] = useState('');
  const [selectBrands, setSelectBrands] = useState([]);
  const [searchModels, setSearchModels] = useState('');
  const [selectModels, setSelectModels] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [bards, setBards] = useState([]);
  const [models, setModels] = useState([]);
  const [order, setOrder] = useState(false);
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
  const handleClickOrder = value => {
    setOrder(value);
  };
  const compare = (a, b) => {
    let dateVal = new Date(b.createdAt) - new Date(a.createdAt);
    let price = parseFloat(b.price) - parseFloat(a.price);
    return order === 'newested'
      ? dateVal > 0
        ? 1
        : -1
      : order === 'oldest'
      ? dateVal < 0
        ? 1
        : -1
      : order === 'mostExpensive'
      ? price > 0
        ? 1
        : -1
      : order === 'cheapest'
      ? price < 0
        ? 1
        : -1
      : true;
  };
  return (
    <>
      <Loading isOpen={loading} />
      <div className="col-2">
        <div className={Style.filterContainer}>
          <span>Sort By</span>

          <div className={Style.filterBox}>
            <div onClick={() => handleClickOrder('oldest')} className={Style.filterItem}>
              <Radio />
              <span>Old to new</span>
            </div>
            <div onClick={() => handleClickOrder('newested')} className={Style.filterItem}>
              <Radio />
              <span>New to old</span>
            </div>
            <div onClick={() => handleClickOrder('mostExpensive')} className={Style.filterItem}>
              <Radio />
              <span>Price hight to low</span>
            </div>
            <div onClick={() => handleClickOrder('cheapest')} className={Style.filterItem}>
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
          {[...filterProducts]
            ?.sort(compare)
            ?.slice((page - 1) * 12, page * 12)
            ?.map(i => (
              <ProductCard addData={i} id={i?.id} key={i?.id} img={i?.image} price={i?.price} title={i?.name} />
            ))}
        </div>
        <Pagination pages={Math.ceil(filterProducts?.length / 12)} page={page} setPage={setPage} />
      </div>
    </>
  );
};
export default HomeSection;
