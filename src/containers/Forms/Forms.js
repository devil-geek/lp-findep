import React, { Component } from "react";
import Steps from "../../components/Steps/Steps";

class Forms extends Component {

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <section className="section has-mt-big has-bg-primary data">
        <div className="columns is-centered ">
          <div className="column is-10">
            <div className="card">
              <div className="columns is-centered ">
                <div className="column is-12 z-2">
                  <Steps active={2}/>
                </div>
              </div>

              <div className="card-content">
                  <div className="columns is-centered forms">
                    <div className="column is-5 has-bg-primary">
                      <div className="columns ">
                        <div className="column is-6">
                          <label className="label is-size-7 has-text-primary">
                            Nombre
                          </label>
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div className="column is-6">
                          <label className="label is-size-7 has-text-primary">
                            Segundo Nombre
                          </label>
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>

                      <div className="columns">
                        <div className="column is-6">
                          <label className="label is-size-7 has-text-primary">
                            Apellido materno
                          </label>

                          <input
                            className="input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div className="column is-6">
                          <label className="label is-size-7 has-text-primary">
                            Apellido paterno
                          </label>

                          <input
                            className="input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <label className="label is-size-7 has-text-primary label-only">
                        Fecha de nacimiento &nbsp;&nbsp;
                        <span className="is-size-8 has-text-grey">
                          (Prestamos a partir de 18 a 68 años y 11 meses)
                        </span>
                      </label>

                      <div className="columns">
                        <div className="column is-4">
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div className="column is-4">
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                          />
                        </div>

                        <div className="column is-4">
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <label className="label is-size-7 has-text-primary label-only">
                        Apellido paterno
                      </label>
                      <div className="columns">
                        <div className="column is-narrow">
                          <div className="radios">
                            <label className="radio-container">
                              Masculino
                              <input type="radio" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </div>
                        <div className="column is-narrow">
                          <div className="radios">
                            <label className="radio-container">
                              Femenino
                              <input type="radio" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column">
                          <label className="label is-size-7 has-text-primary">
                            Correo electrónico
                          </label>

                          <input
                            className="input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                            &nbsp;&nbsp;
                  &nbsp;&nbsp;

                    <div className="column is-5 has-bg-primary">
                      <div className="columns">
                        <div className="column">
                          <label className="label is-size-7 has-text-primary">
                            Teléfono
                            &nbsp;&nbsp;
                        <span className="is-size-8 has-text-grey">
                              (Número a 10 dígitos)
                        </span>
                          </label>
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>

                    <div className="columns">
                      <div className="column">
                        <label className="label is-size-7 has-text-primary">
                          RFC
                        </label>
                        <input
                          className="input"
                          type="text"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="columns">
                      <div className="column is-6">
                        <label className="label is-size-7 has-text-primary">
                          Código postal
                        </label>
                        <input
                          className="input"
                          type="text"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="columns">
                      <div className="column">
                        <div className="radios">
                          <label className="radio-container">
                            Acepto términos y condiciones del Aviso de Privacidad de Financiera Independencia, S.A. de C.V., SOFOM, E.N.R.
                              <input type="checkbox" name="radio" />
                            <span className="checkmark" />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="columns">
                      <div className="column">
                        <button className="button is-link is-fullwidth">
                          Enviar datos y terminar
                        </button>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <br/>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default Forms;
