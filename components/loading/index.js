import cn from 'classnames';
import Style from './style.module.scss';
const Loading = ({isOpen}) => {
  return (
    <div className={cn(Style.loading, isOpen && Style.open)}>
      <div className={Style.loader}></div>
    </div>
  );
};
export default Loading