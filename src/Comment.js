import { useState } from "react";
let Comment= (props) => {
    let [comments, setComments] = useState([])

    let addComment = (event) => {
        event.preventDefault();
        let commentObject = {
            title: event.target.title.value,
            body: event.target.body.value,
            name: event.target.name.value,
        };
        let newComments = [...comments, commentObject];
        setComments(newComments);
    }
    let deleteComment = (indexToDelete) => {
        let newComments = comments.filter(function (val, index) {
            if (indexToDelete == index) {
                return false;
            } else { return true }
        });
        setComments(newComments);
    }
    return (
        <div className="CommentFull">
            <div className="Commenthalf1">
            <form onSubmit={addComment}>
                <input type="text" name="title" placeholder="Title" className="CommentText"/>
                <textarea name="body" className="textArea" placeholder="Enter comment ..."> </textarea>
                <input type="text" name="name" className="CommentText" placeholder="Author" />
                <button className="CommentButton">Add</button>
            </form>
            </div>
            
            {comments.map((val, index) => {
                return (
                    <div className="Commenthalf">  
                        <div >
                            <p className="CommentTitle">Title : {val.title} </p>
                            <p className="Commentbody">Body : {val.body}</p>
                            <p className="CommentName">Name : {val.name}</p> 
                            <h5>Date: {props.date}/ {props.month}/ {props.year} </h5>
                            <button className="CommentButton"
                                onClick={() => {
                                    deleteComment(index)
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Comment;