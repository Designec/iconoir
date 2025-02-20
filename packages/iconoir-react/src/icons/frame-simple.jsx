import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const FrameSimple = forwardRef(
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
            d="M4.9984 2H2V4.9984H4.9984V2Z"
            stroke="currentColor"
            stroke-width="1.4992"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.9978 3.50098H18.998"
            stroke="currentColor"
            stroke-width="1.50335"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.49878 4.99805V19"
            stroke="currentColor"
            stroke-width="1.35589"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.4968 4.99951V19.0015"
            stroke="currentColor"
            stroke-width="1.35589"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.9978 20.501H18.998"
            stroke="currentColor"
            stroke-width="1.50335"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.9984 19H2V21.9984H4.9984V19Z"
            stroke="currentColor"
            stroke-width="1.4992"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.9964 2.00195H18.998V5.00035H21.9964V2.00195Z"
            stroke="currentColor"
            stroke-width="1.4992"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.9964 19.002H18.998V22.0004H21.9964V19.002Z"
            stroke="currentColor"
            stroke-width="1.4992"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

FrameSimple.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FrameSimple.displayName = 'FrameSimple';

export default FrameSimple;
