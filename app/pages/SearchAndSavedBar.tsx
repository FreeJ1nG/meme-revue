import { useMeme } from "app/core/hooks/useMeme"
import { useState } from 'react'
import { BlitzPage, Image } from "blitz"
import Masonry from 'react-masonry-css'
import SaveButton from './SaveButton.tsx'
import SearchBar from './SearchBar.tsx'
import MemeBox from './MemeBox.tsx'
import CompfestLogo from './CompfestLogo.tsx'
import MemeExploreBox from './MemeExploreBox.tsx'

export default function SearchAndSavedBar({ search, handleClick }) {
  const active = " bg-gradient-to-t from-third to-second border-4 border-white/10 rounded-xl ";
  return (
    <div className="flex justify-center items-center">
      <div className="rounded-xl bg-black/10 flex justify-center xl:w-1/3 lg:w-2/5 m:w-1/2 sm:w-3/4">
        <button
          className={(search && active) + " w-1/2 py-3 px-16"}
          onClick={ () => handleClick(true) }
        >
          <div className="flex justify-center items-center">
            <img
              src="/search-button.png"
              className="w-5 h-5 mr-4"
            />
            <span className="font-semibold">
              Search
            </span>
          </div>
        </button>
        <button
          className={(!search && active) + " w-1/2 py-3 px-16"}
          onClick={ () => handleClick(false) }
        >
          <div className="flex justify-center items-center">
            <img
              src="/saved-button.png"
              className="w-4 h-5 mr-4"
            />
            <span className="font-semibold">
              Saved
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
