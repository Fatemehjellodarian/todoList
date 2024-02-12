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

  if ( scrollType === "scrollWithRef") {
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

  return;
};


// function isPrimitive(behavior) {
//   if (typeof behavior === "smooth") {
    
//   }
//   // return behavior ===  "smooth" || typeof behavior === "instance" &&
//   //   typeof behavior === "auto";
    
// }

