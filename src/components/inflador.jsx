import { useDispatch, useSelector } from 'react-redux';

export default function Inflador() {
  const inflador = useSelector((state) => state.numero);
  const width  = useSelector((state) => state.width);
  const height  = useSelector((state) => state.height);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Inflador</h1>
      <h3>{inflador}</h3>
      <div>
        <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>-</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Volver a 0</button>        
      </div>
      <img src="./corona.png" alt="Corona" width={width} height={height}/>
    </div>
  );
};