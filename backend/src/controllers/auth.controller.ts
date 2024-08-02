import bcrypt from "bcrypt";/* 
import jwt from "jsonwebtoken"; */
import dotenv from "dotenv";
import { Request, Response } from "express";
// import {importUserToDatabase, readUserFromDatabase} from "../services/auth.service";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

const signup = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userObject = {
      email,
      password: hashedPassword,
      username,
    };

    // importUserToDatabase

    const newUser = userObject;

    if (newUser) {
      res.status(200).send({ message: "You have successfully registered!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "User with this username or email already exists!",
    });
    throw new Error("Something went wrong!");
  }
};

/* const signin = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  try {
    // readUserFromDatabase

    // this part will be deleted after added service
    //---------->
    interface User {
      email: string;
      username: string;
      password: string;
    }

    const user: User = {
      username: "testuser-1",
      email: "username@example.com",
      password: "Testpassword123",
    };
    //<----------

    if (!user) {
      throw new Error("User not found");
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    const isSame = await bcrypt.compare(password, hashedPassword);

    if (!isSame) {
      throw new Error("Incorrect password");
    }

    const token = jwt.sign(
      {
        email: user.email,
        username: user.username,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).send({
      message: "You have successfully signed in!",
      token: token,
    });
  } catch (err) {
    let errorMessage;
    if (email) {
      errorMessage = "Wrong email or password!";
    } else if (username) {
      errorMessage = "Wrong username or password!";
    }
    console.error("error", err);
    res.status(500).send({
      message: errorMessage,
    });
    throw new Error("Something went wrong!");
  }
};
 */
export { /* signin, */ signup };
