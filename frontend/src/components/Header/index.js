import { IoRestaurant, IoFastFoodOutline, IoPersonCircle } from "react-icons/io5";
import { Container, IconWrapper, Icon } from "./styles";
import logoCoco from "../../assets/logo-coco-bambu-mini.png";

export default function Header({ setSearch }){
  const handleSearch = (e) => {
    if (setSearch) {
      setSearch(e.target.value);
    }
  };

  return (
    <Container>
      <img src={logoCoco} alt="logo"/>;
      <IconWrapper>
        <input
          placeholder="Buscar receita..."
          type="text"          
          onChange={handleSearch}
          style={ {fontSize: 16, marginTop: 2} }
        />
        <Icon to="/recipes">
          <IoRestaurant />
          <p>Pedidos</p>
        </Icon>
        <Icon to="/recipes">
          <IoFastFoodOutline />
          <p>Receitas</p>
        </Icon>
        <Icon to="/">
          <IoPersonCircle />
          <p>Sair</p>
        </Icon>
      </IconWrapper>
    </Container>
  );
};

