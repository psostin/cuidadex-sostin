
import React from "react";
import styles from "./BreedDetails.module.css";
import { Breed } from "../types/Breed";

interface BreedDetailsProps {
  breed: Breed;
  closeBreedDetails: () => void;
  defaultImage: string;
}

const BreedDetails: React.FC<BreedDetailsProps> = ({ breed, closeBreedDetails, defaultImage }) => (
  <div className={styles.modalOverlay}>
    <div className={styles.modalContainer}>
      <button
        onClick={closeBreedDetails}
        className={styles.closeButton}
        aria-label="Close"
      >
        ✖
      </button>
      <img
        src={breed.image ? breed.image.url : defaultImage}
        alt={breed.name}
        className={styles.modalImage}
      />
      <h2 className={styles.breedName}>{breed.name}</h2>

      {/* Shared Information */}
      {breed.origin && (
        <p className={styles.infoText}>
          <strong>Origin:</strong> {breed.origin}
        </p>
      )}
      {breed.life_span && (
        <p className={styles.infoText}>
          <strong>Life Span:</strong> {breed.life_span}
        </p>
      )}
      {breed.temperament && (
        <p className={styles.infoText}>
          <strong>Temperament:</strong> {breed.temperament}
        </p>
      )}

      {/* Cat-Specific Information */}
      {breed.cfa_url && (
        <a href={breed.cfa_url} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Learn more on CFA
        </a>
      )}
      {breed.vetstreet_url && (
        <a href={breed.vetstreet_url} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Learn more on Vetstreet
        </a>
      )}
      {breed.vcahospitals_url && (
        <a href={breed.vcahospitals_url} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Learn more on VCA Hospitals
        </a>
      )}
      {breed.adaptability && (
        <p className={styles.infoText}>
          <strong>Adaptability:</strong> {breed.adaptability}
        </p>
      )}

      {/* Dog-Specific Information */}
      {breed.bred_for && (
        <p className={styles.infoText}>
          <strong>Bred For:</strong> {breed.bred_for}
        </p>
      )}
      {breed.breed_group && (
        <p className={styles.infoText}>
          <strong>Breed Group:</strong> {breed.breed_group}
        </p>
      )}
      {breed.height && breed.height.metric && (
        <p className={styles.infoText}>
          <strong>Height:</strong> {breed.height.metric} cm
        </p>
      )}

      {/* Description and Additional Links */}
      {breed.description && (
        <p className={styles.descriptionText}>{breed.description}</p>
      )}
      {breed.wikipedia_url && (
        <a
          href={breed.wikipedia_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Learn more on Wikipedia
        </a>
      )}
    </div>
  </div>
);

export default BreedDetails;
