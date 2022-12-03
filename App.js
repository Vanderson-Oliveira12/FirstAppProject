import { View } from 'react-native';
import Home from './src/pages/Home';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";


export default function App() {

  const [fonts] = useFonts({
    "regular400": Roboto_400Regular,
    "medium500": Roboto_500Medium,
    "bold700": Roboto_700Bold
  })

  if (!fonts) {
    return null
  }

  return (
    <View>
      <Home />
    </View>
  );
}

