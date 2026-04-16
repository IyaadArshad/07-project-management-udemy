
import { useState } from 'react';
import noProjectsImg from '../assets/no-projects.png';

export default function ProjectScreen({ openProject }) {
    const [creatingProject, setIsCreatingProject] = useState(true);
    const [title, setTitle] = useState("");

    function handleChange(e) {
        setTitle(e.target.value);
    }

    if (!openProject && !creatingProject) {
        return (
            <>
                <div className="flex justify-center items-center flex-col py-3">
                    <img src={noProjectsImg} alt="No projects" className='w-auto h-32 mt-32' />
                    <h1 className="text-4xl font-bold mb-6 mt-4">No Project Selected</h1>
                    <li className="mb-6">
                        <ul>Select a project or get started with a new one</ul>
                    </li>
                    <button className="bg-blue-500 rounded-[999px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        + Create new project
                    </button>
                </div>
            </>
        );
    }
    if (creatingProject) {
        return (
            <>
                <div className="flex items-start flex-col ml-[25rem] mt-8 py-3">
                    <h1 className="text-4xl font-bold mb-6 mt-4">Create New Project</h1>
                    <div className='form'>

                        <form>
                            <p className='text-gray-600 text-sm'>Title</p>
                            <input onChange={handleChange} value={title} className='border w-[30rem] rounded-[12px] h-10 border-gray-400' type='text' />
                        </form>
                    </div>
                    <button className="bg-blue-500 rounded-[999px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        + Create new project
                    </button>
                </div>
            </>
        );
    }
}