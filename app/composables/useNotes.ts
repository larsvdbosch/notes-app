import { useStorage } from "@vueuse/core";

import type { Note } from "../../types/note";

export const useNotes = () => {
	const notes = useStorage<Note[]>("notes-array", []);
	const noteTitle = useState("note-title", () => "");
	const noteContent = useState("note-content", () => "");

	const addNote = () => {
		notes.value.push({
			id: crypto.randomUUID(),
			title: noteTitle.value,
			content: noteContent.value,
			date: new Date().toLocaleDateString("nl-NL", { year: "numeric", month: "long", day: "numeric" }),
		});
		noteTitle.value = "";
		noteContent.value = "";
	};

	const removeNotes = () => {
		localStorage.clear();
		window.location.reload();
	};

	return { notes, noteTitle, noteContent, addNote, removeNotes };
};
