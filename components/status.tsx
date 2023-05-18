import { useEffect } from "react";
import styles from "styles/status.module.scss";
export function check_status() {
    setTimeout(async () => {
        // typescript doesn't like async-ing the function, but we need to run in a thread anyways
        let fetch_data = await fetch("https://api.komali.dev");
        console.log(fetch_data)
        document.querySelectorAll("." + styles.status).forEach(el => {
            let e = el as HTMLElement;
            e.innerText = fetch_data.status.toString();
            switch(fetch_data.status) {
                case 200:
                    e.style.color = "#00dd00";
                    break;
                default: // meant to add more cases but didn't plan that far ahead :P
                    e.style.color = "#aa0000";
                    break;
            }
        })

    });
}
export default function server_status() {
    useEffect(check_status);
    return <div className={styles.status}>???</div>;
}
