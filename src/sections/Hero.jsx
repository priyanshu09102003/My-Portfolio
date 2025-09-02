import { words } from "../constants"

const Hero = () => {
  return (
    <section id="hero" className='relative overflow-hidden'>

        <div className='absolute top-0 left-0 z-10'>

            <img src="/images/bg.png" alt="background" />
        </div>

        <div className='hero-layout'>

            {/* Hero Content */}

            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">

                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h2>Shaping 
                            
                            <span className="slide">
                                <span className="wrapper">

                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">

                                            <img src={word.imgPath} alt={word.text} 
                                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                            />

                                            <span>{word.text}</span>

                                        </span>
                                    ))}

                                </span>

                            </span>
                        </h2>
                        <h2>into <span className="abstract-text abstract-projects">Real Projects</span></h2>
                        <h2><span className="stellar-results abstract-text">that Deliver Results</span></h2>
                    </div>

                </div>
                
            </header>



            {/* 3D model */}

        </div>

    </section>
  )
}

export default Hero
