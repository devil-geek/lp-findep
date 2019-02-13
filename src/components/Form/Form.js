import React, { Component } from "react";
import Steps from "../Steps/Steps";

class Form extends Component {
  stepOne() {
    return (
      <div className="form">
        <div className="has-text-centered">
          <p className="has-text-primary has-text-weight-semibold">
            ¿A qué te dedicas?
          </p>
          <div className="radios has-text-left">
            <label className="radio-container">
              Soy empleado
              <input type="radio" name="radio" />
              <span className="checkmark" />
            </label>
            <label className="radio-container">
              Tengo un negocio
              <input type="radio" name="radio" />
              <span className="checkmark" />
            </label>
            <label className="radio-container">
              Trabajo por mi cuenta
              <input type="radio" name="radio" />
              <span className="checkmark" />
            </label>
            <label className="radio-container">
              Soy pensionado
              <input type="radio" name="radio" />
              <span className="checkmark" />
            </label>
          </div>
          <p className="has-text-primary has-text-weight-semibold">
            ¿Cuánto necesitas?
          </p>
          <br />
          <div className="columns is-centered">
            <div className="column is-8">
              <div className="field has-addons">
                <p className="control">
                  <button className="button is-primary noclick">
                    <i className="fa fa-dollar-sign" />
                  </button>
                </p>
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="Desde $1,500 hasta $80,000"
                  />
                </p>
              </div>
            </div>
          </div>

          <p className="has-text-primary has-text-weight-semibold">
            ¿Cuándo lo prodrías pagar?
          </p>
          <br/>
          <div className="columns is-centered">
            <div className="column is-8">
              <div className="field has-addons">
                <p className="control">
                  <button className="button is-primary noclick">
                    <i className="far fa-calendar" />
                  </button>
                </p>
                <p className="control is-expanded">
                  <span className="select is-fullwidth">
                    <select>
                      <option>3 meses</option>
                      <option>6 meses</option>
                      <option>9 meses</option>
                      <option>12 meses</option>
                      <option>18 meses</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <p className="has-text-primary has-text-weight-semibold">
            ¿Cada cuándo lo prodrías pagar?
          </p>
          <br />
          <div className="columns is-centered">
            <div className="column is-narrow">
          <div className="buttons centered">
                <button className="button is-primary is-outlined is-small">
            Semanal
          </button>
                <button className="button is-primary is-outlined is-small">
              Quincenal
          </button>
                <button className="button is-primary is-outlined is-small">
              Mensual
          </button>
            </div>
          </div>
          </div>

          <p className="has-text-primary has-text-weight-semibold">
            Pago estimado
          </p>
          <br />
          <h1 className='title is-5'>
          0* MXN
          </h1>
          <small className='is-size-7'>
            * Esta cifra es un estimado basado en una simulación
          </small>
          <br/>
          <br />

          <button className='button is-link'>
            Continuar con solicitud online
          </button>
          <br />
          <br />

          <p>
            <a className='has-text-link is-size-7 has-text-weight-semibold'>
            Quiero que me hablen por teléfono
          </a>
          </p>
          <a className='is-size-7 underlined'>
            Conoce más detalles de tu préstamo
          </a>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="columns is-centered is-marginless-bottom">
          <div className="column is-11 is-marginless is-paddingless z-2">
            <Steps />
          </div>
        </div>
        
      <div className="form card">
          <br />
          <br />
        <div className="card-content">{this.stepOne()}</div>
      </div>
      </div>

    );
  }
}

export default Form;
