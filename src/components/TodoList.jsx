import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync } from "../redux/todoSlice";
import Todo from "./Todo";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);


  return (
    <Box>
      {todos.length ? todos.map(todo => (
            <Todo key={`todo-${todo.id}`} todo={todo} />
        )) : <Box textAlign='center' my='4'> </Box>}
    </Box>
  )
}

export default TodoList;