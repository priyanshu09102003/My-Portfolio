import AnimatedCounter from "../components/AnimatedCounter"
import Button from "../components/Button"
import HeroExperience from "../components/HeroModels/HeroExperience"
import { words } from "../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Hero = () => {

    useGSAP(() => {
        gsap.fromTo('.hero-text h1' ,
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            }
        )
    })
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
                        <h1>Shaping 
                            
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
                        </h1>

                       


                        <h1>into <span className="abstract-text abstract-projects">Real Projects</span></h1>
                       <h1><span className="stellar-results abstract-text">that Deliver </span>{" "}<span className="glitch-results " data-text="Results">Results</span> </h1>
                    </div>


                     <p className="text-gray-400 md:text-xl relative z-10 pointer-events-none lg:w-[50%]">

                            Hi, I'm Priyanshu. A full-stack developer passionate about <b>problem-solving</b>, <b>system design</b>, and building with <b>Generative AI</b>.
                            
                    </p>
                     
                  <div className="flex flex-col lg:flex-row md:flex-row gap-6">

                    <Button
                    className = "md:w-80 md:h-16 w-60 h-12"
                    id = "button"
                    text = "See my Work"
                    />

                    <Button
                    className = "md:w-80 md:h-16 w-60 h-12"
                    id = "button"
                    text = "Download CV"
                    />

   
                  </div>


                </div>
                
            </header>



            {/* 3D model */}

            <figure>

                <div className="hero-3d-layout cursor-grab">

                    <HeroExperience />
                    
                </div>
            </figure>

        </div>


        <AnimatedCounter />

    </section>
  )
}

export default Hero
