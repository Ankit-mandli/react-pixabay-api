import React from 'react';
import LottieAnimation from '../LottieAnimation';
import { lottieNotFound } from '../LottieAnimation/lottieData';

const EmptyListComponent = () => {
  return <LottieAnimation width={200} height={200} file={lottieNotFound} />;
};

export default EmptyListComponent;
