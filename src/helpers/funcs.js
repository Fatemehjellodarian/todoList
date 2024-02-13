// export const idGenerator = () => Math.floor(Math.random() * 1000);

// export const scrollToLastItem = ({
//   container,
//   scrollType,
//   behavior,
//   listLength,
// }) => {
//   const scrollStatusCalc = (listLength) => {
//     if (listLength === 0) return 0;
//     if (listLength === 1) return 450;
//     if (listLength > 1) return 450 + (listLength - 1) * 300;
//   };
//   if (
//     scrollType === "scrollWithRef" ||
//     scrollType === "scrollWithId" ||
//     scrollType === "scrollWithParams"
//   ) {
//     if (scrollType === "scrollWithRef") {
//       container.current.scrollIntoView({
//         behavior,
//         block: "end",
//         inline: "end",
//       });
//     }

//     if (scrollType === "scrollWithId") {
//       document.getElementById("notes").scrollIntoView({ behavior });
//     }

//     if (scrollType === "scrollWithParams") {
//       container.current.scrollTo({
//         behavior,
//         top: scrollStatusCalc(listLength),
//         left: 0,
//       });
//     }
//   } else {
//     console.log("تایپ مناسب نمی باشد");
//   }
//   if(typeof listLength !=="number"){
//    console.log(" listLength عدد نیس")
//   }
//   if (behavior !== "smooth" && behavior !== "instance" && behavior !== "auto") {
//     return console.log(" behavior مناسب نیس");
//   }
 

//   return;
// };



export const idGenerator = () => Math.floor(Math.random() * 1000);

export const scrollToLastItem = ({
  container,
  scrollType,
  behavior,
  listLength,
}) => {
  const scrollStatusCalc = (listLength) => {
    if (listLength === 0) return 0;
    if (listLength === 1) return 450;
    if (listLength > 1) return 450 + (listLength - 1) * 300;
  };
  if (
    scrollType === "scrollWithRef" ||
    scrollType === "scrollWithId" ||
    scrollType === "scrollWithParams"
  ) {
    if (scrollType === "scrollWithRef") {
      container.current.scrollIntoView({
        behavior,
        block: "end",
        inline: "end",
      });
    }

    if (scrollType === "scrollWithId") {
      document.getElementById("notes").scrollIntoView({ behavior });
    }

    if (scrollType === "scrollWithParams") {
      container.current.scrollTo({
        behavior,
        top: scrollStatusCalc(listLength),
        left: 0,
      });
    }
  } else {
   
    throw Error ("type error")
  }
  if(typeof listLength !=="number"){
    throw Error ("listLength not a number")

  }
  if (behavior !== "smooth" && behavior !== "instance" && behavior !== "auto") {
     throw Error ("behavior not good")
  }
 

  return;
};
