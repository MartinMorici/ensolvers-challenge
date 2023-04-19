import React, { ReactNode, useState } from 'react';
import { Note } from '../utils/note';

interface Props {
  children: ReactNode;
}

interface Context {
    notes: Note[];
    setNotes: (notes:Note[]) => void;
    archived: Note[];
    setArchived: (notes:Note[]) => void;
    showAddNote: boolean;
    setShowAddNote: (show:boolean) => void;
}

export const NotesContext = React.createContext({} as Context);


const NotesProvider = ({ children }: Props) => {
    const notesJson = localStorage.getItem('notes');
    const notesLS = notesJson ? JSON.parse(notesJson) : [];
    const [notes, setNotesState] = useState<Note[]>(notesLS);
    const [archived, setArchivedState] = useState<Note[]>([]);
    const [showAddNote, setShowAddNoteState] = useState<boolean>(false)

    const setNotes = (notes:Note[])=> {
        setNotesState(notes)
    }
    const setArchived = (notes:Note[])=> {
        setArchivedState(notes)
    }
    const setShowAddNote = (show: boolean) => {
        setShowAddNoteState(show);
    } 


  return <NotesContext.Provider value={{setNotes,notes, setShowAddNote, showAddNote, setArchived, archived}}>{children}</NotesContext.Provider>;
};

export default NotesProvider;