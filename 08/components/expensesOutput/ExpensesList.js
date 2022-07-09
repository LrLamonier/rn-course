import { View, Text, FlatList, StyleSheet } from "react-native";

const renderExpenseItem = (itemData) => {
	return <Text>{itemData.item.description}</Text>;
};

const ExpensesList = ({ expenses }) => {
	return (
		<FlatList
			data={expenses}
			renderItem={renderExpenseItem}
			keyExtractor={(item) => {
				item.id;
			}}
		/>
	);
};

const styles = StyleSheet.create({});

export default ExpensesList;
