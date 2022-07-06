import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
	const renderCategory = (item) => {
		const pressHandler = () => {
			navigation.navigate("MealsOverview", {
				categoryId: item.item.id,
			});
		};

		return (
			<CategoryGridTile
				title={item.item.title}
				color={item.item.color}
				onPress={pressHandler}
			/>
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			key='categories'
			renderItem={renderCategory}
			numColumns={2}
		/>
	);
};

export default CategoriesScreen;
