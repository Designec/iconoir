import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const SoundHigh = forwardRef(
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
            d="M2 14V10C2 9.44772 2.44772 9 3 9H5.69722C5.89465 9 6.08766 8.94156 6.25192 8.83205L10.4453 6.03647C11.1099 5.59343 12 6.06982 12 6.86852V17.1315C12 17.9302 11.1099 18.4066 10.4453 17.9635L6.25192 15.1679C6.08766 15.0584 5.89465 15 5.69722 15H3C2.44772 15 2 14.5523 2 14Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M16.5 7.5C16.5 7.5 18 9 18 11.5C18 14 16.5 15.5 16.5 15.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.5 4.5C19.5 4.5 22 7 22 11.5C22 16 19.5 18.5 19.5 18.5"
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

SoundHigh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SoundHigh.displayName = 'SoundHigh';

export default SoundHigh;
