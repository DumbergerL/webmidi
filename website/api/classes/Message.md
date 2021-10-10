# Message

The `Message` class represents a single MIDI message. It has several properties that make it
easy to make sense of the binaru data it contains.

**Since**: 3.0.0




### `new Message(...)`

**Signature**

> Message(data)

**Parameters**

***

## Properties

### `.channel`
**Type**: number

The MIDI channel number (1-16) that the message is targeting. This is only for
channel-specific messages. For system messages, this will be left undefined.



### `.command`
**Type**: number

An integer identifying the MIDI command. For channel-specific messages, the value will be
between 8 and 14. For system messages, the value will be between 240 and 255.



### `.data`
**Type**: Array.&lt;number&gt;

An array containing the bytes of the MIDI message. Each byte is an integer is between 0 and
255.



### `.dataBytes`
**Type**: Array.&lt;number&gt;

An array of the the data byte(s) of the MIDI message. When the message is a system exclusive
message (sysex), `dataBytes` explicitly excludes the manufacturer ID and the sysex end
byte so only the actual data is included.



### `.isChannelMessage`
**Type**: boolean

A boolean indicating whether the MIDI message is a channel-specific message.



### `.isSystemMessage`
**Type**: boolean

A boolean indicating whether the MIDI message is a system message (not specific to a
channel).



### `.manufacturerId`
**Type**: Array.&lt;number&gt;

When the message is a system exclusive message (sysex), this property contains an array with
either 1 or 3 entries that identify the manufacturer targeted by the message.

To know how to translate these entries into manufacturer names, check out the official list:
https://www.midi.org/specifications-old/item/manufacturer-id-numbers



### `.rawData`
**Type**: Uint8Array

A Uint8Array containing the bytes of the MIDI message. Each byte is an integer between 0 and
255.



### `.rawDataBytes`
**Type**: Uint8Array

A Uint8Array of the data byte(s) of the MIDI message. When the message is a system exclusive
message (sysex), `rawDataBytes` explicitly excludes the manufacturer ID and the sysex end
byte so only the actual data is included.



### `.statusByte`
**Type**: number

The MIDI status byte of the message as an integer between 0 and 255.



