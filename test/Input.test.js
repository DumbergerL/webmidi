const expect = require("chai").expect;
const midi = require("midi");
const sinon = require("sinon");
const {WebMidi} = require("../dist/webmidi.cjs.js");

// The virtual port is an "external" device so an output is seen as an input by WebMidi. To avoid
// confusion, the naming scheme adopts WebMidi's perspective.
let VIRTUAL_INPUT = new midi.Output();
let VIRTUAL_INPUT_NAME = "Virtual Input";
let WEBMIDI_INPUT;

describe("Input Object", function() {

  before(function () {
    VIRTUAL_INPUT.openVirtualPort(VIRTUAL_INPUT_NAME);
  });

  after(function () {
    VIRTUAL_INPUT.closePort();
  });

  beforeEach("Check support and enable WebMidi.js", async function () {
    await WebMidi.enable();
    WEBMIDI_INPUT = WebMidi.getInputByName(VIRTUAL_INPUT_NAME);
  });

  afterEach("Disable WebMidi.js", async function () {
    await WebMidi.disable();
  });

  it("should dispatch events when receiving system common MIDI messages (normal)", function (done) {

    // Arrange
    let events = [
      // "sysex",         // RT-Midi does not seem to support these messages?!
      // "timecode",
      // "songposition",
      // "songselect",
      "tunerequest"
    ];
    let index = 0;

    events.forEach(event => {
      WEBMIDI_INPUT.addListener(event, assert);
    });

    // Act
    events.forEach(event => {
      VIRTUAL_INPUT.sendMessage(
        [WebMidi.MIDI_SYSTEM_MESSAGES[event]]
      );
    });

    // Assert
    function assert(e) {
      let event = events[index];
      expect(e.data).to.have.ordered.members([WebMidi.MIDI_SYSTEM_MESSAGES[event]]);
      index++;
      if (index >= events.length) done();
    }

  });

  it("should dispatch events when receiving system common MIDI messages (legacy)", function (done) {

    // Arrange
    let events = [
      // "sysex",         // RT-Midi does not seem to support these messages?!
      // "timecode",
      // "songposition",
      // "songselect",
      "tunerequest"
    ];
    let index = 0;

    events.forEach(event => {
      WEBMIDI_INPUT.addListener(event, undefined, assert);
    });

    // Act
    events.forEach(event => {
      VIRTUAL_INPUT.sendMessage(
        [WebMidi.MIDI_SYSTEM_MESSAGES[event]]
      );
    });

    // Assert
    function assert(e) {
      let event = events[index];
      expect(e.data).to.have.ordered.members([WebMidi.MIDI_SYSTEM_MESSAGES[event]]);
      index++;
      if (index >= events.length) done();
    }

  });

  it("should dispatch events when receiving realtime MIDI messages (normal)", function (done) {

    // Arrange
    let events = [
      "clock",
      "start",
      "continue",
      "stop",
      "activesensing",
      "reset"
    ];
    let index = 0;

    events.forEach(event => {
      WEBMIDI_INPUT.addListener(event, assert);
    });

    // Act
    events.forEach(event => {
      VIRTUAL_INPUT.sendMessage(
        [WebMidi.MIDI_SYSTEM_MESSAGES[event]]
      );
    });

    // Assert
    function assert(e) {
      let event = events[index];
      expect(e.data).to.have.ordered.members([WebMidi.MIDI_SYSTEM_MESSAGES[event]]);
      index++;
      if (index >= events.length) done();
    }

  });

  it("should dispatch events when receiving realtime MIDI messages (legacy)", function (done) {

    // Arrange
    let events = [
      "clock",
      "start",
      "continue",
      "stop",
      "activesensing",
      "reset"
    ];
    let index = 0;

    events.forEach(event => {
      WEBMIDI_INPUT.addListener(event, undefined, assert);
    });

    // Act
    events.forEach(event => {
      VIRTUAL_INPUT.sendMessage(
        [WebMidi.MIDI_SYSTEM_MESSAGES[event]]
      );
    });

    // Assert
    function assert(e) {
      let event = events[index];
      expect(e.data).to.have.ordered.members([WebMidi.MIDI_SYSTEM_MESSAGES[event]]);
      index++;
      if (index >= events.length) done();
    }

  });

  it("should dispatch midimessage event when receiving any messages (normal)", function (done) {

    // Arrange
    let messages = [
      [0x80, 48, 87],     // Note off
      [0x90, 52, 64],     // Note on
      [0xA0, 60, 83],     // Key pressure
      [0xB0, 67, 92],     // Control change
      [0xC0, 88],         // Program change
      [0xD0, 93],         // Program change
      [0xE0, 95, 101],    // Pitch bend
      [250]               // Start
    ];
    let index = 0;

    WEBMIDI_INPUT.addListener("midimessage", assert);

    // Act
    messages.forEach(msg => {
      VIRTUAL_INPUT.sendMessage(msg);
    });

    // Assert
    function assert(e) {
      expect(e.data).to.have.ordered.members(messages[index]);
      index++;
      if (index >= messages.length) done();
    }

  });

  it("should dispatch midimessage event when receiving any messages (legacy)", function (done) {

    // Arrange
    let messages = [
      [0x80, 48, 87],     // Note off
      [0x90, 52, 64],     // Note on
      [0xA0, 60, 83],     // Key pressure
      [0xB0, 67, 92],     // Control change
      [0xC0, 88],         // Program change
      [0xD0, 93],         // Program change
      [0xE0, 95, 101],    // Pitch bend
      [250]               // Start
    ];
    let index = 0;

    WEBMIDI_INPUT.addListener("midimessage", undefined, assert);

    // Act
    messages.forEach(msg => {
      VIRTUAL_INPUT.sendMessage(msg);
    });

    // Assert
    function assert(e) {
      expect(e.data).to.have.ordered.members(messages[index]);
      index++;
      if (index >= messages.length) done();
    }

  });

  it("should trigger 'opened' event", function (done) {

    // Arrange
    const input = WebMidi.getInputByName(VIRTUAL_INPUT_NAME);
    input.addListener("opened", () => done());
    input.addListener("closed", () => input.open());

    // Act
    input.close();

  });

  it("should trigger 'closed' event", function (done) {

    // Arrange
    const input = WebMidi.getInputByName(VIRTUAL_INPUT_NAME);
    input.addListener("closed", () => done());

    // Act
    input.close();

  });

  it.only("should trigger 'disconnected' event"); // below does not work...
  // it.only("should trigger 'disconnected' event", function (done) {
  //
  //   // Arrange
  //   const input = WebMidi.getInputByName(VIRTUAL_INPUT_NAME);
  //   input.addListener("disconnected", () => done());
  //
  //   // Act
  //   VIRTUAL_INPUT.closePort();
  //
  //   setTimeout(() => {
  //     VIRTUAL_INPUT.openVirtualPort(VIRTUAL_INPUT_NAME);
  //   }, 100);
  //
  // });

  describe("addListener()", function() {

    it("should add listeners to all specified channels (normal)", function() {

      // Arrange
      let l1 = () => {};
      let channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let event = "noteon";

      // Act
      WEBMIDI_INPUT.addListener(event, l1, {channels: channels});

      // Assert
      WEBMIDI_INPUT.channels.forEach(ch => {
        expect(ch.hasListener(event, l1)).to.be.true;
      });

      expect(
        WEBMIDI_INPUT.hasListener(event, l1, {channels: channels})
      ).to.be.true;

    });

    it("should add listeners to all specified channels (legacy)", function() {

      // Arrange
      let l1 = () => {};
      let channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let event = "noteon";

      // Act
      WEBMIDI_INPUT.addListener(event, channels, l1);

      // Assert
      WEBMIDI_INPUT.channels.forEach(ch => {
        expect(ch.hasListener(event, l1)).to.be.true;
      });

      expect(
        WEBMIDI_INPUT.hasListener(event, channels, l1)
      ).to.be.true;

    });

    it("should add listeners for input-wide messages (normal)", function() {

      // Arrange
      let l1 = () => {};

      // Act
      Object.keys(WebMidi.MIDI_SYSTEM_MESSAGES).forEach(key => {
        WEBMIDI_INPUT.addListener(key, l1);
      });

      // Assert
      Object.keys(WebMidi.MIDI_SYSTEM_MESSAGES).forEach(key => {
        expect(WEBMIDI_INPUT.hasListener(key, l1)).to.be.true;
      });

    });

    it("should add listeners for input-wide messages (legacy)", function() {

      // Arrange
      let l1 = () => {};

      // Act
      Object.keys(WebMidi.MIDI_SYSTEM_MESSAGES).forEach(key => {
        WEBMIDI_INPUT.addListener(key, undefined, l1);
      });

      // Assert
      Object.keys(WebMidi.MIDI_SYSTEM_MESSAGES).forEach(key => {
        expect(WEBMIDI_INPUT.hasListener(key, undefined, l1)).to.be.true;
      });

    });

    it("should throw error for invalid event types (normal)", function() {

      // Arrange
      let values = [undefined, null, "", NaN, [], {}, 0];
      let channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

      //  Act
      values.forEach(assert);

      // Assert
      function assert(event) {
        expect(() => {
          WEBMIDI_INPUT.addListener(event, () => {}, {channels: channels});
        }).to.throw(TypeError);
      }

    });

    it("should throw error for invalid event types (legacy)", function() {

      // Arrange
      let values = [undefined, null, "", NaN, [], {}, 0];
      let channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

      //  Act
      values.forEach(assert);

      // Assert
      function assert(event) {
        expect(() => {
          WEBMIDI_INPUT.addListener(event, channels, () => {});
        }).to.throw(TypeError);
      }

    });

    it("should throw if event is input-specific but no ch. is defined (normal)", function () {

      // Arrange
      let events = [
        "noteoff",
        "noteon",
        "keyaftertouch",
        "controlchange",
        "channelmode",
        "nrpn",
        "programchange",
        "channelaftertouch",
        "pitchbend"
      ];

      // Act
      events.forEach(assert);

      // Assert
      function assert(event) {
        expect(() => {
          WEBMIDI_INPUT.addListener(event, assert);
        }).to.throw();
      }

    });

    it("should throw if event is input-specific but no ch. is defined (legacy)", function () {

      // Arrange
      let events = [
        "noteoff",
        "noteon",
        "keyaftertouch",
        "controlchange",
        "channelmode",
        "nrpn",
        "programchange",
        "channelaftertouch",
        "pitchbend"
      ];

      // Act
      events.forEach(assert);

      // Assert
      function assert(event) {
        expect(() => {
          WEBMIDI_INPUT.addListener(event, undefined, assert);
        }).to.throw();
      }

    });

    it("should return array of 'Listener' (of length 1) for system messages (normal)", function() {

      // Arrange
      let callbacks = [];
      let listeners = [];

      // Act
      Object.keys(WebMidi.MIDI_SYSTEM_MESSAGES).forEach(function(key, index) {
        callbacks[index] = () => {};
        listeners[index] = WEBMIDI_INPUT.addListener(key, callbacks[index]);
      });

      // Assert
      Object.keys(WebMidi.MIDI_SYSTEM_MESSAGES).forEach(function(key, index) {
        expect(listeners[index].length).to.equal(1);
        expect(listeners[index][0].callback === callbacks[index]).to.be.true;
      });

    });

    it("should return array of 'Listener' (of length 1) for system messages (legacy)", function() {

      // Arrange
      let callbacks = [];
      let listeners = [];

      // Act
      Object.keys(WebMidi.MIDI_SYSTEM_MESSAGES).forEach(function(key, index) {
        callbacks[index] = () => {};
        listeners[index] = WEBMIDI_INPUT.addListener(key, undefined, callbacks[index]);
      });

      // Assert
      Object.keys(WebMidi.MIDI_SYSTEM_MESSAGES).forEach(function(key, index) {
        expect(listeners[index].length).to.equal(1);
        expect(listeners[index][0].callback === callbacks[index]).to.be.true;
      });

    });

    it("should return an array of 'Listener' objects for channel messages (normal)", function() {

      // Arrange
      let channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let callbacks = [];
      let listeners = [];

      Object.keys(WebMidi.MIDI_CHANNEL_VOICE_MESSAGES).forEach((key, index) => {
        callbacks[index] = () => {};
        listeners[index] = WEBMIDI_INPUT.addListener(key, callbacks[index], {channels: channels});
      });

      Object.keys(WebMidi.MIDI_CHANNEL_VOICE_MESSAGES).forEach((key, index) => {
        expect(listeners[index].length).to.equal(channels.length);
        expect(listeners[index][0].callback === callbacks[index]).to.be.true;
      });

    });

    it("should return an array of 'Listener' objects for channel messages (legacy)", function() {

      // Arrange
      let channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let callbacks = [];
      let listeners = [];

      Object.keys(WebMidi.MIDI_CHANNEL_VOICE_MESSAGES).forEach((key, index) => {
        callbacks[index] = () => {};
        listeners[index] = WEBMIDI_INPUT.addListener(key, channels, callbacks[index]);
      });

      Object.keys(WebMidi.MIDI_CHANNEL_VOICE_MESSAGES).forEach((key, index) => {
        expect(listeners[index].length).to.equal(channels.length);
        expect(listeners[index][0].callback === callbacks[index]).to.be.true;
      });

    });

    it("should throw if channels are specified but listener not a function (normal)", function() {

      // Arrange
      let event = "noteon";
      let channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

      expect(() => {
        WEBMIDI_INPUT.addListener(event, undefined, {channels: channels});
      }).to.throw(TypeError);

    });

    it("should throw if channels are specified but listener not a function (legacy)", function() {

      // Arrange
      let event = "noteon";
      let channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

      expect(() => {
        WEBMIDI_INPUT.addListener(event, channels);
      }).to.throw(Error);

    });

    it("should ignore invalid channels (normal)", function() {

      // Arrange
      let valid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let invalid = [undefined, null, "", NaN, [], {}, 0];
      let channels = valid.concat(invalid);

      // Act
      let listeners = WEBMIDI_INPUT.addListener("noteon", () => {}, {channels: channels});

      // Assert
      expect(listeners.length).to.equal(valid.length);

    });

    it("should ignore invalid channels (legacy)", function() {

      // Arrange
      let valid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let invalid = [undefined, null, "", NaN, [], {}, 0];
      let channels = valid.concat(invalid);

      // Act
      let listeners = WEBMIDI_INPUT.addListener("noteon", channels, () => {});

      // Assert
      expect(listeners.length).to.equal(valid.length);

    });

  });

  describe("addOneTimeListener()", function() {

    it("should properly call 'addListener()' with appropriate parameters", function () {

      // Arrange
      let spy = sinon.spy(WEBMIDI_INPUT.channels[1], "addListener");
      let event = "noteon";
      let listener = () => {};
      let options = {
        channels: 1,
        context: {},
        prepend: true,
        duration: 1000,
        arguments: [1, 2, 3]
      };

      // Act
      WEBMIDI_INPUT.addOneTimeListener(event, listener, options);

      // Assert
      let args = spy.args[0];
      expect(args[0]).to.equal(event);
      expect(args[1]).to.equal(listener);
      expect(args[2].context).to.equal(options.context);
      expect(args[2].prepend).to.equal(options.prepend);
      expect(args[2].duration).to.equal(options.duration);
      expect(args[2].arguments).to.equal(options.arguments);
      expect(args[2].remaining).to.equal(1);

    });

    it("should call 'addListener()' for all specified channels", function () {

      // Arrange
      let event = "noteon";
      let channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let listener = () => {};
      let spies = [];

      // Act
      channels.forEach(ch => {
        spies.push(sinon.spy(WEBMIDI_INPUT.channels[ch], "addListener"));
      });

      WEBMIDI_INPUT.addOneTimeListener(event, listener, {channels: channels});

      // Assert
      spies.forEach(spy => {
        expect(spy.args[0][2].remaining).to.equal(1);
        expect(spy.calledOnce).to.be.true;
      });

    });

  });

  describe("constructor()", function() {

    it("should set up all 'InputChannel' objects", function() {

      expect(WEBMIDI_INPUT.channels.length).to.equal(16+1);

      for (let i = 1; i <= 16; i++) {
        expect(WEBMIDI_INPUT.channels[i].number).to.equal(i);
      }

    });

  });

  describe("close()", function() {

    it("should close the port", async function () {

      // Act
      await WEBMIDI_INPUT.close();

      // Assert
      expect(WEBMIDI_INPUT.connection).to.equal("closed");

    });

  });

  describe("destroy()", function() {

    it("should destroy the 'Input'", async function() {

      // Act
      await WEBMIDI_INPUT.destroy();

      // Assert
      try {
        WEBMIDI_INPUT.name;
      } catch (e) {
        await Promise.resolve();
      }

      if (WEBMIDI_INPUT.channels.length !== 0) return Promise.reject();
      if (WEBMIDI_INPUT.hasListener() === true) return Promise.reject();

    });

  });

  describe("hasListener()", function() {

    it("should call channel's 'hasListener()' for all specified channels (normal)", function () {

      // Arrange
      let event = "noteon";
      let channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let listener = () => {};
      let spies = [];

      // Act
      channels.forEach(ch => {
        spies.push(sinon.spy(WEBMIDI_INPUT.channels[ch], "hasListener"));
      });

      WEBMIDI_INPUT.addListener(event, listener, {channels: channels});
      WEBMIDI_INPUT.hasListener(event, listener, {channels: channels});

      // Assert
      spies.forEach(spy => {
        expect(spy.calledOnce).to.be.true;
      });

    });

    it("should call channel's 'hasListener()' for all specified channels (legacy)", function () {

      // Arrange
      let event = "noteon";
      let channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let listener = () => {};
      let spies = [];

      // Act
      channels.forEach(ch => {
        spies.push(sinon.spy(WEBMIDI_INPUT.channels[ch], "hasListener"));
      });

      WEBMIDI_INPUT.addListener(event, channels, listener);
      WEBMIDI_INPUT.hasListener(event, channels, listener);

      // Assert
      spies.forEach(spy => {
        expect(spy.calledOnce).to.be.true;
      });

    });

    it("should call input's 'hasListener()' for all input-wide events", function () {

      // Arrange
      let event = "clock";
      let listener = () => {};
      let spy = sinon.spy(WEBMIDI_INPUT, "hasListener");

      // Act
      WEBMIDI_INPUT.addListener(event, listener);
      WEBMIDI_INPUT.hasListener(event, listener);

      // Assert
      expect(spy.calledOnce).to.be.true;
      expect(spy.args[0][0]).to.equal(event);
      expect(spy.args[0][1]).to.equal(listener);

    });

  });

  describe("open()", async function() {

    it("should open the port", async function () {

      // Act
      await WEBMIDI_INPUT.close();
      await WEBMIDI_INPUT.open();

      // Assert
      expect(WEBMIDI_INPUT.connection).to.equal("open");

    });

  });

  describe("removeListener()", function() {

    it("should call channel's 'removeListener()' for all specified channels (normal)", function () {

      // Arrange
      let event = "noteon";
      let channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let listener = () => {};
      let spies = [];

      // Act
      channels.forEach(ch => {
        spies.push(sinon.spy(WEBMIDI_INPUT.channels[ch], "removeListener"));
      });

      WEBMIDI_INPUT.removeListener(event, listener, {channels: channels});

      // Assert
      spies.forEach(spy => {
        expect(spy.calledOnce).to.be.true;
      });

    });

    it("should call channel's 'removeListener()' for all specified channels (legacy)", function () {

      // Arrange
      let event = "noteon";
      let channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let listener = () => {};
      let spies = [];

      // Act
      channels.forEach(ch => {
        spies.push(sinon.spy(WEBMIDI_INPUT.channels[ch], "removeListener"));
      });

      WEBMIDI_INPUT.removeListener(event, channels, listener);

      // Assert
      spies.forEach(spy => {
        expect(spy.calledOnce).to.be.true;
      });

    });

    it("should call input's 'removeListener()' for all input-wide events (normal)", function () {

      // Arrange
      let event = "clock";
      let listener = () => {};
      let spy = sinon.spy(WEBMIDI_INPUT, "removeListener");

      // Act
      WEBMIDI_INPUT.removeListener(event, listener);

      // Assert
      expect(spy.calledOnce).to.be.true;
      expect(spy.args[0][0]).to.equal(event);
      expect(spy.args[0][1]).to.equal(listener);

    });

    it("should call input's 'removeListener()' for all input-wide events (legacy)", function () {

      // Arrange
      let event = "clock";
      let listener = () => {};
      let spy = sinon.spy(WEBMIDI_INPUT, "removeListener");

      // Act
      WEBMIDI_INPUT.removeListener(event, undefined, listener);

      // Assert
      expect(spy.calledOnce).to.be.true;
      expect(spy.args[0][0]).to.equal(event);
      expect(spy.args[0][2]).to.equal(listener);

    });

  });

});
