import { useEffect, useState } from "react";
const Bookingform=(props)=>{
   const style ={
      display :'grid',
      maxWidth : '20rem',
      gap: '12px',
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
  const handlechange=(e)=>{
   const {name,value} = e.target;
   setFormvalue({...formvalue,[name]:value});
  }
  const handleSubmit=(e)=>{
   e.preventDefault();
   setFormError(validate(formvalue));
   setIsSubmit(true);
  }
  const initialvalue={date:'',availableTimes:'',number:'',occasion:''}
  const[formvalue,setFormvalue]=useState(initialvalue)
  const[formerror,setFormError]=useState({});
  const[isSubmit,setIsSubmit]=useState(false);
  const [date, setDate] = useState("");
  const [finalTime, setFinalTime] = useState(
   props.availableTimes.map((times) => <option>{times}</option>)
);

function handleDateChange(e) {
   setDate(e.target.value);

   var stringify = e.target.value;
   const date = new Date(stringify);

   props.updateTimes(date);

   setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
}
   const change=(e)=>{
      handlechange(e);
   }
   const handle=(e)=>{
      handlechange(e);
      handleDateChange(e);
   }

  useEffect(()=>{
   if(Object.keys(formerror).length === 0 && isSubmit){
      console.log(formvalue);
   }
  },[formerror])
  const validate=(values)=>{
   const errors={};
   // const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   if(!values.date){
      errors.date="Data is required";
   }
   if(!values.availableTimes){
      errors.availableTimes="Time is required";
   }
   if(!values.number){
      errors.number="Number of guest is required";
   }
   if(!values.occasion){
      errors.occasion="Occasion is required";
   }
   return errors;
}


    return(
       <div className="form">
         {/* <pre>{JSON.stringify(formvalue,undefined,2)}</pre> */}
       <form style={style} onSubmit={handleSubmit}>
       {Object.keys(formerror).length === 0 && isSubmit ? (<div style={style2}className="ui message success">Thank &nbsp; you &nbsp; for &nbsp; Reserving &nbsp; Table</div>
            ):''}
        <h1 className="form-head">Reserve Table</h1>
        <label for="res-date">Choose date</label>
        <input type="date" name="date" id="res-date" value={date} className="form-input" onChange={handle}/>
        <p style={style1}>{formerror.date}</p>
        <label for="res-time">Choose time</label>
        <select
        id="res-time "
        name="availableTimes"
        onChange={change}
        className="form-input">
           {finalTime}
        </select>
        <p style={style1}>{formerror.availableTimes}</p>
        <label for="guests">Number of guests</label>
        <input
        type="number"
        name="number"
        placeholder="0"
        min="1" max="10"
        id="guests"
        className="form-input"
        onChange={handlechange}/>
        <p style={style1}>{formerror.number}</p>
        <label for="occasion">Occasion</label>
        <select
        id="occasion"
        className="form-input"
        name="occasion"
        onChange={handlechange}>
           <option>none</option>
           <option>Birthday</option>
           <option>Anniversary</option>
        </select>
        <p style={style1}>{formerror.occasion}</p>
        <input
        type="submit"
        value="Make Your reservation"
        className="btn-form"
        role="button"
        onChange={handlechange}></input>
      </form>
      </div>
    )
}
export default Bookingform;