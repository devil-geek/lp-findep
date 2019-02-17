import React from 'react'
import Steps from "../../components/Steps/Steps";

const Finish = () => {

  const msg1 = <div>
    <i className='title is-size-1 fa fa-check has-text-primary is-spaced' />
    <h1 className="title is-size-2 has-text-primary">¡Gracias por confiar en nosotros!</h1>
    <p className="is-size-4">A la brevedad nos comunicaremos contigo</p>
  </div>

  const msg2 = <div>
    <h1 className="title is-size-2 has-text-primary is-spaced">¡Felicidades!</h1>
    <h1 className="subtitle is-size-3">Eres candidato para obtener un préstamos con nosotros</h1>
    <i className='title is-size-1 fa fa-check has-text-primary is-spaced' />
    <h1 className="subtitle is-size-2 has-text-primary">¡Gracias por confiar en nosotros!</h1>
    <p className="is-size-4">A la brevedad nos comunicaremos contigo</p>
  </div>

  const msg3 = <div>
    <i className='title is-size-1 fa fa-check has-text-primary is-spaced' />
    <h1 className="title is-size-2 has-text-primary is-spaced">¡Gracias por confiar en nosotros!</h1>
    <h1 className="title is-size-3 has-text-primary is-spaced">¡Lo sentimos!</h1>
    <p className="is-size-4">No fue posible realizar la consulta de tu Buro en linea.</p>
    <p className="is-size-4">A la brevedad nos comunicaremos contigo</p>
  </div>

  const msg4 = <div>
    <i className='title is-size-1 fa fa-check has-text-primary is-spaced' />
    <h1 className="title is-size-2 has-text-primary is-spaced">¡Gracias por confiar en nosotros!</h1>
    <h1 className="title is-size-3 has-text-primary is-spaced">¡Lo sentimos!</h1>
    <p className="is-size-4">En estos momentos, no es posible ofrecerte un préstamo,</p>
    <p className="is-size-4">estamos seguros de que más adelante podremos apoyarte.</p>
  </div> 

  const statusMsg = () => {
    const status = window.localStorage.getItem("status_" + process.env.REACT_APP_ENV)
    if (status === "APROBADO" || status === "APRUEBA"){
      return msg2
    }
    else if(status === "ERROR"){
      return msg3
    }
    else if(status === "0"){
      return msg4
    }
    else{
      return msg1
    }
  }
  return (
      <section className="section has-mt-big has-bg-primary data finish">
        <div className="columns is-centered ">
          <div className="column is-10">
            <div className="card">
              <div className="columns is-centered ">
                <div className="column is-12 z-2">
                  <Steps active={3} />
                </div>
              </div>

              <div className="card-content">
                <div className="finish-response has-text-centered">
                  {statusMsg()}
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Finish