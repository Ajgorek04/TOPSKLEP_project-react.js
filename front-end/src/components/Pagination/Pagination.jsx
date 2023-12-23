import { NavLink } from "react-router-dom";
import styles from "./Pagination.module.css";

export function Pagination({ numberOfPages }) {
    const pages = Array(numberOfPages).fill(null);

    return (
        <ul className={styles.pagination}>
            {pages.map((page, index) => {
                return (
                    <li key={index}>
                        <NavLink>{index + 1}</NavLink>
                    </li>
                );
            })}
        </ul>
    );
}
