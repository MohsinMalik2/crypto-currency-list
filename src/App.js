import React,{useState, useEffect} from 'react';
import Header from './components/Header';
import TextHeadlines from './components/TextHeadlines';

function App() {
  const [mode, setmode] = useState('light')
  const toggleMode=()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      document.table.style.color = "white";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("table").style.color = "black";

    }
  }
  return (
    <div className="App">
        <Header toggleMode={toggleMode} mode={mode}/>
        <div className='container'>
          <TextHeadlines/>
        </div>
    </div>
  );
}

export default App;
