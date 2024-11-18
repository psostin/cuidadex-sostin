"use client";
import Head from 'next/head';
import './globals.css';
import NavBar from './components/NavBar';
import { useState } from 'react';
import CatGrid from './components/CatGrid';
import DogGrid from './components/DogGrid';

export default function Home() {
  const [showCatGrid, setShowCatGrid] = useState(true);

  return (
    <div>
      <Head>
        <title>CuidaDex</title>
      </Head>
      
      <NavBar />
      
      <main className="flex flex-col items-center w-full max-w-7xl mx-auto mt-8 px-4">
        {/* Welcome Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome 👋</h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Search and discover cat and dog breeds
        </p>
        
        {/* Toggle Buttons for Cats and Dogs */}
        <div className="flex space-x-4 mb-8">
          <button
            className={`px-6 py-2 rounded-md font-semibold ${
              showCatGrid ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setShowCatGrid(true)}
          >
            Cats
          </button>
          <button
            className={`px-6 py-2 rounded-md font-semibold ${
              !showCatGrid ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setShowCatGrid(false)}
          >
            Dogs
          </button>
        </div>

        {/* Conditionally Render Cat or Dog Grid */}
        {showCatGrid ? <CatGrid /> : <DogGrid />}
      </main>
    </div>
  );
}
