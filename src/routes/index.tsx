import { NavigationContainer } from "@react-navigation/native";
import { Login } from "../screens/Login";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
