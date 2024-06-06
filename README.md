# Readme

## Stap 1: voorbereiding
Zorg dat je Node hebt gedownload. [Node](https://nodejs.org/en)

## Stap 2: installeer React
Let op: StarterReact is hierbij variabel en kan geen hoofdletters bevatten.
```
npx create-react-app starter-react
```

## Stap 3: CD
cd naar de variabele. In dit geval dus:
```
cd starter-react
```

## Stap 4: Start Server
Voer dit command uit om de server te starten.
```
npm start
```

Zet evt ook nog de package-lock en package.json in de gitignore.

# Router installatie
## Stap 1: npm download
Download React router:
```
npm install react-router-dom
```

## Stap 2: verander index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

```

## Stap 3: verander je app.js
```
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About";

function App() {
  return (
      <div>
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
              <li> <Link to={"/about"}>About</Link></li>
          </ul>
        </nav>
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
  );
}

export default App;
```