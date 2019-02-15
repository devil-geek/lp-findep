import React from 'react'

const Steps = (props) => {
  return (
    <div className='step-container'>
      <ul className="steps">
        <li className="step-item is-info is-completed">
          <div className="step-marker has-text-shadow">
            1
          </div>
          <div className="step-details">
            <p className={props.active === 1 ? "has-text-primary is-size-8 has-text-weight-semibold" : "has-text-primary is-size-8 has-text-weight-normal"}>Cotiza</p>
          </div>
        </li>
        <li className={props.active >= 2 ? "step-item is-info is-completed" : "step-item"}>
          <div className="step-marker has-text-shadow">2</div>
          <div className="step-details">
            <p className={props.active === 2 ? "has-text-primary is-size-8 has-text-weight-semibold" : "has-text-primary is-size-8 has-text-weight-normal"}>Datos personales</p>
          </div>
        </li>
        <li className={props.active === 3 ? "step-item is-info is-completed" : "step-item"}>
          <div className="step-marker has-text-shadow">3</div>
          <div className="step-details">
            <p className="has-text-primary is-size-8 has-text-weight-normal">Datos del préstamo</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Steps