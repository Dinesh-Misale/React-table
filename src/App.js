// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

const App = ()=>{
  var [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("https://api.publicapis.org/entries").then(response=>{
      setData(data = response.data.entries);
      // console.log(response.data.entries[0].Link);
      // console.log(data);
    })
  },[])
  return (
    <div className='App-div'>
       <form>
        <table >
            <thead>
            <tr>
                <th>Description</th>
                <th>Link</th>
                <th>Category</th>
                <th>API</th>
            </tr>
            </thead>
​
            <tbody>
           
                
                {
                  data.map((eachdata)=>{
                    return(
                      <tr>
                      <td>{eachdata.Description}</td>
                      <td><a href={eachdata.Link}>{eachdata.Link}</a></td>
                      <td>{eachdata.Category}</td>
                      <td>{eachdata.API}</td>
                      </tr>
                    )
                  })
                }
           
            </tbody> 
        </table>
        
    </form>
    </div>
  );
}

export default App;
