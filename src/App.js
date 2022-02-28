import { Heading, IconButton, VStack, useColorMode } from "@chakra-ui/react";
import TaskList from './components/tasks';
import AddTask from './components/AddTask';
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState, useEffect } from 'react'

function App() {

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
            <TaskList tasks={tasks} deleteTask={deleteTask} deleteTaskAll={deleteTaskAll} />
        </VStack>
    );
}

export default App;

