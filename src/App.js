import { QueryClient, QueryClientProvider } from 'react-query';
import Planets from './components/Planets';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Planets />
    </QueryClientProvider>
  );
}
