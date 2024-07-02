import { useState } from "react";

export default function Form(){

    // let [FullName, setFullname] = useState("");
    // let [userName, setUsername] = useState("");

        // let handleName = (event)=>{
        //     setFullname(event.target.value);
        // }

        // let handleUserName = (event)=>{
        //     setFullname(event.target.value);
        // }

        
    let [FormData, setFormData] = useState({
        FullName: "",
        userName: ""
    })

    let handleInputchange = (event)=>{

        let fieldName = event.target.name;
        let newValue = event.target.value;
        
        setFormData((currData)=>{
            currData[fieldName] = newValue;
            return{...currData};
        })
    }

    let onSubmit = (event)=>{
        event.preventDefault();
        setFormData({});
    };

    return (
        <form  onSubmit={onSubmit}>
            <label htmlFor="FullName">FULL NAME: </label> <br /><br />
            <input 
            type="text" 
            placeholder="Enter Text"
            value={FormData.FullName}
            // onChange={handleName} 
            id="fullName"
            name="FullName"
            onChange={handleInputchange}
            />
           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button>Submitt</button>
            <br />
            <br />

            <label htmlFor="userName">USER NAME: </label> <br />
            <input 
            type="text" 
            placeholder="Enter Name"
            value={FormData.userName}
            // onChange={handleUserName}
            name="userName"

            onChange={handleInputchange}
            />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button>Submitt</button>
        </form>
    )
}