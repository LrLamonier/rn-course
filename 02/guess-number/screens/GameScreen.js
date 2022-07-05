import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Title from "../components/Title";

const generateRandomBetween = (min, max, exclude) => {
	const random = Math.floor(Math.random() * (max - min)) + min;

	if (random === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return random;
	}
};

const GameScreen = ({ userNumber }) => {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	return (
		<View style={styles.screen}>
			<Title>Your number</Title>
			<Title>App's guess</Title>
			<View>
				<Text>Higher or lower?</Text>
				<Text>+</Text>
				<Text>-</Text>
			</View>
			<View>
				<Text>Rounds</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
});

export default GameScreen;
