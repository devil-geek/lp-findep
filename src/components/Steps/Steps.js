import React from 'react'

const Steps = () => {
  return (
    <div>
      <ul className="steps">
        <li className="step-item is-info is-completed">
          <div className="step-marker">
            1
          </div>
          <div className="step-details">
            <p className="has-text-primary has-text-weight-normal">uno</p>
          </div>
        </li>
        <li className="step-item is-active">
          <div className="step-marker">2</div>
        </li>
        <li className="step-item">
          <div className="step-marker">3</div>
        </li>
      </ul>
    </div>
  )
}

export default Steps