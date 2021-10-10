# Utilities

The `Utilities` class contains general-purpose utility methods. All methods are static and
should be called using the class name. For example: `Utilities.getNoteDetails("C4")`.

**Since**: 3.0.0



***

## Methods

### `.buildNote(...)`

Converts the `input` parameter to a valid {@link Note} object. The input usually is an unsigned
integer (0-127) or a note identifier (`"C4"`, `"G#5"`, etc.). If the input is a {@link Note}
object, it will be returned as is.

If the input is a note number or identifier, it is possible to specify options by providing the
`options` parameter.

**Signature**

> buildNote(input, options, options.duration, options.attack, options.release, options.octaveOffset) ⇒ Note

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [input] | <code>number</code> \| <code>string</code> \| <code>Note</code> | 
 | <!--get me? |-->
 |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.duration] | <code>number</code> | <code>Infinity</code>
 | <!--get me? |-->
The number of milliseconds before the note should
be explicitly stopped. |
| [options.attack] | <code>number</code> | <code>64</code>
 | <!--get me? |-->
The note's attack velocity as an integer between 0 and 127. |
| [options.release] | <code>number</code> | <code>64</code>
 | <!--get me? |-->
The note's release velocity as an integer between 0 and
127. |
| [options.octaveOffset] | <code>number</code> | <code>0</code>
 | <!--get me? |-->
An integer to offset the octave by. **This is only
used when the input value is a note identifier.** |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|input|number|optional||get me?|
|options|Object|optional|{}|get me?|
|options.duration|number|optional|Infinity|get me?|
|options.attack|number|optional|64|get me?|
|options.release|number|optional|64|get me?|
|options.octaveOffset|number|optional|0|get me?|

### `.buildNoteArray(...)`

Converts an input value, which can be an unsigned integer (0-127), a note identifier, a
{@link Note} object or an array of the previous types, to an array of {@link Note} objects.

{@link Note} objects are returned as is. For note numbers and identifiers, a {@link Note}
object is created with the options specified. An error will be thrown when encountering invalid
input.

**Signature**

> buildNoteArray(notes, options, options.duration, options.attack, options.release, options.rawAttack, options.rawRelease, options.octaveOffset) ⇒ Array.&lt;Note&gt;

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [notes] | <code>number</code> \| <code>string</code> \| <code>Note</code> \| <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;Note&gt;</code> | 
 | <!--get me? |-->
 |
| [options] | <code>Object</code> | <code>{}</code>
 | <!--get me? |-->
 |
| [options.duration] | <code>number</code> | <code>Infinity</code>
 | <!--get me? |-->
The number of milliseconds before the note should
be explicitly stopped. |
| [options.attack] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The note's attack velocity as a decimal number between 0
and 1. |
| [options.release] | <code>number</code> | <code>0.5</code>
 | <!--get me? |-->
The note's release velocity as a decimal number between 0
and 1. |
| [options.rawAttack] | <code>number</code> | <code>64</code>
 | <!--get me? |-->
The note's attack velocity as an integer between 0 and
127. |
| [options.rawRelease] | <code>number</code> | <code>64</code>
 | <!--get me? |-->
The note's release velocity as an integer between 0 and
127. |
| [options.octaveOffset] | <code>number</code> | <code>0</code>
 | <!--get me? |-->
An integer to offset the octave by. **This is only
used when the input value is a note identifier.** |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|notes|number|optional||get me?|
|options|Object|optional|{}|get me?|
|options.duration|number|optional|Infinity|get me?|
|options.attack|number|optional|0.5|get me?|
|options.release|number|optional|0.5|get me?|
|options.rawAttack|number|optional|64|get me?|
|options.rawRelease|number|optional|64|get me?|
|options.octaveOffset|number|optional|0|get me?|

### `.getNoteDetails(...)`

Given a proper note identifier ("C#4", "Gb-1", etc.) or a valid MIDI note number (9-127), this
method returns an object containing broken down details about the specified note (uppercase
letter, accidental and octave).

When a number is specified, the translation to note is done using a value of 60 for middle C
(C4 = middle C).

**Signature**

> getNoteDetails(value) ⇒ Object

**Parameters**


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>number</code> | <!--get me? |-->
A note identifier A  atring ("C#4", "Gb-1", etc.) or a MIDI note
number (0-127). |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value|string|||get me?|

### `.getPropertyByValue(...)`

Returns the name of the first property of the supplied object whose value is equal to the one
supplied.

**Signature**

> getPropertyByValue(object, value) ⇒ string

**Parameters**


| Param | Type |
| --- | --- |
| object | <code>Object</code> | <!---->

| value | <code>\*</code> | <!---->





| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|object|Object|||get me?|
|value|*|||get me?|

### `.guessNoteNumber(...)`

Returns a valid MIDI note number (0-127) given the specified input. The input usually is a
string containing a note identifier (`"C3"`, `"F#4"`, `"D-2"`, `"G8"`, etc.). If an integer
between 0 and 127 is passed, it will simply be returned as is (for convenience). Other strings
will be parsed for integer value, if possible.

