
    const Multiple = ({gender,handleOnselect,handleOnsubmit,})=>{

      
     const optionsList =[
      {value:"female" ,text:"female", },
      {value:"male",text:"male",}
    ]
 
    return(
     <div>
        <label className="lable">  Gender</label>
        <select className="formcontrol"id="select"   value={gender} onChange={handleOnselect} handleOnsubmit={handleOnsubmit}  >
          {optionsList.map(({value,text})=>(
            <option value={value}  >{text}</option>
            
         
          ))}
          
        </select></div>
        
    
  
    )
}
export default Multiple;
 