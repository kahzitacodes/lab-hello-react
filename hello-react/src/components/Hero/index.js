import styles from "./style.module.css";
import { Button } from "../Button";

export function Hero(props) {
     return (
          <section className={styles.hero}>
               <div className={styles.container}>
                    <h1 className={styles.heroTitle}>{props.title}</h1>
                    <p className={styles.heroSub}>
                         You will learn how to use 
                         the most popular frontend lybrary,
                         and become a super Ninja developer.
                    </p>
                    <Button label="Awesome!"/>
                    </div>
          </section>
     );
}