If the input is an identifier, the resulting note number is offset by the `octaveOffset`
parameter. For example, if you pass in "C4" (note number 60) and the `octaveOffset` value is
-2, the resulting MIDI note number will be 36.

**Signature**

> guessNoteNumber(input) ⇒ number

**Parameters**


| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> \| <code>number</code> | <!--get me? |-->
A string or number to extract the MIDI note number from. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|input|string|||get me?|

### `.offsetNumber(...)`

Returns the supplied MIDI note number offset by the requested octave and semitone values. If
the calculated value is less than 0, 0 will be returned. If the calculated value is more than
127, 127 will be returned. If an invalid offset value is supplied, 0 will be used.

**Signature**

> offsetNumber(offset) ⇒ number

**Parameters**


| Param |
| --- |
| offset | <!---->





| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|offset||||get me?|

### `.sanitizeChannels(...)`

Returns a sanitized array of valid MIDI channel numbers (1-16). The parameter should be a
single integer or an array of integers.

For backwards-compatibility, passing `undefined` as a parameter to this method results in all
channels being returned (1-16). Otherwise, parameters that cannot successfully be parsed to
integers between 1 and 16 are silently ignored.

**Signature**

> sanitizeChannels(channel) ⇒ Array

**Parameters**


| Param | Type | Description |
| --- | --- | --- |
| [channel] | <code>number</code> \| <code>Array.&lt;number&gt;</code> | <!--get me? |-->
An integer or an array of integers to parse as channel
numbers. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|channel|number|optional||get me?|

### `.to7Bit(...)`

Returns a number between 0 and 127 which is the result of multiplying the input value by 127.
The input value should be number between 0 and 1 (inclusively). The returned value is
restricted between 0 and 127 even if the input is greater than 1 or smaller than 0.

Passing `Infinity` will return `127` and passing `-Infinity` will return `0`. Otherwise, when
the input value cannot be converted to a number, the method returns 0.

**Signature**

> to7Bit(value) ⇒ number

**Parameters**


| Param | Description |
| --- | --- |
| value | <!--get me? |-->
A positive integer between 0 and 127 (inclusive) |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value||||get me?|

### `.toNormalized(...)`

Returns a number between 0 and 1 representing the ratio of the input value divided by 127 (7
bit). The returned value is restricted between 0 and 1 even if the input is greater than 127 or
smaller than 0.

Passing `Infinity` will return `1` and passing `-Infinity` will return `0`. Otherwise, when the
input value cannot be converted to an integer, the method returns 0.

**Signature**

> toNormalized(value) ⇒ number

**Parameters**


| Param | Description |
| --- | --- |
| value | <!--get me? |-->
A positive integer between 0 and 127 (inclusive) |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value||||get me?|

### `.toNoteIdentifier(...)`

Returns an identifier string representing a note name (with optional accidental) followed by an
octave number. The octave can be offset by using the `octaveOffset` parameter.

**Signature**

> toNoteIdentifier(number, octaveOffset) ⇒ string

**Parameters**


| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | <!--get me? |-->
The MIDI note number to convert to a note identifier |
| octaveOffset | <code>number</code> | <!--get me? |-->
An offset to apply to the resulting octave |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|number|number|||get me?|
|octaveOffset|number|||get me?|

### `.toNoteNumber(...)`

Returns a MIDI note number matching the identifier passed in the form of a string. The
identifier must include the octave number. The identifier also optionally include a sharp (#),
a double sharp (##), a flat (b) or a double flat (bb) symbol. For example, these are all valid
identifiers: C5, G4, D#-1, F0, Gb7, Eb-1, Abb4, B##6, etc.

When converting note identifiers to numbers, C4 is considered to be middle C (MIDI note number
60) as per the scientific pitch notation standard.

The resulting note number can be offset by using the `octaveOffset` parameter.

**Signature**

> toNoteNumber(identifier, octaveOffset) ⇒ number

**Parameters**


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| identifier | <code>string</code> | 
 | <!--get me? |-->
The identifier in the form of a letter, followed by an optional "#",
"##", "b" or "bb" followed by the octave number. For exemple: C5, G4, D#-1, F0, Gb7, Eb-1,
Abb4, B##6, etc. |
| [octaveOffset] | <code>number</code> | <code>0</code>
 | <!--get me? |-->
A integer to offset the octave by. |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|identifier|string|||get me?|
|octaveOffset|number|optional|0|get me?|

### `.toTimestamp(...)`

Returns a valid timestamp, relative to the navigation start of the document, derived from the
`time` parameter. If the parameter is a string starting with the "+" sign and followed by a
number, the resulting timestamp will be the sum of the current timestamp plus that number. If
the parameter is a positive number, it will be returned as is. Otherwise, false will be
returned.

**Signature**

> toTimestamp(time) ⇒ number

**Parameters**


| Param | Type | Description |
| --- | --- | --- |
| [time] | <code>number</code> \| <code>string</code> | <!--get me? |-->
The time string (e.g. `"+2000"`) or number to parse |




| Parameter    | Type         | Attributes   | Default      | Description  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|time|number|optional||get me?|

