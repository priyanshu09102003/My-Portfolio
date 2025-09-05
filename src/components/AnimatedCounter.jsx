import React, { useRef, useEffect, useState } from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup';

const AnimatedCounter = () => {
    const [inView, setInView] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                
                if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            },
            {
                threshold: [0, 0.3, 0.7, 1], 
                rootMargin: '-50px 0px' 
            }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    return (
        <div id="counter" className='padding-x-lg xl:mt-0 mt-32' ref={counterRef}>
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item, index) => (
                    <div key={`${item.label}-${index}`} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center gap-4'>
                        <div className='counter-number text-white text-5xl font-bold mb-2'>
                            <CountUp
                                start={0}
                                end={inView ? item.value : 0}
                                suffix={item.suffix}
                                duration={2.5}
                                delay={index * 0.2} 
                                preserveValue={false} 
                                redraw={true} 
                            />
                        </div>
                        <div className='text-white-50 text-lg font-semibold'>
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimatedCounter