import { useState, useEffect } from "react";
import { useAuth } from "../../providers/Auth";
import { getRecipesList } from "../../services/server";
import { handleSearch } from "../../services/utils";
import Header from "../../components/Header";
import RecipeItem from "./RecipeItem";
import { CardWrapper, Container, Title } from "./styles";

export default function Recipes() {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  async function loadRecipes() {
    setLoading(true);

    try {
      const response = await getRecipesList(token);
      setRecipes(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRecipes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {loading ? (
        <>
          <Header setSearch={setSearch} />
          <Container>
            <Title>Carregando...</Title>
          </Container>
        </>
      ) : (
        <>
          <Header setSearch={setSearch} />
          <Container>
            <Title>Receitas</Title>
            <CardWrapper>
              {recipes
                .filter((recipe) => handleSearch(recipe, search))
                .map((recipe, i) => (
                  <RecipeItem key={i} recipe={recipe} />
                ))}
            </CardWrapper>
          </Container>
        </>
      )}
    </>
  );
}
