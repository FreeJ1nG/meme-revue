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
            alt="search"
            src="/search.png"
            className="w-2/7 rounded-tl-xl rounded-bl-xl p-2 w-10 bg-third object-cover"
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
      className="transition ease-in-out delay-150 bg-second hover:-translate-y-1 hover:scale-110 hover:bg-fourth duration-300 m-1 p-2 rounded-lg"
    >
      { meme.saved ? 'Remove from Saved' : 'Save' }
    </button>
  );
}

function MemeBox({ meme }) {
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
      <div className="p-3 bg-third grid place-items-center rounded-bl-xl rounded-br-xl">
        <h2 className="font-bold text-xl">{ meme.title }</h2>
        <SaveButton meme={ meme } />
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
              return <MemeBox key = { meme.id } meme={ meme } />
            } else {
              return;
            }
          } else {
            if (meme.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 && meme.saved) {
              return <MemeBox key = { meme.id } meme={ meme } />
            } else {
              return;
            }
          }
        })}
      </Masonry>
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
