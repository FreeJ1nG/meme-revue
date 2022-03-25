import CompfestLogo from './CompfestLogo'

export default function Footer({ showFooter, handleClick }) {
  return (
    <div>
    {
      showFooter &&
      <div className="group fixed inset-x-0 bottom-0 h-40 w-full bg-[#2D2F45]">
        <button
          onClick={ () => handleClick() }
          className="absolute right-4 top-4"
        >
          <img
            src="/dropdown.png"
            alt="dropdown"
            className="w-10 animate-bounce"
          />
        </button>
        <div className="flex w-full h-full flex-wrap xl:flex-nowrap">
          <div className="flex items-center xl:w-1/2 xl:h-full xl:justify-start justify-center w-full h-2/3">
            <div className="relative xl:left-20">
              <div className="opacity-80 w-full mb-4 flex justify-center xl:flex-none xl:justify-start">
                <CompfestLogo />
              </div>
              <span className="font-inter font-medium text-white/80">&copy; 2022 COMPFEST. All rights reserved</span>
            </div>
          </div>
          <div className="flex xl:flex-row-reverse xl:justify-start xl:h-full xl:w-1/2 justify-center items-center justify-start h-1/3 w-full">
            <a
              href="https://medium.com/compfest"
              className="ml-8 xl:mr-16"
            >
              <img
                src="/medium.png"
                alt="medium"
                className="w-6 h-[13.5px]"
              />
            </a>
            <a
              href="https://line.me/R/ti/p/%40compfest"
              className="ml-8"
            >
              <img
                src="/line.png"
                alt="line"
                className="w-5 h-[19px]"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/compfest/"
              className="ml-8"
            >
              <img
                src="/linkedin.png"
                alt="linkedin"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.instagram.com/compfest/"
              className="ml-8"
            >
              <img
                src="/instagram.png"
                alt="instagram"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UC03QmhwvQEWVI608A-RCEpw/"
              className="ml-8"
            >
              <img
                src="/youtube.png"
                alt="youtube"
                className="w-5 h-4"
              />
            </a>
            <a
              href="https://twitter.com/compfest"
              className="ml-8"
            >
              <img
                src="/twitter.png"
                alt="twitter"
                className="w-5 h-[18px]"
              />
            </a>
            <a
              href="https://www.facebook.com/COMPFEST/"
              className="ml-8"
            >
              <img
                src="/facebook.png"
                alt="facebook"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    }
    {
      !showFooter &&
      <div className="fixed inset-x-0 bottom-0 h-14 w-full bg-[#2D2F45]">
        <button onClick={ () => handleClick() }>
          <img
            src="/reveal.png"
            alt="reveal"
            className="w-10 absolute right-4 bottom-0 animate-bounce"
          />
        </button>
      </div>
    }
    </div>
  );
}