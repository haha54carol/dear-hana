import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import NoteScreen from './Note/Container'
import HomeScreen from './Home/Container'
import Drawer from './Info/Container'

// const MainStack = createStackNavigator(
//     {
//         // Home: {
//         //     screen: HomeScreen,
//         //     navigationOptions: {
//         //         headerMode: 'none'
//         //     }
//         // },
//         Note: {
//             screen: NoteScreen,
//             navigationOptions: {
//                 headerMode: 'none'
//             }
//         }
//     }
// )


const PrimaryNav = createDrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Note: { screen: NoteScreen }
    }, {
        contentComponent: Drawer,
        headerMode: 'none',
        drawerWidth: 350,
        initialRouteName: 'Home',
    }
)

// const PrimaryNav = createDrawerNavigator(
//     {
//         Home: { screen: HomeScreen }
//     }, {
//         initialRouteName: 'Home',
//     }
// )

export default PrimaryNav