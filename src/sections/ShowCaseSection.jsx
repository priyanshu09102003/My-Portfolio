import React from 'react'

const ShowCaseSection = () => {
  return (
    <div id='work' className='app-showcase'>
      <div className='w-full'>

        <div className="showcaselayout">
            {/* LEFT */}

            <div className="first-project-wrapper">
                <a href="#">
                    <div className="image-wrapper">
                    <img src="/images/project1.png" alt="Project 1" />
                    </div>
                </a>

                <div className='text-content'>

                    <h2>On-Demand Job Hunting Made Simple with a Powerful, User-Friendly app called SensAI</h2>

                    <p className='text-white-50 md:text-xl'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, deleniti?
                    </p>

                   <a href="#">
                     <button class="
                        bg-blue-600 
                        hover:bg-blue-700 
                        text-white 
                        font-semibold 
                        py-3 
                        px-8 
                        rounded-full 
                        transition-all 
                        duration-300 
                        ease-in-out 
                        transform 
                        hover:scale-105 
                        hover:shadow-lg 
                        active:scale-95 
                        focus:outline-none 
                        focus:ring-4 
                        focus:ring-blue-300 
                        focus:ring-opacity-50
                        cursor-pointer
                    ">Project Description</button>
                   </a>
                </div>
               
            </div>



            {/* RIGHT */}
        </div>

      </div>
    </div>
  )
}

export default ShowCaseSection
