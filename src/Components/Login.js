import {useEffect, useState } from "react";
const Login=()=>{
    const style ={
        display :'grid',
        maxWidth : '20rem',
        gap: '15px',
         margin: 'auto',
    }
    const style1={
        color : 'red',
       }
    const style2={
        color : '#F4CE14',
        textAlign: 'center',
        fontWeight: 'bold',
       }
    const initialvalue={username: '',email: '',password: ''};
    const[formvalue,setFormvalue]=useState(initialvalue);
    const[formError,setFormError]= useState({});
    const[isSubmit,setIsSubmit] =useState(false);

    const handlechange=(e)=>
    {
        const {name,value} =e.target;
        setFormvalue({...formvalue,[name]:value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormError(validate(formvalue));
        setIsSubmit(true);
    }
    useEffect(()=>{
        console.log(formError);
        if (Object.keys(formError).length === 0 && isSubmit){
            console.log(formvalue);
        }
    },[formError]);
    const validate = (values) => {
        const errors ={};
        const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username){
            errors.username ="username is required";
        }
        if (!values.email){
            errors.email ="email is required";
        } else if(!regex.test(values.email)){
            errors.email = "this is not a valid email format";
        }
        if (!values.password){
            errors.password ="password is required";
        }else if(values.password.length < 4){
            errors.email = "Password must be more than four character";
        }
        return errors;
    };
    return(
        <div className="form" onSubmit={handleSubmit}>
            {/* <pre>{JSON.stringify(formvalue,undefined,2)}</pre> */}
            {Object.keys(formError).length === 0 && isSubmit ? (<div style={style2}className="ui message success">signed in successfully</div>
            ):''}
        <form style={style}>
         <h1 className="form-head">SIGN IN</h1>
        <label className="label">Name</label>
        <input type="text" name="username" placeholder="Enter Your Name" value={formvalue.username} onChange={handlechange} className="form-input"/>
        <p style={style1}>{formError.username}</p>
        <label className="label">Email</label>
        <input type="email" name="email" placeholder="Enter Your Email ID" value={formvalue.email} onChange={handlechange}  className="form-input"/>
        <p style={style1}>{formError.email}</p>
        <label className="label">Password</label>
        <input
        type="password"
        name="password"
        placeholder="Enter Your Password"
        value={formvalue.password}
        onChange={handlechange} 
        className="form-input"/>
        <p style={style1}>{formError.password}</p>
        <input type="checkbox"/>
        <p>Yes,I Would also like to sign up for thw weekly Update(optional)</p>
        <button className="btn-form" >Submit</button>
     </form>
     </div>
    )
}
export default Login;