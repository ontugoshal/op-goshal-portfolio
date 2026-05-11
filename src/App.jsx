import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Clients from './components/Clients';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary pt-0 pb-0 px-0 sm:px-4 md:px-12 flex justify-center">
      <main className="w-full max-w-[640px] border-x border-dashed border-border-subtle bg-white">
        {/* Top Header Meta */}
        <div className="border-t border-b border-dashed border-border-subtle h-auto sm:h-10 flex items-center">
          <Header showOnlyMeta={true} />
        </div>
        
        {/* Profile Section */}
        <div className="py-12 px-4 sm:px-8 flex justify-center border-b border-dashed border-border-subtle">
          <Header showOnlyProfile={true} />
        </div>

        {/* Sections Wrapper */}
        <div className="flex flex-col">
          <div className="px-5 sm:px-10 py-8 border-b border-dashed border-border-subtle">
            <About />
          </div>

          <div className="px-5 sm:px-10 py-8 border-b border-dashed border-border-subtle">
            <Experience />
          </div>

          <div className="px-5 sm:px-10 py-8 border-b border-dashed border-border-subtle">
            <Certifications />
          </div>

          <div className="px-5 sm:px-10 py-8 border-b border-dashed border-border-subtle">
            <Skills />
          </div>

          <div className="px-5 sm:px-10 py-8 border-b border-dashed border-border-subtle">
            <Clients />
          </div>

          <div className="border-b border-dashed border-border-subtle">
            <Languages />
          </div>

          <div className="border-b border-dashed border-border-subtle">
            <Contact />
          </div>
        </div>

        {/* Footer Section */}
        <div className="py-2 flex justify-center">
          <Footer />
        </div>

        {/* Closing line */}
        <div className="border-t border-dashed border-border-subtle w-full"></div>
      </main>
    </div>
  );
}

export default App;
