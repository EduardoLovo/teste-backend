import bcrypt from "bcrypt";
import UserModel, { User } from "../models/User";

const saltRounds = 10;

const registerUser = async (
  username: string,
  password: string
): Promise<User> => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = new UserModel({
    username,
    password: hashedPassword,
  });
  // Salvar o usuário no banco de dados usando o método save do Mongoose
  await user.save();
  return user;
};

const loginUser = async (
  username: string,
  password: string
): Promise<User | null> => {
  // Buscar o usuário no banco de dados usando o método findOne do Mongoose
  const user = await UserModel.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    // Senha correta, retorne o usuário autenticado
    return user;
  } else {
    // Senha incorreta ou usuário não encontrado
    return null;
  }
};

export { registerUser, loginUser };
