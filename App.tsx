import { NativeBaseProvider, StatusBar } from "native-base";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Login } from "./src/screens/Login";
import { THEME } from "./src/styles/theme";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsloaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsloaded ? <Login /> : <Loading />}
    </NativeBaseProvider>
  );
}
