import { css } from '@emotion/css';
import React, { FC } from 'react';

type PrettyRadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> & {
  onChange?: (checked: boolean) => void;
}

export const PrettyRadio: FC<PrettyRadioProps> = ({
  name,
  checked = false,
  onChange,
}) => {
  return (
    <input
      className={css`
        width: 16px;
        height: 16px;
        cursor: pointer;
        appearance: none;
        border: 1px solid #d9d9d9;
        border-radius: 50%;
        outline: none;
        position: relative;
        background: white;
        transition: all 0.2s;
        
        &:checked {
          border-color: #1890ff;
          background: #1890ff;
        }

        &:after {
          content: '\u2713';
          position: absolute;
          top: 48%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 11px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          line-height: 1;
          opacity: 0;
          transition: opacity 0.2s;
        }

        &:checked:after {
          opacity: 1;
        }
      `}
      type="radio"
      checked={checked}
      name={name}
      onChange={({ target: { checked } }) => { onChange?.(checked) }}
    />
  );
}; 