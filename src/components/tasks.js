import React from 'react'
import { HStack, VStack, IconButton, Button, Text, StackDivider, Spacer, Tag, TagLabel, TagRightIcon } from '@chakra-ui/react'
import { FiTrash2 } from 'react-icons/fi'
import { BiTaskX } from 'react-icons/bi'


function TaskList({ tasks, deleteTask, deleteTaskAll }) {

    if (!tasks.length) {
        return (
            <>
            <Tag mt='20' p='5' variant='outline' colorScheme='gray'>
                <TagLabel>Sem Tarefas</TagLabel>
                <TagRightIcon as={BiTaskX} />
            </Tag>
            </>
        );
    }

  return (
      <>
    <VStack
    divider={<StackDivider />}
    borderColor='gray.100'
    borderWidth='2px'
    mb='10'
    p='4'
    borderRadius='lg'
    w='100%'
    maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
    alignItems='stretch'
    >
        {tasks.map((task) =>(
            <HStack key={task.id}>
                <Text>{task.body}</Text>
                <Spacer />
                <IconButton
                    icon={<FiTrash2 />}
                    isRound='true'
                    onClick={() => deleteTask(task.id)}
                />

            </HStack>
        ))}
        
    </VStack>
    <Button
        colorScheme='gray'
        px='8'
        h='45'
        color='gray.500'
        mt='10'
        onClick={() => deleteTaskAll()}
        >
        Excluir Todos
        </Button>
    </>
  );
}

export default TaskList;