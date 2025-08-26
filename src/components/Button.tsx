
// const Button = () =>  {
//     const ButtonTitle: ()=> JSX.Element=()=> {
//         const availableMoney :number= 1001;
//         const text :string= availableMoney > 1000 ?"more than 1000":"less than 1000";

import { useState } from "react";

        
//         return <h3>{text}</h3>
//     };
//   return (
//      <button onClick={() => alert("you have clicked")}>
//           <ButtonTitle/>
//         </button>
//   )
// }

type ButtonProp={
    title:string;
    onClick?:()=> void;
    disabled?: boolean;
    onChange?:(id:number)=>void;
    objArr?: ObjArr[];
};
interface ObjArr{
        id:string;
        title:string;
    }
export function Button ({title,onClick}:ButtonProp):JSX.Element{
    const [counter,setCounter]=useState<number>(0);

    function handlClick(){
        onClick();
        setCounter(counter + 1);
    }
    return(
          <button onClick={handlClick}>
              {title} 
              <br/> number of clicks :{counter}
         </button>
    );
}

// export default Button
