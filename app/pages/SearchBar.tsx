import { useMeme } from "app/core/hooks/useMeme"
import { useState } from 'react'
import { BlitzPage, Image } from "blitz"
import Masonry from 'react-masonry-css'
import SaveButton from './SaveButton.tsx'
import SearchAndSavedBar from './SearchAndSavedBar.tsx'
import MemeBox from './MemeBox.tsx'
import CompfestLogo from './CompfestLogo.tsx'
import MemeExploreBox from './MemeExploreBox.tsx'

export default function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <div>
      <div className="flex justify-center w-full flex-wrap">
        <div className="w-1/2">
          <div>
            <h1 className="font-medium font-sans subpixel-antialiased text-xl">Search for a meme</h1>
          </div>
          <div className="w-full" />
          <form className="w-full flex justify-center outline outline-2 outline-searchbar-outline rounded-xl pl-3 pr-3">
            <img
              alt="search"
              src="/search.png"
              className="w-2/7 rounded-tl-xl rounded-bl-xl p-2 w-10 bg-first object-cover"
            />
            <input
              className="w-full p-2 rounded-tr-xl rounded-br-xl bg-first border-solid"
              type="text"
              value={ filterText }
              placeholder="or die"
              onChange={ (e) => onFilterTextChange(e.target.value) }
            />
          </form>
        </div>
      </div>
    </div>
  );
}
