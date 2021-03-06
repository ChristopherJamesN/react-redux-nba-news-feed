import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getNotes } from '../actions';
import NotesList from '../components/NotesList';
import NotesShow from './NotesShow';

class NotesPage extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            path={`${this.props.match.url}/:noteId`}
            component={NotesShow}
          />
          <Route
            exact
            path={this.props.match.url}
            render={() => (
              <div>
                <h3>Please select a story from the list.</h3>
                <NotesList notes={this.props.notes} />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notesReducer.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getNotes: bindActionCreators(getNotes, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
