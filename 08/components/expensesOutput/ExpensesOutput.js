import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = ({ expenses }) => {
	return (
		<View>
			<ExpensesSummary />
			<ExpensesList />
		</View>
	);
};

const styles = StyleSheet.create({});

export default ExpensesOutput;
