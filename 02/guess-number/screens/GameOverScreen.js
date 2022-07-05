import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../util/colors";

const GameOverScreen = () => {
	return (
		<View>
			<Title>Game over!</Title>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require("../asses/images/gameover.png")}
				/>
			</View>
			<Text>
				Your phone needed <Text>X</Text> rounds to guess the number{" "}
				<Text>Y</Text>!
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		width: 400,
		height: 400,
		borderRadius: 200,
		overflow: "hidden",
		borderColor: Colors.primary800,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

export default GameOverScreen;
