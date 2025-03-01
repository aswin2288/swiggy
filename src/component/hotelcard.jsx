function HotelCard(props){
    // console.log(props.details)
    return (
        <div className="flex pl-4">
            <div className="flex flex-col ">
            <img src={props.details.img} alt="" width="300px" height="300px"/>
            <h1>{props.details.name}</h1>
            <h2>{props.details.para}</h2>
            </div>

        </div>
    )
}

export default HotelCard;