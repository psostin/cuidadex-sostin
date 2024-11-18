
import React, { useState, useEffect } from "react";
import BreedCard from "./BreedCard";
import BreedDetails from "./BreedDetails";
import PaginationControls from "./PaginationControls";
import { Breed } from "../types/Breed";
import { PetGridProps } from "../types/PetGridProps";
import styles from "./PetGrid.module.css";

const PetGrid: React.FC<PetGridProps> = ({ type }) => {
  
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null);
  const [page, setPage] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeSearch, setActiveSearch] = useState<string | null>(null);
  const limit = 12;

  const isCat = type === "cat";
  const apiUrl = isCat ? "/api/cats" : "/api/dogs";
  const defaultImage = isCat ? "/images/default-cat.jpg" : "/images/default-dog.jpg";
  const searchPlaceholder = isCat ? "Search for your favorite cat breeds 🐱!" : "Search for your favorite dog breeds 🐶!";

  // Fetch breeds data
  useEffect(() => {
    async function fetchBreeds() {
      const endpoint = activeSearch
        ? `${apiUrl}/search?q=${activeSearch}&attach_image=1`
        : `${apiUrl}/breeds?page=${page}&limit=${limit}`;
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch breeds");
        }
        const data: Breed[] = await response.json();
        setBreeds(data);
      } catch (err) {
        console.error((err as Error).message);
      }
    }
    fetchBreeds();
  }, [page, activeSearch]);

  const handleNextPage = () => setPage(page + 1);
  const handlePreviousPage = () => setPage(page > 0 ? page - 1 : 0);
  const openBreedDetails = (breed: Breed) => setSelectedBreed(breed);
  const closeBreedDetails = () => setSelectedBreed(null);

  const handleSearch = () => {
    setActiveSearch(searchQuery);
    setPage(0); 
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setActiveSearch(null);
    setSearchQuery("");
    setPage(0); 
  };

  return (
    <div className={styles.container}>
      {/* Search*/}
      {activeSearch ? (
        <div className={styles.searchBarContainer}>
          <span className="text-lg font-semibold">Showing search for: {activeSearch}</span>
          <button onClick={clearSearch} className={styles.clearButton}>
            Clear Search
          </button>
        </div>
      ) : (
        <div className={styles.searchPlaceholder}>
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white px-3 py-1 rounded-md hover:bg-purple-600 transition-colors"
          >
            Search
          </button>
        </div>
      )}

      {/*  No Breeds Found */}
      {breeds.length === 0 && activeSearch && (
        <div className={styles.noResultsContainer}>
          <img src="/images/meme.jpg" alt="No breeds found" className={styles.noResultsImage} />
          <p className="text-gray-600 text-lg">Womp Womp, no information found for that breed. Please try another one!</p>
        </div>
      )}

      {/* Pet Grid */}
      {breeds.length > 0 && (
        <div className={styles.petGrid}>
          {breeds.map((breed) => (
            <BreedCard
              key={breed.id}
              breed={breed}
              defaultImage={defaultImage}
              openBreedDetails={openBreedDetails}
            />
          ))}
        </div>
      )}

      {/* Pagination*/}
      {!activeSearch && breeds.length > 0 && (
        <div className={styles.paginationControls}>
          <PaginationControls
            page={page}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
          />
        </div>
      )}

      {/* Breed Details */}
      {selectedBreed && (
        <BreedDetails
          breed={selectedBreed}
          closeBreedDetails={closeBreedDetails}
          defaultImage={defaultImage}
        />
      )}
    </div>
  );
};

export default PetGrid;


