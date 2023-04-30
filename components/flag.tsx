import styles from "../styles/Flag.module.scss";
export default function Flag(props) {
    let code: string = props.code;
    return (<div className={styles.flag}><img className={styles.flag_img} src={`https://flags.komali.dev/svg/${code}.svg`} /></div>)    
}