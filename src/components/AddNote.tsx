import { TagIcon, XMarkIcon  } from '@heroicons/react/24/solid'
import { FormEvent, useRef, useState } from 'react'

const AddNote = () => {
    const [categories, setCategories] = useState<string[]>([])
    const categorie = useRef<HTMLInputElement>(null)

    const addCategorie = () => {
        if(categorie.current!.value){
            const newCategories = [...categories, categorie.current!.value]
            setCategories(newCategories);
        }
        categorie.current!.value='';
    }
    const removeCategorie = (cat: string) => {
        const newCategories = categories.filter((categ) => categ !== cat);
        setCategories(newCategories);
    }
  return (
    <div className='absolute inset-0 flex justify-center items-center bg-[#0000008a]'>
        <form className='max-w-[600px] w-full bg-white  rounded-3xl py-6 px-12 '>
            <h3 className='text-6xl font-semibold'>Create note</h3>
            <div className='grid grid-cols-[100px_1fr] mt-8'>
                <label htmlFor="title">Title</label>
                <input className='px-2 h-8 border border-black' type="text" id='title' />
            </div>
            <div className='grid grid-cols-[100px_1fr] mt-4'>
                <label htmlFor="content">Content</label>
                <textarea className='px-2 py-1 border border-black h-60' id='content' />
            </div>
            <div className='grid grid-cols-[100px_1fr] mt-4'>
                <label htmlFor="categories">Categories</label>
                <div>
                    <div className=' p-2 h-24 border border-black w-full flex flex-wrap gap-y-1 overflow-auto'>
                        {categories.length <= 0 && <span className='text-gray-400'>You haven't added categories yet.</span> }
                        {categories.map((cat)=> {
                            return (
                                <div className='flex gap-1 h-7 mr-3 items-center text-[15px] font-semibold border border-gray-500 p-2'>
                                    <TagIcon className='w-3 text-black'/> 
                                    {cat} 
                                    <XMarkIcon onClick={() => {removeCategorie(cat)}} className=' cursor-pointer w-5 ml-1 text-red-600'/>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex gap-4 mt-4' >
                        <input ref={categorie} className='px-2 h-8 border border-black w-full' id='categories' type="text" placeholder='New Category' />
                        <button className='w-20 border border-black' type='button' onClick={() => {addCategorie()}}>Add</button>
                    </div>
                </div>
            </div>
            <div className='flex mt-8 gap-4'>
                <button className='ml-auto border border-black py-1 px-3 text-white bg-black rounded-sm'>Cancel</button>
                <button className='border border-black py-1 px-3 text-white bg-black rounded-sm' type='submit'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default AddNote