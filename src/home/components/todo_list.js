import ToDoItem from "./todo_item";

const ToDoList = ( { listData, setListData } ) => {
    return <div>
        {
            listData.map( function( item ){
                return <ToDoItem
                key = { item.id }
                todoID = { item.id }
                todoStatus = { item.status } 
                todoDate = { item.date } 
                todoInfo = { item.info } 
                setToDoData = { setListData }
                />
            })
        }
        </div>;
}

export default ToDoList;