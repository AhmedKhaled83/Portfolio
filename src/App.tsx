import { Toaster } from "./components/ui/toaster";
import { queryClientInstance } from '@/lib/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Portfolio from './components/pages/Portfolio';

const AuthenticatedApp = () => {

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
};


function App() {

  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <AuthenticatedApp />
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App