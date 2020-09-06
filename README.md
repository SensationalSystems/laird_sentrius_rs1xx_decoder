# The Things Network decoder functions for the Laird Sentrius RS1xx sensors

Laird Connectivity has a range of temperature and relative humidity LoRaWAN sensors, designed for cold-chain applications. We sell these sensors here [Laird Connectivity Sensors](https://connectedthings.store/gb/manufacturer/laird-connectivity.html).

The sensors have some clever features, including storing readings onboard so they can be read out later. This is handy for network outages etc. This decoder is simplistic, and just handles the current data uplinks. We provide this as a starting point to your own integrations.

To use this:
* create a TTN application and register your devices using the TTN console
* in your application, choose "Payload Formats" from the navigation
* paste the decoder function into the textarea

The unit sends well documented payloads that these decoders should handle. The devices also all use different LoRaWAN ports, so a combined decoder is included to handle them all in one function.

This code is MIT licenced, and it works fine in our testing. We don't claim it to be excellent, pull requests are encouraged!

## Contributors
Many thanks to:
 * [avbentem](https://github.com/avbentem) for a pull request improving temp/RH and alarm flag decoding
