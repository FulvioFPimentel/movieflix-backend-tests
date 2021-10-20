import React from "react"
import ContentLoader from "react-content-loader"

const MovieDescriptionLoader = () => (
    <ContentLoader 
    speed={1}
    width={510}
    height={400}
    viewBox="0 0 510 400"
    backgroundColor="#565656"
    foregroundColor="#6C6C6C"
  >
    <rect x="0" y="0" rx="2" ry="2" width="320" height="45" /> 
    <rect x="5" y="64" rx="2" ry="2" width="76" height="31" /> 
    <rect x="5" y="105" rx="0" ry="0" width="1072" height="20" /> 
    <rect x="5" y="131" rx="0" ry="0" width="565" height="20" />
    <rect x="5" y="150" rx="0" ry="0" width="565" height="165" />
  </ContentLoader>
)

export default MovieDescriptionLoader;