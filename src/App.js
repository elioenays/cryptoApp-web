import assets from './assets';
import { SectionWrapper } from './components';

const App = () => {
  return (
    <>
      <SectionWrapper
        title='You won store of Nifty NFTs. Start Selling & GRowing'
        description='Buy, Store, collect NFTS, exchange & earn crypto. Join 25+ million people using Profnet Marketplace'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
      <SectionWrapper
        title='You won store of Nifty NFTs. Start Selling & GRowing'
        description='Buy, Store, collect NFTS, exchange & earn crypto. Join 25+ million people using Profnet Marketplace'
        mockupImg={assets.homeCards}
        reverse
      />
    </>
  );
};

export default App;
