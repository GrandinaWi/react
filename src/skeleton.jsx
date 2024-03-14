import React from "react"
import ContentLoader from "react-content-loader"


const MyLoader = (props) => (
    <ContentLoader
        speed={3}
        width={1920}
        height={130}
        viewBox="0 0 1920 130"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="16" y="9" rx="0" ry="0" width="160" height="67" />
        <rect x="192" y="10" rx="0" ry="0" width="900" height="67" />
    </ContentLoader>
)

export default MyLoader

