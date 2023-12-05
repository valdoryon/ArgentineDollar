import { CurrencyData } from '../interfaces';

export const getDollarData = async (
  API: string,
  setData: (data: CurrencyData[]) => void,
  setFilteredData: (data: CurrencyData[]) => void
) => {
  try {
    const response = await fetch(API);

    if (!response.ok) {
      throw new Error('Failed to fetch dollar data');
    }
    const data: CurrencyData[] = await response.json();

    setData(data);
    setFilteredData(data);
  } catch (error: any) {
    console.error('Error fetching dollar data: ', error.message);
  }
};
