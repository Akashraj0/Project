// import Bookingform from "../Componets/Bookingform";
import Bookingform from "../Components/Bookingform";
import { fetchAPI } from "../Components/API";
import { useState, useReducer} from "react";
// import { fetchAPI } from "../Componets/API";
const Bookingpage=()=>{
    const initialvalue={date:'',availableTime:'',number:'',occasion:''}
    const[formvalue,setFormvalue]=useState(initialvalue)
    function updateTimes(date) {
        return (
            fetchAPI(date)
        );
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);
    return(
        <>
        <Bookingform data={formvalue} availableTimes={availableTimes} updateTimes={dispatch} data1={setFormvalue}/>
        </>
    )
}
export default Bookingpage;