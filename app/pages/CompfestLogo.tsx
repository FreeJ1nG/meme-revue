import { useMeme } from "app/core/hooks/useMeme"
import { useState } from 'react'
import { BlitzPage, Image } from "blitz"
import Masonry from 'react-masonry-css'
import SaveButton from './SaveButton.tsx'
import SearchBar from './SearchBar.tsx'
import SearchAndSavedBar from './SearchAndSavedBar.tsx'
import MemeBox from './MemeBox.tsx'
import MemeExploreBox from './MemeExploreBox.tsx'

export default function CompfestLogo() {
  return (
    <div className="flex items-center">
      <img
        src="/compfest-logo.png"
        className="w-6 h-6 mr-4"
      />
      <img
        src="/compfest-text.png"
        className="w-31 h-5"
      />
    </div>
  );
}
