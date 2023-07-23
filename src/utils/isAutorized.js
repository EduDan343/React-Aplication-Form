import users from "../../data.json";
import bcrypt from "bcryptjs";

export const isAutorized = (emailUser, passwordHashed) => {
  const exist = users.find((user) => user.email === emailUser);
  if (exist) {
    return bcrypt.compareSync(exist.password, passwordHashed);
  }
  return false;
};
