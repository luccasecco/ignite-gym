import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { Text, View } from 'react-native';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      {fontsLoaded ? <Text>Ignite Gym!</Text> : <View></View>}
    </View>
  );
}

