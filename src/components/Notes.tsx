import { PencilSquareIcon, ArchiveBoxArrowDownIcon,TrashIcon  } from '@heroicons/react/24/outline'
import { useContext, useState } from 'react'
import { NotesContext } from '../context/Context'
import { Note } from '../utils/note'
import AddNote from './AddNote'

const Notes = () => {
    const {notes,setNotes, setArchived, archived} = useContext(NotesContext)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [noteEdit, setNoteEdit] = useState<Note | undefined>()

    const removeNote = (id: number) => {
        const newNotes = notes.filter((note) => note.id !== id)
        localStorage.setItem('notes', JSON.stringify(newNotes));
        setNotes(newNotes);
    }

    const addArchived = (note: Note) => {
        const isArchived = archived.find((arch) => arch.id === note.id)
        if (isArchived){
            const newArchived = archived.filter((arch) => arch.id !== note.id)
            setArchived(newArchived)
        } else{
            const newArchived = [...archived, note]
            setArchived(newArchived)
        }
        const icon = document.querySelector(`.archivebox-${note.id}`)
        icon?.classList.toggle('animate-archived')
        icon?.classList.toggle('text-green-500')
    }

    const editNote = (note: Note) => {
        setIsEdit(true)
        setNoteEdit(note);
    }

  return (
    <>
        <main className='pl-16 pt-12 w-full'>
            <h1 className='text-6xl font-semibold mb-16 '>My Notes</h1>
            <section className='flex flex-wrap gap-8 '>
                {notes.map((note) => {
                    return (
                        <article key={note.id} className={`relative flex flex-col font-poppins font-medium rounded-2xl max-w-[300px] min-h-[250px] p-6 min-h w-full bg-[${note.color}]`}>
                            <h3 className='font-semibold'>{note.title}</h3>
                            <p className='font-normal text-[15px]'>{note.content}</p>
                            <div className=' relative mt-auto flex justify-between items-center gap-3 bottom-[-12px]'>
                                <h3 className='text-sm text-gray-500'>{note.created}</h3>
                                <div className='flex gap-2'>
                                    <PencilSquareIcon className='cursor-pointer rounded-full w-8 h-8 p-[4px] bg-black text-white' onClick={() => { editNote(note)}}/>
                                    <div className='overflow-hidden cursor-pointer rounded-full w-8 h-8 bg-black p-[4px] text-white' onClick={() => addArchived(note)}>
                                        <ArchiveBoxArrowDownIcon className={`archivebox-${note.id} relative`}/>
                                    </div>
                                    <TrashIcon className='cursor-pointer rounded-full w-8 h-8 p-[4px] bg-black text-red-300' onClick={() => {removeNote(note.id)}} />
                                </div>
                            </div>
                        </article>
                    )
                })}
                {/* <article className='relative flex flex-col font-poppins font-medium rounded-2xl max-w-[300px] min-h-[250px] p-6 min-h w-full bg-[#FFC872]'>
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
                </article> */}
            </section>
        </main>
        {isEdit && <AddNote noteEdit={noteEdit} setIsEdit={setIsEdit}/>}
    </>
  )
}

export default Notes