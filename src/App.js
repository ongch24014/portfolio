import './App.css';
import Navbar from './navbar/navbar';
import About from './about/about';
import Skill from './skill/skill'
import Experience from './experience/experience';
import Contact from './contact/contact';
import LoadingPage from './LoadingPage';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import 'animate.css';

function App() {
  const [currentNav, setNav] = useState('about');
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return (
      () => {
        window.removeEventListener('scroll', onScroll);
      }
    )
  }, []);

  const onScroll = () => {

    const windowScroll = window.innerHeight + window.scrollY;
    if (windowScroll < window.innerHeight + (window.innerHeight / 2)) {
      setNav('about');
    } else if ((window.innerHeight + window.scrollY) / document.body.offsetHeight >= 0.99) {
      setNav('contact');
    } else {
      const navlist = ['about', 'skill', 'experience'];
      navlist.forEach(element => {

        const ele = document.getElementById(element);
        const navHeight = ele.offsetTop + (window.innerHeight / 2);
        if (navHeight / windowScroll * 100 > 66 && navHeight / windowScroll * 100 < 100) {
          setNav(element);
          return;
        }
      });
    }


    if (window.scrollY >= 140) {
      document.getElementById('navbar').classList.add('background');
    } else {
      document.getElementById('navbar').classList.remove('background');
    }

    const elements = document.getElementsByClassName('animate__animated');
    Array.from(elements).forEach(element => {
      if (element.classList.contains('animate__fadeInUp')) {
        return;
      }

      const targetScroll = element.getBoundingClientRect().top + document.documentElement.scrollTop + 30;
      if (windowScroll >= targetScroll) {
        console.log('add')
        element.classList.add('animate__fadeInUp');
      }
    });
  }

  function change(state) {
    // setNav(state);
  }

  return (
    <div className="App">
      <LoadingPage></LoadingPage>
      <Navbar dark="true" current={currentNav} change={(state) => change(state)} isDesktopOrLaptop={isDesktopOrLaptop}></Navbar>
      <About dark="true"></About>
      <Skill dark="true"></Skill>
      <Experience dark="true"></Experience>
      <Contact dark="true"></Contact>
    </div>
  );
}

export default App;
