import Style from './style.module.scss';
import { Check } from '../icons';
const Checkbox = ({ ...props }) => {
  return (
    <label className={Style.checkbox}>
      <input className={Style.input} type="checkbox" {...props} />
      <span className={Style.checkmark} />
      <Check className={Style.svg} />
    </label>
  );
};
export default Checkbox;
