import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

export const createContainer = () => {
  const container = document.createElement('div');
  return {
    render: component => ReactDOM.render(component, container),
    container
  };
};

// export const createContainerWithProvider = () => {
//   const container = document.createElement('div');
//   container.innerHTML = `<Provider store={${store}}></Provider>`;
//   return {
//     render: component => ReactDOM.render(component, container),
//     container
//   };
// };