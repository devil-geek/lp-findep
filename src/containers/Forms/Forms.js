import React, { Component } from "react";
import axios from "axios";
import RfcFacil from "rfc-facil";
import Steps from "../../components/Steps/Steps";
import req_fisa from "./req_fisa.json";
import req_aef from "./req_aef.json";
import Modal from "../../components/Modal/Modal";
import nolocation from "./nolocation.png";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      segundoNombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      dd: "",
      mm: "",
      yyyy: "",
      genero: "",
      correoElectronico: "",
      tel: "",
      rfc: "",
      cp: "",
      colonia: "",
      authorize: "",
      showNext: false,
      step: "dos",
      estado: "",
      municipio: "",
      numeroExterior: "",
      numeroInterior: "",
      calle: "",
      privacy: false,
      numeroTarjetaCredito: "",
      tarjetaCredito: ""
    };

    this.noCover = React.createRef();

    this.request = process.env.REACT_APP_ENV === "FISA" ? req_fisa : req_aef;

    if (this.props.match.params.online) {
      if (
        window.localStorage.getItem("prestamo_" + process.env.REACT_APP_ENV) !==
        null
      ) {
        const prestamo = JSON.parse(
          window.localStorage.getItem("prestamo_" + process.env.REACT_APP_ENV)
        );
        this.request = {
          ...this.request,
          datosCredito: {
            ...this.request.datosCredito,
            monto: prestamo.monto,
            periodo: prestamo.periodo,
            plazo: prestamo.plazo,
            dedicacion: prestamo.role
          }
        };
      }
    }
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "colonia") {
      const col = this.state.colonias.find(item => item.asentamiento === value);
      this.setState({
        colonia: col.asentamiento,
        estado: col.estado,
        municipio: col.municipio
      });
    } else {
      this.setState(
        {
          [name]: value
        },
        () => {
          if (name === "cp") {
            this.getCover();
          }
        }
      );
    }
  };

  async submitStepTwo() {
    const {
      nombre,
      segundoNombre,
      apellidoPaterno,
      apellidoMaterno,
      dd,
      mm,
      yyyy,
      genero,
      correoElectronico,
      tel,
      cp,
      colonia
    } = this.state;

    this.setState({
      loading: "is-loading"
    });

    this.request.nombre = nombre;
    this.request.segundoNombre = segundoNombre;
    this.request.apellidoPaterno = apellidoPaterno;
    this.request.apellidoMaterno = apellidoMaterno;
    this.request.correoElectronico = correoElectronico;
    this.request.fechaNacimiento = `${dd}/${mm}/${yyyy}`;
    this.request.genero = genero;
    this.request.domicilio = [
      {
        calle: "",
        colonia: colonia,
        cp: cp,
        numeroExterior: "",
        numeroInterior: ""
      }
    ];
    this.request.telefono = [
      {
        numeroTelefono: tel,
        tipoTelefono: "M"
      }
    ];
    this.request.datosBuro = null;

    let url =
      process.env.REACT_APP_ENV === "FISA"
        ? process.env.REACT_APP_FISA_ENDPOINT
        : process.env.REACT_APP_AEF_ENDPOINT;

    url += "?paso=dos";
    try {
      const res = await axios.post(
        process.env.REACT_APP_API + url,
        this.request
      );

      if (res.data.status !== undefined) {
        this.setState(
          {
            status: res.data.status,
            loading: ""
          },
          () => {
            window.localStorage.setItem(
              "status_" + process.env.REACT_APP_ENV,
              res.data.status
            );
            this.props.history.push("/response");
          }
        );
      }
    } catch (e) {
      console.log(e);
      this.setState({
        loading: ""
      });
    }
  }

  async submitStepThree() {
    const {
      nombre,
      segundoNombre,
      apellidoPaterno,
      apellidoMaterno,
      dd,
      mm,
      yyyy,
      genero,
      correoElectronico,
      tel,
      cp,
      colonia,
      tarjetaCredito,
      numeroTarjetaCredito,
      hipotecarioCredito,
      automotrizCredito,
      authorize,
      numeroExterior,
      numeroInterior,
      calle
    } = this.state;

    this.setState({
      loading: "is-loading"
    });

    this.request.nombre = nombre;
    this.request.segundoNombre = segundoNombre;
    this.request.apellidoPaterno = apellidoPaterno;
    this.request.apellidoMaterno = apellidoMaterno;
    this.request.correoElectronico = correoElectronico;
    this.request.fechaNacimiento = `${dd}/${mm}/${yyyy}`;
    this.request.genero = genero;
    this.request.domicilio = [
      {
        calle: calle,
        colonia: colonia,
        cp: cp,
        numeroExterior: numeroExterior,
        numeroInterior: numeroInterior
      }
    ];
    this.request.telefono = [
      {
        numeroTelefono: tel,
        tipoTelefono: "M"
      }
    ];
    this.request.datosBuro = {};
    this.request.datosBuro.consultaBuro = "S";
    this.request.datosBuro.tarjetaCredito = tarjetaCredito;
    this.request.datosBuro.numeroTarjetaCredito = numeroTarjetaCredito;
    this.request.datosBuro.hipotecarioCredito = hipotecarioCredito;
    this.request.datosBuro.automotrizCredito = automotrizCredito;
    this.request.datosBuro.autorizacion = authorize;

    let url =
      process.env.REACT_APP_ENV === "FISA"
        ? process.env.REACT_APP_FISA_ENDPOINT
        : process.env.REACT_APP_AEF_ENDPOINT;

    url += "?paso=tres";
    try {
      const res = await axios.post(
        process.env.REACT_APP_API + url,
        this.request
      );

      if (res.data.status !== undefined) {
        this.setState(
          {
            status: res.data.status,
            loading: ""
          },
          () => {
            window.localStorage.setItem(
              "status_" + process.env.REACT_APP_ENV,
              res.data.status
            );
            this.props.history.push("/response");
          }
        );
      }
    } catch (e) {
      console.log(e);
      this.setState({
        loading: ""
      });
    }
  }

  submit = async e => {
    e.preventDefault();
    const { authorize, showNext } = this.state;

    if (authorize === "true" && !showNext) {
      this.setState({
        showNext: true
      });
      return;
    } else if (authorize === "true" && showNext) {
      this.submitStepThree();
      return;
    }

    this.submitStepTwo();
  };

  getRfc = async e => {
    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      dd,
      mm,
      yyyy
    } = this.state;

    if (
      nombre === "" ||
      apellidoPaterno === "" ||
      apellidoMaterno === "" ||
      dd === "" ||
      mm === "" ||
      yyyy === ""
    ) {
      return;
    }
    try {
      const rfc: string = RfcFacil.forNaturalPerson({
        name: nombre,
        firstLastName: apellidoPaterno,
        secondLastName: apellidoMaterno,
        day: dd,
        month: mm,
        year: yyyy
      });

      this.setState({
        rfc: rfc.substr(0, rfc.length - 3)
      });
    } catch (e) {
      console.log(e);
      return "";
    }
  };

  getCover = async e => {
    const url =
      process.env.REACT_APP_ENV === "FISA"
        ? process.env.REACT_APP_FISA_COVER
        : process.env.REACT_APP_AEF_COVER;

    const { cp } = this.state;
    const res = await axios.get(process.env.REACT_APP_API + url + `?cp=${cp}`);

    if (res.data.length > 0) {
      this.setState({
        colonias: res.data
      });
    } else {
      this.noCover.current.showModal();
    }
  };

  stepTwo() {
    const {
      nombre,
      segundoNombre,
      apellidoPaterno,
      apellidoMaterno,
      dd,
      mm,
      yyyy,
      correoElectronico,
      tel,
      rfc,
      cp,
      colonia,
      authorize,
      colonias,
      loading,
      privacy,
      genero
    } = this.state;

    return (
      <form onSubmit={this.submit}>
        <div className="columns is-centered forms">
          <div className="column is-5 has-bg-primary">
            <div className="columns ">
              <div className="column is-6">
                <label className="label is-size-7 has-text-primary">
                  Nombre *
                </label>
                <input
                  className="input"
                  type="text"
                  name="nombre"
                  placeholder=""
                  required
                  onChange={this.handleChange}
                  value={nombre}
                  onBlur={this.getRfc}
                />
              </div>
              <div className="column is-6">
                <label className="label is-size-7 has-text-primary">
                  Segundo Nombre
                </label>
                <input
                  className="input"
                  type="text"
                  name="segundoNombre"
                  placeholder=""
                  onChange={this.handleChange}
                  value={segundoNombre}
                  onBlur={this.getRfc}
                  disabled={!nombre}
                />
              </div>
            </div>

            <div className="columns">
              <div className="column is-6">
                <label className="label is-size-7 has-text-primary">
                  Apellido paterno *
                </label>

                <input
                  className="input"
                  type="text"
                  name="apellidoPaterno"
                  placeholder=""
                  required
                  onChange={this.handleChange}
                  value={apellidoPaterno}
                  onBlur={this.getRfc}
                  disabled={!nombre}
                />
              </div>
              <div className="column is-6">
                <label className="label is-size-7 has-text-primary">
                  Apellido materno *
                </label>

                <input
                  className="input"
                  type="text"
                  name="apellidoMaterno"
                  placeholder=""
                  required
                  onChange={this.handleChange}
                  value={apellidoMaterno}
                  onBlur={this.getRfc}
                  disabled={!apellidoPaterno}
                />
              </div>
            </div>
            <label className="label is-size-7 has-text-primary label-only">
              Fecha de nacimiento * &nbsp;&nbsp;
              <span className="is-size-8 has-text-grey">
                (Prestamos a partir de 18 a 68 años y 11 meses)
              </span>
            </label>

            <div className="columns">
              <div className="column is-4">
                <input
                  className="input"
                  type="text"
                  placeholder="DD"
                  required
                  name="dd"
                  onChange={this.handleChange}
                  value={dd}
                  onBlur={this.getRfc}
                  disabled={!nombre || !apellidoPaterno || !apellidoMaterno}
                />
              </div>
              <div className="column is-4">
                <input
                  className="input"
                  type="text"
                  placeholder="MM"
                  required
                  name="mm"
                  onChange={this.handleChange}
                  value={mm}
                  onBlur={this.getRfc}
                  disabled={!nombre || !apellidoPaterno || !apellidoMaterno}
                />
              </div>

              <div className="column is-4">
                <input
                  className="input"
                  type="text"
                  placeholder="AAAA"
                  required
                  name="yyyy"
                  onChange={this.handleChange}
                  value={yyyy}
                  onBlur={this.getRfc}
                  disabled={!nombre || !apellidoPaterno || !apellidoMaterno}
                />
              </div>
            </div>
            <label className="label is-size-7 has-text-primary label-only">
              Género *
            </label>
            <div className="columns">
              <div className="column is-narrow">
                <div className="radios">
                  <label className="radio-container">
                    Masculino
                    <input
                      required
                      type="radio"
                      name="genero"
                      value="M"
                      onChange={this.handleChange}
                      disabled={!dd || !mm || !yyyy}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <div className="column is-narrow">
                <div className="radios">
                  <label className="radio-container">
                    Femenino
                    <input
                      required
                      type="radio"
                      name="genero"
                      value="F"
                      onChange={this.handleChange}
                      disabled={!dd || !mm || !yyyy}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <label className="label is-size-7 has-text-primary">
                  Correo electrónico *
                </label>

                <input
                  className="input"
                  type="email"
                  name="correoElectronico"
                  placeholder=""
                  required
                  onChange={this.handleChange}
                  value={correoElectronico}
                  disabled={!genero}
                />
              </div>
            </div>
            <p className="is-size-7">
              * Los campos marcados con asterisco, son obligatorios
            </p>
          </div>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <div className="column is-5 has-bg-primary">
            <div className="columns">
              <div className="column">
                <label className="label is-size-7 has-text-primary">
                  RFC *
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder=""
                  readOnly
                  name="rfc"
                  onChange={this.handleChange}
                  value={rfc}
                  disabled
                />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <label className="label is-size-7 has-text-primary">
                  Teléfono * &nbsp;&nbsp;
                  <span className="is-size-8 has-text-grey">
                    (Número a 10 dígitos)
                  </span>
                </label>
                <input
                  className="input"
                  type="tel"
                  placeholder=""
                  required
                  name="tel"
                  onChange={this.handleChange}
                  value={tel}
                  disabled={!correoElectronico}
                />
              </div>
            </div>

            <div className="columns">
              <div className="column is-6">
                <label className="label is-size-7 has-text-primary">
                  Código postal *
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder=""
                  required
                  name="cp"
                  onChange={this.handleChange}
                  value={cp}
                  disabled={!tel}
                />
              </div>
              <div className="column is-6">
                <label className="label is-size-7 has-text-primary">
                  Colonia *
                </label>
                <p className="control is-expanded">
                  <span className="select is-fullwidth">
                    <select
                      required
                      name="colonia"
                      value={colonia}
                      onChange={this.handleChange}
                      disabled={!colonias}
                    >
                      <option value="">Selecciona</option>
                      {colonias &&
                        colonias.map(item => {
                          return (
                            <option
                              key={item.asentamiento}
                              value={item.asentamiento}
                            >
                              {item.asentamiento}
                            </option>
                          );
                        })}
                    </select>
                  </span>
                </p>
              </div>
            </div>

            {!this.props.match.params.online && (
              <div className="columns">
                <div className="column">
                  <p className="title is-size-7 has-text-weight-normal">
                    <span className="icon">
                      <i className="fa fa-lock has-text-primary" />
                    </span>
                    Tu información está protegida. Para continuar, por favor
                    selecciona nuestro aviso de privacidad
                  </p>
                  <div className="radios">
                    <label className="radio-container">
                      Acepto términos y condiciones del Aviso de Privacidad de
                      Financiera Independencia, S.A. de C.V., SOFOM, E.N.R.
                      <input
                        type="checkbox"
                        name="privacy"
                        onChange={this.handleChange}
                        required
                        disabled={!colonia}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
            )}
            {this.props.match.params.online && (
              <div className="columns">
                <div className="column">
                  <div className="radios">
                    <label className="radio-container">
                      Autorizo consulta de buró de crédito en linea.
                      <input
                        type="radio"
                        name="authorize"
                        value={true}
                        onChange={this.handleChange}
                        disabled={!colonia}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="radio-container">
                      No autorizo consulta de buró de crédito en linea.
                      <input
                        type="radio"
                        name="authorize"
                        value={false}
                        onChange={this.handleChange}
                        disabled={!colonia}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div className="columns">
              <div className="column">
                <button
                  className={"button is-link is-fullwidth " + loading}
                  type="submit"
                  disabled={
                    (this.props.match.params.online && authorize === "") ||
                    !!loading ||
                    (!this.props.match.params.online && privacy === false)
                  }
                  id="Enviar Solicitud"
                >
                  Enviar datos y{" "}
                  {authorize === "true" ? "continuar" : "terminar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }

  stepThree() {
    const {
      cp,
      colonia,
      numeroTarjetaCredito,
      tarjetaCredito,
      municipio,
      estado,
      calle,
      numeroExterior,
      numeroInterior,
      loading
    } = this.state;

    return (
      <div>
        <form onSubmit={this.submit}>
          <p className="has-text-centered is-size-6">
            Hoy siendo 7/2/2019. Autoriza a Financiera Independencia, S.A.B. de
            C.V., SOFOM, E.N.R., a consultar sus antecedentes crediticios por
            única ocasión ante las Sociedades de Información crediticia que
            estime conveniente, declarando que conoce la naturaleza, alcance y
            uso que Financiera Independencia, S.A.B. de C.V., SOFOM, E.N.R. hará
            de tal información.
          </p>
          <br />
          <div className="columns is-centered">
            <div className="column is-5 has-bg-primary">
              <div className="columns">
                <div className="column is-6">
                  <label className="label is-size-7 has-text-primary">
                    Colonia *
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="colonia"
                    placeholder=""
                    required
                    onChange={this.handleChange}
                    value={colonia}
                    readOnly
                  />
                </div>
                <div className="column is-6">
                  <label className="label is-size-7 has-text-primary">
                    Municipio *
                  </label>
                  <input
                    readOnly
                    className="input"
                    type="text"
                    name="municipio"
                    placeholder=""
                    onChange={this.handleChange}
                    value={municipio}
                  />
                </div>
              </div>

              <div className="columns">
                <div className="column is-6">
                  <label className="label is-size-7 has-text-primary">
                    Estado *
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="estado"
                    placeholder=""
                    readOnly
                    onChange={this.handleChange}
                    value={estado}
                  />
                </div>
                <div className="column is-6">
                  <label className="label is-size-7 has-text-primary">
                    CP *
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="cp"
                    placeholder=""
                    onChange={this.handleChange}
                    value={cp}
                    readOnly
                  />
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <label className="label is-size-7 has-text-primary">
                    Calle *
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="calle"
                    placeholder=""
                    required
                    onChange={this.handleChange}
                    value={calle}
                  />
                </div>
              </div>

              <div className="columns">
                <div className="column is-6">
                  <label className="label is-size-7 has-text-primary">
                    No. exterior *
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="numeroExterior"
                    placeholder=""
                    required
                    onChange={this.handleChange}
                    value={numeroExterior}
                  />
                </div>
                <div className="column is-6">
                  <label className="label is-size-7 has-text-primary">
                    No. interior
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="numeroInterior"
                    placeholder=""
                    onChange={this.handleChange}
                    value={numeroInterior}
                  />
                </div>
              </div>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <div className="column is-5 has-bg-primary">
              <div>
                <p className="has-text-primary has-text-weight-bold">
                  ¿En los últimos años has tenido un crédito de auto?
                </p>
                <div className="columns is-centered">
                  <div className="column is-narrow">
                    <div className="radios">
                      <label className="radio-container">
                        Si
                        <input
                          required
                          type="radio"
                          name="automotrizCredito"
                          value="S"
                          onChange={this.handleChange}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="column is-narrow">
                    <div className="radios">
                      <label className="radio-container">
                        No
                        <input
                          required
                          type="radio"
                          name="automotrizCredito"
                          value="N"
                          onChange={this.handleChange}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                </div>

                <p className="has-text-primary has-text-weight-bold">
                  ¿Estás pagando un crédito de vivienda? (Crédito hipotecario)
                </p>
                <div className="columns is-centered">
                  <div className="column is-narrow">
                    <div className="radios">
                      <label className="radio-container">
                        Si
                        <input
                          required
                          type="radio"
                          name="hipotecarioCredito"
                          value="S"
                          onChange={this.handleChange}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="column is-narrow">
                    <div className="radios">
                      <label className="radio-container">
                        No
                        <input
                          required
                          type="radio"
                          name="hipotecarioCredito"
                          value="N"
                          onChange={this.handleChange}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                </div>
                <p className="has-text-primary has-text-weight-bold">
                  ¿Cuentas con tarjeta de crédito?
                </p>
                <div className="columns is-centered">
                  <div className="column is-narrow">
                    <div className="radios">
                      <label className="radio-container">
                        Si
                        <input
                          required
                          type="radio"
                          name="tarjetaCredito"
                          value="S"
                          onChange={this.handleChange}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="column is-narrow">
                    <div className="radios">
                      <label className="radio-container">
                        No
                        <input
                          required
                          type="radio"
                          name="tarjetaCredito"
                          value="N"
                          onChange={this.handleChange}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                </div>
                {tarjetaCredito === "S" && (
                  <div className="columns is-centered">
                    <div className="column is-6">
                      <label className="label is-size-7 has-text-primary">
                        Coloca los últimos 4 dígitos
                      </label>
                      <input
                        required={tarjetaCredito === "S"}
                        className="input"
                        type="text"
                        placeholder=""
                        maxLength="4"
                        name="numeroTarjetaCredito"
                        onChange={this.handleChange}
                        value={numeroTarjetaCredito}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="has-text-centered is-size-6">
            El llenado de la presente per-solicitud, no exenta de la entrevista
            personal y llenado de la solicitud definitiva en sucursal, para
            verificar si cumple con las políticas de crédito de Financiera
            Independencia.
          </p>
          <br />
          <div className="columns is-centered">
            <div className="column is-6">
              <button
                className={"button is-link is-fullwidth " + loading}
                disabled={!!loading}
                type="submit"
                id="Enviar Solicitud"
              >
                Finalizar solicitud
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  render() {
    const { showNext, loading, privacy } = this.state;

    return (
      <section className="section has-mt-big has-bg-primary data">
        <div className="columns is-centered ">
          <div className="column is-10">
            <div className="card">
              <div className="columns is-centered ">
                <div className="column is-12 z-2">
                  <Steps active={2} />
                </div>
              </div>

              <div className="card-content">
                {showNext ? this.stepThree() : this.stepTwo()}
              </div>
              <br />
            </div>
          </div>
        </div>
        <Modal ref={this.noCover}>
          <div className="has-text-centered">
            <p>¡Lo sentimos!</p>
            <p>
              Por el momento{" "}
              <strong>no contamos con cobertura en tu residencia.</strong>
            </p>
            <figure className="image is-128x128 centered">
              <img src={nolocation} alt="Sin cobertura" />
            </figure>
            <p>
              Sin importar dónde estés y porque eres importante para nosotros,
              el dinero que necesitas te lo damos en nuestra empresa hermana
              <a className="has-text-link"> Financiera independencia </a>
            </p>
            <div className="radios">
              <label className="radio-container">
                Acepto términos y condiciones del Aviso de Privacidad de
                Financiera Independencia, S.A. de C.V., SOFOM, E.N.R.
                <input
                  type="checkbox"
                  name="privacy"
                  onChange={this.handleChange}
                  required
                />
                <span className="checkmark" />
              </label>
            </div>
            <button
              className={"button is-link is-fullwidth " + loading}
              disabled={!privacy}
              onClick={this.onSubmit}
            >
              Enviar datos y terminar
            </button>
          </div>
        </Modal>
      </section>
    );
  }
}

export default Forms;
