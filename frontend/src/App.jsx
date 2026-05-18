import {

  BrowserRouter,
  Routes,
  Route,
  Navigate

} from "react-router-dom"

import LoginPage from "./pages/LoginPage"

import RegisterPage from "./pages/RegisterPage"

import DashboardPage from "./pages/DashboardPage"

import QuestionsPage from "./pages/QuestionsPage"

import AnalyticsPage from "./pages/AnalyticsPage"

import WeakTopicsPage from "./pages/WeakTopicsPage"

import ComparisonPage from "./pages/ComparisonPage"

import RoadmapPage from "./pages/RoadmapPage"

import SupportPage from "./pages/SupportPage"

function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token")

  if (!token) {

    return <Navigate to="/" />
  }

  return children
}

function App() {

  return (

    

      <Routes>

        {/* PUBLIC ROUTES */}

        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        {/* PROTECTED ROUTES */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <DashboardPage />

            </ProtectedRoute>
          }
        />

        <Route
          path="/questions"
          element={
            <ProtectedRoute>

              <QuestionsPage />

            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>

              <AnalyticsPage />

            </ProtectedRoute>
          }
        />

        <Route
          path="/weak-topics"
          element={
            <ProtectedRoute>

              <WeakTopicsPage />

            </ProtectedRoute>
          }
        />

        <Route
          path="/comparison"
          element={
            <ProtectedRoute>

              <ComparisonPage />

            </ProtectedRoute>
          }
        />

        <Route
          path="/roadmap"
          element={
            <ProtectedRoute>

              <RoadmapPage />

            </ProtectedRoute>
          }
        />

        <Route
          path="/support"
          element={
            <ProtectedRoute>

              <SupportPage />

            </ProtectedRoute>
          }
        />

        {/* FALLBACK */}

        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>

    
  )
}

export default App