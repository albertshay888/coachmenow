import AlignItems from './AlignItems';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

function App() {
  return (
    <div className='App'>
      <AlignItems className='alignItems' />
      <NotificationContainer />
    </div>
  );
}

export default App;
