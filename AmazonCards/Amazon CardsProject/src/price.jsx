 function price({oldPrice, newPrice}){
    let oldStyle = {
        textDecorationLine: "line-through",
    }
    let newStyle = {
        fontWeight: "bold",
    }
    let styles = {
        backgroundColor: "gold",
        height: "100px",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
    }
    return(
       <div style={styles}>
         <p style={oldStyle}>Old Price:{oldPrice}</p>
         <p style={newStyle}>New Price:{newPrice}</p>
       </div>
    )
}
export default price;