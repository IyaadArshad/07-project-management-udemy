import Sidebar from './components/Sidebar'
import ProjectScreen from './components/ProjectScreen';
import { useState } from 'react';

function App() {
  const [creatingProject, setIsCreatingProject] = useState(false);
  const [openProject, setOpenProject] = useState("");

  return (
    <>
      <div className='app-container'>
        <Sidebar
          setIsCreatingProject={setIsCreatingProject}
          creatingProject={creatingProject}
          setOpenProject={setOpenProject} />
        <ProjectScreen
          openProject={openProject}
          setIsCreatingProject={setIsCreatingProject}
          setOpenProject={setOpenProject}
          creatingProject={creatingProject} />
      </div>
    </>
  );
}

export default App;