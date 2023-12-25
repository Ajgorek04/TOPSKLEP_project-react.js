import { useState } from "react";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import styles from "./Photos.module.css";

export function Photos({ product }) {
    const [currentPhot, setCurrentPhoto] = useState(product.photos[0]);

    return (
        <FlexContainer>
            <div className={styles.thumbnails}>
                {product.photos.map((photo) => {
                    return (
                        <img
                            className={
                                currentPhot === photo ? styles.active : ""
                            }
                            key={photo}
                            src={photo}
                            onClick={() => {
                                setCurrentPhoto(photo);
                            }}
                        />
                    );
                })}
            </div>
            <img src={currentPhot} className={styles.mainPhoto} />
        </FlexContainer>
    );
}
