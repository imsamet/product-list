import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Style from './style.module.scss';
import classNames from 'classnames';
import { ArrowLeft, ArrowRight } from '../../elements/icons';
const Pagination = ({ pages, styleMT, page, setPage }) => {
  const totalPage = pages;
  const currentPage = parseInt(page);

  const handleClick = e => {
    if (e === 'prev') {
      setPage && setPage(currentPage - 1);
    } else if (e === 'next') {
      setPage && setPage(currentPage + 1);
    } else {
      setPage && setPage(`${e}`);
    }
  };

  return (
    <div value={page} className={cn(Style.pagination, styleMT && Style.styleMT)}>
      <div
        onClick={() => currentPage > 1 && handleClick('prev')}
        className={classNames(currentPage !== 1 ? Style.iconContainer : Style.iconContainerPassive)}
      >
        <ArrowLeft className={Style.prev} />
      </div>

      <div onClick={() => handleClick(1)} className={cn(currentPage === 1 && Style.currentPage)}>
        1
      </div>
      {totalPage > 7 && (
        <div
          onClick={() => currentPage <= 4 && handleClick(2)}
          className={cn(currentPage <= 4 && 'dots', currentPage === 2 && Style.currentPage)}
        >
          {currentPage <= 4 ? '2' : '. . .'}
        </div>
      )}

      {totalPage > 7
        ? [...Array(3).keys()].map((i, key) => {
            const addNumber =
              currentPage === 1
                ? 2
                : currentPage === 2
                ? 1
                : currentPage === 3
                ? 0
                : currentPage === totalPage - 2
                ? -2
                : currentPage === totalPage - 1
                ? -3
                : currentPage === totalPage
                ? -4
                : -1;
            const page = currentPage + i + addNumber;
            return (
              <div
                onClick={() => handleClick(page)}
                className={cn(currentPage === page && Style.currentPage)}
                key={key}
              >
                {page}
              </div>
            );
          })
        : [...Array(totalPage - 2 >= 0 ? totalPage - 2 : 0).keys()].map((i, key) => (
            <div
              onClick={() => handleClick(i + 2)}
              className={cn(currentPage === i + 2 && Style.currentPage)}
              key={key}
            >
              {i + 2}
            </div>
          ))}

      {totalPage > 7 && (
        <div
          onClick={() => currentPage >= totalPage - 3 && handleClick(totalPage - 1)}
          className={cn(currentPage >= totalPage - 3 && 'dots', currentPage === totalPage - 1 && Style.currentPage)}
        >
          {currentPage >= totalPage - 3 ? totalPage - 1 : '. . .'}
        </div>
      )}
      {totalPage > 1 && (
        <div onClick={() => handleClick(totalPage)} className={cn(currentPage === totalPage && Style.currentPage)}>
          {totalPage}
        </div>
      )}

      <div
        onClick={() => currentPage < totalPage && handleClick('next')}
        className={classNames(
          currentPage !== pages ? Style.iconContainer : Style.iconContainerPassive,
        )}
      >
        <ArrowRight className={Style.next} />
      </div>
    </div>
  );
};
Pagination.propTypes = {
  pages: PropTypes.object,
};
Pagination.defaultProps = {
  pages: 3,
};
export default Pagination;
