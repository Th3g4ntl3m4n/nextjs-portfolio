import Layout from '../Components/Layout'
import { Skills , experiences, projects } from '../profile';
import Link from "next/link";
import { description } from 'platform';

const Index = () => (
    
    <Layout>
        {/** Header Card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="perfil-jeffer.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Jefferson Hernandez</h1>
                            <h3>Frontend Developer - SysAdmin - NetAdmin </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <Link href="/hireme">
                                <a className="btn btn-outline-light">Hire Me</a>
                                </Link>                          
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/** Second Section*/}
      <div className="row py-2">
          <div className="col-md-4">
             <div className="card.bg-light">
                 <div className="card-body">
                     <h1>Skills</h1>
                     
                     {
                         Skills.map(({ skill, percentage }, i) => (
                             <div className="py-3" key={i}>
                             <h5>{skill}</h5>
                             <div className="progress">
                                 <div className="progress-bar" 
                                 role="progressbar" 
                                 style={{ width: `${percentage}%` }}
                                 aria-valuenow="50"
                                 aria-valuemin="0"
                                 aria-valuemax="100"
                                    >

                                 </div>

                                 </div>
                             </div>
                         ) )
                     }


                 </div>
             </div>
          </div>
          <div className="col-md-8">
            <div className="card bg-ligth">
                <div className="card-body">
                    <h1>Experiencia</h1>

                    <ul>
                        {
                            experiences.map(({title,from,to,description}, index) => (
                                <li key={index}>
                                    <h3>{title}</h3>
                                    <h5>{from}-{to}</h5>
                                    <p>{description}</p>
                                </li>
                            ))
                        }
                    </ul>

                    <Link href="/experiences">
                    <a className="btn btn-dark">Reed more</a>
                    </Link>

                </div>
            </div>
          </div>
      </div>

      {/** Portfolio cards */}
      <div className="row">
          <div className="col-md-12">
              <div className="card card-body bg-dark">
                  <div className="row">
                      <div className="col-md-12">
                          <h1 className="text-center text-light">Portfolio</h1>
                      </div>
                      {
                          projects.map(({name,description,image} ,i)=> (
                            <div className="col-md-4 p-2" key={i}>
                            <div className="card h-100">
                                <div className="overflow">
                                <img src={`/${image}`} alt="" className="card-img-top"/>
                                </div>
                                <div className="card-body">
                                    <h1>{name}</h1>
                                    <p>{description}</p>
                                    <a href="#">Know More</a>
                                </div>
                            </div>
                        </div>
                    
                          ))
                      }
                      </div>
                      <div className="text-center mt-4">
                      <Link href="/portfolio">
                      <a className="btn btn-outline-light">More proyects</a>
                      </Link>
                  </div>
              </div>
          </div>
      </div>


      {/** */}
    </Layout>
    
);

export default Index;