import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

import Colors from "../util/colors";

const StartGameScreen = ({ onPickNumber }) => {
	const [number, setNumber] = useState("");

	const numberHandler = (input) => {
		setNumber(input);
	};

	const resetNumber = () => setNumber("");

	const confirmInput = () => {
		const chosenNumber = parseInt(number);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			// title, message, buttons to be shown
			Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
				{ text: "Okay", style: "default", onPress: resetNumber },
			]);
			return;
		}

		onPickNumber(number);
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				maxLength={2}
				keyboardType='number-pad'
				autoCapitalize='none'
				autoCorrect={false}
				value={number}
				onChangeText={numberHandler}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		marginHorizontal: 24,
		borderRadius: 10,
		marginTop: 100,
		// backgroundColor: "#72063c",
		backgroundColor: Colors.primary800,
		// in Android, shadows are added with the elevation property
		elevation: 10,
		// in iOS, use shadow properties
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
	input: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
});

export default StartGameScreen;
