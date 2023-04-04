import { useSelector } from "react-redux";

const useTotalPrice = (basket) => {
  let price = 0;
  basket.map(i => {
    price += i.count * parseFloat(i?.price.replace(',', ''));
  });
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
  })
    .format(price)
    .replace('₺', '');
};
export default useTotalPrice