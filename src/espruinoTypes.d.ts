declare class Nucleo {
	constructor()
	static A0: Pin
	static A1: Pin
	static A2: Pin
	static A3: Pin
	static A4: Pin
	static A5: Pin
	static D0: Pin
	static D1: Pin
	static D2: Pin
	static D3: Pin
	static D4: Pin
	static D5: Pin
	static D6: Pin
	static D7: Pin
	static D8: Pin
	static D9: Pin
	static D10: Pin
	static D11: Pin
	static D12: Pin
	static D13: Pin
	static D14: Pin
	static D15: Pin
}
declare class NodeMCU {
	constructor()
	static A0: Pin
	static D0: Pin
	static D1: Pin
	static D2: Pin
	static D3: Pin
	static D4: Pin
	static D5: Pin
	static D6: Pin
	static D7: Pin
	static D8: Pin
	static D9: Pin
	static D10: Pin
}
declare class ESP8266 {
	constructor()
	static reboot: () => void
	static getResetInfo: () => RstInfo
	static logDebug: (enable: boolean) => void
	static setLog: (mode: number) => void
	static printLog: () => void
	static readLog: () => void
	static dumpSocketInfo: () => void
	static setCPUFreq: (freq: unknown) => void
	static getState: () => unknown
	static getFreeFlash: () => unknown
	static crc32: (arrayOfData: unknown) => unknown
	static neopixelWrite: (pin: Pin, arrayOfData: unknown) => void
	static deepSleep: (micros: unknown, option: unknown) => void
	static ping: (ipAddr: unknown, pingCallback: unknown) => void
}
declare class Queue {
	constructor(queueName: unknown)
	read: () => void
	writeChar: (char: unknown) => void
	log: () => void
}
declare class Task {
	constructor(taskName: unknown)
	suspend: () => void
	resume: () => void
	getCurrent: () => unknown
	notify: () => void
	log: () => void
}
declare class Timer {
	constructor(
		timerName: unknown,
		group: number,
		index: number,
		isrIndex: number
	)
	start: (duration: number) => void
	reschedule: (duration: number) => void
	log: () => void
}
declare class ESP32 {
	constructor()
	static setAtten: (pin: Pin, atten: number) => void
	static reboot: () => void
	static deepSleep: (us: number) => void
	static getState: () => unknown
	static setBLE_Debug: (level: number) => void
	static enableBLE: (enable: boolean) => void
	static enableWifi: (enable: boolean) => void
}

