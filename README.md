# The Things Network decoder functions for the Laird Sentrius RS1xx sensors

We sell a range of low-cost LoRaWAN sensors designed for homes and offices.

You can find them here [Laird Connectivity](https://connectedthings.store/gb/manufacturer/laird-connectivity.html)

To use this:
* create a TTN application and register your devices using the TTN console
* in your application, choose "Payload Formats" from the navigation
* paste the decoder function into the textarea

The unit sends well documented payloads that these decoders should handle. The devices also all use different LoRaWAN ports, so a combined decoder is included to handle them all in one function.

This code is MIT licenced, and it works fine in our testing. We don't claim it to be excellent, pull requests are encouraged!
