import { PencilSquareIcon, ArchiveBoxArrowDownIcon,TrashIcon  } from '@heroicons/react/24/outline'
import { useContext, useEffect, useState } from 'react'
import { NotesContext } from '../context/Context'
import { Note } from '../utils/note'
import AddNote from './AddNote'

const Notes = () => {
    const {notes,setNotes, setArchived, archived, isArchived} = useContext(NotesContext)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [noteEdit, setNoteEdit] = useState<Note | undefined>()
    const [warningRemove, setWarningRemove] = useState<boolean>(false)
    const [idRemove, setIdRemove] = useState<number>(0)
    const [filterCategories, setFilterCategories] = useState<string[]>([])

    const removeNote = (id: number) => {
        const newNotes = notes.filter((note) => note.id !== id)
        const newArchived = archived.filter((note) => note.id !== id)
        localStorage.setItem('notes', JSON.stringify(newNotes));
        setNotes(newNotes);
        setArchived(newArchived)
        setWarningRemove(false);
    }

    const addArchived = (note: Note) => {
        const isArchived = archived.find((arch) => arch.id === note.id)
        if (isArchived){
            const newArchived = archived.filter((arch) => arch.id !== note.id)
            localStorage.setItem('archived', JSON.stringify(newArchived));
            setArchived(newArchived)
        } else{
            const newArchived = [...archived, note]
            localStorage.setItem('archived', JSON.stringify(newArchived));
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

    const filterNotes = (selected : string) => {
        const notesJson = localStorage.getItem('notes');
        const notesLS = notesJson ? JSON.parse(notesJson) : [];
        const filteredNotes = notesLS.filter((note : Note) => note.categories.includes(selected))
        setNotes(filteredNotes)
        if (selected === "all"){
            setNotes(notesLS)
        }
    }

    useEffect(() => {
        const categorias : string[] = [];
  
        notes.forEach(nota => {
            nota.categories.forEach(categoria => {
            if (!categorias.includes(categoria)) {
                categorias.push(categoria);
            }
            });
         });
        
        setFilterCategories(categorias)
    }, [notes])
    

  return (
    <>
        <main className='flex flex-col items-center sm:block sm:pl-16 pt-12 w-full'>
            <h1 className='text-6xl font-semibold mb-16 '>{isArchived ? 'Archived Notes' : 'My Notes'}</h1>
            <div className='flex gap-4 items-center mb-3'>
                <h2>Categories:</h2>
                <select name="" id="" className='border border-black' onChange={(e) => filterNotes(e.target.value)}>
                    <option value="all">All</option>
                    {filterCategories?.map((cat) => <option value={cat}>{cat}</option> )}
                </select>
            </div>
            <section className='flex flex-wrap justify-center sm:justify-normal gap-8 '>
                {(isArchived ? archived : notes).map((note) => {
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
                                    <TrashIcon className='cursor-pointer rounded-full w-8 h-8 p-[4px] bg-black text-red-300' 
                                    onClick={() => {
                                        setWarningRemove(true)
                                        setIdRemove(note.id)}} 
                                    />
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>
        </main>
        {isEdit && <AddNote noteEdit={noteEdit} setIsEdit={setIsEdit}/>}
        {warningRemove && <div className='absolute inset-0 flex justify-center items-center bg-[#0000008a]'>
            <div className='p-10 rounded-xl bg-white flex flex-col'> 
                <h4 className='text-2xl mb-10 flex flex-col justify-center items-center'><span className=" relative -top-5 text-red-500 text-5xl px-2">⚠</span> Are you sure You want to delete this note?</h4>
                <div className='ml-auto'>
                    <button className='border border-black py-1 px-3 text-white bg-black rounded-sm text-xl' onClick={() => removeNote(idRemove)}>Yes</button>
                    <button className='border border-black py-1 px-3 text-white bg-black rounded-sm ml-4 text-xl' onClick={() => setWarningRemove(false)}>No</button>
                </div>
            </div>
        </div>}
    </>
  )
}

export default Notes