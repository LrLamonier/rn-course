import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const TEST_EXPENSES = [
	{
		id: "e1",
		description: "shoes",
		amount: 59.99,
		date: new Date("2021-12-19"),
	},
	{
		id: "e2",
		description: "iogurt",
		amount: 89.29,
		date: new Date("2022-01-05"),
	},
	{
		id: "e3",
		description: "ps5",
		amount: 5.99,
		date: new Date("2021-12-01"),
	},
	{
		id: "e4",
		description: "escova",
		amount: 14.99,
		date: new Date("2022-02-19"),
	},
	{
		id: "e",
		description: "vrilo",
		amount: 18.59,
		date: new Date("2022-02-18"),
	},
];

const ExpensesOutput = ({ expenses, periodName }) => {
	return (
		<View>
			<ExpensesSummary expenses={TEST_EXPENSES} periodName={periodName} />
			<ExpensesList expenses={TEST_EXPENSES} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default ExpensesOutput;