declare class ArrayBuffer {
	constructor(byteLength: number)
	byteLength: number
}
declare class ArrayBufferView {
	constructor()
	byteLength: number
	byteOffset: number
	set: (arr: unknown, offset: number) => void
	map: (func: unknown, thisArg: unknown) => ArrayBufferView
	indexOf: (value: unknown, startIndex: number) => unknown
	includes: (value: unknown, startIndex: number) => boolean
	join: (separator: unknown) => unknown
	sort: (func: unknown) => ArrayBufferView
	forEach: (func: unknown, thisArg: unknown) => void
	reduce: (callback: unknown, initialValue: unknown) => unknown
	fill: (value: unknown, start: number, end: unknown) => ArrayBufferView
	filter: (func: unknown, thisArg: unknown) => unknown
	find: (func: unknown) => unknown
	findIndex: (func: unknown) => unknown
	reverse: () => ArrayBufferView
	slice: (start: number, end: unknown) => Array<unknown>
}
declare class Uint8Array {
	constructor(arr: unknown, byteOffset: number, length: number)
}
declare class Uint8ClampedArray {
	constructor(arr: unknown, byteOffset: number, length: number)
}
declare class Int8Array {
	constructor(arr: unknown, byteOffset: number, length: number)
}
declare class Uint16Array {
	constructor(arr: unknown, byteOffset: number, length: number)
}
declare class Int16Array {
	constructor(arr: unknown, byteOffset: number, length: number)
}
declare class Uint24Array {
	constructor(arr: unknown, byteOffset: number, length: number)
}
declare class Uint32Array {
	constructor(arr: unknown, byteOffset: number, length: number)
}
declare class Int32Array {
	constructor(arr: unknown, byteOffset: number, length: number)
}
declare class Float32Array {
	constructor(arr: unknown, byteOffset: number, length: number)
}
declare class Float64Array {
	constructor(arr: unknown, byteOffset: number, length: number)
}
declare class Object {
	constructor(value: unknown)
	valueOf: () => unknown
	toString: (radix: unknown) => unknown
	clone: () => unknown
	hasOwnProperty: (name: unknown) => boolean
	emit: (event: unknown, args: unknown) => void
	static keys: (object: unknown) => unknown
	static getOwnPropertyNames: (object: unknown) => unknown
	static create: (proto: unknown, propertiesObject: unknown) => unknown
	static getOwnPropertyDescriptor: (obj: unknown, name: unknown) => unknown
	static defineProperty: (obj: unknown, name: unknown, desc: unknown) => unknown
	static defineProperties: (obj: unknown, props: unknown) => unknown
	static getPrototypeOf: (object: unknown) => unknown
	static setPrototypeOf: (object: unknown, prototype: unknown) => unknown
	static assign: (args: unknown) => unknown
}
declare class Function {
	constructor(args: unknown)
	replaceWith: (newFunc: unknown) => void
	call: (this: unknown, params: unknown) => unknown
	apply: (this: unknown, args: unknown) => unknown
	bind: (this: unknown, params: unknown) => unknown
}
declare class Serial {
	constructor()
	static find: (pin: Pin) => unknown
	setConsole: (force: boolean) => void
	unsetup: () => void
	print: (string: unknown) => void
	println: (string: unknown) => void
	write: (data: unknown) => void
	available: () => number
	read: (chars: number) => unknown
	pipe: (destination: unknown, options: unknown) => void
}
declare var USB: Serial
declare var Serial1: Serial
declare var Serial2: Serial
declare var Serial3: Serial
declare var Serial4: Serial
declare var Serial5: Serial
declare var Serial6: Serial
declare var LoopbackA: Serial
declare var LoopbackB: Serial
declare namespace Telnet {}
declare class Date {
	constructor(args: unknown)
	static now: () => number
	getTimezoneOffset: () => number
	getTime: () => number
	valueOf: () => number
	setTime: (timeValue: number) => number
	getHours: () => number
	getMinutes: () => number
	getSeconds: () => number
	getMilliseconds: () => number
	getDay: () => number
	getDate: () => number
	getMonth: () => number
	getFullYear: () => number
	setHours: (
		hoursValue: number,
		minutesValue: unknown,
		secondsValue: unknown,
		millisecondsValue: unknown
	) => number
	setMinutes: (
		minutesValue: number,
		secondsValue: unknown,
		millisecondsValue: unknown
	) => number
	setSeconds: (secondsValue: number, millisecondsValue: unknown) => number
	setMilliseconds: (millisecondsValue: number) => number
	setDate: (dayValue: number) => number
	setMonth: (yearValue: number, dayValue: unknown) => number
	setFullYear: (
		yearValue: number,
		yearValue2: unknown,
		dayValue: unknown
	) => number
	toString: () => unknown
	toUTCString: () => unknown
	toISOString: () => unknown
	toJSON: () => unknown
	static parse: (str: unknown) => number
}
declare class Flash {
	constructor()
	static getPage: (addr: number) => unknown
	static getFree: () => unknown
	static erasePage: (addr: unknown) => void
	static write: (data: unknown, addr: number) => void
	static read: (length: number, addr: number) => unknown
}
declare class Storage {
	constructor()
	static eraseAll: () => void
	static erase: (name: unknown) => void
	static read: (name: unknown, offset: number, length: number) => unknown
	static readJSON: (name: unknown, noExceptions: boolean) => unknown
	static readArrayBuffer: (name: unknown) => unknown
	static writeJSON: (name: unknown, data: unknown) => boolean
	static list: (regex: unknown) => unknown
	static compact: () => void
	static debug: () => void
	static getFree: () => number
	static open: (name: unknown, mode: unknown) => StorageFile
}
declare class E {
	constructor()
	static getTemperature: () => number
	static getAnalogVRef: () => number
	static nativeCall: (addr: number, sig: unknown, data: unknown) => unknown
	static clip: (x: number, min: number, max: number) => number
	static sum: (arr: unknown) => number
	static variance: (arr: unknown, mean: number) => number
	static convolve: (arr1: unknown, arr2: unknown, offset: number) => number
	static FFT: (arrReal: unknown, arrImage: unknown, inverse: boolean) => void
	static kickWatchdog: () => void
	static getErrorFlags: () => unknown
	static getFlags: () => unknown
	static setFlags: (flags: unknown) => void
	static pipe: (source: unknown, destination: unknown, options: unknown) => void
	static toArrayBuffer: (str: unknown) => ArrayBufferView
	static toString: (args: unknown) => String
	static toJS: (arg: unknown) => String
	static memoryArea: (addr: number, len: number) => String
	static setBootCode: (code: unknown, alwaysExec: boolean) => void
	static setClock: (options: unknown) => number
	static getConsole: () => unknown
	static reverseByte: (x: number) => number
	static dumpTimers: () => void
	static dumpLockedVars: () => void
	static dumpFreeList: () => void
	static dumpFragmentation: () => void
	static dumpVariables: () => void
	static defrag: () => void
	static getAddressOf: (v: unknown, flatAddress: boolean) => number
	static lookupNoCase: (
		haystack: unknown,
		needle: unknown,
		returnKey: boolean
	) => unknown
	static dumpStr: () => String
	static srand: (v: number) => void
	static hwRand: () => number
	static CRC32: (data: unknown) => unknown
	static HSBtoRGB: (
		hue: number,
		sat: number,
		bri: number,
		asArray: boolean
	) => unknown
	static setPassword: (password: unknown) => void
	static lockConsole: () => void
	static setTimeZone: (zone: number) => void
	static asm: (callspec: unknown, assemblycode: unknown) => void
	static compiledC: (code: unknown) => void
	static reboot: () => void
	static setUSBHID: (opts: unknown) => void
	static sendUSBHID: (data: unknown) => boolean
	static getBattery: () => number
	static getRTCPrescaler: (calibrate: boolean) => number
	static unmountSD: () => void
	static openFile: (path: unknown, mode: unknown) => File
}
declare class Error {
	constructor(message: unknown)
	toString: () => unknown
}
declare class SyntaxError {
	constructor(message: unknown)
	toString: () => unknown
}
declare class TypeError {
	constructor(message: unknown)
	toString: () => unknown
}
declare class InternalError {
	constructor(message: unknown)
	toString: () => unknown
}
declare class ReferenceError {
	constructor(message: unknown)
	toString: () => unknown
}

