import Style from './style.module.scss';
import cn from 'classnames';
const Radio = ({ className, checked, ...props }) => {
  return (
    <label className={cn(Style.radio, className, className === 'greenRadio' && Style.greenRadio)}>
      <input type="radio" name="radio" {...props} />
      <span className={cn(Style.checkmark, checked && Style.checkStyle)}>
      </span>
    </label>
  );
};
export default Radio;
