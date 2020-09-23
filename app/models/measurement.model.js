module.exports = (sequelize, Sequelize) => {
    const Measurement = sequelize.define("measurement", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      received_at: {
        type: Sequelize.DATE
      },
      device: {
        type: Sequelize.STRING(255)
      },
      application_id: {
        type: Sequelize.STRING(255)
      },
      dev_eui: {
        type: Sequelize.STRING(255)
      },
      join_eui: {
        type: Sequelize.STRING(255)
      },
      dev_addr: {
        type: Sequelize.STRING(255)
      },
      temperature_timestamp: {
        type: Sequelize.INTEGER
      },
      temperature_value: {
        type: Sequelize.INTEGER
      },
      voltage_timestamp: {
        type: Sequelize.INTEGER
      },
      voltage_value: {
        type: Sequelize.INTEGER
      },
      charge_timestamp: {
        type: Sequelize.INTEGER
      },
      charge_value: {
        type: Sequelize.INTEGER
      },
      vibration_values_x: {
        type: Sequelize.ARRAY(Sequelize.DOUBLE)
      },
      vibration_values_x_unit: {
        type: Sequelize.STRING
      },
      vibration_values_y: {
        type: Sequelize.ARRAY(Sequelize.DOUBLE)
      },
      vibration_values_y_unit: {
        type: Sequelize.STRING
      },
      vibration_sample_rate: {
        type: Sequelize.REAL
      },
      vibration_elements: {
        type: Sequelize.REAL
      },
      vibration_maximum: {
        type: Sequelize.REAL
      },
      vibration_total_magnitude: {
        type: Sequelize.DOUBLE
      },
      vibration_peak_magnitude: {
        type: Sequelize.DOUBLE
      },
      vibration_peak_magnitude_hz: {
        type: Sequelize.DOUBLE
      },
    }, {freezeTableName: true, timestamps:false});
    return Measurement;
};