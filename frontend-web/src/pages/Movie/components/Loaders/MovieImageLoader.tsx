import React from "react"
import ContentLoader from "react-content-loader"

const MovieImageLoader = () => {

    return(
        <>
        <ContentLoader 
            speed={1}
            width={500}
            height={320}
            viewBox="0 0 500 320" 
            backgroundColor="#565656"
            foregroundColor="#6C6C6C"

        >
            <rect x="0" y="0" rx="4" ry="4" width="500" height="320" />
        </ContentLoader>
        </>
  
    )
}

export default MovieImageLoader;