declare class RegExp {
	constructor(regex: unknown, regex2: unknown)
	test: (str: unknown) => boolean
}
declare class String {
	constructor(str: unknown)
	charAt: (pos: number) => unknown
	charCodeAt: (pos: number) => number
	indexOf: (substring: unknown, fromIndex: unknown) => number
	lastIndexOf: (substring: unknown, fromIndex: unknown) => number
	replace: (subStr: unknown, newSubStr: unknown) => unknown
	substring: (start: number, end: unknown) => unknown
	substr: (start: number, len: unknown) => unknown
	slice: (start: number, end: unknown) => unknown
	split: (separator: unknown) => unknown
	toLowerCase: () => unknown
	toUpperCase: () => unknown
	trim: () => String
	startsWith: (searchString: unknown, position: number) => boolean
	endsWith: (searchString: unknown, length: unknown) => boolean
	includes: (substring: unknown, fromIndex: unknown) => boolean
	repeat: (count: number) => String
	static fromCharCode: (code: unknown) => unknown
}
declare class Pin {
	constructor(value: unknown)
	read: () => boolean
	set: () => void
	reset: () => void
	write: (value: boolean) => void
	writeAtTime: (value: boolean, time: number) => void
	getMode: () => unknown
	mode: (mode: unknown) => void
	toggle: () => boolean
}
declare class Modules {
	constructor()
	static getCached: () => unknown
	static removeCached: (id: unknown) => void
	static removeAllCached: () => void
	static addCached: (id: unknown, sourcecode: unknown) => void
}

