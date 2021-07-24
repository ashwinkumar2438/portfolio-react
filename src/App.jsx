import '@src/scss/_base.scss';
import ContentRouter from '@src/Routes/ContentRouter.jsx';
import {Header,HeaderComponents} from '@src/components';

// const Logo=()=><h1>Header logo</h1>

function App() {
  return (
    <div className="App">
      <Header logo={<HeaderComponents.Logo />} rightlist={<HeaderComponents.RightList />} />
      <header className="App-header">
       <h1>Hello World</h1>
      </header>
      <ContentRouter/>
    </div>
  );
}

export default App;
