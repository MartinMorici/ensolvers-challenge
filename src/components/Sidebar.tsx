import React from 'react'
import addIcon from '../assets/addIcon.svg'
import { PlusIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline'
const Sidebar = () => {
  return (
    <aside className='w-36 border-r border-gray-400 flex flex-col items-center h-screen'>
      <h2 className='mt-16 text-xl'>Notter</h2>
      <PlusIcon className=' mt-20 rounded-full w-11 h-11 p-2 bg-black text-white'></PlusIcon>
      <ArchiveBoxIcon className=' mt-8 rounded-full w-11 h-11 p-2 bg-black text-white'></ArchiveBoxIcon>
    </aside>
  )
}

export default Sidebar