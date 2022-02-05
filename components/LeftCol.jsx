import React from 'react'

function LeftCol() {
  return (
    <div className="left-col">
      <div className="flex w-full justify-start sm:justify-center">
        <img
          src="./images/profile.jpg"
          alt="profile picture"
          className="h-36 w-36 cursor-pointer rounded-full border-2 border-dashBlue object-cover sm:h-16 sm:w-16  "
        />
      </div>

      <div className="mt-5 flex justify-start sm:my-3 sm:justify-center">
        <h3 className=" text-medium  font-bold sm:text-sm">Big Mitch</h3>
      </div>

      <div className=" mt-7 flex w-full justify-between text-center">
        <div>
          <h3 className="text-medium mb-1 font-medium sm:text-xs">Post</h3>
          <p className="text-medium font-light text-gray-500 sm:text-xs">156</p>
        </div>
        <div className="mx-1">
          <h3 className="text-medium mb-1 font-medium sm:text-xs">Followers</h3>
          <p className="text-medium font-light text-gray-500 sm:text-xs">45m</p>
        </div>
        <div>
          <h3 className="text-medium mb-1 font-medium sm:text-xs">Following</h3>
          <p className=" text-medium font-light text-gray-500 sm:text-xs">
            400
          </p>
        </div>
      </div>

      <div className="dash-transition flex justify-start sm:justify-center">
        <div className="mt-10 sm:mt-16">
          <div className="mb-4 mr-4 inline-block cursor-pointer  text-dashBlue sm:mr-0 sm:block ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block h-6 w-6 sm:mr-2 sm:h-4 sm:w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span className=" text-medium inline-block sm:text-xs">Feed</span>
          </div>

          <div className=" dash-transition mb-4 mr-4 inline-block cursor-pointer text-gray-500 hover:text-dashBlue focus:text-dashBlue active:text-dashBlue sm:mr-0  sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block h-6 w-6 sm:mr-2 sm:h-4 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className=" text-medium inline-block sm:text-xs">
              Explore
            </span>
          </div>

          <div className="dash-transition mb-4 mr-4 inline-block cursor-pointer text-gray-500 hover:text-dashBlue focus:text-dashBlue active:text-dashBlue sm:mr-0  sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block h-6 w-6 sm:mr-2 sm:h-4 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
            <span className="  text-medium inline-block sm:text-xs">
              Trending Tags
            </span>
          </div>

          <div className="dash-transition mb-4 mr-4 inline-block cursor-pointer text-gray-500 hover:text-dashBlue focus:text-dashBlue active:text-dashBlue sm:mr-0  sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1 inline-block h-6 sm:mr-2 sm:h-4 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <span className=" text-medium inline-block sm:text-xs">
              Top Post
            </span>
          </div>

          <div className="dash-transition mb-4 mr-4 inline-block cursor-pointer text-gray-500 hover:text-dashBlue focus:text-dashBlue active:text-dashBlue sm:mr-0  sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h- mr-1 inline-block h-6 w-6 sm:mr-2 sm:h-4 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className=" text-medium inline-block sm:text-xs">People</span>
          </div>

          <div className="dash-transition mb-4 mr-4 inline-block cursor-pointer text-gray-500 hover:text-dashBlue focus:text-dashBlue active:text-dashBlue sm:mr-0  sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6sm:mr-2 mr-1 inline-block h-6 w-6 sm:h-4 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className=" text-medium inline-block sm:text-xs">
              Notification
            </span>
          </div>

          <div className="dash-transition mb-4 mr-4 inline-block cursor-pointer text-gray-500 hover:text-dashBlue focus:text-dashBlue active:text-dashBlue sm:mr-0  sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6sm:mr-2 mr-1 inline-block h-6 w-6 sm:h-4 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <span className=" text-medium inline-block sm:text-xs">Direct</span>
          </div>

          <div className="dash-transition mb-4 mr-4 inline-block cursor-pointer text-gray-500 hover:text-dashBlue focus:text-dashBlue active:text-dashBlue sm:mr-0  sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h- mr-1 inline-block h-6 w-6 sm:mr-2 sm:h-4 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span className=" text-medium inline-block sm:text-xs">Stats</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftCol
