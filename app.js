import React from "react";
import Axios from "axios";

function app(){

    const [Name,setName] = useState("");
    const [rev,setRev] = useState("");
    const [ReviewList,setList] = useState("")

    useEffect(() => {
        Axios.get('http://localhost:2501/api/get').then((response) => {
            setList(response.data)
        })
    })

    const sendInfo = () =>{
        Axios.post('http://localhost:2501/api/insert',{
            Name: Name,
            rev:rev,
        }).then(() => {
            alert("ok");
        });
    };

    return <div className="app">
        <h1>CRUD</h1>

        <div className="form">
            <label>Name:</label>
            <input type="text" name="name" onChange={(e) =>{
                setName(e.target.value)
            }}></input><br></br>
            <input type="text" name="review" onChange={(e) =>{
                setRev(e.target.value)
            }}></input>
            <button onClick = {sendInfo}></button>
            {ReviewList.map((val) => {
                return (
                    <h1>Name: {val.Name} review: {val.rev}</h1>

                );
            })}
        </div>
    </div>
}

export default app;