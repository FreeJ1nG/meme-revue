import { useMeme } from "app/core/hooks/useMeme"
import { useState } from 'react'
import { BlitzPage, Image } from "blitz"
import Masonry from 'react-masonry-css'
import SaveButton from './SaveButton.tsx'
import SearchBar from './SearchBar.tsx'
import SearchAndSavedBar from './SearchAndSavedBar.tsx'
import MemeBox from './MemeBox.tsx'
import CompfestLogo from './CompfestLogo.tsx'
import MemeExploreBox from './MemeExploreBox.tsx'
import Title from './Title.tsx'

const Home: BlitzPage = () => {
  const [search, setSearch] = useState(true)
  const [filterText, setFilterText] = useState('')
  const { memes, saveMeme, deleteMeme } = useMeme()

  return (
    <div>
      <title>Browse Memes</title>
      <CompfestLogo />
      <SearchAndSavedBar
        search={ search }
        handleClick={(new_state) => (
          setSearch(new_state)
        )}
      />
      <Title />
      <SearchBar
        filterText = { filterText }
        onFilterTextChange = { setFilterText }
      />
      <MemeExploreBox
        filterText = { filterText }
        search = { search }
      />
    </div>
  )
}

export default Home
