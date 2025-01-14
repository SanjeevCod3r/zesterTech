import { BeInTouch } from '~/components/pages/Home/sections/BeInTouch';
import { Blog } from '~/components/pages/Home/sections/Blog';
import { Hero } from '~/components/pages/Home/sections/Hero';
import { Portfolio } from '~/components/pages/Home/sections/Portfolio';
import { Services } from '~/components/pages/Home/sections/Services';
import { WhatWeDo } from '~/components/pages/Home/sections/WhatWeDo';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <BeInTouch />
      <WhatWeDo />
      <Blog />
    </>
  );
};

export default Home;
