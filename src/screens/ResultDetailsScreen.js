import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet,FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultDetailsScreen = ({navigation})=>{
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null)
    const getResult = async(id)=>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(() => {
        getResult(id)
    }, []);
    if(!result) return null;
    return <View>
        <Text>{result.name}</Text>
        <FlatList 
            keyExtractor={photo=>photo}
            data={result.photos}
            renderItem={({item})=>
                <Image style={styles.imageStyle} source={{uri: item}}/>
            }
            />
    </View>
}

const styles = StyleSheet.create({
    imageStyle:{
        height:200,
        width: 300
    }
})

export default ResultDetailsScreen;