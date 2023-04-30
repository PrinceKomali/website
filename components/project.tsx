import styles from "../styles/Project.module.scss";
import colors from "c.json";
export default function Project(props) {
    let langs = props.langs;
    if(langs.length == 1) langs.push(langs[0]); // hacky solution
    let lang_colors = new Array(langs.length * 2 - 2);
    for(let i = 0; i < langs.length; i++) {
        lang_colors[i * 2] = `${colors[langs[i]].color} ${(100/langs.length) * i}%`
        lang_colors[i * 2 + 1] = `${colors[langs[i]].color} ${(100/langs.length) * (i+1)}%`
    }
    lang_colors.shift();
    return (
        <a href={props.href} target={"_blank"} className={styles.project} style={{
            borderImage: `linear-gradient(to right, ${lang_colors.join(", ")}) 5`
        }}>
            <img className={`${styles.icon} ${props.round ? styles.rounded : ""}`} src={props.image} />
            <p className={styles.logo_text}>{props.name}</p>
        </a>
    )
}