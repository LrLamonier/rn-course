import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
	// const favMealsCtx = useContext(FavoritesContext);
	// const favMeals = MEALS.filter((meal) => favMealsCtx.ids.includes(meal.id));

	const favMealIds = useSelector((state) => state.favoriteMeals.ids);

	const favMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));

	if (favMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>No favorite meals yet! :(</Text>
			</View>
		);
	}

	return <MealsList items={favMeals} />;
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
	},
});

export default FavoritesScreen;
