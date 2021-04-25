import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Colors} from "../../styles/Colors";
import NavigationService from "../../navigation/NavigationService";
import Screens from "../../navigation/Screens";


export const CustomCitySearch = () => {
  return (
    <>
      <Text style={styles.label}>Укажите город</Text>
      <TouchableOpacity onPress={() => NavigationService.navigate(Screens.CITY)}
                        style={styles.inputContainer}>
        <View style={styles.input}>
          <Text style={styles.dateText}>
            {'Не выбрано'}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  )
}


const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    fontSize: 16,
    borderColor: Colors.BLUE_DARK,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15
  },
  dateText: {
    fontSize: 16,
    paddingVertical: 14
  },
  label: {
    marginTop: 15,
    color: Colors.BLUE_DARK,
    fontSize: 12,
    marginLeft: 15,
    paddingBottom: 2,
  },
})
