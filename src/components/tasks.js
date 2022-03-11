import React from 'react'
import { HStack, Box, VStack, IconButton, Button, Text, StackDivider, Spacer, Tag, TagLabel, TagRightIcon } from '@chakra-ui/react'
import { FiTrash2 } from 'react-icons/fi'
import { BiTaskX } from 'react-icons/bi'
import { Image } from '@chakra-ui/react'


function TaskList({ tasks, deleteTask, deleteTaskAll, checkTask }) {

    if (!tasks.length) {
        return (
            <>
            {/* <Tag mt='20' p='5' variant='outline' colorScheme='gray'>
                <TagLabel>Sem Tarefas</TagLabel>
                <TagRightIcon as={BiTaskX} />
            </Tag> */}
                <Box maxW='80%'>
                    <Image mt='20' src='images/empty.png' alt='Sua lista está vazia :(' />
                </Box>
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
    maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
    alignItems='stretch'
    >
        
        {tasks.map((task) =>(
            <HStack
            key={task.id}
            opacity={task.check == true ? '0.2' : '1'}
            >
                <Text
                    w='100%' 
                    p='8px'
                    borderRadius='lg'
                    as={task.check == true ? 's' : ''}
                    cursor='pointer'
                    // _hover={{ bg: 'gray.900' }}
                    onClick={() => checkTask(task.id)}>
                    {task.body}
                </Text>
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