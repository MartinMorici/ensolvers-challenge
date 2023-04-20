import { PlusIcon, ArchiveBoxIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import React, { useContext } from 'react';
import { NotesContext } from '../context/Context';

const Sidebar = () => {
  const { setShowAddNote, setIsArchived, isArchived } = useContext(NotesContext);
  return (
    <aside className='p-8 gap-3 sm:gap-0 sm:p-0 sm:w-36 justify-center sm:justify-normal  border-r border-gray-400 flex sm:flex-col items-center sm:h-screen border border-b sm:border-b-0'>
      <h2 className='sm:mt-16 text-xl mr-6 sm:mr-0'>Notter</h2>
      <PlusIcon onClick={() => setShowAddNote(true)} className=' sm:mt-20 rounded-full w-11 h-11 p-2 bg-black text-white cursor-pointer'></PlusIcon>
      {isArchived ? <ArrowUturnLeftIcon className=' sm:mt-8 rounded-full w-11 h-11 p-2 bg-black text-white cursor-pointer' onClick={() => setIsArchived(false)} /> : <ArchiveBoxIcon className=' sm:mt-8 rounded-full w-11 h-11 p-2 bg-black text-white cursor-pointer' onClick={() => setIsArchived(true)}></ArchiveBoxIcon>}
    </aside>
  );
};

export default Sidebar;
