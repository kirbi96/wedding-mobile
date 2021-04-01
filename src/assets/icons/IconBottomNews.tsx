import * as React from "react"
import Svg, {Path} from "react-native-svg"

const IconBottomNews = () => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="#000000"
        >
            <Path opacity={0.01} fill="#29406C" d="M0 0h24v24H0z" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 3H3a1 1 0 00-1 1v3a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1zM4 6V5h16v1H4zm17 4H3a1 1 0 00-1 1v3a1 1 0 001 1h18a1 1 0 001-1v-3a1 1 0 00-1-1zM4 13v-1h16v1H4zm-1 4h18a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-3a1 1 0 011-1zm1 2v1h16v-1H4z"
                fill="#000000"
            />
        </Svg>
    )
}

export default IconBottomNews
