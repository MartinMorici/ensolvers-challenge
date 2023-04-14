import { PencilSquareIcon, ArchiveBoxArrowDownIcon,TrashIcon  } from '@heroicons/react/24/outline'
const Notes = () => {
    // FFC872 FF9B73 B692FF 01D3FF E4EE8F
  return (
    <main className='pl-16 pt-12 w-full'>
        <h1 className='text-6xl font-semibold mb-16 '>My Notes</h1>
        <section className='flex flex-wrap gap-8 '>
            <article className='relative flex flex-col font-poppins font-medium rounded-2xl max-w-[300px] min-h-[250px] p-6 min-h w-full bg-[#FFC872]'>
                <h3 className='font-semibold'>This is a Notter note.</h3>
                <p className='font-normal text-[15px]'>This is an example of what you can do with Notter.</p>
                <div className=' relative mt-auto flex justify-between items-center gap-3 bottom-[-12px]'>
                    <h3 className='text-sm text-gray-500'>April 14, 2023</h3>
                    <div className='flex gap-2'>
                        <PencilSquareIcon className='rounded-full w-8 h-8 p-[4px] bg-black text-white'/>
                        <ArchiveBoxArrowDownIcon className='rounded-full w-8 h-8 p-[4px] bg-black text-white'/>
                        <TrashIcon className='rounded-full w-8 h-8 p-[4px] bg-black text-red-300'/>
                    </div>
                </div>
            </article>
            <article className='font-poppins font-medium rounded-2xl max-w-[300px] min-h-[250px] p-6 min-h w-full bg-[#FF9B73]'>
                This is a Notter note.
            </article>
        </section>
    </main>
  )
}

export default Notes