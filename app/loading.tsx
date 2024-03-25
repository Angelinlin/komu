
import React from 'react'

const Loading = () => {
    return (
        <main className='h-screen w-full flex items-center justify-center'>
            <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
        </main>
    )
}

export default Loading