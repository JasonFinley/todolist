import { useState } from "react";
import { v4 } from "uuid";

const Edit = ( { setData } ) => {

    const [ info, setTodo ] = useState("");
    function changeTodo( el ){
        setTodo( el.target.value );
    }

    const [ date, setDate ] = useState("");
    function changeDate( el ){
        setDate( el.target.value );
    }

    function addData(){
        setData( function( preData ){
            return [{
                id : v4(),
                status : false,
                date : date,
                info : info,
            }, ...preData ];
        });
    }

    return <div>
        <h1>To Do List</h1>
        <div className="edit_title_input" >
            <h3>待辦事項 : </h3>
            <input type="text" value={ info } onChange={ changeTodo } placeholder="新增待辦事項"></input>
        </div>
        <div className="edit_title_input">
            <h3>開始日期 : </h3>
            <input type="date" value={ date } onChange={ changeDate }></input>
        </div>
        <button className="btn_add" onClick= { addData } >新增</button>
    </div>;
}

export default Edit;