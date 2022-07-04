import { Container, Heading } from '@chakra-ui/react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisFilter from './components/VisFilter';


const App = () => {
  return (
    <Container  maxW='container.sm'>
        <Heading my='4'>Goal List</Heading>
        <AddTodo />
        <TodoList />
        <VisFilter />
    </Container>
  )
}

export default App;