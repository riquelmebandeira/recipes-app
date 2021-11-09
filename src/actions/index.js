// export const GET_USER_LS_DATA = 'GET_LS_DATA';
export const SAVE_USER_LS_DATA = 'SAVE_USER_LS_DATA';
export const SAVE_RECIPES_LS_DATA = 'SAVE_RECIPES_LS_DATA';
const userLsKeys = ['user', 'mealsToken', 'cocktailsToken'];
const recipesLsKeys = ['doneRecipes', 'favoriteRecipes', 'inProgressRecipes'];

const getLsData = (keys) => keys.reduce((data, key) => ({
  ...data, [key]: JSON.parse(localStorage.getItem(key)),
}), {});

export const getUserLsData = () => ({
  type: SAVE_USER_LS_DATA,
  data: getLsData(userLsKeys),
});

export const getRecipesLsData = () => ({
  type: SAVE_RECIPES_LS_DATA,
  data: getLsData(recipesLsKeys),
});

const saveLsData = (keys, data) => {
  keys.forEach((key) => {
    localStorage.setItem(key, JSON.stringify(data[key]));
  });
};

export const saveUserLsData = (data) => {
  saveLsData(userLsKeys, data);
  return {
    type: SAVE_USER_LS_DATA,
    data,
  };
};

export const saveRecipesLsData = (data) => {
  saveLsData(recipesLsKeys, data);
  return {
    type: SAVE_RECIPES_LS_DATA,
    data,
  };
};
