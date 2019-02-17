const monto = {
  FORMAL: {
    min: 1500,
    max: 50000
  },
  MICRONEGOCIO: {
    min: 1500,
    max: 50000
  },
  AUTOEMPLEO: {
    min: 1500,
    max: 50000
  }
};

const plazo = {
  S: {
    short: {
      min: 1500,
      max: 3500,
      plazos: [13, 26, 39, 52]
    },
    long: {
      min: 3501,
      max: 50000,
      plazos: [13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156]
    }
  },
  Q: {
    short: {
      min: 1500,
      max: 3500,
      plazos: [6, 12, 18, 24]
    },
    long: {
      min: 3501,
      max: 50000,
      plazos: [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72]
    }
  },
  M: {
    short: {
      min: 1500,
      max: 3500,
      plazos: [3, 6, 9, 12]
    },
    long: {
      min: 3501,
      max: 50000,
      plazos: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]
    }
  }
};

export default { monto, plazo };
