export const idGenerator = () => Math.floor(Math.random() * 1000);

 export const scrollWithParams = ({ container, top, behavior }) => {
   container.current.scrollTo({ top: top, behavior: behavior });
 };

 export const scrollWithId = ({ behavior }) => {
   document.getElementById("notes").scrollIntoView({ behavior: behavior });
 };

 export const scrollWithRef = ({ container, behavior, block }) => {
   container.current.scrollIntoView({ behavior: behavior, block: block });
 };

 export const scrollStatus = (listLength) => {
   if (listLength === 0) return 0;
   if (listLength === 1) return 450;
   if (listLength > 1) return 450 + (listLength - 1) * 300;
 };

//  export const scrollingMethods = ({
//   container,
//   top,
//   behavior,
//   block,
//   listLength,
// }) => {
//   if (container && top && behavior) {
//     scrollWithParams({ container, top, behavior });
//   }

//   if (behavior) {
//     scrollWithId({ behavior });
//   }

//   if (container && behavior && block) {
//     scrollWithRef({ container, behavior, block });
//   }

//   return scrollStatus(listLength);
// };


    //  scrollWithRef({container, block:"end" ,behavior:"smooth"});
    //   scrollStatus(container.current.scrollTo(0,scrollStatus(list?.length)));
    //   scrollWithParams({
    //     container,
    //     top: container.current.scrollHeight,
    //     behavior: "smooth",
    //   });


    // const scrollingMethods = () => {
    //   if (container.current) {
    //     container.current.scrollTo({
    //       top: container.current.scrollHeight,
    //       behavior: "smooth",
    //     });
    //   }
  
    //   if (behavior) {
    //     document.getElementById("notes").scrollIntoView({ behavior: "smooth" });
    //   }
  
    //   if (behavior && block && container.current) {
    //     container.current.scrollIntoView({
    //       container,
    //       block: "end",
    //       behavior: "smooth",
    //     });
    //   }
  
    //   if (container.current && listLength) {
    //     if (listLength === 0) return 0;
    //     if (listLength === 1) return 450;
    //     if (listLength > 1) return 450 + (listLength - 1) * 300;
    //   }
    // };


