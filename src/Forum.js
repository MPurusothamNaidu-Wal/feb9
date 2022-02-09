import { useState } from "react";
let Forum= (props) => 
    {
    let [comments, setComments] = useState([])
    let addComment = (event) => {
        event.preventDefault();
        let commentObject = {
            body: event.target.body.value,
            name: event.target.name.value,
        };
        let newComments = [...comments, commentObject];
        setComments(newComments);
    }
    return (
        <div  className="divAvg">
        <h1>{props.topic}</h1>
        <form onSubmit={addComment}>
                <input type="text" className="Todoinput" name="name"placeholder="Author" /><br/>
                <textarea name="body" className="textArea" placeholder="Enter comment ..."> </textarea>
                <button className="CommentButton" >Add</button>
            </form>
            <div>
                <table className="table">
                    <tr >
                        <td className="td" >Author</td>
                        <td className="td">Reply</td>
                    </tr>
                    {comments.map(function(val,index) {
                        return(
                            <tr>
                                <td className="td">{val.name}</td>
                                <td className="td">{val.body} </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}
export default Forum;