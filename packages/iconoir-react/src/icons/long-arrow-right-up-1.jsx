import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const LongArrowRightUp1 = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
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
            d="M15.5 7V13C15.5 15.2091 13.7091 17 11.5 17H4.5M15.5 7L19 10.5M15.5 7L12 10.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

LongArrowRightUp1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LongArrowRightUp1.displayName = 'LongArrowRightUp1';

export default LongArrowRightUp1;
