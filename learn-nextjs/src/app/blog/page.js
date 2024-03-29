import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something Went Wrong!");
  }

  return res.json();
};

async function Blogpage() {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts?.map((post, i) => (
        <div className={styles.post} key={i}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}

export default Blogpage;
