import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'
import ResultDetailsScreen from './src/screens/ResultDetailsScreen'

const navigator =  createStackNavigator({
  Search: SearchScreen,
  ResultDetailsScreen: ResultDetailsScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator);