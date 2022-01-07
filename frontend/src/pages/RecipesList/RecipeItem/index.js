import {
  Container,
  CardInfo,
  CardText,
  TitleRecipe,
  DescriptionRecipe,
  Circle,
} from "./styles";

export default function RecipeItem({ recipe }){
  return (
    <Container>
      <CardInfo>
        <img src={recipe.image} alt={recipe.title} />
        <CardText>
          <TitleRecipe>{recipe.title}</TitleRecipe>
          <DescriptionRecipe>{recipe.description}</DescriptionRecipe>
        </CardText>
      </CardInfo>
      <Circle to={`/recipe/${recipe.id}`}>Ver receita</Circle>
    </Container>
  );
};

