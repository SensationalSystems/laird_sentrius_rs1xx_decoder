/**
 * Basic decoder for Laird RS1xx Sensors, only supporting uplink message
 * type 0x01 as defined in RS1xx LoRa Protocol v2.7.
 */
function Decoder(bytes, f_port) {
  var messageType = bytes[0];

  // All Sensor-to-Server messages have the same options byte format.
  // The options byte is always at byte index 1.
  var options = bytes[1];

  var decoded = {
    raw: bytes,
    f_port: f_port,
    messageType: messageType,
    options: options,
    // Just for debugging: show all 8 bits, ensuring leading zeroes
    optionFlags: '0b' + ('00000000' + options.toString(2)).slice(-8),
    sensorRequestForServerTime: (options & 1<<0) > 0,
    sensorConfigurationError: (options & 1<<1) > 0,
    sensorAlarmFlag: (options & 1<<2) > 0,
    sensorResetFlag: (options & 1<<3) > 0,
    sensorFaultFlag: (options & 1<<4) > 0
  };

  switch (messageType) {
    // 0x01 = Send Temp RH Data Notification
    case 0x01:
      decoded.humidity = bytes[3] + bytes[2]/100;
  
      // For temperature, both the integer and fractional parts are signed:
      // a positive value of 27.43 has a fractional portion of 43 and an
      // integer portion 27, and a negative value -15.87 uses -87 and -15.
      // Sign-extend a single byte to 32 bits to make JavaScript understand
      // negative values, by shifting 24 bits to the left, followed by a
      // sign-propagating right shift of the same number of bits:
      decoded.temperature = (bytes[5]<<24>>24) + (bytes[4]<<24>>24)/100;
  
      decoded.batteryIndex = bytes[6];
      decoded.batteryCapacity = {
        0: '0-5%',
        1: '5-20%',
        2: '20-40%',
        3: '40-60%',
        4: '60-80%',
        5: '80-100%'
      }[decoded.batteryIndex] || 'Unsupported value';
  
      decoded.alarmMsgCount = bytes[7]<<8 | bytes[8];
      decoded.backlogMsgCount = bytes[9]<<8 | bytes[10];
      break;
      
    default:
      decoded.error = 'Unsupported message type';
  }
  
  return decoded;
}
