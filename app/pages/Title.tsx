import { useMeme } from "app/core/hooks/useMeme"
import { useState } from 'react'
import { BlitzPage, Image } from "blitz"
import Masonry from 'react-masonry-css'
import SaveButton from './SaveButton.tsx'
import SearchAndSavedBar from './SearchAndSavedBar.tsx'
import MemeBox from './MemeBox.tsx'
import CompfestLogo from './CompfestLogo.tsx'
import MemeExploreBox from './MemeExploreBox.tsx'

export default function Title() {
  return (
    <div className="flex justify-center flex-wrap my-12">
      <span className="font-bold text-[64px]">Meme ReVue</span>
      <div className="w-full text-[16px]" />
      <span>(get it, cuz IT Dev, vuejs)</span>
    </div>
  );
}
