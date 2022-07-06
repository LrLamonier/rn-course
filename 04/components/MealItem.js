import { View, Pressable, Text, Image, StyleSheet } from "react-native";

const MealItem = ({ title, imageURL, duration, complexity, affordability }) => {
	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: "#cccccc" }}
				style={({ pressed }) => pressed && styles.pressed}
			>
				<View>
					<Image source={{ uri: imageURL }} style={styles.image} />
					<Text style={styles.title}>{title}</Text>
				</View>
				<View style={styles.details}>
					<Text style={styles.detailItem}>{duration} minutes</Text>
					<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
					<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
				</View>
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
	details: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		paddingBottom: 20,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 16,
	},
	pressed: {
		opacity: 0.25,
	},
});

export default MealItem;
