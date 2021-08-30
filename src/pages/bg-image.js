import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"

const GbiBridged = () => {
    const { backgroundImage123 } = useStaticQuery(
        graphql`
            query {
                backgroundImage123: file(relativePath: {eq: "dainamikusu_dark.jpg"}) {
                    childImageSharp {
                    gatsbyImageData(
                        width: 2000,
                        quality: 50,       
                        webpOptions: {quality: 70}
                    )
                    }
                }
            }
        `
    )

    const pluginImage = getImage(backgroundImage123)
    
    return (
        <BgImage image={pluginImage} className="dainamikusu">
            <h1>大波楠
            <br />
            <div className="ruby">だいなみくす</div>
            </h1>
        </BgImage>
    )
}

export default GbiBridged