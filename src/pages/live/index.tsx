import type { NextPage } from "next";

const Live:NextPage = () => {
  return (
    <div className="py-10 px-4 divide-y-2 space-y-4">
        {[...Array(5)].map((_,index)=>(
          <div className="pt-4 px-4" key={index}>
              <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm"/>
              <h3 className="font-medium text-gray-700 text-lg mt-2">동네 산책 Live</h3>
          </div>  
        ))}
        <button className="fixed bottom-24 right-5 bg-orange-400 rounded-full p-4 shadow-xl text-white hover:bg-orange-500 cursor:pointer border-transparent transition-colors"> 
        <svg className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        ></path>
        </svg>
        </button>
    </div>
  )
}

export default Live;