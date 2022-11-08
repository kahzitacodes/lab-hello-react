import styles from "./style.module.css";

export function Features(props) {
     return (
          <section className={styles.features}>
               <div className={styles.container}>
                    {props.children}
               </div>
          </section>
     );
}