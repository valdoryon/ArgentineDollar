import './CurrencyCard.css';
import { CurrencyData } from '../../interfaces';

const CurrencyCard = (props: CurrencyData) => {
  const date = new Date(props.fechaActualizacion);
  return (
    <div className='currency-card'>
      <h1>DOLAR {props.nombre.toUpperCase()}</h1>
      <div className='currency-card__values'>
        <div className='currency-card__values--compra'>
          <p>Compra</p>
          <h2>${props.compra}</h2>
        </div>
        <div className='currency-card__values--venta'>
          <p>Venta</p>
          <h2>${props.venta}</h2>
        </div>
      </div>
      <span>
        Actualizado el {date.toLocaleDateString()} a las{' '}
        {date.toLocaleTimeString()}
      </span>
    </div>
  );
};

export default CurrencyCard;
