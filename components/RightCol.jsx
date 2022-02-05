import React from 'react'

function RightCol() {
  return (
    <div className="right-col">
      <div className="px-4">
        <div className="my-10 flex justify-end">
          <a
            href=""
            className=" text-2xs rounded-xl bg-dashBlue py-2 px-3 text-white"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline-block h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </span>{' '}
            Create New Post
          </a>
        </div>

        <img
          src="./images/smile.jpg"
          alt=""
          className="h-56 w-full rounded-xl object-cover"
        />

        <h3 className="mt-5 text-xs font-bold uppercase">Eva Benedict</h3>
        <div className="text-2xs my-1">
          <span className="font-bold">682</span> Photos
          <span className="ml-3 font-bold">579</span> Followers
        </div>

        <p className="my-4 text-xs">
          Eva is a digital nomad who has focused on her life, time and resources
          on discovering the world and travelling to new places.
          <br />
          <br /> She has visited Kenya, Zanzibar, Albania, Montenegro and many
          other countries. She is currently exploring the Seychelles.
        </p>

        <div className="my-5">
          <h3 className=" text-xs font-bold">Location</h3>
          <span className="text-xs">Currently in Seychelles</span>
        </div>
        <div className="my-5">
          <h3 className=" text-xs font-bold">Profession</h3>
          <span className="text-xs">Lawyer</span>
        </div>
        <div className="my-5">
          <h3 className=" text-xs font-bold">Hobbies</h3>
          <span className="text-xs">Travelling, Swimming, Reading</span>
        </div>

        <hr />
        <div className=" footer  mt-2 w-full bg-gray-200 p-2 text-xs">
          Designed by:{' '}
          <a
            href="https://www.behance.net/lateefahadele"
            className="inline-block border-b border-dashed border-dashBlue text-dashBlue"
            rel="noopener noreferrer"
            target="_blank"
          >
            Lateefah Adele
          </a>{' '}
          /{' '}
          <a
            href="mailto:lateefahadele@gmail.com"
            className="inline-block border-b border-dashed border-dashBlue text-dashBlue"
          >
            lateefahadele@gmail.com
          </a>
          <p className="my-2 text-xs">developed by: Ryan Mwakio</p>
        </div>
      </div>
    </div>
  )
}

export default RightCol
