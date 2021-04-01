import * as React from "react"
import Svg, {Path} from "react-native-svg"

const IconMySite = () => {
    return (
        <Svg
            height={45}
            viewBox="0 0 24 24"
            width={35}
            fill={"#000"}
        >
            <Path fill={"#000"} d="M21 1H3C1.346 1 0 2.346 0 4v16c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3zm0 20H3c-.551 0-1-.448-1-1V6h20v14c0 .552-.449 1-1 1z" />
            <Path fill={"#000"} d="M15.782 20H8.218A1.219 1.219 0 017 18.783V15H5.5a.5.5 0 01-.339-.867l6.5-6a.5.5 0 01.678 0L14 9.663V8.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3.928l1.85 1.705a.5.5 0 01-.339.867H17v3.783c0 .671-.546 1.217-1.218 1.217z" />
        </Svg>
    )
}

export default IconMySite
