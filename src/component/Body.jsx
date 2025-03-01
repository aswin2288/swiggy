import { useState } from "react";
import HotelCard from "./hotelcard";

function Body(){
    const details=
    [
    {  
        id:1,
        name:"one",
        img:"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/12/3/37ba11cc-4aa4-4016-b6a8-be03608ee4ea_image3ce83e18d4de74becbcdf2d05bb21404e.JPG",
        para:"lorem10fjdjkfdjfd"
    },
    {
        id:2,
        name:"TWO",
        img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
        para:"fddfddndknfkd"
    },
    {
        id:3,
        name:"three",
        img:"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/12/3/37ba11cc-4aa4-4016-b6a8-be03608ee4ea_image3ce83e18d4de74becbcdf2d05bb21404e.JPG",
        para:"lorem10fjdjkfdjfd" 
    }
    ]
    
// const [number,setNumber]=useState(0)
const [filteredData,setFilteredData]=useState(details)
const [input,setInput]=useState("")





function handleInput(e){
  setInput(e.target.value);


// console.log(inputvalue)
}


// function increment(){
//   setNumber(number+1)
// }


function handleSubmit(){
    if(input.trim()===""){
        setFilteredData(details)
        return
    }
   let newData= details.filter((item)=>item.name.toUpperCase()===input.toUpperCase())
   setFilteredData(newData)
}

    return (
        <div>
            <h1>Discover best restaurants on Dineout</h1>
            <input type="text" className="border-3 p-2 ml-10 mb-10" onChange={handleInput}/>
            <button className="border-3 m-5 p-2 bg-gray-500" onClick={handleSubmit}>search</button>
             
<div className="flex flex-wrap">

{
    filteredData.map((item)=>{
        return (
            <HotelCard key={item.id} details={item}/>
        )
    })
}
{/* <p>input vale  {number}</p>
<button onClick={increment} className="border-2">increament</button> */}
</div>

        </div>
    )

}

export default Body;