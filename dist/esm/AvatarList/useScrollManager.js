"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// Custom hook to manage scroll amount and handle scrolling
function useScrollManager(scrollContainerRef) {
    const [scrollAmount, setScrollAmount] = (0, react_1.useState)(400);
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
exports.default = useScrollManager;
//# sourceMappingURL=useScrollManager.js.map