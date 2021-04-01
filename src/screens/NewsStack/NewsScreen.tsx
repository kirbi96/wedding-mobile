import React, {useEffect} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import Title from "../../components/Title/Title";
import NewsCard from "../../components/NewsCard/NewsCard";
import {useStores} from "../../hooks/use-stores";
import Loader from "../../components/ui/Loader";
import {observer} from "mobx-react";

export interface INews {
    _id: string | number;
    name: string;
    description: string;
    banner: string;
}

const NewsScreen = observer(() => {
    const {newsStore} = useStores()
    const {getAllNews, allNews, loadingNews, goToNews} = newsStore;

    useEffect(() =>{
        getAllNews()
    },[])

    if(loadingNews){
        return <Loader/>
    }

    return(
        <ScrollView style={styles.mainContainer}>
            <View style={{marginTop: 20}}>
                <Title title="Новости"/>
                {allNews?.map((item: INews) =>(
                    <View key={item._id}>
                        <NewsCard
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            banner={item.banner}
                            onVisit={() => goToNews(item)}
                        />
                    </View>
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
})

export default NewsScreen
