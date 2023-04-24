import {Header , Home , WhatIsGPT , OpenAI , CaseStudies , Library , Footer} from './sections/index';

function App() {

  return (
    <div className="App bg-[#040C18]">
      <div id="home">
        <Header />
        <Home />
      </div>
      <div id='openAi'>
        <WhatIsGPT />
        <OpenAI />
      </div>
      <div id='caseStudies'>
        <CaseStudies />
        <Library />
      </div>
      <Footer />
    </div>
  )
}

export default App
