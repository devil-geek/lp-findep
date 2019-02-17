import React from "react";

const Amortizacion = props => {
  return (
    <div>
      <p className="is-size-7 has-text-weight-bold has-ml-small">Datos del cálculo</p>
      <table className="table is-size-7 is-fullwidth">
        <thead>
          <tr>
            <th className="has-text-info">Préstamo</th>
            <th className="has-text-info">Comisión por apertura</th>
            <th className="has-text-info">Comisión por investigación</th>
            <th className="has-text-info">IVA</th>
            <th className="has-text-info">Comisión por apertura</th>
            <th className="has-text-info">Comisión por investigación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.monto}</td>
            <td>6.5%</td>
            <td>6.5%</td>
            <td>16%</td>
            <td>6.5%</td>
            <td>6.5%</td>
          </tr>
        </tbody>
      </table>

      <table className="table is-size-7 is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th className="has-text-dark">No. periodo</th>
            <th className="has-text-dark">Saldo inicio</th>
            <th className="has-text-dark">Abono a capital</th>
            <th className="has-text-dark">Abono a comisión</th>
            <th className="has-text-dark">Abono a IVA comisión</th>
            <th className="has-text-dark">Interés</th>
            <th className="has-text-dark">IVA Interés</th>
            <th className="has-text-dark">Saldo final</th>
            <th className="has-text-dark">Pago</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map(item => {
              return (
                <tr key={item.periodo}>
                  <td className="has-text-centered">{item.periodo}</td>
                  <td className="has-text-centered">${item.saldoInicial}</td>
                  <td className="has-text-centered">${item.pagoCapital}</td>
                  <td className="has-text-centered">${item.pagoComision}</td>
                  <td className="has-text-centered">${item.pagoComisionIVA}</td>
                  <td className="has-text-centered">${item.pagoInteres}</td>
                  <td className="has-text-centered">${item.pagoInteresIVA}</td>
                  <td className="has-text-centered">${item.saldoFinal}</td>
                  <td className="has-text-centered">${item.renta}</td>
                </tr>
              );
            })
            }
          <tr className="has-background-primary">
            <td className="has-text-white has-text-weight-semibold right" colSpan="9">TOTAL A PAGAR: ${props.monto}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Amortizacion;
