// FirstProp.jsx
import './FirstProp.css';

function FirstProp({ title, price }) {
    return (
            <div className="product-card">
            <h1 className="product-title">The Title of the Product is: {title}</h1>
            <h1 className="product-price">The Price of the Product is: ₹{price}</h1>
            </div>
    );
  }
  
  export default FirstProp;
  