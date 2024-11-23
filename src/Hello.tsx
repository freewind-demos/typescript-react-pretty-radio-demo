import React, { FC, useState } from 'react';
import { PrettyRadio } from './PrettyRadio';

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
      <label>
        <PrettyRadio
          name="aa"
          checked={selected === 'yes'}
          onChange={() => handleChange('yes')}
        />
        Yes
      </label>

      <label>
        <PrettyRadio
          name="aa"
          checked={selected === 'no'}
          onChange={() => handleChange('no')}
        />
        No
      </label>
    </div>
  </div>;
};
