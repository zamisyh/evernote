import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className="mb-4 shadow-xl card w-96 bg-base-100 animate-bounce">   
        <div className="card-body animate-pulse">
            <div className="flex justify-between card-title">
                <div className="w-full h-4 bg-slate-200"></div>
                <div className="h-4 w-36 bg-slate-200"></div>
            </div>
            <div className="w-full h-4 bg-slate-200"></div>
            <div className="w-40 h-4 mt-5 bg-slate-200"></div>
        </div>
    </div>
  )
}

export default LoadingSkeleton