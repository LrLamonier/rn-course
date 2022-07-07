import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: "#3c0a6b" },
					headerTintColor: "#ffffff",
					drawerActiveBackgroundColor: "#f0e1ff",
					drawerActiveTintColor: "#3c0a6b",
					drawerStyle: { backgroundColor: "#cccccc" },
				}}
			>
				<Drawer.Screen
					name='Welcome'
					component={WelcomeScreen}
					options={{
						drawerLabel: "Oin",
						drawerIcon: ({ color, size }) => (
							<Ionicons name='home' color={color} size={18} />
						),
					}}
				/>
				<Drawer.Screen
					name='User'
					component={UserScreen}
					options={{
						drawerIcon: ({ color, size }) => (
							<Ionicons name='person' color={color} size={size} />
						),
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
