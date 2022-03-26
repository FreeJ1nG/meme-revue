import { useMeme } from "app/core/hooks/useMeme"
import { useState } from "react"
import { BlitzPage, Image } from "blitz"
import Masonry from "react-masonry-css"
import SaveButton from "./SaveButton"
import SearchBar from "./SearchBar"
import MemeBox from "./MemeBox"
import CompfestLogo from "./CompfestLogo"
import MemeExploreBox from "./MemeExploreBox"

export default function SearchAndSavedBar({ search, handleClick }) {
  return (
    <div>
      <div className="left-0 right-0 ml-auto mr-auto relative h-12 rounded-xl bg-black/10 flex justify-center xl:w-1/3 lg:w-2/5 md:w-1/2 w-2/3">
        <div className="absolute flex top-0 bottom-0 left-0 right-0">
          <div className={(search ? "w-0" : "w-1/2") + " duration-700 transition-all"}></div>
          <div className="h-12 w-1/2 bg-gradient-to-t from-third to-second border-4 border-white/10 rounded-xl"></div>
        </div>
        <button className="group absolute left-0 w-1/2 py-3" onClick={() => handleClick(true)}>
          <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:bg-white/10 rounded-xl"></div>
          <div className="flex justify-center items-center">
            <img src="/search-button.png" className="w-5 h-5 mr-4" />
            <span className="font-semibold font-inter">Explore</span>
          </div>
        </button>
        <button className="group absolute right-0 w-1/2 py-3" onClick={() => handleClick(false)}>
          <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:bg-white/10 rounded-xl"></div>
          <div className="flex justify-center items-center">
            <img src="/saved-button.png" className="w-4 h-5 mr-4" />
            <span className="font-semibold font-inter">Saved</span>
          </div>
        </button>
      </div>
    </div>
  )
}
