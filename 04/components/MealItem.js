import { View, Pressable, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({
	id,
	title,
	imageURL,
	duration,
	complexity,
	affordability,
}) => {
	const navigation = useNavigation();

	const mealItemHandler = () => {
		navigation.navigate("MealDetail", {
			mealId: id,
		});
	};

	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: "#cccccc" }}
				style={({ pressed }) => pressed && styles.pressed}
				onPress={mealItemHandler}
			>
				<View>
					<Image source={{ uri: imageURL }} style={styles.image} />
					<Text style={styles.title}>{title}</Text>
				</View>
				<MealDetails
					duration={duration}
					affordability={affordability}
					complexity={complexity}
				/>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: "#ffffff",
		elevation: 4,
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
		padding: 8,
	},
	pressed: {
		opacity: 0.25,
	},
});

export default MealItem;
