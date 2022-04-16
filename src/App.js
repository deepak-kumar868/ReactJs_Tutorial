import React,{useState} from "react";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import Alert from "./component/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export default function App() {

  const [mode, setmode] = useState('white')
  const [text, settext] = useState('Enable DarkMode')
  const [alert, setalert] = useState(null);
  const [btnstyle, setbtnstyle] = useState('dark')

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      typ:type
    })

    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const tooglemode=()=>{
    if(btnstyle==='light'){
      setbtnstyle('dark')
      setmode('light')
      settext('Enable DarkMode')
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success")
      document.title='Textutils-Lightmode'
    }
    else{
      setbtnstyle('light')
      settext('Enable LightMode')
      setmode('dark')
      document.body.style.backgroundColor='black';
      showalert("Dark mode has been enabled","success")
      document.title='Textutils-Darkmode'
    }
  }
  return (
    <>
    <Router>
      {/* <Navbar title={9} about="About us" /> */}
      <Navbar title="Textutils" about="About us" mode={mode} tooglemode={tooglemode} text={text}  btnstyle={btnstyle}/>
      <Alert alert={alert}/>

      <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
            <Textform heading="Enter your text here to analyze" btnstyle={btnstyle}  mode={mode} showalert={showalert}/>
          </Route>
        </Switch>
      </div>
    </Router>
      {/* <Navbar title="Myapp" /> */}
      </>
  );
}