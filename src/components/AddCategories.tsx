import { TagIcon, XMarkIcon  } from '@heroicons/react/24/solid'
import { RefObject } from 'react';

interface Props {
    categories: string[]; 
    categorie: RefObject<HTMLInputElement>;
    setCategories: (categories: string[]) => void
}


function AddCategories({categories,categorie, setCategories } : Props) {

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
        <div className='flex flex-col sm:grid sm:grid-cols-[100px_1fr] mt-4'>
            <label htmlFor="categories">Categories</label>
            <div>
                <div className=' p-2 h-24 border border-black w-full flex flex-wrap gap-y-1 overflow-auto'>
                    {categories.length <= 0 && <span className='text-gray-400'>You haven't added categories yet.</span>}
                    {categories.map((cat,index) => {
                        return (
                            <div key={index} className='flex gap-1 h-7 mr-3 rounded-md items-center text-[15px] font-semibold border border-gray-500 p-2'>
                                <TagIcon className='w-3 text-black' />
                                {cat}
                                <XMarkIcon onClick={() => { removeCategorie(cat) } } className=' cursor-pointer w-5 ml-1 text-red-600' />
                            </div>
                        )
                    })}
                </div>
                <div className='flex gap-4 mt-4'>
                    <input ref={categorie} className='px-2 h-8 border border-black w-full' id='categories' type="text" placeholder='New Category' />
                    <button className='w-20 border border-black' type='button' onClick={() => { addCategorie() } }>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddCategories