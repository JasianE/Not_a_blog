import DefinitionTooltip from "../../components/atoms/DefinitionTooltip";

function Now(){
    return(
        <div>
            <h1 className="text-left mt-32">
                Now
            </h1>

            <h2 className="text-left">
                Last updated: 4/27/2026
            </h2>
            <li className="text-left mt-8 max-w-sm break-words">
                Wrapped up my first ever coop term at CEL! Learned a lot about best practices in React, .NET, and CI/CD pipelines.
            </li>
            <li className="text-left mt-2 max-w-sm break-words">
                Finished Jazz band and had a BLAST at <DefinitionTooltip
              term="EOT"
              definition="Our end of term concert!"
            />{" "} (and the after party! :D)
            </li>
            <li className="text-left mt-2 max-w-sm break-words">
                Hit 1000+ pounds accross squat (375), bench (225) deadlift (420)! 
            </li>
            <li className="text-left mt-2 max-w-sm break-words">
                Placed top 8 for the first time at my local smash weekly! 
            </li>
            
            <li className="text-left mt-2 max-w-sm break-words">
                Finished writing a custom barometer driver w/ hard real time constraints over I2C and using DMA! (After weeks of <DefinitionTooltip
              term="painful debugging"
              definition="A race condition on init that made debugging impossible (worked half the time??), I2C timing configuration issues, DMA not wanting to work! :DD "
            />{" "}) 
            </li>
            <li className="text-left mt-2 max-w-sm break-words">
                Validating and integrating an IMU on one of our custom boards! (Currently undergoing <DefinitionTooltip
              term="painful debugging"
              definition="OpenOCD setup errors, hardfault errors that require full STM32 resets, weird SPI communication errors."
            />{" "}) 
            </li>
            <li className="text-left mt-2 max-w-sm break-words">
                Leetcoding (...more sucessfully!)
            </li>
            <li className="text-left mt-2 max-w-sm break-words">
                Practicing embedded and learning more about the ecosystem (so much to learn... ! :D)
            </li>

            <h2 className="mt-6">To a fun and challenging 1B term!</h2>

            <h2 className="mt-6">-----------------------------------------------------------------------------------------</h2>

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