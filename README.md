# Note-Management-API
An API to write, recall, and delete notes using the Express framework.

## User Story
* AS A user, I want to be able to write and save notes
* I WANT to be able to delete notes I've written before
* SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context
For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Functionality

* Application should allow users to create and save notes.
* Application should allow users to view previously saved notes.
* Application should allow users to delete previously saved notes.

## Routing

  * GET `/notes` - Should return the `notes.html` file.
  * GET `*` - Should return the `index.html` file
  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
  * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.