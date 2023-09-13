import { useEffect, useState } from "react"

const useLocalStorage = (key:string,intialValue:string)=>{
    const [value,setValue]=useState(()=>{
        try{
            if(typeof window!=="undefined")
            {
                const item=window.localStorage.getItem(key);
                return item? JSON.parse(item):undefined;
            }
            else return intialValue;
        } catch(error){
            console.log(error);
            return intialValue
        }
    });

    useEffect(()=>{
        try{
          if(typeof window!=='undefined')
          {
            window.localStorage.setItem(key,JSON.stringify(value));
          }
        }catch(error){
            console.error(error);
        }
    },[key,value])

    return [value,setValue];
}
export default useLocalStorage;