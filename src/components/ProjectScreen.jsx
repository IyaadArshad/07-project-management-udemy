import { useState } from 'react';
import noProjectsImg from '../assets/no-projects.png';
import Cookies from 'js-cookie';

export default function ProjectScreen({ openProject, creatingProject, setIsCreatingProject }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");

    const cookies = Cookies.get('projects')
    let data;
    if (Cookies.get('projects')) {
        data = JSON.parse(cookies);
    } else {
        data = { projectList: [] };
    }
    /*     const cookie = Cookies.set('projects', JSON.stringify({
            "projectList": [{ "title": "test", "description": "test desc", "dueDate": "unknown" }]
        })) */

    function handleChange(e) {
        setTitle(e.target.value);
    }

    function handleChangeDesc(e) {
        setDescription(e.target.value);
    }

    function handleChangeDueDate(e) {
        setDueDate(e.target.value)
    }

    function saveProject() {
        const project = {
            title: title,
            description: description,
            dueDate: dueDate
        }
        // need to get current cookies
        // {"projectList":[{"title":"test","description":"test desc","dueDate":"unknown"}]}
        // above is sample list
        // need to append project to project list
        data.projectList.push(project);
        Cookies.set('projects', JSON.stringify(data));
        console.log("updated cookie: ", Cookies.get('projects'))
        setTitle("")
        setDescription("")
        setDueDate("")
        setIsCreatingProject(false);
    }

    function createNewProject() {
        setTitle("")
        setDescription("")
        setDueDate("")
        setIsCreatingProject(true)
    }

    if (creatingProject) {
        return (
            <>
                <div className="flex items-start flex-col ml-[25rem] mt-8 py-3">
                    <h1 className="text-4xl font-bold mb-6 mt-4">Create New Project</h1>
                    <div className='form'>
                        <form>
                            <div className='mb-4'>
                                <p className='text-gray-600 mb-1 text-sm'>Title</p>
                                <input onChange={handleChange} value={title} className='border w-[40rem] rounded-[12px] h-10 border-gray-400' type='text' />
                            </div>
                            <div className='mb-4'>
                                <p className='text-gray-600 mb-1 text-sm'>Description</p>
                                <input onChange={handleChangeDesc} value={description} className='border w-[40rem] rounded-[12px] h-36 border-gray-400' type='text' />
                            </div>
                            <div className='mb-4'>
                                <p className='text-gray-600 mb-1 text-sm'>Due Date</p>
                                <input onChange={handleChangeDueDate} value={dueDate} className='border w-[40rem] rounded-[12px] h-10 border-gray-400' type='date' />
                            </div>

                        </form>
                    </div>
                    <div>
                        <button onClick={saveProject} className="bg-blue-500 mr-4 rounded-[999px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Save as new project
                        </button>
                        <button onClick={() => setIsCreatingProject(false)} className="text-gay-700 font-bold">
                            Cancel
                        </button>
                    </div>
                </div>
            </>
        );
    }

    if (!openProject && !creatingProject) {
        return (
            <>
                <div className="flex justify-center pl-40 items-center flex-col py-3">
                    <img src={noProjectsImg} alt="No projects" className='w-auto h-40 mt-32' />
                    <h1 className="text-5xl font-semibold mb-6 mt-4">No Project Selected</h1>
                    <div className="mb-6 text-lg">
                        <p>Select a project or get started with a new one</p>
                    </div>
                    <button onClick={createNewProject} className="bg-zinc-50 border text-lg border-zinc-300 rounded-[12px] hover:bg-zinc-100 py-2 px-4">
                        + Create new project
                    </button>
                </div>
            </>
        );
    }
}