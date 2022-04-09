import assets from './assets';
import { Download, Features, SectionWrapper } from './components';
import styles from './styles/Global';

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
        title='Smart User Interface Marketplace'
        description='Experience a buttery UI of ProfNet NFT Marketplace. Smooth constant colors of a fluent UI design'
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title='Deployment'
        description='Profnet is built using expo wich runs natively on all users devices. you can easily get yout app into peoples hands'
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title='Createive way to showcase tyhe store'
        description='The app contains two screens. the first screen list all NFTs while the second one shows the details of a specific NFT'
        mockupImg={assets.mockup}
        banner='banner02'
      />
      <Download />

      <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
        <p className={`${styles.pText}  ${styles.whiteText}`}>
          Made with love by <span className='bold'>Elioenay</span>
        </p>
      </div>
    </>
  );
};

export default App;
