import DefinitionTooltip from "../../components/atoms/DefinitionTooltip";

function Now(){
    return(
        <div className="px-2 sm:px-4">
            <h1 className="text-left mt-16 sm:mt-24 lg:mt-32 text-2xl sm:text-3xl lg:text-4xl">
                Now
            </h1>

            <h2 className="text-left text-base sm:text-lg lg:text-xl mt-4 sm:mt-6">
                Last updated: 4/27/2026
            </h2>
            <li className="text-left mt-6 sm:mt-8 max-w-sm sm:max-w-2xl break-words text-sm sm:text-base">
                Wrapped up my first ever coop term at CEL! Learned a lot about best practices in React, .NET, and CI/CD pipelines.
            </li>
            <li className="text-left mt-2 sm:mt-3 max-w-sm sm:max-w-2xl break-words text-sm sm:text-base">
                Finished Jazz band and had a BLAST at <DefinitionTooltip
              term="EOT"
              definition="Our end of term concert!"
            />{" "} (and the after party! :D)
            </li>
            <li className="text-left mt-2 sm:mt-3 max-w-sm sm:max-w-2xl break-words text-sm sm:text-base">
                Hit 1000+ pounds accross squat (375), bench (225) deadlift (420)! 
            </li>
            <li className="text-left mt-2 sm:mt-3 max-w-sm sm:max-w-2xl break-words text-sm sm:text-base">
                Placed top 8 for the first time at my local <DefinitionTooltip
              term="smash"
              definition="I main piranha plant but ended up getting top 8 with DK 😭"
            />{" "} weekly! 
            </li>
            
            <li className="text-left mt-2 sm:mt-3 max-w-sm sm:max-w-2xl break-words text-sm sm:text-base">
                Finished writing a custom barometer driver w/ hard real time constraints over I2C and using DMA! (After weeks of <DefinitionTooltip
              term="painful debugging"
              definition="A race condition on init that made debugging impossible (worked half the time??), I2C timing configuration issues, DMA not wanting to work! :DD "
            />{" "}) 
            </li>
            <li className="text-left mt-2 sm:mt-3 max-w-sm sm:max-w-2xl break-words text-sm sm:text-base">
                Validating and integrating an IMU on one of our custom boards! (Currently undergoing <DefinitionTooltip
              term="painful debugging"
              definition="OpenOCD setup errors, hardfault errors that require full STM32 resets, weird SPI communication errors."
            />{" "}) 
            </li>
            <li className="text-left mt-2 sm:mt-3 max-w-sm sm:max-w-2xl break-words text-sm sm:text-base">
                Leetcoding (...more sucessfully!)
            </li>
            <li className="text-left mt-2 sm:mt-3 max-w-sm sm:max-w-2xl break-words text-sm sm:text-base">
                Practicing embedded and learning more about the ecosystem (so much to learn... ! :D)
            </li>

            <h2 className="mt-6">To a fun and challenging 1B term!</h2>

            <div className="my-8 flex items-center gap-3" aria-hidden="true">
                <span className="h-px flex-1 bg-gray-300 dark:bg-neutral-700" />
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-neutral-400">Previous updates</span>
                <span className="h-px flex-1 bg-gray-300 dark:bg-neutral-700" />
            </div>

            <h2 className="text-left">
                Last Updated: 1/16/2026
            </h2>
            <li className="text-left mt-8 max-w-sm break-words">
                Going to Jazz band (fun!)
            </li>
            <li className="text-left mt-2 max-w-sm break-words">
                Playing lots of badminton (fun!!)
            </li>
            <li className="text-left mt-2 max-w-sm break-words">
                Leetcoding (...)
            </li>
            <li className="text-left mt-2 max-w-sm break-words">
                Learning embedded (...fun!)
            </li>

            <h2 className="mt-6">To a fun and productive co-op term!</h2>
            
        </div>
    )
}

export default Now;