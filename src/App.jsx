import Sidebar from './components/Sidebar'
import ProjectScreen from './components/ProjectScreen';
import { useState } from 'react';

function App() {
  const [creatingProject, setIsCreatingProject] = useState(false);
  return (
    <>
      <Sidebar
        setIsCreatingProject={setIsCreatingProject}
        creatingProject={creatingProject} />
      <ProjectScreen
        setIsCreatingProject={setIsCreatingProject}
        creatingProject={creatingProject} />
    </>
  );
}

export default App;