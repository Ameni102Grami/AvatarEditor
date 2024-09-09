declare function useScrollManager(scrollContainerRef: React.RefObject<HTMLElement>): {
    scrollAmount: number;
    handleScrollLeft: () => void;
    handleScrollRight: () => void;
};
export default useScrollManager;
