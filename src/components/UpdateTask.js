import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
    useDisclosure,
    IconButton
  } from '@chakra-ui/react'
  import { useState } from 'react';
  import React from 'react';
  import { FiTrash2, FiEdit } from 'react-icons/fi'

function UpdateTask({ task, updateTask }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [body, setBody] = useState('');

    const initialRef = React.useRef()

    return (
        <>
            <IconButton
                icon={<FiEdit />}
                isRound='true'
                onClick={onOpen}
            />
          <Modal
            isCentered
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent w='90%'>
              <ModalHeader>Atualize sua tarefa </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <Input ref={initialRef} placeholder='Digite sua tarefa' defaultValue={task.body} onChange={(e) => setBody(e.target.value)} onFocus={(e) => setBody(e.target.value)}/>
                </FormControl>
              </ModalBody>
    
              <ModalFooter>
                <Button mr={3} onClick={onClose}>Cancelar</Button>
                <Button colorScheme='blue'  onClick={() => updateTask(task.id, body, onClose)}>
                  Salvar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}

export default UpdateTask;