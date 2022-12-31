import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import useContentLinks from './hooks/useContentLinks.hook';
import HomeScreen from './screens/homeScreen.screen';
import ArticlesScreen from './screens/articlesScreen.screen';
import { LinksContext } from './contexts/links.context';
import EcrinsIceScreen from './screens/articles/2202ecrins.article';
import BenNevisLieInScreen from './screens/articles/2203benNevis.article';
import YosemiteOneScreen from './screens/articles/2209yosemite1.article';

function App() {

  const { contentLinks, setContentLinks } = useContentLinks()

  return (
    <Router>
      <LinksContext.Provider value={{ contentLinks, setContentLinks }}>
        <Routes>
          <Route element={<HomeScreen/>} path="/Home"/>
          <Route element={<ArticlesScreen/>} path="/Articles"/>

          <Route element={<EcrinsIceScreen/>} path="/WhereToLook"/>
          <Route element={<BenNevisLieInScreen/>} path="/InThePursuitOfALieIn"/>
          <Route element={<YosemiteOneScreen/>} path="/Yosemite"/>
        </Routes>
      </LinksContext.Provider>
    </Router>
  );
}

export default App;
