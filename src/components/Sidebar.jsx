import Cookies from 'js-cookie';

export default function Sidebar({ creatingProject, setOpenProject, setIsCreatingProject }) {
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
    } else {
        projectList = false;
    }

    return (
        <>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-96 h-full mt-12 rounded-tr-[8px] transition-transform -translate-x-full sm:translate-x-0 bg-[#593808]" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft">
                    <ul className="text-3xl font-bold ml-2 mb-4 mt-2">
                        <h1>Your projects</h1>
                    </ul>
                    <ul className="flex justify-center items-center">
                        <button onClick={CreateProject} className="bg-[#593808] border text-lg border-[#9d5a0b] rounded-[12px] hover:bg-[#492f07] py-3 px-4 w-[95%] my-2">
                            + Add New Project
                        </button>
                    </ul>
                    {projectList ? projectList.projectList.map(project => <div className='mt-4 flex justify-center items-center'>
                        <button onClick={() => setOpenProject(project)} className='bg-[#593808] border text-lg border-[#9d5a0b] rounded-[12px] hover:bg-[#492f07] px-3 py-4 w-[95%]'>
                            <h1 className='text-2xl mb-1 font-semibold text-start'>{project.title}</h1>
                            <p className='text-start text-[#c7c4a4]'>Due on {project.dueDate}</p>
                        </button>
                    </div>) : null}
                </div>
            </aside >
        </>
    )
}