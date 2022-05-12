const Footer = ( { todoData } ) => {

    function getSum(){ return todoData.length; }
    function getNoDone(){ 
        let sum = 0;
        todoData.forEach( (item) => { if( !item.status ) sum += 1; })
        return sum;
    }

    function getDone(){ 
        let sum = 0;
        todoData.forEach( (item) => { if( item.status ) sum += 1; })
        return sum;
    }

    return <div className="footer">
        <div>全部 : <span>{ getSum() }</span></div>
        <div>未完成 : <span className="footer_no_done">{ getNoDone() }</span></div>
        <div>完成 : <span className="footer_done">{ getDone() }</span></div>
    </div>;
}

export default Footer;