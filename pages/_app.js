import '../styles/global.css'

import Particles from 'react-tsparticles';
import particlesConfig from '../lib/particlesConfig';

export default function App({ Component, pageProps }) {
    return(
        <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
            <div style={{ position: 'absolute'}}>
                <Particles 
                    height="100vh" 
                    width="100vw" 
                    options={particlesConfig} 
                />
            </div>
        
            <Component {...pageProps} />
        </div>
        )
}