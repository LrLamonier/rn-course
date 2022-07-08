import { createContext, useState } from "react";

const FavoritesContext = createContext({
	ids: [],
	addFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
	const [favIds, setFavIds] = useState([]);

	const addFav = (id) => {
		if (!favIds.includes(id)) {
			setFavIds((favIds) => [...favIds, id]);
		}
	};

	const removeFav = (id) => {
		setFavIds((currentFavs) => currentFavs.filter((curId) => curId !== id));
	};

	const value = {
		ids: favIds,
		addFavorite: addFav,
		removeFavorite: removeFav,
	};

	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
};

export { FavoritesContext };
export default FavoritesContextProvider;
