import Products from './components/Products';
import { listAllProducts } from './product-service';
const App = () => {
  return (
    <div className='container'>

      <h1>Axios API Demo</h1> <hr/>

      <Products/>
      
    </div>
  );
};

export default App;