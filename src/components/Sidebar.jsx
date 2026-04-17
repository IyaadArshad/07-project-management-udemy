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
    } else {
        projectList = false;
    }
    
    return (
        <>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-72 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
                    <ul className="text-3xl font-bold ml-2 mb-4 mt-2">
                        <h1>Your projects</h1>
                    </ul>
                    <ul className="flex justify-center items-center">
                        <button onClick={CreateProject} className="bg-blue-500 rounded-[999px] hover:bg-blue-700 text-white font-bold py-2 px-4 w-[90%] my-2 rounded">
                            + Add Project
                        </button>
                    </ul>
                </div>
                <div>
                    <h1>hi</h1>
                </div>
            </aside>
        </>
    )
}