import React, { Component } from "react";
import axios from 'axios'
import Steps from "../Steps/Steps";
import { Link } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monto: "",
      plazo: "",
      pago: "0",
      periodo: "",
      role: ""
    }
    console.log(process.env.REACT_APP_API)
  }

  async calculate() {
    const { monto, plazo, periodo } = this.state

    if(monto === "" || plazo === "" || periodo === ""){
      return
    }

    const url = '/findep-cotizador/rest/pago/fisa'
    const params = { ...this.state }
    delete params.renta
    delete params.role

    const res = await axios.post(
      process.env.REACT_APP_API + url,
      params
    );
    console.log(res)
    if (res.data.renta) {
      this.setState({
        renta: res.data.renta
      })
    }

  }

  setRole = (role) => {
    this.setState({
      role
    })
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
  
    this.setState({
      [name]: value
    }, () => {
      this.calculate()
    })

    
  }

  setPeriod = (periodo) => {
    this.setState({
      periodo
    })
  }

  stepOne() {
    const { monto, plazo, periodo, renta, role } = this.state
    return (
      <div className="form">
        <div className="has-text-centered">
          <p className="has-text-primary has-text-weight-semibold">
            ¿A qué te dedicas?
          </p>
          <div className="radios has-text-left">
            <label className="radio-container">
              Soy empleado
              <input type="radio" name="role" value="empleado" checked={role === 'empleado'} onChange={this.handleChange}/>
              <span className="checkmark" />
            </label>
            <label className="radio-container">
              Tengo un negocio
              <input type="radio" name="role" value="negocio" checked={role === 'negocio'} onChange={this.handleChange}/>
              <span className="checkmark" />
            </label>
            <label className="radio-container">
              Trabajo por mi cuenta
              <input type="radio" name="role" value="cuenta" checked={role === 'cuenta'} onChange={this.handleChange}/>
              <span className="checkmark" />
            </label>
            <label className="radio-container">
              <a href="https://www.masnomina.com.mx/">
                Soy pensionado
                <input type="radio" name="role" />
                <span className="checkmark" />
              </a>
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
                    name="monto"
                    value={monto}
                    onChange={this.handleChange}
                    placeholder="Desde $1,500 hasta $80,000"
                  />
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
              <div className="buttons_ centered">
              {role !== 'empleado' &&
                <button className="button is-primary is-outlined is-small" onClick={() => this.setPeriod('S')}>
                  Semanal
                </button>
              }
              {role === "empleado" &&
                <button className="button is-primary is-outlined is-small" onClick={() => this.setPeriod('Q')}>
                  Quincenal
                </button>
              }
                {role === "empleado" &&
                <button className="button is-primary is-outlined is-small" onClick={() => this.setPeriod('M')}>
                  Mensual
                </button>
                }
              </div>
            </div>
          </div>

          <p className="has-text-primary has-text-weight-semibold">
            ¿Cuándo lo prodrías pagar?
          </p>
          <br />
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
                    <select
                      name="plazo"
                      value={plazo}
                      onChange={this.handleChange}>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="9">9 meses</option>
                      <option value="12">12 meses</option>
                      <option value="18">18 meses</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>
          {renta &&
          <div>
            <p className="has-text-primary has-text-weight-semibold">
              Pago estimado
          </p>
            <br />
            <h1 className="title is-5">${renta.toFixed(2)}* MXN</h1>
            <small className="is-size-7">
              * Esta cifra es un estimado basado en una simulación
          </small>
            <br />
            <br />
          </div>
}
          <button className="button is-link">
            Continuar con solicitud online
          </button>
          <br />
          <br />

          <p>
            <Link
              to="/datos"
              className="has-text-link is-size-7 has-text-weight-semibold"
            >
              Quiero que me hablen por teléfono
            </Link>
          </p>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="form card">
          <div className="columns is-centered ">
            <div className="column is-12 z-2">
              <Steps active={1} />
            </div>
          </div>

          <div className="card-content">{this.stepOne()}</div>
        </div>
      </div>
    );
  }
}

export default Form;
