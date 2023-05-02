import { useEffect } from 'react';
import moment from "moment"
import styles from 'styles/TotKCountdown.module.scss';
function lead(v: any, l: number = 2): string {
    return ('0'.repeat(l) + v).slice(-1 * l)
}
function fmt(v: number): string {
    let ms = v % 1000;
    let s = Math.floor(v / 1000) % 60;
    let m = Math.floor(v / 60000) % 60;
    let h = Math.floor(v / 360000) % 24;
    let d = Math.floor(v / 86400000);
    return `${lead(d, 3)}:${lead(h)}:${lead(m)}:${lead(s)}.${lead(ms, 3)}`;
}
export function start_totk_countdown(): void {
    let end = moment(new Date("Fri May 12 2023 00:00:00").getTime());
    setInterval(() => {
        let countdowns = document.querySelectorAll("." + styles.countdown);
        countdowns.forEach(el => {
            let duration: moment.Duration = moment.duration(end.diff(moment()));
            (el as HTMLElement).innerText = `${
                lead(Math.floor(duration.asDays()))
            }:${
                lead(Math.floor(duration.asHours())%24)
            }:${
                lead(Math.floor(duration.asMinutes())%60)
            }:${
                lead(Math.floor(duration.asSeconds())%60)
            }.${
                lead(duration.asMilliseconds()%1000, 3)
            }`;
        })
    }, 1);
}
export default function TotKCountdown() {
    useEffect(start_totk_countdown);
   return (
        <div className={styles.totk}><span className={styles.countdown}></span> <wbr />until Tears of the Kingdom release</div>
   )
}
