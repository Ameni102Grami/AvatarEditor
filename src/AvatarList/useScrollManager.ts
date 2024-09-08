import { useState, useRef } from 'react';

// Custom hook to manage scroll amount and handle scrolling
function useScrollManager(scrollContainerRef: React.RefObject<HTMLElement>) {
    const [scrollAmount, setScrollAmount] = useState(400);

    // Function to handle scrolling left
    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: scrollContainerRef.current.scrollLeft - scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Function to handle scrolling right
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
