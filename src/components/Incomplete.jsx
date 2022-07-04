import { useSelector } from "react-redux";
import { Heading } from "@chakra-ui/react";

const InCompletedTodos = () => {
    const inCompletedTodos = useSelector((state) => 
        state.todos.filter((todo) => todo.completed === false)
    );

  return (
    <Heading size='md'>
        Total Incompleted Goals: {inCompletedTodos.length}
    </Heading>
  );
};

export default InCompletedTodos;