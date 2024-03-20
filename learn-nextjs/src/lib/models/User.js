import { DataTypes } from "sequelize";
import { define } from "../utils";

const User = define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [3, 20],
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
        len: [0, 50],
      },
    },
    password: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
    tableName: "User",
  }
);

export default User;
