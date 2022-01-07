import { useState } from "react";
import { useHistory } from "react-router";
import { signIn } from "../../services/server";
import { useAuth } from "../../providers/Auth";
import logoCoco from "../../assets/logo-coco-bambu.png";
import { Container, FormContainer, Form, Button } from "./styles";

export default function SignIn() {
  const history = useHistory();
  const { setToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await signIn({ email, password });

      window.localStorage.setItem("auth", JSON.stringify(response.data));
      setToken(response.data);

      history.push("/recipes");
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <Container>
          <img src={logoCoco} style={{ marginBottom: 50 }} alt="logo"/>
          <FormContainer>
            <Form onSubmit={handleSubmit}>
              <input
                required
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                required
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button onClick={handleSubmit}>Acessar</Button>

            </Form>
          </FormContainer>
        </Container>
      )}
    </>
  );
}
