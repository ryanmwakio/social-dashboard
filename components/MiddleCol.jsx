import React from 'react'

function MiddleCol() {
  return (
    <div>
      <div className="middle-col  px-4">
        <div className="my-10">
          <form method="GET">
            <div class="relative text-gray-600 focus-within:text-gray-400">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  class="focus:shadow-outline p-1 focus:outline-none"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="h-4 w-4"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                class="rounded-md border border-gray-300 bg-grayBrown  py-2 pl-10 text-xs text-white transition-all focus:border-lightBlue focus:bg-white focus:text-gray-900 focus:shadow-md focus:outline-none "
                placeholder="Search"
                autocomplete="off"
              />
            </div>
          </form>
        </div>

        <div className="flex w-full justify-between">
          <a href="#" className=" text-sm font-bold">
            Featured Stories
          </a>
          <a
            href=""
            className=" rounded-md bg-grayBrown p-2 text-xs font-medium"
          >
            Popular Stories
          </a>
        </div>

        <div class="posts">
          <img
            src="./images/palm-trees.jpg"
            alt=""
            className="w-70 mr-5 inline-block h-40 cursor-pointer rounded-xl object-cover shadow-lg"
          />

          <img
            src="./images/mosque.jpg"
            alt=""
            className="w-70 mr-5 inline-block h-40 cursor-pointer rounded-xl object-cover shadow-lg"
          />

          <img
            src="./images/penguin.jpg"
            alt=""
            className="w-70 mr-5 inline-block h-40 cursor-pointer rounded-xl object-cover shadow-lg"
          />

          <img
            src="./images/evening-sky.jpg"
            alt=""
            className="w-70 mr-5 inline-block h-40 cursor-pointer rounded-xl object-cover shadow-lg"
          />

          <img
            src="./images/zebra.jpg"
            alt=""
            className="w-70 mr-5 inline-block h-40 cursor-pointer rounded-xl object-cover shadow-lg"
          />

          <img
            src="./images/lion.jpg"
            alt=""
            className=" w-70 mr-5 inline-block h-40 cursor-pointer rounded-xl object-cover shadow-lg"
          />

          <img
            src="./images/coc.jpg"
            alt=""
            className=" w-70 mr-5 inline-block h-40 cursor-pointer rounded-xl object-cover shadow-lg"
          />

          <img
            src="./images/design.jpg"
            alt=""
            className=" w-70 mr-5 inline-block h-40 cursor-pointer rounded-xl object-cover shadow-lg"
          />

          <img
            src="./images/oreo.jpg"
            alt=""
            className=" w-70 mr-5 inline-block h-40 cursor-pointer rounded-xl object-cover shadow-lg"
          />

          <img
            src="./images/loading.gif"
            alt=""
            className="mt-16 mr-5 inline-block h-6 w-6"
          />
        </div>

        <div className="flex w-full justify-between">
          <a href="#" className=" text-sm font-bold">
            Latest Feed
          </a>
        </div>

        <div className="feed my-1 sm:my-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div>
              <img
                src="./images/elephants.jpg"
                alt=""
                className="h-full w-full cursor-pointer rounded-xl shadow-md"
              />
            </div>
            <div>
              <img
                src="./images/city.jpg"
                alt=""
                className="h-full w-full cursor-pointer rounded-xl shadow-md"
              />
            </div>
            <div>
              <img
                src="./images/arch.jpg"
                alt=""
                className="h-full w-full cursor-pointer rounded-xl shadow-md"
              />
            </div>
            <div>
              <img
                src="./images/arch2.jpg"
                alt=""
                className="h-full w-full cursor-pointer rounded-xl shadow-md"
              />
            </div>
            <div>
              <img
                src="./images/clouds.jpg"
                alt=""
                className="h-full w-full cursor-pointer rounded-xl shadow-md"
              />
            </div>
            <div>
              <img
                src="./images/nature.jpg"
                alt=""
                className="h-full w-full cursor-pointer rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleCol
