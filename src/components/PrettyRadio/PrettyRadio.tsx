import React, { FC } from 'react';
import './PrettyRadio.pcss';

interface PrettyRadioProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
}

export const PrettyRadio: FC<PrettyRadioProps> = ({
  label,
  checked = false,
  onChange,
  name
}) => {
  const handleClick = (e: React.MouseEvent) => {
    // 阻止原生radio事件
    e.preventDefault();
    // 如果已经选中，则取消选中；如果未选中，则选中
    onChange?.(!checked);
  };

  return (
    <label className="pretty-radio" onClick={handleClick}>
      <input 
        type="radio"
        checked={checked}
        name={name}
        className="pretty-radio__input"
        // 禁用原生onChange事件
        onChange={() => {}}
      />
      <span className="pretty-radio__circle">
        <svg className="pretty-radio__checkmark" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="pretty-radio__label">{label}</span>
    </label>
  );
}; 