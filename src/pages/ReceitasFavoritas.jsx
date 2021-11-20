import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import FilterButtons from '../components/FilterButtons';
import Header from '../components/Header';
import '../styles/favoriteRecipes.css';

export default function ReceitasFavoritas() {
  const [filterType, setFilterType] = useState('');
  const favoriteRecipes = useSelector((state) => state.recipes.favoriteRecipes);

  const changeFilter = ({ target }) => setFilterType(target.id);

  return (
    <section>
      <Header title="Receitas Favoritas" showSearchBtn={ false } />
      <FilterButtons onClick={ changeFilter } />
      { favoriteRecipes.filter(({ type }) => type.includes(filterType))
        .map((recipe, index) => {
          console.log('recipe', recipe);
          return (
            <FavoriteRecipeCard key={ recipe.id } index={ index } recipe={ recipe } />
          );
        })}
      <FilterButtons />
    </section>
  );
}
