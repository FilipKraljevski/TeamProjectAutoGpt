import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import BlockPage from "../Pages/BlockPage";
import HistoryPage from "../Pages/HistoryPage";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: "login", element: <LoginPage/>},
            {path: "register", element: <RegisterPage/>},
            {path: "blocks", element: (
            <ProtectedRoute>
                <BlockPage />
            </ProtectedRoute>
            )},
            {path: "executions", element: (
                <ProtectedRoute>
                    <HistoryPage />
                </ProtectedRoute>
            )}
        ]
    }
])