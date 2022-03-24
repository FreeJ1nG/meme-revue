import { useMeme } from "app/core/hooks/useMeme"
import { useState } from 'react'
import { BlitzPage, Image } from "blitz"
import Masonry from 'react-masonry-css'
import SaveButton from './SaveButton'
import SearchBar from './SearchBar'
import SearchAndSavedBar from './SearchAndSavedBar'
import MemeBox from './MemeBox'
import CompfestLogo from './CompfestLogo'

const breakpoints = {
  default: 3,
  1100: 2,
  600: 1,
}

export default function MemeExploreBox({ filterText, search }) {
  const { memes, saveMeme, deleteMeme } = useMeme()
  let memesFound = 0;

  let firstMeme;

  for (var meme of memes) {
    if (search) {
      if (meme.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) {
        firstMeme = meme;
        memesFound++;
      }
    } else {
      if (meme.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 && meme.saved) {
        firstMeme = meme;
        memesFound++;
      }
    }
  }

  if (memesFound == 1) {
    return (
      <>
        <div className="w-full flex justify-center">
          <img
            src={ firstMeme.imageSrc }
            alt={ firstMeme.title }
            className="w-1/3 rounded-tl-xl rounded-tr-xl mt-10  "
          />
        </div>
        <div className="w-full flex justify-center">
          <div className="w-1/3 bg-third p-3 grid place-items-center rounded-bl-xl rounded-br-xl">
            <h1 className="font-bold text-xl">{ firstMeme.title }</h1>
            <SaveButton meme={ firstMeme }/>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="grid place-items-center">
        {
          (memesFound == 0 && !search) &&
          <img
            alt="memenotfound"
            src="/memenotfound.png"
            className="w-1/2"
          />
        }
        <div className="mx-20">
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            { memes.map((meme) => {
              if (search) {
                if (meme.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) {
                  return <MemeBox key={ meme.id } meme={ meme } />
                } else {
                  return;
                }
              } else {
                if (meme.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 && meme.saved) {
                  return <MemeBox key={ meme.id } meme={ meme } />
                } else {
                  return;
                }
              }
            })}
          </Masonry>
        </div>
      </div>
    );
  }
}
