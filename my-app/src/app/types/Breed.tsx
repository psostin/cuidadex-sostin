// src/types/Breed.ts
export interface Breed {
    id: string;
    name: string;
    origin?: string;
    life_span?: string;
    temperament?: string;
    description?: string;
    image?: {
      url: string;
    };
    wikipedia_url?: string;
  
    // Specific to cats
    cfa_url?: string;
    vetstreet_url?: string;
    vcahospitals_url?: string;
    adaptability?: number;
  
    // Specific to dogs
    bred_for?: string;
    breed_group?: string;
    height?: {
      metric: string;
    };
  }
  