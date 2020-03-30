/* 
 * Decoder function for The Things Network to unpack the basic temperature/humidity payload of the Laird RS1xx Sensors
 *
 * This function was created by Cameron Sharp at Sensational Systems - cameron@sensational.systems
 */

function Decoder(bytes, f_port) {
  if (bytes[0] == 0x01){
    humidity_dec = bytes[4];
    humidity_int = bytes[5];
    temp_dec = bytes[7];
    temp_int = bytes[8];
    
    humidity = humidity_int + (humidity_dec / 100);
    temp = temp_int + (temp_dec / 100);
    
  }
  return {
    raw: bytes,
    f_port: f_port,
    temp: temp,
    humidity: humidity
  };
}
