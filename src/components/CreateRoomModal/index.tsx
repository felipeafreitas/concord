import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  Input,
  ModalFooter,
  Textarea,
} from '@chakra-ui/react';
import api from 'api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function CreateRoomModal({ isOpen, onOpen, onClose }: props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  let navigate = useNavigate();

  const onSubmit = async () => {
    console.log(name, description);
    try {
      await api.post('/chat/room', {
        name,
        description,
      });
      navigate(`../chat?room=${name.toLowerCase()}`, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size='xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>NEW CHANNEL</ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <Input
              placeholder='Channel name'
              size='lg'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <Textarea
              placeholder='Channel Description'
              size='lg'
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onSubmit}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreateRoomModal;