declare class DataView {
	constructor(buffer: unknown, byteOffset: number, byteLength: number)
	getFloat32: (byteOffset: number, littleEndian: boolean) => unknown
	getFloat64: (byteOffset: number, littleEndian: boolean) => unknown
	getInt8: (byteOffset: number, littleEndian: boolean) => unknown
	getInt16: (byteOffset: number, littleEndian: boolean) => unknown
	getInt32: (byteOffset: number, littleEndian: boolean) => unknown
	getUint8: (byteOffset: number, littleEndian: boolean) => unknown
	getUint16: (byteOffset: number, littleEndian: boolean) => unknown
	getUint32: (byteOffset: number, littleEndian: boolean) => unknown
	setFloat32: (
		byteOffset: number,
		value: unknown,
		littleEndian: boolean
	) => void
	setFloat64: (
		byteOffset: number,
		value: unknown,
		littleEndian: boolean
	) => void
	setInt8: (byteOffset: number, value: unknown, littleEndian: boolean) => void
	setInt16: (byteOffset: number, value: unknown, littleEndian: boolean) => void
	setInt32: (byteOffset: number, value: unknown, littleEndian: boolean) => void
	setUint8: (byteOffset: number, value: unknown, littleEndian: boolean) => void
	setUint16: (byteOffset: number, value: unknown, littleEndian: boolean) => void
	setUint32: (byteOffset: number, value: unknown, littleEndian: boolean) => void
}
declare class Waveform {
	constructor(samples: number, options: unknown)
	startOutput: (output: Pin, freq: number, options: unknown) => void
	startInput: (output: Pin, freq: number, options: unknown) => void
	stop: () => void
}
declare class JSON {
	constructor()
	static stringify: (
		data: unknown,
		replacer: unknown,
		space: unknown
	) => unknown
	static parse: (string: unknown) => unknown
}
declare class OneWire {
	constructor(pin: Pin)
	reset: () => boolean
	select: (rom: unknown) => void
	skip: () => void
	write: (data: unknown, power: boolean) => void
	read: (count: unknown) => unknown
	search: (command: number) => unknown
}

declare class SPI {
	constructor()
	static find: (pin: Pin) => unknown
	send: (data: unknown, nss_pin: Pin) => unknown
	write: (data: unknown) => void
	send4bit: (data: unknown, bit0: number, bit1: number, nss_pin: Pin) => void
	send8bit: (data: unknown, bit0: number, bit1: number, nss_pin: Pin) => void
}
declare var SPI1: SPI
declare var SPI2: SPI
declare var SPI3: SPI
declare class I2C {
	constructor()
	static find: (pin: Pin) => unknown
	setup: (options: unknown) => void
	writeTo: (address: unknown, data: unknown) => void
	readFrom: (address: unknown, quantity: number) => Uint8Array
}
declare var I2C1: I2C
declare var I2C2: I2C
declare var I2C3: I2C
// @ts-ignore
declare class console {
	constructor()
	static log: (text: unknown) => void
}
declare function tv(): void
// @ts-ignore
declare class crypto {
	constructor()
	static SHA1: (message: unknown) => ArrayBuffer
	static SHA224: (message: unknown) => ArrayBuffer
	static SHA256: (message: unknown) => ArrayBuffer
	static SHA384: (message: unknown) => ArrayBuffer
	static SHA512: (message: unknown) => ArrayBuffer
	static PBKDF2: (
		passphrase: unknown,
		salt: unknown,
		options: unknown
	) => ArrayBuffer
}

