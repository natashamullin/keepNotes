//store notes

const util = require("util");
const fs = require("fs");

// package that generates unique ids
const uuidv1 = require("uuid/v1");

const readFileAsync = uti.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync("db/db.json", "utf8");
    }

    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    getNotes() {
        return this.read().then(notes => {

            let parsedNotes;

            //if no note send an empty []
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
        });
    }

    addNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error("please enter a note with BOTH title and a note");
        }

        //add a unique id 
        const newNote = { title, text, id: uuidv1() };
        // get all notes
        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);
    }
}

module.export = new Store();