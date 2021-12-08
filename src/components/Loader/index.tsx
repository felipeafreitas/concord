import { Box } from '@chakra-ui/react';
import Lottie from 'react-lottie';
import ImageLoader from '../../assets/lottie/8771-loading.json';

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ImageLoader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Box>
  );
}

export default Loader;
