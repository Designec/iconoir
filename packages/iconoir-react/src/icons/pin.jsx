import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Pin = forwardRef(({ color = 'currentColor', size = 24 }, ref) => {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      color={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5717 12.5L3.92896 20.0708M21.1923 8.46432C21.1923 5.34018 18.6597 2.80757 15.5355 2.80757C12.4114 2.80757 9.87878 5.34018 9.87878 8.46432C9.87878 11.5885 12.4114 14.1211 15.5355 14.1211C18.6597 14.1211 21.1923 11.5885 21.1923 8.46432Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.9029 9.5C12.504 8.48459 12.7149 7.28504 13.5356 6.46436C14.3944 5.60558 15.668 5.4145 16.7114 5.8911"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
});

Pin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Pin.displayName = 'Pin';

export default Pin;
