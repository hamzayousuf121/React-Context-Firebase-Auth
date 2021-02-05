function useTitle (title) {
    return (title) => {
        document.title = title;
    }
}

export default useTitle;