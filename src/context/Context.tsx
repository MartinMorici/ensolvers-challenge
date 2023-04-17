import React, { ReactNode, useState } from 'react';
import { Note } from '../utils/note';



interface Props {
  children: ReactNode;
}

interface Context {
    notes: Note[];
    setNotes: (notes:Note[]) => void;
    showAddNote: boolean;
    setShowAddNote: (show:boolean) => void;
}

export const NotesContext = React.createContext({} as Context);


const NotesProvider = ({ children }: Props) => {
    const [notes, setNotesState] = useState<Note[]>([])
    const [showAddNote, setShowAddNoteState] = useState<boolean>(false)

    const setNotes = (notes:Note[])=> {
        setNotesState(notes)
    }

    const setShowAddNote = (show: boolean) => {
        setShowAddNoteState(show);
    } 

  return <NotesContext.Provider value={{setNotes,notes, setShowAddNote, showAddNote}}>{children}</NotesContext.Provider>;
};

export default NotesProvider;