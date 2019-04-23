 
import {  createStackNavigator} from "react-navigation"; // 1.0.0-beta.27
import Login from './app/Login';
import DashBoard from './app/DashBoard';
export const AppNavigator = createStackNavigator(
    {
      Login: Login,
    
      DashBoard: {screen:DashBoard,
      navigationOptions: {
        title: "User Dashboard",
    }
  }
},
    {
      initialRouteName: "Login"
    }
  );
  
 