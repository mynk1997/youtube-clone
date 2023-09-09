import React from "react";
import commentData from "../utils/commentData";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-8 h-8"
        alt="profile"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
    <Comment data={comment} />
    <div className="pl-5 border border-l-black ml-5">
      <CommentList comments={comment.replies} />
    </div>
  </div>
    
  ));
};

const CommentContainer = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-4">Comment:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
