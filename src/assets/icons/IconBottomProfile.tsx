import * as React from "react"
import Svg, {Path} from "react-native-svg"

interface IIcon {
  color?: string;
}

const IconBottomProfile = (props: IIcon) => {
  const {color} = props

  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={color || "#000000"}
    >
      <Path
        d="M15.12 11.468c2.01-2.378 2.177-8.067-.743-9.82C12.959.794 11.055.78 9.632 1.63c-2.94 1.748-2.791 7.446-.769 9.838 1.57 1.864 4.69 1.85 6.256 0zM10.09 2.77c1.088-.73 2.69-.716 3.782 0 2.117 1.39 1.787 6.215.375 7.883-1.115 1.317-3.398 1.326-4.51 0-1.517-1.787-1.795-6.444.352-7.883z"
        fill={color || "#000000"}
      />
      <Path
        d="M18.94 14.665c-1.258-.44-2.569-.887-3.647-1.735-.618-.457-1.291.55-.673 1.006.074.055 1.802 1.317 3.964 1.9 1.344.502 1.305 2.825 1.067 4.071-.703.42-3.46 1.868-7.653 1.868-4.177 0-6.95-1.453-7.658-1.872-.241-1.262-.313-3.556 1.068-4.072 2.162-.583 3.89-1.85 3.963-1.9.618-.456-.055-1.462-.673-1.006-1.08.85-2.387 1.295-3.646 1.736-1.961.706-2.45 4.02-1.75 5.875a.579.579 0 00.226.287c.13.091 3.251 2.177 8.474 2.177 5.223 0 8.344-2.09 8.474-2.177a.604.604 0 00.226-.287c.677-1.89.245-5.153-1.763-5.87z"
        fill={color || "#000000"}
      />
    </Svg>
  )
}

export default IconBottomProfile
