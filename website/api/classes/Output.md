# Output

The `Output` class represents a MIDI output port. This object is derived from the host's MIDI
subsystem and cannot be instantiated directly.

You can find a list of all available `Output` objects in the
[WebMidi.outputs]{@link WebMidi#outputs} array.


**Extends**: [`EventEmitter`](EventEmitter)

**Fires**: [`opened`](Output#event:opened), [`disconnected`](Output#event:disconnected), [`closed`](Output#event:closed)


### `new Output(...)`

**Signature**

> Output(midiOutput)

**Parameters**

***

## Properties

### `.channels`
**Type**: Array.&lt;OutputChannel&gt;

Array containing the 16 {@link OutputChannel} objects available for this `Output`. The
channels are numbered 1 through 16.



### `.connection`
**Type**: string

Output port's connection state: `"pending"`, `"open"` or `"closed"`.



### `.id`
**Type**: string

ID string of the MIDI output. The ID is host-specific. Do not expect the same ID on different
platforms. For example, Google Chrome and the Jazz-Plugin report completely different IDs for
the same port.



### `.manufacturer`
**Type**: string

Name of the manufacturer of the device that makes this output port available.



### `.name`
**Type**: string

Name of the MIDI output



### `.octaveOffset`
**Type**: number

An integer to offset the octave of outgoing notes. By default, middle C (MIDI note number 60)
is placed on the 4th octave (C4).

Note that this value is combined with the global offset value defined on the `WebMidi` object
(if any).



### `.state`
**Type**: string

State of the output port: `"connected"` or `"disconnected"`.



### `.type`
**Type**: string

Type of the output port (`"output"`)




***

## Methods

### `.clear()`

Clears all messages that have been queued but not yet delivered.

Warning: this method has been defined in the specification but has not been implemented yet. As
soon as browsers implement it, it will work.

You can check out the current status of this feature for Chromium (Chrome) here:
https://bugs.chromium.org/p/chromium/issues/detail?id=471798

**Signature**

> clear() ⇒ Output

**Parameters**



### `.close()`

Closes the output connection. When an output is closed, it cannot be used to send MIDI messages
until the output is opened again by calling [Output.open()]{@link Output#open}. You can check
the connection status by looking at the [connection]{@link Output#connection} property.

**Signature**

> close() ⇒ Promise.&lt;void&gt;

**Parameters**



### `.decrementRegisteredParameter(...)`

Decrements the specified MIDI registered parameter by 1. Here is the full list of parameter
names that can be used with this method:

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

> decrementRegisteredParameter(parameter, options, options.channels, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parameter | <code>String</code> \| <code>Array.&lt;number&gt;</code> | 
 | <!--get me? |-->
A string identifying the parameter"s name (see above) or a
two-position array specifying the two control bytes (0x65, 0x64) that identify the registered
parameter. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|parameter|String|||get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.destroy()`

Destroys the `Output`. All listeners are removed, all channels are destroyed and the MIDI
subsystem is unlinked.

**Signature**

> destroy() ⇒ Promise.&lt;void&gt;

**Parameters**



### `.incrementRegisteredParameter(...)`

Increments the specified MIDI registered parameter by 1. Here is the full list of parameter
names that can be used with this method:

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

> incrementRegisteredParameter(parameter, options, options.channels, options.time) ⇒ Output

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
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|parameter|String|||get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.open()`

Opens the output for usage.

**Signature**

> open() ⇒ Promise.&lt;Output&gt;

**Parameters**



### `.playNote(...)`

Plays a note or an array of notes on one or more channels of this output. The first parameter
is the note to play. It can be a single value or an array of the following valid values:

 - A MIDI note number (integer between `0` and `127`)
 - A note name, followed by the octave (e.g. `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`)
 - A {@link Note} object

The `playNote()` method sends a **note on** MIDI message for all specified notes on all
specified channels. If no channels are specified, it will send to all channels. If a `duration`
is set in the `options` parameter or in the {@link Note} object's
[duration]{@link Note#duration} property, it will also schedule a **note off** message to end
the note after said duration. If no `duration` is set, the note will simply play until a
matching **note off** message is sent with [stopNote()]{@link Output#stopNote} or
[sendNoteOff()]{@link Output#sendNoteOff}.

The execution of the **note on** command can be delayed by using the `time` property of the
`options` parameter.

When using {@link Note} objects, the durations and velocities defined in the {@link Note}
objects have precedence over the ones specified via the method's `options` parameter.

**Note**: As per the MIDI standard, a **note on** message with an attack velocity of `0` is
functionally equivalent to a **note off** message.

**Signature**

> playNote(note, options, options.channels, options.duration, options.rawValue, options.release, options.time, options.attack) ⇒ Output

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
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to play the note on. The special value `"all"` can
also be used to use all channels (default). |
| [options.duration] | <code>number</code> | 
 | <!--get me? |-->
The number of milliseconds (integer) after which a
**note off** message will be scheduled. If left undefined, only a **note on** message is sent. |
| [options.rawValue] | <code>boolean</code> | <code>false</code>
 | <!--get me? |-->
Controls whether the attack and release velocities
are set using integers between `0` and `127` (`true`) or a decimal number between `0` and `1`
(`false`, default). |
| [options.release] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The velocity at which to release the note (between `0`
and `1`). If the `rawValue` option is `true`, the value should be specified as an integer
between `0` and `127`. An invalid velocity value will silently trigger the default of `0.5`.
This is only used with the **note off** event triggered when `options.duration` is set. |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |
| [options.attack] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The attack velocity to use when playing the note (between
`0` and `1`). If the `rawValue` option is `true`, the value should be specified as an integer
between `0` and `127`. An invalid velocity value will silently trigger the default of `0.5`. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|note|number|||get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.duration|number|optional||get me?|
|options.rawValue|boolean|optional|false|get me?|
|options.release|number|optional|0.5|get me?|
|options.time|number|optional||get me?|
|options.attack|number|optional|0.5|get me?|

### `.resetAllControllers(...)`

Sends a **reset all controllers** channel mode message. This resets all controllers, such as
the pitch bend, to their default value.

**Signature**

> resetAllControllers(options, options.channels, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.send(...)`

Sends a MIDI message on the MIDI output port. If no time is specified, the message will be
sent immediately. The message should be an array of 8 bit unsigned integers (0-225), a
[Uint8Array]{@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array}
object or a `Message` object.

It is usually not necessary to use this method directly as you can use one of the simpler
helper methods such as [playNote()`, `stopNote()`, `sendControlChange()`, etc.

Details on the format of MIDI messages are available in the summary of
[MIDI messages]{@link https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message}
from the MIDI Manufacturers Association.

**Signature**

> send(message, options, options.time) ⇒ Output

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

### `.sendActiveSensing(...)`

Sends an **active sensing** real-time message. This tells the device connected to this port
that the connection is still good. Active sensing messages should be sent every 300 ms if there
was no other activity on the MIDI port.

**Signature**

> sendActiveSensing(options, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.sendChannelMode(...)`

Sends a MIDI **channel mode** message to the specified channel(s). The channel mode message to
send can be specified numerically or by using one of the following common names:

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

  - [turnSoundOff()]{@link OutputChannel#turnSoundOff}
  - [resetAllControllers()]{@link OutputChannel#resetAllControllers}
  - [setLocalControl()]{@link OutputChannel#turnSoundOff}
  - [turnNotesOff()]{@link OutputChannel#turnNotesOff}
  - [setOmniMode()]{@link OutputChannel#setOmniMode}
  - [setPolyphonicMode()]{@link OutputChannel#setPolyphonicMode}

**Signature**

> sendChannelMode(command, value, options, options.channels, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| command | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
The numerical identifier of the channel mode message (integer
between 120-127) or its name as a string. |
| [value] | <code>number</code> | 
 | <!--get me? |-->
The value to send (integer between 0-127). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|command|number|||get me?|
|value|number|optional||get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.sendClock(...)`

Sends a MIDI **clock* real-time message. According to the standard, there are 24 MIDI Clocks
for every quarter note.

**Signature**

> sendClock(options, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.sendContinue(...)`

Sends a **continue** real-time message. This resumes song playback where it was previously
stopped or where it was last cued with a song position message. To start playback from the
start, use the [sendStart()]{@link Output#sendStart}` method.

**Signature**

> sendContinue(options, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.sendControlChange(...)`

Sends a MIDI **control change** message to the specified channel(s) at the scheduled time. The
control change message to send can be specified numerically (0-127) or by using one of the
following common names:

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

Note: as you can see above, not all control change message have a matching common name. This
does not mean you cannot use the others. It simply means you will need to use their number
(0-127) instead of their name. While you can still use them, numbers 120 to 127 are usually
reserved for *channel mode* messages. See [sendChannelMode()]{@link Output#sendChannelMode}
method for more info.

To view a list of all available `control change` messages, please consult "Table 3 - Control
Change Messages" from the [MIDI Messages](
https://www.midi.org/specifications/item/table-3-control-change-messages-data-bytes-2)
specification.

**Signature**

> sendControlChange(controller, value, options, options.channels, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| controller | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
The MIDI controller name or number (0-127). |
| [value] | <code>number</code> | <code>0</code>
 | <!--get me? |-->
The value to send (0-127). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|controller|number|||get me?|
|value|number|optional|0|get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.sendNoteOff(...)`

Sends a **note off** message for the specified notes on the specified channel(s). The first
parameter is the note. It can be a single value or an array of the following valid values:

 - A MIDI note number (integer between `0` and `127`)
 - A note name, followed by the octave (e.g. `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`)
 - A {@link Note} object

 The execution of the **note off** command can be delayed by using the `time` property of the
`options` parameter.

When using {@link Note} objects, the release velocity defined in the {@link Note} objects has
precedence over the one specified via the method's `options` parameter.

**Signature**

> sendNoteOff(note, options, options.channels, options.rawValue, options.time, options.release) ⇒ Output

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
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.rawValue] | <code>boolean</code> | <code>false</code>
 | <!--get me? |-->
Controls whether the release velocity is set using
integers between `0` and `127` (`true`) or a decimal number between `0` and `1` (`false`,
default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |
| [options.release] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The velocity at which to release the note (between `0`
and `1`). If the `rawValue` option is `true`, the value should be specified as an integer
between `0` and `127`. An invalid velocity value will silently trigger the default of `0.5`. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|note|number|||get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.rawValue|boolean|optional|false|get me?|
|options.time|number|optional||get me?|
|options.release|number|optional|0.5|get me?|

### `.sendNoteOn(...)`

Sends a **note on** message for the specified notes on the specified channel(s). The first
parameter is the note. It can be a single value or an array of the following valid values:

 - A MIDI note number (integer between `0` and `127`)
 - A note name, followed by the octave (e.g. `"C3"`, `"G#4"`, `"F-1"`, `"Db7"`)
 - A {@link Note} object

 The execution of the **note on** command can be delayed by using the `time` property of the
`options` parameter.

When using {@link Note} objects, the attack velocity defined in the {@link Note} objects has
precedence over the one specified via the method's `options` parameter. Also, the `duration` is
ignored. If you want to also send a **note off** message, use the
[playNote()]{@link Output#playNote} method instead.

**Note**: As per the MIDI standard, a **note on** message with an attack velocity of `0` is
functionally equivalent to a **note off** message.

**Signature**

> sendNoteOn(note, options, options.channels, options.rawValue, options.time, options.attack) ⇒ Output

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
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.rawValue] | <code>boolean</code> | <code>false</code>
 | <!--get me? |-->
Controls whether the attack velocity is set using
integers between `0` and `127` (`true`) or a decimal number between `0` and `1` (`false`,
default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |
| [options.attack] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The velocity at which to play the note (between `0` and
`1`). If the `rawValue` option is `true`, the value should be specified as an integer
between `0` and `127`. An invalid velocity value will silently trigger the default of `0.5`. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|note|number|||get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.rawValue|boolean|optional|false|get me?|
|options.time|number|optional||get me?|
|options.attack|number|optional|0.5|get me?|

### `.sendReset(...)`

Sends a **reset** real-time message. This tells the device connected to this output that it
should reset itself to a default state.

**Signature**

> sendReset(options, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.sendStart(...)`

Sends a **start** real-time message. A MIDI Start message starts the playback of the current
song at beat 0. To start playback elsewhere in the song, use the
[sendContinue()]{@link Output#sendContinue} method.

**Signature**

> sendStart(options, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.sendStop(...)`

Sends a **stop** real-time message. This tells the device connected to this output to stop
playback immediately (or at the scheduled time).

**Signature**

> sendStop(options, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.sendSysex(...)`

Sends a MIDI [system exclusive]{@link
https://www.midi.org/specifications-old/item/table-4-universal-system-exclusive-messages}
(*sysex*) message. The `data` parameter should only contain the data of the message. When
sending out the actual MIDI message, WebMidi.js will automatically prepend the data with the
*sysex byte* (`0xF0`) and the manufacturer ID byte(s). It will also automatically terminate
the message with the *sysex end byte* (`0xF7`).

The data can be an array of unsigned integers (0-127) or a `Uint8Array` object.

To use the `sendSysex()` method, system exclusive message support must have been enabled. To
do so, you must set the `sysex` option to `true` when calling `WebMidi.enable()`:

```js
WebMidi.enable({sysex: true})
  .then(() => console.log("System exclusive messages are enabled");
```

Note that, depending on browser, version and platform, it is generally necessary to serve the
page over HTTPS to enable sysex support.

##### Examples

If you want to send a sysex message to a Korg device connected to the first output, you would
use the following code:

```js
WebMidi.outputs[0].sendSysex(0x42, [0x1, 0x2, 0x3, 0x4, 0x5]);
```

The parameters can be specified using any number notation (decimal, hex, binary, etc.).
Therefore, the code below is equivalent to the code above:

```js
WebMidi.outputs[0].sendSysex(66, [1, 2, 3, 4, 5]);
```

The above code sends the byte values 1, 2, 3, 4 and 5 to Korg devices (hex 42 is the same as
decimal 66).

Some manufacturers are identified using 3 bytes. In this case, you would use a 3-position array
as the first parameter. For example, to send the same sysex message to a
*Native Instruments* device:

```js
WebMidi.outputs[0].sendSysex([0x00, 0x21, 0x09], [0x1, 0x2, 0x3, 0x4, 0x5]);
```
There is no limit for the length of the data array. However, it is generally suggested to keep
system exclusive messages to 64Kb or less.

**Signature**

> sendSysex(manufacturer, data, options, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| manufacturer | <code>number</code> \| <code>Array.&lt;number&gt;</code> | 
 | <!--get me? |-->
An unsigned integer or an array of three unsigned
integers between 0 and 127 that identify the targeted manufacturer. The *MIDI Manufacturers
Association* maintains a full list of
[Manufacturer ID Numbers](https://www.midi.org/specifications-old/item/manufacturer-id-numbers)
. |
| [data] | <code>Array.&lt;number&gt;</code> \| <code>Uint8Array</code> | <code>[]</code>
 | <!--get me? |-->
A Uint8Array or an array of unsigned integers between 0
and 127. This is the data you wish to transfer. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|manufacturer|number|||get me?|
|data|Array.&lt;number&gt;|optional|[]|get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.sendTimecodeQuarterFrame(...)`

Sends a MIDI **timecode quarter frame** message. Please note that no processing is being done
on the data. It is up to the developer to format the data according to the
[MIDI Timecode](https://en.wikipedia.org/wiki/MIDI_timecode) format.

**Signature**

> sendTimecodeQuarterFrame(value, options, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>number</code> | 
 | <!--get me? |-->
The quarter frame message content (integer between 0 and 127). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value|number|||get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.sendTuneRequest(...)`

Sends a MIDI **tune request** real-time message.

**Signature**

> sendTuneRequest(options, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.setChannelAftertouch(...)`

Sends a MIDI **channel aftertouch** message to the specified channel(s). For key-specific
aftertouch, you should instead use [setKeyAftertouch()]{@link Output#setKeyAftertouch}.

**Signature**

> setChannelAftertouch(pressure, options, options.channels, options.rawValue, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [pressure] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The pressure level (between 0 and 1). An invalid pressure value
will silently trigger the default behaviour. If the `rawValue` option is set to `true`, the
pressure can be defined by using an integer between 0 and 127. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.rawValue] | <code>boolean</code> | <code>false</code>
 | <!--get me? |-->
A boolean indicating whether the value should be
considered a float between 0 and 1.0 (default) or a raw integer between 0 and 127. |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|pressure|number|optional|0.5|get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.rawValue|boolean|optional|false|get me?|
|options.time|number|optional||get me?|

### `.setKeyAftertouch(...)`

Sends a MIDI **key aftertouch** message to the specified channel(s) at the scheduled time. This
is a key-specific aftertouch. For a channel-wide aftertouch message, use
[setChannelAftertouch()]{@link Output#setChannelAftertouch}.

**Signature**

> setKeyAftertouch(note, pressure, options, options.channels, options.rawValue, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| note | <code>number</code> \| <code>string</code> \| <code>Array</code> | 
 | <!--get me? |-->
The note for which you are sending an aftertouch value. The
notes can be specified in one of two ways. The first way is by using the MIDI note number (an
integer between 0 and 127). The second way is by using the note name followed by the octave
(C3, G#4, F-1, Db7). The octave range should be between -1 and 9. The lowest note is C-1 (MIDI
note number 0) and the highest note is G9 (MIDI note number 127). It is also possible to use
an array of note names and/or numbers. |
| [pressure] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The pressure level (between 0 and 1). An invalid pressure value
will silently trigger the default behaviour. If the `rawValue` option is set to `true`, the
pressure can be defined by using an integer between 0 and 127. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.rawValue] | <code>boolean</code> | <code>false</code>
 | <!--get me? |-->
A boolean indicating whether the value should be
considered a float between 0 and 1.0 (default) or a raw integer between 0 and 127. |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|note|number|||get me?|
|pressure|number|optional|0.5|get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.rawValue|boolean|optional|false|get me?|
|options.time|number|optional||get me?|

### `.setLocalControl(...)`

Turns local control on or off. Local control is usually enabled by default. If you disable it,
the instrument will no longer trigger its own sounds. It will only send the MIDI messages to
its out port.

**Signature**

> setLocalControl(state, options, options.channels, options.time) ⇒ Output

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
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|state|boolean|optional|false|get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.setMasterTuning(...)`

Sends a master tuning message to the specified channel(s). The value is decimal and must be
larger than -65 semitones and smaller than 64 semitones.

Because of the way the MIDI specification works, the decimal portion of the value will be
encoded with a resolution of 14bit. The integer portion must be between -64 and 63
inclusively. This function actually generates two MIDI messages: a **Master Coarse Tuning** and
a **Master Fine Tuning** RPN messages.

**Signature**

> setMasterTuning(value, options, options.channels, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | <code>number</code> | <code>0.0</code>
 | <!--get me? |-->
The desired decimal adjustment value in semitones (-65 < x < 64) |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value|number|optional|0.0|get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.setModulationRange(...)`

Sends a **modulation depth range** message to the specified channel(s) so that they adjust the
depth of their modulation wheel's range. The range can be specified with the `semitones`
parameter, the `cents` parameter or by specifying both parameters at the same time.

**Signature**

> setModulationRange(semitones, cents, options, options.channels, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [semitones] | <code>number</code> | <code>0</code>
 | <!--get me? |-->
The desired adjustment value in semitones (integer between
0 and 127). |
| [cents] | <code>number</code> | <code>0</code>
 | <!--get me? |-->
The desired adjustment value in cents (integer between 0 and 127). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|semitones|number|optional|0|get me?|
|cents|number|optional|0|get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.setNonRegisteredParameter(...)`

Sets a non-registered parameter to the specified value. The NRPN is selected by passing in a
two-position array specifying the values of the two control bytes. The value is specified by
passing in a single integer (most cases) or an array of two integers.

NRPNs are not standardized in any way. Each manufacturer is free to implement them any way
they see fit. For example, according to the Roland GS specification, you can control the
**vibrato rate** using NRPN (1, 8). Therefore, to set the **vibrato rate** value to **123** you
would use:

```js
WebMidi.outputs[0].setNonRegisteredParameter([1, 8], 123);
```

Obviously, you should select a channel so the message is not sent to all channels. For
instance, to send to channel 1 of the first output port, you would use:

```js
WebMidi.outputs[0].setNonRegisteredParameter([1, 8], 123, 1);
```

In some rarer cases, you need to send two values with your NRPN messages. In such cases, you
would use a 2-position array. For example, for its **ClockBPM** parameter (2, 63), Novation
uses a 14-bit value that combines an MSB and an LSB (7-bit values). So, for example, if the
value to send was 10, you could use:

```js
WebMidi.outputs[0].setNonRegisteredParameter([2, 63], [0, 10], [1]);
```

For further implementation details, refer to the manufacturer"s documentation.

**Signature**

> setNonRegisteredParameter(parameter, data, options, options.channels, options.time) ⇒ Output

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
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|parameter|Array.&lt;number&gt;|||get me?|
|data|number|optional|[]|get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.setOmniMode(...)`

Sets OMNI mode to `"on"` or `"off"` for the specified channel(s). MIDI's OMNI mode causes the
instrument to respond to messages from all channels.

It should be noted that support for OMNI mode is not as common as it used to be.

**Signature**

> setOmniMode(state, options, options.channels, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [state] | <code>boolean</code> | 
 | <!--get me? |-->
Whether to activate OMNI mode (`true`) or not (`false`). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|state|boolean|optional||get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.setPitchBend(...)`

Sends a MIDI **pitch bend** message to the specified channel(s) at the scheduled time.

**Signature**

> setPitchBend(value, options, options.channels, options.rawValue, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>number</code> \| <code>Array.&lt;number&gt;</code> | 
 | <!--get me? |-->
The intensity of the bend (between -1.0 and 1.0). A value of
zero means no bend. The resulting bend is relative to the pitch bend range that has been
defined. The range can be set with [setPitchBendRange()]{@link OutputChannel#setPitchBendRange}
. So, for example, if the pitch bend range has been set to 12 semitones, using a bend value of
-1 will bend the note 1 octave below its nominal value.

If an invalid value is specified, the nearest valid value will be used instead.

If the `rawValue` option is set to `true`, the intensity of the bend can be defined by either
using a single integer between 0 and 127 (MSB) or an array of two integers between 0 and 127
representing, respectively, the MSB (most significant byte) and the LSB (least significant
byte). The MSB is expressed in semitones with `64` meaning no bend. A value lower than `64`
bends downwards while a value higher than `64` bends upwards. The LSB is expressed in cents
(1/100 of a semitone). An LSB of `64` also means no bend. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.rawValue] | <code>boolean</code> | <code>false</code>
 | <!--get me? |-->
A boolean indicating whether the value should be
considered as a float between -1.0 and 1.0 (default) or as raw integer between 0 and 127 (or
an array of 2 integers if using both MSB and LSB). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value|number|||get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.rawValue|boolean|optional|false|get me?|
|options.time|number|optional||get me?|

### `.setPitchBendRange(...)`

Sends a pitch bend range message to the specified channel(s) at the scheduled time so that they
adjust the range used by their pitch bend lever. The range is specified by using the
`semitones` and `cents` parameters. For example, setting the `semitones` parameter to `12`
means that the pitch bend range will be 12 semitones above and below the nominal pitch.

**Signature**

> setPitchBendRange(semitones, cents, options, options.channels, options.time) ⇒ Output

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
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|semitones|number|||get me?|
|cents|number|optional|0|get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.setPolyphonicMode(...)`

Sets the polyphonic mode. In `"poly"` mode (usually the default), multiple notes can be played
and heard at the same time. In `"mono"` mode, only one note will be heard at once even if
multiple notes are being played.

**Signature**

> setPolyphonicMode(mode, options, options.channels, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| mode | <code>string</code> | 
 | <!--get me? |-->
The mode to use: `"mono"` or `"poly"`. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|mode|string|||get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.setProgram(...)`

Sends a MIDI **program change** message to the specified channel(s) at the scheduled time.

**Note**: since version 3.0, the program number is an integer between 1 and 128. In versions
1.0 and 2.0, the number was between 0 and 127. This change aligns WebMidi.js with most devices
that use a numbering scheme starting at 1.

**Signature**

> setProgram(program, options, options.channels, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [program] | <code>number</code> | <code>1</code>
 | <!--get me? |-->
The MIDI patch (program) number (1-128) |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|program|number|optional|1|get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
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

> setRegisteredParameter(parameter, data, options, options.channels, options.time) ⇒ Output

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
A single integer or an array of integers with a maximum
length of 2 specifying the desired data. |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|parameter|string|||get me?|
|data|number|optional|[]|get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.setSong(...)`

Sends a **song select** MIDI message.

**Note**: since version 3.0, the song number is an integer between 1 and 128. In versions 1.0
and 2.0, the number was between 0 and 127. This change aligns WebMidi.js with most devices that
use a numbering scheme starting at 1.

**Signature**

> setSong(value, options, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>number</code> | 
 | <!--get me? |-->
The number of the song to select (integer between 1 and 128). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value|number|||get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.setSongPosition(...)`

Sends a **ong position** MIDI message. The value is expressed in MIDI beats (between 0 and
16383) which are 16th note. Position 0 is always the start of the song.

**Signature**

> setSongPosition(value, options, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | <code>number</code> | <code>0</code>
 | <!--get me? |-->
The MIDI beat to cue to (integer between 0 and 16383). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value|number|optional|0|get me?|
|options|Object|optional|{}|get me?|
|options.time|number|optional||get me?|

### `.setTuningBank(...)`

Sets the MIDI tuning bank to use. Note that the **Tuning Bank** parameter is part of the
*MIDI Tuning Standard*, which is not widely implemented.

**Note**: since version 3.0, the bank number is an integer between 1 and 128. In versions
1.0 and 2.0, the number was between 0 and 127. This change aligns WebMidi.js with most devices
that use a numbering scheme starting at 1.

**Signature**

> setTuningBank(value, options, options.channels, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>number</code> | 
 | <!--get me? |-->
The desired tuning bank (1-128). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value|number|||get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.setTuningProgram(...)`

Sets the MIDI tuning program to use. Note that the **Tuning Program** parameter is part of the
*MIDI Tuning Standard*, which is not widely implemented.

**Note**: since version 3.0, the program number is an integer between 1 and 128. In versions
1.0 and 2.0, the number was between 0 and 127. This change aligns WebMidi.js with most devices
that use a numbering scheme starting at 1.

**Signature**

> setTuningProgram(value, options, options.channels, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>number</code> | 
 | <!--get me? |-->
The desired tuning program (1-128). |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value|number|||get me?|
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.stopNote(...)`

This is an alias to the [sendNoteOff()]{@link Output#sendNoteOff} method.

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
[turnSoundOff()]{@link Output#turnSoundOff} method which mutes all sounds immediately.

**Signature**

> turnNotesOff(options, options.channels, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|

### `.turnSoundOff(...)`

Sends an **all sound off** channel mode message. This will silence all sounds playing on that
channel but will not prevent new sounds from being triggered.

**Signature**

> turnSoundOff(options, options.channels, options.time) ⇒ Output

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.channels] | <code>number</code> \| <code>Array.&lt;number&gt;</code> \| <code>&quot;all&quot;</code> | <code>&quot;all&quot;</code>
 | <!--get me? |-->
The MIDI channel number (between `1`
and `16`) or an array of channel numbers to use. The special value `"all"` can also be used to
use all channels (default). |
| [options.time] | <code>number</code> \| <code>string</code> | 
 | <!--get me? |-->
If `time` is a string prefixed with `"+"` and followed by
a number, the message will be delayed by that many milliseconds. If the value is a number
(DOMHighResTimeStamp), the operation will be scheduled for that time. If `time` is omitted, or
in the past, the operation will be carried out as soon as possible. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|options|Object|optional|{}|get me?|
|options.channels|number|optional|&quot;all&quot;|get me?|
|options.time|number|optional||get me?|


***

## Events

### `"closed"`
Type: Object

Event emitted when the {@link Output} has been closed by calling the
[close()]{@link Output#close} method.

**timestamp**:number

**type**:string

**target**:Output


### `"disconnected"`
Type: Object

Event emitted when the {@link Output} becomes unavailable. This event is typically fired
when the MIDI device is unplugged.

**timestamp**:number

**type**:string

**target**:Object

**target.connection**:string

**target.id**:string

**target.manufacturer**:string

**target.name**:string

**target.state**:string

**target.type**:string


### `"opened"`
Type: Object

Event emitted when the {@link Output} has been opened by calling the
[open()]{@link Output#open} method.

**timestamp**:number

**type**:string

**target**:Output


