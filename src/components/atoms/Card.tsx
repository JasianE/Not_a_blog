import React from "react";

type CardProps = {
    title: string,
    img: string,
    description: string
}

function Card(data: CardProps) {
    console.log(data)
    
    return (
        <div className="mt-8">
            <a
            className="block w-full max-w-md mx-auto bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden 
                        hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-700"
            href="#"
            >

            {/* Image wrapper with normal aspect ratio */}
            <div className="w-full h-60 overflow-hidden">
                <img src= {data.img}></img>
            </div>

            {/* Content */}
            <div className="p-4 bg-gray-100 h-30">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-left">
                {data.title}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400 text-left">
                {data.description}
                </p>
            </div>

            </a>
        </div>
    )
}

export default Card;