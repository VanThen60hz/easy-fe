import { useEffect, useState } from "react";
import queryString from "query-string";
import "./App.scss";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFilterForm from "./components/PostFilterForm";
import Clock from "./components/Clock";
import BetterClock from "./components/BetterClock";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
import MagicBox from "./components/MagicBox/index";
import Hero from "./components/Hero/Hero";

function App() {
    // const [todoList, setTodoList] = useState([
    //   { id: 1, title: "Toothbrush" },
    //   { id: 2, title: "Coding" },
    //   { id: 3, title: "Do tasks" },
    // ]);

    // const [postList, setPostList] = useState();
    // const [pagination, setPagination] = useState({
    //   _page: 1,
    //   _limit: 10,
    //   _totalRows: 11,
    // });

    // const [filters, setFilters] = useState({
    //   _limit: 10,
    //   _page: 1,
    //   title_like: ''
    // });

    // useEffect(() => {
    //   const fetchPostList = async () => {
    //     try {
    //       const paramsString = queryString.stringify(filters);
    //       const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
    //       const response = await fetch(requestUrl);
    //       const responseJson = await response.json();

    //       const { data, pagination } = responseJson;

    //       setPostList(data);
    //       setPagination(pagination);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    //   fetchPostList();
    // }, [filters]);

    // const handlePageChange = (newPage) => {
    //   console.log(newPage);
    //   setFilters({
    //     ...filters,
    //     _page: newPage,
    //   });
    // };

    // const handleTodoClick = (todo) => {
    //   const index = todoList.findIndex((x) => x.id === todo.id);
    //   if (index < 0) return;

    //   const newTodoList = [...todoList];
    //   newTodoList.splice(index, 1);
    //   setTodoList(newTodoList);
    // };

    // const handleTodoFormSubmit = (formValues) => {
    //   const newTodo = {
    //     id: todoList[todoList.length - 1].id + 1,
    //     ...formValues,
    //   };

    //   console.log(newTodo);
    //   const newTodoList = [...todoList];
    //   newTodoList.push(newTodo);
    //   setTodoList(newTodoList);
    // };

    // const handleFilterChange = (newFilter) =>{
    //   console.log("new filters", newFilter);
    //   setFilters({
    //     ...filters,
    //     _page: 1,
    //     title_like: newFilter.searchTerm,
    //   })
    // }

    // const [showClock, setShowClock] = useState(true);

    const [count, setCount] = useState(0);

    return (
        <div className="app">
            <h1>React hooks - Clock</h1>

            <p>{count}</p>

            <button onClick={() => setCount(count + 1)}>Increase</button>

            <Hero name="Van Then" />

            {/* <MagicBox /> */}

            {/* {showClock && <Clock />}
      <BetterClock /> */}

            {/* <button onClick={() => setShowClock(false)}>Hide clock</button> */}
            {/* <PostFilterForm onSubmit={handleFilterChange}/>
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}

            {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
            {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
        </div>
    );
    // I changed here
}

export default App;
