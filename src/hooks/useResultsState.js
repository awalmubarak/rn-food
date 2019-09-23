import React, {useState, useEffect} from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorOccured, setErrorOccured] = useState(false);

    const searchApi = async (searchTerm)=>{
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                term: searchTerm,
                location: 'san jose'
                }
            })
            setResults(response.data.businesses);
        } catch (error) {
            setErrorOccured(true);
        }
    }

    useEffect(()=>{
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorOccured];
}