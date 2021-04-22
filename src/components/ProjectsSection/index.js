import './index.css'

const projectsData = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/advanced-technologies-img.png',
    name: 'Advanced Technologies',
  },
  {
    id: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/your-moment-is-complete-img.png',
    name: 'Your Moment Is Complete',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/robotics-img.png',
    name: 'Robotics',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-meals-img.png',
    name: 'Happy Meals',
  },
]

// Write your code here

const ProjectsSection = () => (
  <div className="projects-bg-container">
    <h1 className="projects-heading">My Work</h1>
    <div className="projects-container">
      {projectsData.map(projectData => (
        <div className="project-container">
          <img
            src={projectData.imageUrl}
            alt={projectData.name}
            className="project-image"
          />
          <p>{projectData.name}</p>
        </div>
      ))}
    </div>
  </div>
)

export default ProjectsSection
