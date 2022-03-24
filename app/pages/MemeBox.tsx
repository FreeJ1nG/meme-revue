import { useMeme } from "app/core/hooks/useMeme"
import { useState } from 'react'
import { BlitzPage, Image } from "blitz"
import Masonry from 'react-masonry-css'
import SaveButton from './SaveButton.tsx'
import SearchBar from './SearchBar.tsx'
import SearchAndSavedBar from './SearchAndSavedBar.tsx'
import CompfestLogo from './CompfestLogo.tsx'
import MemeExploreBox from './MemeExploreBox.tsx'

export default function MemeBox({ meme }) {
  const { memes, saveMeme, deleteMeme } = useMeme()
  return (
    <div className="w-full align-middle rounded-xl p-5">
      <div>
        <img
          src={ meme.imageSrc }
          alt={ meme.title }
          className="w-full rounded-tl-xl rounded-tr-xl"
        />
      </div>
      <div className="p-3 bg-desc-box grid place-items-center rounded-bl-xl rounded-br-xl">
        <h2 className="font-bold text-xl">{ meme.title }</h2>
        <SaveButton meme={ meme } />
      </div>
    </div>
  );
}
