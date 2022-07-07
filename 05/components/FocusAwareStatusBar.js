import { StatusBar } from "react-native";
import { useDrawerStatus } from "@react-navigation/drawer";

const FocusAwareStatusBar = (props) => {
	return <StatusBar {...props} />;
};

export default FocusAwareStatusBar;
