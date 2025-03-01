import HotelCard from "./hotelcard";

function Body(){

const details=
[
{
    name:"1st one",
    img:"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/12/3/37ba11cc-4aa4-4016-b6a8-be03608ee4ea_image3ce83e18d4de74becbcdf2d05bb21404e.JPG",
    para:"lorem10fjdjkfdjfd"
},
{
    name:"2st one",
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    para:"fddfddndknfkd"
},
{
    name:"3st one",
    img:"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/12/3/37ba11cc-4aa4-4016-b6a8-be03608ee4ea_image3ce83e18d4de74becbcdf2d05bb21404e.JPG",
    para:"lorem10fjdjkfdjfd" 
}
]

    return (
        <div>
            <h1>Discover best restaurants on Dineout</h1>
<div className="flex flex-wrap
">

{
    details.map(item=>
        <HotelCard details={item}/>
    )
}
</div>

        </div>
    )

}

export default Body;