import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { routes } from './routes/routes';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="pt-[100px]">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children && route.children.map((childRoute, childIndex) => (
                  <Route key={childIndex} path={childRoute.path} element={childRoute.element} />
                ))}
              </Route>
            ))}
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
