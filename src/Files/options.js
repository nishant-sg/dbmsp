import './options.css';
import DBActions from './dbActions';
import DBselector from './dbSelector';
import { useState,useEffect} from "react";

function Options() {

    const [title, setTitle] = useState("");
    const [action,setAction] = useState("");
    const [db1,setDB1] = useState(false);

  return (
    <div className="options">
        <div className="left">
        <h2>Choose Database</h2>
        <div className="DBelector">
        <button onClick={() => {setTitle("DB1");setDB1(true)}}>DB1</button>
        <button onClick={() => setTitle("DB2")}>DB2</button>
        <button onClick={() => setTitle("DB3")}>DB3</button>
        <button onClick={() => setTitle("DB4")}>DB4</button>

    </div>
        </div>
        <div className="right">
            <h2>Choose Action</h2>
            <div className="DBActions">
        
            <button onClick={() => setAction("Insert")}>Insert</button>
            <button onClick={() => setAction("Delete")}>Delete</button>
            <button onClick={() => setAction("Update")}>Update</button>

        <div className="showForms">
        <h1>Insert form for database {title} with {action} action here</h1>
        {db1 && 
        <div>
            <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
            </div>
            }
    </div>
    </div>

        </div>
    </div>
  );
}

export default Options;
