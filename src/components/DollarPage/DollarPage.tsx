import './DollarPage.css';
import { useState, useEffect } from 'react';
import { getDollarData } from '../../services/getDollarData';
import DollarCard from '../CurrencyCard/CurrencyCard';
import { CurrencyData } from '../../interfaces';

import { filterData } from '../utils/utils';

function DollarPage(): JSX.Element {
  const [dollarData, setDollarData] = useState<CurrencyData[]>([]);
  const [filteredData, setFilteredData] = useState<CurrencyData[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputValue = e.target.value.toLowerCase();
    setFilteredData(filterData(inputValue, dollarData));
  };

  useEffect(() => {
    getDollarData(
      'https://dolarapi.com/v1/dolares',
      setDollarData,
      setFilteredData
    );
  }, []);

  return (
    <div className='dollar-page-wrapper'>
      <input
        className='dollar-page-search'
        type='text'
        placeholder='Search'
        autoFocus
        onChange={handleOnChange}
      />
      {filteredData.map((element: CurrencyData) => {
        return (
          <DollarCard
            key={element.casa + element.nombre + element.venta}
            {...element}
          />
        );
      })}
    </div>
  );
}

export default DollarPage;
