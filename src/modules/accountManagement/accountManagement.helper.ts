export const accountNumberGenerator = async (): Promise<Number> => {
  const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
  return randomNumber;
};
