import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import userInformation from '../src/component/fakeData/userInformation';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Course from './component/course/Course';

function App() {
  //handleButton from here
  const [count,setCount] = useState([]);
  const handleUser = (Course) => {
       const newCount = [...count, Course];
       setCount(newCount);
  }
  let totalPrice = count.reduce((total,cd) => cd.courseFee+total,0);
  let vat = parseFloat(totalPrice*(5/100).toFixed(2));
  totalPrice = totalPrice+vat;


  return ( //navBar section and showing course this section and passing props
  <div className="container">
      <nav className="navbar navbar-light bg-dark">
            <a className="navbar-brand"><h2 className="text-light">Online Course</h2></a>
       <form className="form-inline">
             <input className="form-control mr-sm-2" type="search" placeholder="Search Course" aria-label="Search"/>
             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
   </nav>
   
   
   <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Your Course </a>
      </li>
    </ul>
  </div>

  <div class="card-body" style={{fontFamily: 'Lobster'}}>
        <h5 class="card-title">Total Course : {count.length}</h5>
        <h5 class="card-text">Vat : ${vat}</h5>
        <h5 class="card-text">Total Price : ${totalPrice}</h5>
  </div>
</div>

   {
     userInformation.map(user => <Course handleUser={handleUser} user={user}></Course>)
   }
    </div>
  );
}

export default App;
