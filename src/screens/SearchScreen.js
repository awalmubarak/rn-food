import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResultsState from '../hooks/useResultsState'
import ResultsList from '../components/ResultsList'
import { ScrollView } from 'react-native-gesture-handler'

const SearchScreen = () =>{
    const [term, setTerm] = useState("");
    const [searchApi, results, errorOccured] = useResultsState();

    const filterResultsByPrice = (price)=>{
        return results.filter((e) => e.price===price)
    }
    return <>
        <SearchBar term={term} 
            onTermChange={setTerm}
            onTermSubmit={searchApi}
        />
        {errorOccured && <Text> Something Went Wrong. Try Again</Text>}
        <ScrollView>
        <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}/>
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')}/>
        <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')}/>
        </ScrollView>
    </>
}

const styles = StyleSheet.create({});

export default SearchScreen;