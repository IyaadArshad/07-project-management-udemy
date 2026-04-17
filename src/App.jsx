import Sidebar from './components/Sidebar'
import ProjectScreen from './components/ProjectScreen';
import { useState } from 'react';

function App() {
  const [creatingProject, setIsCreatingProject] = useState(false);
  const [openProject, setOpenProject] = useState(0);

  return (
    <>
      <Sidebar
        setIsCreatingProject={setIsCreatingProject}
        creatingProject={creatingProject}
        setOpenProject={setOpenProject} />
      <ProjectScreen
        openProject={openProject}
        setIsCreatingProject={setIsCreatingProject}
        creatingProject={creatingProject} />
    </>
  );
}

export default App;