import { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';

const queryClient = new QueryClient();

function App() {
  let [page, setPage] = useState('planets');

  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <QueryClientProvider client={queryClient}>
        <div className="content">
          {page === 'planets' ? <Planets /> : <People />}
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
