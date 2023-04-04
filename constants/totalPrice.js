import { useSelector } from "react-redux";

const totalPrice = (basket) => {
  let price = 0;
  basket.map(i => {
    price += i.count * parseFloat(i?.price.replace(',', ''));
  });
  const data = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
  })
    .format(price)
    .replace('₺', '')
  return data;
};
export default totalPrice