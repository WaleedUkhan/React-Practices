import "./App.css"
import Navbar from  "./NavBar.jsx"
import ProductTab from "./ProductTab.jsx";

function App() {
    let name  = "Sahil"
  return (
   <>
      <ProductTab/>
      
      <Navbar/>
       <h1>Hello  this is React</h1>
       <button>Click me </button>
       <h1>Hi my Name is : {name}</h1>

    </>
  );

}

export default App
