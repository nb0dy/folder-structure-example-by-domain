import { useAuth } from '@folder-structure-example-by-domain/shared/utils/auth';
import { BrowserRouter } from 'react-router-dom';

import ApplicationRoutes from './routes';

export function App() {
  const { loggedIn } = useAuth();

  if (!loggedIn) {
    return <div>Not logged in</div>;
  }

  return (
    <BrowserRouter>
      <ApplicationRoutes />
    </BrowserRouter>
  );
}

export default App;
