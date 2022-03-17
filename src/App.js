import { Heading, IconButton, VStack, useColorMode, useDisclosure, useToast } from "@chakra-ui/react";
import TaskList from './components/tasks';
import AddTask from './components/AddTask';
import { FaSun, FaMoon } from 'react-icons/fa'
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
        <VStack p={4}>
            <IconButton 
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                isRound='true'
                size='lg'
                alignSelf='flex-end'
                onClick={toggleColorMode}
            />

            <Heading
                p='5'
                mt='5'
                fontWeight='extrabold'
                size='2xl'
                bgGradient='linear(to-l, teal.300, blue.500)'
                bgClip='text'
            >
                Lista de tarefas
            </Heading>
            <AddTask addTask={addTask} />
            <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} deleteTaskAll={deleteTaskAll} checkTask={checkTask}/>
        </VStack>
    );
}

export default App;

