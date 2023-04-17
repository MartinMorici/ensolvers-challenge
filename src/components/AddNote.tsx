import { useRef, useState } from 'react'
import AddCategories from './AddCategories'

const AddNote = () => {
    const [categories, setCategories] = useState<string[]>([])
    const categorie = useRef<HTMLInputElement>(null)

  return (
    <div className='absolute inset-0 flex justify-center items-center bg-[#0000008a]'>
        <form className='max-w-[600px] w-full bg-white  rounded-3xl py-6 px-12 '>
            <h3 className='text-6xl font-semibold text-[#9562fa]'>Create note</h3>
            <div className='grid grid-cols-[100px_1fr] mt-8'>
                <label htmlFor="title">Title</label>
                <input className='px-2 h-8 border border-black' type="text" id='title' />
            </div>
            <div className='grid grid-cols-[100px_1fr] mt-4'>
                <label htmlFor="content">Content</label>
                <textarea className='px-2 py-1 border border-black h-60' id='content' />
            </div>
            <AddCategories categories={categories} setCategories={setCategories} categorie={categorie} ></AddCategories>
            <div className='flex mt-8 gap-4'>
                <button className='ml-auto border border-black py-1 px-3 text-white bg-black rounded-sm'>Cancel</button>
                <button className='border border-black py-1 px-3 text-white bg-black rounded-sm' type='submit'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default AddNote

