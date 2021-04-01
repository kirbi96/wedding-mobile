import React from "react";
import {Text} from "react-native";
import {Colors} from "../../styles/Colors";

interface IProps {
    title: string
}

const Title = ({title}:IProps) =>{
    return(
        <Text style={{fontSize: 26, fontWeight: "bold", color:Colors.BLUE_DARK, paddingBottom: 20}}>
            {title}
        </Text>
    )
}

export default Title
