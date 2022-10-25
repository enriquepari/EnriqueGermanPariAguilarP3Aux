import { BrowserRouter } from "react-router-dom";
import { RoutesLayoutPari } from './components/routes/RoutesLayoutPari';
import './App.css';
import { NavbarPari } from './components/routes/NavbarPari';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*<RoutesLayoutPari />*/}
        <NavbarPari >
          <RoutesLayoutPari />
        </NavbarPari>
      </BrowserRouter>
    </div>
  );
}
export default App;
