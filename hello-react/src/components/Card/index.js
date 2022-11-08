import styles from "./style.module.css";

export function Card(props) {
     return (
          <div className={styles.card}>
               <img className={styles.cardImg} src={props.img} alt={props.alt} />
               <h4 className={styles.cardTitle}>{props.title}</h4>
               <p className={styles.cardText}>{props.text}</p>
          </div>
     );
}