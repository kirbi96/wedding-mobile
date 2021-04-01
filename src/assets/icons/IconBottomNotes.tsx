import * as React from "react"
import Svg, {Path} from "react-native-svg"


interface IProps {
    color?: string
}

const IconBottomNotes = ({color}: IProps) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill={color}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.318 4.966c.91-.91.908-2.381 0-3.29a2.337 2.337 0 00-3.289 0L2.106 18.604a.488.488 0 00-.134.21l-.957 3.589a.483.483 0 00.583.583l3.588-.957a.488.488 0 00.21-.135L22.317 4.966zm-19.45 14.22l1.944 1.945L21.257 4.682l-1.944-1.944L2.87 19.187z"
                fill={color}
            />
        </Svg>
    )
}

export default IconBottomNotes
