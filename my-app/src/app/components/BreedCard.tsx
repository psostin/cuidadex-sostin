
import React from "react";
import styles from "./BreedCard.module.css";
import { Breed } from "../types/Breed"; 

interface BreedCardProps {
  breed: Breed;
  defaultImage: string;
  openBreedDetails: (breed: Breed) => void;
}

const BreedCard: React.FC<BreedCardProps> = ({ breed, defaultImage, openBreedDetails }) => {
  const truncatedTemperament = breed.temperament
    ? breed.temperament.split(", ").slice(0, 3).join(", ") + (breed.temperament.split(", ").length > 3 ? ", ..." : "")
    : "N/A";

  return (
    <div
      key={breed.id}
      className={`${styles.cardContainer} group`}  
    >
      <img
        src={breed.image ? breed.image.url : defaultImage}
        alt={breed.name}
        className={styles.cardImage}
      />
      <div className={`${styles.infoOverlay} group-hover:h-1/2`}>
        <h2 className={styles.breedName}>{breed.name}</h2>
        <div className={`${styles.hoverDetails} group-hover:block`}>
          <p className={styles.infoText}>
            <strong>Life Span:</strong> {breed.life_span}
          </p>
          {breed.temperament && (
            <p className={styles.infoText}>
              <strong>Temperament:</strong> {truncatedTemperament}
            </p>
          )}
          <button
            onClick={() => openBreedDetails(breed)}
            className={styles.detailsButton}
            aria-label={`View details of ${breed.name}`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreedCard;
