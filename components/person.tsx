import styles from "../styles/Person.module.scss"
export default function Person(props) {
    return (
        <a href={props.href} target={"_blank"} className={styles.person} style={{
            borderColor: props.color
        }}>
            <img className={`${styles.icon} ${props.round ? styles.rounded : ""}`} src={props.image} />
            <p className={styles.logo_text}>{props.name} </p>
            <p className={styles.url_text} style={{ // oops 2
                
            }}>@ {props.href.split(/https?:\/\//).pop()}</p>
        </a>
    )
}