import React, {useEffect} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import HeaderBack from "../../components/HeaderBack/HeaderBack";
import Title from "../../components/Title/Title";
import ItemCard from "../../components/ItemCard/ItemCard";
import {useStores} from "../../hooks/use-stores";
import {observer} from "mobx-react";
import Loader from "../../components/ui/Loader";
import {Colors} from "../../styles/Colors";

const PhotoScreen = observer(() => {
  const {organizationStore, userStore} = useStores()
  const {getPhotoOrganizations, organizationList, goToShop, organizationListLoader} = organizationStore

  useEffect(() => {
    getPhotoOrganizations(userStore.userInfo?.personal?.city || "")
  }, [])

  if (organizationListLoader) {
    return <Loader/>
  }

  return (
    <ScrollView style={styles.mainContainer}>

      {!userStore.userInfo?.personal?.city && (
        <Text style={styles.noCity}>
          Для более точного поиска выберите город в профиле
        </Text>
      )}

      <HeaderBack/>
      <Title title="Фото и Видео"/>
      {organizationList && organizationList.map((item: any) => (
        <View key={item._id}>
          <ItemCard
            id={item._id}
            banner={item.banner}
            name={item.name}
            rating={item.rating}
            onVisit={() => goToShop(item._id)}
          />
        </View>
      ))}

      {organizationList.length < 1 && (
        <Text style={styles.noOrg}>
          К сожалению фотографов по вашему городу еще нет... {"\n"}
          Мы активно работаем над расширением базы данных {"\n"}
          Попробуйте выбрать Город: "Вся Россия"
        </Text>
      )}

    </ScrollView>
  )
})

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20
  },
  noCity: {
    color: Colors.RED
  },
  noOrg: {
    color: Colors.MEDIUM_GRAY,
    lineHeight: 20,
  }
})

export default PhotoScreen
