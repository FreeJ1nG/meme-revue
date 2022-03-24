import { useMeme } from "app/core/hooks/useMeme"
import { useState } from 'react'
import { BlitzPage, Image } from "blitz"
import Masonry from 'react-masonry-css'
import SearchBar from './SearchBar.tsx'
import SearchAndSavedBar from './SearchAndSavedBar.tsx'
import MemeBox from './MemeBox.tsx'
import CompfestLogo from './CompfestLogo.tsx'
import MemeExploreBox from './MemeExploreBox.tsx'

export default function SaveButton({ meme }) {
  const { memes, saveMeme, deleteMeme } = useMeme()
  let color = "";
  if (meme.saved) {
    color = " bg-black/10 ";
  } else {
    color = " bg-gradient-to-t from-third to-second "
  }
  return (
    <button
      onClick={() => {
        if (meme.saved) {
          deleteMeme(meme.id);
        } else {
          saveMeme(meme.id);
        }
      }}
      className= {"w-40 h-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-70 duration-300 m-1 p-2 rounded-lg " + color}
    >
      <div className="flex justify-center items-center">
        {( meme.saved ?
            <img
              src="/saved-meme-button.png"
              className="w-4 mr-3"
            />
            :
            <img
              src="/save-button.png"
              className="w-4 mr-3"
            />
        )}
        <h2 className="font-semibold font-inter">
          { meme.saved ? 'Saved' : 'Save' }
        </h2>
      </div>
    </button>
  );
}
