import '../styles/global.css'

import { ChallengeProvider, ChallengesContext } from '../contexts/ChallengesContext';
import { useState } from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';

function MyApp({ Component, pageProps }) {


  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  )
}

export default MyApp
