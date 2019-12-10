import React from 'react';
import './App.css';
import{BrowserRouter as Router, Route} from 'react-router-dom'
import About from './components/pages/About'
import Header from './components/pages/Header'
import Disclaimer from './components/pages/Disclaimer'
import Footer from './components/pages/Footer'
import Credits from './components/pages/Credits'
import Photo from './components/pages/Photo'


import Latestphotos from './components/pages/Latestphotos'



function App() {
  return ( 
    <Router>
    <div className="App">
      <Header/>
   <div className="content-block">
     <div className="container">
       <div className="row">
         <div className="col">
        
           <Route exact path="/" render={props=>(
            <Latestphotos/>
           )}/>                       
          
           <Route  path="/about" component={About}/>
           <Route  path="/disclaimer" component={Disclaimer}/>
           <Route  path="/credits" component={Credits}/>
           <Route  path="/photo" component={Photo}/>

           



            
                
         </div>
        </div>
               
       </div>
     </div>
     <Footer/>
   </div>
  
   </Router>
  
  );
}

export default App;
