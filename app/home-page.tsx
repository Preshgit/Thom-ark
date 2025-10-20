// import type { NextPage } from 'next';
// import { Box } from '@mui/material';
// import FrameComponent from '../components/frame-component';
// import CoreValues from '../components/core-values';
// import FrameComponent1 from '../components/frame-component1';
// import ServicesArea from '../components/services-area';
// import AboutArea from '../components/about-area';
// import FrameComponent2 from '../components/frame-component2';
// import BuildingArea from '../components/building-area';
// import ClientModule from '../components/client-module';
// import SignupRegion from '../components/signup-region';
// import FrameComponent3 from '../components/frame-component3';
// import FrameComponent4 from '../components/frame-component4';

// const HomePage: NextPage = () => {
//   return (
//     <Box className=' max-w-screen-lg w-full max-w-[1440px] mx-auto relative bg-white overflow-x-hidden flex flex-col items-center pt-0 pb-10 px-4 box-border leading-normal tracking-normal'>
//       <FrameComponent />
//       <CoreValues />
//       <main
//         className='
//           w-full
//           flex flex-col
//           items-center
//           max-w-full
//           h-auto
//           md:px-8
//           lg:px-16
//         '
//       >
//         <FrameComponent1 />
//         <ServicesArea />
//       </main>
//       <AboutArea />
//       <FrameComponent2 />
//       <BuildingArea />
//       <ClientModule />
//       <SignupRegion />
//       <FrameComponent3 />
//       <FrameComponent4 />
//     </Box>
//   );
// };

// export default HomePage;

import type { NextPage } from 'next';
import { Box } from '@mui/material';
import FrameComponent from '../components/hero';
import CoreValues from '../components/core-values';
import FrameComponent1 from '../components/frame-component1';
import ServicesArea from '../components/services-area';
import AboutArea from '../components/about-area';
import FrameComponent2 from '../components/frame-component2';
import BuildingArea from '../components/building-area';
import ClientModule from '../components/client-module';
import SignupRegion from '../components/signup-region';
import FrameComponent3 from '../components/frame-component3';
import FrameComponent4 from '../components/footer';

const HomePage: NextPage = () => {
  return (
    <Box className='w-full relative bg-white overflow-hidden flex flex-col items-start !pt-num-0 !pb-num-42 !pl-num-0 !pr-num-0 box-border leading-[normal] tracking-[normal]'>
      <FrameComponent />
      <CoreValues />
      <main className='self-stretch h-[2849.5px] flex flex-col items-start max-w-full mq450:h-num-auto mq900:h-num-auto mq1325:h-num-auto mq1700:h-num-auto'>
        <FrameComponent1 />
        <ServicesArea />
      </main>
      <AboutArea />
      <FrameComponent2 />
      <BuildingArea />
      <ClientModule />
      <SignupRegion />
      <FrameComponent3 />
      <FrameComponent4 />
    </Box>
  );
};

export default HomePage;
