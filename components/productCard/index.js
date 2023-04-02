import Image from 'next/image'
import Style from './style.module.scss'
import Button from '../../elements/button'
const ProductCard = ({img, title, price, }) => {
  return (
    <div className={Style.container}>
      <div className={Style.imgBox}>
      <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className={Style.contentBox}>
        <span>{price}</span>
        <h3>{title}</h3>
        <Button>Add to Cart</Button>
      </div>
    </div>
  )
}
export default ProductCard