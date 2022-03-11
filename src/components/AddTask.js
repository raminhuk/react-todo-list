import { useState } from 'react'
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { nanoid } from 'nanoid';

function AddTask({ addTask }) {
    const toast = useToast();

    function handleSubmit(e){
        e.preventDefault();

        if (!content) {
            toast({
                title: 'Sem conteúdo',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        
        const task = {
            id: nanoid(),
            body: content,
            check: false
        };
        
        addTask(task);
        setContent('');
    }

    const [content, setContent] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='4' mb='4'>
                <Input
                    h='46'
                    variant='filled'
                    placeholder='Digite sua tarefa'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button
                colorScheme='blue'
                px='8'
                pl='10'
                pr='10'
                h='46' 
                type='submit'>Adicionar</Button>
            </HStack>
        </form>
    );
}

export default AddTask;