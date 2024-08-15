import React, { useEffect, useState } from 'react';

interface Project {
    id: number;
    name: string;
    description: string;
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        // Fetch projects from API or database
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects'); // Replace with your API endpoint
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <h1>All Projects</h1>
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;