# Specifications for the React-Redux Assessment

Specs:
- [x] Using React-Redux for the project. (Yes, project created with react-redux)
- [x] Your app should have one HTML page to render your react-redux application (public/index.html)
- [x] There should be 2 container components (News page, news show, new notes, notes page, and notes show are all container components.)
- [x] There should be 5 stateless components (App.js, Navbar.js, NewsList.js, NotesList.js, Footer)
- [x] There should be 3 routes (Route to all news, all notes, add a new note, and home)
- [x] The Application must make use of react-router and proper RESTful routing (Yes react router used for all routing, news items and note items can be viewed by id.)
- [x] Use Redux middleware to respond to and modify state change (Thunk is used to respond to and modify state change.)
- [x] Make use of async actions to send data to and receive data from a server (Use async actions to send and receive data from external news api as well as internal rails API.)
- [x] Your Rails API should handle the data persistence. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods. (Existing notes are fetch from the rails server and are persisted when a new note is created via a post request. Existing notes can also be updated via a put request to the server.)
- [x] Your client-side application should handle the display of data with minimal data manipulation (Done)
- [x] Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it! (React-Bootstrap used for styling.)
