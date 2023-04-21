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
    isArchived: boolean;
    setIsArchived: (show:boolean) => void;
}

export const NotesContext = React.createContext({} as Context);


const NotesProvider = ({ children }: Props) => {
    const notesJson = localStorage.getItem('notes');
    const notesLS = notesJson ? JSON.parse(notesJson) : [];
    const [notes, setNotesState] = useState<Note[]>(notesLS);
    const archivedJson = localStorage.getItem('archived');
    const archivedLS = archivedJson ? JSON.parse(archivedJson) : [];
    const [archived, setArchivedState] = useState<Note[]>(archivedLS);
    const [isArchived, setIsArchived] = useState<boolean>(false)
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


  return <NotesContext.Provider value={{setNotes,notes, setShowAddNote, showAddNote, setArchived, archived, setIsArchived, isArchived}}>{children}</NotesContext.Provider>;
};

export default NotesProvider;