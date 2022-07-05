import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const generateRandomBetween = (min, max, exclude) => {
	const random = Math.floor(Math.random() * (max - min)) + min;

	if (random === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return random;
	}
};

const GameScreen = ({ userNumber, gameOverHandler }) => {
	const [maxNum, setMaxNum] = useState(100);
	const [minNum, setMinNum] = useState(1);
	const [currentGuess, setCurrentGuess] = useState();

	const firstGuess = generateRandomBetween(minNum, maxNum, userNumber * 1);
	useEffect(() => {
		setCurrentGuess(firstGuess);
	}, []);

	useEffect(() => {
		if (currentGuess === userNumber * 1) {
			gameOverHandler();
		}
	}, [currentGuess]);

	const nextGuess = (direction) => {
		if (
			(direction === "less" && currentGuess < userNumber) ||
			(direction === "more" && currentGuess > userNumber)
		) {
			Alert.alert("Wrong instruction!", "You can't do that!", [
				{
					text: "Try again",
					style: "cancel",
				},
			]);
			return;
		}

		if (direction === "less") {
			setMaxNum(currentGuess);
		}
		if (direction === "more" && currentGuess < userNumber) {
			setMinNum(currentGuess + 1);
		}
		const newGuess = generateRandomBetween(minNum, maxNum, currentGuess);
		setCurrentGuess(() => newGuess);
	};

	return (
		<View style={styles.screen}>
			<Title>Your number</Title>
			<NumberContainer>{userNumber}</NumberContainer>
			<Title>App's guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				<View>
					<PrimaryButton onPress={() => nextGuess("less")}>
						<Ionicons name='md-remove' size={30} color='#ffffff' />
					</PrimaryButton>
					<PrimaryButton onPress={() => nextGuess("more")}>
						<Ionicons name='md-add' size={30} color='#ffffff' />
					</PrimaryButton>
				</View>
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
