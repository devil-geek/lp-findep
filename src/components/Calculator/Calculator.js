import React, { Component } from "react";
import axios from "axios";
import Steps from "../Steps/Steps";
import { Link } from "react-router-dom";
import fisa from "./fisa";
import aef from "./aef";
import Modal from "../Modal/Modal";
import Amortizacion from "../Amortizacion/Amortizacion";

const data = process.env.REACT_APP_ENV === "FISA" ? fisa : aef;

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monto: "",
      plazo: "",
      pago: "0",
      periodo: "",
      role: "",
      loading: false
    };
    this.aModal = React.createRef()
    console.log(process.env.REACT_APP_API);
    console.log(data);
  }

  async calculate() {
    const { monto, plazo, periodo } = this.state;

    if (monto === "" || plazo === "" || periodo === "") {
      return;
    }
    this.setState({
      loading: true
    });
    const url = process.env.REACT_APP_ENV === "FISA" ?
      process.env.REACT_APP_FISA_CALCULATOR : process.env.REACT_APP_AEF_CALCULATOR

    const params = { ...this.state };
    delete params.renta;
    delete params.role;
    delete params.loading;

    //const res = await axios.post(process.env.REACT_APP_API + url, params);
    const res = await axios.post(url, params);

    console.log(res);
    if (res.data.renta) {
      this.setState({
        renta: res.data.renta,
        loading: false
      });
    }
  }

  async amort() {
    const { monto, plazo, periodo } = this.state;

    if (monto === "" || plazo === "" || periodo === "") {
      return;
    }
    this.setState({
      loading: true
    });

    const url = process.env.REACT_APP_ENV === "FISA" ?
      process.env.REACT_APP_FISA_AMORT : process.env.REACT_APP_AEF_AMORT

    const params = { ...this.state };
    delete params.renta;
    delete params.role;
    delete params.loading;
    delete params.amortization;

    //const res = await axios.post(process.env.REACT_APP_API + url, params);
    const res = await axios.post(url, params);
    console.log(res);
    if (res.data.amortizacion) {
      this.setState({
        amortization: res.data.amortizacion
      });
    }
  }

  setRole = role => {
    this.setState({
      role
    });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "role") {
      this.setState({
        monto: "",
        plazo: "",
        periodo: "",
        renta: undefined,
        role: value
      });
    }
    else if (name === "monto") {
      this.setState({
        monto: value,
        plazo: "",
        periodo: "",
        renta: undefined
      });
    }
     else {
      this.setState(
        {
          [name]: value,
          renta: undefined
        },
        () => {
          this.calculate();
        }
      );
    }
  };

  setPeriod = periodo => {
    this.setState({
      periodo,
      plazo: ""
    });
  };

  getPeriodName = p => {
    switch (p) {
      case "S":
        return "Semanas";
      case "Q":
        return "Quincenas";
      case "M":
        return "Meses";
      default:
        return "";
    }
  };

  getOptions = () => {
    const { periodo, monto } = this.state;
    let plazos =
      monto > data.plazo[periodo].short.max
        ? data.plazo[periodo].long.plazos
        : data.plazo[periodo].short.plazos;
    return plazos.map(item => {
      return (
        <option key={item} value={item}>
          {item} {this.getPeriodName(periodo)}
        </option>
      );
    });
  };

  montoBlur = (e) => {
    const value = e.target.value
    const diff = value % 500
    if(diff !== 0){
      console.log('nop', diff)
    }

    this.setState({
      monto: value - diff
    })
  }

  online = () => {
    window.localStorage.setItem("prestamo_" + process.env.REACT_APP_ENV, JSON.stringify(this.state))
  }

  openModal = async () => {
    await this.amort()
    this.aModal.current.showModal()
  } 

  stepOne() {
    const { monto, plazo, periodo, renta, role, loading } = this.state;
    return (
      <div className="form">
        <div className="has-text-centered">
          <p className="has-text-primary has-text-weight-semibold">
            ¿A qué te dedicas?
          </p>
          <div className="radios has-text-left">
            <label className="radio-container">
              Soy empleado
              <input
                type="radio"
                name="role"
                value="FORMAL"
                checked={role === "FORMAL"}
                onChange={this.handleChange}
              />
              <span className="checkmark" />
            </label>
            <label className="radio-container">
              Tengo un negocio
              <input
                type="radio"
                name="role"
                value="MICRONEGOCIO"
                checked={role === "MICRONEGOCIO"}
                onChange={this.handleChange}
              />
              <span className="checkmark" />
            </label>
            <label className="radio-container">
              Trabajo por mi cuenta
              <input
                type="radio"
                name="role"
                value="AUTOEMPLEO"
                checked={role === "AUTOEMPLEO"}
                onChange={this.handleChange}
              />
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
                    type="number"
                    step="500"
                    disabled={role === ""}
                    min={role !== "" ? data.monto[role].min : ""}
                    max={role !== "" ? data.monto[role].max : ""}
                    name="monto"
                    value={monto}
                    onChange={this.handleChange}
                    onBlur={this.montoBlur}
                    placeholder={role !== "" ? "Desde $" + data.monto[role].min + " hasta $" + data.monto[role].max : ""}
              />
                </p>
              </div>
              {role && monto && (monto < data.monto[role].min || monto > data.monto[role].max) &&
              <p className="help is-info">El monto debe estar entre {data.monto[role].min} y {data.monto[role].max}</p>
              }
            </div>
          </div>

          <p className="has-text-primary has-text-weight-semibold">
            ¿Cada cuándo lo prodrías pagar?
          </p>
          <br />
          <div className="columns is-centered">
            <div className="column is-narrow">
              <div className="buttons_ centered">
                {(role !== "FORMAL" || process.env.REACT_APP_ENV !== "FISA") && (
                  <button
                    className="button is-primary is-outlined is-small"
                    onClick={() => this.setPeriod("S")}
                    disabled={monto === "" || (monto < data.monto[role].min || monto > data.monto[role].max)}
                  >
                    Semanal
                  </button>
                )}
                {(role !== "MICRONEGOCIO" && role !== "AUTOEMPLEO" || process.env.REACT_APP_ENV !== "FISA") &&(
                  <button
                    className="button is-primary is-outlined is-small"
                    onClick={() => this.setPeriod("Q")}
                    disabled={monto === ""}
                  >
                    Quincenal
                  </button>
                )}
                {(role !== "MICRONEGOCIO" && role !== "AUTOEMPLEO" || process.env.REACT_APP_ENV !== "FISA") &&(
                  <button
                    className="button is-primary is-outlined is-small"
                    onClick={() => this.setPeriod("M")}
                    disabled={monto === ""}
                  >
                    Mensual
                  </button>
                )}
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
                      onChange={this.handleChange}
                      disabled={periodo === ""}
                    >
                    <option value="">Selecciona un plazo</option>
                      { role !== "" &&
                        periodo !== "" &&
                        monto !== "" &&
                        this.getOptions()
                      }
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>
          {renta &&(
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
              <span className="is-size-7 underlined" onClick={this.openModal}>
                Consulta aquí la tabla de amortización
              </span>
              <br />
              <br />
            </div>
          )}
          {!renta && loading  && (
            <div>
              <p className="has-text-primary has-text-weight-semibold">
                Calculando
              </p>
              <br />
              <div className="has-text-centered">
                <i className="fas fa-spinner fa-spin fa-2x has-text-primary"/>
              </div>
              <br />
              <br />
            </div>
          )}
          <Link
            to="/datos/online"
            onClick={this.online}
            className="button is-link boton"
            id="Continuar solicitud online"
          >
            Continuar con solicitud online
          </Link>
          <br />
          <br />

          <p>
            <Link
              to="/datos"
              className="has-text-link is-size-7 has-text-weight-semibold boton"
              id="Quiero que me hablen por telefono"
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
          <Modal ref={this.aModal} title="Tabla de amortización" class="amort">
            <Amortizacion data={this.state.amortization} monto={this.state.monto}/>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Calculator;
