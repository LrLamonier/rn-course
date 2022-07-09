import { StyleSheet, Text } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";

const RecentExpenses = () => {
	return <ExpensesOutput expensesPeriod='Last 7 days' />;
};

const styles = StyleSheet.create({});

export default RecentExpenses;
