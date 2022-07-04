import { useState } from "react";
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
	FlatList,
	Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Goal from "./src/components/Goal";
const image = require("./assets/images/goal.png");

export default function App() {
	const [modalOpen, setModalOpen] = useState(false);
	const [goal, setGoal] = useState("");
	const [goals, setGoals] = useState([]);

	const openModalGoal = () => {
		setModalOpen(true);
	};

	const goalInputHandler = (v) => {
		setGoal(v);
	};

	const addGoalHandler = () => {
		// state that depends on previous state, use a function
		setGoals((currentGoals) => [
			...currentGoals,
			{ goal, key: Math.random().toString() },
		]);
		setGoal("");
	};

	// 	const deleteGoalHandler = (key) => {
	// 		setGoals(currentGoals => {
	// 			currentGoals.filter(g => g.key !== key))
	// 		}
	// 	};

	const deleteGoalHandler = (key) => {
		setGoals((currentGoals) => {
			return currentGoals.filter((g) => g.key !== key);
		});
	};

	return (
		<View style={styles.appContainer}>
			<StatusBar style='light' />
			<Image source={image} style={styles.image} />
			{modalOpen || (
				<Button title='Add new goal' color='#5e0acc' onPress={openModalGoal} />
			)}
			{modalOpen && (
				<View style={styles.inputContainer}>
					<TextInput
						placeholder='Your course goal'
						value={goal}
						style={styles.textInput}
						onChangeText={goalInputHandler}
						placeholderTextColor='#ffffff'
					/>
					<Button title='Add goal' onPress={addGoalHandler} color='#5e0acc' />
				</View>
			)}
			<View style={styles.goalsContainer}>
				<Text style={styles.goalsTitle}>List of goals</Text>
				<FlatList
					data={goals}
					renderItem={(gData) => {
						return (
							<Goal
								index={gData.index + 1}
								goal={gData.item.goal}
								odd={(gData.index + 1) % 2}
								onPress={deleteGoalHandler}
								id={gData.item.key}
							/>
						);
					}}
					keyExtractor={(item, index) => {
						return item.key;
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
		backgroundColor: "#311b6b",
		alignItems: "center",
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
		padding: 8,
		color: "#ffffff",
	},
	goalsContainer: {
		flex: 5,
	},
	goalsTitle: {
		alignSelf: "center",
		fontSize: 24,
		fontWeight: "700",
		marginBottom: 24,
		color: "#ffffff",
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});
