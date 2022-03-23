import { useMeme } from "app/core/hooks/useMeme"
import { useState } from 'react'
import { BlitzPage, Image } from "blitz"
import Masonry from 'react-masonry-css'

function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <div>
      <div className="mt-5 flex justify-center">
        <h1 className="font-bold font-sans subpixel-antialiased text-xl">Search Bar</h1>
      </div>
      <div className="w-1/1 flex justify-center">
        <form className="w-1/2 flex justify-center">
          <img
          src="/search.png"
          className="rounded-tl-xl rounded-bl-xl p-2 w-10 bg-third object-cover"
          />
          <input
            className="w-full p-2 rounded-tr-xl rounded-br-xl bg-third border-solid"
            type="text"
            value={ filterText }
            placeholder="Search"
            onChange={ (e) => onFilterTextChange(e.target.value) }
          />
        </form>
      </div>
    </div>
  );
}

function SearchAndSavedBar({ search, handleClick }) {
  return (
    <div className="flex justify-center items-center">
      <button
        className={(search && "active") + " rounded-none bg-second p-2 px-20 place-self-center rounded-tl-xl rounded-bl-xl"}
        onClick={ () => handleClick(true) }
      >
        Search
      </button>
      <button
        className={(!search && "active") + " rounded-none bg-second m-1 p-2 px-20 place-self-center rounded-tr-xl rounded-br-xl"}
        onClick={ () => handleClick(false) }
      >
        Saved
      </button>
    </div>
  );
}

function SaveButton({ meme }) {
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
      className = "transition ease-in-out delay-150 bg-second hover:-translate-y-1 hover:scale-110 hover:bg-fourth duration-300 m-1 p-2 rounded-lg"
    >
      { meme.saved ? 'Remove from Saved' : 'Save' }
    </button>
  );
}

function MemeBox({ meme }) {
  const { memes, saveMeme, deleteMeme } = useMeme()
  return (
    <div className = "w-1/1 align-middle float-left p-2 rounded-lg bg-first hover:bg-opacity-50">
      <div>
        <img
          src={ meme.imageSrc }
          alt={ meme.title }
          className = "w-1/1 rounded-lg"
        />
      </div>
      <div className = "p-3 bg-third rounded-xl grid place-items-center">
        <h2 className = "container mx-auto">{ meme.title }</h2>
        <SaveButton className = "place-self-center" meme={ meme } />
      </div>
    </div>
  );
}

const breakpoints = {
  default: 5,
  1500: 4,
  1100: 3,
  900: 2,
  600: 1,
}

function MemeExploreBox({ filterText, search }) {
  const { memes, saveMeme, deleteMeme } = useMeme()
  let memesFound = 0;
  return (
    <div className="grid place-items-center">
      <h1 className="m-10 font-bold font-sans subpixel-antialiased text-5xl">Explore Memes</h1>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
      { memes.map((meme) => {
        if (search) {
          if (meme.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) {
            memesFound++;
            return <MemeBox meme={ meme } />
          } else {
            return;
          }
        } else {
          if (meme.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 && meme.saved) {
            memesFound++;
            return <MemeBox meme={ meme } />
          } else {
            return;
          }
        }
      })}
      </Masonry>
      <img
        src={ (memesFound == 0 && !search) && "/memenotfound.png"}
        className="w-1/2"
      />
    </div>
  );
}

const Home: BlitzPage = () => {
  const [search, setSearch] = useState(true)
  const [filterText, setFilterText] = useState('')
  const { memes, saveMeme, deleteMeme } = useMeme()

  return (
    <div>
      <SearchAndSavedBar
        search={ search }
        handleClick={(new_state) => (
          setSearch(new_state)
        )}
      />
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
