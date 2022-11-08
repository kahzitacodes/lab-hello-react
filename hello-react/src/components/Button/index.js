import styles from "./style.module.css";

export function Button(props) {
     return (
          <>
               <button className={styles.btn} type="button">{props.btnLabel}</button>
          </>
     );
}