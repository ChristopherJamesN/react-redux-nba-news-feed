import React from 'react';
import { connect } from 'react-redux';
import NotesNew from './NotesNew';
import BackButton from '../components/BackButton'
import { ListGroup, ListGroupItem } from 'reactstrap';

const NewsShow = ({ newsItem }) =>
  <div>
    <div>
      <BackButton />
    </div>
    <br></br>
      <ListGroup fill>
        <ListGroupItem>
          <h3> {newsItem.title} </h3>
        </ListGroupItem>
        <ListGroupItem>
          <p>{newsItem.description}</p>
        </ListGroupItem>
        <ListGroupItem>
          <a href={newsItem.url} target="_blank">Link to Full Story</a>
        </ListGroupItem>
      </ListGroup>
      <br></br>
    <div>
      <NotesNew link={newsItem.url} name={newsItem.title} description={newsItem.description}></NotesNew>
    </div>
  </div>;

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line
  const newsItem = state.newsReducer.news.find(newsItem => newsItem.publishedAt == ownProps.match.params.newsItemPublishedAt)

  if (newsItem) {
    return { newsItem }
  } else {
    return { newsItem: {} }
  }
};

export default connect(mapStateToProps)(NewsShow);
