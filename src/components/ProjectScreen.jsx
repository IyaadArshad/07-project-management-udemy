import { useState } from 'react';
import noProjectsImg from '../assets/no-projects.png';
import Cookies from 'js-cookie';

export default function ProjectScreen({ openProject, setOpenProject, creatingProject, setIsCreatingProject }) {
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
            dueDate: dueDate,
            tasks: [
            ]
        }
        // need to get current cookies
        // {"projectList":[{"title":"test","description":"test desc","dueDate":"unknown"}]}
        // above is sample list
        // need to append project to project list
        if (!title | !description | !dueDate) {
            alert('Missing either the date, description or due date')
        } else {
            data.projectList.push(project);
            Cookies.set('projects', JSON.stringify(data));
            setTitle("")
            setDescription("")
            setDueDate("")
            setIsCreatingProject(false);
        }
    }

    function createNewProject() {
        setTitle("")
        setDescription("")
        setDueDate("")
        setIsCreatingProject(true)
    }

    if (openProject) {
        const [editing, setIsEditing] = useState(false);
        console.log("openproject", openProject)
        // format date from yyyy-mm-dd
        const unformattedDate = openProject.dueDate
        const year = unformattedDate.slice(0, 4)
        const monthNumber = unformattedDate.slice(5, 7)
        const day = unformattedDate.slice(8, 10)
        let month;

        // determine month
        if (monthNumber === "01") {
            month = "January"
        } else if (monthNumber === "02") {
            month = "February"
        } else if (monthNumber === "03") {
            month = "March"
        } else if (monthNumber === "04") {
            month = "April"
        } else if (monthNumber === "05") {
            month = "May"
        } else if (monthNumber === "06") {
            month = "June"
        } else if (monthNumber === "07") {
            month = "July"
        } else if (monthNumber === "08") {
            month = "August"
        } else if (monthNumber === "09") {
            month = "September"
        } else if (monthNumber === "10") {
            month = "October"
        } else if (monthNumber === "11") {
            month = "November"
        } else if (monthNumber === "12") {
            month = "December"
        }

        function AddNewTask() {
            setOpenProject(prevProject => ({
                ...prevProject,
                tasks: [...prevProject.tasks, ""]
            }));
        }

        const formattedDate = `${month} ${day}, ${year}`
        return (
            <>
                <div className="flex items-start flex-col ml-[30rem] mt-12 py-3">
                    <h1 className="text-5xl font-bold mb-4 mt-4">{openProject.title}</h1>
                    <p className='text-xl text-[#c7c4a4] mb-4'>Due {formattedDate}</p>
                    <div className='w-[90%] mb-4 border border-b border-b-zinc-700' />
                    <p className='text-2xl mb-4'>{openProject.description}</p>
                    <div className='w-[90%] mb-4 border border-b border-b-zinc-700' />
                    <h1 className="text-3xl font-medium mb-4 mt-4">My Tasks</h1>
                    {openProject.tasks.map(task => <div className='bg-[#593808] border border-[#9d5a0b] rounded-[12px] hover:bg-[#492f07] flex items-center mb-4 w-[90%] py-2.5'>
                        <input type='checkbox' className='w-6 h-6 ml-5 mr-3' />
                        <p className='text-xl'>{task}</p>
                        <p className='text-align-end'>Edit</p>
                    </div>)}
                    <button className='bg-[#593808] w-[90%] text-lg border border-[#9d5a0b] rounded-[12px] hover:bg-[#492f07] w-[90%] py-2.5'
                        onClick={AddNewTask} >+ Add new task</button>
                    <div className='mt-4'>
                        <button onClick={() => setOpenProject("")} className=" border text-lg rounded-[12px] hover:bg-[#fefad5] hover:text-[#492f07] mr-4 py-2.5 my-4 px-4">
                            Back
                        </button>
                    </div>
                </div>
            </>
        );
    }
    if (creatingProject) {
        return (
            <>
                <div className="flex items-start flex-col ml-[30rem] mt-12 py-3">
                    <h1 className="text-4xl font-bold mb-6 mt-4">Create New Project</h1>
                    <div className='form'>
                        <form>
                            <div className='mb-4'>
                                <p className='text-[#c7c4a4] mb-1 text-sm'>Title</p>
                                <input required onChange={handleChange} value={title} className='w-[50rem] rounded-[12px] h-12 bg-transparent border text-lg p-2 border-[#fefad5]' type='text' />
                            </div>
                            <div className='mb-4'>
                                <p className='text-[#c7c4a4] mb-1 text-sm'>Description</p>
                                <input required onChange={handleChangeDesc} value={description} className='bg-transparent border w-[50rem] rounded-[12px] h-36 p-2 border-[#fefad5]' type='text' />
                            </div>
                            <div className='mb-4'>
                                <p className='text-[#c7c4a4] mb-1 text-sm'>Due Date</p>
                                <input required onChange={handleChangeDueDate} value={dueDate} className='bg-transparent border w-[50rem] rounded-[12px] h-12 p-2 border-[#fefad5]' type='date' />
                            </div>

                        </form>
                    </div>
                    <div>
                        <button onClick={saveProject} className="bg-[#593808] border text-lg border-[#9d5a0b] rounded-[12px] hover:bg-[#492f07] mr-4 py-2 px-4 mt-2">
                            Save as new project
                        </button>
                        <button onClick={() => setIsCreatingProject(false)} className="text-[#c7c4a4] hover:text-[#9b987e]">
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
                    <button onClick={createNewProject} className="bg-[#593808] border text-lg border-[#9d5a0b] rounded-[12px] hover:bg-[#492f07] py-2 px-4">
                        + Create new project
                    </button>
                </div>
            </>
        );
    }
}