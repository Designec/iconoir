import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const HandBrake = forwardRef(
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
            d="M12 16V14V12"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 9V8.5V8"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M3.9532 4.5C2.12105 6.46488 1 9.10152 1 12C1 14.8985 2.12105 17.5351 3.9532 19.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.0468 4.5C21.8789 6.46488 23 9.10152 23 12C23 14.8985 21.8789 17.5351 20.0468 19.5"
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

HandBrake.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HandBrake.displayName = 'HandBrake';

export default HandBrake;
