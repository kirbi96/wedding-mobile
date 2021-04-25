import React from "react";
import {Text} from "react-native";
import {Colors} from "../../styles/Colors";

interface IProps {
    title: string;
    bottom?: number;
}

const Title = ({title, bottom}:IProps) =>{
    return(
        <Text style={{fontSize: 26, fontWeight: "bold", color:Colors.BLUE_DARK, marginBottom: bottom ? bottom : 20}}>
            {title}
        </Text>
    )
}

export default Title
