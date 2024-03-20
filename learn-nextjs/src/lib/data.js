import User from "./models/User";
import Post from "./models/Post";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    const posts = await Post.findAll({});
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    const post = await Post.findOne({ where: { slug: slug } });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    const user = await User.findOne({ where: { id: id } });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    const users = await User.findAll({});
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
