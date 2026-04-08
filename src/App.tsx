import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from '@/lib/AuthContext';
import { queryClientInstance } from '@/lib/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Portfolio from './components/pages/Portfolio';
// Add page imports here

const AuthenticatedApp = () => {

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App