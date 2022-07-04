import { FormControl, Flex, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
            addTodo({
                title: value,
            })
        );
        setValue('');
    };

    const handleInput = e => {
        setValue(e.target.value);
    }


  return (
    <form onSubmit={handleSubmit}>
        <Flex>
            <FormControl>
                <Input 
                    type='text'
                    value={value}
                    onChange={handleInput}
                 />
            </FormControl>
            <Button
                colorScheme='purple'
                type="submit"
                disabled={!value}
                >Add Goal
            </Button>
        </Flex>
    </form>
  )
}

export default AddTodo;