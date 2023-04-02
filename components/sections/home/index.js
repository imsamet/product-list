import Checkbox from '../../../elements/checkbox';
import Input from '../../../elements/input';
import Radio from '../../../elements/radio';
import Style from './style.module.scss';
const HomeSection = () => {
  return (
    <section className="section">
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
              <span>Brands</span>
              <div className={Style.filterBox}>
              <Input className={Style.search}/>
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>Old to new</span>
                </div>
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>New to old</span>
                </div>
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>Price hight to low</span>
                </div>
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>Price low to High</span>
                </div>
              </div>
            </div>
            <div className={Style.filterContainer}>
              <span>Model</span>
              <div className={Style.filterBox}>
              <Input className={Style.search}/>
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>Old to new</span>
                </div>
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>New to old</span>
                </div>
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>Price hight to low</span>
                </div>
                <div className={Style.filterItem}>
                  <Checkbox />
                  <span>Price low to High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
