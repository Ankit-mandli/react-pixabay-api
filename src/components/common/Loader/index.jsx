import React from 'react';
import LottieAnimation from '../LottieAnimation';
import { lottieLoader } from '../LottieAnimation/lottieData';

const Loader = () => {
  return <LottieAnimation file={lottieLoader} width='200px' height={200} />;
};

export default Loader;
