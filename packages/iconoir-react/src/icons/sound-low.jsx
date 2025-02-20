import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const SoundLow = forwardRef(
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
            d="M18.5 7.5C18.5 7.5 20 9 20 11.5C20 14 18.5 15.5 18.5 15.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 14V10C4 9.44772 4.44772 9 5 9H7.69722C7.89465 9 8.08766 8.94156 8.25192 8.83205L12.4453 6.03647C13.1099 5.59343 14 6.06982 14 6.86852V17.1315C14 17.9302 13.1099 18.4066 12.4453 17.9635L8.25192 15.1679C8.08766 15.0584 7.89465 15 7.69722 15H5C4.44772 15 4 14.5523 4 14Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

SoundLow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SoundLow.displayName = 'SoundLow';

export default SoundLow;
