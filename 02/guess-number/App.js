import { useState } from "react";
import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import Colors from "./util/colors";

const background = require("./assets/images/background.png");

export default function App() {
	// 	const [fontsLoaded] = useFonts({
	// 		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
	// 		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	// 	});
	//
	// 	if (!fontsLoaded) {
	// 		return <AppLoading />;
	// 	}

	const [userNumber, setUserNumber] = useState();
	const [gameOver, setGameOver] = useState(false);

	const pickedNumberHandler = (pickedNumber) => {
		setUserNumber(pickedNumber);
	};
	const gameOverHandler = () => {
		setGameOver(true);
	};

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />
		);
	}
	if (gameOver && userNumber) {
		screen = <GameOverScreen />;
	}

	return (
		<LinearGradient
			colors={[Colors.primary700, Colors.accent500]}
			style={styles.rootScreen}
		>
			<ImageBackground
				source={background}
				resize='cover'
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<StatusBar style='light' />
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
