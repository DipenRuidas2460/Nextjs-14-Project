import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>dipendev</div>
      <div className={styles.text}>
        Ruidas creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
