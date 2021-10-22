import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 760 430"
    backgroundColor="#565656"
    foregroundColor="#6C6C6C"
  >
    <rect x="0" y="0" rx="2" ry="2" width="760" height="430" />
  </ContentLoader>
)

export default MyLoader