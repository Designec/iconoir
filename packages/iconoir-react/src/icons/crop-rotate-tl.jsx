import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const CropRotateTl = forwardRef(
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
            d="M11.746 5.75006H7.74597C5.53683 5.75006 3.74597 7.54092 3.74597 9.75006V10.7501"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.24597 3.25006L11.746 5.75006L9.24597 8.25006"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.746 11.7501L11.746 11.7501C11.1937 11.7501 10.746 12.1978 10.746 12.7501L10.746 20.7501"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.74597 18.7501L16.746 18.7501C17.2983 18.7501 17.746 18.3023 17.746 17.7501L17.746 9.75006"
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

CropRotateTl.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CropRotateTl.displayName = 'CropRotateTl';

export default CropRotateTl;
