```jsx
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

// Keep your existing imports for these pages:
// Home, LoginPage, ThreadsPage, DashboardPage,
// ProfilePage, NewThreadPage

function App() {
  return (
    <Routes>
      {/* Public routes: everyone can access */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/threads" element={<ThreadsPage />} />

      {/* Protected routes: login required */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />

      <Route
        path="/threads/new"
        element={
          <PrivateRoute>
            <NewThreadPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
```
