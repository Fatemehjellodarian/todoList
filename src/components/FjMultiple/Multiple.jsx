
const Multiple = ({ gender, handleOnselect, handleOnsubmit }) => {
  // const projectPhotos = 
  //   [photo:
  //     {firstProjectPhoto:<img className="image-1" src="https://colorlib.com/etc/regform/colorlib-regform-26/images/image-1.png" alt=""/>},
  //     {secondProjectPhoto: <img className="image-1" src="./src/assets/360_F_113995750_dAEGvjqxnsYD6asKjeDWJoVoSqjFvdGO-removebg-preview.png" alt=""></img>}
  //   }
  // ];
   

  const optionsList = [
    {value:"gender", text:"gender",},
    { value: "female", text: "female"},
    { value: "male", text: "male"},
  ];

  return (
    <div  >
       <label className="lable">click here</label>
      <select
        className="formcontrol"
        id="select"
        value={gender}
        onChange={handleOnselect}
        handleOnsubmit={handleOnsubmit}
       
      > 
        {optionsList.map(({ value, text,}) => (
          <option  value={value}>{text}</option>
         
        ))}
        
      </select> 
    
    </div>
  );
};
export default Multiple;




// import React, { useState } from 'react';
// import Select from 'react-select';

// const options = [
//   { value: 'female', text: 'female' },
//   { value: 'male', text: 'male' },

// ];

// const Multiple = ({ gender,handleOnselect, handleOnsubmit }) =>{
//   // const [selectedOption, setSelectedOption] = useState(null);
  

//   return (
 
//       <Select
//        handleOnsubmit={handleOnsubmit}
//         defaultValue={gender}
//         onChange={handleOnselect}
//         options={options}
//       />
 
//   );
// }
// export default Multiple;
