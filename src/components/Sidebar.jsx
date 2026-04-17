import Cookies from 'js-cookie';

export default function Sidebar({ creatingProject, setIsCreatingProject }) {
    function CreateProject() {
        if (creatingProject) {
            alert('Create project already open')
        } else {
            setIsCreatingProject(true);
        }
    }

    let projectList;

    if (Cookies.get('projects')) {
        projectList = JSON.parse(Cookies.get('projects'))
        console.log("list", projectList)
    } else {
        projectList = false;
    }

    console.log(projectList)

    return (
        <>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-96 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
                    <ul className="text-3xl font-bold ml-2 mb-4 mt-2">
                        <h1>Your projects</h1>
                    </ul>
                    <ul className="flex justify-center items-center">
                        <button onClick={CreateProject} className="bg-zinc-50 border-zinc-300 border rounded-[12px] text-lg hover:bg-zinc-100 py-3 px-4 w-[95%] my-2 rounded">
                            + Add Project
                        </button>
                    </ul>
                    {projectList ? projectList.projectList.map(project => <div className='mt-4 flex justify-center items-center'>
                        <button className='bg-zinc-50 border border-zinc-300 hover:bg-zinc-100 rounded-[12px] px-3 py-4 w-[95%]'>
                            <h1 className='text-2xl mb-1 font-semibold text-start'>{project.title}</h1>
                            <p className='text-start text-gray-700'>Due on {project.dueDate}</p>
                        </button>
                    </div>) : "false"}
                </div>
            </aside >
        </>
    )
}