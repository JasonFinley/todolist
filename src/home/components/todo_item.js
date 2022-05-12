
const ToDoItem = ( { todoID, todoStatus, todoDate, todoInfo, setToDoData } ) => {

    function deleteData(){
        
        setToDoData( function( preData ){
            return preData.filter( function( item ){ return item.id !== todoID; })
        });

    }

    function dataDone(){
        setToDoData( function( preData ){
            const newArr = preData.map( function( item ){
                if( item.id === todoID && item.status === todoStatus )
                {
                    item.status = !item.status;
                }
                return item;
            } )
//            console.log( "preData", preData , "newArr", newArr );
            return newArr;
        });
    }

    function getStatusClass()
    {
        return todoStatus ? "list_item_done" : "" ;
    }

    return <div className="list_item">
        <input className="list_check" type="checkbox" onClick={ dataDone }/>
        <div className="list_item_info">
            <div>{ todoDate }</div>
            <div className={ getStatusClass() }>{ todoInfo }</div>
        </div>
        <button className="btn_del" onClick={ deleteData }>刪除</button>
    </div>;
}

export default ToDoItem;