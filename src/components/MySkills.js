import React from 'react'
import JavaImg from './img/java.png';
import SpringBootImg from './img/spring.jpg';
import MysqlImg from './img/mysql.png';
import ReactImg from './img/react.png';
import ApiImg from './img/api.png';

import HtmlCssImg from './img/frontend.png';
export default function MySkills() {
  const skills = [
    {
      id: 1,
      languageImg: JavaImg,
      skilsPercentage:4.5,
      language_name: 'java',
      language_discription: 'java is a object oriented,secure and platform independent programming language, '
    },
    {
      id: 2,
      languageImg: SpringBootImg,
      skilsPercentage:4.0,
      language_name: 'Spring Boot',
      language_discription: 'java is a object oriented,secure and platform independent programming language, '
    },
    {
      id: 3,
      languageImg: MysqlImg,
      skilsPercentage:4.1,
      language_name: 'MySql',
      language_discription: 'java is a object oriented,secure and platform independent programming language, '
    },
    {
      id: 4,
      languageImg: HtmlCssImg,
      skilsPercentage:4.4,
      language_name: 'HTML/CSS',
      language_discription: 'java is a object oriented,secure and platform independent programming language, '
    },
    {
      id: 5,
      languageImg: ReactImg,
      skilsPercentage:3.9,
      language_name: 'React',
      language_discription: 'java is a object oriented,secure and platform independent programming language, '
    },
    {
      id: 6,
      languageImg: ApiImg,
      skilsPercentage:4.0,
      language_name: 'API Developer',
      language_discription: 'java is a object oriented,secure and platform independent programming language, '
    }
  ]

  return (
    <div id='techSkill' className='mb-4' >
    <div className='container'>
      <div className="container text-center my-5">
        <h1
          className="text-center m-5"
          style={{ color: 'rgba(0,255,255)', fontFamily: 'Playfair Display, serif' }}>Tech Skills
        </h1>
        <div className="timeline">
          <div className="row no-gutters">
            {/* Project one */}
            {
              skills.map(skill => (
                <div key={skill.id} className="col-12 col-md-2">
                  <div className="card border-light mb-3">
                    <div className="card-body">
                      <div className='text-center'>
                        <img src={skill.languageImg} className="w-50 mb-4" alt="Profile Picture" />
                      </div>
                      <p>{skill.skilsPercentage}⭐</p>
                      <h5
                        className="card-title"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                        {skill.language_name}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
