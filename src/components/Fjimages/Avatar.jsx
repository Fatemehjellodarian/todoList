const Avatar = ({ gender }) => {
    return (
      <>
        {gender === "female" ? (
          <img
            className="image-1"
            src="https://colorlib.com/etc/regform/colorlib-regform-26/images/image-1.png"
            alt=""
          />
        ) : gender === "male" ? (
          <img
            className="image-2"
            width="550px"
            height="550px"
            // style={{
            //   marginRight: "200px",
            // }}
            src="./src/assets/images/man.png"
            alt=""
          ></img>
        ) : null}
      </>
    );
  };
  
  export default Avatar;
  