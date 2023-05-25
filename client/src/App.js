import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch initial data
    fetchData();

    // Fetch updated data every 5 seconds
    const interval = setInterval(fetchData, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const fetchData = () => {
    fetch('http://localhost:3000/user')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  };
   
    
  
  return (
    <div className="App">
       <table>
          <thead>
            <tr>  
              <th>id</th>
              <th>lastname</th>
              <th>firstname</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((item,index)=>(
              
                <tr key={index}>
                  <td>{item.iduser}</td>
                  <td>{item.lastname}</td>
                  <td>{item.firstname}</td>
                  </tr>
            ))}
            </tbody>
       </table>
    </div>
  );
}

export default App;
