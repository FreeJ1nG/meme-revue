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
  return (
    <button
      onClick={() => {
        if (meme.saved) {
          deleteMeme(meme.id);
        } else {
          saveMeme(meme.id);
        }
      }}
      className="w-1/2 transition ease-in-out delay-150 bg-gradient-to-t from-third to-second hover:-translate-y-1 hover:scale-110 hover:bg-second duration-300 m-1 p-2 rounded-lg"
    >
      <div className="flex justify-center items-center p-2">
        <img
          className="w-1/6 mr-3"
          src="/save-button.png"
        />
        <h2 className="font-semibold">
          { meme.saved ? 'Remove from Saved' : 'Save' }
        </h2>
      </div>
    </button>
  );
}
