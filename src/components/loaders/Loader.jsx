import React from "react";
import Skeleton from "react-loading-skeleton";

const LoadingDefault = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex justify-center items-center space-x-1 text-2xl text-gray-700">
        <svg
          fill="none"
          className="w-14 h-72 animate-spin"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>

        <div className="">Espere un momento ...</div>
      </div>
    </div>
  );
};
const LoadingConcurso = () => {
  return (
    <div className="w-96 m-auto">
      <div className=" grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out h-96">
        <div className="col-span-3 row-span-4 p-1 m-1">
          <Skeleton height="250px"/>
        </div>

        <div className="col-span-3 row-span-1">
          <div className="flex align-bottom flex-col leading-none p-2 md:p-4">
            <div className="flex flex-row justify-between items-center">
              <div className="flex items-center no-underline   text-black">
                <span className="ml-2 text-xl font-bold">
                  <Skeleton width="300px"/>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 row-span-1">
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <Skeleton />
              <br />
              <Skeleton />
            </h1>
            <p className="text-grey-darker text-sm">
              <Skeleton />
            </p>
          </header>
        </div>

        <div className="col-span-3 row-span-1">
          <ul className="flex flex-row pl-2 text-gray-600 overflow-x-scroll hide-scroll-bar">
            <li className="py-1">
              <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
                <Skeleton />

                <Skeleton />

                <Skeleton />
              </div>
            </li>
          </ul>
        </div>
        <button className=" text-white p-2 w">
          <Skeleton />
        </button>
      </div>
    </div>
  );
};

const LoadingCapitulos = () =>{

    return (
        <div className="flex flex-col border w-56 h-60 mr-12 my-6">
        <div className="flex flex-col content-center my-7">
          <button >
          
          <picture className="flex items-center justify-center mx-auto transition rounded-full w-28 h-28">
              <Skeleton width="120px" height="120px" circle={true}/>
          </picture>
          <span className="font-medium text-white text-center"><Skeleton /></span>
          </button>
  
        </div>
        <Skeleton width="100%" height="24px" />
      </div>

    )

}



export { LoadingDefault, LoadingConcurso,LoadingCapitulos };
