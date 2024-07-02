function MsgBox({ userName, txtColor }) {
    const styles = { color: txtColor };  // Use the txtColor prop to dynamically set the text color
    return (
        <div className="msgTxt" style={styles}>
            <h1>Name: {userName}</h1>
            <h1>Color: {txtColor}</h1>
        </div>
    );
}

export default MsgBox;
