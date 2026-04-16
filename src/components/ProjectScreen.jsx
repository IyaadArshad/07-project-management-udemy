
import noProjectsImg from '../assets/no-projects.png';

export default function ProjectScreen({ openProject }) {
    if (!openProject) {
        return (
            <>
                <div className="flex justify-center items-center flex-col py-3">
                    <img src={noProjectsImg} alt="No projects" className='w-auto h-32 mt-32' />
                    <h1 className="text-4xl font-bold mb-6 mt-4">No Project Selected</h1>
                    <li className="mb-6">
                        <ul>Select a project or get started with a new one</ul>
                    </li>
                    <button class="bg-blue-500 rounded-[999px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        + Create new project
                    </button>
                </div>
            </>
        );
    }
}