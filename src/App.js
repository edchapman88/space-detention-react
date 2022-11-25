import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import useContentLinks from './hooks/useContentLinks.hook';
import HomeScreen from './screens/homeScreen.screen';
import ArticlesScreen from './screens/articlesScreen.screen';
import { LinksContext } from './contexts/links.context';
import EcrinsIceScreen from './screens/articles/ecrinsIce.article';

function App() {

  const { contentLinks, setContentLinks } = useContentLinks()

  return (
    <Router>
      <LinksContext.Provider value={{ contentLinks, setContentLinks }}>
        <Routes>
          <Route element={<HomeScreen/>} path="/"/>
          <Route element={<ArticlesScreen/>} path="/writing"/>

          <Route element={<EcrinsIceScreen/>} path="/WhereToLook"/>
        </Routes>
      </LinksContext.Provider>
    </Router>
  );
}

export default App;
