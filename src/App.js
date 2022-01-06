import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage";
import ChangePage from "./pages/ChangePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestPage from "./pages/TestPage";
import {useState} from "react";
import AddItem from "./components/AddItem";



// function NameForm(props){
//     const [value, setValue] = useState('');
//
//     const handleChange=(event)=>{
//         this.setValue(event.target.value);
//
//     };
//     const handleSubmit = (event) => {
//         alert('A name was submitted: ' + this.value);
//         event.preventDefault();
//     };
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Name:
//                 <input type="text"
//                        value={value}
//                        onChange={handleChange}
//                 />
//             </label>
//             <input type="submit" value="Submit" />
//         </form>
//     );
// }


function App() {

  return (
<div className="App">
    {/*<NameForm />*/}
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/change" element={<ChangePage/>}/>
            <Route path="/test" element={<TestPage/>}/>
        </Routes>
      </BrowserRouter>
</div>
  );
}

export default App;
