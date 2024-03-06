import Image from "next/image";
import styles from "./singlePost.module.css";

function SinglePostpage({params}) {
  console.log(params);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/trees-growing-forest.avif"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/trees-growing-forest.avif"
            alt=""
            height={50}
            width={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published:-</span>
            <span className={styles.detailValue}>06.03.2024</span>
          </div>
        </div>
        <div className={styles.content}>lorem</div>
      </div>
    </div>
  );
}

export default SinglePostpage;
