import { useMeme } from "app/core/hooks/useMeme"
import { useState } from 'react'
import { BlitzPage, Image } from "blitz"
import Masonry from 'react-masonry-css'
import SaveButton from './SaveButton'
import SearchAndSavedBar from './SearchAndSavedBar'
import MemeBox from './MemeBox'
import CompfestLogo from './CompfestLogo'
import MemeExploreBox from './MemeExploreBox'

export default function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <div>
      <div className="flex justify-center w-full flex-wrap mb-8">
        <div className="w-1/2">
          <div>
            <h1 className="font-medium font-sans subpixel-antialiased text-xl">Search for a meme</h1>
          </div>
          <div className="w-full" />
          <form className="group w-full flex justify-center outline outline-2 outline-searchbar-outline rounded-xl pl-3 pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:stroke-fourth stroke-fourth/10 w-2/7 rounded-tl-xl rounded-bl-xl p-2 w-10 object-cover"
              fill="none" viewBox="0 0 22 22"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              className="w-full p-2 rounded-tr-xl rounded-br-xl bg-first border-solid placeholder:text-fourth/10 group-hover:placeholder:text-fourth"
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
