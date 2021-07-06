import { useEffect, useState } from "react";
import {useSpring,config} from "@react-spring/web"
import CustomSelect from "./CustomSelect";
import TextInput from "./TextInput"
import "./css/customDateSelector.css";
const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Dec"
];

export default function CustomDateSelector(props) {
  const [showDateSelector, setShowDateSelector] = useState(false);
  const [year,setYear]=useState(props.defaultDate?Number.parseInt(props.defaultDate.substr(7)):1999)
  const [month,setMonth]=useState(props.defaultDate?props.defaultDate.substr(4,2):"Jan")
  const [day,setDay]=useState(props.defaultDate?Number.parseInt(props.defaultDate.substr(0,3)):1)

  useEffect(()=>{
    props.onChangeFunction(`${month} ${day} ${year}`)
  },[day,month,year])

  const dropDownSpring=useSpring({
    from:{ height:"0%"},
    to:{height:"100%"},
    config=config.wobbly,
    reverse:showDateSelector
  });

  /**
   * Finds the number of days in a month in a particular year
   * @param {String} aMonth The Month of the date
   * @param {String} aYear The year of the date 
   * @returns {object[]} An Array of day number objects for custom selects
   */
  const getDays=(aMonth,aYear)=>{
    let leap=( (aYear%4===0) && ( (aYear%100!==0) || (aYear%400===0) ) )
    let index=MONTHS.indexOf(aMonth);
    if(index===2)return Array.from({length:leap?29:28},(_,i)=>{return {name:""+i+1,value:i+1}})
    if([4,6,9,11].indexOf(index))return Array.from({length:30},(_,i)=>{return {name:""+i+1,value:i+1}})
    return Array.from({index:31},(_,i)=>{return {name:""+i+1,value:i+1}})
  }
  return (
    <div className={`customDateSelectContainer`} onFocus={()=>setShowDateSelector(true)}>
      <div className={`customDateSelectWrapper`}>
        <div className={`customDateSelect`}>
          {`${month} ${day} ${year}`}
        </div>
      </div>
      <div className="dateDropdownMenu" style={{display:"absolute",top:0,width:"100%",...dropDownSpring}}>
        <div className="customDateSelectInputs">
          <CustomSelect mode={props.mode||0} items={[...MONTHS].map(v=>{return {name:v,value:v}})} onChangeFunction={setMonth} />
          <CustomSelect mode={props.mode||0} items={getDays(month,year)} onChangeFunction={setDay} />
          <TextInput mode={props.mode||0} text={year} onChangeFunction={setYear} />
        </div>
        <button onClick={()=>setShowDateSelector(false)}>Confirm</button>
      </div>
    </div>
  );
}
