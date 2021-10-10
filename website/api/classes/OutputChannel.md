# OutputChannel

The `OutputChannel` class represents a single output channel (1-16) from an output device. This
object is derived from the host's MIDI subsystem and cannot be instantiated directly.

All 16 `OutputChannel` objects can be found inside the parent output's
[channels]{@link Output#channels} property.

**Since**: 3.0.0

**Extends**: [`EventEmitter`](EventEmitter)



### `new OutputChannel(...)`

**Signature**

> OutputChannel(output, number)

**Parameters**

***

## Properties

### `.number`
**Type**: number

This channel's MIDI number (1-16)



### `.octaveOffset`
**Type**: number

An integer to offset the reported octave of outgoing note-specific messages (`noteon`,
`noteoff` and `keyaftertouch`). By default, middle C (MIDI note number 60) is placed on the 4th
octave (C4).

Note that this value is combined with the global offset value defined on the `WebMidi` object
and with the value defined on the parent `Output` object.



### `.output`
**Type**: Output

The parent {@link Output} this channel belongs to




***

## Methods

### `.decrementRegisteredParameter(...)`

Decrements the specified MIDI registered parameter by 1. Here is the full list of parameter
names that can be used with this function:

 * Pitchbend Range (0x00, 0x00): `"pitchbendrange"`
 * Channel Fine Tuning (0x00, 0x01): `"channelfinetuning"`
 * Channel Coarse Tuning (0x00, 0x02): `"channelcoarsetuning"`
 * Tuning Program (0x00, 0x03): `"tuningprogram"`
 * Tuning Bank (0x00, 0x04): `"tuningbank"`
 * Modulation Range (0x00, 0x05): `"modulationrange"`
 * Azimuth Angle (0x3D, 0x00): `"azimuthangle"`
 * Elevation Angle (0x3D, 0x01): `"elevationangle"`
 * Gain (0x3D, 0x02): `"gain"`
 * Distance Ratio (0x3D, 0x03): `"distanceratio"`
 * Maximum Distance (0x3D, 0x04): `"maximumdistance"`
 * Maximum Distance Gain (0x3D, 0x05): `"maximumdistancegain"`
 * Reference Distance Ratio (0x3D, 0x06): `"referencedistanceratio"`
 * Pan Spread Angle (0x3D, 0x07): `"panspreadangle"`
 * Roll Angle (0x3D, 0x08): `"rollangle"`

**Signature**

> decrementRegisteredParameter(parameter, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameter | <code>String</code> \| <code>Array.&lt;number&gt;</code> | 
 | <!--get me? |-->
A string identifying the parameter's name (see above) or a
two-position array specifying the two control bytes (0x65, 0x64) that identify the registered
parameter. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|parameter|String|||get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.incrementRegisteredParameter(...)`

Increments the specified MIDI registered parameter by 1. Here is the full list of parameter
names that can be used with this function:

 * Pitchbend Range (0x00, 0x00): `"pitchbendrange"`
 * Channel Fine Tuning (0x00, 0x01): `"channelfinetuning"`
 * Channel Coarse Tuning (0x00, 0x02): `"channelcoarsetuning"`
 * Tuning Program (0x00, 0x03): `"tuningprogram"`
 * Tuning Bank (0x00, 0x04): `"tuningbank"`
 * Modulation Range (0x00, 0x05): `"modulationrange"`
 * Azimuth Angle (0x3D, 0x00): `"azimuthangle"`
 * Elevation Angle (0x3D, 0x01): `"elevationangle"`
 * Gain (0x3D, 0x02): `"gain"`
 * Distance Ratio (0x3D, 0x03): `"distanceratio"`
 * Maximum Distance (0x3D, 0x04): `"maximumdistance"`
 * Maximum Distance Gain (0x3D, 0x05): `"maximumdistancegain"`
 * Reference Distance Ratio (0x3D, 0x06): `"referencedistanceratio"`
 * Pan Spread Angle (0x3D, 0x07): `"panspreadangle"`
 * Roll Angle (0x3D, 0x08): `"rollangle"`

**Signature**

> incrementRegisteredParameter(parameter, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameter | <code>String</code> \| <code>Array.&lt;number&gt;</code> | 
 | <!--get me? |-->
A string identifying the parameter's name (see above) or a
two-position array specifying the two control bytes (0x65, 0x64) that identify the registered
parameter. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|parameter|String|||get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.playNote(...)`

Plays a note or an array of notes on the channel. The first parameter is the note to play. It
can be a single value or an array of the following valid values:

 - A {@link Note} object
 - A MIDI note number (integer between `0` and `127`)
 - A note name, followed by the octave (e.g. `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`)

The `playNote()` method sends a **note on** MIDI message for all specified notes on all
specified channels. If a `duration` is set in the `options` parameter or in the {@link Note}
object's [duration]{@link Note#duration} property, it will also schedule a **note off** message
to end the note after said duration. If no `duration` is set, the note will simply play until
a matching **note off** message is sent with [stopNote()]{@link OutputChannel#stopNote} or
[sendNoteOff()]{@link OutputChannel#sendNoteOff}.

 The execution of the **note on** command can be delayed by using the `time` property of the
`options` parameter.

When using {@link Note} objects, the durations and velocities defined in the {@link Note}
objects have precedence over the ones specified via the method's `options` parameter.

**Note**: As per the MIDI standard, a **note on** message with an attack velocity of `0` is
functionally equivalent to a **note off** message.

**Signature**

> playNote(note, options, options.duration, options.attack, options.rawAttack, options.release, options.rawRelease, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| note | <code>number</code> \| <code>string</code> \| <code>Note</code> \| <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Note&gt;</code> | 
 | <!--get me? |-->
The note(s) to play. The notes can be
specified by using a MIDI note number (0-127), a note name (e.g. C3, G#4, F-1, Db7), a
{@link Note} object or an array of the previous types. When using a note name, octave range
must be between -1 and 9. The lowest note is C-1 (MIDI note number 0) and the highest
note is G9 (MIDI note number 127). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.duration] | <code>number</code> | 
 | <!--get me? |-->
A positive number larger than 0 representing the number of
milliseconds to wait before sending a **note off** message. If invalid or left undefined, only
a **note on** message will be sent. |
| [options.attack] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The velocity at which to play the note (between `0` and
`1`). If the `rawAttack` option is also defined, it will have priority. An invalid velocity
value will silently trigger the default of `0.5`. |
| [options.rawAttack] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The attack velocity at which to play the note (between
`0` and `127`). This has priority over the `attack` property. An invalid velocity value will
silently trigger the default of `0.5`. |
| [options.release] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The velocity at which to release the note (between `0`
and `1`). If the `rawRelease` option is also defined, it will have priority. An invalid
velocity value will silently trigger the default of `0.5`. This is only used with the
**note off** event triggered when `options.duration` is set. |
| [options.rawRelease] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The velocity at which to release the note (between `0`
and `127`). This has priority over the `release` property. An invalid velocity value will
silently trigger the default of `0.5`. This is only used with the **note off** event triggered
when `options.duration` is set. |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|note|number|||get me?|
|options|Object|optional|{}|get me?|
|options.duration|number|optional||get me?|
|options.attack|number|optional|0.5|get me?|
|options.rawAttack|number|optional|0.5|get me?|
|options.release|number|optional|0.5|get me?|
|options.rawRelease|number|optional|0.5|get me?|
|options.time|number|optional||get me?|

### `.resetAllControllers(...)`

Sends a **reset all controllers** channel mode message. This resets all controllers, such as
the pitch bend, to their default value.

**Signature**

> resetAllControllers(options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.send(...)`

Sends a MIDI message on the MIDI output port. If no time is specified, the message will be
sent immediately. The message should be an array of 8 bit unsigned integers (0-225), a
[Uint8Array]{@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array}
object or a `Message` object.

It is usually not necessary to use this method directly as you can use one of the simpler
helper methods such as `playNote()`, `stopNote()`, `sendControlChange()`, etc.

Details on the format of MIDI messages are available in the summary of
[MIDI messages]{@link https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message}
from the MIDI Manufacturers Association.

**Signature**

> send(message, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>Array.&lt;number&gt;</code> \| <code>Uint8Array</code> \| <code>Message</code> | 
 | <!--get me? |-->
An array of 8bit unsigned integers, a `Uint8Array`
object (not available in Node.js) containing the message bytes or a `Message` object. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a positive
number
([DOMHighResTimeStamp]{@link https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp}),
the operation will be scheduled for that point time. If `time` is omitted, or in the past, the
operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|message|Array.&lt;number&gt;|||get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.sendChannelMode(...)`

Sends a MIDI **channel mode** message. The channel mode message to send can be specified
numerically or by using one of the following common names:

  * `"allsoundoff"` (#120)
  * `"resetallcontrollers"` (#121)
  * `"localcontrol"` (#122)
  * `"allnotesoff"` (#123)
  * `"omnimodeoff"` (#124)
  * `"omnimodeon"` (#125)
  * `"monomodeon"` (#126)
  * `"polymodeon"` (#127)

It should be noted that, per the MIDI specification, only `localcontrol` and `monomodeon` may
require a value that's not zero. For that reason, the `value` parameter is optional and
defaults to 0.

To make it easier, all channel mode messages have a matching helper method:

  - [turnSoundOff()]{@link Output#turnSoundOff}
  - [resetAllControllers()]{@link Output#resetAllControllers}
  - [setLocalControl()]{@link Output#turnSoundOff}
  - [turnNotesOff()]{@link Output#turnNotesOff}
  - [setOmniMode()]{@link Output#setOmniMode}
  - [setPolyphonicMode()]{@link Output#setPolyphonicMode}

**Signature**

> sendChannelMode(command, value, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| command | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
The numerical identifier of the channel mode message (integer
between 120-127) or its name as a string. |
| value | <code>number</code> | 
 | <!--get me? |-->
The value to send (integer between 0-127). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|command|number|||get me?|
|value|number|||get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.sendControlChange(...)`

Sends a MIDI **control change** message to the channel at the scheduled time. The control
change message to send can be specified numerically (0 to 127) or by using one of the following
common names:

 * `bankselectcoarse` (#0)
 * `modulationwheelcoarse` (#1)
 * `breathcontrollercoarse` (#2)
 * `footcontrollercoarse` (#4)
 * `portamentotimecoarse` (#5)
 * `dataentrycoarse` (#6)
 * `volumecoarse` (#7)
 * `balancecoarse` (#8)
 * `pancoarse` (#10)
 * `expressioncoarse` (#11)
 * `effectcontrol1coarse` (#12)
 * `effectcontrol2coarse` (#13)
 * `generalpurposeslider1` (#16)
 * `generalpurposeslider2` (#17)
 * `generalpurposeslider3` (#18)
 * `generalpurposeslider4` (#19)
 * `bankselectfine` (#32)
 * `modulationwheelfine` (#33)
 * `breathcontrollerfine` (#34)
 * `footcontrollerfine` (#36)
 * `portamentotimefine` (#37)
 * `dataentryfine` (#38)
 * `volumefine` (#39)
 * `balancefine` (#40)
 * `panfine` (#42)
 * `expressionfine` (#43)
 * `effectcontrol1fine` (#44)
 * `effectcontrol2fine` (#45)
 * `holdpedal` (#64)
 * `portamento` (#65)
 * `sustenutopedal` (#66)
 * `softpedal` (#67)
 * `legatopedal` (#68)
 * `hold2pedal` (#69)
 * `soundvariation` (#70)
 * `resonance` (#71)
 * `soundreleasetime` (#72)
 * `soundattacktime` (#73)
 * `brightness` (#74)
 * `soundcontrol6` (#75)
 * `soundcontrol7` (#76)
 * `soundcontrol8` (#77)
 * `soundcontrol9` (#78)
 * `soundcontrol10` (#79)
 * `generalpurposebutton1` (#80)
 * `generalpurposebutton2` (#81)
 * `generalpurposebutton3` (#82)
 * `generalpurposebutton4` (#83)
 * `reverblevel` (#91)
 * `tremololevel` (#92)
 * `choruslevel` (#93)
 * `celestelevel` (#94)
 * `phaserlevel` (#95)
 * `databuttonincrement` (#96)
 * `databuttondecrement` (#97)
 * `nonregisteredparametercoarse` (#98)
 * `nonregisteredparameterfine` (#99)
 * `registeredparametercoarse` (#100)
 * `registeredparameterfine` (#101)

 * `allsoundoff` (#120)
 * `resetallcontrollers` (#121)
 * `localcontrol` (#122)
 * `allnotesoff` (#123)
 * `omnimodeoff` (#124)
 * `omnimodeon` (#125)
 * `monomodeon` (#126)
 * `polymodeon` (#127)

As you can see above, not all control change message have a matching common name. This
does not mean you cannot use the others. It simply means you will need to use their number
(0-127) instead of their name. While you can still use them, numbers 120 to 127 are usually
reserved for *channel mode* messages. See
[sendChannelMode()]{@link OutputChannel#sendChannelMode} method for more info.

To view a detailed list of all available **control change** messages, please consult "Table 3 -
Control Change Messages" from the [MIDI Messages](
https://www.midi.org/specifications/item/table-3-control-change-messages-data-bytes-2)
specification.

Note: messages #0-31 (MSB) are paired with messages #32-63 (LSB). For example, message #1
(modulationwheelcoarse) can be accompanied by a second control change message for
modulationwheelfine to achieve a greater level of precision. if you want to specify both MSB
and LSB for messages between 0 and 31, you can do so by passing a 2-value array as the second
parameter.

**Signature**

> sendControlChange(controller, value, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| controller | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
The MIDI controller name or number (0-127). |
| value | <code>number</code> \| <code>Array.&lt;number&gt;</code> | 
 | <!--get me? |-->
The value to send (0-127). You can also use a two-position array
for controllers 0 to 31. In this scenario, the first value will be sent as usual and the second
calue will be sent to the matching LSB controller (which is obtained by adding 32 to the first
controller) |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|controller|number|||get me?|
|value|number|||get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.sendNoteOff(...)`

Sends a **note off** message for the specified notes on the channel. The first parameter is the
note. It can be a single value or an array of the following valid values:

 - A MIDI note number (integer between `0` and `127`)
 - A note name, followed by the octave (e.g. `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`)
 - A {@link Note} object

 The execution of the **note off** command can be delayed by using the `time` property of the
`options` parameter.

When using {@link Note} objects, the release velocity defined in the {@link Note} objects has
precedence over the one specified via the method's `options` parameter.

**Signature**

> sendNoteOff(note, options, options.time, options.release, options.rawRelease) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| note | <code>number</code> \| <code>string</code> \| <code>Note</code> \| <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Note&gt;</code> | 
 | <!--get me? |-->
The note(s) to stop. The notes can be
specified by using a MIDI note number (0-127), a note name (e.g. C3, G#4, F-1, Db7), a
{@link Note} object or an array of the previous types. When using a note name, octave range
must be between -1 and 9. The lowest note is C-1 (MIDI note number 0) and the highest
note is G9 (MIDI note number 127). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |
| [options.release] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The velocity at which to release the note
(between `0` and `1`).  If the `rawRelease` option is also defined, `rawRelease` will have
priority. An invalid velocity value will silently trigger the default of `0.5`. |
| [options.rawRelease] | <code>number</code> | <code>64</code>
 | <!--get me? |-->
The velocity at which to release the note
(between `0` and `127`). If the `release` option is also defined, `rawRelease` will have
priority. An invalid velocity value will silently trigger the default of `64`. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|note|number|||get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|
|options.release|number|optional|0.5|get me?|
|options.rawRelease|number|optional|64|get me?|

### `.sendNoteOn(...)`

Sends a **note on** message for the specified note(s) on the channel. The first parameter is
the note. It can be a single value or an array of the following valid values:

 - A {@link Note} object
 - A MIDI note number (integer between `0` and `127`)
 - A note name, followed by the octave (e.g. `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`)

 When passing a {@link Note} object or a note name, the `octaveOffset` will be applied. This is
 not the case when using a note number number. In this case, we assume you know exactly which
 MIDI note number should be sent out.


 The execution of the **note on** command can be delayed by using the `time` property of the
`options` parameter.

When using {@link Note} objects, the attack velocity defined in the {@link Note} objects has
precedence over the one specified via the method's `options` parameter. Also, the `duration` is
ignored. If you want to also send a **note off** message, use the
[playNote()]{@link Output#playNote} method instead.

**Note**: As per the MIDI standard, a **note on** message with an attack velocity of `0` is
functionally equivalent to a **note off** message.

**Signature**

> sendNoteOn(note, options, options.time, options.attack, options.rawAttack) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| note | <code>number</code> \| <code>string</code> \| <code>Note</code> \| <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Note&gt;</code> | 
 | <!--get me? |-->
The note(s) to play. The notes can be
specified by using a MIDI note number (0-127), a note identifier (e.g. C3, G#4, F-1, Db7), a
{@link Note} object or an array of the previous types. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |
| [options.attack] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The velocity at which to play the note (between `0` and
`1`).  If the `rawAttack` option is also defined, `rawAttack` will have priority. An invalid
velocity value will silently trigger the default of `0.5`. |
| [options.rawAttack] | <code>number</code> | <code>64</code>
 | <!--get me? |-->
The velocity at which to release the note (between `0`
and `127`). If the `attack` option is also defined, `rawAttack` will have priority. An invalid
velocity value will silently trigger the default of `64`. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|note|number|||get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|
|options.attack|number|optional|0.5|get me?|
|options.rawAttack|number|optional|64|get me?|

### `.setChannelAftertouch(...)`

Sends a MIDI **channel aftertouch** message. For key-specific aftertouch, you should instead
use [setKeyAftertouch()]{@link Output#setKeyAftertouch}.

**Signature**

> setChannelAftertouch(pressure, options, options.rawValue, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [pressure] | <code>number</code> | 
 | <!--get me? |-->
The pressure level (between 0 and 1). If the `rawValue` option is
set to `true`, the pressure can be defined by using an integer between 0 and 127. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.rawValue] | <code>boolean</code> | <code>false</code>
 | <!--get me? |-->
A boolean indicating whether the value should be
considered a float between 0 and 1.0 (default) or a raw integer between 0 and 127. |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|pressure|number|optional||get me?|
|options|Object|optional|{}|get me?|
|options.rawValue|boolean|optional|false|get me?|
|options.time|number|optional||get me?|

### `.setKeyAftertouch(...)`

Sends a MIDI **key aftertouch** message at the scheduled time. This is a key-specific
aftertouch. For a channel-wide aftertouch message, use
[setChannelAftertouch()]{@link Output#setChannelAftertouch}.

The key can be a single value or an array of the following valid values:

 - A MIDI note number (integer between `0` and `127`)
 - A note identifier such as `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`, etc.

**Signature**

> setKeyAftertouch(target, pressure, options, options.useRawValue, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| target | <code>number</code> \| <code>string</code> \| <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;string&gt;</code> | 
 | <!--get me? |-->
The key(s) for which you are sending an
aftertouch value. The notes can be specified by using a MIDI note number (0-127), a note
identifier (e.g. C3, G#4, F-1, Db7), or an array of the previous types.

When using a note identifier, the octave value will be offset by the combined value of
`InputChannel.octaveOffset`, `Input.octaveOffset` and `WebMidi.octaveOffset` (if those values
are not `0`). When using a key number, octaveOffset values are ignored. |
| [pressure] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The pressure level (between 0 and 1). An invalid pressure value
will silently trigger the default behaviour. If the `rawValue` option is set to `true`, the
pressure is defined by using an integer between 0 and 127. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.useRawValue] | <code>boolean</code> | <code>false</code>
 | <!--get me? |-->
A boolean indicating whether the value should be
considered a float between 0 and 1.0 (default) or a raw integer between 0 and 127. |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|target|number|||get me?|
|pressure|number|optional|0.5|get me?|
|options|Object|optional|{}|get me?|
|options.useRawValue|boolean|optional|false|get me?|
|options.time|number|optional||get me?|

### `.setLocalControl(...)`

Turns local control on or off. Local control is usually enabled by default. If you disable it,
the instrument will no longer trigger its own sounds. It will only send the MIDI messages to
its out port.

**Signature**

> setLocalControl(state, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [state] | <code>boolean</code> | <code>false</code>
 | <!--get me? |-->
Whether to activate local control (`true`) or disable it
(`false`). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|state|boolean|optional|false|get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.setMasterTuning(...)`

Sends a **master tuning** message. The value is decimal and must be larger than -65 semitones
and smaller than 64 semitones.

Because of the way the MIDI specification works, the decimal portion of the value will be
encoded with a resolution of 14bit. The integer portion must be between -64 and 63
inclusively. This function actually generates two MIDI messages: a **Master Coarse Tuning** and
a **Master Fine Tuning** RPN messages.

**Signature**

> setMasterTuning(value, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | <code>number</code> | <code>0.0</code>
 | <!--get me? |-->
The desired decimal adjustment value in semitones (-65 < x < 64) |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value|number|optional|0.0|get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.setModulationRange(...)`

Sends a **modulation depth range** message to adjust the depth of the modulation wheel's range.
The range can be specified with the `semitones` parameter, the `cents` parameter or by
specifying both parameters at the same time.

**Signature**

> setModulationRange(semitones, cents, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| semitones | <code>number</code> | 
 | <!--get me? |-->
The desired adjustment value in semitones (integer between 0 and
127). |
| [cents] | <code>number</code> | <code>0</code>
 | <!--get me? |-->
The desired adjustment value in cents (integer between 0 and 127). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|semitones|number|||get me?|
|cents|number|optional|0|get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.setNonRegisteredParameter(...)`

Sets a non-registered parameter (NRPN) to the specified value. The NRPN is selected by passing
in a two-position array specifying the values of the two control bytes. The value is specified
by passing in a single integer (most cases) or an array of two integers.

NRPNs are not standardized in any way. Each manufacturer is free to implement them any way
they see fit. For example, according to the Roland GS specification, you can control the
**vibrato rate** using NRPN (1, 8). Therefore, to set the **vibrato rate** value to **123** you
would use:

```js
WebMidi.outputs[0].channels[0].setNonRegisteredParameter([1, 8], 123);
```

In some rarer cases, you need to send two values with your NRPN messages. In such cases, you
would use a 2-position array. For example, for its **ClockBPM** parameter (2, 63), Novation
uses a 14-bit value that combines an MSB and an LSB (7-bit values). So, for example, if the
value to send was 10, you could use:

```js
WebMidi.outputs[0].channels[0].setNonRegisteredParameter([2, 63], [0, 10]);
```

For further implementation details, refer to the manufacturer's documentation.

**Signature**

> setNonRegisteredParameter(parameter, data, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameter | <code>Array.&lt;number&gt;</code> | 
 | <!--get me? |-->
A two-position array specifying the two control bytes (0x63,
0x62) that identify the non-registered parameter. |
| [data] | <code>number</code> \| <code>Array.&lt;number&gt;</code> | <code>[]</code>
 | <!--get me? |-->
An integer or an array of integers with a length of 1 or 2
specifying the desired data. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|parameter|Array.&lt;number&gt;|||get me?|
|data|number|optional|[]|get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.setOmniMode(...)`

Sets OMNI mode to `"on"` or `"off"`. MIDI's OMNI mode causes the instrument to respond to
messages from all channels.

It should be noted that support for OMNI mode is not as common as it used to be.

**Signature**

> setOmniMode(state, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [state] | <code>boolean</code> | <code>true</code>
 | <!--get me? |-->
Whether to activate OMNI mode (`true`) or not (`false`). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|state|boolean|optional|true|get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.setPitchBend(...)`

Sends a MIDI **pitch bend** message at the scheduled time.

**Signature**

> setPitchBend(value, options, options.rawValue, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | <code>number</code> \| <code>Array.&lt;number&gt;</code> | 
 | <!--get me? |-->
The intensity of the bend (between -1.0 and 1.0). A value of
zero means no bend. The resulting bend is relative to the pitch bend range that has been
defined. The range can be set with [setPitchBendRange()]{@link OutputChannel#setPitchBendRange}
. So, for example, if the pitch bend range has been set to 12 semitones, using a bend value of
-1 will bend the note 1 octave below its nominal value.

If the `rawValue` option is set to `true`, the intensity of the bend can be defined by either
using a single integer between 0 and 127 (MSB) or an array of two integers between 0 and 127
representing, respectively, the MSB (most significant byte) and the LSB (least significant
byte). The MSB is expressed in semitones with `64` meaning no bend. A value lower than `64`
bends downwards while a value higher than `64` bends upwards. The LSB is expressed in cents
(1/100 of a semitone). An LSB of `64` also means no bend. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.rawValue] | <code>boolean</code> | <code>false</code>
 | <!--get me? |-->
A boolean indicating whether the value should be
considered as a float between -1.0 and 1.0 (default) or as raw integer between 0 and 127 (or
an array of 2 integers if using both MSB and LSB). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value|number|optional||get me?|
|options|Object|optional|{}|get me?|
|options.rawValue|boolean|optional|false|get me?|
|options.time|number|optional||get me?|

### `.setPitchBendRange(...)`

Sends a pitch bend range message to the specified channel(s) at the scheduled time so that they
adjust the range used by their pitch bend lever. The range is specified by using the
`semitones` and `cents` parameters. For example, setting the `semitones` parameter to `12`
means that the pitch bend range will be 12 semitones above and below the nominal pitch.

**Signature**

> setPitchBendRange(semitones, cents, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| semitones | <code>number</code> | 
 | <!--get me? |-->
The desired adjustment value in semitones (between 0 and 127). While
nothing imposes that in the specification, it is very common for manufacturers to limit the
range to 2 octaves (-12 semitones to 12 semitones). |
| [cents] | <code>number</code> | <code>0</code>
 | <!--get me? |-->
The desired adjustment value in cents (integer between 0-127). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|semitones|number|||get me?|
|cents|number|optional|0|get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.setPolyphonicMode(...)`

Sets the polyphonic mode. In `"poly"` mode (usually the default), multiple notes can be played
and heard at the same time. In `"mono"` mode, only one note will be heard at once even if
multiple notes are being played.

**Signature**

> setPolyphonicMode(mode, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [mode] | <code>string</code> | <code>&quot;poly&quot;</code>
 | <!--get me? |-->
The mode to use: `"mono"` or `"poly"`. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|mode|string|optional|poly|get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.setProgram(...)`

Sends a MIDI **program change** message at the scheduled time.

**Note**: since version 3.0, the program number is an integer between 1 and 128. In versions
1.0 and 2.0, the number was between 0 and 127. This change aligns WebMidi.js with most devices
that use a numbering scheme starting at 1.

**Signature**

> setProgram(program, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [program] | <code>number</code> | <code>1</code>
 | <!--get me? |-->
The MIDI patch (program) number (1-128) |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|program|number|optional|1|get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.setRegisteredParameter(...)`

Sets the specified MIDI registered parameter to the desired value. The value is defined with
up to two bytes of data (msb, lsb) that each can go from 0 to 127.

MIDI
[registered parameters]
(https://www.midi.org/specifications-old/item/table-3-control-change-messages-data-bytes-2)
extend the original list of control change messages. The MIDI 1.0 specification lists only a
limited number of them. Here are the original registered parameters with the identifier that
can be used as the first parameter of this function:

 * Pitchbend Range (0x00, 0x00): `"pitchbendrange"`
 * Channel Fine Tuning (0x00, 0x01): `"channelfinetuning"`
 * Channel Coarse Tuning (0x00, 0x02): `"channelcoarsetuning"`
 * Tuning Program (0x00, 0x03): `"tuningprogram"`
 * Tuning Bank (0x00, 0x04): `"tuningbank"`
 * Modulation Range (0x00, 0x05): `"modulationrange"`

Note that the **Tuning Program** and **Tuning Bank** parameters are part of the *MIDI Tuning
Standard*, which is not widely implemented.

Another set of extra parameters have been later added for 3D sound controllers. They are:

 * Azimuth Angle (0x3D, 0x00): `"azimuthangle"`
 * Elevation Angle (0x3D, 0x01): `"elevationangle"`
 * Gain (0x3D, 0x02): `"gain"`
 * Distance Ratio (0x3D, 0x03): `"distanceratio"`
 * Maximum Distance (0x3D, 0x04): `"maximumdistance"`
 * Maximum Distance Gain (0x3D, 0x05): `"maximumdistancegain"`
 * Reference Distance Ratio (0x3D, 0x06): `"referencedistanceratio"`
 * Pan Spread Angle (0x3D, 0x07): `"panspreadangle"`
 * Roll Angle (0x3D, 0x08): `"rollangle"`

**Signature**

> setRegisteredParameter(parameter, data, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameter | <code>string</code> \| <code>Array.&lt;number&gt;</code> | 
 | <!--get me? |-->
A string identifying the parameter's name (see above) or a
two-position array specifying the two control bytes (e.g. `[0x65, 0x64]`) that identify the
registered parameter. |
| [data] | <code>number</code> \| <code>Array.&lt;number&gt;</code> | <code>[]</code>
 | <!--get me? |-->
An single integer or an array of integers with a maximum
length of 2 specifying the desired data. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|parameter|string|||get me?|
|data|number|optional|[]|get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.setTuningBank(...)`

Sets the MIDI tuning bank to use. Note that the **Tuning Bank** parameter is part of the
*MIDI Tuning Standard*, which is not widely implemented.

**Note**: since version 3.0, the bank number is an integer between 1 and 128. In versions
1.0 and 2.0, the number was between 0 and 127. This change aligns WebMidi.js with most devices
that use a numbering scheme starting at 1.

**Signature**

> setTuningBank(value, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>number</code> | 
 | <!--get me? |-->
The desired tuning bank (1-128). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value|number|||get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.setTuningProgram(...)`

Sets the MIDI tuning program to use. Note that the **Tuning Program** parameter is part of the
*MIDI Tuning Standard*, which is not widely implemented.

**Note**: since version 3.0, the program number is an integer between 1 and 128. In versions
1.0 and 2.0, the number was between 0 and 127. This change aligns WebMidi.js with most devices
that use a numbering scheme starting at 1.

**Signature**

> setTuningProgram(value, options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>number</code> | 
 | <!--get me? |-->
The desired tuning program (1-128). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value|number|||get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.stopNote(...)`

This is an alias to the [sendNoteOff()]{@link OutputChannel#sendNoteOff} method.

**Signature**

> stopNote(note, options) ⇒ Output

**Parameters**


| Param |
| --- |
| note | <!---->

| options | <!---->





| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|note||||get me?|
|options||||get me?|

### `.turnNotesOff(...)`

Sends an **all notes off** channel mode message. This will make all currently playing notes
fade out just as if their key had been released. This is different from the
[turnSoundOff()]{@link OutputChannel#turnSoundOff} method which mutes all sounds immediately.

**Signature**

> turnNotesOff(options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.turnSoundOff(...)`

Sends an **all sound off** channel mode message. This will silence all sounds playing on that
channel but will not prevent new sounds from being triggered.

**Signature**

> turnSoundOff(options, options.time) ⇒ OutputChannel

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number, the
operation will be scheduled for that time. The current time can be retrieved with
[WebMidi.time]{@link WebMidi#time}. If `options.time` is omitted, or in the past, the operation
will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

