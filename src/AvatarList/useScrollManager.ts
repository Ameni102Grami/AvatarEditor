import { useState, useRef } from 'react';


function useScrollManager(scrollContainerRef: React.RefObject<HTMLElement>) {
    const [scrollAmount, setScrollAmount] = useState(400);

  
    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: scrollContainerRef.current.scrollLeft - scrollAmount,
                behavior: 'smooth'
            });
        }
    };


    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: scrollContainerRef.current.scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return { scrollAmount, handleScrollLeft, handleScrollRight };
}

export default useScrollManager;
