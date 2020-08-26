import React from 'react';
const Course = (props) => {

    //props and destructure here
    const Course = props.user;
    const{course,someInformation,teacher,img,email,time,courseFee} = Course;

    //card style
    const userStyle ={
                      marginBottom:'40px',
                      marginTop:"40px",
                      padding:'10px',
                      border:'1px solid lightgreen',
                      borderRadius:'20px',
    }

    //text style
    const textStyle={
        fontWeight:'600',
    }


    return (
        <div className="card text-center " style={userStyle}>
                     <div className="card-header" className="p-3 mb-2 bg-success text-white">
                                 <h2> {course}</h2>
                     </div>
                     
        <div className="card-body" style={textStyle} >
            <p  className="card-title">{someInformation}</p>
            <p  className="card-title" ><img src={img}  className="col-sm-3 col-md-6 col-lg-8"/></p>
            <p  className="card-text">Instructor: {teacher}</p>
            <p  className="card-text">Email Address: {email}</p>
            <p  className="card-text">Course Duration: {time}</p>
            <p  className="card-text" style={{fontSize:'25px',color:"purple"}}>Course Fee: ${courseFee}</p>
            <button className="btn btn-danger" onClick={()=>props.handleUser(Course)}>&#10157;Enroll Now</button>
        </div>
</div>
    );
};

export default Course;