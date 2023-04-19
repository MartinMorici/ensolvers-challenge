import { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from 'react'
import AddCategories from './AddCategories'
import { NotesContext } from '../context/Context'
import { Note } from '../utils/note'

interface Props {
    noteEdit?: Note | undefined,
    setIsEdit?: (isEdit:boolean) => void
}

const AddNote = ({ noteEdit, setIsEdit }: Props) => {
    const {setNotes, notes, setShowAddNote} = useContext(NotesContext)
    const [categories, setCategories] = useState<string[]>([])
    const [selectedColor, setSelectedColor] = useState<string>('#FFC872')
    const categorie = useRef<HTMLInputElement>(null)
    const title = useRef<HTMLInputElement>(null)
    const content = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (noteEdit) {
            title.current!.value = noteEdit.title
            content.current!.value = noteEdit.content
            setCategories(noteEdit.categories)
        }
      }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(title.current!.value && content.current!.value && categories){
            if(noteEdit){
                let newNotes = [...notes]
                const index = notes.findIndex((note) => note.id === noteEdit.id)
                newNotes[index] = {id: new Date().valueOf(), title: title.current!.value, content:content.current!.value, categories: categories, color:selectedColor!, created: new Date().toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                localStorage.setItem('notes', JSON.stringify(newNotes))
                setNotes(newNotes)
                setCategories([])
            } else {
                const newNotes = [...notes, {id: new Date().valueOf(), title: title.current!.value, content:content.current!.value, categories: categories, color:selectedColor!, created: new Date().toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" })}]
                localStorage.setItem('notes', JSON.stringify(newNotes))
                setNotes(newNotes)
                setCategories([])
            }
            setShowAddNote(false)
            if(noteEdit){
                setIsEdit!(false);
            }
        }
    }

    const handleColor = (e:ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(e.target.value)
    }

  return (
    <div className='absolute inset-0 flex justify-center items-center bg-[#0000008a]'>
        <form className='max-w-[600px] w-full bg-white  rounded-3xl py-6 px-12 ' onSubmit={(e) => handleSubmit(e)}>
            <h3 className='text-6xl font-semibold'>{`${noteEdit ? 'Edit note' : 'Create note'}`}</h3>
            <div className='grid grid-cols-[100px_1fr] mt-8'>
                <label htmlFor="title">Title</label>
                <input ref={title} className='px-2 h-8 border border-black' type="text" id='title' />
            </div>
            <div className='grid grid-cols-[100px_1fr] mt-4'>
                <label htmlFor="content">Content</label>
                <textarea ref={content} className='px-2 py-1 border border-black h-60' id='content' />
            </div>
            <AddCategories categories={categories} setCategories={setCategories} categorie={categorie} ></AddCategories>
            <div className='grid grid-cols-[100px_1fr] mt-4'>
                <label htmlFor="color">Color</label>
                <div className='flex gap-2'>
                    <input className="cursor-pointer appearance-none h-[30px] w-[30px] checked:border-2 rounded-full border checked:border-[#000000] bg-[#FFC872]" value="#FFC872" type="radio" name="color" onChange={(e) => handleColor(e)} checked={( selectedColor === '#FFC872')}/>
                    <input className="cursor-pointer appearance-none h-[30px] w-[30px] checked:border-2 rounded-full border checked:border-[#000000] bg-[#FF9B73]" value="#FF9B73" type="radio" name="color" onChange={(e) => handleColor(e)} checked={( selectedColor === '#FF9B73')}/>
                    <input className="cursor-pointer appearance-none h-[30px] w-[30px] checked:border-2 rounded-full border checked:border-[#000000] bg-[#B692FF]" value="#B692FF" type="radio" name="color" onChange={(e) => handleColor(e)} checked={( selectedColor === '#B692FF')}/>
                    <input className="cursor-pointer appearance-none h-[30px] w-[30px] checked:border-2 rounded-full border checked:border-[#000000] bg-[#01D3FF]" value="#01D3FF" type="radio" name="color" onChange={(e) => handleColor(e)} checked={(selectedColor === '#01D3FF')}/>
                    <input className="cursor-pointer appearance-none h-[30px] w-[30px] checked:border-2 rounded-full border checked:border-[#000000] bg-[#E4EE8F]" value="#E4EE8F" type="radio" name="color" onChange={(e) => handleColor(e)} checked={(selectedColor === '#E4EE8F')}/>
                </div>
            </div>
            <div className='flex mt-8 gap-4'>
                <button className='ml-auto border border-black py-1 px-3 text-white bg-black rounded-sm' onClick={() =>{ 
                    setShowAddNote(false)
                    setIsEdit!(false)
                }}>Cancel</button>
                <button className='border border-black py-1 px-3 text-white bg-black rounded-sm' type='submit'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default AddNote

