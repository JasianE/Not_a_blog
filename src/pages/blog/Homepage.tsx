import jun from '../../../public/jun.jpg';
function Homepage(){

    //Known bugs:
    // RTK query is only fetching data from project, so when you go to a tab directly it breaks, might wanna fix that? hahha cool tho
    
    return(
        <div className="mt-26">
                <img src={jun} className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg mx-auto block"></img>
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
                    Developing firmware @ Midnight Sun
                </li>
                <li className="mt-2 self-start text-left">
                    Learning Embedded Programming w/ Miro Samek's course! (the goat)
                </li>

                <p className="mt-6 self-start text-left">Thanks for visiting!</p>
        </div>
    )
}

export default Homepage;