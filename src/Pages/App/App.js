import React, {useState, useEffect} from 'react'
import { Switch , Route} from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Dropdown from "../../Components/Dropdown";
import Footer from "../../Components/Footer";
import Home from "../Home";
import About from "../About";
import LeetCode from "../LeetCode/LeetCode";
import Content from "../Content";
function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = ()=>{
    setIsOpen(!isOpen)
  }

  useEffect(()=>{
    const hideMenu = ()=>{
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)

    return ()=>{
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About}/>
        <Route path='/leetcode' exact component={LeetCode}/>
        <Route path='/content' exact component={Content}/>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
