import { useMutation } from '@apollo/client';
import { CREATE_EVENT } from './queries';
import './App.css';

function App() {
  const [createEvent] = useMutation(CREATE_EVENT, {
    onError() {
      console.log('useMutation option onError');
    },
  });

  const handleCreateEvent = () => {
    createEvent({
      onError() {
        console.log('createEvent option onError');
      },
    });
  };

  return (
    <button type="button" onClick={handleCreateEvent}>
      Create event
    </button>
  );
}

export default App;
