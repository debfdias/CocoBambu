import api from './api';

export const baseURL = "http://127.0.0.1:3334";

export async function getHeader(token) {
  const headers = {
    Authorization: "Bearer " + token.token,
  };

  return headers;
}

export async function signIn(data){
  return api.post("/signin", data);
};

export async function getRecipesList(token)
{
  const headers = await getHeader(token);

  return await api.get(`/recipes`, { headers });
}
  

export async function getRecipe(id, token){
  const headers = await getHeader(token);

  return await api.get(`/recipe/${id}`, { headers });
}
