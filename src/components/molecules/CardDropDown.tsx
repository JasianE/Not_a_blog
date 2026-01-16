import React from "react";
import Card from "../atoms/Card";

export type CardDropDownProps = {
    img: string,
    title: string,
    description: string
};


function CardDropDown(Cards : CardDropDownProps[],) {
    const {data, isLoading, isError} = Cards;
    

    return(
        <div className="mt-12">
            {isLoading ? <p>Loading...</p> :
            data.map((item) => {
                return <Card title={item.title} description = {item.description} img = {item.img}/>
            })
            }
        </div>
    )
}

export default CardDropDown;