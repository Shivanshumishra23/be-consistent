import logo from './logo.svg';
import './App.css';



function App() {


  async function getData(){
  
 
 
  
    let response, data, runURL ;
    try{
      runURL= "https://parsehub.com/api/v2/runs/t8oYhTn83vDq/data?api_key=taCT_3Pp0mwO";
      response = await fetch(runURL);
      data = await response.json;
    }
    catch(err){ console.log(err);}
    
  
    

    
    console.log(data);
 
 }



  return (
    <div className="App">
     <button onClick={getData}> hello</button>

    </div>
  );
}

export default App;
