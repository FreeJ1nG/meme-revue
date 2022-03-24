import { useMeme } from "app/core/hooks/useMeme"
import { useState } from 'react'
import { BlitzPage, Image } from "blitz"
import Masonry from 'react-masonry-css'
import SaveButton from './SaveButton'
import SearchBar from './SearchBar'
import SearchAndSavedBar from './SearchAndSavedBar'
import MemeBox from './MemeBox'
import CompfestLogo from './CompfestLogo'
import MemeExploreBox from './MemeExploreBox'
import Title from './Title'
import Footer from './Footer'

const Home: BlitzPage = () => {
  const [search, setSearch] = useState(true)
  const [showFooter, setShowFooter] = useState(true)
  const [filterText, setFilterText] = useState('')
  const { memes, saveMeme, deleteMeme } = useMeme()

  return (
    <div>
      <title>Browse Memes</title>
      <div className="mt-6 mb-14 flex justify-center">
        <CompfestLogo />
      </div>
      <SearchAndSavedBar
        search={ search }
        handleClick={ (new_state) => (setSearch(new_state)) }
      />
      <Title />
      <SearchBar
        filterText={ filterText }
        onFilterTextChange={ setFilterText }
      />
      <MemeExploreBox
        filterText={ filterText }
        search={ search }
      />
      <Footer
        showFooter={ showFooter }
        handleClick={ () => (setShowFooter(!showFooter)) }
      />
    </div>
  )
}

export default Home
