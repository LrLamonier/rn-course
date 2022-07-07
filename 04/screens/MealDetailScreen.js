import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../components/MealDetails";

import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route }) => {
	const navigation = useNavigation();

	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((m) => m.id === mealId);

	const buttonHandler = () => {};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton icon='star' color='#000000' onPress={buttonHandler} />
				);
			},
		});
	}, []);

	return (
		<View>
			<Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetails
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
			/>
			<Text>Ingredients</Text>
			{selectedMeal.ingredients.map((i) => (
				<Text key={i}>{i}</Text>
			))}
			<Text>Steps</Text>
			{selectedMeal.steps.map((s, i) => (
				<Text key={i}>{s}</Text>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
	},
});

export default MealDetailScreen;
