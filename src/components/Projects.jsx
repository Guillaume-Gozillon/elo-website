const Projects = ({ projects }) => {
  return (
    <div className='main-content'>
      {projects.map((item, i) => (
        <img key={i} src={item} alt='' />
      ))}
    </div>
  )
}

export default Projects
