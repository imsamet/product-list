import Style from './style.module.scss';
import cn from 'classnames'
const Button = ({ className, children, ...props }) => {
  return (
    <button className={cn(Style.button, className)}>
      {children}
    </button>
  );
};
export default Button;
