import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
	const catId = route.params.categoryId;

	const currentMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) !== -1;
	});

	const renderMealItem = (itemData) => {
		const mealItemProps = {
			title: itemData.item.title,
			imageURL: itemData.item.imageUrl,
			affordability: itemData.item.affordability,
			complexity: itemData.item.complexity,
			duration: itemData.item.duration,
		};

		return <MealItem {...mealItemProps} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={currentMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});

export default MealsOverviewScreen;
