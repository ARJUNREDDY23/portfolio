import './index.css'

const skillsData = [
  {
    id: 0,
    name: 'HTML',
  },
  {
    id: 1,
    name: 'Java Script',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'Java',
  },
  {
    id: 4,
    name: 'Python',
  },
  {
    id: 5,
    name: 'React',
  },
  {
    id: 6,
    name: 'Node',
  },

  {
    id: 7,
    name: 'Bootstrap',
  },
]

const educationData = [
  {
    id: 0,
    qualification: 'Graduation',
    qualificationSource: 'B.Tech(Computer Science)',
  },
  {
    id: 1,
    qualification: 'Intermediate',
    qualificationSource: 'St.Ann’s Jr College',
  },
  {
    id: 2,
    qualification: 'High School',
    qualificationSource: 'Kimberley EM School',
  },
]

// Write your code here
const AboutSection = () => (
  <div className="about-section-bg-container">
    <h1 className="heading">About</h1>
    <p className="description">
      I started my journey in the world of computers from a young age.Now
      i&apos;m 21 years old and pursuing computer science majors at saint clara
      university,USA.Web development is my center of interest.{' '}
    </p>
    <div className="skills-education-container">
      <div className="education">
        <h1 className="education-heading">Education</h1>
        <ul>
          {educationData.map(education => (
            <li key={education.id}>
              <div>
                <h1 className="qualification-name">
                  {education.qualification}
                </h1>
                <p>{education.qualificationSource}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="skills">
        <h1 className="education-heading">Skills</h1>
        <ul className="skills-bg-container">
          {skillsData.map(skill => (
            <li className="skill-container">
              <p className="skill" key={skill.id}>
                {skill.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default AboutSection
