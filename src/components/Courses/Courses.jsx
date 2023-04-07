import { useEffect } from 'react';
import picture from '../../media/pictureCourse.jpg';

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

const Courses = () => {
  const [filter, setFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filterList, setFilterList] = useState(null);
  const [allCourses, setAllCourses] = useState(null);
  // const courses = {
  //   Course_1: 1,
  //   Course_2: 2,
  //   Course_3: 3,
  //   Course_4: 4,
  //   Course_5: 5,
  //   Course_6: 6,
  //   Course_7: 7,
  // };
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
  console.log(filterList);
  const getCourses = async id => {
    try {
      setLoading(true);
      console.log(loading);
      setFilter(id);
      const response = await axios.get('coursesData.json');
      const data = response.data;

      const filteredData = data.filter(data => {
        return data.id === id;
      });

      console.log(filteredData);
      setFilterList(...filteredData);

      setLoading(false);
      console.log(loading);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <SectionOne>
        <Container>
          <Title>Перелік наявних навчальних курсів</Title>
          <Wrapper>
            <WrapperList>
              <CoursesList>
                {allCourses &&
                  allCourses.map(course => (
                    <CoursesItem>
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
                  <>
                    <WrapperMainInfo
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <WrapperInfo>
                        <NameCourse>{filterList.name}</NameCourse>
                        <PriceWrapper>
                          <PriceField>&#8372; {filterList.price}</PriceField>
                        </PriceWrapper>
                        <WrapperField>
                          <TilteOfField>Тривалість курсу - </TilteOfField>
                          <TextInfo>{filterList.duration}.</TextInfo>
                        </WrapperField>
                        <WrapperField>
                          <TilteOfField>Тип курсу - </TilteOfField>
                          <TextInfo> {filterList.type}.</TextInfo>
                        </WrapperField>
                        <TilteOfField>Переваги курсу:</TilteOfField>
                        <FeaturesList>
                          {filterList.features.map(feature => (
                            <>
                              <FeaturesListItem>
                                <TextInfo>
                                  <IconItemList1 />
                                  {feature}.
                                </TextInfo>
                              </FeaturesListItem>
                            </>
                          ))}
                        </FeaturesList>
                      </WrapperInfo>
                      <WrapperInfoImg>
                        <img
                          src={`${picture}`}
                          height="100%"
                          alt=""
                          style={{ borderRadius: '10px' }}
                        />
                      </WrapperInfoImg>
                    </WrapperMainInfo>
                  </>
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
    </>
  );
};

export default Courses;

// Чому варто обрати нас ?
// - Унікальний метеріал. Лише авторські курси від топових фахівців. Ми зібрали найбільш цікавий матеріал;
// - Актуалність. Хоч ми і маємо великий практичний досвід та подаємо виключно сучасні та передові методики;
// - Швидка імплементація. На наступний день після закінчення навчання Ви застосуєте свої знання на практиці;
// - Престиж. Це одна з професій яка завжди має достатньо попиту, постійно розвивається і не стоїть на місці;
// - Індивідуальний підхів. Навчання в невеликих групах до 5 чоловік.

// Як проходить навчання?
// Зручний та сучасний простір у якому є все необхідне для навчання теорії і практичного відпрацювання. Для нас важливо, щоб після пройденого матеріалу та практики Ви не боялися приступати до роботи, тому особливий акцент робимо на відпрацюванні та 'постановці' руки.
// Слайдер з фотками
