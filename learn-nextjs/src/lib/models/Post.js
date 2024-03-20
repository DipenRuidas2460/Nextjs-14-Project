import { DataTypes } from "sequelize";
import { define } from "../utils";

const Post = define(
  "Post",
  {
    title: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.BIGINT,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: false,
    tableName: "Post",
  }
);

export default Post;
