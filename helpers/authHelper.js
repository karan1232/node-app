import bcrypt from "bcrypt";

export const hashPassword = (receivedPassword) => {
  try {
    const saltRounds = 10;
    const encryptedPassword = bcrypt.hash(receivedPassword, saltRounds);
    return encryptedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password,hashedPassword) => {
  try {
    const passwordComparisom = await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.log(error);
  }
};
