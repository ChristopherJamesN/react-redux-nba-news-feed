import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateNote} from '../actions';
import BackButton from '../components/BackButton';
import CommentsNew from './CommentsNew';
import { bindActionCreators } from 'redux';

class NotesShow extends Component {

    constructor(props) {
      super(props);
      this.state = {
        name: this.props.note.name,
        description: this.props.note.description,
        link: this.props.note.link,
        comments: this.props.note.comments,
      };
    }

  render() {
    return (
      <div>
        <div>
          <BackButton />
        </div>
        <br></br>
          <h3>{this.props.note.name}</h3>
          <p>{this.props.note.description}</p>
          {this.props.note.comments.map((comment, index) => <p key={index}>{comment}</p>)}
          <a href={this.props.note.link} target="_blank">Link to Associated Article</a>
        <br></br>
        <br></br>
        <div>
          <CommentsNew id={this.props.note.id} name={this.props.note.name} description={this.props.note.description} link={this.props.note.link}/>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line
  const note = state.notesReducer.notes.find(note => note.id == ownProps.match.params.noteId)

  if (note) {
    return { note }
  } else {
    return { note: {} }
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNote: updateNote
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesShow);
