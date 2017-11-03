import React from 'react';
import { connect } from 'react-redux';

const NotesShow = ({ note }) =>
  <div className="col-md-8">
    <h2>{note.name}</h2>
    <p>{note.description}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  const note = state.notes.find(note => note.id == ownProps.match.params.noteId)

  if (note) {
    return { note }
  } else {
    return { note: {} }
  }
};

export default connect(mapStateToProps)(NotesShow);
