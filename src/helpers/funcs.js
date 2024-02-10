export const idGenerator = () => Math.floor(Math.random() * 1000);

export const scrollWithParams = ({ container, top, behavior }) => {
  container.current.scrollTo({
    top: top,
    behavior: behavior,
  });
};
// export const scrollWithId = ({behavior})=>{
//  document.getElementById("notes").scrollIntoView({behavior:behavior});

// }
// export const scrollWithRef = ({container,behavior,block})=>{
//     container.current.scrollIntoView({ behavior:behavior, block: block });
// }
