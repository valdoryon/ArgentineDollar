import { CurrencyData } from '../../interfaces';

export const filterData = (filterValue: string, data: CurrencyData[]) => {
  const filteredData = data.filter((element) =>
    element.nombre.toLowerCase().includes(filterValue)
  );
  return filteredData;
};
