import { useEffect } from 'react';
import { motion } from 'framer-motion';

import CoursesEducation from './CoursesEducation/CoursesEducation';
import CoursesMedia from './CoursesMedia/CoursesMedia';
import CoursesModules from './CoursesModules/CoursesModules';
import CoursesWhyUs from './CoursesWhyUs/CoursesWhyUs';

import {
  SectionOne,
  Title,
  WrapperList,
  CoursesList,
  CoursesItem,
  ButtonFilter,
  WrapperContent,
  WrapperMainInfo,
  WrapperInfo,
  WrapperInfoImg,
  TextInfo,
  IconItemList1,
  Wrapper,
  NameCourse,
  PriceWrapper,
  PriceField,
  TilteOfField,
  WrapperField,
  FeaturesList,
  FeaturesListItem,
} from './Courses-styled';
import { Container } from 'styles/Container-styled';
import { useState } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { AnimatePresence } from 'framer-motion';
const TextAnimationDawn = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' },
    bounce: 0.01,
    duration: 1,
  },
};

const TextAnimationLeft = {
  offscreen: {
    x: 300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' },
    bounce: 0.2,
    duration: 3,
  },
};

const Courses = () => {
  const [filter, setFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filterList, setFilterList] = useState(null);
  const [allCourses, setAllCourses] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get('coursesData.json');
        const data = response.data;
        setAllCourses(data);
        setFilterList(data[0]);
        setFilter(data[0].id);
        setLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, []);

  const getCourses = async id => {
    try {
      setLoading(true);
      setFilter(id);
      const response = await axios.get('coursesData.json');
      const data = response.data;

      const filteredData = data.filter(data => {
        return data.id === id;
      });

      setFilterList(...filteredData);

      setLoading(false);
      console.log(loading);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <motion.div
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.6, duration: 0.7 }}
    >
      <SectionOne>
        <Container>
          <Title>Перелік наявних навчальних курсів</Title>
          <Wrapper>
            <WrapperList>
              <CoursesList
                initial={'offscreen'}
                animate={'onscreen'}
                transition={{ staggerChildren: 1, duration: 0.3 }}
              >
                {allCourses &&
                  allCourses.map(course => (
                    <CoursesItem key={course.id}>
                      <ButtonFilter
                        type="button"
                        style={{
                          backgroundColor:
                            filter === course.id && 'rgba(245,146,86,1)',
                        }}
                        onClick={() => getCourses(course.id)}
                      >
                        {course.name}
                      </ButtonFilter>
                    </CoursesItem>
                  ))}
              </CoursesList>
            </WrapperList>
            <WrapperContent>
              <AnimatePresence>
                {loading && (
                  <div>
                    <ThreeDots
                      height="80"
                      width="80"
                      radius={1}
                      color="#3a4139"
                      ariaLabel="puff-loading"
                      wrapperStyle={{
                        justifyContent: 'center',
                        marginTop: '-70px',
                      }}
                      wrapperClass=""
                      visible={true}
                    />
                  </div>
                )}
                {!loading && filterList && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <WrapperMainInfo
                      initial={{ opacity: 0, scale: 0.005 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <WrapperInfo
                        initial={'offscreen'}
                        whileInView={'onscreen'}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ staggerChildren: 0.2, duration: 0.3 }}
                      >
                        <NameCourse>{filterList.name}</NameCourse>
                        <PriceWrapper variants={TextAnimationDawn}>
                          <PriceField>&#8372; {filterList.price}</PriceField>
                        </PriceWrapper>
                        <WrapperField>
                          <TilteOfField>Тривалість курсу -</TilteOfField>
                          <TextInfo variants={TextAnimationLeft}>
                            {filterList.duration}.
                          </TextInfo>
                        </WrapperField>
                        <WrapperField>
                          <TilteOfField>Тип курсу -</TilteOfField>
                          <TextInfo variants={TextAnimationLeft}>
                            {filterList.type}.
                          </TextInfo>
                        </WrapperField>
                        <TilteOfField>Переваги курсу:</TilteOfField>
                        <FeaturesList>
                          {filterList.features.map((feature, index) => (
                            <FeaturesListItem
                              key={index}
                              variants={TextAnimationLeft}
                            >
                              <TextInfo>
                                <IconItemList1 />
                                {feature}.
                              </TextInfo>
                            </FeaturesListItem>
                          ))}
                        </FeaturesList>
                      </WrapperInfo>
                      <WrapperInfoImg
                        initial={{
                          x: -200,
                          opacity: 0,
                          scale: 1.7,
                        }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                      >
                        <motion.img
                          src={process.env.PUBLIC_URL + `${filterList.picture}`}
                          width="100%"
                          alt=""
                          style={{ borderRadius: '10px', objectFit: 'cover' }}
                        />
                      </WrapperInfoImg>
                    </WrapperMainInfo>
                  </motion.div>
                )}
              </AnimatePresence>
            </WrapperContent>
          </Wrapper>
        </Container>
      </SectionOne>
      {filterList && <CoursesModules course={filterList} />}
      {filterList && <CoursesEducation course={filterList} />}
      <CoursesWhyUs />
      <CoursesMedia />
    </motion.div>
  );
};

export default Courses;