declare class AES {
	constructor()
	static encrypt: (
		passphrase: unknown,
		key: unknown,
		options: unknown
	) => ArrayBuffer
	static decrypt: (
		passphrase: unknown,
		key: unknown,
		options: unknown
	) => ArrayBuffer
}
declare class NRF {
	constructor()
	static disconnect: () => void
	static sleep: () => void
	static wake: () => void
	static restart: () => void
	static getAddress: () => unknown
	static getBattery: () => number
	static getAdvertisingData: (data: unknown, options: unknown) => unknown
	static setTxPower: (power: number) => void
	static setLowPowerConnection: (lowPower: boolean) => void
	static sendHIDReport: (data: unknown, callback: unknown) => void
	static setWhitelist: (whitelisting: boolean) => void
	static setConnectionInterval: (interval: unknown) => void
}
declare var Bluetooth: Serial
declare class BluetoothRemoteGATTServer {
	constructor()
	disconnect: () => Promise<unknown>
	getPrimaryService: (service: unknown) => Promise<unknown>
	getPrimaryServices: () => Promise<unknown>
}
declare class BluetoothRemoteGATTService {
	constructor()
	getCharacteristic: (characteristic: unknown) => Promise<unknown>
	getCharacteristics: () => Promise<unknown>
}
declare class BluetoothRemoteGATTCharacteristic {
	constructor()
	stopNotifications: () => Promise<unknown>
}
declare class Trig {
	constructor()
	static getPosAtTime: (time: number) => number
	static setup: (pin: Pin, options: unknown) => void
	static setTrigger: (
		num: number,
		pos: number,
		pins: unknown,
		pulseLength: number
	) => void
	static killTrigger: (num: number) => void
	static getTrigger: (num: number) => unknown
	static getRPM: () => number
	static getErrors: () => number
	static getErrorArray: () => unknown
}
declare class Math {
	constructor()
	static E: number
	static PI: number
	static LN2: number
	static LN10: number
	static LOG2E: number
	static LOG10E: number
	static SQRT2: number
	static SQRT1_2: number
	static abs: (x: number) => number
	static acos: (x: number) => number
	static asin: (x: number) => number
	static atan: (x: number) => number
	static atan2: (y: number, x: number) => number
	static cos: (theta: number) => number
	static pow: (x: number, y: number) => number
	static random: () => number
	static round: (x: number) => unknown
	static sin: (theta: number) => number
	static tan: (theta: number) => number
	static sqrt: (x: number) => number
	static ceil: (x: number) => number
	static floor: (x: number) => number
	static exp: (x: number) => number
	static log: (x: number) => number
	static clip: (x: number, min: number, max: number) => number
	static wrap: (x: number, max: number) => number
	static min: (args: unknown) => number
	static max: (args: unknown) => number
}
declare class heatshrink {
	constructor()
	static compress: (data: unknown) => ArrayBuffer
	static decompress: (data: unknown) => ArrayBuffer
}
declare class Pixl {
	constructor()
	static getBatteryPercentage: () => number
	static setContrast: (c: number) => void
	static setLCDPower: (isOn: boolean) => void
	static lcdw: (c: number) => void
	static menu: (menu: unknown) => unknown
}
declare function neopixel(): void
declare class http {
	constructor()
	static createServer: (callback: unknown) => httpSrv
}
declare class httpSrv {
	constructor()
	listen: (port: number) => unknown
	close: () => void
}
declare class httpSRq {
	constructor()
	available: () => number
	read: (chars: number) => unknown
	pipe: (destination: unknown, options: unknown) => void
}
declare class httpSRs {
	constructor()
	write: (data: unknown) => boolean
	end: (data: unknown) => void
	writeHead: (statusCode: number, headers: unknown) => void
	setHeader: (name: unknown, value: unknown) => void
}
declare class httpCRq {
	constructor()
	write: (data: unknown) => boolean
	end: (data: unknown) => void
}
declare class httpCRs {
	constructor()
	available: () => number
	read: (chars: number) => unknown
	pipe: (destination: unknown, options: unknown) => void
}
declare class CC3000 {
	constructor()
	static connect: (spi: unknown, cs: Pin, en: Pin, irq: Pin) => WLAN
}
declare class WLAN {
	constructor()
	connect: (ap: unknown, key: unknown, callback: unknown) => boolean
	disconnect: () => void
	reconnect: () => void
	getIP: () => unknown
	setIP: (options: unknown) => boolean
}
declare class TelnetServer {
	constructor()
	static setOptions: (options: unknown) => void
}
declare class WIZnet {
	constructor()
	static connect: (spi: unknown, cs: Pin) => Ethernet
}
declare class Ethernet {
	constructor()
	getIP: (options: unknown) => unknown
	setIP: (options: unknown, callback: unknown) => boolean
	setHostname: (hostname: unknown, callback: unknown) => boolean
	getHostname: (callback: unknown) => unknown
	getStatus: (options: unknown) => unknown
}
declare function NetworkJS(): void
declare class url {
	constructor()
	static parse: (urlStr: unknown, parseQuery: boolean) => unknown
}
declare class net {
	constructor()
	static createServer: (callback: unknown) => Server
	static connect: (options: unknown, callback: unknown) => Socket
}
declare class Server {
	constructor()
	listen: (port: number) => unknown
	close: () => void
}
declare class Socket {
	constructor()
	available: () => number
	read: (chars: number) => unknown
	pipe: (destination: unknown, options: unknown) => void
	end: (data: unknown) => void
}
declare class dgram {
	constructor()
	static createSocket: (type: unknown, callback: unknown) => dgramSocket
}
declare class dgramSocket {
	constructor()
	send: (
		buffer: unknown,
		offset: unknown,
		length: unknown,
		args: unknown
	) => void
	bind: (port: number, callback: unknown) => unknown
	close: () => void
	addMembership: (group: unknown, ip: unknown) => void
}
declare function tls(): void
declare class WioLTE {
	constructor()
	static LED: (red: number, green: number, blue: number) => void
	static setGrovePower: (onoff: boolean) => void
	static setLEDPower: (onoff: boolean) => void
}
declare class tensorflow {
	constructor()
	static create: (arenaSize: number, model: unknown) => TFMicroInterpreter
}
declare class TFMicroInterpreter {
	constructor()
	getInput: () => ArrayBufferView
	getOutput: () => ArrayBufferView
	invoke: () => void
}
declare class Bangle {
	constructor()
	static setLCDPower: (isOn: boolean) => void
	static setLCDTimeout: (isOn: number) => void
	static setPollInterval: (interval: number) => void
	static setLCDPalette: (palette: unknown) => void
	static setGestureOptions: (options: unknown) => void
	static isLCDOn: () => boolean
	static isCharging: () => boolean
	static lcdWr: (cmd: number, data: unknown) => void
	static dbg: () => unknown
	static accelWr: (reg: number, data: number) => void
	static accelRd: (reg: number, cnt: number) => unknown
	static project: (latlong: unknown) => unknown
	static buzz: (time: number, strength: number) => Promise<unknown>
	static off: () => void
	static setLCDBrightness: (brightness: number) => void
	static setLCDMode: (mode: unknown) => void
	static getLCDMode: () => unknown
	static setLCDOffset: (y: number) => void
	static setOptions: (options: unknown) => void
	static getCompass: () => unknown
	static getAccel: () => unknown
	static F_BEEPSET: boolean
	static compassWr: (reg: number, data: number) => void
	static ioWr: (mask: number, isOn: number) => void
	static beep: (time: number, freq: number) => Promise<unknown>
	static getLogo: () => unknown
	static loadWidgets: () => void
	static drawWidgets: () => void
	static showLauncher: () => void
}
declare class Microbit {
	constructor()
	static SPEAKER: Pin
	static MIC: Pin
	static MIC_ENABLE: Pin
	static mag: () => unknown
	static accel: () => unknown
	static accelWr: (addr: number, data: number) => void
	static accelOn: () => void
	static accelOff: () => void
	static play: (
		waveform: unknown,
		samplesPerSecond: unknown,
		callback: unknown
	) => void
	static record: (
		samplesPerSecond: unknown,
		callback: unknown,
		samples: unknown
	) => void
}
declare class fs {
	constructor()
	static pipe: (source: unknown, destination: unknown, options: unknown) => void
	static readdir: (path: unknown) => unknown
	static readdirSync: (path: unknown) => unknown
	static writeFile: (path: unknown, data: unknown) => boolean
	static writeFileSync: (path: unknown, data: unknown) => boolean
	static appendFile: (path: unknown, data: unknown) => boolean
	static appendFileSync: (path: unknown, data: unknown) => boolean
	static readFile: (path: unknown) => unknown
	static readFileSync: (path: unknown) => unknown
	static unlink: (path: unknown) => boolean
	static unlinkSync: (path: unknown) => boolean
	static statSync: (path: unknown) => unknown
	static mkdir: (path: unknown) => boolean
	static mkdirSync: (path: unknown) => boolean
}
declare class File {
	constructor()
	close: () => void
	write: (buffer: unknown) => number
	read: (length: number) => unknown
	skip: (nBytes: number) => void
	seek: (nBytes: number) => void
	pipe: (destination: unknown, options: unknown) => void
}
declare var Terminal: Serial
declare class Graphics {
	constructor()
	flip: (all: boolean) => void
	getWidth: () => number
	getHeight: () => number
	reset: () => Graphics
	clear: (reset: boolean) => Graphics
	fillRect: (x1: number, y1: number, x2: number, y2: number) => Graphics
	clearRect: (x1: number, y1: number, x2: number, y2: number) => Graphics
	drawRect: (x1: number, y1: number, x2: number, y2: number) => Graphics
	fillCircle: (x: number, y: number, rad: number) => Graphics
	drawCircle: (x: number, y: number, rad: number) => Graphics
	fillEllipse: (x1: number, y1: number, x2: number, y2: number) => Graphics
	drawEllipse: (x1: number, y1: number, x2: number, y2: number) => Graphics
	getPixel: (x: number, y: number) => number
	setPixel: (x: number, y: number, col: unknown) => Graphics
	setColor: (r: unknown, g: unknown, b: unknown) => Graphics
	setBgColor: (r: unknown, g: unknown, b: unknown) => Graphics
	getColor: () => number
	getBgColor: () => number
	setClipRect: (x1: number, y1: number, x2: number, y2: number) => Graphics
	setFontBitmap: () => Graphics
	setFontVector: (size: number) => Graphics
	setFontCustom: (
		bitmap: unknown,
		firstChar: number,
		width: unknown,
		height: number
	) => Graphics
	setFontAlign: (x: number, y: number, rotation: number) => Graphics
	setFont: (name: unknown, size: number) => Graphics
	getFont: () => String
	getFonts: () => Array<unknown>
	getFontHeight: () => number
	drawString: (str: unknown, x: number, y: number, solid: boolean) => Graphics
	stringWidth: (str: unknown) => number
	drawLine: (x1: number, y1: number, x2: number, y2: number) => Graphics
	drawLineAA: (x1: number, y1: number, x2: number, y2: number) => Graphics
	lineTo: (x: number, y: number) => Graphics
	moveTo: (x: number, y: number) => Graphics
	drawPoly: (poly: unknown, closed: boolean) => Graphics
	drawPolyAA: (poly: unknown, closed: boolean) => Graphics
	setRotation: (rotation: number, reflect: boolean) => Graphics
	asImage: (type: unknown) => unknown
	getModified: (reset: boolean) => unknown
	scroll: (x: number, y: number) => Graphics
	asBMP: () => unknown
	asURL: () => unknown
	dump: () => void
	quadraticBezier: (arr: unknown, options: unknown) => unknown
	static getInstance: () => unknown
	static createArrayBuffer: (
		width: number,
		height: number,
		bpp: number,
		options: unknown
	) => Graphics
	static createCallback: (
		width: number,
		height: number,
		bpp: number,
		callback: unknown
	) => Graphics
	static createSDL: (width: number, height: number, bpp: number) => Graphics
}
declare class Puck {
	constructor()
	static mag: () => unknown
	static magTemp: () => number
	static magOff: () => void
	static magWr: (reg: number, data: number) => void
	static magRd: (reg: number) => number
	static getTemperature: () => number
	static accelOff: () => void
	static accel: () => unknown
	static accelWr: (reg: number, data: number) => void
	static accelRd: (reg: number) => number
	static IR: (data: unknown, cathode: Pin, anode: Pin) => void
	static capSense: (tx: Pin, rx: Pin) => number
	static light: () => number
	static getBatteryPercentage: () => number
	static selfTest: () => boolean
}
declare class Badge {
	constructor()
	static capSense: (corner: number) => number
	static getBatteryPercentage: () => number
	static setContrast: (c: number) => void
}
declare function Boolean(value: unknown): boolean
declare var NaN: number
declare var Infinity: number
declare var HIGH: number
declare var LOW: number
declare function peek8(addr: number, count: number): unknown
declare function poke8(addr: number, value: unknown): void
declare function peek16(addr: number, count: number): unknown
declare function poke16(addr: number, value: unknown): void
declare function peek32(addr: number, count: number): unknown
declare function poke32(addr: number, value: unknown): void
declare function analogRead(pin: Pin): number
declare function analogWrite(pin: Pin, value: number, options: unknown): void
declare function digitalPulse(pin: Pin, value: boolean, time: unknown): void
declare function digitalWrite(pin: Pin, value: number): void
declare function digitalRead(pin: Pin): number
declare function pinMode(pin: Pin, mode: unknown, automatic: boolean): void
declare function getPinMode(pin: Pin): unknown
declare function clearWatch(id: unknown): void
declare function setBusyIndicator(pin: Pin): void
declare function setSleepIndicator(pin: Pin): void
declare function setDeepSleep(sleep: boolean): void
declare function trace(root: unknown): void
declare function dump(): void
declare function load(filename: unknown): void
declare function save(): void
declare function reset(clearFlash: boolean): void
declare function print(text: unknown): void
declare function edit(funcName: unknown): void
declare function echo(echoOn: boolean): void
declare function getTime(): number
declare function getSerial(): unknown
declare function clearInterval(id: unknown): void
declare function clearTimeout(id: unknown): void
declare function changeInterval(id: unknown, time: number): void
declare function eval(code: unknown): unknown
declare function parseInt(string: unknown, radix: unknown): unknown
declare function parseFloat(string: unknown): number
declare function isFinite(x: unknown): boolean
declare function isNaN(x: unknown): boolean
declare function btoa(binaryData: unknown): unknown
declare function atob(base64Data: unknown): unknown
declare function encodeURIComponent(str: unknown): unknown
declare function decodeURIComponent(str: unknown): unknown
declare var SDA: Pin
declare var SCL: Pin
declare var MOS1: Pin
declare var MOS2: Pin
declare var MOS3: Pin
declare var MOS4: Pin
declare var IOEXT0: Pin
declare var IOEXT1: Pin
declare var IOEXT2: Pin
declare var IOEXT3: Pin
declare var VIBRATE: Pin
declare function acceleration(): unknown
declare function compass(): unknown
declare var FET: Pin
declare var BTNA: Pin
declare var BTNB: Pin
declare var BTNU: Pin
declare var BTND: Pin
declare var BTNL: Pin
declare var BTNR: Pin
declare var CORNER1: Pin
declare var CORNER2: Pin
declare var CORNER3: Pin
declare var CORNER4: Pin
declare var CORNER5: Pin
declare var CORNER6: Pin
