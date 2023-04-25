import { aab, aab1, video } from 'media';
import {
  Section,
  ParallaxEl,
  Title,
  WrapperVideo,
  Video,
  WrapperContent,
  TitleContent,
  TextContent,
  WrapperText,
} from './About-styled';

const About = () => {
  return (
    <Section>
      <WrapperVideo>
        <WrapperContent>
          <WrapperText
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backdropFilter: 'blur(2px)',
            }}
          >
            <Title>ABOUT US</Title>
          </WrapperText>
        </WrapperContent>
        <Video
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src={video}
          autoPlay
          loop
          muted
        ></Video>
      </WrapperVideo>

      <ParallaxEl
        layers={[
          {
            image: `${aab1}`,
            expanded: false,
            speed: -35,
            scale: [1, 1.15],
          },
        ]}
      >
        <WrapperContent>
          <WrapperText>
            <TitleContent>Hello World!</TitleContent>
            <TextContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus
              beatae ratione, vero officia vel perspiciatis accusamus asperiores
              non eos cupiditate officiis maxime cumque delectus est rem
              similique ducimus. Quibusdam.
            </TextContent>
          </WrapperText>
        </WrapperContent>
      </ParallaxEl>

      <ParallaxEl
        layers={[
          { image: `${aab}`, expanded: false, speed: -35, scale: [1, 1.15] },
        ]}
      >
        <WrapperContent>
          <WrapperText>
            <TitleContent>Hello World!</TitleContent>
            <TextContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus
              beatae ratione, vero officia vel perspiciatis accusamus asperiores
              non eos cupiditate officiis maxime cumque delectus est rem
              similique ducimus. Quibusdam.
            </TextContent>
          </WrapperText>
        </WrapperContent>
      </ParallaxEl>
    </Section>
  );
};

export default About;

// import { Swiper, SwiperSlide } from 'swiper/react';
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   Mousewheel,
//   // Parallax,
// } from 'swiper';
// import { useParallax } from 'react-scroll-parallax';
// import { Parallax } from 'react-scroll-parallax';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const About = () => {
//   const [parallaxSwiper, setParallaxSwiper] = useState(null);
//   const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
//   const parallaxOpacity = 0.5;
//   console.log(parallaxSwiper);
//   return (
//     <Section>
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, Parallax, Mousewheel]}
//         // direction={'vertical'}
//         effect={'slide'}
//         navigation
//         mousewheel={true}
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: false }}
//         parallax={true}
//         spaceBetween={0}
//         slidesPerView={1}
//         onSlideChange={setParallaxSwiper}
//         // onSwiper={setParallaxSwiper}
//         centeredSlides={true}
//         grabCursor={true}
//         speed={2000}
//         style={{ height: '100vh' }}
//       >
//         {/* <div
//           className="slide-image"
//           data-swiper-parallax={parallaxAmount}
//           data-swiper-parallax-opacity={parallaxOpacity}
//           data-swiper-parallax-duration={'700'}
//         >
//           <SwiperSlide className="hero-slide">
//             <img
//               src={backgroundCourses}
//               width="1200px"
//               height="800px"
//               alt=""
//               style={{ marginLeft: 'auto', marginRight: 'auto' }}
//             />
//           </SwiperSlide>
//         </div>

//         <div
//           data-swiper-parallax={parallaxAmount}
//           data-swiper-parallax-opacity={parallaxOpacity}
//           data-swiper-parallax-duration={'1200'}
//           className="slide-image"
//         >
//           <SwiperSlide className="hero-slide">
//             <img
//               src={heroBg_img}
//               width="1200px"
//               height="800px"
//               alt=""
//               style={{ marginLeft: 'auto', marginRight: 'auto' }}
//             />
//           </SwiperSlide>
//         </div> */}

//         <SwiperSlide className="hero-slide">
//           <div
//             data-swiper-parallax={parallaxAmount}
//             data-swiper-parallax-opacity={parallaxOpacity}
//             data-swiper-parallax-duration={'1200'}
//             className="slide-image"
//           >
//             <img
//               src={backgroundCourses}
//               width="1200px"
//               height="800px"
//               alt=""
//               style={{ marginLeft: 'auto', marginRight: 'auto' }}
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="hero-slide">
//           <div
//             data-swiper-parallax={parallaxAmount}
//             data-swiper-parallax-opacity={parallaxOpacity}
//             data-swiper-parallax-duration={'1200'}
//             className="slide-image"
//           >
//             <img src={heroBg_img} width="1200px" height="800px" alt="" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="hero-slide">
//           <div
//             data-swiper-parallax={parallaxAmount}
//             data-swiper-parallax-opacity={parallaxOpacity}
//             data-swiper-parallax-duration={'1200'}
//             className="slide-image"
//           >
//             <img
//               src={backgroundCourses}
//               width="1200px"
//               height="800px"
//               alt=""
//               style={{ marginLeft: 'auto', marginRight: 'auto' }}
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="hero-slide">
//           <div
//             data-swiper-parallax={parallaxAmount}
//             data-swiper-parallax-opacity={parallaxOpacity}
//             data-swiper-parallax-duration={'1200'}
//             className="slide-image"
//           >
//             <img
//               src={backgroundCourses}
//               width="1200px"
//               height="800px"
//               alt=""
//               style={{ marginLeft: 'auto', marginRight: 'auto' }}
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="hero-slide">
//           <div
//             data-swiper-parallax={parallaxAmount}
//             data-swiper-parallax-opacity={parallaxOpacity}
//             data-swiper-parallax-duration={'1200'}
//             className="slide-image"
//           >
//             <img src={heroBg_img} width="1200px" height="800px" alt="" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="hero-slide">
//           <div
//             data-swiper-parallax={parallaxAmount}
//             data-swiper-parallax-opacity={parallaxOpacity}
//             data-swiper-parallax-duration={'1200'}
//             className="slide-image"
//           >
//             <img
//               src={backgroundCourses}
//               width="1200px"
//               height="800px"
//               alt=""
//               style={{ marginLeft: 'auto', marginRight: 'auto' }}
//             />
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </Section>
//   );
// };

/* <div>
        <Parallax
          blur={{ min: -10, max: 10 }}
          className="image"
          bgImage={aab}
          bgImageStyle={{
            height: 'auto',
            width: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: 'rgba(0, 0, 0, 0.445)',
          }}
          bgImageAlt="the cat"
          strength={200}
        >
          <div className="content">
            <h3>Content goes here</h3>
          </div>
        </Parallax>
        <Parallax
          blur={{ min: -10, max: 10 }}
          className="image"
          bgImage={aab1}
          bgImageStyle={{ height: 'auto', width: '100%' }}
          bgImageAlt="the cat"
          strength={200}
        >
          <div className="content">
            <h3>Content goes here</h3>
          </div>
        </Parallax>
        <Parallax
          blur={{ min: -10, max: 10 }}
          className="image"
          bgImage={backgroundCourses}
          bgImageStyle={{
            height: 'auto',
            width: '100%',
          }}
          bgImageAlt="the cat"
          strength={200}
        >
          <div className="content">
            <h3>Content goes here</h3>
          </div>
        </Parallax>
      </div> */
