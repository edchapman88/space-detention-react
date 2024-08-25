import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/scrollToTop.component';
import useContentLinks from './hooks/useContentLinks.hook';
import HomeScreen from './screens/homeScreen.screen';
import ArticlesScreen from './screens/articlesScreen.screen';
import { LinksContext } from './contexts/links.context';
import EcrinsIceScreen from './screens/articles/2202ecrins.article';
import BenNevisLieInScreen from './screens/articles/2203benNevis.article';
import YosemiteOneScreen from './screens/articles/2209yosemite1.article';
import YosemiteTwoScreen from './screens/articles/2209yosemite2.article';
import ReflectionScreen from './screens/articles/2308reflection';
import NorwayScreen from './screens/articles/2403norway';
import ScrambledScreen from './screens/articles/2405scrambled';

function App() {

  const { contentLinks, setContentLinks } = useContentLinks()

  return (
    <Router>
      <LinksContext.Provider value={{ contentLinks, setContentLinks }}>
        <ScrollToTop/>
        <Routes>
          <Route element={<HomeScreen/>} exact path="/"/>
          <Route element={<HomeScreen/>} path="/Home"/>
          <Route element={<ArticlesScreen/>} path="/Articles"/>

          <Route element={<EcrinsIceScreen/>} path="/WhereToLook"/>
          <Route element={<BenNevisLieInScreen/>} path="/InThePursuitOfALieIn"/>
          <Route element={<YosemiteOneScreen/>} path="/LandOfTheGiantsPartOne"/>
          <Route element={<YosemiteTwoScreen/>} path="/LandOfTheGiantsPartTwo"/>
          <Route element={<ReflectionScreen/>} path="/EscapingExpectation"/>
          <Route element={<NorwayScreen/>} path="/Norway"/>
          <Route element={<ScrambledScreen/>} path="/Scrambled"/>
        </Routes>
      </LinksContext.Provider>
    </Router>
  );
}

export default App;
