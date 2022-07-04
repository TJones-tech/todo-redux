import { useSelector } from "react-redux";
import { Heading } from "@chakra-ui/react";

const CompletedTodos = () => {
    const completedTodos = useSelector((state) => 
        state.todos.filter((todo) => todo.completed === true)
    );

  return (
    <Heading size='md'>
        Total Completed Goals: {completedTodos.length}
    </Heading>
  );
};

export default CompletedTodos;