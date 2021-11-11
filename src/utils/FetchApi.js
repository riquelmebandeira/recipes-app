const URLS = {
  bebidas: {
    ingredients: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
    name: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    first: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
  },
  comidas: {
    ingredients: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
    name: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    first: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
  },
};

const fetchApi = async ({ filterType, searchInput, recipeType }) => {
  if (searchInput.length > 1 && filterType === 'first') {
    global.alert('Sua busca deve conter somente 1 (um) caracter');
  } else {
    const response = await fetch(`${URLS[recipeType][filterType]}${searchInput}`);
    const json = await response.json();
    return json;
  }
};

export default fetchApi;
