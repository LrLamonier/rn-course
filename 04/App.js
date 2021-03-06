import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: "#351401" },
				headerTintColor: "#ffffff",
				sceneContainerStyle: { backgroundColor: "#3f2f25" },
				drawerContentStyle: { backgroundColor: "#351401" },
				drawerInactiveTintColor: "#ffffff",
				drawerActiveTintColor: "#e4baa1",
			}}
		>
			<Drawer.Screen
				name='Categories'
				component={CategoriesScreen}
				options={{
					title: "All categories",
					drawerIcon: ({ color, size }) => (
						<Ionicons name='list' color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name='Favorites'
				component={FavoritesScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name='star' color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style='dark' />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: "#cccccc",
						},
						headerTintColor: "fuchsia",
						contentStyle: {
							backgroundColor: "#898899",
						},
					}}
				>
					<Stack.Screen
						name='Drawer'
						component={DrawerNavigator}
						options={{
							title: "Categories",
							headerShown: false,
						}}
					/>
					<Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
					<Stack.Screen name='MealDetail' component={MealDetailScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
