import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

function Blogpage({params, searchParams}) {
  // console.log(params)    , out:- {}
  // console.log(searchParams); , output:- {ml:pl}, (query)
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>

      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
}

export default Blogpage;
