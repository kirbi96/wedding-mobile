import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image'
import NavigationService from "../../navigation/NavigationService";
import React, {useEffect} from 'react';
import Title from "../../components/Title/Title";
import {observer} from "mobx-react";
import {useStores} from "../../hooks/use-stores";
import LinearGradient from "react-native-linear-gradient";
import Loader from "../../components/ui/Loader";

export const HomeScreen = observer(() => {
  const {organizationStore, userStore, authStore} = useStores()
  const {getCategory, category, categoryLoader} = organizationStore
  const {getUserInfo} = userStore
  const {email} = authStore

  useEffect(() =>{
    getUserInfo(email || '')
    getCategory()
  },[])

  if(categoryLoader){
    return <Loader full={true}/>
  }

  return (
      <ScrollView style={styles.mainContainer}>
        <View style={{marginTop: 20}}>
          <Title title="Главная"/>
        </View>

        <View style={{marginTop: 10}}>
          {category && category.map((card: any) => (
              <TouchableOpacity key={card._id} style={styles.categoryCard} onPress={() =>NavigationService.navigate(card.slug)}>
                <FastImage
                    style={styles.cardImage}
                    source={{
                      uri: card.banner
                    }}
                >
                  <LinearGradient  colors={["transparent", '#534434']} locations={[0.6,1]} style={styles.linearGradient}/>
                </FastImage>
                <Text style={styles.cardName}>{card.name}</Text>
              </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
  )
})

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    paddingHorizontal: 20
  },
  categoryCard: {
    borderRadius: 20,
    maxHeight: 100,
    marginBottom: 15
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  cardName: {
    position: "absolute",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    bottom: 5,
    left: 10
  },
  linearGradient: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
})
