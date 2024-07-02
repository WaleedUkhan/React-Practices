// App.jsx
import React from 'react';

import './App.css';
//Import for my First prop
// import FirstProp from './FirstProp.jsx'
// import './FirstProp.css';


//Import for Second prop
// import UserCard from './UserCard';

//Import for Third Prop

// import ProductList from './ProductList';

import MsgBox from './MsgBox';


//App() of FirstProp

// function App() {
//   return (
//     <>
//       <FirstProp title="Laptop" price={50000} />
//       <FirstProp title="Mobile" price={20000} />
//       {/* <h1>In this we will Practice</h1>
//       <h2>REACT PROPS</h2> */}
//     </>
//   );
// }


//  my Second Prop named as UserCard......***

// function App() {
//   const user = {
//     name: "John Doe",
//     age: 30,
//     hobbies: ["Reading", "Traveling", "Swimming"],
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       country: "USA"
//     }
//   };

//   return (
//     <div>
//       <UserCard 
//         name={user.name} 
//         age={user.age} 
//         hobbies={user.hobbies} 
//         address={user.address} 
//       />
//     </div>
//   );
// }

//  my Third Prop named as ProductList......***

// function App() {
//   const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mobile", price: 20000 },
//     { name: "Tablet", price: 15000 },
//     { name: "Chair", price: 25000 },
//     { name: "Table", price: 5000 }
//   ];

//   return (
//     <div>
//       <ProductList products={products} />
//     </div>
//   );
// }


  

function App() {
  return (
    <div>
      <MsgBox userName="Waleed" txtColor="Green" />
      <MsgBox userName="Zahoor" txtColor="Gray" />
      <MsgBox userName="Haroon" txtColor="Black" />
      <MsgBox userName="Mamoon" txtColor="powderblue" />
      <MsgBox userName="Shoaib" txtColor="magenta" />
      <MsgBox userName="Uzair" txtColor="red" />
    </div>
  );
}

export default App;

