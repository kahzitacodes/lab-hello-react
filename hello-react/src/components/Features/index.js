import styles from "./style.module.css";

export function Features(props) {
     return (
          <section className={styles.features}>
               <div className={`container ${styles.container}`}>
                    {props.children}
               </div>
          </section>
     );
}