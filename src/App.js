import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Movies from './Components/Movies';



console.log(process.env.REACT_APP_OMBDAPI_URL);
console.log(process.env.REACT_APP_OMDBAPI_KEY);

axios.get(process.env.REACT_APP_OMBDAPI_URL+"?t=Terminator&apikey="+process.env.REACT_APP_OMDBAPI_KEY)  
     .then (response => console.log(response))
     .catch(error => console.log(error));
     

const App = () => {
  return (
       <>
       <Movies/>
       </>
  );
}

export default App;
