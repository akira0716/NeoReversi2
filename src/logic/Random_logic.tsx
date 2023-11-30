export const getLot = (): string => {
  const data: Record<string, number> = {
    "20%": 20, // 20%
    "80%": 80, // 80%
  };

  const rand = Math.floor(Math.random() * 100);
  let result = "80%";
  let rate = 0;

  for (const prop in data) {
    rate += data[prop];
    if (rand <= rate) {
      result = prop;
      break;
    }
  }

  return result;
};
