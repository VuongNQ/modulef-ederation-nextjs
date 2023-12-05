import styles from "./styles.module.scss";

const TableResponsive = () => {
    return <div className={styles["row"]}>
        <div className={styles["column"]}>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Points</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>Adam</td>
                    <td>Johnson</td>
                    <td>67</td>
                </tr>
            </table>
        </div>
        <div className={styles["column"]}>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Points</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>Adam</td>
                    <td>Johnson</td>
                    <td>67</td>
                </tr>
            </table>
        </div>
    </div>
}

export default TableResponsive