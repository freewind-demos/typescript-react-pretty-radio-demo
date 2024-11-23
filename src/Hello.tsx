import React, { FC, useState } from 'react';
import './Hello.pcss';
import { PrettyRadio } from './components/PrettyRadio';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  const [selected, setSelected] = useState<string | null>(null);
  
  const handleChange = (option: string) => {
    if (selected === option) {
      setSelected(null);
    } else {
      setSelected(option);
    }
  };

  return <div className={'Hello'}>
    <h1>Hello Radio</h1>
    <div style={{ display: 'flex', gap: '16px' }}>
      <PrettyRadio 
        label="Yes"
        checked={selected === 'yes'}
        onChange={() => handleChange('yes')}
      />
      <PrettyRadio
        label="No" 
        checked={selected === 'no'}
        onChange={() => handleChange('no')}
      />
    </div>
  </div>;
};
