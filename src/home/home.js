import { useState } from "react";
import { v4 } from "uuid";
import Edit from "./components/todo_edit";
import List from "./components/todo_list";
import Footer from "./components/todo_footer";
import "./home.css"

const Home = () => {

    const [ data, setData ] = useState([{
        id : v4(),
        status : false,
        date : "2022-05-11",
        info : "KryptoCamp - 區塊鏈人才實戰培訓營",
    },{
        id : v4(),
        status : false,
        date : "2022-05-11",
        info : "區塊鏈練習",
    },{
        id : v4(),
        status : false,
        date : "2022-05-04",
        info : "區塊鏈預習",
    }]);

    return <div className="app">
        <Edit setData={ setData }/>
        <List listData={ data } setListData = { setData }/>
        <Footer todoData={ data } />
    </div>;
}

export default Home;