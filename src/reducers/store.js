import { createStore } from 'redux';

const estadoInicial = {
  numero: 0,  
  width: 512, 
  height: 512  
};

function reducer(state = estadoInicial, action) {
  switch (action.type) {
    case 'INCREMENTAR':          
      return {
        numero: state.numero + 1,
        width: state.width + 50,
        height: state.height + 50
      };
    case 'DECREMENTAR':
      return {
        numero: state.numero - 1,
        width: state.width - 50,
        height: state.height - 50
      };
    case 'RESET':
      return {
        numero: estadoInicial.numero,
        width: estadoInicial.width,
        height: estadoInicial.height
    }
    default:
      return state;
  };
};

export default createStore(reducer);