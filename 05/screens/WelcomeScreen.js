import { View, Text, StyleSheet, StatusBar } from "react-native";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";

function WelcomeScreen() {
	return (
		<View style={styles.rootContainer}>
			<FocusAwareStatusBar translucent={true} backgroundColor='transparent' />
			<Text>
				This is the <Text style={styles.highlight}>"Welcome"</Text> screen!
			</Text>
		</View>
	);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	highlight: {
		fontWeight: "bold",
		color: "#eb1064",
	},
});
