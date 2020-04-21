import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import Result from '../components/Result'

const ResultList = ({title, results, navigation})=>{
    if(!results.length) return null;
    return <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result)=>result.id}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate('ResultDetailsScreen', {id: item.id})}>
                        <Result result={item}/>
                    </TouchableOpacity>)
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    containerStyle:{
        marginBottom: 20
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(ResultList);