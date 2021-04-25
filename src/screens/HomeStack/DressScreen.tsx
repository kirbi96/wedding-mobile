import React, {useEffect} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import HeaderBack from "../../components/HeaderBack/HeaderBack";
import Title from "../../components/Title/Title";
import ItemCard from "../../components/ItemCard/ItemCard";
import {observer} from "mobx-react";
import {useStores} from "../../hooks/use-stores";
import Loader from "../../components/ui/Loader";
import {Colors} from "../../styles/Colors";

const DressScreen = observer(() => {
  const {organizationStore, userStore} = useStores()
  const {getDressOrganizations, organizationList, goToShop, organizationListLoader} = organizationStore

  useEffect(() => {
    getDressOrganizations(userStore.userInfo?.personal?.city || "")
  }, [])

  if (organizationListLoader) {
    return <Loader/>
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <HeaderBack/>
      {!userStore.userInfo?.personal?.city && (
        <Text style={styles.noCity}>
          Для более точного поиска выберите город в профиле
        </Text>
      )}
      <Title title="Свадебные платья"/>

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
          К сожалению организаций по вашему городу еще нет... {"\n"}
          Мы активно работаем над расширением базы данных
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
  noCity:{
    color: Colors.RED
  },
  noOrg: {
    color: Colors.MEDIUM_GRAY,
    lineHeight: 20,
  }
})

export default DressScreen
