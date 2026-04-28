import jun from '../assets/jun.jpg';
function Homepage(){

    return(
        <div className="mt-16 sm:mt-20 lg:mt-26 px-2 sm:px-4">
                <img src={jun} className="h-24 sm:h-28 lg:h-32 w-24 sm:w-28 lg:w-32 rounded-full object-cover border-4 border-white shadow-lg mx-auto block"></img>
                <h1 className='font-semibold text-2xl sm:text-3xl lg:text-4xl mt-4'>Hi, I'm Jun!</h1>
                三三ᕕ( ᐛ )ᕗ
                <h2 className="mt-12 sm:mt-16 lg:mt-16 text-xl sm:text-2xl lg:text-3xl font-semibold">About me</h2>
                
                <p className="mt-6 sm:mt-8 w-full text-left text-sm sm:text-base">
                I'm a CE student at UWaterloo. Looking for F26 internships!
                </p>
                <p className="mt-2 sm:mt-3 w-full text-left text-sm sm:text-base">
                What I'm doing right now:
                </p>
            
                <li className="mt-6 sm:mt-8 self-start text-left text-sm sm:text-base">
                    (Former) Full Stack Dev for CEL @ UWaterloo
                </li>
                <li className="mt-2 self-start text-left text-sm sm:text-base">
                    Developing firmware @ WARG
                </li>
                <li className="mt-2 self-start text-left text-sm sm:text-base">
                    Building pipelines and spinning up servers (also setting up my homelab)
                </li>
                <li className="mt-2 self-start text-left text-sm sm:text-base">
                    Getting better at embedded programming! 
                </li>

                <p className="mt-4 sm:mt-6 self-start text-left text-sm sm:text-base">Thanks for visiting!</p>
        </div>
    )
}

export default Homepage;