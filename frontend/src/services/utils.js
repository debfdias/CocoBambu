export function handleSearch(recipe, search){
  if (search) {
    return recipe.title.toLowerCase().includes(search.toLowerCase());
  }
  return recipe;
};

export const calculateProgress = (counter, totalSteps, setProgress) => {
  let string = "";
  let num = 0;
  num = Math.round((counter / totalSteps) * 100);
  string = `${num}%`;
  setProgress(string);
};

export const showMinutes = (time) => {
  return Math.floor(time / 60);
};

export const showTotalTime = (time) => {
  let totalSeconds = time;
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes} minuto(s) e ${seconds} segundo(s)`;
};
