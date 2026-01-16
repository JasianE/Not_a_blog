import React from 'react';
import CardDropDown from '../../components/molecules/CardDropDown';
import type { CardProps } from '../../components/molecules/CardDropDown';
import { useGetProjectsQuery } from '../../app/slices/projects/projectApi';


function Homepage(){
    const {data, isLoading, isError, error} = useGetProjectsQuery();

    //Known bugs:
    // RTK query is only fetching data from project, so when you go to a tab directly it breaks, might wanna fix that? hahha cool tho
    
    return(
        <div className="mt-26">
                <img src='https://ssb.wiki.gallery/images/thumb/9/9e/ESAM_with_Pikachu.jpg/1200px-ESAM_with_Pikachu.jpg' className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg mx-auto block"></img>
                <h1 className='font-semibold'>Hi, I'm Jun!</h1>
                三三ᕕ( ᐛ )ᕗ
                <h2 className="mt-16 text-3xl font-semibold">About me</h2>
                
                <p className="mt-8 w-full text-left">
                I'm a CE student at UWaterloo. Looking for F26 internships!
                </p>
                <p className="mt-3 w-full text-left">
                What I'm doing right now:
                </p>
            
                <li className="mt-8 self-start text-left">
                    Full Stack Dev for CEL @ UWaterloo
                </li>
                <li className="mt-2 self-start text-left">
                    Developing embedded flight software @ WARG
                </li>
                <li className="mt-2 self-start text-left">
                    Learning STM32!
                </li>

                <p className="mt-6 self-start text-left">Thanks for visiting!</p>

                <h1 className='mt-30'>Featured Projects</h1>
                <CardDropDown data={data as CardProps[]} isLoading={isLoading} isError={isError} />
        </div>
    )
}

export default Homepage;