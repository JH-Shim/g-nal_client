import React from 'react';

function PlaceComment({ comments }) {
  return comments.length > 0 ? (
    comments.map((comment, idx) => (
      <div key={idx} id="comments">
        <div>{`${comment.nickname} ${comment.createdAt}`}</div>
        <div>{comment.comment}</div>
      </div>
    ))
  ) : (
    <div id="comments">
      <div>comment를 달아보세요!</div>
    </div>
  );
}

export default PlaceComment;
