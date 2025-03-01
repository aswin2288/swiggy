function HotelCard(props){
    console.log(props.details)
    return (
       
         <div>
                <img src={props.details.img} width="300px" height="150px" alt="" />
                 <h1>{props.details.name}</h1>
                 <h2>{props.details.para}</h2>
                 <p><span className="text-green-500">Open now</span> OPEN TILL 11PM</p>
            
            </div>
    )
}

export default HotelCard;