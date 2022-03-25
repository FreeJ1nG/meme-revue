import { useMeme } from "app/core/hooks/useMeme"
import { useState } from 'react'
import { BlitzPage, Image } from "blitz"
import Masonry from 'react-masonry-css'
import SaveButton from './SaveButton'
import SearchAndSavedBar from './SearchAndSavedBar'
import MemeBox from './MemeBox'
import CompfestLogo from './CompfestLogo'
import MemeExploreBox from './MemeExploreBox'

export default function Title() {
  return (
    <div className="flex justify-center flex-wrap my-12">
      <span className="font-bold text-[32px] xl:text-[64px]">Meme ReVue</span>
      <div className="w-full text-[16px] font-inter font-medium" />
      <span>(Get it, cuz IT Dev, Vuejs)</span>
    </div>
  );
}
