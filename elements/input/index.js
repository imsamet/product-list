import cn from 'classnames'
import Style from './style.module.scss'
import { Search } from "../icons"

const Input = ({ className, ...props }) => {
  return(
    <label className={cn(Style.container, className)}>
      <Search/>
      <input {...props}/>
    </label>
  )
}
export default Input