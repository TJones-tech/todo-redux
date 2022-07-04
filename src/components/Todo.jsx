import { Box, Checkbox, Text, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: todo.id, completed: !todo.completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: todo.id }));
  }
 
  return (
    <Box borderRadius='md' mb={1} mt={1} bgColor="lightgrey" p={2} display='flex' justifyContent='space-between'>
      <Checkbox colorScheme='teal' onChange={handleCompleteClick}>
        <Text as={todo.completed && "del"}>{todo.title}</Text>
      </Checkbox>
      <Button colorScheme='red' size='xs' onClick={handleDeleteClick}>Delete</Button>
    </Box>
  )
}

export default Todo;