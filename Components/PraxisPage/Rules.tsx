import styles from "./Rules.module.css";

interface rulesProps {
    propWhichIsArray: {
        id: number,
        text: string;
    }[]
}

function Rules(props: rulesProps) {
    const array = props.propWhichIsArray
    return (
        <div className={styles.main}>
            <h1>Rules of participation</h1>
            <ul className={styles.content}>
                {array.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Rules;
