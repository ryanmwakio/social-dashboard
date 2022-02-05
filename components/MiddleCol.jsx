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
                class="rounded-md border border-gray-300 bg-grayBrown  py-2 pl-10 text-xs text-white transition-all focus:bg-white focus:text-gray-900 focus:shadow-sm focus:outline-none"
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

        <div class="posts w-96 overflow-x-scroll">
          <div className="inline-block">
            <img
              src="./images/palm-trees.jpg"
              alt=""
              className="w-50 mr-5 inline-block h-40 cursor-pointer rounded-xl object-cover shadow-xl"
            />
          </div>
          <div className="inline-block">
            <img
              src="./images/palm-trees.jpg"
              alt=""
              className="w-50 mr-5 inline-block h-40 cursor-pointer rounded-xl object-cover shadow-xl"
            />
          </div>
          <div className="inline-block">
            <img
              src="./images/palm-trees.jpg"
              alt=""
              className="w-50 mr-5 inline-block h-40 cursor-pointer rounded-xl object-cover shadow-xl"
            />
          </div>
          <div className="inline-block">
            <img
              src="./images/palm-trees.jpg"
              alt=""
              className="w-50 mr-5 inline-block h-40 cursor-pointer rounded-xl object-cover shadow-xl"
            />
          </div>
          <div className="inline-block">
            <img
              src="./images/palm-trees.jpg"
              alt=""
              className="w-50 mr-5 inline-block h-40 cursor-pointer rounded-xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleCol
