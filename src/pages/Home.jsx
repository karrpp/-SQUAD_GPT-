import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Values from '../sections/Values';
import Squad from '../sections/Squad';
import Workflow from '../sections/Workflow';
import Projects from '../sections/Projects';
import Footer from '../sections/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main style={styles.main}>
        <About />
        <Values />
        <Squad />
        <Workflow />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

const styles = {
  main: {
    paddingTop: '72px', // Navbar 높이만큼 여백
  },
};

export default Home;
