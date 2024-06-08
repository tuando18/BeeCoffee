import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "../screen/home";
import FavoriteScreen from "../screen/favourite";
import SettingScreen from "../screen/setting";
// import ContactScreen from '../screen/contact';
import CartScreen from "../screen/cart";
// import LoginScreen from '../screen/login';
// import RegisterScreen from '../screen/signIn';
import ProductScreen from "../screen/product";
import ProfileScreen from "../screen/profile";
import HistoryScreen from "../screen/history";
import { useRoute } from "@react-navigation/native";
import Order from "../screen/order";
import OrderDetail from "../screen/orderdetail";
import Languages from "../screen/languages";

import { useTranslation } from 'react-i18next';
import SomeScreen from "../screen/theme/SomeScreen";

const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation }) => {
  const route = useRoute();
  const { nameUserSend } = route.params || {};
  const { t } = useTranslation('menu');

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Favorite") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Setting") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={null}
    >
      <Tab.Screen
        name="Home"
        initialParams={{ nameUserSend: nameUserSend }}
        component={HomeScreen}
        options={{ tabBarLabel: t('menu.home') }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{ headerShown: false, tabBarLabel: t('menu.favourite') }}
      />
      <Tab.Screen name="Setting" component={SettingScreen}
        options={{ tabBarLabel: t('menu.setting') }} />
      {/* Màn hình  */}

      {/* <Tab.Screen name="Product" component={ProductScreen} options={{ tabBarButton: () => null, headerShown: false }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{ tabBarButton: () => null, headerShown: false }} />
      <Tab.Screen name="Payments" component={PaymentsScreen} options={{ tabBarButton: () => null, headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarButton: () => null, headerShown: false }} />
      <Tab.Screen name="History" component={HistoryScreen} options={{ tabBarButton: () => null, headerShown: false }} /> */}
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{ tabBarButton: () => null, headerShown: false }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarButton: () => null, headerShown: false }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{ tabBarButton: () => null, headerShown: false }}
      />

      <Tab.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{ tabBarButton: () => null, headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarButton: () => null, headerShown: false }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{ tabBarButton: () => null, headerShown: false }}
      />
      <Tab.Screen
        name="Languages"
        component={Languages}
        options={{ tabBarButton: () => null, headerShown: false }}
      />
      <Tab.Screen
        name="Theme"
        component={SomeScreen}
        options={{ tabBarButton: () => null, headerShown: false }}
      />
    </Tab.Navigator>
  );
};
export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
