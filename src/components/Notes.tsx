import React from 'react'

const Notes = () => {
    // FFC872 FF9B73 B692FF 01D3FF E4EE8F
  return (
    <main className='pl-16 pt-12 w-full'>
        <h1 className='text-6xl font-semibold mb-16 '>My Notes</h1>
        <section className='flex flex-wrap gap-8 '>
            <article className='font-poppins font-medium rounded-2xl max-w-[300px] min-h-[250px] p-6 min-h w-full bg-[#FFC872]'>
                This is a Notter note.
            </article>
            <article className='font-poppins font-medium rounded-2xl max-w-[300px] min-h-[250px] p-6 min-h w-full bg-[#FF9B73]'>
                This is a Notter note.
            </article>
        </section>
    </main>
  )
}

export default Notes