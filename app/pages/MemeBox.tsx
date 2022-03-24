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
    <div className="flex flex-col w-full align-middle rounded-xl p-5">
      <img
        src={ meme.imageSrc }
        alt={ meme.title }
        className="rounded-tl-3xl rounded-tr-3xl"
      />
      <div className="relative -top-[21px]">
        <div className="p-5 bg-desc-box flex flex-wrap rounded-3xl">
          <h2 className="font-bold text-2xl my-5">{ meme.title }</h2>
          <div className="w-full" />
          <SaveButton meme={ meme } />
        </div>
      </div>
    </div>
  );
}
