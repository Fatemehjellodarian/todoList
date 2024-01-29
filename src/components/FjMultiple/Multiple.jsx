 export const Multiple = ({gender,handleOnselect,handleOnsubmit})=>{
    return(
     <div>
        <label className="lable"> Chose a option</label>
        <select className="formcontrol"id="select"   value={gender} onChange={handleOnselect} handleOnsubmit={handleOnsubmit}  >
            <option value="gender">gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
        </select></div>
        
    
  
    )
}
 