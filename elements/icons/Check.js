import * as React from 'react';
const SvgCheck = props => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Check_svg__a)">
      <path
        d="M10.595 16.483a.61.61 0 0 1-.866 0l-3.46-3.46a.919.919 0 0 1 0-1.3l.433-.433a.919.919 0 0 1 1.3 0l2.16 2.16 5.836-5.836a.919.919 0 0 1 1.3 0l.433.433a.919.919 0 0 1 0 1.3l-7.136 7.136Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="Check_svg__a">
        <path fill="#fff" transform="translate(6 6)" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCheck;
