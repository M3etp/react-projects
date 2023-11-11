import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import TransactionPage from "./pages/Transaction/TransactionPage";
import Support from "./pages/Support/Support";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/transaction",
      element: <TransactionPage />,
    },
    {
      path: "/support",
      element: <Support />,
    },
  ]);

  return (
    <>
     <RouterProvider router={router} />
    
    </>
  )
}

export default App
