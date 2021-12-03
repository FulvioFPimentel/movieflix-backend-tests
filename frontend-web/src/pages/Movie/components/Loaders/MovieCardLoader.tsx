import React from "react"
import ContentLoader from "react-content-loader"

const MovieCardLoader = () => {
    const loaderItems = [0, 1, 2];

    return (
        <>
            {loaderItems.map(items => (
                <ContentLoader 
                    speed={1}
                    width="100%"
                    height="100%"
                    viewBox="0 0 260 325"
                    backgroundColor="#565656"
                    foregroundColor="#6C6C6C"
                >
                    <rect x="0" y="0" rx="4" ry="4" width="260" height="325" />
                </ContentLoader>
            ))}

        </>
  
)}

export default MovieCardLoader;