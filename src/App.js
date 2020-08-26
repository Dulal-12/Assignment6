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
   
   
   <div className="card text-center">
  <div className="card-header">
    <ul className="nav nav-pills card-header-pills">
      <li className="nav-item">
        <a className="nav-link active" href="#">Your Course </a>
      </li>
    </ul>
  </div>

  <div className="card-body" style={{fontFamily: 'Lobster'}}>
        <h5 className="card-title">Total Course : {count.length}</h5>
        <h5 className="card-text">Vat : ${vat}</h5>
        <h5 className="card-text">Total Price : ${totalPrice}</h5>
  </div>
</div>

   {
     userInformation.map(user => <Course handleUser={handleUser} key={user.id} user={user}></Course>)
   }
    </div>
  );
}

export default App;
