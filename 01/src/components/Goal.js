import React from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";

const Goal = ({ index, goal, odd, onPress, id }) => {
	return (
		<Pressable
			android_ripple={{ color: "#f2f" }}
			onPress={() => onPress(id)}
			style={({ pressed }) => pressed && styles.pressedItem}
		>
			<View style={odd === 1 ? styles.goalOdd : styles.goal}>
				<Text style={styles.index}>{index}</Text>
				<Text style={styles.goalText}>{goal}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	goal: {
		padding: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	goalOdd: {
		padding: 16,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#b8c7f6",
	},
	index: {
		fontSize: 22,
		fontWeight: "700",
		paddingRight: 8,
		alignSelf: "flex-start",
		borderRightWidth: 1,
		borderRightColor: "#000000",
	},
	goalText: {
		paddingLeft: 8,
		fontSize: 20,
		flexShrink: 1,
	},
	pressedItem: {
		backgroundColor: "#f2f",
	},
});

export default Goal;
