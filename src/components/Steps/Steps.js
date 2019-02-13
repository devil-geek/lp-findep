import React from 'react'

const Steps = () => {
  return (
    <div>
      <ul className="steps">
        <li className="step-item is-info is-completed">
          <div className="step-marker has-text-shadow">
            1
          </div>
          <div className="step-details">
            <p className="has-text-primary is-size-7 has-text-weight-semibold">Datos personales</p>
          </div>
        </li>
        <li className="step-item">
          <div className="step-marker has-text-shadow">2</div>
          <div className="step-details">
            <p className="has-text-primary is-size-7 has-text-weight-normal">Domicilio actual</p>
          </div>
        </li>
        <li className="step-item">
          <div className="step-marker has-text-shadow">3</div>
          <div className="step-details">
            <p className="has-text-primary is-size-7 has-text-weight-normal">Datos de crédito</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Steps