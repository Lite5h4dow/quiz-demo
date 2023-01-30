import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "../screens/MenuScreen";
import QuizScreen from "../screens/QuizScreen";
import TenTableTestScreen from "../screens/TenTableTestScreen";

export default function Navigator(){
  const Stack = createNativeStackNavigator()
  return(
    <Stack.Navigator>
      <Stack.Screen name="MenuScreen" component={MenuScreen} options={{headerShown:false}} />
      <Stack.Screen name="QuizScreen" component={QuizScreen} options={{headerShown:false}} />
      <Stack.Screen name="TentableScreen" component={TenTableTestScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
