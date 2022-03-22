import { Heading, IconButton, VStack, useColorMode, useDisclosure, useToast, Link, Flex } from "@chakra-ui/react";
import TaskList from './components/tasks';
import AddTask from './components/AddTask';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import { useState, useEffect } from 'react'

function App() {

    const toast = useToast();
    const [tasks, setTasks] = useState(
        () => JSON.parse(localStorage.getItem('tasks')) || []
    );

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function deleteTask(id){
        const newTasks = tasks.filter((task) => {
            return task.id !== id;
        });
        setTasks(newTasks);
    }

    function deleteTaskAll(){
        setTasks([]);
    }

    function checkTask(id){
        
        const newTasksCheck = tasks.map((task, index, array) => {
            if (task.id === id){
               task.check = !task.check;
            }
            return task;
        });

        setTasks(newTasksCheck);
    }

    function updateTask(id, body, onClose){

        const info = body.trim();

        if (!info) {
            toast({
                title: 'Digite sua tarefa',
                position: 'top',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            });
            
            return;
        }

        const newTasksUpdate = tasks.map((task, index, array) => {
            if (task.id === id){
               task.body = body;
               task.check = false
            }
            return task;
        });

        setTasks(newTasksUpdate);

        onClose();
    }

    function addTask(task){
        setTasks([...tasks, task]);
    }

    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <VStack p={4} minH='100vh' pb={28}>
            <IconButton 
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                isRound='true'
                size='md'
                alignSelf='flex-end'
                onClick={toggleColorMode}
            />

            <Heading
                p='5'
                fontWeight='extrabold'
                size='xl'
                bgGradient='linear(to-l, teal.300, blue.500)'
                bgClip='text'
            >
                Lista de tarefas
            </Heading>
            <AddTask addTask={addTask} />
            <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} deleteTaskAll={deleteTaskAll} checkTask={checkTask}/>
            
            <Flex position='absolute' bottom='5'>
                <Link href='https://github.com/raminhuk' target='_blank' >
                    <IconButton 
                    icon={<FaGithub/>}
                    isRound='true'
                    size='md'
                    m='1'
                /> 
                </Link>
                <Link href='https://www.linkedin.com/in/fabio-junior-raminhuk-740669121/' target='_blank'>
                    <IconButton 
                    icon={<FaLinkedin/>}
                    isRound='true'
                    size='md'
                    m='1'
                /> 
                </Link>
                <Link href='https://www.instagram.com/fabiormk/' target='_blank'>
                    <IconButton 
                    icon={<FaInstagram/>}
                    isRound='true'
                    size='md'
                    m='1'
                /> 
                </Link>
                <Link href='https://twitter.com/fabio_rmk' target='_blank'>
                    <IconButton 
                    icon={<FaTwitter/>}
                    isRound='true'
                    size='md'
                    m='1'
                /> 
                </Link>
                <Link href='https://www.facebook.com/fabio.raminhuk' target='_blank'>
                    <IconButton 
                    icon={<FaFacebook/>}
                    isRound='true'
                    size='md'
                    m='1'
                /> 
                </Link>
            </Flex>
        </VStack>
    );
}

export default App;

