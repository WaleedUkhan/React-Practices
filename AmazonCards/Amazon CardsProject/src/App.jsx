

import './App.css'
import ProductTab from './ProductTab';
function App() {
  let styles = {
    alighItems: "center",
    display: "flex",
    justifyContent: "center",
    color: "magenta"
  }
  return (
      <div>
        <h1 style={styles}>Products Details</h1>
        <ProductTab/>
      </div>
      
  )
}

export default App;
