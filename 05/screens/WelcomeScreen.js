import { View, Text, StyleSheet, StatusBar } from "react-native";
import { useDrawerStatus } from "@react-navigation/drawer";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";

function WelcomeScreen() {
	const isDrawerOpen = useDrawerStatus();

	return (
		<View style={styles.rootContainer}>
			{isDrawerOpen === "open" ? (
				<FocusAwareStatusBar
					hidden={true}
					translucent={true}
					backgroundColor='transparent'
				/>
			) : (
				<FocusAwareStatusBar translucent={true} backgroundColor='transparent' />
			)}
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
