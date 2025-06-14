/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";
var $protobuf = require("protobufjs/minimal");
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
$root.SyncAction = (function() {
/**
* Namespace SyncAction.
* @exports SyncAction
* @namespace
*/
var SyncAction = {};
SyncAction.PatchDebugData = (function() {
/**
* Properties of a PatchDebugData.
* @memberof SyncAction
* @interface IPatchDebugData
* @property {Uint8Array|null} [currentLthash] PatchDebugData currentLthash
* @property {Uint8Array|null} [newLthash] PatchDebugData newLthash
* @property {Uint8Array|null} [patchVersion] PatchDebugData patchVersion
* @property {Uint8Array|null} [collectionName] PatchDebugData collectionName
* @property {Uint8Array|null} [firstFourBytesFromAHashOfSnapshotMacKey] PatchDebugData firstFourBytesFromAHashOfSnapshotMacKey
* @property {Uint8Array|null} [newLthashSubtract] PatchDebugData newLthashSubtract
* @property {number|null} [numberAdd] PatchDebugData numberAdd
* @property {number|null} [numberRemove] PatchDebugData numberRemove
* @property {number|null} [numberOverride] PatchDebugData numberOverride
* @property {SyncAction.PatchDebugData.Platform|null} [senderPlatform] PatchDebugData senderPlatform
* @property {boolean|null} [isSenderPrimary] PatchDebugData isSenderPrimary
*/
/**
* Constructs a new PatchDebugData.
* @memberof SyncAction
* @classdesc Represents a PatchDebugData.
* @implements IPatchDebugData
* @constructor
* @param {SyncAction.IPatchDebugData=} [properties] Properties to set
*/
function PatchDebugData(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* PatchDebugData currentLthash.
* @member {Uint8Array|null|undefined} currentLthash
* @memberof SyncAction.PatchDebugData
* @instance
*/
PatchDebugData.prototype.currentLthash = null;
/**
* PatchDebugData newLthash.
* @member {Uint8Array|null|undefined} newLthash
* @memberof SyncAction.PatchDebugData
* @instance
*/
PatchDebugData.prototype.newLthash = null;
/**
* PatchDebugData patchVersion.
* @member {Uint8Array|null|undefined} patchVersion
* @memberof SyncAction.PatchDebugData
* @instance
*/
PatchDebugData.prototype.patchVersion = null;
/**
* PatchDebugData collectionName.
* @member {Uint8Array|null|undefined} collectionName
* @memberof SyncAction.PatchDebugData
* @instance
*/
PatchDebugData.prototype.collectionName = null;
/**
* PatchDebugData firstFourBytesFromAHashOfSnapshotMacKey.
* @member {Uint8Array|null|undefined} firstFourBytesFromAHashOfSnapshotMacKey
* @memberof SyncAction.PatchDebugData
* @instance
*/
PatchDebugData.prototype.firstFourBytesFromAHashOfSnapshotMacKey = null;
/**
* PatchDebugData newLthashSubtract.
* @member {Uint8Array|null|undefined} newLthashSubtract
* @memberof SyncAction.PatchDebugData
* @instance
*/
PatchDebugData.prototype.newLthashSubtract = null;
/**
* PatchDebugData numberAdd.
* @member {number|null|undefined} numberAdd
* @memberof SyncAction.PatchDebugData
* @instance
*/
PatchDebugData.prototype.numberAdd = null;
/**
* PatchDebugData numberRemove.
* @member {number|null|undefined} numberRemove
* @memberof SyncAction.PatchDebugData
* @instance
*/
PatchDebugData.prototype.numberRemove = null;
/**
* PatchDebugData numberOverride.
* @member {number|null|undefined} numberOverride
* @memberof SyncAction.PatchDebugData
* @instance
*/
PatchDebugData.prototype.numberOverride = null;
/**
* PatchDebugData senderPlatform.
* @member {SyncAction.PatchDebugData.Platform|null|undefined} senderPlatform
* @memberof SyncAction.PatchDebugData
* @instance
*/
PatchDebugData.prototype.senderPlatform = null;
/**
* PatchDebugData isSenderPrimary.
* @member {boolean|null|undefined} isSenderPrimary
* @memberof SyncAction.PatchDebugData
* @instance
*/
PatchDebugData.prototype.isSenderPrimary = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* PatchDebugData _currentLthash.
* @member {"currentLthash"|undefined} _currentLthash
* @memberof SyncAction.PatchDebugData
* @instance
*/
Object.defineProperty(PatchDebugData.prototype, "_currentLthash", {
get: $util.oneOfGetter($oneOfFields = ["currentLthash"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* PatchDebugData _newLthash.
* @member {"newLthash"|undefined} _newLthash
* @memberof SyncAction.PatchDebugData
* @instance
*/
Object.defineProperty(PatchDebugData.prototype, "_newLthash", {
get: $util.oneOfGetter($oneOfFields = ["newLthash"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* PatchDebugData _patchVersion.
* @member {"patchVersion"|undefined} _patchVersion
* @memberof SyncAction.PatchDebugData
* @instance
*/
Object.defineProperty(PatchDebugData.prototype, "_patchVersion", {
get: $util.oneOfGetter($oneOfFields = ["patchVersion"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* PatchDebugData _collectionName.
* @member {"collectionName"|undefined} _collectionName
* @memberof SyncAction.PatchDebugData
* @instance
*/
Object.defineProperty(PatchDebugData.prototype, "_collectionName", {
get: $util.oneOfGetter($oneOfFields = ["collectionName"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* PatchDebugData _firstFourBytesFromAHashOfSnapshotMacKey.
* @member {"firstFourBytesFromAHashOfSnapshotMacKey"|undefined} _firstFourBytesFromAHashOfSnapshotMacKey
* @memberof SyncAction.PatchDebugData
* @instance
*/
Object.defineProperty(PatchDebugData.prototype, "_firstFourBytesFromAHashOfSnapshotMacKey", {
get: $util.oneOfGetter($oneOfFields = ["firstFourBytesFromAHashOfSnapshotMacKey"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* PatchDebugData _newLthashSubtract.
* @member {"newLthashSubtract"|undefined} _newLthashSubtract
* @memberof SyncAction.PatchDebugData
* @instance
*/
Object.defineProperty(PatchDebugData.prototype, "_newLthashSubtract", {
get: $util.oneOfGetter($oneOfFields = ["newLthashSubtract"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* PatchDebugData _numberAdd.
* @member {"numberAdd"|undefined} _numberAdd
* @memberof SyncAction.PatchDebugData
* @instance
*/
Object.defineProperty(PatchDebugData.prototype, "_numberAdd", {
get: $util.oneOfGetter($oneOfFields = ["numberAdd"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* PatchDebugData _numberRemove.
* @member {"numberRemove"|undefined} _numberRemove
* @memberof SyncAction.PatchDebugData
* @instance
*/
Object.defineProperty(PatchDebugData.prototype, "_numberRemove", {
get: $util.oneOfGetter($oneOfFields = ["numberRemove"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* PatchDebugData _numberOverride.
* @member {"numberOverride"|undefined} _numberOverride
* @memberof SyncAction.PatchDebugData
* @instance
*/
Object.defineProperty(PatchDebugData.prototype, "_numberOverride", {
get: $util.oneOfGetter($oneOfFields = ["numberOverride"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* PatchDebugData _senderPlatform.
* @member {"senderPlatform"|undefined} _senderPlatform
* @memberof SyncAction.PatchDebugData
* @instance
*/
Object.defineProperty(PatchDebugData.prototype, "_senderPlatform", {
get: $util.oneOfGetter($oneOfFields = ["senderPlatform"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* PatchDebugData _isSenderPrimary.
* @member {"isSenderPrimary"|undefined} _isSenderPrimary
* @memberof SyncAction.PatchDebugData
* @instance
*/
Object.defineProperty(PatchDebugData.prototype, "_isSenderPrimary", {
get: $util.oneOfGetter($oneOfFields = ["isSenderPrimary"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new PatchDebugData instance using the specified properties.
* @function create
* @memberof SyncAction.PatchDebugData
* @static
* @param {SyncAction.IPatchDebugData=} [properties] Properties to set
* @returns {SyncAction.PatchDebugData} PatchDebugData instance
*/
PatchDebugData.create = function create(properties) {
return new PatchDebugData(properties);
};
/**
* Encodes the specified PatchDebugData message. Does not implicitly {@link SyncAction.PatchDebugData.verify|verify} messages.
* @function encode
* @memberof SyncAction.PatchDebugData
* @static
* @param {SyncAction.IPatchDebugData} message PatchDebugData message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PatchDebugData.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.currentLthash != null && Object.hasOwnProperty.call(message, "currentLthash"))
writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.currentLthash);
if (message.newLthash != null && Object.hasOwnProperty.call(message, "newLthash"))
writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.newLthash);
if (message.patchVersion != null && Object.hasOwnProperty.call(message, "patchVersion"))
writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.patchVersion);
if (message.collectionName != null && Object.hasOwnProperty.call(message, "collectionName"))
writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.collectionName);
if (message.firstFourBytesFromAHashOfSnapshotMacKey != null && Object.hasOwnProperty.call(message, "firstFourBytesFromAHashOfSnapshotMacKey"))
writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.firstFourBytesFromAHashOfSnapshotMacKey);
if (message.newLthashSubtract != null && Object.hasOwnProperty.call(message, "newLthashSubtract"))
writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.newLthashSubtract);
if (message.numberAdd != null && Object.hasOwnProperty.call(message, "numberAdd"))
writer.uint32(/* id 7, wireType 0 =*/56).int32(message.numberAdd);
if (message.numberRemove != null && Object.hasOwnProperty.call(message, "numberRemove"))
writer.uint32(/* id 8, wireType 0 =*/64).int32(message.numberRemove);
if (message.numberOverride != null && Object.hasOwnProperty.call(message, "numberOverride"))
writer.uint32(/* id 9, wireType 0 =*/72).int32(message.numberOverride);
if (message.senderPlatform != null && Object.hasOwnProperty.call(message, "senderPlatform"))
writer.uint32(/* id 10, wireType 0 =*/80).int32(message.senderPlatform);
if (message.isSenderPrimary != null && Object.hasOwnProperty.call(message, "isSenderPrimary"))
writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isSenderPrimary);
return writer;
};
/**
* Encodes the specified PatchDebugData message, length delimited. Does not implicitly {@link SyncAction.PatchDebugData.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.PatchDebugData
* @static
* @param {SyncAction.IPatchDebugData} message PatchDebugData message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PatchDebugData.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a PatchDebugData message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.PatchDebugData
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.PatchDebugData} PatchDebugData
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PatchDebugData.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.PatchDebugData();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.currentLthash = reader.bytes();
break;
}
case 2: {
message.newLthash = reader.bytes();
break;
}
case 3: {
message.patchVersion = reader.bytes();
break;
}
case 4: {
message.collectionName = reader.bytes();
break;
}
case 5: {
message.firstFourBytesFromAHashOfSnapshotMacKey = reader.bytes();
break;
}
case 6: {
message.newLthashSubtract = reader.bytes();
break;
}
case 7: {
message.numberAdd = reader.int32();
break;
}
case 8: {
message.numberRemove = reader.int32();
break;
}
case 9: {
message.numberOverride = reader.int32();
break;
}
case 10: {
message.senderPlatform = reader.int32();
break;
}
case 11: {
message.isSenderPrimary = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a PatchDebugData message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.PatchDebugData
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.PatchDebugData} PatchDebugData
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PatchDebugData.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a PatchDebugData message.
* @function verify
* @memberof SyncAction.PatchDebugData
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
PatchDebugData.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.currentLthash != null && message.hasOwnProperty("currentLthash")) {
properties._currentLthash = 1;
if (!(message.currentLthash && typeof message.currentLthash.length === "number" || $util.isString(message.currentLthash)))
return "currentLthash: buffer expected";
}
if (message.newLthash != null && message.hasOwnProperty("newLthash")) {
properties._newLthash = 1;
if (!(message.newLthash && typeof message.newLthash.length === "number" || $util.isString(message.newLthash)))
return "newLthash: buffer expected";
}
if (message.patchVersion != null && message.hasOwnProperty("patchVersion")) {
properties._patchVersion = 1;
if (!(message.patchVersion && typeof message.patchVersion.length === "number" || $util.isString(message.patchVersion)))
return "patchVersion: buffer expected";
}
if (message.collectionName != null && message.hasOwnProperty("collectionName")) {
properties._collectionName = 1;
if (!(message.collectionName && typeof message.collectionName.length === "number" || $util.isString(message.collectionName)))
return "collectionName: buffer expected";
}
if (message.firstFourBytesFromAHashOfSnapshotMacKey != null && message.hasOwnProperty("firstFourBytesFromAHashOfSnapshotMacKey")) {
properties._firstFourBytesFromAHashOfSnapshotMacKey = 1;
if (!(message.firstFourBytesFromAHashOfSnapshotMacKey && typeof message.firstFourBytesFromAHashOfSnapshotMacKey.length === "number" || $util.isString(message.firstFourBytesFromAHashOfSnapshotMacKey)))
return "firstFourBytesFromAHashOfSnapshotMacKey: buffer expected";
}
if (message.newLthashSubtract != null && message.hasOwnProperty("newLthashSubtract")) {
properties._newLthashSubtract = 1;
if (!(message.newLthashSubtract && typeof message.newLthashSubtract.length === "number" || $util.isString(message.newLthashSubtract)))
return "newLthashSubtract: buffer expected";
}
if (message.numberAdd != null && message.hasOwnProperty("numberAdd")) {
properties._numberAdd = 1;
if (!$util.isInteger(message.numberAdd))
return "numberAdd: integer expected";
}
if (message.numberRemove != null && message.hasOwnProperty("numberRemove")) {
properties._numberRemove = 1;
if (!$util.isInteger(message.numberRemove))
return "numberRemove: integer expected";
}
if (message.numberOverride != null && message.hasOwnProperty("numberOverride")) {
properties._numberOverride = 1;
if (!$util.isInteger(message.numberOverride))
return "numberOverride: integer expected";
}
if (message.senderPlatform != null && message.hasOwnProperty("senderPlatform")) {
properties._senderPlatform = 1;
switch (message.senderPlatform) {
default:
return "senderPlatform: enum value expected";
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
break;
}
}
if (message.isSenderPrimary != null && message.hasOwnProperty("isSenderPrimary")) {
properties._isSenderPrimary = 1;
if (typeof message.isSenderPrimary !== "boolean")
return "isSenderPrimary: boolean expected";
}
return null;
};
/**
* Creates a PatchDebugData message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.PatchDebugData
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.PatchDebugData} PatchDebugData
*/
PatchDebugData.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.PatchDebugData)
return object;
var message = new $root.SyncAction.PatchDebugData();
if (object.currentLthash != null)
if (typeof object.currentLthash === "string")
$util.base64.decode(object.currentLthash, message.currentLthash = $util.newBuffer($util.base64.length(object.currentLthash)), 0);
else if (object.currentLthash.length >= 0)
message.currentLthash = object.currentLthash;
if (object.newLthash != null)
if (typeof object.newLthash === "string")
$util.base64.decode(object.newLthash, message.newLthash = $util.newBuffer($util.base64.length(object.newLthash)), 0);
else if (object.newLthash.length >= 0)
message.newLthash = object.newLthash;
if (object.patchVersion != null)
if (typeof object.patchVersion === "string")
$util.base64.decode(object.patchVersion, message.patchVersion = $util.newBuffer($util.base64.length(object.patchVersion)), 0);
else if (object.patchVersion.length >= 0)
message.patchVersion = object.patchVersion;
if (object.collectionName != null)
if (typeof object.collectionName === "string")
$util.base64.decode(object.collectionName, message.collectionName = $util.newBuffer($util.base64.length(object.collectionName)), 0);
else if (object.collectionName.length >= 0)
message.collectionName = object.collectionName;
if (object.firstFourBytesFromAHashOfSnapshotMacKey != null)
if (typeof object.firstFourBytesFromAHashOfSnapshotMacKey === "string")
$util.base64.decode(object.firstFourBytesFromAHashOfSnapshotMacKey, message.firstFourBytesFromAHashOfSnapshotMacKey = $util.newBuffer($util.base64.length(object.firstFourBytesFromAHashOfSnapshotMacKey)), 0);
else if (object.firstFourBytesFromAHashOfSnapshotMacKey.length >= 0)
message.firstFourBytesFromAHashOfSnapshotMacKey = object.firstFourBytesFromAHashOfSnapshotMacKey;
if (object.newLthashSubtract != null)
if (typeof object.newLthashSubtract === "string")
$util.base64.decode(object.newLthashSubtract, message.newLthashSubtract = $util.newBuffer($util.base64.length(object.newLthashSubtract)), 0);
else if (object.newLthashSubtract.length >= 0)
message.newLthashSubtract = object.newLthashSubtract;
if (object.numberAdd != null)
message.numberAdd = object.numberAdd | 0;
if (object.numberRemove != null)
message.numberRemove = object.numberRemove | 0;
if (object.numberOverride != null)
message.numberOverride = object.numberOverride | 0;
switch (object.senderPlatform) {
default:
if (typeof object.senderPlatform === "number") {
message.senderPlatform = object.senderPlatform;
break;
}
break;
case "ANDROID":
case 0:
message.senderPlatform = 0;
break;
case "SMBA":
case 1:
message.senderPlatform = 1;
break;
case "IPHONE":
case 2:
message.senderPlatform = 2;
break;
case "SMBI":
case 3:
message.senderPlatform = 3;
break;
case "WEB":
case 4:
message.senderPlatform = 4;
break;
case "UWP":
case 5:
message.senderPlatform = 5;
break;
case "DARWIN":
case 6:
message.senderPlatform = 6;
break;
case "IPAD":
case 7:
message.senderPlatform = 7;
break;
case "WEAROS":
case 8:
message.senderPlatform = 8;
break;
}
if (object.isSenderPrimary != null)
message.isSenderPrimary = Boolean(object.isSenderPrimary);
return message;
};
/**
* Creates a plain object from a PatchDebugData message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.PatchDebugData
* @static
* @param {SyncAction.PatchDebugData} message PatchDebugData
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
PatchDebugData.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.currentLthash != null && message.hasOwnProperty("currentLthash")) {
object.currentLthash = options.bytes === String ? $util.base64.encode(message.currentLthash, 0, message.currentLthash.length) : options.bytes === Array ? Array.prototype.slice.call(message.currentLthash) : message.currentLthash;
if (options.oneofs)
object._currentLthash = "currentLthash";
}
if (message.newLthash != null && message.hasOwnProperty("newLthash")) {
object.newLthash = options.bytes === String ? $util.base64.encode(message.newLthash, 0, message.newLthash.length) : options.bytes === Array ? Array.prototype.slice.call(message.newLthash) : message.newLthash;
if (options.oneofs)
object._newLthash = "newLthash";
}
if (message.patchVersion != null && message.hasOwnProperty("patchVersion")) {
object.patchVersion = options.bytes === String ? $util.base64.encode(message.patchVersion, 0, message.patchVersion.length) : options.bytes === Array ? Array.prototype.slice.call(message.patchVersion) : message.patchVersion;
if (options.oneofs)
object._patchVersion = "patchVersion";
}
if (message.collectionName != null && message.hasOwnProperty("collectionName")) {
object.collectionName = options.bytes === String ? $util.base64.encode(message.collectionName, 0, message.collectionName.length) : options.bytes === Array ? Array.prototype.slice.call(message.collectionName) : message.collectionName;
if (options.oneofs)
object._collectionName = "collectionName";
}
if (message.firstFourBytesFromAHashOfSnapshotMacKey != null && message.hasOwnProperty("firstFourBytesFromAHashOfSnapshotMacKey")) {
object.firstFourBytesFromAHashOfSnapshotMacKey = options.bytes === String ? $util.base64.encode(message.firstFourBytesFromAHashOfSnapshotMacKey, 0, message.firstFourBytesFromAHashOfSnapshotMacKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.firstFourBytesFromAHashOfSnapshotMacKey) : message.firstFourBytesFromAHashOfSnapshotMacKey;
if (options.oneofs)
object._firstFourBytesFromAHashOfSnapshotMacKey = "firstFourBytesFromAHashOfSnapshotMacKey";
}
if (message.newLthashSubtract != null && message.hasOwnProperty("newLthashSubtract")) {
object.newLthashSubtract = options.bytes === String ? $util.base64.encode(message.newLthashSubtract, 0, message.newLthashSubtract.length) : options.bytes === Array ? Array.prototype.slice.call(message.newLthashSubtract) : message.newLthashSubtract;
if (options.oneofs)
object._newLthashSubtract = "newLthashSubtract";
}
if (message.numberAdd != null && message.hasOwnProperty("numberAdd")) {
object.numberAdd = message.numberAdd;
if (options.oneofs)
object._numberAdd = "numberAdd";
}
if (message.numberRemove != null && message.hasOwnProperty("numberRemove")) {
object.numberRemove = message.numberRemove;
if (options.oneofs)
object._numberRemove = "numberRemove";
}
if (message.numberOverride != null && message.hasOwnProperty("numberOverride")) {
object.numberOverride = message.numberOverride;
if (options.oneofs)
object._numberOverride = "numberOverride";
}
if (message.senderPlatform != null && message.hasOwnProperty("senderPlatform")) {
object.senderPlatform = options.enums === String ? $root.SyncAction.PatchDebugData.Platform[message.senderPlatform] === undefined ? message.senderPlatform : $root.SyncAction.PatchDebugData.Platform[message.senderPlatform] : message.senderPlatform;
if (options.oneofs)
object._senderPlatform = "senderPlatform";
}
if (message.isSenderPrimary != null && message.hasOwnProperty("isSenderPrimary")) {
object.isSenderPrimary = message.isSenderPrimary;
if (options.oneofs)
object._isSenderPrimary = "isSenderPrimary";
}
return object;
};
/**
* Converts this PatchDebugData to JSON.
* @function toJSON
* @memberof SyncAction.PatchDebugData
* @instance
* @returns {Object.<string,*>} JSON object
*/
PatchDebugData.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for PatchDebugData
* @function getTypeUrl
* @memberof SyncAction.PatchDebugData
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
PatchDebugData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.PatchDebugData";
};
/**
* Platform enum.
* @name SyncAction.PatchDebugData.Platform
* @enum {number}
* @property {number} ANDROID=0 ANDROID value
* @property {number} SMBA=1 SMBA value
* @property {number} IPHONE=2 IPHONE value
* @property {number} SMBI=3 SMBI value
* @property {number} WEB=4 WEB value
* @property {number} UWP=5 UWP value
* @property {number} DARWIN=6 DARWIN value
* @property {number} IPAD=7 IPAD value
* @property {number} WEAROS=8 WEAROS value
*/
PatchDebugData.Platform = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "ANDROID"] = 0;
values[valuesById[1] = "SMBA"] = 1;
values[valuesById[2] = "IPHONE"] = 2;
values[valuesById[3] = "SMBI"] = 3;
values[valuesById[4] = "WEB"] = 4;
values[valuesById[5] = "UWP"] = 5;
values[valuesById[6] = "DARWIN"] = 6;
values[valuesById[7] = "IPAD"] = 7;
values[valuesById[8] = "WEAROS"] = 8;
return values;
})();
return PatchDebugData;
})();
SyncAction.SyncActionData = (function() {
/**
* Properties of a SyncActionData.
* @memberof SyncAction
* @interface ISyncActionData
* @property {Uint8Array|null} [index] SyncActionData index
* @property {SyncAction.ISyncActionValue|null} [value] SyncActionData value
* @property {Uint8Array|null} [padding] SyncActionData padding
* @property {number|null} [version] SyncActionData version
*/
/**
* Constructs a new SyncActionData.
* @memberof SyncAction
* @classdesc Represents a SyncActionData.
* @implements ISyncActionData
* @constructor
* @param {SyncAction.ISyncActionData=} [properties] Properties to set
*/
function SyncActionData(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* SyncActionData index.
* @member {Uint8Array|null|undefined} index
* @memberof SyncAction.SyncActionData
* @instance
*/
SyncActionData.prototype.index = null;
/**
* SyncActionData value.
* @member {SyncAction.ISyncActionValue|null|undefined} value
* @memberof SyncAction.SyncActionData
* @instance
*/
SyncActionData.prototype.value = null;
/**
* SyncActionData padding.
* @member {Uint8Array|null|undefined} padding
* @memberof SyncAction.SyncActionData
* @instance
*/
SyncActionData.prototype.padding = null;
/**
* SyncActionData version.
* @member {number|null|undefined} version
* @memberof SyncAction.SyncActionData
* @instance
*/
SyncActionData.prototype.version = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* SyncActionData _index.
* @member {"index"|undefined} _index
* @memberof SyncAction.SyncActionData
* @instance
*/
Object.defineProperty(SyncActionData.prototype, "_index", {
get: $util.oneOfGetter($oneOfFields = ["index"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionData _value.
* @member {"value"|undefined} _value
* @memberof SyncAction.SyncActionData
* @instance
*/
Object.defineProperty(SyncActionData.prototype, "_value", {
get: $util.oneOfGetter($oneOfFields = ["value"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionData _padding.
* @member {"padding"|undefined} _padding
* @memberof SyncAction.SyncActionData
* @instance
*/
Object.defineProperty(SyncActionData.prototype, "_padding", {
get: $util.oneOfGetter($oneOfFields = ["padding"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionData _version.
* @member {"version"|undefined} _version
* @memberof SyncAction.SyncActionData
* @instance
*/
Object.defineProperty(SyncActionData.prototype, "_version", {
get: $util.oneOfGetter($oneOfFields = ["version"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new SyncActionData instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionData
* @static
* @param {SyncAction.ISyncActionData=} [properties] Properties to set
* @returns {SyncAction.SyncActionData} SyncActionData instance
*/
SyncActionData.create = function create(properties) {
return new SyncActionData(properties);
};
/**
* Encodes the specified SyncActionData message. Does not implicitly {@link SyncAction.SyncActionData.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionData
* @static
* @param {SyncAction.ISyncActionData} message SyncActionData message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SyncActionData.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.index != null && Object.hasOwnProperty.call(message, "index"))
writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.index);
if (message.value != null && Object.hasOwnProperty.call(message, "value"))
$root.SyncAction.SyncActionValue.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
if (message.padding != null && Object.hasOwnProperty.call(message, "padding"))
writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.padding);
if (message.version != null && Object.hasOwnProperty.call(message, "version"))
writer.uint32(/* id 4, wireType 0 =*/32).int32(message.version);
return writer;
};
/**
* Encodes the specified SyncActionData message, length delimited. Does not implicitly {@link SyncAction.SyncActionData.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionData
* @static
* @param {SyncAction.ISyncActionData} message SyncActionData message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SyncActionData.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a SyncActionData message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionData
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionData} SyncActionData
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SyncActionData.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionData();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.index = reader.bytes();
break;
}
case 2: {
message.value = $root.SyncAction.SyncActionValue.decode(reader, reader.uint32());
break;
}
case 3: {
message.padding = reader.bytes();
break;
}
case 4: {
message.version = reader.int32();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a SyncActionData message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionData
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionData} SyncActionData
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SyncActionData.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a SyncActionData message.
* @function verify
* @memberof SyncAction.SyncActionData
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
SyncActionData.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.index != null && message.hasOwnProperty("index")) {
properties._index = 1;
if (!(message.index && typeof message.index.length === "number" || $util.isString(message.index)))
return "index: buffer expected";
}
if (message.value != null && message.hasOwnProperty("value")) {
properties._value = 1;
{
var error = $root.SyncAction.SyncActionValue.verify(message.value);
if (error)
return "value." + error;
}
}
if (message.padding != null && message.hasOwnProperty("padding")) {
properties._padding = 1;
if (!(message.padding && typeof message.padding.length === "number" || $util.isString(message.padding)))
return "padding: buffer expected";
}
if (message.version != null && message.hasOwnProperty("version")) {
properties._version = 1;
if (!$util.isInteger(message.version))
return "version: integer expected";
}
return null;
};
/**
* Creates a SyncActionData message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionData
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionData} SyncActionData
*/
SyncActionData.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionData)
return object;
var message = new $root.SyncAction.SyncActionData();
if (object.index != null)
if (typeof object.index === "string")
$util.base64.decode(object.index, message.index = $util.newBuffer($util.base64.length(object.index)), 0);
else if (object.index.length >= 0)
message.index = object.index;
if (object.value != null) {
if (typeof object.value !== "object")
throw TypeError(".SyncAction.SyncActionData.value: object expected");
message.value = $root.SyncAction.SyncActionValue.fromObject(object.value);
}
if (object.padding != null)
if (typeof object.padding === "string")
$util.base64.decode(object.padding, message.padding = $util.newBuffer($util.base64.length(object.padding)), 0);
else if (object.padding.length >= 0)
message.padding = object.padding;
if (object.version != null)
message.version = object.version | 0;
return message;
};
/**
* Creates a plain object from a SyncActionData message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionData
* @static
* @param {SyncAction.SyncActionData} message SyncActionData
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
SyncActionData.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.index != null && message.hasOwnProperty("index")) {
object.index = options.bytes === String ? $util.base64.encode(message.index, 0, message.index.length) : options.bytes === Array ? Array.prototype.slice.call(message.index) : message.index;
if (options.oneofs)
object._index = "index";
}
if (message.value != null && message.hasOwnProperty("value")) {
object.value = $root.SyncAction.SyncActionValue.toObject(message.value, options);
if (options.oneofs)
object._value = "value";
}
if (message.padding != null && message.hasOwnProperty("padding")) {
object.padding = options.bytes === String ? $util.base64.encode(message.padding, 0, message.padding.length) : options.bytes === Array ? Array.prototype.slice.call(message.padding) : message.padding;
if (options.oneofs)
object._padding = "padding";
}
if (message.version != null && message.hasOwnProperty("version")) {
object.version = message.version;
if (options.oneofs)
object._version = "version";
}
return object;
};
/**
* Converts this SyncActionData to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionData
* @instance
* @returns {Object.<string,*>} JSON object
*/
SyncActionData.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for SyncActionData
* @function getTypeUrl
* @memberof SyncAction.SyncActionData
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
SyncActionData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionData";
};
return SyncActionData;
})();
SyncAction.SyncActionValue = (function() {
/**
* Properties of a SyncActionValue.
* @memberof SyncAction
* @interface ISyncActionValue
* @property {number|Long|null} [timestamp] SyncActionValue timestamp
* @property {SyncAction.SyncActionValue.IStarAction|null} [starAction] SyncActionValue starAction
* @property {SyncAction.SyncActionValue.IContactAction|null} [contactAction] SyncActionValue contactAction
* @property {SyncAction.SyncActionValue.IMuteAction|null} [muteAction] SyncActionValue muteAction
* @property {SyncAction.SyncActionValue.IPinAction|null} [pinAction] SyncActionValue pinAction
* @property {SyncAction.SyncActionValue.ISecurityNotificationSetting|null} [securityNotificationSetting] SyncActionValue securityNotificationSetting
* @property {SyncAction.SyncActionValue.IPushNameSetting|null} [pushNameSetting] SyncActionValue pushNameSetting
* @property {SyncAction.SyncActionValue.IQuickReplyAction|null} [quickReplyAction] SyncActionValue quickReplyAction
* @property {SyncAction.SyncActionValue.IRecentEmojiWeightsAction|null} [recentEmojiWeightsAction] SyncActionValue recentEmojiWeightsAction
* @property {SyncAction.SyncActionValue.ILabelEditAction|null} [labelEditAction] SyncActionValue labelEditAction
* @property {SyncAction.SyncActionValue.ILabelAssociationAction|null} [labelAssociationAction] SyncActionValue labelAssociationAction
* @property {SyncAction.SyncActionValue.ILocaleSetting|null} [localeSetting] SyncActionValue localeSetting
* @property {SyncAction.SyncActionValue.IArchiveChatAction|null} [archiveChatAction] SyncActionValue archiveChatAction
* @property {SyncAction.SyncActionValue.IDeleteMessageForMeAction|null} [deleteMessageForMeAction] SyncActionValue deleteMessageForMeAction
* @property {SyncAction.SyncActionValue.IKeyExpiration|null} [keyExpiration] SyncActionValue keyExpiration
* @property {SyncAction.SyncActionValue.IMarkChatAsReadAction|null} [markChatAsReadAction] SyncActionValue markChatAsReadAction
* @property {SyncAction.SyncActionValue.IClearChatAction|null} [clearChatAction] SyncActionValue clearChatAction
* @property {SyncAction.SyncActionValue.IDeleteChatAction|null} [deleteChatAction] SyncActionValue deleteChatAction
* @property {SyncAction.SyncActionValue.IUnarchiveChatsSetting|null} [unarchiveChatsSetting] SyncActionValue unarchiveChatsSetting
* @property {SyncAction.SyncActionValue.IPrimaryFeature|null} [primaryFeature] SyncActionValue primaryFeature
* @property {SyncAction.SyncActionValue.IAndroidUnsupportedActions|null} [androidUnsupportedActions] SyncActionValue androidUnsupportedActions
* @property {SyncAction.SyncActionValue.IAgentAction|null} [agentAction] SyncActionValue agentAction
* @property {SyncAction.SyncActionValue.ISubscriptionAction|null} [subscriptionAction] SyncActionValue subscriptionAction
* @property {SyncAction.SyncActionValue.IUserStatusMuteAction|null} [userStatusMuteAction] SyncActionValue userStatusMuteAction
* @property {SyncAction.SyncActionValue.ITimeFormatAction|null} [timeFormatAction] SyncActionValue timeFormatAction
* @property {SyncAction.SyncActionValue.INuxAction|null} [nuxAction] SyncActionValue nuxAction
* @property {SyncAction.SyncActionValue.IPrimaryVersionAction|null} [primaryVersionAction] SyncActionValue primaryVersionAction
* @property {SyncAction.SyncActionValue.IStickerAction|null} [stickerAction] SyncActionValue stickerAction
* @property {SyncAction.SyncActionValue.IRemoveRecentStickerAction|null} [removeRecentStickerAction] SyncActionValue removeRecentStickerAction
* @property {SyncAction.SyncActionValue.IChatAssignmentAction|null} [chatAssignment] SyncActionValue chatAssignment
* @property {SyncAction.SyncActionValue.IChatAssignmentOpenedStatusAction|null} [chatAssignmentOpenedStatus] SyncActionValue chatAssignmentOpenedStatus
* @property {SyncAction.SyncActionValue.IPnForLidChatAction|null} [pnForLidChatAction] SyncActionValue pnForLidChatAction
* @property {SyncAction.SyncActionValue.IMarketingMessageAction|null} [marketingMessageAction] SyncActionValue marketingMessageAction
* @property {SyncAction.SyncActionValue.IMarketingMessageBroadcastAction|null} [marketingMessageBroadcastAction] SyncActionValue marketingMessageBroadcastAction
* @property {SyncAction.SyncActionValue.IExternalWebBetaAction|null} [externalWebBetaAction] SyncActionValue externalWebBetaAction
* @property {SyncAction.SyncActionValue.IPrivacySettingRelayAllCalls|null} [privacySettingRelayAllCalls] SyncActionValue privacySettingRelayAllCalls
* @property {SyncAction.SyncActionValue.ICallLogAction|null} [callLogAction] SyncActionValue callLogAction
* @property {SyncAction.SyncActionValue.IStatusPrivacyAction|null} [statusPrivacy] SyncActionValue statusPrivacy
* @property {SyncAction.SyncActionValue.IBotWelcomeRequestAction|null} [botWelcomeRequestAction] SyncActionValue botWelcomeRequestAction
* @property {SyncAction.SyncActionValue.IDeleteIndividualCallLogAction|null} [deleteIndividualCallLog] SyncActionValue deleteIndividualCallLog
* @property {SyncAction.SyncActionValue.ILabelReorderingAction|null} [labelReorderingAction] SyncActionValue labelReorderingAction
* @property {SyncAction.SyncActionValue.IPaymentInfoAction|null} [paymentInfoAction] SyncActionValue paymentInfoAction
* @property {SyncAction.SyncActionValue.ICustomPaymentMethodsAction|null} [customPaymentMethodsAction] SyncActionValue customPaymentMethodsAction
* @property {SyncAction.SyncActionValue.ILockChatAction|null} [lockChatAction] SyncActionValue lockChatAction
* @property {ChatLockSettings.IChatLockSettings|null} [chatLockSettings] SyncActionValue chatLockSettings
* @property {SyncAction.SyncActionValue.IWamoUserIdentifierAction|null} [wamoUserIdentifierAction] SyncActionValue wamoUserIdentifierAction
* @property {SyncAction.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction|null} [privacySettingDisableLinkPreviewsAction] SyncActionValue privacySettingDisableLinkPreviewsAction
* @property {DeviceCapabilities.IDeviceCapabilities|null} [deviceCapabilities] SyncActionValue deviceCapabilities
* @property {SyncAction.SyncActionValue.INoteEditAction|null} [noteEditAction] SyncActionValue noteEditAction
* @property {SyncAction.SyncActionValue.IFavoritesAction|null} [favoritesAction] SyncActionValue favoritesAction
* @property {SyncAction.SyncActionValue.IMerchantPaymentPartnerAction|null} [merchantPaymentPartnerAction] SyncActionValue merchantPaymentPartnerAction
* @property {SyncAction.SyncActionValue.IWaffleAccountLinkStateAction|null} [waffleAccountLinkStateAction] SyncActionValue waffleAccountLinkStateAction
* @property {SyncAction.SyncActionValue.IUsernameChatStartModeAction|null} [usernameChatStartMode] SyncActionValue usernameChatStartMode
* @property {SyncAction.SyncActionValue.INotificationActivitySettingAction|null} [notificationActivitySettingAction] SyncActionValue notificationActivitySettingAction
* @property {SyncAction.SyncActionValue.ILidContactAction|null} [lidContactAction] SyncActionValue lidContactAction
* @property {SyncAction.SyncActionValue.ICtwaPerCustomerDataSharingAction|null} [ctwaPerCustomerDataSharingAction] SyncActionValue ctwaPerCustomerDataSharingAction
* @property {SyncAction.SyncActionValue.IPaymentTosAction|null} [paymentTosAction] SyncActionValue paymentTosAction
*/
/**
* Constructs a new SyncActionValue.
* @memberof SyncAction
* @classdesc Represents a SyncActionValue.
* @implements ISyncActionValue
* @constructor
* @param {SyncAction.ISyncActionValue=} [properties] Properties to set
*/
function SyncActionValue(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* SyncActionValue timestamp.
* @member {number|Long|null|undefined} timestamp
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.timestamp = null;
/**
* SyncActionValue starAction.
* @member {SyncAction.SyncActionValue.IStarAction|null|undefined} starAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.starAction = null;
/**
* SyncActionValue contactAction.
* @member {SyncAction.SyncActionValue.IContactAction|null|undefined} contactAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.contactAction = null;
/**
* SyncActionValue muteAction.
* @member {SyncAction.SyncActionValue.IMuteAction|null|undefined} muteAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.muteAction = null;
/**
* SyncActionValue pinAction.
* @member {SyncAction.SyncActionValue.IPinAction|null|undefined} pinAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.pinAction = null;
/**
* SyncActionValue securityNotificationSetting.
* @member {SyncAction.SyncActionValue.ISecurityNotificationSetting|null|undefined} securityNotificationSetting
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.securityNotificationSetting = null;
/**
* SyncActionValue pushNameSetting.
* @member {SyncAction.SyncActionValue.IPushNameSetting|null|undefined} pushNameSetting
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.pushNameSetting = null;
/**
* SyncActionValue quickReplyAction.
* @member {SyncAction.SyncActionValue.IQuickReplyAction|null|undefined} quickReplyAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.quickReplyAction = null;
/**
* SyncActionValue recentEmojiWeightsAction.
* @member {SyncAction.SyncActionValue.IRecentEmojiWeightsAction|null|undefined} recentEmojiWeightsAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.recentEmojiWeightsAction = null;
/**
* SyncActionValue labelEditAction.
* @member {SyncAction.SyncActionValue.ILabelEditAction|null|undefined} labelEditAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.labelEditAction = null;
/**
* SyncActionValue labelAssociationAction.
* @member {SyncAction.SyncActionValue.ILabelAssociationAction|null|undefined} labelAssociationAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.labelAssociationAction = null;
/**
* SyncActionValue localeSetting.
* @member {SyncAction.SyncActionValue.ILocaleSetting|null|undefined} localeSetting
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.localeSetting = null;
/**
* SyncActionValue archiveChatAction.
* @member {SyncAction.SyncActionValue.IArchiveChatAction|null|undefined} archiveChatAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.archiveChatAction = null;
/**
* SyncActionValue deleteMessageForMeAction.
* @member {SyncAction.SyncActionValue.IDeleteMessageForMeAction|null|undefined} deleteMessageForMeAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.deleteMessageForMeAction = null;
/**
* SyncActionValue keyExpiration.
* @member {SyncAction.SyncActionValue.IKeyExpiration|null|undefined} keyExpiration
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.keyExpiration = null;
/**
* SyncActionValue markChatAsReadAction.
* @member {SyncAction.SyncActionValue.IMarkChatAsReadAction|null|undefined} markChatAsReadAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.markChatAsReadAction = null;
/**
* SyncActionValue clearChatAction.
* @member {SyncAction.SyncActionValue.IClearChatAction|null|undefined} clearChatAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.clearChatAction = null;
/**
* SyncActionValue deleteChatAction.
* @member {SyncAction.SyncActionValue.IDeleteChatAction|null|undefined} deleteChatAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.deleteChatAction = null;
/**
* SyncActionValue unarchiveChatsSetting.
* @member {SyncAction.SyncActionValue.IUnarchiveChatsSetting|null|undefined} unarchiveChatsSetting
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.unarchiveChatsSetting = null;
/**
* SyncActionValue primaryFeature.
* @member {SyncAction.SyncActionValue.IPrimaryFeature|null|undefined} primaryFeature
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.primaryFeature = null;
/**
* SyncActionValue androidUnsupportedActions.
* @member {SyncAction.SyncActionValue.IAndroidUnsupportedActions|null|undefined} androidUnsupportedActions
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.androidUnsupportedActions = null;
/**
* SyncActionValue agentAction.
* @member {SyncAction.SyncActionValue.IAgentAction|null|undefined} agentAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.agentAction = null;
/**
* SyncActionValue subscriptionAction.
* @member {SyncAction.SyncActionValue.ISubscriptionAction|null|undefined} subscriptionAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.subscriptionAction = null;
/**
* SyncActionValue userStatusMuteAction.
* @member {SyncAction.SyncActionValue.IUserStatusMuteAction|null|undefined} userStatusMuteAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.userStatusMuteAction = null;
/**
* SyncActionValue timeFormatAction.
* @member {SyncAction.SyncActionValue.ITimeFormatAction|null|undefined} timeFormatAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.timeFormatAction = null;
/**
* SyncActionValue nuxAction.
* @member {SyncAction.SyncActionValue.INuxAction|null|undefined} nuxAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.nuxAction = null;
/**
* SyncActionValue primaryVersionAction.
* @member {SyncAction.SyncActionValue.IPrimaryVersionAction|null|undefined} primaryVersionAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.primaryVersionAction = null;
/**
* SyncActionValue stickerAction.
* @member {SyncAction.SyncActionValue.IStickerAction|null|undefined} stickerAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.stickerAction = null;
/**
* SyncActionValue removeRecentStickerAction.
* @member {SyncAction.SyncActionValue.IRemoveRecentStickerAction|null|undefined} removeRecentStickerAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.removeRecentStickerAction = null;
/**
* SyncActionValue chatAssignment.
* @member {SyncAction.SyncActionValue.IChatAssignmentAction|null|undefined} chatAssignment
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.chatAssignment = null;
/**
* SyncActionValue chatAssignmentOpenedStatus.
* @member {SyncAction.SyncActionValue.IChatAssignmentOpenedStatusAction|null|undefined} chatAssignmentOpenedStatus
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.chatAssignmentOpenedStatus = null;
/**
* SyncActionValue pnForLidChatAction.
* @member {SyncAction.SyncActionValue.IPnForLidChatAction|null|undefined} pnForLidChatAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.pnForLidChatAction = null;
/**
* SyncActionValue marketingMessageAction.
* @member {SyncAction.SyncActionValue.IMarketingMessageAction|null|undefined} marketingMessageAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.marketingMessageAction = null;
/**
* SyncActionValue marketingMessageBroadcastAction.
* @member {SyncAction.SyncActionValue.IMarketingMessageBroadcastAction|null|undefined} marketingMessageBroadcastAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.marketingMessageBroadcastAction = null;
/**
* SyncActionValue externalWebBetaAction.
* @member {SyncAction.SyncActionValue.IExternalWebBetaAction|null|undefined} externalWebBetaAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.externalWebBetaAction = null;
/**
* SyncActionValue privacySettingRelayAllCalls.
* @member {SyncAction.SyncActionValue.IPrivacySettingRelayAllCalls|null|undefined} privacySettingRelayAllCalls
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.privacySettingRelayAllCalls = null;
/**
* SyncActionValue callLogAction.
* @member {SyncAction.SyncActionValue.ICallLogAction|null|undefined} callLogAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.callLogAction = null;
/**
* SyncActionValue statusPrivacy.
* @member {SyncAction.SyncActionValue.IStatusPrivacyAction|null|undefined} statusPrivacy
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.statusPrivacy = null;
/**
* SyncActionValue botWelcomeRequestAction.
* @member {SyncAction.SyncActionValue.IBotWelcomeRequestAction|null|undefined} botWelcomeRequestAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.botWelcomeRequestAction = null;
/**
* SyncActionValue deleteIndividualCallLog.
* @member {SyncAction.SyncActionValue.IDeleteIndividualCallLogAction|null|undefined} deleteIndividualCallLog
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.deleteIndividualCallLog = null;
/**
* SyncActionValue labelReorderingAction.
* @member {SyncAction.SyncActionValue.ILabelReorderingAction|null|undefined} labelReorderingAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.labelReorderingAction = null;
/**
* SyncActionValue paymentInfoAction.
* @member {SyncAction.SyncActionValue.IPaymentInfoAction|null|undefined} paymentInfoAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.paymentInfoAction = null;
/**
* SyncActionValue customPaymentMethodsAction.
* @member {SyncAction.SyncActionValue.ICustomPaymentMethodsAction|null|undefined} customPaymentMethodsAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.customPaymentMethodsAction = null;
/**
* SyncActionValue lockChatAction.
* @member {SyncAction.SyncActionValue.ILockChatAction|null|undefined} lockChatAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.lockChatAction = null;
/**
* SyncActionValue chatLockSettings.
* @member {ChatLockSettings.IChatLockSettings|null|undefined} chatLockSettings
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.chatLockSettings = null;
/**
* SyncActionValue wamoUserIdentifierAction.
* @member {SyncAction.SyncActionValue.IWamoUserIdentifierAction|null|undefined} wamoUserIdentifierAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.wamoUserIdentifierAction = null;
/**
* SyncActionValue privacySettingDisableLinkPreviewsAction.
* @member {SyncAction.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction|null|undefined} privacySettingDisableLinkPreviewsAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.privacySettingDisableLinkPreviewsAction = null;
/**
* SyncActionValue deviceCapabilities.
* @member {DeviceCapabilities.IDeviceCapabilities|null|undefined} deviceCapabilities
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.deviceCapabilities = null;
/**
* SyncActionValue noteEditAction.
* @member {SyncAction.SyncActionValue.INoteEditAction|null|undefined} noteEditAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.noteEditAction = null;
/**
* SyncActionValue favoritesAction.
* @member {SyncAction.SyncActionValue.IFavoritesAction|null|undefined} favoritesAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.favoritesAction = null;
/**
* SyncActionValue merchantPaymentPartnerAction.
* @member {SyncAction.SyncActionValue.IMerchantPaymentPartnerAction|null|undefined} merchantPaymentPartnerAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.merchantPaymentPartnerAction = null;
/**
* SyncActionValue waffleAccountLinkStateAction.
* @member {SyncAction.SyncActionValue.IWaffleAccountLinkStateAction|null|undefined} waffleAccountLinkStateAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.waffleAccountLinkStateAction = null;
/**
* SyncActionValue usernameChatStartMode.
* @member {SyncAction.SyncActionValue.IUsernameChatStartModeAction|null|undefined} usernameChatStartMode
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.usernameChatStartMode = null;
/**
* SyncActionValue notificationActivitySettingAction.
* @member {SyncAction.SyncActionValue.INotificationActivitySettingAction|null|undefined} notificationActivitySettingAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.notificationActivitySettingAction = null;
/**
* SyncActionValue lidContactAction.
* @member {SyncAction.SyncActionValue.ILidContactAction|null|undefined} lidContactAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.lidContactAction = null;
/**
* SyncActionValue ctwaPerCustomerDataSharingAction.
* @member {SyncAction.SyncActionValue.ICtwaPerCustomerDataSharingAction|null|undefined} ctwaPerCustomerDataSharingAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.ctwaPerCustomerDataSharingAction = null;
/**
* SyncActionValue paymentTosAction.
* @member {SyncAction.SyncActionValue.IPaymentTosAction|null|undefined} paymentTosAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
SyncActionValue.prototype.paymentTosAction = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* SyncActionValue _timestamp.
* @member {"timestamp"|undefined} _timestamp
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_timestamp", {
get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _starAction.
* @member {"starAction"|undefined} _starAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_starAction", {
get: $util.oneOfGetter($oneOfFields = ["starAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _contactAction.
* @member {"contactAction"|undefined} _contactAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_contactAction", {
get: $util.oneOfGetter($oneOfFields = ["contactAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _muteAction.
* @member {"muteAction"|undefined} _muteAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_muteAction", {
get: $util.oneOfGetter($oneOfFields = ["muteAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _pinAction.
* @member {"pinAction"|undefined} _pinAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_pinAction", {
get: $util.oneOfGetter($oneOfFields = ["pinAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _securityNotificationSetting.
* @member {"securityNotificationSetting"|undefined} _securityNotificationSetting
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_securityNotificationSetting", {
get: $util.oneOfGetter($oneOfFields = ["securityNotificationSetting"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _pushNameSetting.
* @member {"pushNameSetting"|undefined} _pushNameSetting
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_pushNameSetting", {
get: $util.oneOfGetter($oneOfFields = ["pushNameSetting"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _quickReplyAction.
* @member {"quickReplyAction"|undefined} _quickReplyAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_quickReplyAction", {
get: $util.oneOfGetter($oneOfFields = ["quickReplyAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _recentEmojiWeightsAction.
* @member {"recentEmojiWeightsAction"|undefined} _recentEmojiWeightsAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_recentEmojiWeightsAction", {
get: $util.oneOfGetter($oneOfFields = ["recentEmojiWeightsAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _labelEditAction.
* @member {"labelEditAction"|undefined} _labelEditAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_labelEditAction", {
get: $util.oneOfGetter($oneOfFields = ["labelEditAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _labelAssociationAction.
* @member {"labelAssociationAction"|undefined} _labelAssociationAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_labelAssociationAction", {
get: $util.oneOfGetter($oneOfFields = ["labelAssociationAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _localeSetting.
* @member {"localeSetting"|undefined} _localeSetting
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_localeSetting", {
get: $util.oneOfGetter($oneOfFields = ["localeSetting"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _archiveChatAction.
* @member {"archiveChatAction"|undefined} _archiveChatAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_archiveChatAction", {
get: $util.oneOfGetter($oneOfFields = ["archiveChatAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _deleteMessageForMeAction.
* @member {"deleteMessageForMeAction"|undefined} _deleteMessageForMeAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_deleteMessageForMeAction", {
get: $util.oneOfGetter($oneOfFields = ["deleteMessageForMeAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _keyExpiration.
* @member {"keyExpiration"|undefined} _keyExpiration
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_keyExpiration", {
get: $util.oneOfGetter($oneOfFields = ["keyExpiration"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _markChatAsReadAction.
* @member {"markChatAsReadAction"|undefined} _markChatAsReadAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_markChatAsReadAction", {
get: $util.oneOfGetter($oneOfFields = ["markChatAsReadAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _clearChatAction.
* @member {"clearChatAction"|undefined} _clearChatAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_clearChatAction", {
get: $util.oneOfGetter($oneOfFields = ["clearChatAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _deleteChatAction.
* @member {"deleteChatAction"|undefined} _deleteChatAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_deleteChatAction", {
get: $util.oneOfGetter($oneOfFields = ["deleteChatAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _unarchiveChatsSetting.
* @member {"unarchiveChatsSetting"|undefined} _unarchiveChatsSetting
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_unarchiveChatsSetting", {
get: $util.oneOfGetter($oneOfFields = ["unarchiveChatsSetting"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _primaryFeature.
* @member {"primaryFeature"|undefined} _primaryFeature
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_primaryFeature", {
get: $util.oneOfGetter($oneOfFields = ["primaryFeature"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _androidUnsupportedActions.
* @member {"androidUnsupportedActions"|undefined} _androidUnsupportedActions
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_androidUnsupportedActions", {
get: $util.oneOfGetter($oneOfFields = ["androidUnsupportedActions"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _agentAction.
* @member {"agentAction"|undefined} _agentAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_agentAction", {
get: $util.oneOfGetter($oneOfFields = ["agentAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _subscriptionAction.
* @member {"subscriptionAction"|undefined} _subscriptionAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_subscriptionAction", {
get: $util.oneOfGetter($oneOfFields = ["subscriptionAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _userStatusMuteAction.
* @member {"userStatusMuteAction"|undefined} _userStatusMuteAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_userStatusMuteAction", {
get: $util.oneOfGetter($oneOfFields = ["userStatusMuteAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _timeFormatAction.
* @member {"timeFormatAction"|undefined} _timeFormatAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_timeFormatAction", {
get: $util.oneOfGetter($oneOfFields = ["timeFormatAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _nuxAction.
* @member {"nuxAction"|undefined} _nuxAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_nuxAction", {
get: $util.oneOfGetter($oneOfFields = ["nuxAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _primaryVersionAction.
* @member {"primaryVersionAction"|undefined} _primaryVersionAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_primaryVersionAction", {
get: $util.oneOfGetter($oneOfFields = ["primaryVersionAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _stickerAction.
* @member {"stickerAction"|undefined} _stickerAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_stickerAction", {
get: $util.oneOfGetter($oneOfFields = ["stickerAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _removeRecentStickerAction.
* @member {"removeRecentStickerAction"|undefined} _removeRecentStickerAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_removeRecentStickerAction", {
get: $util.oneOfGetter($oneOfFields = ["removeRecentStickerAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _chatAssignment.
* @member {"chatAssignment"|undefined} _chatAssignment
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_chatAssignment", {
get: $util.oneOfGetter($oneOfFields = ["chatAssignment"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _chatAssignmentOpenedStatus.
* @member {"chatAssignmentOpenedStatus"|undefined} _chatAssignmentOpenedStatus
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_chatAssignmentOpenedStatus", {
get: $util.oneOfGetter($oneOfFields = ["chatAssignmentOpenedStatus"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _pnForLidChatAction.
* @member {"pnForLidChatAction"|undefined} _pnForLidChatAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_pnForLidChatAction", {
get: $util.oneOfGetter($oneOfFields = ["pnForLidChatAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _marketingMessageAction.
* @member {"marketingMessageAction"|undefined} _marketingMessageAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_marketingMessageAction", {
get: $util.oneOfGetter($oneOfFields = ["marketingMessageAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _marketingMessageBroadcastAction.
* @member {"marketingMessageBroadcastAction"|undefined} _marketingMessageBroadcastAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_marketingMessageBroadcastAction", {
get: $util.oneOfGetter($oneOfFields = ["marketingMessageBroadcastAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _externalWebBetaAction.
* @member {"externalWebBetaAction"|undefined} _externalWebBetaAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_externalWebBetaAction", {
get: $util.oneOfGetter($oneOfFields = ["externalWebBetaAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _privacySettingRelayAllCalls.
* @member {"privacySettingRelayAllCalls"|undefined} _privacySettingRelayAllCalls
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_privacySettingRelayAllCalls", {
get: $util.oneOfGetter($oneOfFields = ["privacySettingRelayAllCalls"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _callLogAction.
* @member {"callLogAction"|undefined} _callLogAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_callLogAction", {
get: $util.oneOfGetter($oneOfFields = ["callLogAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _statusPrivacy.
* @member {"statusPrivacy"|undefined} _statusPrivacy
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_statusPrivacy", {
get: $util.oneOfGetter($oneOfFields = ["statusPrivacy"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _botWelcomeRequestAction.
* @member {"botWelcomeRequestAction"|undefined} _botWelcomeRequestAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_botWelcomeRequestAction", {
get: $util.oneOfGetter($oneOfFields = ["botWelcomeRequestAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _deleteIndividualCallLog.
* @member {"deleteIndividualCallLog"|undefined} _deleteIndividualCallLog
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_deleteIndividualCallLog", {
get: $util.oneOfGetter($oneOfFields = ["deleteIndividualCallLog"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _labelReorderingAction.
* @member {"labelReorderingAction"|undefined} _labelReorderingAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_labelReorderingAction", {
get: $util.oneOfGetter($oneOfFields = ["labelReorderingAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _paymentInfoAction.
* @member {"paymentInfoAction"|undefined} _paymentInfoAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_paymentInfoAction", {
get: $util.oneOfGetter($oneOfFields = ["paymentInfoAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _customPaymentMethodsAction.
* @member {"customPaymentMethodsAction"|undefined} _customPaymentMethodsAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_customPaymentMethodsAction", {
get: $util.oneOfGetter($oneOfFields = ["customPaymentMethodsAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _lockChatAction.
* @member {"lockChatAction"|undefined} _lockChatAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_lockChatAction", {
get: $util.oneOfGetter($oneOfFields = ["lockChatAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _chatLockSettings.
* @member {"chatLockSettings"|undefined} _chatLockSettings
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_chatLockSettings", {
get: $util.oneOfGetter($oneOfFields = ["chatLockSettings"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _wamoUserIdentifierAction.
* @member {"wamoUserIdentifierAction"|undefined} _wamoUserIdentifierAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_wamoUserIdentifierAction", {
get: $util.oneOfGetter($oneOfFields = ["wamoUserIdentifierAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _privacySettingDisableLinkPreviewsAction.
* @member {"privacySettingDisableLinkPreviewsAction"|undefined} _privacySettingDisableLinkPreviewsAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_privacySettingDisableLinkPreviewsAction", {
get: $util.oneOfGetter($oneOfFields = ["privacySettingDisableLinkPreviewsAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _deviceCapabilities.
* @member {"deviceCapabilities"|undefined} _deviceCapabilities
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_deviceCapabilities", {
get: $util.oneOfGetter($oneOfFields = ["deviceCapabilities"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _noteEditAction.
* @member {"noteEditAction"|undefined} _noteEditAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_noteEditAction", {
get: $util.oneOfGetter($oneOfFields = ["noteEditAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _favoritesAction.
* @member {"favoritesAction"|undefined} _favoritesAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_favoritesAction", {
get: $util.oneOfGetter($oneOfFields = ["favoritesAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _merchantPaymentPartnerAction.
* @member {"merchantPaymentPartnerAction"|undefined} _merchantPaymentPartnerAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_merchantPaymentPartnerAction", {
get: $util.oneOfGetter($oneOfFields = ["merchantPaymentPartnerAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _waffleAccountLinkStateAction.
* @member {"waffleAccountLinkStateAction"|undefined} _waffleAccountLinkStateAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_waffleAccountLinkStateAction", {
get: $util.oneOfGetter($oneOfFields = ["waffleAccountLinkStateAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _usernameChatStartMode.
* @member {"usernameChatStartMode"|undefined} _usernameChatStartMode
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_usernameChatStartMode", {
get: $util.oneOfGetter($oneOfFields = ["usernameChatStartMode"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _notificationActivitySettingAction.
* @member {"notificationActivitySettingAction"|undefined} _notificationActivitySettingAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_notificationActivitySettingAction", {
get: $util.oneOfGetter($oneOfFields = ["notificationActivitySettingAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _lidContactAction.
* @member {"lidContactAction"|undefined} _lidContactAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_lidContactAction", {
get: $util.oneOfGetter($oneOfFields = ["lidContactAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _ctwaPerCustomerDataSharingAction.
* @member {"ctwaPerCustomerDataSharingAction"|undefined} _ctwaPerCustomerDataSharingAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_ctwaPerCustomerDataSharingAction", {
get: $util.oneOfGetter($oneOfFields = ["ctwaPerCustomerDataSharingAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionValue _paymentTosAction.
* @member {"paymentTosAction"|undefined} _paymentTosAction
* @memberof SyncAction.SyncActionValue
* @instance
*/
Object.defineProperty(SyncActionValue.prototype, "_paymentTosAction", {
get: $util.oneOfGetter($oneOfFields = ["paymentTosAction"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new SyncActionValue instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue
* @static
* @param {SyncAction.ISyncActionValue=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue} SyncActionValue instance
*/
SyncActionValue.create = function create(properties) {
return new SyncActionValue(properties);
};
/**
* Encodes the specified SyncActionValue message. Does not implicitly {@link SyncAction.SyncActionValue.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue
* @static
* @param {SyncAction.ISyncActionValue} message SyncActionValue message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SyncActionValue.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp);
if (message.starAction != null && Object.hasOwnProperty.call(message, "starAction"))
$root.SyncAction.SyncActionValue.StarAction.encode(message.starAction, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
if (message.contactAction != null && Object.hasOwnProperty.call(message, "contactAction"))
$root.SyncAction.SyncActionValue.ContactAction.encode(message.contactAction, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
if (message.muteAction != null && Object.hasOwnProperty.call(message, "muteAction"))
$root.SyncAction.SyncActionValue.MuteAction.encode(message.muteAction, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
if (message.pinAction != null && Object.hasOwnProperty.call(message, "pinAction"))
$root.SyncAction.SyncActionValue.PinAction.encode(message.pinAction, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
if (message.securityNotificationSetting != null && Object.hasOwnProperty.call(message, "securityNotificationSetting"))
$root.SyncAction.SyncActionValue.SecurityNotificationSetting.encode(message.securityNotificationSetting, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
if (message.pushNameSetting != null && Object.hasOwnProperty.call(message, "pushNameSetting"))
$root.SyncAction.SyncActionValue.PushNameSetting.encode(message.pushNameSetting, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
if (message.quickReplyAction != null && Object.hasOwnProperty.call(message, "quickReplyAction"))
$root.SyncAction.SyncActionValue.QuickReplyAction.encode(message.quickReplyAction, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
if (message.recentEmojiWeightsAction != null && Object.hasOwnProperty.call(message, "recentEmojiWeightsAction"))
$root.SyncAction.SyncActionValue.RecentEmojiWeightsAction.encode(message.recentEmojiWeightsAction, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
if (message.labelEditAction != null && Object.hasOwnProperty.call(message, "labelEditAction"))
$root.SyncAction.SyncActionValue.LabelEditAction.encode(message.labelEditAction, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
if (message.labelAssociationAction != null && Object.hasOwnProperty.call(message, "labelAssociationAction"))
$root.SyncAction.SyncActionValue.LabelAssociationAction.encode(message.labelAssociationAction, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
if (message.localeSetting != null && Object.hasOwnProperty.call(message, "localeSetting"))
$root.SyncAction.SyncActionValue.LocaleSetting.encode(message.localeSetting, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
if (message.archiveChatAction != null && Object.hasOwnProperty.call(message, "archiveChatAction"))
$root.SyncAction.SyncActionValue.ArchiveChatAction.encode(message.archiveChatAction, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
if (message.deleteMessageForMeAction != null && Object.hasOwnProperty.call(message, "deleteMessageForMeAction"))
$root.SyncAction.SyncActionValue.DeleteMessageForMeAction.encode(message.deleteMessageForMeAction, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
if (message.keyExpiration != null && Object.hasOwnProperty.call(message, "keyExpiration"))
$root.SyncAction.SyncActionValue.KeyExpiration.encode(message.keyExpiration, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
if (message.markChatAsReadAction != null && Object.hasOwnProperty.call(message, "markChatAsReadAction"))
$root.SyncAction.SyncActionValue.MarkChatAsReadAction.encode(message.markChatAsReadAction, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
if (message.clearChatAction != null && Object.hasOwnProperty.call(message, "clearChatAction"))
$root.SyncAction.SyncActionValue.ClearChatAction.encode(message.clearChatAction, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
if (message.deleteChatAction != null && Object.hasOwnProperty.call(message, "deleteChatAction"))
$root.SyncAction.SyncActionValue.DeleteChatAction.encode(message.deleteChatAction, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
if (message.unarchiveChatsSetting != null && Object.hasOwnProperty.call(message, "unarchiveChatsSetting"))
$root.SyncAction.SyncActionValue.UnarchiveChatsSetting.encode(message.unarchiveChatsSetting, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
if (message.primaryFeature != null && Object.hasOwnProperty.call(message, "primaryFeature"))
$root.SyncAction.SyncActionValue.PrimaryFeature.encode(message.primaryFeature, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
if (message.androidUnsupportedActions != null && Object.hasOwnProperty.call(message, "androidUnsupportedActions"))
$root.SyncAction.SyncActionValue.AndroidUnsupportedActions.encode(message.androidUnsupportedActions, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
if (message.agentAction != null && Object.hasOwnProperty.call(message, "agentAction"))
$root.SyncAction.SyncActionValue.AgentAction.encode(message.agentAction, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
if (message.subscriptionAction != null && Object.hasOwnProperty.call(message, "subscriptionAction"))
$root.SyncAction.SyncActionValue.SubscriptionAction.encode(message.subscriptionAction, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
if (message.userStatusMuteAction != null && Object.hasOwnProperty.call(message, "userStatusMuteAction"))
$root.SyncAction.SyncActionValue.UserStatusMuteAction.encode(message.userStatusMuteAction, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
if (message.timeFormatAction != null && Object.hasOwnProperty.call(message, "timeFormatAction"))
$root.SyncAction.SyncActionValue.TimeFormatAction.encode(message.timeFormatAction, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
if (message.nuxAction != null && Object.hasOwnProperty.call(message, "nuxAction"))
$root.SyncAction.SyncActionValue.NuxAction.encode(message.nuxAction, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
if (message.primaryVersionAction != null && Object.hasOwnProperty.call(message, "primaryVersionAction"))
$root.SyncAction.SyncActionValue.PrimaryVersionAction.encode(message.primaryVersionAction, writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
if (message.stickerAction != null && Object.hasOwnProperty.call(message, "stickerAction"))
$root.SyncAction.SyncActionValue.StickerAction.encode(message.stickerAction, writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();
if (message.removeRecentStickerAction != null && Object.hasOwnProperty.call(message, "removeRecentStickerAction"))
$root.SyncAction.SyncActionValue.RemoveRecentStickerAction.encode(message.removeRecentStickerAction, writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
if (message.chatAssignment != null && Object.hasOwnProperty.call(message, "chatAssignment"))
$root.SyncAction.SyncActionValue.ChatAssignmentAction.encode(message.chatAssignment, writer.uint32(/* id 35, wireType 2 =*/282).fork()).ldelim();
if (message.chatAssignmentOpenedStatus != null && Object.hasOwnProperty.call(message, "chatAssignmentOpenedStatus"))
$root.SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.encode(message.chatAssignmentOpenedStatus, writer.uint32(/* id 36, wireType 2 =*/290).fork()).ldelim();
if (message.pnForLidChatAction != null && Object.hasOwnProperty.call(message, "pnForLidChatAction"))
$root.SyncAction.SyncActionValue.PnForLidChatAction.encode(message.pnForLidChatAction, writer.uint32(/* id 37, wireType 2 =*/298).fork()).ldelim();
if (message.marketingMessageAction != null && Object.hasOwnProperty.call(message, "marketingMessageAction"))
$root.SyncAction.SyncActionValue.MarketingMessageAction.encode(message.marketingMessageAction, writer.uint32(/* id 38, wireType 2 =*/306).fork()).ldelim();
if (message.marketingMessageBroadcastAction != null && Object.hasOwnProperty.call(message, "marketingMessageBroadcastAction"))
$root.SyncAction.SyncActionValue.MarketingMessageBroadcastAction.encode(message.marketingMessageBroadcastAction, writer.uint32(/* id 39, wireType 2 =*/314).fork()).ldelim();
if (message.externalWebBetaAction != null && Object.hasOwnProperty.call(message, "externalWebBetaAction"))
$root.SyncAction.SyncActionValue.ExternalWebBetaAction.encode(message.externalWebBetaAction, writer.uint32(/* id 40, wireType 2 =*/322).fork()).ldelim();
if (message.privacySettingRelayAllCalls != null && Object.hasOwnProperty.call(message, "privacySettingRelayAllCalls"))
$root.SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.encode(message.privacySettingRelayAllCalls, writer.uint32(/* id 41, wireType 2 =*/330).fork()).ldelim();
if (message.callLogAction != null && Object.hasOwnProperty.call(message, "callLogAction"))
$root.SyncAction.SyncActionValue.CallLogAction.encode(message.callLogAction, writer.uint32(/* id 42, wireType 2 =*/338).fork()).ldelim();
if (message.statusPrivacy != null && Object.hasOwnProperty.call(message, "statusPrivacy"))
$root.SyncAction.SyncActionValue.StatusPrivacyAction.encode(message.statusPrivacy, writer.uint32(/* id 44, wireType 2 =*/354).fork()).ldelim();
if (message.botWelcomeRequestAction != null && Object.hasOwnProperty.call(message, "botWelcomeRequestAction"))
$root.SyncAction.SyncActionValue.BotWelcomeRequestAction.encode(message.botWelcomeRequestAction, writer.uint32(/* id 45, wireType 2 =*/362).fork()).ldelim();
if (message.deleteIndividualCallLog != null && Object.hasOwnProperty.call(message, "deleteIndividualCallLog"))
$root.SyncAction.SyncActionValue.DeleteIndividualCallLogAction.encode(message.deleteIndividualCallLog, writer.uint32(/* id 46, wireType 2 =*/370).fork()).ldelim();
if (message.labelReorderingAction != null && Object.hasOwnProperty.call(message, "labelReorderingAction"))
$root.SyncAction.SyncActionValue.LabelReorderingAction.encode(message.labelReorderingAction, writer.uint32(/* id 47, wireType 2 =*/378).fork()).ldelim();
if (message.paymentInfoAction != null && Object.hasOwnProperty.call(message, "paymentInfoAction"))
$root.SyncAction.SyncActionValue.PaymentInfoAction.encode(message.paymentInfoAction, writer.uint32(/* id 48, wireType 2 =*/386).fork()).ldelim();
if (message.customPaymentMethodsAction != null && Object.hasOwnProperty.call(message, "customPaymentMethodsAction"))
$root.SyncAction.SyncActionValue.CustomPaymentMethodsAction.encode(message.customPaymentMethodsAction, writer.uint32(/* id 49, wireType 2 =*/394).fork()).ldelim();
if (message.lockChatAction != null && Object.hasOwnProperty.call(message, "lockChatAction"))
$root.SyncAction.SyncActionValue.LockChatAction.encode(message.lockChatAction, writer.uint32(/* id 50, wireType 2 =*/402).fork()).ldelim();
if (message.chatLockSettings != null && Object.hasOwnProperty.call(message, "chatLockSettings"))
$root.ChatLockSettings.ChatLockSettings.encode(message.chatLockSettings, writer.uint32(/* id 51, wireType 2 =*/410).fork()).ldelim();
if (message.wamoUserIdentifierAction != null && Object.hasOwnProperty.call(message, "wamoUserIdentifierAction"))
$root.SyncAction.SyncActionValue.WamoUserIdentifierAction.encode(message.wamoUserIdentifierAction, writer.uint32(/* id 52, wireType 2 =*/418).fork()).ldelim();
if (message.privacySettingDisableLinkPreviewsAction != null && Object.hasOwnProperty.call(message, "privacySettingDisableLinkPreviewsAction"))
$root.SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.encode(message.privacySettingDisableLinkPreviewsAction, writer.uint32(/* id 53, wireType 2 =*/426).fork()).ldelim();
if (message.deviceCapabilities != null && Object.hasOwnProperty.call(message, "deviceCapabilities"))
$root.DeviceCapabilities.DeviceCapabilities.encode(message.deviceCapabilities, writer.uint32(/* id 54, wireType 2 =*/434).fork()).ldelim();
if (message.noteEditAction != null && Object.hasOwnProperty.call(message, "noteEditAction"))
$root.SyncAction.SyncActionValue.NoteEditAction.encode(message.noteEditAction, writer.uint32(/* id 55, wireType 2 =*/442).fork()).ldelim();
if (message.favoritesAction != null && Object.hasOwnProperty.call(message, "favoritesAction"))
$root.SyncAction.SyncActionValue.FavoritesAction.encode(message.favoritesAction, writer.uint32(/* id 56, wireType 2 =*/450).fork()).ldelim();
if (message.merchantPaymentPartnerAction != null && Object.hasOwnProperty.call(message, "merchantPaymentPartnerAction"))
$root.SyncAction.SyncActionValue.MerchantPaymentPartnerAction.encode(message.merchantPaymentPartnerAction, writer.uint32(/* id 57, wireType 2 =*/458).fork()).ldelim();
if (message.waffleAccountLinkStateAction != null && Object.hasOwnProperty.call(message, "waffleAccountLinkStateAction"))
$root.SyncAction.SyncActionValue.WaffleAccountLinkStateAction.encode(message.waffleAccountLinkStateAction, writer.uint32(/* id 58, wireType 2 =*/466).fork()).ldelim();
if (message.usernameChatStartMode != null && Object.hasOwnProperty.call(message, "usernameChatStartMode"))
$root.SyncAction.SyncActionValue.UsernameChatStartModeAction.encode(message.usernameChatStartMode, writer.uint32(/* id 59, wireType 2 =*/474).fork()).ldelim();
if (message.notificationActivitySettingAction != null && Object.hasOwnProperty.call(message, "notificationActivitySettingAction"))
$root.SyncAction.SyncActionValue.NotificationActivitySettingAction.encode(message.notificationActivitySettingAction, writer.uint32(/* id 60, wireType 2 =*/482).fork()).ldelim();
if (message.lidContactAction != null && Object.hasOwnProperty.call(message, "lidContactAction"))
$root.SyncAction.SyncActionValue.LidContactAction.encode(message.lidContactAction, writer.uint32(/* id 61, wireType 2 =*/490).fork()).ldelim();
if (message.ctwaPerCustomerDataSharingAction != null && Object.hasOwnProperty.call(message, "ctwaPerCustomerDataSharingAction"))
$root.SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.encode(message.ctwaPerCustomerDataSharingAction, writer.uint32(/* id 62, wireType 2 =*/498).fork()).ldelim();
if (message.paymentTosAction != null && Object.hasOwnProperty.call(message, "paymentTosAction"))
$root.SyncAction.SyncActionValue.PaymentTosAction.encode(message.paymentTosAction, writer.uint32(/* id 63, wireType 2 =*/506).fork()).ldelim();
return writer;
};
/**
* Encodes the specified SyncActionValue message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue
* @static
* @param {SyncAction.ISyncActionValue} message SyncActionValue message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SyncActionValue.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a SyncActionValue message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue} SyncActionValue
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SyncActionValue.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.timestamp = reader.int64();
break;
}
case 2: {
message.starAction = $root.SyncAction.SyncActionValue.StarAction.decode(reader, reader.uint32());
break;
}
case 3: {
message.contactAction = $root.SyncAction.SyncActionValue.ContactAction.decode(reader, reader.uint32());
break;
}
case 4: {
message.muteAction = $root.SyncAction.SyncActionValue.MuteAction.decode(reader, reader.uint32());
break;
}
case 5: {
message.pinAction = $root.SyncAction.SyncActionValue.PinAction.decode(reader, reader.uint32());
break;
}
case 6: {
message.securityNotificationSetting = $root.SyncAction.SyncActionValue.SecurityNotificationSetting.decode(reader, reader.uint32());
break;
}
case 7: {
message.pushNameSetting = $root.SyncAction.SyncActionValue.PushNameSetting.decode(reader, reader.uint32());
break;
}
case 8: {
message.quickReplyAction = $root.SyncAction.SyncActionValue.QuickReplyAction.decode(reader, reader.uint32());
break;
}
case 11: {
message.recentEmojiWeightsAction = $root.SyncAction.SyncActionValue.RecentEmojiWeightsAction.decode(reader, reader.uint32());
break;
}
case 14: {
message.labelEditAction = $root.SyncAction.SyncActionValue.LabelEditAction.decode(reader, reader.uint32());
break;
}
case 15: {
message.labelAssociationAction = $root.SyncAction.SyncActionValue.LabelAssociationAction.decode(reader, reader.uint32());
break;
}
case 16: {
message.localeSetting = $root.SyncAction.SyncActionValue.LocaleSetting.decode(reader, reader.uint32());
break;
}
case 17: {
message.archiveChatAction = $root.SyncAction.SyncActionValue.ArchiveChatAction.decode(reader, reader.uint32());
break;
}
case 18: {
message.deleteMessageForMeAction = $root.SyncAction.SyncActionValue.DeleteMessageForMeAction.decode(reader, reader.uint32());
break;
}
case 19: {
message.keyExpiration = $root.SyncAction.SyncActionValue.KeyExpiration.decode(reader, reader.uint32());
break;
}
case 20: {
message.markChatAsReadAction = $root.SyncAction.SyncActionValue.MarkChatAsReadAction.decode(reader, reader.uint32());
break;
}
case 21: {
message.clearChatAction = $root.SyncAction.SyncActionValue.ClearChatAction.decode(reader, reader.uint32());
break;
}
case 22: {
message.deleteChatAction = $root.SyncAction.SyncActionValue.DeleteChatAction.decode(reader, reader.uint32());
break;
}
case 23: {
message.unarchiveChatsSetting = $root.SyncAction.SyncActionValue.UnarchiveChatsSetting.decode(reader, reader.uint32());
break;
}
case 24: {
message.primaryFeature = $root.SyncAction.SyncActionValue.PrimaryFeature.decode(reader, reader.uint32());
break;
}
case 26: {
message.androidUnsupportedActions = $root.SyncAction.SyncActionValue.AndroidUnsupportedActions.decode(reader, reader.uint32());
break;
}
case 27: {
message.agentAction = $root.SyncAction.SyncActionValue.AgentAction.decode(reader, reader.uint32());
break;
}
case 28: {
message.subscriptionAction = $root.SyncAction.SyncActionValue.SubscriptionAction.decode(reader, reader.uint32());
break;
}
case 29: {
message.userStatusMuteAction = $root.SyncAction.SyncActionValue.UserStatusMuteAction.decode(reader, reader.uint32());
break;
}
case 30: {
message.timeFormatAction = $root.SyncAction.SyncActionValue.TimeFormatAction.decode(reader, reader.uint32());
break;
}
case 31: {
message.nuxAction = $root.SyncAction.SyncActionValue.NuxAction.decode(reader, reader.uint32());
break;
}
case 32: {
message.primaryVersionAction = $root.SyncAction.SyncActionValue.PrimaryVersionAction.decode(reader, reader.uint32());
break;
}
case 33: {
message.stickerAction = $root.SyncAction.SyncActionValue.StickerAction.decode(reader, reader.uint32());
break;
}
case 34: {
message.removeRecentStickerAction = $root.SyncAction.SyncActionValue.RemoveRecentStickerAction.decode(reader, reader.uint32());
break;
}
case 35: {
message.chatAssignment = $root.SyncAction.SyncActionValue.ChatAssignmentAction.decode(reader, reader.uint32());
break;
}
case 36: {
message.chatAssignmentOpenedStatus = $root.SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.decode(reader, reader.uint32());
break;
}
case 37: {
message.pnForLidChatAction = $root.SyncAction.SyncActionValue.PnForLidChatAction.decode(reader, reader.uint32());
break;
}
case 38: {
message.marketingMessageAction = $root.SyncAction.SyncActionValue.MarketingMessageAction.decode(reader, reader.uint32());
break;
}
case 39: {
message.marketingMessageBroadcastAction = $root.SyncAction.SyncActionValue.MarketingMessageBroadcastAction.decode(reader, reader.uint32());
break;
}
case 40: {
message.externalWebBetaAction = $root.SyncAction.SyncActionValue.ExternalWebBetaAction.decode(reader, reader.uint32());
break;
}
case 41: {
message.privacySettingRelayAllCalls = $root.SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.decode(reader, reader.uint32());
break;
}
case 42: {
message.callLogAction = $root.SyncAction.SyncActionValue.CallLogAction.decode(reader, reader.uint32());
break;
}
case 44: {
message.statusPrivacy = $root.SyncAction.SyncActionValue.StatusPrivacyAction.decode(reader, reader.uint32());
break;
}
case 45: {
message.botWelcomeRequestAction = $root.SyncAction.SyncActionValue.BotWelcomeRequestAction.decode(reader, reader.uint32());
break;
}
case 46: {
message.deleteIndividualCallLog = $root.SyncAction.SyncActionValue.DeleteIndividualCallLogAction.decode(reader, reader.uint32());
break;
}
case 47: {
message.labelReorderingAction = $root.SyncAction.SyncActionValue.LabelReorderingAction.decode(reader, reader.uint32());
break;
}
case 48: {
message.paymentInfoAction = $root.SyncAction.SyncActionValue.PaymentInfoAction.decode(reader, reader.uint32());
break;
}
case 49: {
message.customPaymentMethodsAction = $root.SyncAction.SyncActionValue.CustomPaymentMethodsAction.decode(reader, reader.uint32());
break;
}
case 50: {
message.lockChatAction = $root.SyncAction.SyncActionValue.LockChatAction.decode(reader, reader.uint32());
break;
}
case 51: {
message.chatLockSettings = $root.ChatLockSettings.ChatLockSettings.decode(reader, reader.uint32());
break;
}
case 52: {
message.wamoUserIdentifierAction = $root.SyncAction.SyncActionValue.WamoUserIdentifierAction.decode(reader, reader.uint32());
break;
}
case 53: {
message.privacySettingDisableLinkPreviewsAction = $root.SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.decode(reader, reader.uint32());
break;
}
case 54: {
message.deviceCapabilities = $root.DeviceCapabilities.DeviceCapabilities.decode(reader, reader.uint32());
break;
}
case 55: {
message.noteEditAction = $root.SyncAction.SyncActionValue.NoteEditAction.decode(reader, reader.uint32());
break;
}
case 56: {
message.favoritesAction = $root.SyncAction.SyncActionValue.FavoritesAction.decode(reader, reader.uint32());
break;
}
case 57: {
message.merchantPaymentPartnerAction = $root.SyncAction.SyncActionValue.MerchantPaymentPartnerAction.decode(reader, reader.uint32());
break;
}
case 58: {
message.waffleAccountLinkStateAction = $root.SyncAction.SyncActionValue.WaffleAccountLinkStateAction.decode(reader, reader.uint32());
break;
}
case 59: {
message.usernameChatStartMode = $root.SyncAction.SyncActionValue.UsernameChatStartModeAction.decode(reader, reader.uint32());
break;
}
case 60: {
message.notificationActivitySettingAction = $root.SyncAction.SyncActionValue.NotificationActivitySettingAction.decode(reader, reader.uint32());
break;
}
case 61: {
message.lidContactAction = $root.SyncAction.SyncActionValue.LidContactAction.decode(reader, reader.uint32());
break;
}
case 62: {
message.ctwaPerCustomerDataSharingAction = $root.SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.decode(reader, reader.uint32());
break;
}
case 63: {
message.paymentTosAction = $root.SyncAction.SyncActionValue.PaymentTosAction.decode(reader, reader.uint32());
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a SyncActionValue message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue} SyncActionValue
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SyncActionValue.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a SyncActionValue message.
* @function verify
* @memberof SyncAction.SyncActionValue
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
SyncActionValue.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
properties._timestamp = 1;
if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
return "timestamp: integer|Long expected";
}
if (message.starAction != null && message.hasOwnProperty("starAction")) {
properties._starAction = 1;
{
var error = $root.SyncAction.SyncActionValue.StarAction.verify(message.starAction);
if (error)
return "starAction." + error;
}
}
if (message.contactAction != null && message.hasOwnProperty("contactAction")) {
properties._contactAction = 1;
{
var error = $root.SyncAction.SyncActionValue.ContactAction.verify(message.contactAction);
if (error)
return "contactAction." + error;
}
}
if (message.muteAction != null && message.hasOwnProperty("muteAction")) {
properties._muteAction = 1;
{
var error = $root.SyncAction.SyncActionValue.MuteAction.verify(message.muteAction);
if (error)
return "muteAction." + error;
}
}
if (message.pinAction != null && message.hasOwnProperty("pinAction")) {
properties._pinAction = 1;
{
var error = $root.SyncAction.SyncActionValue.PinAction.verify(message.pinAction);
if (error)
return "pinAction." + error;
}
}
if (message.securityNotificationSetting != null && message.hasOwnProperty("securityNotificationSetting")) {
properties._securityNotificationSetting = 1;
{
var error = $root.SyncAction.SyncActionValue.SecurityNotificationSetting.verify(message.securityNotificationSetting);
if (error)
return "securityNotificationSetting." + error;
}
}
if (message.pushNameSetting != null && message.hasOwnProperty("pushNameSetting")) {
properties._pushNameSetting = 1;
{
var error = $root.SyncAction.SyncActionValue.PushNameSetting.verify(message.pushNameSetting);
if (error)
return "pushNameSetting." + error;
}
}
if (message.quickReplyAction != null && message.hasOwnProperty("quickReplyAction")) {
properties._quickReplyAction = 1;
{
var error = $root.SyncAction.SyncActionValue.QuickReplyAction.verify(message.quickReplyAction);
if (error)
return "quickReplyAction." + error;
}
}
if (message.recentEmojiWeightsAction != null && message.hasOwnProperty("recentEmojiWeightsAction")) {
properties._recentEmojiWeightsAction = 1;
{
var error = $root.SyncAction.SyncActionValue.RecentEmojiWeightsAction.verify(message.recentEmojiWeightsAction);
if (error)
return "recentEmojiWeightsAction." + error;
}
}
if (message.labelEditAction != null && message.hasOwnProperty("labelEditAction")) {
properties._labelEditAction = 1;
{
var error = $root.SyncAction.SyncActionValue.LabelEditAction.verify(message.labelEditAction);
if (error)
return "labelEditAction." + error;
}
}
if (message.labelAssociationAction != null && message.hasOwnProperty("labelAssociationAction")) {
properties._labelAssociationAction = 1;
{
var error = $root.SyncAction.SyncActionValue.LabelAssociationAction.verify(message.labelAssociationAction);
if (error)
return "labelAssociationAction." + error;
}
}
if (message.localeSetting != null && message.hasOwnProperty("localeSetting")) {
properties._localeSetting = 1;
{
var error = $root.SyncAction.SyncActionValue.LocaleSetting.verify(message.localeSetting);
if (error)
return "localeSetting." + error;
}
}
if (message.archiveChatAction != null && message.hasOwnProperty("archiveChatAction")) {
properties._archiveChatAction = 1;
{
var error = $root.SyncAction.SyncActionValue.ArchiveChatAction.verify(message.archiveChatAction);
if (error)
return "archiveChatAction." + error;
}
}
if (message.deleteMessageForMeAction != null && message.hasOwnProperty("deleteMessageForMeAction")) {
properties._deleteMessageForMeAction = 1;
{
var error = $root.SyncAction.SyncActionValue.DeleteMessageForMeAction.verify(message.deleteMessageForMeAction);
if (error)
return "deleteMessageForMeAction." + error;
}
}
if (message.keyExpiration != null && message.hasOwnProperty("keyExpiration")) {
properties._keyExpiration = 1;
{
var error = $root.SyncAction.SyncActionValue.KeyExpiration.verify(message.keyExpiration);
if (error)
return "keyExpiration." + error;
}
}
if (message.markChatAsReadAction != null && message.hasOwnProperty("markChatAsReadAction")) {
properties._markChatAsReadAction = 1;
{
var error = $root.SyncAction.SyncActionValue.MarkChatAsReadAction.verify(message.markChatAsReadAction);
if (error)
return "markChatAsReadAction." + error;
}
}
if (message.clearChatAction != null && message.hasOwnProperty("clearChatAction")) {
properties._clearChatAction = 1;
{
var error = $root.SyncAction.SyncActionValue.ClearChatAction.verify(message.clearChatAction);
if (error)
return "clearChatAction." + error;
}
}
if (message.deleteChatAction != null && message.hasOwnProperty("deleteChatAction")) {
properties._deleteChatAction = 1;
{
var error = $root.SyncAction.SyncActionValue.DeleteChatAction.verify(message.deleteChatAction);
if (error)
return "deleteChatAction." + error;
}
}
if (message.unarchiveChatsSetting != null && message.hasOwnProperty("unarchiveChatsSetting")) {
properties._unarchiveChatsSetting = 1;
{
var error = $root.SyncAction.SyncActionValue.UnarchiveChatsSetting.verify(message.unarchiveChatsSetting);
if (error)
return "unarchiveChatsSetting." + error;
}
}
if (message.primaryFeature != null && message.hasOwnProperty("primaryFeature")) {
properties._primaryFeature = 1;
{
var error = $root.SyncAction.SyncActionValue.PrimaryFeature.verify(message.primaryFeature);
if (error)
return "primaryFeature." + error;
}
}
if (message.androidUnsupportedActions != null && message.hasOwnProperty("androidUnsupportedActions")) {
properties._androidUnsupportedActions = 1;
{
var error = $root.SyncAction.SyncActionValue.AndroidUnsupportedActions.verify(message.androidUnsupportedActions);
if (error)
return "androidUnsupportedActions." + error;
}
}
if (message.agentAction != null && message.hasOwnProperty("agentAction")) {
properties._agentAction = 1;
{
var error = $root.SyncAction.SyncActionValue.AgentAction.verify(message.agentAction);
if (error)
return "agentAction." + error;
}
}
if (message.subscriptionAction != null && message.hasOwnProperty("subscriptionAction")) {
properties._subscriptionAction = 1;
{
var error = $root.SyncAction.SyncActionValue.SubscriptionAction.verify(message.subscriptionAction);
if (error)
return "subscriptionAction." + error;
}
}
if (message.userStatusMuteAction != null && message.hasOwnProperty("userStatusMuteAction")) {
properties._userStatusMuteAction = 1;
{
var error = $root.SyncAction.SyncActionValue.UserStatusMuteAction.verify(message.userStatusMuteAction);
if (error)
return "userStatusMuteAction." + error;
}
}
if (message.timeFormatAction != null && message.hasOwnProperty("timeFormatAction")) {
properties._timeFormatAction = 1;
{
var error = $root.SyncAction.SyncActionValue.TimeFormatAction.verify(message.timeFormatAction);
if (error)
return "timeFormatAction." + error;
}
}
if (message.nuxAction != null && message.hasOwnProperty("nuxAction")) {
properties._nuxAction = 1;
{
var error = $root.SyncAction.SyncActionValue.NuxAction.verify(message.nuxAction);
if (error)
return "nuxAction." + error;
}
}
if (message.primaryVersionAction != null && message.hasOwnProperty("primaryVersionAction")) {
properties._primaryVersionAction = 1;
{
var error = $root.SyncAction.SyncActionValue.PrimaryVersionAction.verify(message.primaryVersionAction);
if (error)
return "primaryVersionAction." + error;
}
}
if (message.stickerAction != null && message.hasOwnProperty("stickerAction")) {
properties._stickerAction = 1;
{
var error = $root.SyncAction.SyncActionValue.StickerAction.verify(message.stickerAction);
if (error)
return "stickerAction." + error;
}
}
if (message.removeRecentStickerAction != null && message.hasOwnProperty("removeRecentStickerAction")) {
properties._removeRecentStickerAction = 1;
{
var error = $root.SyncAction.SyncActionValue.RemoveRecentStickerAction.verify(message.removeRecentStickerAction);
if (error)
return "removeRecentStickerAction." + error;
}
}
if (message.chatAssignment != null && message.hasOwnProperty("chatAssignment")) {
properties._chatAssignment = 1;
{
var error = $root.SyncAction.SyncActionValue.ChatAssignmentAction.verify(message.chatAssignment);
if (error)
return "chatAssignment." + error;
}
}
if (message.chatAssignmentOpenedStatus != null && message.hasOwnProperty("chatAssignmentOpenedStatus")) {
properties._chatAssignmentOpenedStatus = 1;
{
var error = $root.SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.verify(message.chatAssignmentOpenedStatus);
if (error)
return "chatAssignmentOpenedStatus." + error;
}
}
if (message.pnForLidChatAction != null && message.hasOwnProperty("pnForLidChatAction")) {
properties._pnForLidChatAction = 1;
{
var error = $root.SyncAction.SyncActionValue.PnForLidChatAction.verify(message.pnForLidChatAction);
if (error)
return "pnForLidChatAction." + error;
}
}
if (message.marketingMessageAction != null && message.hasOwnProperty("marketingMessageAction")) {
properties._marketingMessageAction = 1;
{
var error = $root.SyncAction.SyncActionValue.MarketingMessageAction.verify(message.marketingMessageAction);
if (error)
return "marketingMessageAction." + error;
}
}
if (message.marketingMessageBroadcastAction != null && message.hasOwnProperty("marketingMessageBroadcastAction")) {
properties._marketingMessageBroadcastAction = 1;
{
var error = $root.SyncAction.SyncActionValue.MarketingMessageBroadcastAction.verify(message.marketingMessageBroadcastAction);
if (error)
return "marketingMessageBroadcastAction." + error;
}
}
if (message.externalWebBetaAction != null && message.hasOwnProperty("externalWebBetaAction")) {
properties._externalWebBetaAction = 1;
{
var error = $root.SyncAction.SyncActionValue.ExternalWebBetaAction.verify(message.externalWebBetaAction);
if (error)
return "externalWebBetaAction." + error;
}
}
if (message.privacySettingRelayAllCalls != null && message.hasOwnProperty("privacySettingRelayAllCalls")) {
properties._privacySettingRelayAllCalls = 1;
{
var error = $root.SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.verify(message.privacySettingRelayAllCalls);
if (error)
return "privacySettingRelayAllCalls." + error;
}
}
if (message.callLogAction != null && message.hasOwnProperty("callLogAction")) {
properties._callLogAction = 1;
{
var error = $root.SyncAction.SyncActionValue.CallLogAction.verify(message.callLogAction);
if (error)
return "callLogAction." + error;
}
}
if (message.statusPrivacy != null && message.hasOwnProperty("statusPrivacy")) {
properties._statusPrivacy = 1;
{
var error = $root.SyncAction.SyncActionValue.StatusPrivacyAction.verify(message.statusPrivacy);
if (error)
return "statusPrivacy." + error;
}
}
if (message.botWelcomeRequestAction != null && message.hasOwnProperty("botWelcomeRequestAction")) {
properties._botWelcomeRequestAction = 1;
{
var error = $root.SyncAction.SyncActionValue.BotWelcomeRequestAction.verify(message.botWelcomeRequestAction);
if (error)
return "botWelcomeRequestAction." + error;
}
}
if (message.deleteIndividualCallLog != null && message.hasOwnProperty("deleteIndividualCallLog")) {
properties._deleteIndividualCallLog = 1;
{
var error = $root.SyncAction.SyncActionValue.DeleteIndividualCallLogAction.verify(message.deleteIndividualCallLog);
if (error)
return "deleteIndividualCallLog." + error;
}
}
if (message.labelReorderingAction != null && message.hasOwnProperty("labelReorderingAction")) {
properties._labelReorderingAction = 1;
{
var error = $root.SyncAction.SyncActionValue.LabelReorderingAction.verify(message.labelReorderingAction);
if (error)
return "labelReorderingAction." + error;
}
}
if (message.paymentInfoAction != null && message.hasOwnProperty("paymentInfoAction")) {
properties._paymentInfoAction = 1;
{
var error = $root.SyncAction.SyncActionValue.PaymentInfoAction.verify(message.paymentInfoAction);
if (error)
return "paymentInfoAction." + error;
}
}
if (message.customPaymentMethodsAction != null && message.hasOwnProperty("customPaymentMethodsAction")) {
properties._customPaymentMethodsAction = 1;
{
var error = $root.SyncAction.SyncActionValue.CustomPaymentMethodsAction.verify(message.customPaymentMethodsAction);
if (error)
return "customPaymentMethodsAction." + error;
}
}
if (message.lockChatAction != null && message.hasOwnProperty("lockChatAction")) {
properties._lockChatAction = 1;
{
var error = $root.SyncAction.SyncActionValue.LockChatAction.verify(message.lockChatAction);
if (error)
return "lockChatAction." + error;
}
}
if (message.chatLockSettings != null && message.hasOwnProperty("chatLockSettings")) {
properties._chatLockSettings = 1;
{
var error = $root.ChatLockSettings.ChatLockSettings.verify(message.chatLockSettings);
if (error)
return "chatLockSettings." + error;
}
}
if (message.wamoUserIdentifierAction != null && message.hasOwnProperty("wamoUserIdentifierAction")) {
properties._wamoUserIdentifierAction = 1;
{
var error = $root.SyncAction.SyncActionValue.WamoUserIdentifierAction.verify(message.wamoUserIdentifierAction);
if (error)
return "wamoUserIdentifierAction." + error;
}
}
if (message.privacySettingDisableLinkPreviewsAction != null && message.hasOwnProperty("privacySettingDisableLinkPreviewsAction")) {
properties._privacySettingDisableLinkPreviewsAction = 1;
{
var error = $root.SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.verify(message.privacySettingDisableLinkPreviewsAction);
if (error)
return "privacySettingDisableLinkPreviewsAction." + error;
}
}
if (message.deviceCapabilities != null && message.hasOwnProperty("deviceCapabilities")) {
properties._deviceCapabilities = 1;
{
var error = $root.DeviceCapabilities.DeviceCapabilities.verify(message.deviceCapabilities);
if (error)
return "deviceCapabilities." + error;
}
}
if (message.noteEditAction != null && message.hasOwnProperty("noteEditAction")) {
properties._noteEditAction = 1;
{
var error = $root.SyncAction.SyncActionValue.NoteEditAction.verify(message.noteEditAction);
if (error)
return "noteEditAction." + error;
}
}
if (message.favoritesAction != null && message.hasOwnProperty("favoritesAction")) {
properties._favoritesAction = 1;
{
var error = $root.SyncAction.SyncActionValue.FavoritesAction.verify(message.favoritesAction);
if (error)
return "favoritesAction." + error;
}
}
if (message.merchantPaymentPartnerAction != null && message.hasOwnProperty("merchantPaymentPartnerAction")) {
properties._merchantPaymentPartnerAction = 1;
{
var error = $root.SyncAction.SyncActionValue.MerchantPaymentPartnerAction.verify(message.merchantPaymentPartnerAction);
if (error)
return "merchantPaymentPartnerAction." + error;
}
}
if (message.waffleAccountLinkStateAction != null && message.hasOwnProperty("waffleAccountLinkStateAction")) {
properties._waffleAccountLinkStateAction = 1;
{
var error = $root.SyncAction.SyncActionValue.WaffleAccountLinkStateAction.verify(message.waffleAccountLinkStateAction);
if (error)
return "waffleAccountLinkStateAction." + error;
}
}
if (message.usernameChatStartMode != null && message.hasOwnProperty("usernameChatStartMode")) {
properties._usernameChatStartMode = 1;
{
var error = $root.SyncAction.SyncActionValue.UsernameChatStartModeAction.verify(message.usernameChatStartMode);
if (error)
return "usernameChatStartMode." + error;
}
}
if (message.notificationActivitySettingAction != null && message.hasOwnProperty("notificationActivitySettingAction")) {
properties._notificationActivitySettingAction = 1;
{
var error = $root.SyncAction.SyncActionValue.NotificationActivitySettingAction.verify(message.notificationActivitySettingAction);
if (error)
return "notificationActivitySettingAction." + error;
}
}
if (message.lidContactAction != null && message.hasOwnProperty("lidContactAction")) {
properties._lidContactAction = 1;
{
var error = $root.SyncAction.SyncActionValue.LidContactAction.verify(message.lidContactAction);
if (error)
return "lidContactAction." + error;
}
}
if (message.ctwaPerCustomerDataSharingAction != null && message.hasOwnProperty("ctwaPerCustomerDataSharingAction")) {
properties._ctwaPerCustomerDataSharingAction = 1;
{
var error = $root.SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.verify(message.ctwaPerCustomerDataSharingAction);
if (error)
return "ctwaPerCustomerDataSharingAction." + error;
}
}
if (message.paymentTosAction != null && message.hasOwnProperty("paymentTosAction")) {
properties._paymentTosAction = 1;
{
var error = $root.SyncAction.SyncActionValue.PaymentTosAction.verify(message.paymentTosAction);
if (error)
return "paymentTosAction." + error;
}
}
return null;
};
/**
* Creates a SyncActionValue message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue} SyncActionValue
*/
SyncActionValue.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue)
return object;
var message = new $root.SyncAction.SyncActionValue();
if (object.timestamp != null)
if ($util.Long)
(message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
else if (typeof object.timestamp === "string")
message.timestamp = parseInt(object.timestamp, 10);
else if (typeof object.timestamp === "number")
message.timestamp = object.timestamp;
else if (typeof object.timestamp === "object")
message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
if (object.starAction != null) {
if (typeof object.starAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.starAction: object expected");
message.starAction = $root.SyncAction.SyncActionValue.StarAction.fromObject(object.starAction);
}
if (object.contactAction != null) {
if (typeof object.contactAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.contactAction: object expected");
message.contactAction = $root.SyncAction.SyncActionValue.ContactAction.fromObject(object.contactAction);
}
if (object.muteAction != null) {
if (typeof object.muteAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.muteAction: object expected");
message.muteAction = $root.SyncAction.SyncActionValue.MuteAction.fromObject(object.muteAction);
}
if (object.pinAction != null) {
if (typeof object.pinAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.pinAction: object expected");
message.pinAction = $root.SyncAction.SyncActionValue.PinAction.fromObject(object.pinAction);
}
if (object.securityNotificationSetting != null) {
if (typeof object.securityNotificationSetting !== "object")
throw TypeError(".SyncAction.SyncActionValue.securityNotificationSetting: object expected");
message.securityNotificationSetting = $root.SyncAction.SyncActionValue.SecurityNotificationSetting.fromObject(object.securityNotificationSetting);
}
if (object.pushNameSetting != null) {
if (typeof object.pushNameSetting !== "object")
throw TypeError(".SyncAction.SyncActionValue.pushNameSetting: object expected");
message.pushNameSetting = $root.SyncAction.SyncActionValue.PushNameSetting.fromObject(object.pushNameSetting);
}
if (object.quickReplyAction != null) {
if (typeof object.quickReplyAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.quickReplyAction: object expected");
message.quickReplyAction = $root.SyncAction.SyncActionValue.QuickReplyAction.fromObject(object.quickReplyAction);
}
if (object.recentEmojiWeightsAction != null) {
if (typeof object.recentEmojiWeightsAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.recentEmojiWeightsAction: object expected");
message.recentEmojiWeightsAction = $root.SyncAction.SyncActionValue.RecentEmojiWeightsAction.fromObject(object.recentEmojiWeightsAction);
}
if (object.labelEditAction != null) {
if (typeof object.labelEditAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.labelEditAction: object expected");
message.labelEditAction = $root.SyncAction.SyncActionValue.LabelEditAction.fromObject(object.labelEditAction);
}
if (object.labelAssociationAction != null) {
if (typeof object.labelAssociationAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.labelAssociationAction: object expected");
message.labelAssociationAction = $root.SyncAction.SyncActionValue.LabelAssociationAction.fromObject(object.labelAssociationAction);
}
if (object.localeSetting != null) {
if (typeof object.localeSetting !== "object")
throw TypeError(".SyncAction.SyncActionValue.localeSetting: object expected");
message.localeSetting = $root.SyncAction.SyncActionValue.LocaleSetting.fromObject(object.localeSetting);
}
if (object.archiveChatAction != null) {
if (typeof object.archiveChatAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.archiveChatAction: object expected");
message.archiveChatAction = $root.SyncAction.SyncActionValue.ArchiveChatAction.fromObject(object.archiveChatAction);
}
if (object.deleteMessageForMeAction != null) {
if (typeof object.deleteMessageForMeAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.deleteMessageForMeAction: object expected");
message.deleteMessageForMeAction = $root.SyncAction.SyncActionValue.DeleteMessageForMeAction.fromObject(object.deleteMessageForMeAction);
}
if (object.keyExpiration != null) {
if (typeof object.keyExpiration !== "object")
throw TypeError(".SyncAction.SyncActionValue.keyExpiration: object expected");
message.keyExpiration = $root.SyncAction.SyncActionValue.KeyExpiration.fromObject(object.keyExpiration);
}
if (object.markChatAsReadAction != null) {
if (typeof object.markChatAsReadAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.markChatAsReadAction: object expected");
message.markChatAsReadAction = $root.SyncAction.SyncActionValue.MarkChatAsReadAction.fromObject(object.markChatAsReadAction);
}
if (object.clearChatAction != null) {
if (typeof object.clearChatAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.clearChatAction: object expected");
message.clearChatAction = $root.SyncAction.SyncActionValue.ClearChatAction.fromObject(object.clearChatAction);
}
if (object.deleteChatAction != null) {
if (typeof object.deleteChatAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.deleteChatAction: object expected");
message.deleteChatAction = $root.SyncAction.SyncActionValue.DeleteChatAction.fromObject(object.deleteChatAction);
}
if (object.unarchiveChatsSetting != null) {
if (typeof object.unarchiveChatsSetting !== "object")
throw TypeError(".SyncAction.SyncActionValue.unarchiveChatsSetting: object expected");
message.unarchiveChatsSetting = $root.SyncAction.SyncActionValue.UnarchiveChatsSetting.fromObject(object.unarchiveChatsSetting);
}
if (object.primaryFeature != null) {
if (typeof object.primaryFeature !== "object")
throw TypeError(".SyncAction.SyncActionValue.primaryFeature: object expected");
message.primaryFeature = $root.SyncAction.SyncActionValue.PrimaryFeature.fromObject(object.primaryFeature);
}
if (object.androidUnsupportedActions != null) {
if (typeof object.androidUnsupportedActions !== "object")
throw TypeError(".SyncAction.SyncActionValue.androidUnsupportedActions: object expected");
message.androidUnsupportedActions = $root.SyncAction.SyncActionValue.AndroidUnsupportedActions.fromObject(object.androidUnsupportedActions);
}
if (object.agentAction != null) {
if (typeof object.agentAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.agentAction: object expected");
message.agentAction = $root.SyncAction.SyncActionValue.AgentAction.fromObject(object.agentAction);
}
if (object.subscriptionAction != null) {
if (typeof object.subscriptionAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.subscriptionAction: object expected");
message.subscriptionAction = $root.SyncAction.SyncActionValue.SubscriptionAction.fromObject(object.subscriptionAction);
}
if (object.userStatusMuteAction != null) {
if (typeof object.userStatusMuteAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.userStatusMuteAction: object expected");
message.userStatusMuteAction = $root.SyncAction.SyncActionValue.UserStatusMuteAction.fromObject(object.userStatusMuteAction);
}
if (object.timeFormatAction != null) {
if (typeof object.timeFormatAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.timeFormatAction: object expected");
message.timeFormatAction = $root.SyncAction.SyncActionValue.TimeFormatAction.fromObject(object.timeFormatAction);
}
if (object.nuxAction != null) {
if (typeof object.nuxAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.nuxAction: object expected");
message.nuxAction = $root.SyncAction.SyncActionValue.NuxAction.fromObject(object.nuxAction);
}
if (object.primaryVersionAction != null) {
if (typeof object.primaryVersionAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.primaryVersionAction: object expected");
message.primaryVersionAction = $root.SyncAction.SyncActionValue.PrimaryVersionAction.fromObject(object.primaryVersionAction);
}
if (object.stickerAction != null) {
if (typeof object.stickerAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.stickerAction: object expected");
message.stickerAction = $root.SyncAction.SyncActionValue.StickerAction.fromObject(object.stickerAction);
}
if (object.removeRecentStickerAction != null) {
if (typeof object.removeRecentStickerAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.removeRecentStickerAction: object expected");
message.removeRecentStickerAction = $root.SyncAction.SyncActionValue.RemoveRecentStickerAction.fromObject(object.removeRecentStickerAction);
}
if (object.chatAssignment != null) {
if (typeof object.chatAssignment !== "object")
throw TypeError(".SyncAction.SyncActionValue.chatAssignment: object expected");
message.chatAssignment = $root.SyncAction.SyncActionValue.ChatAssignmentAction.fromObject(object.chatAssignment);
}
if (object.chatAssignmentOpenedStatus != null) {
if (typeof object.chatAssignmentOpenedStatus !== "object")
throw TypeError(".SyncAction.SyncActionValue.chatAssignmentOpenedStatus: object expected");
message.chatAssignmentOpenedStatus = $root.SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.fromObject(object.chatAssignmentOpenedStatus);
}
if (object.pnForLidChatAction != null) {
if (typeof object.pnForLidChatAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.pnForLidChatAction: object expected");
message.pnForLidChatAction = $root.SyncAction.SyncActionValue.PnForLidChatAction.fromObject(object.pnForLidChatAction);
}
if (object.marketingMessageAction != null) {
if (typeof object.marketingMessageAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.marketingMessageAction: object expected");
message.marketingMessageAction = $root.SyncAction.SyncActionValue.MarketingMessageAction.fromObject(object.marketingMessageAction);
}
if (object.marketingMessageBroadcastAction != null) {
if (typeof object.marketingMessageBroadcastAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.marketingMessageBroadcastAction: object expected");
message.marketingMessageBroadcastAction = $root.SyncAction.SyncActionValue.MarketingMessageBroadcastAction.fromObject(object.marketingMessageBroadcastAction);
}
if (object.externalWebBetaAction != null) {
if (typeof object.externalWebBetaAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.externalWebBetaAction: object expected");
message.externalWebBetaAction = $root.SyncAction.SyncActionValue.ExternalWebBetaAction.fromObject(object.externalWebBetaAction);
}
if (object.privacySettingRelayAllCalls != null) {
if (typeof object.privacySettingRelayAllCalls !== "object")
throw TypeError(".SyncAction.SyncActionValue.privacySettingRelayAllCalls: object expected");
message.privacySettingRelayAllCalls = $root.SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.fromObject(object.privacySettingRelayAllCalls);
}
if (object.callLogAction != null) {
if (typeof object.callLogAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.callLogAction: object expected");
message.callLogAction = $root.SyncAction.SyncActionValue.CallLogAction.fromObject(object.callLogAction);
}
if (object.statusPrivacy != null) {
if (typeof object.statusPrivacy !== "object")
throw TypeError(".SyncAction.SyncActionValue.statusPrivacy: object expected");
message.statusPrivacy = $root.SyncAction.SyncActionValue.StatusPrivacyAction.fromObject(object.statusPrivacy);
}
if (object.botWelcomeRequestAction != null) {
if (typeof object.botWelcomeRequestAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.botWelcomeRequestAction: object expected");
message.botWelcomeRequestAction = $root.SyncAction.SyncActionValue.BotWelcomeRequestAction.fromObject(object.botWelcomeRequestAction);
}
if (object.deleteIndividualCallLog != null) {
if (typeof object.deleteIndividualCallLog !== "object")
throw TypeError(".SyncAction.SyncActionValue.deleteIndividualCallLog: object expected");
message.deleteIndividualCallLog = $root.SyncAction.SyncActionValue.DeleteIndividualCallLogAction.fromObject(object.deleteIndividualCallLog);
}
if (object.labelReorderingAction != null) {
if (typeof object.labelReorderingAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.labelReorderingAction: object expected");
message.labelReorderingAction = $root.SyncAction.SyncActionValue.LabelReorderingAction.fromObject(object.labelReorderingAction);
}
if (object.paymentInfoAction != null) {
if (typeof object.paymentInfoAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.paymentInfoAction: object expected");
message.paymentInfoAction = $root.SyncAction.SyncActionValue.PaymentInfoAction.fromObject(object.paymentInfoAction);
}
if (object.customPaymentMethodsAction != null) {
if (typeof object.customPaymentMethodsAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.customPaymentMethodsAction: object expected");
message.customPaymentMethodsAction = $root.SyncAction.SyncActionValue.CustomPaymentMethodsAction.fromObject(object.customPaymentMethodsAction);
}
if (object.lockChatAction != null) {
if (typeof object.lockChatAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.lockChatAction: object expected");
message.lockChatAction = $root.SyncAction.SyncActionValue.LockChatAction.fromObject(object.lockChatAction);
}
if (object.chatLockSettings != null) {
if (typeof object.chatLockSettings !== "object")
throw TypeError(".SyncAction.SyncActionValue.chatLockSettings: object expected");
message.chatLockSettings = $root.ChatLockSettings.ChatLockSettings.fromObject(object.chatLockSettings);
}
if (object.wamoUserIdentifierAction != null) {
if (typeof object.wamoUserIdentifierAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.wamoUserIdentifierAction: object expected");
message.wamoUserIdentifierAction = $root.SyncAction.SyncActionValue.WamoUserIdentifierAction.fromObject(object.wamoUserIdentifierAction);
}
if (object.privacySettingDisableLinkPreviewsAction != null) {
if (typeof object.privacySettingDisableLinkPreviewsAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.privacySettingDisableLinkPreviewsAction: object expected");
message.privacySettingDisableLinkPreviewsAction = $root.SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.fromObject(object.privacySettingDisableLinkPreviewsAction);
}
if (object.deviceCapabilities != null) {
if (typeof object.deviceCapabilities !== "object")
throw TypeError(".SyncAction.SyncActionValue.deviceCapabilities: object expected");
message.deviceCapabilities = $root.DeviceCapabilities.DeviceCapabilities.fromObject(object.deviceCapabilities);
}
if (object.noteEditAction != null) {
if (typeof object.noteEditAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.noteEditAction: object expected");
message.noteEditAction = $root.SyncAction.SyncActionValue.NoteEditAction.fromObject(object.noteEditAction);
}
if (object.favoritesAction != null) {
if (typeof object.favoritesAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.favoritesAction: object expected");
message.favoritesAction = $root.SyncAction.SyncActionValue.FavoritesAction.fromObject(object.favoritesAction);
}
if (object.merchantPaymentPartnerAction != null) {
if (typeof object.merchantPaymentPartnerAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.merchantPaymentPartnerAction: object expected");
message.merchantPaymentPartnerAction = $root.SyncAction.SyncActionValue.MerchantPaymentPartnerAction.fromObject(object.merchantPaymentPartnerAction);
}
if (object.waffleAccountLinkStateAction != null) {
if (typeof object.waffleAccountLinkStateAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.waffleAccountLinkStateAction: object expected");
message.waffleAccountLinkStateAction = $root.SyncAction.SyncActionValue.WaffleAccountLinkStateAction.fromObject(object.waffleAccountLinkStateAction);
}
if (object.usernameChatStartMode != null) {
if (typeof object.usernameChatStartMode !== "object")
throw TypeError(".SyncAction.SyncActionValue.usernameChatStartMode: object expected");
message.usernameChatStartMode = $root.SyncAction.SyncActionValue.UsernameChatStartModeAction.fromObject(object.usernameChatStartMode);
}
if (object.notificationActivitySettingAction != null) {
if (typeof object.notificationActivitySettingAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.notificationActivitySettingAction: object expected");
message.notificationActivitySettingAction = $root.SyncAction.SyncActionValue.NotificationActivitySettingAction.fromObject(object.notificationActivitySettingAction);
}
if (object.lidContactAction != null) {
if (typeof object.lidContactAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.lidContactAction: object expected");
message.lidContactAction = $root.SyncAction.SyncActionValue.LidContactAction.fromObject(object.lidContactAction);
}
if (object.ctwaPerCustomerDataSharingAction != null) {
if (typeof object.ctwaPerCustomerDataSharingAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.ctwaPerCustomerDataSharingAction: object expected");
message.ctwaPerCustomerDataSharingAction = $root.SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.fromObject(object.ctwaPerCustomerDataSharingAction);
}
if (object.paymentTosAction != null) {
if (typeof object.paymentTosAction !== "object")
throw TypeError(".SyncAction.SyncActionValue.paymentTosAction: object expected");
message.paymentTosAction = $root.SyncAction.SyncActionValue.PaymentTosAction.fromObject(object.paymentTosAction);
}
return message;
};
/**
* Creates a plain object from a SyncActionValue message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue
* @static
* @param {SyncAction.SyncActionValue} message SyncActionValue
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
SyncActionValue.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
if (typeof message.timestamp === "number")
object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
else
object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
if (options.oneofs)
object._timestamp = "timestamp";
}
if (message.starAction != null && message.hasOwnProperty("starAction")) {
object.starAction = $root.SyncAction.SyncActionValue.StarAction.toObject(message.starAction, options);
if (options.oneofs)
object._starAction = "starAction";
}
if (message.contactAction != null && message.hasOwnProperty("contactAction")) {
object.contactAction = $root.SyncAction.SyncActionValue.ContactAction.toObject(message.contactAction, options);
if (options.oneofs)
object._contactAction = "contactAction";
}
if (message.muteAction != null && message.hasOwnProperty("muteAction")) {
object.muteAction = $root.SyncAction.SyncActionValue.MuteAction.toObject(message.muteAction, options);
if (options.oneofs)
object._muteAction = "muteAction";
}
if (message.pinAction != null && message.hasOwnProperty("pinAction")) {
object.pinAction = $root.SyncAction.SyncActionValue.PinAction.toObject(message.pinAction, options);
if (options.oneofs)
object._pinAction = "pinAction";
}
if (message.securityNotificationSetting != null && message.hasOwnProperty("securityNotificationSetting")) {
object.securityNotificationSetting = $root.SyncAction.SyncActionValue.SecurityNotificationSetting.toObject(message.securityNotificationSetting, options);
if (options.oneofs)
object._securityNotificationSetting = "securityNotificationSetting";
}
if (message.pushNameSetting != null && message.hasOwnProperty("pushNameSetting")) {
object.pushNameSetting = $root.SyncAction.SyncActionValue.PushNameSetting.toObject(message.pushNameSetting, options);
if (options.oneofs)
object._pushNameSetting = "pushNameSetting";
}
if (message.quickReplyAction != null && message.hasOwnProperty("quickReplyAction")) {
object.quickReplyAction = $root.SyncAction.SyncActionValue.QuickReplyAction.toObject(message.quickReplyAction, options);
if (options.oneofs)
object._quickReplyAction = "quickReplyAction";
}
if (message.recentEmojiWeightsAction != null && message.hasOwnProperty("recentEmojiWeightsAction")) {
object.recentEmojiWeightsAction = $root.SyncAction.SyncActionValue.RecentEmojiWeightsAction.toObject(message.recentEmojiWeightsAction, options);
if (options.oneofs)
object._recentEmojiWeightsAction = "recentEmojiWeightsAction";
}
if (message.labelEditAction != null && message.hasOwnProperty("labelEditAction")) {
object.labelEditAction = $root.SyncAction.SyncActionValue.LabelEditAction.toObject(message.labelEditAction, options);
if (options.oneofs)
object._labelEditAction = "labelEditAction";
}
if (message.labelAssociationAction != null && message.hasOwnProperty("labelAssociationAction")) {
object.labelAssociationAction = $root.SyncAction.SyncActionValue.LabelAssociationAction.toObject(message.labelAssociationAction, options);
if (options.oneofs)
object._labelAssociationAction = "labelAssociationAction";
}
if (message.localeSetting != null && message.hasOwnProperty("localeSetting")) {
object.localeSetting = $root.SyncAction.SyncActionValue.LocaleSetting.toObject(message.localeSetting, options);
if (options.oneofs)
object._localeSetting = "localeSetting";
}
if (message.archiveChatAction != null && message.hasOwnProperty("archiveChatAction")) {
object.archiveChatAction = $root.SyncAction.SyncActionValue.ArchiveChatAction.toObject(message.archiveChatAction, options);
if (options.oneofs)
object._archiveChatAction = "archiveChatAction";
}
if (message.deleteMessageForMeAction != null && message.hasOwnProperty("deleteMessageForMeAction")) {
object.deleteMessageForMeAction = $root.SyncAction.SyncActionValue.DeleteMessageForMeAction.toObject(message.deleteMessageForMeAction, options);
if (options.oneofs)
object._deleteMessageForMeAction = "deleteMessageForMeAction";
}
if (message.keyExpiration != null && message.hasOwnProperty("keyExpiration")) {
object.keyExpiration = $root.SyncAction.SyncActionValue.KeyExpiration.toObject(message.keyExpiration, options);
if (options.oneofs)
object._keyExpiration = "keyExpiration";
}
if (message.markChatAsReadAction != null && message.hasOwnProperty("markChatAsReadAction")) {
object.markChatAsReadAction = $root.SyncAction.SyncActionValue.MarkChatAsReadAction.toObject(message.markChatAsReadAction, options);
if (options.oneofs)
object._markChatAsReadAction = "markChatAsReadAction";
}
if (message.clearChatAction != null && message.hasOwnProperty("clearChatAction")) {
object.clearChatAction = $root.SyncAction.SyncActionValue.ClearChatAction.toObject(message.clearChatAction, options);
if (options.oneofs)
object._clearChatAction = "clearChatAction";
}
if (message.deleteChatAction != null && message.hasOwnProperty("deleteChatAction")) {
object.deleteChatAction = $root.SyncAction.SyncActionValue.DeleteChatAction.toObject(message.deleteChatAction, options);
if (options.oneofs)
object._deleteChatAction = "deleteChatAction";
}
if (message.unarchiveChatsSetting != null && message.hasOwnProperty("unarchiveChatsSetting")) {
object.unarchiveChatsSetting = $root.SyncAction.SyncActionValue.UnarchiveChatsSetting.toObject(message.unarchiveChatsSetting, options);
if (options.oneofs)
object._unarchiveChatsSetting = "unarchiveChatsSetting";
}
if (message.primaryFeature != null && message.hasOwnProperty("primaryFeature")) {
object.primaryFeature = $root.SyncAction.SyncActionValue.PrimaryFeature.toObject(message.primaryFeature, options);
if (options.oneofs)
object._primaryFeature = "primaryFeature";
}
if (message.androidUnsupportedActions != null && message.hasOwnProperty("androidUnsupportedActions")) {
object.androidUnsupportedActions = $root.SyncAction.SyncActionValue.AndroidUnsupportedActions.toObject(message.androidUnsupportedActions, options);
if (options.oneofs)
object._androidUnsupportedActions = "androidUnsupportedActions";
}
if (message.agentAction != null && message.hasOwnProperty("agentAction")) {
object.agentAction = $root.SyncAction.SyncActionValue.AgentAction.toObject(message.agentAction, options);
if (options.oneofs)
object._agentAction = "agentAction";
}
if (message.subscriptionAction != null && message.hasOwnProperty("subscriptionAction")) {
object.subscriptionAction = $root.SyncAction.SyncActionValue.SubscriptionAction.toObject(message.subscriptionAction, options);
if (options.oneofs)
object._subscriptionAction = "subscriptionAction";
}
if (message.userStatusMuteAction != null && message.hasOwnProperty("userStatusMuteAction")) {
object.userStatusMuteAction = $root.SyncAction.SyncActionValue.UserStatusMuteAction.toObject(message.userStatusMuteAction, options);
if (options.oneofs)
object._userStatusMuteAction = "userStatusMuteAction";
}
if (message.timeFormatAction != null && message.hasOwnProperty("timeFormatAction")) {
object.timeFormatAction = $root.SyncAction.SyncActionValue.TimeFormatAction.toObject(message.timeFormatAction, options);
if (options.oneofs)
object._timeFormatAction = "timeFormatAction";
}
if (message.nuxAction != null && message.hasOwnProperty("nuxAction")) {
object.nuxAction = $root.SyncAction.SyncActionValue.NuxAction.toObject(message.nuxAction, options);
if (options.oneofs)
object._nuxAction = "nuxAction";
}
if (message.primaryVersionAction != null && message.hasOwnProperty("primaryVersionAction")) {
object.primaryVersionAction = $root.SyncAction.SyncActionValue.PrimaryVersionAction.toObject(message.primaryVersionAction, options);
if (options.oneofs)
object._primaryVersionAction = "primaryVersionAction";
}
if (message.stickerAction != null && message.hasOwnProperty("stickerAction")) {
object.stickerAction = $root.SyncAction.SyncActionValue.StickerAction.toObject(message.stickerAction, options);
if (options.oneofs)
object._stickerAction = "stickerAction";
}
if (message.removeRecentStickerAction != null && message.hasOwnProperty("removeRecentStickerAction")) {
object.removeRecentStickerAction = $root.SyncAction.SyncActionValue.RemoveRecentStickerAction.toObject(message.removeRecentStickerAction, options);
if (options.oneofs)
object._removeRecentStickerAction = "removeRecentStickerAction";
}
if (message.chatAssignment != null && message.hasOwnProperty("chatAssignment")) {
object.chatAssignment = $root.SyncAction.SyncActionValue.ChatAssignmentAction.toObject(message.chatAssignment, options);
if (options.oneofs)
object._chatAssignment = "chatAssignment";
}
if (message.chatAssignmentOpenedStatus != null && message.hasOwnProperty("chatAssignmentOpenedStatus")) {
object.chatAssignmentOpenedStatus = $root.SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.toObject(message.chatAssignmentOpenedStatus, options);
if (options.oneofs)
object._chatAssignmentOpenedStatus = "chatAssignmentOpenedStatus";
}
if (message.pnForLidChatAction != null && message.hasOwnProperty("pnForLidChatAction")) {
object.pnForLidChatAction = $root.SyncAction.SyncActionValue.PnForLidChatAction.toObject(message.pnForLidChatAction, options);
if (options.oneofs)
object._pnForLidChatAction = "pnForLidChatAction";
}
if (message.marketingMessageAction != null && message.hasOwnProperty("marketingMessageAction")) {
object.marketingMessageAction = $root.SyncAction.SyncActionValue.MarketingMessageAction.toObject(message.marketingMessageAction, options);
if (options.oneofs)
object._marketingMessageAction = "marketingMessageAction";
}
if (message.marketingMessageBroadcastAction != null && message.hasOwnProperty("marketingMessageBroadcastAction")) {
object.marketingMessageBroadcastAction = $root.SyncAction.SyncActionValue.MarketingMessageBroadcastAction.toObject(message.marketingMessageBroadcastAction, options);
if (options.oneofs)
object._marketingMessageBroadcastAction = "marketingMessageBroadcastAction";
}
if (message.externalWebBetaAction != null && message.hasOwnProperty("externalWebBetaAction")) {
object.externalWebBetaAction = $root.SyncAction.SyncActionValue.ExternalWebBetaAction.toObject(message.externalWebBetaAction, options);
if (options.oneofs)
object._externalWebBetaAction = "externalWebBetaAction";
}
if (message.privacySettingRelayAllCalls != null && message.hasOwnProperty("privacySettingRelayAllCalls")) {
object.privacySettingRelayAllCalls = $root.SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.toObject(message.privacySettingRelayAllCalls, options);
if (options.oneofs)
object._privacySettingRelayAllCalls = "privacySettingRelayAllCalls";
}
if (message.callLogAction != null && message.hasOwnProperty("callLogAction")) {
object.callLogAction = $root.SyncAction.SyncActionValue.CallLogAction.toObject(message.callLogAction, options);
if (options.oneofs)
object._callLogAction = "callLogAction";
}
if (message.statusPrivacy != null && message.hasOwnProperty("statusPrivacy")) {
object.statusPrivacy = $root.SyncAction.SyncActionValue.StatusPrivacyAction.toObject(message.statusPrivacy, options);
if (options.oneofs)
object._statusPrivacy = "statusPrivacy";
}
if (message.botWelcomeRequestAction != null && message.hasOwnProperty("botWelcomeRequestAction")) {
object.botWelcomeRequestAction = $root.SyncAction.SyncActionValue.BotWelcomeRequestAction.toObject(message.botWelcomeRequestAction, options);
if (options.oneofs)
object._botWelcomeRequestAction = "botWelcomeRequestAction";
}
if (message.deleteIndividualCallLog != null && message.hasOwnProperty("deleteIndividualCallLog")) {
object.deleteIndividualCallLog = $root.SyncAction.SyncActionValue.DeleteIndividualCallLogAction.toObject(message.deleteIndividualCallLog, options);
if (options.oneofs)
object._deleteIndividualCallLog = "deleteIndividualCallLog";
}
if (message.labelReorderingAction != null && message.hasOwnProperty("labelReorderingAction")) {
object.labelReorderingAction = $root.SyncAction.SyncActionValue.LabelReorderingAction.toObject(message.labelReorderingAction, options);
if (options.oneofs)
object._labelReorderingAction = "labelReorderingAction";
}
if (message.paymentInfoAction != null && message.hasOwnProperty("paymentInfoAction")) {
object.paymentInfoAction = $root.SyncAction.SyncActionValue.PaymentInfoAction.toObject(message.paymentInfoAction, options);
if (options.oneofs)
object._paymentInfoAction = "paymentInfoAction";
}
if (message.customPaymentMethodsAction != null && message.hasOwnProperty("customPaymentMethodsAction")) {
object.customPaymentMethodsAction = $root.SyncAction.SyncActionValue.CustomPaymentMethodsAction.toObject(message.customPaymentMethodsAction, options);
if (options.oneofs)
object._customPaymentMethodsAction = "customPaymentMethodsAction";
}
if (message.lockChatAction != null && message.hasOwnProperty("lockChatAction")) {
object.lockChatAction = $root.SyncAction.SyncActionValue.LockChatAction.toObject(message.lockChatAction, options);
if (options.oneofs)
object._lockChatAction = "lockChatAction";
}
if (message.chatLockSettings != null && message.hasOwnProperty("chatLockSettings")) {
object.chatLockSettings = $root.ChatLockSettings.ChatLockSettings.toObject(message.chatLockSettings, options);
if (options.oneofs)
object._chatLockSettings = "chatLockSettings";
}
if (message.wamoUserIdentifierAction != null && message.hasOwnProperty("wamoUserIdentifierAction")) {
object.wamoUserIdentifierAction = $root.SyncAction.SyncActionValue.WamoUserIdentifierAction.toObject(message.wamoUserIdentifierAction, options);
if (options.oneofs)
object._wamoUserIdentifierAction = "wamoUserIdentifierAction";
}
if (message.privacySettingDisableLinkPreviewsAction != null && message.hasOwnProperty("privacySettingDisableLinkPreviewsAction")) {
object.privacySettingDisableLinkPreviewsAction = $root.SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.toObject(message.privacySettingDisableLinkPreviewsAction, options);
if (options.oneofs)
object._privacySettingDisableLinkPreviewsAction = "privacySettingDisableLinkPreviewsAction";
}
if (message.deviceCapabilities != null && message.hasOwnProperty("deviceCapabilities")) {
object.deviceCapabilities = $root.DeviceCapabilities.DeviceCapabilities.toObject(message.deviceCapabilities, options);
if (options.oneofs)
object._deviceCapabilities = "deviceCapabilities";
}
if (message.noteEditAction != null && message.hasOwnProperty("noteEditAction")) {
object.noteEditAction = $root.SyncAction.SyncActionValue.NoteEditAction.toObject(message.noteEditAction, options);
if (options.oneofs)
object._noteEditAction = "noteEditAction";
}
if (message.favoritesAction != null && message.hasOwnProperty("favoritesAction")) {
object.favoritesAction = $root.SyncAction.SyncActionValue.FavoritesAction.toObject(message.favoritesAction, options);
if (options.oneofs)
object._favoritesAction = "favoritesAction";
}
if (message.merchantPaymentPartnerAction != null && message.hasOwnProperty("merchantPaymentPartnerAction")) {
object.merchantPaymentPartnerAction = $root.SyncAction.SyncActionValue.MerchantPaymentPartnerAction.toObject(message.merchantPaymentPartnerAction, options);
if (options.oneofs)
object._merchantPaymentPartnerAction = "merchantPaymentPartnerAction";
}
if (message.waffleAccountLinkStateAction != null && message.hasOwnProperty("waffleAccountLinkStateAction")) {
object.waffleAccountLinkStateAction = $root.SyncAction.SyncActionValue.WaffleAccountLinkStateAction.toObject(message.waffleAccountLinkStateAction, options);
if (options.oneofs)
object._waffleAccountLinkStateAction = "waffleAccountLinkStateAction";
}
if (message.usernameChatStartMode != null && message.hasOwnProperty("usernameChatStartMode")) {
object.usernameChatStartMode = $root.SyncAction.SyncActionValue.UsernameChatStartModeAction.toObject(message.usernameChatStartMode, options);
if (options.oneofs)
object._usernameChatStartMode = "usernameChatStartMode";
}
if (message.notificationActivitySettingAction != null && message.hasOwnProperty("notificationActivitySettingAction")) {
object.notificationActivitySettingAction = $root.SyncAction.SyncActionValue.NotificationActivitySettingAction.toObject(message.notificationActivitySettingAction, options);
if (options.oneofs)
object._notificationActivitySettingAction = "notificationActivitySettingAction";
}
if (message.lidContactAction != null && message.hasOwnProperty("lidContactAction")) {
object.lidContactAction = $root.SyncAction.SyncActionValue.LidContactAction.toObject(message.lidContactAction, options);
if (options.oneofs)
object._lidContactAction = "lidContactAction";
}
if (message.ctwaPerCustomerDataSharingAction != null && message.hasOwnProperty("ctwaPerCustomerDataSharingAction")) {
object.ctwaPerCustomerDataSharingAction = $root.SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.toObject(message.ctwaPerCustomerDataSharingAction, options);
if (options.oneofs)
object._ctwaPerCustomerDataSharingAction = "ctwaPerCustomerDataSharingAction";
}
if (message.paymentTosAction != null && message.hasOwnProperty("paymentTosAction")) {
object.paymentTosAction = $root.SyncAction.SyncActionValue.PaymentTosAction.toObject(message.paymentTosAction, options);
if (options.oneofs)
object._paymentTosAction = "paymentTosAction";
}
return object;
};
/**
* Converts this SyncActionValue to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue
* @instance
* @returns {Object.<string,*>} JSON object
*/
SyncActionValue.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for SyncActionValue
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
SyncActionValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue";
};
SyncActionValue.AgentAction = (function() {
/**
* Properties of an AgentAction.
* @memberof SyncAction.SyncActionValue
* @interface IAgentAction
* @property {string|null} [name] AgentAction name
* @property {number|null} [deviceID] AgentAction deviceID
* @property {boolean|null} [isDeleted] AgentAction isDeleted
*/
/**
* Constructs a new AgentAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents an AgentAction.
* @implements IAgentAction
* @constructor
* @param {SyncAction.SyncActionValue.IAgentAction=} [properties] Properties to set
*/
function AgentAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* AgentAction name.
* @member {string|null|undefined} name
* @memberof SyncAction.SyncActionValue.AgentAction
* @instance
*/
AgentAction.prototype.name = null;
/**
* AgentAction deviceID.
* @member {number|null|undefined} deviceID
* @memberof SyncAction.SyncActionValue.AgentAction
* @instance
*/
AgentAction.prototype.deviceID = null;
/**
* AgentAction isDeleted.
* @member {boolean|null|undefined} isDeleted
* @memberof SyncAction.SyncActionValue.AgentAction
* @instance
*/
AgentAction.prototype.isDeleted = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* AgentAction _name.
* @member {"name"|undefined} _name
* @memberof SyncAction.SyncActionValue.AgentAction
* @instance
*/
Object.defineProperty(AgentAction.prototype, "_name", {
get: $util.oneOfGetter($oneOfFields = ["name"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* AgentAction _deviceID.
* @member {"deviceID"|undefined} _deviceID
* @memberof SyncAction.SyncActionValue.AgentAction
* @instance
*/
Object.defineProperty(AgentAction.prototype, "_deviceID", {
get: $util.oneOfGetter($oneOfFields = ["deviceID"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* AgentAction _isDeleted.
* @member {"isDeleted"|undefined} _isDeleted
* @memberof SyncAction.SyncActionValue.AgentAction
* @instance
*/
Object.defineProperty(AgentAction.prototype, "_isDeleted", {
get: $util.oneOfGetter($oneOfFields = ["isDeleted"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new AgentAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.AgentAction
* @static
* @param {SyncAction.SyncActionValue.IAgentAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.AgentAction} AgentAction instance
*/
AgentAction.create = function create(properties) {
return new AgentAction(properties);
};
/**
* Encodes the specified AgentAction message. Does not implicitly {@link SyncAction.SyncActionValue.AgentAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.AgentAction
* @static
* @param {SyncAction.SyncActionValue.IAgentAction} message AgentAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
AgentAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.name != null && Object.hasOwnProperty.call(message, "name"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
if (message.deviceID != null && Object.hasOwnProperty.call(message, "deviceID"))
writer.uint32(/* id 2, wireType 0 =*/16).int32(message.deviceID);
if (message.isDeleted != null && Object.hasOwnProperty.call(message, "isDeleted"))
writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isDeleted);
return writer;
};
/**
* Encodes the specified AgentAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.AgentAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.AgentAction
* @static
* @param {SyncAction.SyncActionValue.IAgentAction} message AgentAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
AgentAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes an AgentAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.AgentAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.AgentAction} AgentAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
AgentAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.AgentAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.name = reader.string();
break;
}
case 2: {
message.deviceID = reader.int32();
break;
}
case 3: {
message.isDeleted = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes an AgentAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.AgentAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.AgentAction} AgentAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
AgentAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies an AgentAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.AgentAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
AgentAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.name != null && message.hasOwnProperty("name")) {
properties._name = 1;
if (!$util.isString(message.name))
return "name: string expected";
}
if (message.deviceID != null && message.hasOwnProperty("deviceID")) {
properties._deviceID = 1;
if (!$util.isInteger(message.deviceID))
return "deviceID: integer expected";
}
if (message.isDeleted != null && message.hasOwnProperty("isDeleted")) {
properties._isDeleted = 1;
if (typeof message.isDeleted !== "boolean")
return "isDeleted: boolean expected";
}
return null;
};
/**
* Creates an AgentAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.AgentAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.AgentAction} AgentAction
*/
AgentAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.AgentAction)
return object;
var message = new $root.SyncAction.SyncActionValue.AgentAction();
if (object.name != null)
message.name = String(object.name);
if (object.deviceID != null)
message.deviceID = object.deviceID | 0;
if (object.isDeleted != null)
message.isDeleted = Boolean(object.isDeleted);
return message;
};
/**
* Creates a plain object from an AgentAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.AgentAction
* @static
* @param {SyncAction.SyncActionValue.AgentAction} message AgentAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
AgentAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.name != null && message.hasOwnProperty("name")) {
object.name = message.name;
if (options.oneofs)
object._name = "name";
}
if (message.deviceID != null && message.hasOwnProperty("deviceID")) {
object.deviceID = message.deviceID;
if (options.oneofs)
object._deviceID = "deviceID";
}
if (message.isDeleted != null && message.hasOwnProperty("isDeleted")) {
object.isDeleted = message.isDeleted;
if (options.oneofs)
object._isDeleted = "isDeleted";
}
return object;
};
/**
* Converts this AgentAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.AgentAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
AgentAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for AgentAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.AgentAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
AgentAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.AgentAction";
};
return AgentAction;
})();
SyncActionValue.AndroidUnsupportedActions = (function() {
/**
* Properties of an AndroidUnsupportedActions.
* @memberof SyncAction.SyncActionValue
* @interface IAndroidUnsupportedActions
* @property {boolean|null} [allowed] AndroidUnsupportedActions allowed
*/
/**
* Constructs a new AndroidUnsupportedActions.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents an AndroidUnsupportedActions.
* @implements IAndroidUnsupportedActions
* @constructor
* @param {SyncAction.SyncActionValue.IAndroidUnsupportedActions=} [properties] Properties to set
*/
function AndroidUnsupportedActions(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* AndroidUnsupportedActions allowed.
* @member {boolean|null|undefined} allowed
* @memberof SyncAction.SyncActionValue.AndroidUnsupportedActions
* @instance
*/
AndroidUnsupportedActions.prototype.allowed = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* AndroidUnsupportedActions _allowed.
* @member {"allowed"|undefined} _allowed
* @memberof SyncAction.SyncActionValue.AndroidUnsupportedActions
* @instance
*/
Object.defineProperty(AndroidUnsupportedActions.prototype, "_allowed", {
get: $util.oneOfGetter($oneOfFields = ["allowed"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new AndroidUnsupportedActions instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.AndroidUnsupportedActions
* @static
* @param {SyncAction.SyncActionValue.IAndroidUnsupportedActions=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.AndroidUnsupportedActions} AndroidUnsupportedActions instance
*/
AndroidUnsupportedActions.create = function create(properties) {
return new AndroidUnsupportedActions(properties);
};
/**
* Encodes the specified AndroidUnsupportedActions message. Does not implicitly {@link SyncAction.SyncActionValue.AndroidUnsupportedActions.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.AndroidUnsupportedActions
* @static
* @param {SyncAction.SyncActionValue.IAndroidUnsupportedActions} message AndroidUnsupportedActions message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
AndroidUnsupportedActions.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.allowed != null && Object.hasOwnProperty.call(message, "allowed"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.allowed);
return writer;
};
/**
* Encodes the specified AndroidUnsupportedActions message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.AndroidUnsupportedActions.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.AndroidUnsupportedActions
* @static
* @param {SyncAction.SyncActionValue.IAndroidUnsupportedActions} message AndroidUnsupportedActions message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
AndroidUnsupportedActions.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes an AndroidUnsupportedActions message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.AndroidUnsupportedActions
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.AndroidUnsupportedActions} AndroidUnsupportedActions
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
AndroidUnsupportedActions.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.AndroidUnsupportedActions();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.allowed = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes an AndroidUnsupportedActions message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.AndroidUnsupportedActions
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.AndroidUnsupportedActions} AndroidUnsupportedActions
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
AndroidUnsupportedActions.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies an AndroidUnsupportedActions message.
* @function verify
* @memberof SyncAction.SyncActionValue.AndroidUnsupportedActions
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
AndroidUnsupportedActions.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.allowed != null && message.hasOwnProperty("allowed")) {
properties._allowed = 1;
if (typeof message.allowed !== "boolean")
return "allowed: boolean expected";
}
return null;
};
/**
* Creates an AndroidUnsupportedActions message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.AndroidUnsupportedActions
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.AndroidUnsupportedActions} AndroidUnsupportedActions
*/
AndroidUnsupportedActions.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.AndroidUnsupportedActions)
return object;
var message = new $root.SyncAction.SyncActionValue.AndroidUnsupportedActions();
if (object.allowed != null)
message.allowed = Boolean(object.allowed);
return message;
};
/**
* Creates a plain object from an AndroidUnsupportedActions message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.AndroidUnsupportedActions
* @static
* @param {SyncAction.SyncActionValue.AndroidUnsupportedActions} message AndroidUnsupportedActions
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
AndroidUnsupportedActions.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.allowed != null && message.hasOwnProperty("allowed")) {
object.allowed = message.allowed;
if (options.oneofs)
object._allowed = "allowed";
}
return object;
};
/**
* Converts this AndroidUnsupportedActions to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.AndroidUnsupportedActions
* @instance
* @returns {Object.<string,*>} JSON object
*/
AndroidUnsupportedActions.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for AndroidUnsupportedActions
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.AndroidUnsupportedActions
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
AndroidUnsupportedActions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.AndroidUnsupportedActions";
};
return AndroidUnsupportedActions;
})();
SyncActionValue.ArchiveChatAction = (function() {
/**
* Properties of an ArchiveChatAction.
* @memberof SyncAction.SyncActionValue
* @interface IArchiveChatAction
* @property {boolean|null} [archived] ArchiveChatAction archived
* @property {SyncAction.SyncActionValue.ISyncActionMessageRange|null} [messageRange] ArchiveChatAction messageRange
*/
/**
* Constructs a new ArchiveChatAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents an ArchiveChatAction.
* @implements IArchiveChatAction
* @constructor
* @param {SyncAction.SyncActionValue.IArchiveChatAction=} [properties] Properties to set
*/
function ArchiveChatAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* ArchiveChatAction archived.
* @member {boolean|null|undefined} archived
* @memberof SyncAction.SyncActionValue.ArchiveChatAction
* @instance
*/
ArchiveChatAction.prototype.archived = null;
/**
* ArchiveChatAction messageRange.
* @member {SyncAction.SyncActionValue.ISyncActionMessageRange|null|undefined} messageRange
* @memberof SyncAction.SyncActionValue.ArchiveChatAction
* @instance
*/
ArchiveChatAction.prototype.messageRange = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* ArchiveChatAction _archived.
* @member {"archived"|undefined} _archived
* @memberof SyncAction.SyncActionValue.ArchiveChatAction
* @instance
*/
Object.defineProperty(ArchiveChatAction.prototype, "_archived", {
get: $util.oneOfGetter($oneOfFields = ["archived"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* ArchiveChatAction _messageRange.
* @member {"messageRange"|undefined} _messageRange
* @memberof SyncAction.SyncActionValue.ArchiveChatAction
* @instance
*/
Object.defineProperty(ArchiveChatAction.prototype, "_messageRange", {
get: $util.oneOfGetter($oneOfFields = ["messageRange"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new ArchiveChatAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.ArchiveChatAction
* @static
* @param {SyncAction.SyncActionValue.IArchiveChatAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.ArchiveChatAction} ArchiveChatAction instance
*/
ArchiveChatAction.create = function create(properties) {
return new ArchiveChatAction(properties);
};
/**
* Encodes the specified ArchiveChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.ArchiveChatAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.ArchiveChatAction
* @static
* @param {SyncAction.SyncActionValue.IArchiveChatAction} message ArchiveChatAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ArchiveChatAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.archived != null && Object.hasOwnProperty.call(message, "archived"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.archived);
if (message.messageRange != null && Object.hasOwnProperty.call(message, "messageRange"))
$root.SyncAction.SyncActionValue.SyncActionMessageRange.encode(message.messageRange, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
return writer;
};
/**
* Encodes the specified ArchiveChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ArchiveChatAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.ArchiveChatAction
* @static
* @param {SyncAction.SyncActionValue.IArchiveChatAction} message ArchiveChatAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ArchiveChatAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes an ArchiveChatAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.ArchiveChatAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.ArchiveChatAction} ArchiveChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ArchiveChatAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.ArchiveChatAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.archived = reader.bool();
break;
}
case 2: {
message.messageRange = $root.SyncAction.SyncActionValue.SyncActionMessageRange.decode(reader, reader.uint32());
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes an ArchiveChatAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.ArchiveChatAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.ArchiveChatAction} ArchiveChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ArchiveChatAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies an ArchiveChatAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.ArchiveChatAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
ArchiveChatAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.archived != null && message.hasOwnProperty("archived")) {
properties._archived = 1;
if (typeof message.archived !== "boolean")
return "archived: boolean expected";
}
if (message.messageRange != null && message.hasOwnProperty("messageRange")) {
properties._messageRange = 1;
{
var error = $root.SyncAction.SyncActionValue.SyncActionMessageRange.verify(message.messageRange);
if (error)
return "messageRange." + error;
}
}
return null;
};
/**
* Creates an ArchiveChatAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.ArchiveChatAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.ArchiveChatAction} ArchiveChatAction
*/
ArchiveChatAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.ArchiveChatAction)
return object;
var message = new $root.SyncAction.SyncActionValue.ArchiveChatAction();
if (object.archived != null)
message.archived = Boolean(object.archived);
if (object.messageRange != null) {
if (typeof object.messageRange !== "object")
throw TypeError(".SyncAction.SyncActionValue.ArchiveChatAction.messageRange: object expected");
message.messageRange = $root.SyncAction.SyncActionValue.SyncActionMessageRange.fromObject(object.messageRange);
}
return message;
};
/**
* Creates a plain object from an ArchiveChatAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.ArchiveChatAction
* @static
* @param {SyncAction.SyncActionValue.ArchiveChatAction} message ArchiveChatAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
ArchiveChatAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.archived != null && message.hasOwnProperty("archived")) {
object.archived = message.archived;
if (options.oneofs)
object._archived = "archived";
}
if (message.messageRange != null && message.hasOwnProperty("messageRange")) {
object.messageRange = $root.SyncAction.SyncActionValue.SyncActionMessageRange.toObject(message.messageRange, options);
if (options.oneofs)
object._messageRange = "messageRange";
}
return object;
};
/**
* Converts this ArchiveChatAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.ArchiveChatAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
ArchiveChatAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for ArchiveChatAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.ArchiveChatAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
ArchiveChatAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.ArchiveChatAction";
};
return ArchiveChatAction;
})();
SyncActionValue.BotWelcomeRequestAction = (function() {
/**
* Properties of a BotWelcomeRequestAction.
* @memberof SyncAction.SyncActionValue
* @interface IBotWelcomeRequestAction
* @property {boolean|null} [isSent] BotWelcomeRequestAction isSent
*/
/**
* Constructs a new BotWelcomeRequestAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a BotWelcomeRequestAction.
* @implements IBotWelcomeRequestAction
* @constructor
* @param {SyncAction.SyncActionValue.IBotWelcomeRequestAction=} [properties] Properties to set
*/
function BotWelcomeRequestAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* BotWelcomeRequestAction isSent.
* @member {boolean|null|undefined} isSent
* @memberof SyncAction.SyncActionValue.BotWelcomeRequestAction
* @instance
*/
BotWelcomeRequestAction.prototype.isSent = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* BotWelcomeRequestAction _isSent.
* @member {"isSent"|undefined} _isSent
* @memberof SyncAction.SyncActionValue.BotWelcomeRequestAction
* @instance
*/
Object.defineProperty(BotWelcomeRequestAction.prototype, "_isSent", {
get: $util.oneOfGetter($oneOfFields = ["isSent"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new BotWelcomeRequestAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.BotWelcomeRequestAction
* @static
* @param {SyncAction.SyncActionValue.IBotWelcomeRequestAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.BotWelcomeRequestAction} BotWelcomeRequestAction instance
*/
BotWelcomeRequestAction.create = function create(properties) {
return new BotWelcomeRequestAction(properties);
};
/**
* Encodes the specified BotWelcomeRequestAction message. Does not implicitly {@link SyncAction.SyncActionValue.BotWelcomeRequestAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.BotWelcomeRequestAction
* @static
* @param {SyncAction.SyncActionValue.IBotWelcomeRequestAction} message BotWelcomeRequestAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
BotWelcomeRequestAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.isSent != null && Object.hasOwnProperty.call(message, "isSent"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isSent);
return writer;
};
/**
* Encodes the specified BotWelcomeRequestAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.BotWelcomeRequestAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.BotWelcomeRequestAction
* @static
* @param {SyncAction.SyncActionValue.IBotWelcomeRequestAction} message BotWelcomeRequestAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
BotWelcomeRequestAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a BotWelcomeRequestAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.BotWelcomeRequestAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.BotWelcomeRequestAction} BotWelcomeRequestAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
BotWelcomeRequestAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.BotWelcomeRequestAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.isSent = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a BotWelcomeRequestAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.BotWelcomeRequestAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.BotWelcomeRequestAction} BotWelcomeRequestAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
BotWelcomeRequestAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a BotWelcomeRequestAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.BotWelcomeRequestAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
BotWelcomeRequestAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.isSent != null && message.hasOwnProperty("isSent")) {
properties._isSent = 1;
if (typeof message.isSent !== "boolean")
return "isSent: boolean expected";
}
return null;
};
/**
* Creates a BotWelcomeRequestAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.BotWelcomeRequestAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.BotWelcomeRequestAction} BotWelcomeRequestAction
*/
BotWelcomeRequestAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.BotWelcomeRequestAction)
return object;
var message = new $root.SyncAction.SyncActionValue.BotWelcomeRequestAction();
if (object.isSent != null)
message.isSent = Boolean(object.isSent);
return message;
};
/**
* Creates a plain object from a BotWelcomeRequestAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.BotWelcomeRequestAction
* @static
* @param {SyncAction.SyncActionValue.BotWelcomeRequestAction} message BotWelcomeRequestAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
BotWelcomeRequestAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.isSent != null && message.hasOwnProperty("isSent")) {
object.isSent = message.isSent;
if (options.oneofs)
object._isSent = "isSent";
}
return object;
};
/**
* Converts this BotWelcomeRequestAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.BotWelcomeRequestAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
BotWelcomeRequestAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for BotWelcomeRequestAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.BotWelcomeRequestAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
BotWelcomeRequestAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.BotWelcomeRequestAction";
};
return BotWelcomeRequestAction;
})();
SyncActionValue.CallLogAction = (function() {
/**
* Properties of a CallLogAction.
* @memberof SyncAction.SyncActionValue
* @interface ICallLogAction
* @property {SyncAction.ICallLogRecord|null} [callLogRecord] CallLogAction callLogRecord
*/
/**
* Constructs a new CallLogAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a CallLogAction.
* @implements ICallLogAction
* @constructor
* @param {SyncAction.SyncActionValue.ICallLogAction=} [properties] Properties to set
*/
function CallLogAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* CallLogAction callLogRecord.
* @member {SyncAction.ICallLogRecord|null|undefined} callLogRecord
* @memberof SyncAction.SyncActionValue.CallLogAction
* @instance
*/
CallLogAction.prototype.callLogRecord = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* CallLogAction _callLogRecord.
* @member {"callLogRecord"|undefined} _callLogRecord
* @memberof SyncAction.SyncActionValue.CallLogAction
* @instance
*/
Object.defineProperty(CallLogAction.prototype, "_callLogRecord", {
get: $util.oneOfGetter($oneOfFields = ["callLogRecord"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new CallLogAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.CallLogAction
* @static
* @param {SyncAction.SyncActionValue.ICallLogAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.CallLogAction} CallLogAction instance
*/
CallLogAction.create = function create(properties) {
return new CallLogAction(properties);
};
/**
* Encodes the specified CallLogAction message. Does not implicitly {@link SyncAction.SyncActionValue.CallLogAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.CallLogAction
* @static
* @param {SyncAction.SyncActionValue.ICallLogAction} message CallLogAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
CallLogAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.callLogRecord != null && Object.hasOwnProperty.call(message, "callLogRecord"))
$root.SyncAction.CallLogRecord.encode(message.callLogRecord, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
return writer;
};
/**
* Encodes the specified CallLogAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CallLogAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.CallLogAction
* @static
* @param {SyncAction.SyncActionValue.ICallLogAction} message CallLogAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
CallLogAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a CallLogAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.CallLogAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.CallLogAction} CallLogAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
CallLogAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.CallLogAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.callLogRecord = $root.SyncAction.CallLogRecord.decode(reader, reader.uint32());
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a CallLogAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.CallLogAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.CallLogAction} CallLogAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
CallLogAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a CallLogAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.CallLogAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
CallLogAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.callLogRecord != null && message.hasOwnProperty("callLogRecord")) {
properties._callLogRecord = 1;
{
var error = $root.SyncAction.CallLogRecord.verify(message.callLogRecord);
if (error)
return "callLogRecord." + error;
}
}
return null;
};
/**
* Creates a CallLogAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.CallLogAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.CallLogAction} CallLogAction
*/
CallLogAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.CallLogAction)
return object;
var message = new $root.SyncAction.SyncActionValue.CallLogAction();
if (object.callLogRecord != null) {
if (typeof object.callLogRecord !== "object")
throw TypeError(".SyncAction.SyncActionValue.CallLogAction.callLogRecord: object expected");
message.callLogRecord = $root.SyncAction.CallLogRecord.fromObject(object.callLogRecord);
}
return message;
};
/**
* Creates a plain object from a CallLogAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.CallLogAction
* @static
* @param {SyncAction.SyncActionValue.CallLogAction} message CallLogAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
CallLogAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.callLogRecord != null && message.hasOwnProperty("callLogRecord")) {
object.callLogRecord = $root.SyncAction.CallLogRecord.toObject(message.callLogRecord, options);
if (options.oneofs)
object._callLogRecord = "callLogRecord";
}
return object;
};
/**
* Converts this CallLogAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.CallLogAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
CallLogAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for CallLogAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.CallLogAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
CallLogAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.CallLogAction";
};
return CallLogAction;
})();
SyncActionValue.ChatAssignmentAction = (function() {
/**
* Properties of a ChatAssignmentAction.
* @memberof SyncAction.SyncActionValue
* @interface IChatAssignmentAction
* @property {string|null} [deviceAgentID] ChatAssignmentAction deviceAgentID
*/
/**
* Constructs a new ChatAssignmentAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a ChatAssignmentAction.
* @implements IChatAssignmentAction
* @constructor
* @param {SyncAction.SyncActionValue.IChatAssignmentAction=} [properties] Properties to set
*/
function ChatAssignmentAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* ChatAssignmentAction deviceAgentID.
* @member {string|null|undefined} deviceAgentID
* @memberof SyncAction.SyncActionValue.ChatAssignmentAction
* @instance
*/
ChatAssignmentAction.prototype.deviceAgentID = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* ChatAssignmentAction _deviceAgentID.
* @member {"deviceAgentID"|undefined} _deviceAgentID
* @memberof SyncAction.SyncActionValue.ChatAssignmentAction
* @instance
*/
Object.defineProperty(ChatAssignmentAction.prototype, "_deviceAgentID", {
get: $util.oneOfGetter($oneOfFields = ["deviceAgentID"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new ChatAssignmentAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.ChatAssignmentAction
* @static
* @param {SyncAction.SyncActionValue.IChatAssignmentAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.ChatAssignmentAction} ChatAssignmentAction instance
*/
ChatAssignmentAction.create = function create(properties) {
return new ChatAssignmentAction(properties);
};
/**
* Encodes the specified ChatAssignmentAction message. Does not implicitly {@link SyncAction.SyncActionValue.ChatAssignmentAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.ChatAssignmentAction
* @static
* @param {SyncAction.SyncActionValue.IChatAssignmentAction} message ChatAssignmentAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ChatAssignmentAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.deviceAgentID != null && Object.hasOwnProperty.call(message, "deviceAgentID"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceAgentID);
return writer;
};
/**
* Encodes the specified ChatAssignmentAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ChatAssignmentAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.ChatAssignmentAction
* @static
* @param {SyncAction.SyncActionValue.IChatAssignmentAction} message ChatAssignmentAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ChatAssignmentAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a ChatAssignmentAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.ChatAssignmentAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.ChatAssignmentAction} ChatAssignmentAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ChatAssignmentAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.ChatAssignmentAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.deviceAgentID = reader.string();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a ChatAssignmentAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.ChatAssignmentAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.ChatAssignmentAction} ChatAssignmentAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ChatAssignmentAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a ChatAssignmentAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.ChatAssignmentAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
ChatAssignmentAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.deviceAgentID != null && message.hasOwnProperty("deviceAgentID")) {
properties._deviceAgentID = 1;
if (!$util.isString(message.deviceAgentID))
return "deviceAgentID: string expected";
}
return null;
};
/**
* Creates a ChatAssignmentAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.ChatAssignmentAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.ChatAssignmentAction} ChatAssignmentAction
*/
ChatAssignmentAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.ChatAssignmentAction)
return object;
var message = new $root.SyncAction.SyncActionValue.ChatAssignmentAction();
if (object.deviceAgentID != null)
message.deviceAgentID = String(object.deviceAgentID);
return message;
};
/**
* Creates a plain object from a ChatAssignmentAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.ChatAssignmentAction
* @static
* @param {SyncAction.SyncActionValue.ChatAssignmentAction} message ChatAssignmentAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
ChatAssignmentAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.deviceAgentID != null && message.hasOwnProperty("deviceAgentID")) {
object.deviceAgentID = message.deviceAgentID;
if (options.oneofs)
object._deviceAgentID = "deviceAgentID";
}
return object;
};
/**
* Converts this ChatAssignmentAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.ChatAssignmentAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
ChatAssignmentAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for ChatAssignmentAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.ChatAssignmentAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
ChatAssignmentAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.ChatAssignmentAction";
};
return ChatAssignmentAction;
})();
SyncActionValue.ChatAssignmentOpenedStatusAction = (function() {
/**
* Properties of a ChatAssignmentOpenedStatusAction.
* @memberof SyncAction.SyncActionValue
* @interface IChatAssignmentOpenedStatusAction
* @property {boolean|null} [chatOpened] ChatAssignmentOpenedStatusAction chatOpened
*/
/**
* Constructs a new ChatAssignmentOpenedStatusAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a ChatAssignmentOpenedStatusAction.
* @implements IChatAssignmentOpenedStatusAction
* @constructor
* @param {SyncAction.SyncActionValue.IChatAssignmentOpenedStatusAction=} [properties] Properties to set
*/
function ChatAssignmentOpenedStatusAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* ChatAssignmentOpenedStatusAction chatOpened.
* @member {boolean|null|undefined} chatOpened
* @memberof SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction
* @instance
*/
ChatAssignmentOpenedStatusAction.prototype.chatOpened = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* ChatAssignmentOpenedStatusAction _chatOpened.
* @member {"chatOpened"|undefined} _chatOpened
* @memberof SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction
* @instance
*/
Object.defineProperty(ChatAssignmentOpenedStatusAction.prototype, "_chatOpened", {
get: $util.oneOfGetter($oneOfFields = ["chatOpened"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new ChatAssignmentOpenedStatusAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction
* @static
* @param {SyncAction.SyncActionValue.IChatAssignmentOpenedStatusAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction} ChatAssignmentOpenedStatusAction instance
*/
ChatAssignmentOpenedStatusAction.create = function create(properties) {
return new ChatAssignmentOpenedStatusAction(properties);
};
/**
* Encodes the specified ChatAssignmentOpenedStatusAction message. Does not implicitly {@link SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction
* @static
* @param {SyncAction.SyncActionValue.IChatAssignmentOpenedStatusAction} message ChatAssignmentOpenedStatusAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ChatAssignmentOpenedStatusAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.chatOpened != null && Object.hasOwnProperty.call(message, "chatOpened"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.chatOpened);
return writer;
};
/**
* Encodes the specified ChatAssignmentOpenedStatusAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction
* @static
* @param {SyncAction.SyncActionValue.IChatAssignmentOpenedStatusAction} message ChatAssignmentOpenedStatusAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ChatAssignmentOpenedStatusAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a ChatAssignmentOpenedStatusAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction} ChatAssignmentOpenedStatusAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ChatAssignmentOpenedStatusAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.chatOpened = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a ChatAssignmentOpenedStatusAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction} ChatAssignmentOpenedStatusAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ChatAssignmentOpenedStatusAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a ChatAssignmentOpenedStatusAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
ChatAssignmentOpenedStatusAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.chatOpened != null && message.hasOwnProperty("chatOpened")) {
properties._chatOpened = 1;
if (typeof message.chatOpened !== "boolean")
return "chatOpened: boolean expected";
}
return null;
};
/**
* Creates a ChatAssignmentOpenedStatusAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction} ChatAssignmentOpenedStatusAction
*/
ChatAssignmentOpenedStatusAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction)
return object;
var message = new $root.SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction();
if (object.chatOpened != null)
message.chatOpened = Boolean(object.chatOpened);
return message;
};
/**
* Creates a plain object from a ChatAssignmentOpenedStatusAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction
* @static
* @param {SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction} message ChatAssignmentOpenedStatusAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
ChatAssignmentOpenedStatusAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.chatOpened != null && message.hasOwnProperty("chatOpened")) {
object.chatOpened = message.chatOpened;
if (options.oneofs)
object._chatOpened = "chatOpened";
}
return object;
};
/**
* Converts this ChatAssignmentOpenedStatusAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
ChatAssignmentOpenedStatusAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for ChatAssignmentOpenedStatusAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
ChatAssignmentOpenedStatusAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction";
};
return ChatAssignmentOpenedStatusAction;
})();
SyncActionValue.ClearChatAction = (function() {
/**
* Properties of a ClearChatAction.
* @memberof SyncAction.SyncActionValue
* @interface IClearChatAction
* @property {SyncAction.SyncActionValue.ISyncActionMessageRange|null} [messageRange] ClearChatAction messageRange
*/
/**
* Constructs a new ClearChatAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a ClearChatAction.
* @implements IClearChatAction
* @constructor
* @param {SyncAction.SyncActionValue.IClearChatAction=} [properties] Properties to set
*/
function ClearChatAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* ClearChatAction messageRange.
* @member {SyncAction.SyncActionValue.ISyncActionMessageRange|null|undefined} messageRange
* @memberof SyncAction.SyncActionValue.ClearChatAction
* @instance
*/
ClearChatAction.prototype.messageRange = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* ClearChatAction _messageRange.
* @member {"messageRange"|undefined} _messageRange
* @memberof SyncAction.SyncActionValue.ClearChatAction
* @instance
*/
Object.defineProperty(ClearChatAction.prototype, "_messageRange", {
get: $util.oneOfGetter($oneOfFields = ["messageRange"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new ClearChatAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.ClearChatAction
* @static
* @param {SyncAction.SyncActionValue.IClearChatAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.ClearChatAction} ClearChatAction instance
*/
ClearChatAction.create = function create(properties) {
return new ClearChatAction(properties);
};
/**
* Encodes the specified ClearChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.ClearChatAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.ClearChatAction
* @static
* @param {SyncAction.SyncActionValue.IClearChatAction} message ClearChatAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ClearChatAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.messageRange != null && Object.hasOwnProperty.call(message, "messageRange"))
$root.SyncAction.SyncActionValue.SyncActionMessageRange.encode(message.messageRange, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
return writer;
};
/**
* Encodes the specified ClearChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ClearChatAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.ClearChatAction
* @static
* @param {SyncAction.SyncActionValue.IClearChatAction} message ClearChatAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ClearChatAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a ClearChatAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.ClearChatAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.ClearChatAction} ClearChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ClearChatAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.ClearChatAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.messageRange = $root.SyncAction.SyncActionValue.SyncActionMessageRange.decode(reader, reader.uint32());
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a ClearChatAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.ClearChatAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.ClearChatAction} ClearChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ClearChatAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a ClearChatAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.ClearChatAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
ClearChatAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.messageRange != null && message.hasOwnProperty("messageRange")) {
properties._messageRange = 1;
{
var error = $root.SyncAction.SyncActionValue.SyncActionMessageRange.verify(message.messageRange);
if (error)
return "messageRange." + error;
}
}
return null;
};
/**
* Creates a ClearChatAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.ClearChatAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.ClearChatAction} ClearChatAction
*/
ClearChatAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.ClearChatAction)
return object;
var message = new $root.SyncAction.SyncActionValue.ClearChatAction();
if (object.messageRange != null) {
if (typeof object.messageRange !== "object")
throw TypeError(".SyncAction.SyncActionValue.ClearChatAction.messageRange: object expected");
message.messageRange = $root.SyncAction.SyncActionValue.SyncActionMessageRange.fromObject(object.messageRange);
}
return message;
};
/**
* Creates a plain object from a ClearChatAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.ClearChatAction
* @static
* @param {SyncAction.SyncActionValue.ClearChatAction} message ClearChatAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
ClearChatAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.messageRange != null && message.hasOwnProperty("messageRange")) {
object.messageRange = $root.SyncAction.SyncActionValue.SyncActionMessageRange.toObject(message.messageRange, options);
if (options.oneofs)
object._messageRange = "messageRange";
}
return object;
};
/**
* Converts this ClearChatAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.ClearChatAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
ClearChatAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for ClearChatAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.ClearChatAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
ClearChatAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.ClearChatAction";
};
return ClearChatAction;
})();
SyncActionValue.ContactAction = (function() {
/**
* Properties of a ContactAction.
* @memberof SyncAction.SyncActionValue
* @interface IContactAction
* @property {string|null} [fullName] ContactAction fullName
* @property {string|null} [firstName] ContactAction firstName
* @property {string|null} [lidJid] ContactAction lidJid
* @property {boolean|null} [saveOnPrimaryAddressbook] ContactAction saveOnPrimaryAddressbook
* @property {string|null} [pnJid] ContactAction pnJid
* @property {string|null} [username] ContactAction username
*/
/**
* Constructs a new ContactAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a ContactAction.
* @implements IContactAction
* @constructor
* @param {SyncAction.SyncActionValue.IContactAction=} [properties] Properties to set
*/
function ContactAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* ContactAction fullName.
* @member {string|null|undefined} fullName
* @memberof SyncAction.SyncActionValue.ContactAction
* @instance
*/
ContactAction.prototype.fullName = null;
/**
* ContactAction firstName.
* @member {string|null|undefined} firstName
* @memberof SyncAction.SyncActionValue.ContactAction
* @instance
*/
ContactAction.prototype.firstName = null;
/**
* ContactAction lidJid.
* @member {string|null|undefined} lidJid
* @memberof SyncAction.SyncActionValue.ContactAction
* @instance
*/
ContactAction.prototype.lidJid = null;
/**
* ContactAction saveOnPrimaryAddressbook.
* @member {boolean|null|undefined} saveOnPrimaryAddressbook
* @memberof SyncAction.SyncActionValue.ContactAction
* @instance
*/
ContactAction.prototype.saveOnPrimaryAddressbook = null;
/**
* ContactAction pnJid.
* @member {string|null|undefined} pnJid
* @memberof SyncAction.SyncActionValue.ContactAction
* @instance
*/
ContactAction.prototype.pnJid = null;
/**
* ContactAction username.
* @member {string|null|undefined} username
* @memberof SyncAction.SyncActionValue.ContactAction
* @instance
*/
ContactAction.prototype.username = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* ContactAction _fullName.
* @member {"fullName"|undefined} _fullName
* @memberof SyncAction.SyncActionValue.ContactAction
* @instance
*/
Object.defineProperty(ContactAction.prototype, "_fullName", {
get: $util.oneOfGetter($oneOfFields = ["fullName"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* ContactAction _firstName.
* @member {"firstName"|undefined} _firstName
* @memberof SyncAction.SyncActionValue.ContactAction
* @instance
*/
Object.defineProperty(ContactAction.prototype, "_firstName", {
get: $util.oneOfGetter($oneOfFields = ["firstName"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* ContactAction _lidJid.
* @member {"lidJid"|undefined} _lidJid
* @memberof SyncAction.SyncActionValue.ContactAction
* @instance
*/
Object.defineProperty(ContactAction.prototype, "_lidJid", {
get: $util.oneOfGetter($oneOfFields = ["lidJid"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* ContactAction _saveOnPrimaryAddressbook.
* @member {"saveOnPrimaryAddressbook"|undefined} _saveOnPrimaryAddressbook
* @memberof SyncAction.SyncActionValue.ContactAction
* @instance
*/
Object.defineProperty(ContactAction.prototype, "_saveOnPrimaryAddressbook", {
get: $util.oneOfGetter($oneOfFields = ["saveOnPrimaryAddressbook"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* ContactAction _pnJid.
* @member {"pnJid"|undefined} _pnJid
* @memberof SyncAction.SyncActionValue.ContactAction
* @instance
*/
Object.defineProperty(ContactAction.prototype, "_pnJid", {
get: $util.oneOfGetter($oneOfFields = ["pnJid"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* ContactAction _username.
* @member {"username"|undefined} _username
* @memberof SyncAction.SyncActionValue.ContactAction
* @instance
*/
Object.defineProperty(ContactAction.prototype, "_username", {
get: $util.oneOfGetter($oneOfFields = ["username"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new ContactAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.ContactAction
* @static
* @param {SyncAction.SyncActionValue.IContactAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.ContactAction} ContactAction instance
*/
ContactAction.create = function create(properties) {
return new ContactAction(properties);
};
/**
* Encodes the specified ContactAction message. Does not implicitly {@link SyncAction.SyncActionValue.ContactAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.ContactAction
* @static
* @param {SyncAction.SyncActionValue.IContactAction} message ContactAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ContactAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.fullName);
if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
writer.uint32(/* id 2, wireType 2 =*/18).string(message.firstName);
if (message.lidJid != null && Object.hasOwnProperty.call(message, "lidJid"))
writer.uint32(/* id 3, wireType 2 =*/26).string(message.lidJid);
if (message.saveOnPrimaryAddressbook != null && Object.hasOwnProperty.call(message, "saveOnPrimaryAddressbook"))
writer.uint32(/* id 4, wireType 0 =*/32).bool(message.saveOnPrimaryAddressbook);
if (message.pnJid != null && Object.hasOwnProperty.call(message, "pnJid"))
writer.uint32(/* id 5, wireType 2 =*/42).string(message.pnJid);
if (message.username != null && Object.hasOwnProperty.call(message, "username"))
writer.uint32(/* id 6, wireType 2 =*/50).string(message.username);
return writer;
};
/**
* Encodes the specified ContactAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ContactAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.ContactAction
* @static
* @param {SyncAction.SyncActionValue.IContactAction} message ContactAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ContactAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a ContactAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.ContactAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.ContactAction} ContactAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ContactAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.ContactAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.fullName = reader.string();
break;
}
case 2: {
message.firstName = reader.string();
break;
}
case 3: {
message.lidJid = reader.string();
break;
}
case 4: {
message.saveOnPrimaryAddressbook = reader.bool();
break;
}
case 5: {
message.pnJid = reader.string();
break;
}
case 6: {
message.username = reader.string();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a ContactAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.ContactAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.ContactAction} ContactAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ContactAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a ContactAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.ContactAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
ContactAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.fullName != null && message.hasOwnProperty("fullName")) {
properties._fullName = 1;
if (!$util.isString(message.fullName))
return "fullName: string expected";
}
if (message.firstName != null && message.hasOwnProperty("firstName")) {
properties._firstName = 1;
if (!$util.isString(message.firstName))
return "firstName: string expected";
}
if (message.lidJid != null && message.hasOwnProperty("lidJid")) {
properties._lidJid = 1;
if (!$util.isString(message.lidJid))
return "lidJid: string expected";
}
if (message.saveOnPrimaryAddressbook != null && message.hasOwnProperty("saveOnPrimaryAddressbook")) {
properties._saveOnPrimaryAddressbook = 1;
if (typeof message.saveOnPrimaryAddressbook !== "boolean")
return "saveOnPrimaryAddressbook: boolean expected";
}
if (message.pnJid != null && message.hasOwnProperty("pnJid")) {
properties._pnJid = 1;
if (!$util.isString(message.pnJid))
return "pnJid: string expected";
}
if (message.username != null && message.hasOwnProperty("username")) {
properties._username = 1;
if (!$util.isString(message.username))
return "username: string expected";
}
return null;
};
/**
* Creates a ContactAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.ContactAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.ContactAction} ContactAction
*/
ContactAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.ContactAction)
return object;
var message = new $root.SyncAction.SyncActionValue.ContactAction();
if (object.fullName != null)
message.fullName = String(object.fullName);
if (object.firstName != null)
message.firstName = String(object.firstName);
if (object.lidJid != null)
message.lidJid = String(object.lidJid);
if (object.saveOnPrimaryAddressbook != null)
message.saveOnPrimaryAddressbook = Boolean(object.saveOnPrimaryAddressbook);
if (object.pnJid != null)
message.pnJid = String(object.pnJid);
if (object.username != null)
message.username = String(object.username);
return message;
};
/**
* Creates a plain object from a ContactAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.ContactAction
* @static
* @param {SyncAction.SyncActionValue.ContactAction} message ContactAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
ContactAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.fullName != null && message.hasOwnProperty("fullName")) {
object.fullName = message.fullName;
if (options.oneofs)
object._fullName = "fullName";
}
if (message.firstName != null && message.hasOwnProperty("firstName")) {
object.firstName = message.firstName;
if (options.oneofs)
object._firstName = "firstName";
}
if (message.lidJid != null && message.hasOwnProperty("lidJid")) {
object.lidJid = message.lidJid;
if (options.oneofs)
object._lidJid = "lidJid";
}
if (message.saveOnPrimaryAddressbook != null && message.hasOwnProperty("saveOnPrimaryAddressbook")) {
object.saveOnPrimaryAddressbook = message.saveOnPrimaryAddressbook;
if (options.oneofs)
object._saveOnPrimaryAddressbook = "saveOnPrimaryAddressbook";
}
if (message.pnJid != null && message.hasOwnProperty("pnJid")) {
object.pnJid = message.pnJid;
if (options.oneofs)
object._pnJid = "pnJid";
}
if (message.username != null && message.hasOwnProperty("username")) {
object.username = message.username;
if (options.oneofs)
object._username = "username";
}
return object;
};
/**
* Converts this ContactAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.ContactAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
ContactAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for ContactAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.ContactAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
ContactAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.ContactAction";
};
return ContactAction;
})();
SyncActionValue.CtwaPerCustomerDataSharingAction = (function() {
/**
* Properties of a CtwaPerCustomerDataSharingAction.
* @memberof SyncAction.SyncActionValue
* @interface ICtwaPerCustomerDataSharingAction
* @property {boolean|null} [isCtwaPerCustomerDataSharingEnabled] CtwaPerCustomerDataSharingAction isCtwaPerCustomerDataSharingEnabled
*/
/**
* Constructs a new CtwaPerCustomerDataSharingAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a CtwaPerCustomerDataSharingAction.
* @implements ICtwaPerCustomerDataSharingAction
* @constructor
* @param {SyncAction.SyncActionValue.ICtwaPerCustomerDataSharingAction=} [properties] Properties to set
*/
function CtwaPerCustomerDataSharingAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* CtwaPerCustomerDataSharingAction isCtwaPerCustomerDataSharingEnabled.
* @member {boolean|null|undefined} isCtwaPerCustomerDataSharingEnabled
* @memberof SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction
* @instance
*/
CtwaPerCustomerDataSharingAction.prototype.isCtwaPerCustomerDataSharingEnabled = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* CtwaPerCustomerDataSharingAction _isCtwaPerCustomerDataSharingEnabled.
* @member {"isCtwaPerCustomerDataSharingEnabled"|undefined} _isCtwaPerCustomerDataSharingEnabled
* @memberof SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction
* @instance
*/
Object.defineProperty(CtwaPerCustomerDataSharingAction.prototype, "_isCtwaPerCustomerDataSharingEnabled", {
get: $util.oneOfGetter($oneOfFields = ["isCtwaPerCustomerDataSharingEnabled"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new CtwaPerCustomerDataSharingAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction
* @static
* @param {SyncAction.SyncActionValue.ICtwaPerCustomerDataSharingAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction} CtwaPerCustomerDataSharingAction instance
*/
CtwaPerCustomerDataSharingAction.create = function create(properties) {
return new CtwaPerCustomerDataSharingAction(properties);
};
/**
* Encodes the specified CtwaPerCustomerDataSharingAction message. Does not implicitly {@link SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction
* @static
* @param {SyncAction.SyncActionValue.ICtwaPerCustomerDataSharingAction} message CtwaPerCustomerDataSharingAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
CtwaPerCustomerDataSharingAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.isCtwaPerCustomerDataSharingEnabled != null && Object.hasOwnProperty.call(message, "isCtwaPerCustomerDataSharingEnabled"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isCtwaPerCustomerDataSharingEnabled);
return writer;
};
/**
* Encodes the specified CtwaPerCustomerDataSharingAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction
* @static
* @param {SyncAction.SyncActionValue.ICtwaPerCustomerDataSharingAction} message CtwaPerCustomerDataSharingAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
CtwaPerCustomerDataSharingAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a CtwaPerCustomerDataSharingAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction} CtwaPerCustomerDataSharingAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
CtwaPerCustomerDataSharingAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.isCtwaPerCustomerDataSharingEnabled = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a CtwaPerCustomerDataSharingAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction} CtwaPerCustomerDataSharingAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
CtwaPerCustomerDataSharingAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a CtwaPerCustomerDataSharingAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
CtwaPerCustomerDataSharingAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.isCtwaPerCustomerDataSharingEnabled != null && message.hasOwnProperty("isCtwaPerCustomerDataSharingEnabled")) {
properties._isCtwaPerCustomerDataSharingEnabled = 1;
if (typeof message.isCtwaPerCustomerDataSharingEnabled !== "boolean")
return "isCtwaPerCustomerDataSharingEnabled: boolean expected";
}
return null;
};
/**
* Creates a CtwaPerCustomerDataSharingAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction} CtwaPerCustomerDataSharingAction
*/
CtwaPerCustomerDataSharingAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction)
return object;
var message = new $root.SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction();
if (object.isCtwaPerCustomerDataSharingEnabled != null)
message.isCtwaPerCustomerDataSharingEnabled = Boolean(object.isCtwaPerCustomerDataSharingEnabled);
return message;
};
/**
* Creates a plain object from a CtwaPerCustomerDataSharingAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction
* @static
* @param {SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction} message CtwaPerCustomerDataSharingAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
CtwaPerCustomerDataSharingAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.isCtwaPerCustomerDataSharingEnabled != null && message.hasOwnProperty("isCtwaPerCustomerDataSharingEnabled")) {
object.isCtwaPerCustomerDataSharingEnabled = message.isCtwaPerCustomerDataSharingEnabled;
if (options.oneofs)
object._isCtwaPerCustomerDataSharingEnabled = "isCtwaPerCustomerDataSharingEnabled";
}
return object;
};
/**
* Converts this CtwaPerCustomerDataSharingAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
CtwaPerCustomerDataSharingAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for CtwaPerCustomerDataSharingAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
CtwaPerCustomerDataSharingAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction";
};
return CtwaPerCustomerDataSharingAction;
})();
SyncActionValue.CustomPaymentMethod = (function() {
/**
* Properties of a CustomPaymentMethod.
* @memberof SyncAction.SyncActionValue
* @interface ICustomPaymentMethod
* @property {string|null} [credentialId] CustomPaymentMethod credentialId
* @property {string|null} [country] CustomPaymentMethod country
* @property {string|null} [type] CustomPaymentMethod type
* @property {Array.<SyncAction.SyncActionValue.ICustomPaymentMethodMetadata>|null} [metadata] CustomPaymentMethod metadata
*/
/**
* Constructs a new CustomPaymentMethod.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a CustomPaymentMethod.
* @implements ICustomPaymentMethod
* @constructor
* @param {SyncAction.SyncActionValue.ICustomPaymentMethod=} [properties] Properties to set
*/
function CustomPaymentMethod(properties) {
this.metadata = [];
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* CustomPaymentMethod credentialId.
* @member {string|null|undefined} credentialId
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @instance
*/
CustomPaymentMethod.prototype.credentialId = null;
/**
* CustomPaymentMethod country.
* @member {string|null|undefined} country
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @instance
*/
CustomPaymentMethod.prototype.country = null;
/**
* CustomPaymentMethod type.
* @member {string|null|undefined} type
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @instance
*/
CustomPaymentMethod.prototype.type = null;
/**
* CustomPaymentMethod metadata.
* @member {Array.<SyncAction.SyncActionValue.ICustomPaymentMethodMetadata>} metadata
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @instance
*/
CustomPaymentMethod.prototype.metadata = $util.emptyArray;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* CustomPaymentMethod _credentialId.
* @member {"credentialId"|undefined} _credentialId
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @instance
*/
Object.defineProperty(CustomPaymentMethod.prototype, "_credentialId", {
get: $util.oneOfGetter($oneOfFields = ["credentialId"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CustomPaymentMethod _country.
* @member {"country"|undefined} _country
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @instance
*/
Object.defineProperty(CustomPaymentMethod.prototype, "_country", {
get: $util.oneOfGetter($oneOfFields = ["country"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CustomPaymentMethod _type.
* @member {"type"|undefined} _type
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @instance
*/
Object.defineProperty(CustomPaymentMethod.prototype, "_type", {
get: $util.oneOfGetter($oneOfFields = ["type"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new CustomPaymentMethod instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @static
* @param {SyncAction.SyncActionValue.ICustomPaymentMethod=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.CustomPaymentMethod} CustomPaymentMethod instance
*/
CustomPaymentMethod.create = function create(properties) {
return new CustomPaymentMethod(properties);
};
/**
* Encodes the specified CustomPaymentMethod message. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethod.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @static
* @param {SyncAction.SyncActionValue.ICustomPaymentMethod} message CustomPaymentMethod message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
CustomPaymentMethod.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.credentialId != null && Object.hasOwnProperty.call(message, "credentialId"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.credentialId);
if (message.country != null && Object.hasOwnProperty.call(message, "country"))
writer.uint32(/* id 2, wireType 2 =*/18).string(message.country);
if (message.type != null && Object.hasOwnProperty.call(message, "type"))
writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
if (message.metadata != null && message.metadata.length)
for (var i = 0; i < message.metadata.length; ++i)
$root.SyncAction.SyncActionValue.CustomPaymentMethodMetadata.encode(message.metadata[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
return writer;
};
/**
* Encodes the specified CustomPaymentMethod message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethod.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @static
* @param {SyncAction.SyncActionValue.ICustomPaymentMethod} message CustomPaymentMethod message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
CustomPaymentMethod.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a CustomPaymentMethod message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.CustomPaymentMethod} CustomPaymentMethod
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
CustomPaymentMethod.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.CustomPaymentMethod();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.credentialId = reader.string();
break;
}
case 2: {
message.country = reader.string();
break;
}
case 3: {
message.type = reader.string();
break;
}
case 4: {
if (!(message.metadata && message.metadata.length))
message.metadata = [];
message.metadata.push($root.SyncAction.SyncActionValue.CustomPaymentMethodMetadata.decode(reader, reader.uint32()));
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a CustomPaymentMethod message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.CustomPaymentMethod} CustomPaymentMethod
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
CustomPaymentMethod.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a CustomPaymentMethod message.
* @function verify
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
CustomPaymentMethod.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.credentialId != null && message.hasOwnProperty("credentialId")) {
properties._credentialId = 1;
if (!$util.isString(message.credentialId))
return "credentialId: string expected";
}
if (message.country != null && message.hasOwnProperty("country")) {
properties._country = 1;
if (!$util.isString(message.country))
return "country: string expected";
}
if (message.type != null && message.hasOwnProperty("type")) {
properties._type = 1;
if (!$util.isString(message.type))
return "type: string expected";
}
if (message.metadata != null && message.hasOwnProperty("metadata")) {
if (!Array.isArray(message.metadata))
return "metadata: array expected";
for (var i = 0; i < message.metadata.length; ++i) {
var error = $root.SyncAction.SyncActionValue.CustomPaymentMethodMetadata.verify(message.metadata[i]);
if (error)
return "metadata." + error;
}
}
return null;
};
/**
* Creates a CustomPaymentMethod message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.CustomPaymentMethod} CustomPaymentMethod
*/
CustomPaymentMethod.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.CustomPaymentMethod)
return object;
var message = new $root.SyncAction.SyncActionValue.CustomPaymentMethod();
if (object.credentialId != null)
message.credentialId = String(object.credentialId);
if (object.country != null)
message.country = String(object.country);
if (object.type != null)
message.type = String(object.type);
if (object.metadata) {
if (!Array.isArray(object.metadata))
throw TypeError(".SyncAction.SyncActionValue.CustomPaymentMethod.metadata: array expected");
message.metadata = [];
for (var i = 0; i < object.metadata.length; ++i) {
if (typeof object.metadata[i] !== "object")
throw TypeError(".SyncAction.SyncActionValue.CustomPaymentMethod.metadata: object expected");
message.metadata[i] = $root.SyncAction.SyncActionValue.CustomPaymentMethodMetadata.fromObject(object.metadata[i]);
}
}
return message;
};
/**
* Creates a plain object from a CustomPaymentMethod message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @static
* @param {SyncAction.SyncActionValue.CustomPaymentMethod} message CustomPaymentMethod
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
CustomPaymentMethod.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.arrays || options.defaults)
object.metadata = [];
if (message.credentialId != null && message.hasOwnProperty("credentialId")) {
object.credentialId = message.credentialId;
if (options.oneofs)
object._credentialId = "credentialId";
}
if (message.country != null && message.hasOwnProperty("country")) {
object.country = message.country;
if (options.oneofs)
object._country = "country";
}
if (message.type != null && message.hasOwnProperty("type")) {
object.type = message.type;
if (options.oneofs)
object._type = "type";
}
if (message.metadata && message.metadata.length) {
object.metadata = [];
for (var j = 0; j < message.metadata.length; ++j)
object.metadata[j] = $root.SyncAction.SyncActionValue.CustomPaymentMethodMetadata.toObject(message.metadata[j], options);
}
return object;
};
/**
* Converts this CustomPaymentMethod to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @instance
* @returns {Object.<string,*>} JSON object
*/
CustomPaymentMethod.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for CustomPaymentMethod
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.CustomPaymentMethod
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
CustomPaymentMethod.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.CustomPaymentMethod";
};
return CustomPaymentMethod;
})();
SyncActionValue.CustomPaymentMethodMetadata = (function() {
/**
* Properties of a CustomPaymentMethodMetadata.
* @memberof SyncAction.SyncActionValue
* @interface ICustomPaymentMethodMetadata
* @property {string|null} [key] CustomPaymentMethodMetadata key
* @property {string|null} [value] CustomPaymentMethodMetadata value
*/
/**
* Constructs a new CustomPaymentMethodMetadata.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a CustomPaymentMethodMetadata.
* @implements ICustomPaymentMethodMetadata
* @constructor
* @param {SyncAction.SyncActionValue.ICustomPaymentMethodMetadata=} [properties] Properties to set
*/
function CustomPaymentMethodMetadata(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* CustomPaymentMethodMetadata key.
* @member {string|null|undefined} key
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodMetadata
* @instance
*/
CustomPaymentMethodMetadata.prototype.key = null;
/**
* CustomPaymentMethodMetadata value.
* @member {string|null|undefined} value
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodMetadata
* @instance
*/
CustomPaymentMethodMetadata.prototype.value = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* CustomPaymentMethodMetadata _key.
* @member {"key"|undefined} _key
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodMetadata
* @instance
*/
Object.defineProperty(CustomPaymentMethodMetadata.prototype, "_key", {
get: $util.oneOfGetter($oneOfFields = ["key"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CustomPaymentMethodMetadata _value.
* @member {"value"|undefined} _value
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodMetadata
* @instance
*/
Object.defineProperty(CustomPaymentMethodMetadata.prototype, "_value", {
get: $util.oneOfGetter($oneOfFields = ["value"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new CustomPaymentMethodMetadata instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodMetadata
* @static
* @param {SyncAction.SyncActionValue.ICustomPaymentMethodMetadata=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.CustomPaymentMethodMetadata} CustomPaymentMethodMetadata instance
*/
CustomPaymentMethodMetadata.create = function create(properties) {
return new CustomPaymentMethodMetadata(properties);
};
/**
* Encodes the specified CustomPaymentMethodMetadata message. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethodMetadata.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodMetadata
* @static
* @param {SyncAction.SyncActionValue.ICustomPaymentMethodMetadata} message CustomPaymentMethodMetadata message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
CustomPaymentMethodMetadata.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.key != null && Object.hasOwnProperty.call(message, "key"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
if (message.value != null && Object.hasOwnProperty.call(message, "value"))
writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
return writer;
};
/**
* Encodes the specified CustomPaymentMethodMetadata message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethodMetadata.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodMetadata
* @static
* @param {SyncAction.SyncActionValue.ICustomPaymentMethodMetadata} message CustomPaymentMethodMetadata message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
CustomPaymentMethodMetadata.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a CustomPaymentMethodMetadata message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodMetadata
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.CustomPaymentMethodMetadata} CustomPaymentMethodMetadata
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
CustomPaymentMethodMetadata.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.CustomPaymentMethodMetadata();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.key = reader.string();
break;
}
case 2: {
message.value = reader.string();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a CustomPaymentMethodMetadata message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodMetadata
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.CustomPaymentMethodMetadata} CustomPaymentMethodMetadata
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
CustomPaymentMethodMetadata.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a CustomPaymentMethodMetadata message.
* @function verify
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodMetadata
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
CustomPaymentMethodMetadata.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.key != null && message.hasOwnProperty("key")) {
properties._key = 1;
if (!$util.isString(message.key))
return "key: string expected";
}
if (message.value != null && message.hasOwnProperty("value")) {
properties._value = 1;
if (!$util.isString(message.value))
return "value: string expected";
}
return null;
};
/**
* Creates a CustomPaymentMethodMetadata message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodMetadata
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.CustomPaymentMethodMetadata} CustomPaymentMethodMetadata
*/
CustomPaymentMethodMetadata.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.CustomPaymentMethodMetadata)
return object;
var message = new $root.SyncAction.SyncActionValue.CustomPaymentMethodMetadata();
if (object.key != null)
message.key = String(object.key);
if (object.value != null)
message.value = String(object.value);
return message;
};
/**
* Creates a plain object from a CustomPaymentMethodMetadata message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodMetadata
* @static
* @param {SyncAction.SyncActionValue.CustomPaymentMethodMetadata} message CustomPaymentMethodMetadata
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
CustomPaymentMethodMetadata.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.key != null && message.hasOwnProperty("key")) {
object.key = message.key;
if (options.oneofs)
object._key = "key";
}
if (message.value != null && message.hasOwnProperty("value")) {
object.value = message.value;
if (options.oneofs)
object._value = "value";
}
return object;
};
/**
* Converts this CustomPaymentMethodMetadata to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodMetadata
* @instance
* @returns {Object.<string,*>} JSON object
*/
CustomPaymentMethodMetadata.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for CustomPaymentMethodMetadata
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodMetadata
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
CustomPaymentMethodMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.CustomPaymentMethodMetadata";
};
return CustomPaymentMethodMetadata;
})();
SyncActionValue.CustomPaymentMethodsAction = (function() {
/**
* Properties of a CustomPaymentMethodsAction.
* @memberof SyncAction.SyncActionValue
* @interface ICustomPaymentMethodsAction
* @property {Array.<SyncAction.SyncActionValue.ICustomPaymentMethod>|null} [customPaymentMethods] CustomPaymentMethodsAction customPaymentMethods
*/
/**
* Constructs a new CustomPaymentMethodsAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a CustomPaymentMethodsAction.
* @implements ICustomPaymentMethodsAction
* @constructor
* @param {SyncAction.SyncActionValue.ICustomPaymentMethodsAction=} [properties] Properties to set
*/
function CustomPaymentMethodsAction(properties) {
this.customPaymentMethods = [];
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* CustomPaymentMethodsAction customPaymentMethods.
* @member {Array.<SyncAction.SyncActionValue.ICustomPaymentMethod>} customPaymentMethods
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodsAction
* @instance
*/
CustomPaymentMethodsAction.prototype.customPaymentMethods = $util.emptyArray;
/**
* Creates a new CustomPaymentMethodsAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodsAction
* @static
* @param {SyncAction.SyncActionValue.ICustomPaymentMethodsAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.CustomPaymentMethodsAction} CustomPaymentMethodsAction instance
*/
CustomPaymentMethodsAction.create = function create(properties) {
return new CustomPaymentMethodsAction(properties);
};
/**
* Encodes the specified CustomPaymentMethodsAction message. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethodsAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodsAction
* @static
* @param {SyncAction.SyncActionValue.ICustomPaymentMethodsAction} message CustomPaymentMethodsAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
CustomPaymentMethodsAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.customPaymentMethods != null && message.customPaymentMethods.length)
for (var i = 0; i < message.customPaymentMethods.length; ++i)
$root.SyncAction.SyncActionValue.CustomPaymentMethod.encode(message.customPaymentMethods[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
return writer;
};
/**
* Encodes the specified CustomPaymentMethodsAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethodsAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodsAction
* @static
* @param {SyncAction.SyncActionValue.ICustomPaymentMethodsAction} message CustomPaymentMethodsAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
CustomPaymentMethodsAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a CustomPaymentMethodsAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodsAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.CustomPaymentMethodsAction} CustomPaymentMethodsAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
CustomPaymentMethodsAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.CustomPaymentMethodsAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.customPaymentMethods && message.customPaymentMethods.length))
message.customPaymentMethods = [];
message.customPaymentMethods.push($root.SyncAction.SyncActionValue.CustomPaymentMethod.decode(reader, reader.uint32()));
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a CustomPaymentMethodsAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodsAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.CustomPaymentMethodsAction} CustomPaymentMethodsAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
CustomPaymentMethodsAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a CustomPaymentMethodsAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodsAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
CustomPaymentMethodsAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
if (message.customPaymentMethods != null && message.hasOwnProperty("customPaymentMethods")) {
if (!Array.isArray(message.customPaymentMethods))
return "customPaymentMethods: array expected";
for (var i = 0; i < message.customPaymentMethods.length; ++i) {
var error = $root.SyncAction.SyncActionValue.CustomPaymentMethod.verify(message.customPaymentMethods[i]);
if (error)
return "customPaymentMethods." + error;
}
}
return null;
};
/**
* Creates a CustomPaymentMethodsAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodsAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.CustomPaymentMethodsAction} CustomPaymentMethodsAction
*/
CustomPaymentMethodsAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.CustomPaymentMethodsAction)
return object;
var message = new $root.SyncAction.SyncActionValue.CustomPaymentMethodsAction();
if (object.customPaymentMethods) {
if (!Array.isArray(object.customPaymentMethods))
throw TypeError(".SyncAction.SyncActionValue.CustomPaymentMethodsAction.customPaymentMethods: array expected");
message.customPaymentMethods = [];
for (var i = 0; i < object.customPaymentMethods.length; ++i) {
if (typeof object.customPaymentMethods[i] !== "object")
throw TypeError(".SyncAction.SyncActionValue.CustomPaymentMethodsAction.customPaymentMethods: object expected");
message.customPaymentMethods[i] = $root.SyncAction.SyncActionValue.CustomPaymentMethod.fromObject(object.customPaymentMethods[i]);
}
}
return message;
};
/**
* Creates a plain object from a CustomPaymentMethodsAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodsAction
* @static
* @param {SyncAction.SyncActionValue.CustomPaymentMethodsAction} message CustomPaymentMethodsAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
CustomPaymentMethodsAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.arrays || options.defaults)
object.customPaymentMethods = [];
if (message.customPaymentMethods && message.customPaymentMethods.length) {
object.customPaymentMethods = [];
for (var j = 0; j < message.customPaymentMethods.length; ++j)
object.customPaymentMethods[j] = $root.SyncAction.SyncActionValue.CustomPaymentMethod.toObject(message.customPaymentMethods[j], options);
}
return object;
};
/**
* Converts this CustomPaymentMethodsAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodsAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
CustomPaymentMethodsAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for CustomPaymentMethodsAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.CustomPaymentMethodsAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
CustomPaymentMethodsAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.CustomPaymentMethodsAction";
};
return CustomPaymentMethodsAction;
})();
SyncActionValue.DeleteChatAction = (function() {
/**
* Properties of a DeleteChatAction.
* @memberof SyncAction.SyncActionValue
* @interface IDeleteChatAction
* @property {SyncAction.SyncActionValue.ISyncActionMessageRange|null} [messageRange] DeleteChatAction messageRange
*/
/**
* Constructs a new DeleteChatAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a DeleteChatAction.
* @implements IDeleteChatAction
* @constructor
* @param {SyncAction.SyncActionValue.IDeleteChatAction=} [properties] Properties to set
*/
function DeleteChatAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* DeleteChatAction messageRange.
* @member {SyncAction.SyncActionValue.ISyncActionMessageRange|null|undefined} messageRange
* @memberof SyncAction.SyncActionValue.DeleteChatAction
* @instance
*/
DeleteChatAction.prototype.messageRange = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* DeleteChatAction _messageRange.
* @member {"messageRange"|undefined} _messageRange
* @memberof SyncAction.SyncActionValue.DeleteChatAction
* @instance
*/
Object.defineProperty(DeleteChatAction.prototype, "_messageRange", {
get: $util.oneOfGetter($oneOfFields = ["messageRange"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new DeleteChatAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.DeleteChatAction
* @static
* @param {SyncAction.SyncActionValue.IDeleteChatAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.DeleteChatAction} DeleteChatAction instance
*/
DeleteChatAction.create = function create(properties) {
return new DeleteChatAction(properties);
};
/**
* Encodes the specified DeleteChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.DeleteChatAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.DeleteChatAction
* @static
* @param {SyncAction.SyncActionValue.IDeleteChatAction} message DeleteChatAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
DeleteChatAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.messageRange != null && Object.hasOwnProperty.call(message, "messageRange"))
$root.SyncAction.SyncActionValue.SyncActionMessageRange.encode(message.messageRange, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
return writer;
};
/**
* Encodes the specified DeleteChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.DeleteChatAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.DeleteChatAction
* @static
* @param {SyncAction.SyncActionValue.IDeleteChatAction} message DeleteChatAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
DeleteChatAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a DeleteChatAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.DeleteChatAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.DeleteChatAction} DeleteChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
DeleteChatAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.DeleteChatAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.messageRange = $root.SyncAction.SyncActionValue.SyncActionMessageRange.decode(reader, reader.uint32());
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a DeleteChatAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.DeleteChatAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.DeleteChatAction} DeleteChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
DeleteChatAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a DeleteChatAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.DeleteChatAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
DeleteChatAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.messageRange != null && message.hasOwnProperty("messageRange")) {
properties._messageRange = 1;
{
var error = $root.SyncAction.SyncActionValue.SyncActionMessageRange.verify(message.messageRange);
if (error)
return "messageRange." + error;
}
}
return null;
};
/**
* Creates a DeleteChatAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.DeleteChatAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.DeleteChatAction} DeleteChatAction
*/
DeleteChatAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.DeleteChatAction)
return object;
var message = new $root.SyncAction.SyncActionValue.DeleteChatAction();
if (object.messageRange != null) {
if (typeof object.messageRange !== "object")
throw TypeError(".SyncAction.SyncActionValue.DeleteChatAction.messageRange: object expected");
message.messageRange = $root.SyncAction.SyncActionValue.SyncActionMessageRange.fromObject(object.messageRange);
}
return message;
};
/**
* Creates a plain object from a DeleteChatAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.DeleteChatAction
* @static
* @param {SyncAction.SyncActionValue.DeleteChatAction} message DeleteChatAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
DeleteChatAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.messageRange != null && message.hasOwnProperty("messageRange")) {
object.messageRange = $root.SyncAction.SyncActionValue.SyncActionMessageRange.toObject(message.messageRange, options);
if (options.oneofs)
object._messageRange = "messageRange";
}
return object;
};
/**
* Converts this DeleteChatAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.DeleteChatAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
DeleteChatAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for DeleteChatAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.DeleteChatAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
DeleteChatAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.DeleteChatAction";
};
return DeleteChatAction;
})();
SyncActionValue.DeleteIndividualCallLogAction = (function() {
/**
* Properties of a DeleteIndividualCallLogAction.
* @memberof SyncAction.SyncActionValue
* @interface IDeleteIndividualCallLogAction
* @property {string|null} [peerJid] DeleteIndividualCallLogAction peerJid
* @property {boolean|null} [isIncoming] DeleteIndividualCallLogAction isIncoming
*/
/**
* Constructs a new DeleteIndividualCallLogAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a DeleteIndividualCallLogAction.
* @implements IDeleteIndividualCallLogAction
* @constructor
* @param {SyncAction.SyncActionValue.IDeleteIndividualCallLogAction=} [properties] Properties to set
*/
function DeleteIndividualCallLogAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* DeleteIndividualCallLogAction peerJid.
* @member {string|null|undefined} peerJid
* @memberof SyncAction.SyncActionValue.DeleteIndividualCallLogAction
* @instance
*/
DeleteIndividualCallLogAction.prototype.peerJid = null;
/**
* DeleteIndividualCallLogAction isIncoming.
* @member {boolean|null|undefined} isIncoming
* @memberof SyncAction.SyncActionValue.DeleteIndividualCallLogAction
* @instance
*/
DeleteIndividualCallLogAction.prototype.isIncoming = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* DeleteIndividualCallLogAction _peerJid.
* @member {"peerJid"|undefined} _peerJid
* @memberof SyncAction.SyncActionValue.DeleteIndividualCallLogAction
* @instance
*/
Object.defineProperty(DeleteIndividualCallLogAction.prototype, "_peerJid", {
get: $util.oneOfGetter($oneOfFields = ["peerJid"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* DeleteIndividualCallLogAction _isIncoming.
* @member {"isIncoming"|undefined} _isIncoming
* @memberof SyncAction.SyncActionValue.DeleteIndividualCallLogAction
* @instance
*/
Object.defineProperty(DeleteIndividualCallLogAction.prototype, "_isIncoming", {
get: $util.oneOfGetter($oneOfFields = ["isIncoming"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new DeleteIndividualCallLogAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.DeleteIndividualCallLogAction
* @static
* @param {SyncAction.SyncActionValue.IDeleteIndividualCallLogAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.DeleteIndividualCallLogAction} DeleteIndividualCallLogAction instance
*/
DeleteIndividualCallLogAction.create = function create(properties) {
return new DeleteIndividualCallLogAction(properties);
};
/**
* Encodes the specified DeleteIndividualCallLogAction message. Does not implicitly {@link SyncAction.SyncActionValue.DeleteIndividualCallLogAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.DeleteIndividualCallLogAction
* @static
* @param {SyncAction.SyncActionValue.IDeleteIndividualCallLogAction} message DeleteIndividualCallLogAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
DeleteIndividualCallLogAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.peerJid != null && Object.hasOwnProperty.call(message, "peerJid"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.peerJid);
if (message.isIncoming != null && Object.hasOwnProperty.call(message, "isIncoming"))
writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isIncoming);
return writer;
};
/**
* Encodes the specified DeleteIndividualCallLogAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.DeleteIndividualCallLogAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.DeleteIndividualCallLogAction
* @static
* @param {SyncAction.SyncActionValue.IDeleteIndividualCallLogAction} message DeleteIndividualCallLogAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
DeleteIndividualCallLogAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a DeleteIndividualCallLogAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.DeleteIndividualCallLogAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.DeleteIndividualCallLogAction} DeleteIndividualCallLogAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
DeleteIndividualCallLogAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.DeleteIndividualCallLogAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.peerJid = reader.string();
break;
}
case 2: {
message.isIncoming = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a DeleteIndividualCallLogAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.DeleteIndividualCallLogAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.DeleteIndividualCallLogAction} DeleteIndividualCallLogAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
DeleteIndividualCallLogAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a DeleteIndividualCallLogAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.DeleteIndividualCallLogAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
DeleteIndividualCallLogAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.peerJid != null && message.hasOwnProperty("peerJid")) {
properties._peerJid = 1;
if (!$util.isString(message.peerJid))
return "peerJid: string expected";
}
if (message.isIncoming != null && message.hasOwnProperty("isIncoming")) {
properties._isIncoming = 1;
if (typeof message.isIncoming !== "boolean")
return "isIncoming: boolean expected";
}
return null;
};
/**
* Creates a DeleteIndividualCallLogAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.DeleteIndividualCallLogAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.DeleteIndividualCallLogAction} DeleteIndividualCallLogAction
*/
DeleteIndividualCallLogAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.DeleteIndividualCallLogAction)
return object;
var message = new $root.SyncAction.SyncActionValue.DeleteIndividualCallLogAction();
if (object.peerJid != null)
message.peerJid = String(object.peerJid);
if (object.isIncoming != null)
message.isIncoming = Boolean(object.isIncoming);
return message;
};
/**
* Creates a plain object from a DeleteIndividualCallLogAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.DeleteIndividualCallLogAction
* @static
* @param {SyncAction.SyncActionValue.DeleteIndividualCallLogAction} message DeleteIndividualCallLogAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
DeleteIndividualCallLogAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.peerJid != null && message.hasOwnProperty("peerJid")) {
object.peerJid = message.peerJid;
if (options.oneofs)
object._peerJid = "peerJid";
}
if (message.isIncoming != null && message.hasOwnProperty("isIncoming")) {
object.isIncoming = message.isIncoming;
if (options.oneofs)
object._isIncoming = "isIncoming";
}
return object;
};
/**
* Converts this DeleteIndividualCallLogAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.DeleteIndividualCallLogAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
DeleteIndividualCallLogAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for DeleteIndividualCallLogAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.DeleteIndividualCallLogAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
DeleteIndividualCallLogAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.DeleteIndividualCallLogAction";
};
return DeleteIndividualCallLogAction;
})();
SyncActionValue.DeleteMessageForMeAction = (function() {
/**
* Properties of a DeleteMessageForMeAction.
* @memberof SyncAction.SyncActionValue
* @interface IDeleteMessageForMeAction
* @property {boolean|null} [deleteMedia] DeleteMessageForMeAction deleteMedia
* @property {number|Long|null} [messageTimestamp] DeleteMessageForMeAction messageTimestamp
*/
/**
* Constructs a new DeleteMessageForMeAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a DeleteMessageForMeAction.
* @implements IDeleteMessageForMeAction
* @constructor
* @param {SyncAction.SyncActionValue.IDeleteMessageForMeAction=} [properties] Properties to set
*/
function DeleteMessageForMeAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* DeleteMessageForMeAction deleteMedia.
* @member {boolean|null|undefined} deleteMedia
* @memberof SyncAction.SyncActionValue.DeleteMessageForMeAction
* @instance
*/
DeleteMessageForMeAction.prototype.deleteMedia = null;
/**
* DeleteMessageForMeAction messageTimestamp.
* @member {number|Long|null|undefined} messageTimestamp
* @memberof SyncAction.SyncActionValue.DeleteMessageForMeAction
* @instance
*/
DeleteMessageForMeAction.prototype.messageTimestamp = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* DeleteMessageForMeAction _deleteMedia.
* @member {"deleteMedia"|undefined} _deleteMedia
* @memberof SyncAction.SyncActionValue.DeleteMessageForMeAction
* @instance
*/
Object.defineProperty(DeleteMessageForMeAction.prototype, "_deleteMedia", {
get: $util.oneOfGetter($oneOfFields = ["deleteMedia"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* DeleteMessageForMeAction _messageTimestamp.
* @member {"messageTimestamp"|undefined} _messageTimestamp
* @memberof SyncAction.SyncActionValue.DeleteMessageForMeAction
* @instance
*/
Object.defineProperty(DeleteMessageForMeAction.prototype, "_messageTimestamp", {
get: $util.oneOfGetter($oneOfFields = ["messageTimestamp"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new DeleteMessageForMeAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.DeleteMessageForMeAction
* @static
* @param {SyncAction.SyncActionValue.IDeleteMessageForMeAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.DeleteMessageForMeAction} DeleteMessageForMeAction instance
*/
DeleteMessageForMeAction.create = function create(properties) {
return new DeleteMessageForMeAction(properties);
};
/**
* Encodes the specified DeleteMessageForMeAction message. Does not implicitly {@link SyncAction.SyncActionValue.DeleteMessageForMeAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.DeleteMessageForMeAction
* @static
* @param {SyncAction.SyncActionValue.IDeleteMessageForMeAction} message DeleteMessageForMeAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
DeleteMessageForMeAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.deleteMedia != null && Object.hasOwnProperty.call(message, "deleteMedia"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deleteMedia);
if (message.messageTimestamp != null && Object.hasOwnProperty.call(message, "messageTimestamp"))
writer.uint32(/* id 2, wireType 0 =*/16).int64(message.messageTimestamp);
return writer;
};
/**
* Encodes the specified DeleteMessageForMeAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.DeleteMessageForMeAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.DeleteMessageForMeAction
* @static
* @param {SyncAction.SyncActionValue.IDeleteMessageForMeAction} message DeleteMessageForMeAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
DeleteMessageForMeAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a DeleteMessageForMeAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.DeleteMessageForMeAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.DeleteMessageForMeAction} DeleteMessageForMeAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
DeleteMessageForMeAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.DeleteMessageForMeAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.deleteMedia = reader.bool();
break;
}
case 2: {
message.messageTimestamp = reader.int64();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a DeleteMessageForMeAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.DeleteMessageForMeAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.DeleteMessageForMeAction} DeleteMessageForMeAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
DeleteMessageForMeAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a DeleteMessageForMeAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.DeleteMessageForMeAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
DeleteMessageForMeAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.deleteMedia != null && message.hasOwnProperty("deleteMedia")) {
properties._deleteMedia = 1;
if (typeof message.deleteMedia !== "boolean")
return "deleteMedia: boolean expected";
}
if (message.messageTimestamp != null && message.hasOwnProperty("messageTimestamp")) {
properties._messageTimestamp = 1;
if (!$util.isInteger(message.messageTimestamp) && !(message.messageTimestamp && $util.isInteger(message.messageTimestamp.low) && $util.isInteger(message.messageTimestamp.high)))
return "messageTimestamp: integer|Long expected";
}
return null;
};
/**
* Creates a DeleteMessageForMeAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.DeleteMessageForMeAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.DeleteMessageForMeAction} DeleteMessageForMeAction
*/
DeleteMessageForMeAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.DeleteMessageForMeAction)
return object;
var message = new $root.SyncAction.SyncActionValue.DeleteMessageForMeAction();
if (object.deleteMedia != null)
message.deleteMedia = Boolean(object.deleteMedia);
if (object.messageTimestamp != null)
if ($util.Long)
(message.messageTimestamp = $util.Long.fromValue(object.messageTimestamp)).unsigned = false;
else if (typeof object.messageTimestamp === "string")
message.messageTimestamp = parseInt(object.messageTimestamp, 10);
else if (typeof object.messageTimestamp === "number")
message.messageTimestamp = object.messageTimestamp;
else if (typeof object.messageTimestamp === "object")
message.messageTimestamp = new $util.LongBits(object.messageTimestamp.low >>> 0, object.messageTimestamp.high >>> 0).toNumber();
return message;
};
/**
* Creates a plain object from a DeleteMessageForMeAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.DeleteMessageForMeAction
* @static
* @param {SyncAction.SyncActionValue.DeleteMessageForMeAction} message DeleteMessageForMeAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
DeleteMessageForMeAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.deleteMedia != null && message.hasOwnProperty("deleteMedia")) {
object.deleteMedia = message.deleteMedia;
if (options.oneofs)
object._deleteMedia = "deleteMedia";
}
if (message.messageTimestamp != null && message.hasOwnProperty("messageTimestamp")) {
if (typeof message.messageTimestamp === "number")
object.messageTimestamp = options.longs === String ? String(message.messageTimestamp) : message.messageTimestamp;
else
object.messageTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.messageTimestamp) : options.longs === Number ? new $util.LongBits(message.messageTimestamp.low >>> 0, message.messageTimestamp.high >>> 0).toNumber() : message.messageTimestamp;
if (options.oneofs)
object._messageTimestamp = "messageTimestamp";
}
return object;
};
/**
* Converts this DeleteMessageForMeAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.DeleteMessageForMeAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
DeleteMessageForMeAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for DeleteMessageForMeAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.DeleteMessageForMeAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
DeleteMessageForMeAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.DeleteMessageForMeAction";
};
return DeleteMessageForMeAction;
})();
SyncActionValue.ExternalWebBetaAction = (function() {
/**
* Properties of an ExternalWebBetaAction.
* @memberof SyncAction.SyncActionValue
* @interface IExternalWebBetaAction
* @property {boolean|null} [isOptIn] ExternalWebBetaAction isOptIn
*/
/**
* Constructs a new ExternalWebBetaAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents an ExternalWebBetaAction.
* @implements IExternalWebBetaAction
* @constructor
* @param {SyncAction.SyncActionValue.IExternalWebBetaAction=} [properties] Properties to set
*/
function ExternalWebBetaAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* ExternalWebBetaAction isOptIn.
* @member {boolean|null|undefined} isOptIn
* @memberof SyncAction.SyncActionValue.ExternalWebBetaAction
* @instance
*/
ExternalWebBetaAction.prototype.isOptIn = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* ExternalWebBetaAction _isOptIn.
* @member {"isOptIn"|undefined} _isOptIn
* @memberof SyncAction.SyncActionValue.ExternalWebBetaAction
* @instance
*/
Object.defineProperty(ExternalWebBetaAction.prototype, "_isOptIn", {
get: $util.oneOfGetter($oneOfFields = ["isOptIn"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new ExternalWebBetaAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.ExternalWebBetaAction
* @static
* @param {SyncAction.SyncActionValue.IExternalWebBetaAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.ExternalWebBetaAction} ExternalWebBetaAction instance
*/
ExternalWebBetaAction.create = function create(properties) {
return new ExternalWebBetaAction(properties);
};
/**
* Encodes the specified ExternalWebBetaAction message. Does not implicitly {@link SyncAction.SyncActionValue.ExternalWebBetaAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.ExternalWebBetaAction
* @static
* @param {SyncAction.SyncActionValue.IExternalWebBetaAction} message ExternalWebBetaAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ExternalWebBetaAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.isOptIn != null && Object.hasOwnProperty.call(message, "isOptIn"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isOptIn);
return writer;
};
/**
* Encodes the specified ExternalWebBetaAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ExternalWebBetaAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.ExternalWebBetaAction
* @static
* @param {SyncAction.SyncActionValue.IExternalWebBetaAction} message ExternalWebBetaAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ExternalWebBetaAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes an ExternalWebBetaAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.ExternalWebBetaAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.ExternalWebBetaAction} ExternalWebBetaAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ExternalWebBetaAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.ExternalWebBetaAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.isOptIn = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes an ExternalWebBetaAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.ExternalWebBetaAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.ExternalWebBetaAction} ExternalWebBetaAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ExternalWebBetaAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies an ExternalWebBetaAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.ExternalWebBetaAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
ExternalWebBetaAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.isOptIn != null && message.hasOwnProperty("isOptIn")) {
properties._isOptIn = 1;
if (typeof message.isOptIn !== "boolean")
return "isOptIn: boolean expected";
}
return null;
};
/**
* Creates an ExternalWebBetaAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.ExternalWebBetaAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.ExternalWebBetaAction} ExternalWebBetaAction
*/
ExternalWebBetaAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.ExternalWebBetaAction)
return object;
var message = new $root.SyncAction.SyncActionValue.ExternalWebBetaAction();
if (object.isOptIn != null)
message.isOptIn = Boolean(object.isOptIn);
return message;
};
/**
* Creates a plain object from an ExternalWebBetaAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.ExternalWebBetaAction
* @static
* @param {SyncAction.SyncActionValue.ExternalWebBetaAction} message ExternalWebBetaAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
ExternalWebBetaAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.isOptIn != null && message.hasOwnProperty("isOptIn")) {
object.isOptIn = message.isOptIn;
if (options.oneofs)
object._isOptIn = "isOptIn";
}
return object;
};
/**
* Converts this ExternalWebBetaAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.ExternalWebBetaAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
ExternalWebBetaAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for ExternalWebBetaAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.ExternalWebBetaAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
ExternalWebBetaAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.ExternalWebBetaAction";
};
return ExternalWebBetaAction;
})();
SyncActionValue.FavoritesAction = (function() {
/**
* Properties of a FavoritesAction.
* @memberof SyncAction.SyncActionValue
* @interface IFavoritesAction
* @property {Array.<SyncAction.SyncActionValue.FavoritesAction.IFavorite>|null} [favorites] FavoritesAction favorites
*/
/**
* Constructs a new FavoritesAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a FavoritesAction.
* @implements IFavoritesAction
* @constructor
* @param {SyncAction.SyncActionValue.IFavoritesAction=} [properties] Properties to set
*/
function FavoritesAction(properties) {
this.favorites = [];
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* FavoritesAction favorites.
* @member {Array.<SyncAction.SyncActionValue.FavoritesAction.IFavorite>} favorites
* @memberof SyncAction.SyncActionValue.FavoritesAction
* @instance
*/
FavoritesAction.prototype.favorites = $util.emptyArray;
/**
* Creates a new FavoritesAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.FavoritesAction
* @static
* @param {SyncAction.SyncActionValue.IFavoritesAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.FavoritesAction} FavoritesAction instance
*/
FavoritesAction.create = function create(properties) {
return new FavoritesAction(properties);
};
/**
* Encodes the specified FavoritesAction message. Does not implicitly {@link SyncAction.SyncActionValue.FavoritesAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.FavoritesAction
* @static
* @param {SyncAction.SyncActionValue.IFavoritesAction} message FavoritesAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
FavoritesAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.favorites != null && message.favorites.length)
for (var i = 0; i < message.favorites.length; ++i)
$root.SyncAction.SyncActionValue.FavoritesAction.Favorite.encode(message.favorites[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
return writer;
};
/**
* Encodes the specified FavoritesAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.FavoritesAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.FavoritesAction
* @static
* @param {SyncAction.SyncActionValue.IFavoritesAction} message FavoritesAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
FavoritesAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a FavoritesAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.FavoritesAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.FavoritesAction} FavoritesAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
FavoritesAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.FavoritesAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.favorites && message.favorites.length))
message.favorites = [];
message.favorites.push($root.SyncAction.SyncActionValue.FavoritesAction.Favorite.decode(reader, reader.uint32()));
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a FavoritesAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.FavoritesAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.FavoritesAction} FavoritesAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
FavoritesAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a FavoritesAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.FavoritesAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
FavoritesAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
if (message.favorites != null && message.hasOwnProperty("favorites")) {
if (!Array.isArray(message.favorites))
return "favorites: array expected";
for (var i = 0; i < message.favorites.length; ++i) {
var error = $root.SyncAction.SyncActionValue.FavoritesAction.Favorite.verify(message.favorites[i]);
if (error)
return "favorites." + error;
}
}
return null;
};
/**
* Creates a FavoritesAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.FavoritesAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.FavoritesAction} FavoritesAction
*/
FavoritesAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.FavoritesAction)
return object;
var message = new $root.SyncAction.SyncActionValue.FavoritesAction();
if (object.favorites) {
if (!Array.isArray(object.favorites))
throw TypeError(".SyncAction.SyncActionValue.FavoritesAction.favorites: array expected");
message.favorites = [];
for (var i = 0; i < object.favorites.length; ++i) {
if (typeof object.favorites[i] !== "object")
throw TypeError(".SyncAction.SyncActionValue.FavoritesAction.favorites: object expected");
message.favorites[i] = $root.SyncAction.SyncActionValue.FavoritesAction.Favorite.fromObject(object.favorites[i]);
}
}
return message;
};
/**
* Creates a plain object from a FavoritesAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.FavoritesAction
* @static
* @param {SyncAction.SyncActionValue.FavoritesAction} message FavoritesAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
FavoritesAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.arrays || options.defaults)
object.favorites = [];
if (message.favorites && message.favorites.length) {
object.favorites = [];
for (var j = 0; j < message.favorites.length; ++j)
object.favorites[j] = $root.SyncAction.SyncActionValue.FavoritesAction.Favorite.toObject(message.favorites[j], options);
}
return object;
};
/**
* Converts this FavoritesAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.FavoritesAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
FavoritesAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for FavoritesAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.FavoritesAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
FavoritesAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.FavoritesAction";
};
FavoritesAction.Favorite = (function() {
/**
* Properties of a Favorite.
* @memberof SyncAction.SyncActionValue.FavoritesAction
* @interface IFavorite
* @property {string|null} [id] Favorite id
*/
/**
* Constructs a new Favorite.
* @memberof SyncAction.SyncActionValue.FavoritesAction
* @classdesc Represents a Favorite.
* @implements IFavorite
* @constructor
* @param {SyncAction.SyncActionValue.FavoritesAction.IFavorite=} [properties] Properties to set
*/
function Favorite(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* Favorite id.
* @member {string|null|undefined} id
* @memberof SyncAction.SyncActionValue.FavoritesAction.Favorite
* @instance
*/
Favorite.prototype.id = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* Favorite _id.
* @member {"id"|undefined} _id
* @memberof SyncAction.SyncActionValue.FavoritesAction.Favorite
* @instance
*/
Object.defineProperty(Favorite.prototype, "_id", {
get: $util.oneOfGetter($oneOfFields = ["id"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new Favorite instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.FavoritesAction.Favorite
* @static
* @param {SyncAction.SyncActionValue.FavoritesAction.IFavorite=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.FavoritesAction.Favorite} Favorite instance
*/
Favorite.create = function create(properties) {
return new Favorite(properties);
};
/**
* Encodes the specified Favorite message. Does not implicitly {@link SyncAction.SyncActionValue.FavoritesAction.Favorite.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.FavoritesAction.Favorite
* @static
* @param {SyncAction.SyncActionValue.FavoritesAction.IFavorite} message Favorite message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
Favorite.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.id != null && Object.hasOwnProperty.call(message, "id"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
return writer;
};
/**
* Encodes the specified Favorite message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.FavoritesAction.Favorite.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.FavoritesAction.Favorite
* @static
* @param {SyncAction.SyncActionValue.FavoritesAction.IFavorite} message Favorite message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
Favorite.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a Favorite message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.FavoritesAction.Favorite
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.FavoritesAction.Favorite} Favorite
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
Favorite.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.FavoritesAction.Favorite();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.id = reader.string();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a Favorite message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.FavoritesAction.Favorite
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.FavoritesAction.Favorite} Favorite
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
Favorite.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a Favorite message.
* @function verify
* @memberof SyncAction.SyncActionValue.FavoritesAction.Favorite
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
Favorite.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.id != null && message.hasOwnProperty("id")) {
properties._id = 1;
if (!$util.isString(message.id))
return "id: string expected";
}
return null;
};
/**
* Creates a Favorite message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.FavoritesAction.Favorite
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.FavoritesAction.Favorite} Favorite
*/
Favorite.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.FavoritesAction.Favorite)
return object;
var message = new $root.SyncAction.SyncActionValue.FavoritesAction.Favorite();
if (object.id != null)
message.id = String(object.id);
return message;
};
/**
* Creates a plain object from a Favorite message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.FavoritesAction.Favorite
* @static
* @param {SyncAction.SyncActionValue.FavoritesAction.Favorite} message Favorite
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
Favorite.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.id != null && message.hasOwnProperty("id")) {
object.id = message.id;
if (options.oneofs)
object._id = "id";
}
return object;
};
/**
* Converts this Favorite to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.FavoritesAction.Favorite
* @instance
* @returns {Object.<string,*>} JSON object
*/
Favorite.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for Favorite
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.FavoritesAction.Favorite
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
Favorite.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.FavoritesAction.Favorite";
};
return Favorite;
})();
return FavoritesAction;
})();
SyncActionValue.KeyExpiration = (function() {
/**
* Properties of a KeyExpiration.
* @memberof SyncAction.SyncActionValue
* @interface IKeyExpiration
* @property {number|null} [expiredKeyEpoch] KeyExpiration expiredKeyEpoch
*/
/**
* Constructs a new KeyExpiration.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a KeyExpiration.
* @implements IKeyExpiration
* @constructor
* @param {SyncAction.SyncActionValue.IKeyExpiration=} [properties] Properties to set
*/
function KeyExpiration(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* KeyExpiration expiredKeyEpoch.
* @member {number|null|undefined} expiredKeyEpoch
* @memberof SyncAction.SyncActionValue.KeyExpiration
* @instance
*/
KeyExpiration.prototype.expiredKeyEpoch = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* KeyExpiration _expiredKeyEpoch.
* @member {"expiredKeyEpoch"|undefined} _expiredKeyEpoch
* @memberof SyncAction.SyncActionValue.KeyExpiration
* @instance
*/
Object.defineProperty(KeyExpiration.prototype, "_expiredKeyEpoch", {
get: $util.oneOfGetter($oneOfFields = ["expiredKeyEpoch"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new KeyExpiration instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.KeyExpiration
* @static
* @param {SyncAction.SyncActionValue.IKeyExpiration=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.KeyExpiration} KeyExpiration instance
*/
KeyExpiration.create = function create(properties) {
return new KeyExpiration(properties);
};
/**
* Encodes the specified KeyExpiration message. Does not implicitly {@link SyncAction.SyncActionValue.KeyExpiration.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.KeyExpiration
* @static
* @param {SyncAction.SyncActionValue.IKeyExpiration} message KeyExpiration message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
KeyExpiration.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.expiredKeyEpoch != null && Object.hasOwnProperty.call(message, "expiredKeyEpoch"))
writer.uint32(/* id 1, wireType 0 =*/8).int32(message.expiredKeyEpoch);
return writer;
};
/**
* Encodes the specified KeyExpiration message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.KeyExpiration.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.KeyExpiration
* @static
* @param {SyncAction.SyncActionValue.IKeyExpiration} message KeyExpiration message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
KeyExpiration.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a KeyExpiration message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.KeyExpiration
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.KeyExpiration} KeyExpiration
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
KeyExpiration.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.KeyExpiration();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.expiredKeyEpoch = reader.int32();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a KeyExpiration message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.KeyExpiration
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.KeyExpiration} KeyExpiration
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
KeyExpiration.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a KeyExpiration message.
* @function verify
* @memberof SyncAction.SyncActionValue.KeyExpiration
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
KeyExpiration.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.expiredKeyEpoch != null && message.hasOwnProperty("expiredKeyEpoch")) {
properties._expiredKeyEpoch = 1;
if (!$util.isInteger(message.expiredKeyEpoch))
return "expiredKeyEpoch: integer expected";
}
return null;
};
/**
* Creates a KeyExpiration message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.KeyExpiration
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.KeyExpiration} KeyExpiration
*/
KeyExpiration.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.KeyExpiration)
return object;
var message = new $root.SyncAction.SyncActionValue.KeyExpiration();
if (object.expiredKeyEpoch != null)
message.expiredKeyEpoch = object.expiredKeyEpoch | 0;
return message;
};
/**
* Creates a plain object from a KeyExpiration message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.KeyExpiration
* @static
* @param {SyncAction.SyncActionValue.KeyExpiration} message KeyExpiration
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
KeyExpiration.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.expiredKeyEpoch != null && message.hasOwnProperty("expiredKeyEpoch")) {
object.expiredKeyEpoch = message.expiredKeyEpoch;
if (options.oneofs)
object._expiredKeyEpoch = "expiredKeyEpoch";
}
return object;
};
/**
* Converts this KeyExpiration to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.KeyExpiration
* @instance
* @returns {Object.<string,*>} JSON object
*/
KeyExpiration.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for KeyExpiration
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.KeyExpiration
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
KeyExpiration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.KeyExpiration";
};
return KeyExpiration;
})();
SyncActionValue.LabelAssociationAction = (function() {
/**
* Properties of a LabelAssociationAction.
* @memberof SyncAction.SyncActionValue
* @interface ILabelAssociationAction
* @property {boolean|null} [labeled] LabelAssociationAction labeled
*/
/**
* Constructs a new LabelAssociationAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a LabelAssociationAction.
* @implements ILabelAssociationAction
* @constructor
* @param {SyncAction.SyncActionValue.ILabelAssociationAction=} [properties] Properties to set
*/
function LabelAssociationAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* LabelAssociationAction labeled.
* @member {boolean|null|undefined} labeled
* @memberof SyncAction.SyncActionValue.LabelAssociationAction
* @instance
*/
LabelAssociationAction.prototype.labeled = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* LabelAssociationAction _labeled.
* @member {"labeled"|undefined} _labeled
* @memberof SyncAction.SyncActionValue.LabelAssociationAction
* @instance
*/
Object.defineProperty(LabelAssociationAction.prototype, "_labeled", {
get: $util.oneOfGetter($oneOfFields = ["labeled"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new LabelAssociationAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.LabelAssociationAction
* @static
* @param {SyncAction.SyncActionValue.ILabelAssociationAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.LabelAssociationAction} LabelAssociationAction instance
*/
LabelAssociationAction.create = function create(properties) {
return new LabelAssociationAction(properties);
};
/**
* Encodes the specified LabelAssociationAction message. Does not implicitly {@link SyncAction.SyncActionValue.LabelAssociationAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.LabelAssociationAction
* @static
* @param {SyncAction.SyncActionValue.ILabelAssociationAction} message LabelAssociationAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LabelAssociationAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.labeled != null && Object.hasOwnProperty.call(message, "labeled"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.labeled);
return writer;
};
/**
* Encodes the specified LabelAssociationAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LabelAssociationAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.LabelAssociationAction
* @static
* @param {SyncAction.SyncActionValue.ILabelAssociationAction} message LabelAssociationAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LabelAssociationAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a LabelAssociationAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.LabelAssociationAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.LabelAssociationAction} LabelAssociationAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LabelAssociationAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.LabelAssociationAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.labeled = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a LabelAssociationAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.LabelAssociationAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.LabelAssociationAction} LabelAssociationAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LabelAssociationAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a LabelAssociationAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.LabelAssociationAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
LabelAssociationAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.labeled != null && message.hasOwnProperty("labeled")) {
properties._labeled = 1;
if (typeof message.labeled !== "boolean")
return "labeled: boolean expected";
}
return null;
};
/**
* Creates a LabelAssociationAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.LabelAssociationAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.LabelAssociationAction} LabelAssociationAction
*/
LabelAssociationAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.LabelAssociationAction)
return object;
var message = new $root.SyncAction.SyncActionValue.LabelAssociationAction();
if (object.labeled != null)
message.labeled = Boolean(object.labeled);
return message;
};
/**
* Creates a plain object from a LabelAssociationAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.LabelAssociationAction
* @static
* @param {SyncAction.SyncActionValue.LabelAssociationAction} message LabelAssociationAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
LabelAssociationAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.labeled != null && message.hasOwnProperty("labeled")) {
object.labeled = message.labeled;
if (options.oneofs)
object._labeled = "labeled";
}
return object;
};
/**
* Converts this LabelAssociationAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.LabelAssociationAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
LabelAssociationAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for LabelAssociationAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.LabelAssociationAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
LabelAssociationAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.LabelAssociationAction";
};
return LabelAssociationAction;
})();
SyncActionValue.LabelEditAction = (function() {
/**
* Properties of a LabelEditAction.
* @memberof SyncAction.SyncActionValue
* @interface ILabelEditAction
* @property {string|null} [name] LabelEditAction name
* @property {number|null} [color] LabelEditAction color
* @property {number|null} [predefinedId] LabelEditAction predefinedId
* @property {boolean|null} [deleted] LabelEditAction deleted
* @property {number|null} [orderIndex] LabelEditAction orderIndex
* @property {boolean|null} [isActive] LabelEditAction isActive
* @property {SyncAction.SyncActionValue.LabelEditAction.ListType|null} [type] LabelEditAction type
* @property {boolean|null} [isImmutable] LabelEditAction isImmutable
*/
/**
* Constructs a new LabelEditAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a LabelEditAction.
* @implements ILabelEditAction
* @constructor
* @param {SyncAction.SyncActionValue.ILabelEditAction=} [properties] Properties to set
*/
function LabelEditAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* LabelEditAction name.
* @member {string|null|undefined} name
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
LabelEditAction.prototype.name = null;
/**
* LabelEditAction color.
* @member {number|null|undefined} color
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
LabelEditAction.prototype.color = null;
/**
* LabelEditAction predefinedId.
* @member {number|null|undefined} predefinedId
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
LabelEditAction.prototype.predefinedId = null;
/**
* LabelEditAction deleted.
* @member {boolean|null|undefined} deleted
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
LabelEditAction.prototype.deleted = null;
/**
* LabelEditAction orderIndex.
* @member {number|null|undefined} orderIndex
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
LabelEditAction.prototype.orderIndex = null;
/**
* LabelEditAction isActive.
* @member {boolean|null|undefined} isActive
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
LabelEditAction.prototype.isActive = null;
/**
* LabelEditAction type.
* @member {SyncAction.SyncActionValue.LabelEditAction.ListType|null|undefined} type
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
LabelEditAction.prototype.type = null;
/**
* LabelEditAction isImmutable.
* @member {boolean|null|undefined} isImmutable
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
LabelEditAction.prototype.isImmutable = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* LabelEditAction _name.
* @member {"name"|undefined} _name
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
Object.defineProperty(LabelEditAction.prototype, "_name", {
get: $util.oneOfGetter($oneOfFields = ["name"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* LabelEditAction _color.
* @member {"color"|undefined} _color
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
Object.defineProperty(LabelEditAction.prototype, "_color", {
get: $util.oneOfGetter($oneOfFields = ["color"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* LabelEditAction _predefinedId.
* @member {"predefinedId"|undefined} _predefinedId
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
Object.defineProperty(LabelEditAction.prototype, "_predefinedId", {
get: $util.oneOfGetter($oneOfFields = ["predefinedId"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* LabelEditAction _deleted.
* @member {"deleted"|undefined} _deleted
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
Object.defineProperty(LabelEditAction.prototype, "_deleted", {
get: $util.oneOfGetter($oneOfFields = ["deleted"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* LabelEditAction _orderIndex.
* @member {"orderIndex"|undefined} _orderIndex
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
Object.defineProperty(LabelEditAction.prototype, "_orderIndex", {
get: $util.oneOfGetter($oneOfFields = ["orderIndex"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* LabelEditAction _isActive.
* @member {"isActive"|undefined} _isActive
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
Object.defineProperty(LabelEditAction.prototype, "_isActive", {
get: $util.oneOfGetter($oneOfFields = ["isActive"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* LabelEditAction _type.
* @member {"type"|undefined} _type
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
Object.defineProperty(LabelEditAction.prototype, "_type", {
get: $util.oneOfGetter($oneOfFields = ["type"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* LabelEditAction _isImmutable.
* @member {"isImmutable"|undefined} _isImmutable
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
*/
Object.defineProperty(LabelEditAction.prototype, "_isImmutable", {
get: $util.oneOfGetter($oneOfFields = ["isImmutable"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new LabelEditAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @static
* @param {SyncAction.SyncActionValue.ILabelEditAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.LabelEditAction} LabelEditAction instance
*/
LabelEditAction.create = function create(properties) {
return new LabelEditAction(properties);
};
/**
* Encodes the specified LabelEditAction message. Does not implicitly {@link SyncAction.SyncActionValue.LabelEditAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @static
* @param {SyncAction.SyncActionValue.ILabelEditAction} message LabelEditAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LabelEditAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.name != null && Object.hasOwnProperty.call(message, "name"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
if (message.color != null && Object.hasOwnProperty.call(message, "color"))
writer.uint32(/* id 2, wireType 0 =*/16).int32(message.color);
if (message.predefinedId != null && Object.hasOwnProperty.call(message, "predefinedId"))
writer.uint32(/* id 3, wireType 0 =*/24).int32(message.predefinedId);
if (message.deleted != null && Object.hasOwnProperty.call(message, "deleted"))
writer.uint32(/* id 4, wireType 0 =*/32).bool(message.deleted);
if (message.orderIndex != null && Object.hasOwnProperty.call(message, "orderIndex"))
writer.uint32(/* id 5, wireType 0 =*/40).int32(message.orderIndex);
if (message.isActive != null && Object.hasOwnProperty.call(message, "isActive"))
writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isActive);
if (message.type != null && Object.hasOwnProperty.call(message, "type"))
writer.uint32(/* id 7, wireType 0 =*/56).int32(message.type);
if (message.isImmutable != null && Object.hasOwnProperty.call(message, "isImmutable"))
writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isImmutable);
return writer;
};
/**
* Encodes the specified LabelEditAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LabelEditAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @static
* @param {SyncAction.SyncActionValue.ILabelEditAction} message LabelEditAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LabelEditAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a LabelEditAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.LabelEditAction} LabelEditAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LabelEditAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.LabelEditAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.name = reader.string();
break;
}
case 2: {
message.color = reader.int32();
break;
}
case 3: {
message.predefinedId = reader.int32();
break;
}
case 4: {
message.deleted = reader.bool();
break;
}
case 5: {
message.orderIndex = reader.int32();
break;
}
case 6: {
message.isActive = reader.bool();
break;
}
case 7: {
message.type = reader.int32();
break;
}
case 8: {
message.isImmutable = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a LabelEditAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.LabelEditAction} LabelEditAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LabelEditAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a LabelEditAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
LabelEditAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.name != null && message.hasOwnProperty("name")) {
properties._name = 1;
if (!$util.isString(message.name))
return "name: string expected";
}
if (message.color != null && message.hasOwnProperty("color")) {
properties._color = 1;
if (!$util.isInteger(message.color))
return "color: integer expected";
}
if (message.predefinedId != null && message.hasOwnProperty("predefinedId")) {
properties._predefinedId = 1;
if (!$util.isInteger(message.predefinedId))
return "predefinedId: integer expected";
}
if (message.deleted != null && message.hasOwnProperty("deleted")) {
properties._deleted = 1;
if (typeof message.deleted !== "boolean")
return "deleted: boolean expected";
}
if (message.orderIndex != null && message.hasOwnProperty("orderIndex")) {
properties._orderIndex = 1;
if (!$util.isInteger(message.orderIndex))
return "orderIndex: integer expected";
}
if (message.isActive != null && message.hasOwnProperty("isActive")) {
properties._isActive = 1;
if (typeof message.isActive !== "boolean")
return "isActive: boolean expected";
}
if (message.type != null && message.hasOwnProperty("type")) {
properties._type = 1;
switch (message.type) {
default:
return "type: enum value expected";
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
break;
}
}
if (message.isImmutable != null && message.hasOwnProperty("isImmutable")) {
properties._isImmutable = 1;
if (typeof message.isImmutable !== "boolean")
return "isImmutable: boolean expected";
}
return null;
};
/**
* Creates a LabelEditAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.LabelEditAction} LabelEditAction
*/
LabelEditAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.LabelEditAction)
return object;
var message = new $root.SyncAction.SyncActionValue.LabelEditAction();
if (object.name != null)
message.name = String(object.name);
if (object.color != null)
message.color = object.color | 0;
if (object.predefinedId != null)
message.predefinedId = object.predefinedId | 0;
if (object.deleted != null)
message.deleted = Boolean(object.deleted);
if (object.orderIndex != null)
message.orderIndex = object.orderIndex | 0;
if (object.isActive != null)
message.isActive = Boolean(object.isActive);
switch (object.type) {
default:
if (typeof object.type === "number") {
message.type = object.type;
break;
}
break;
case "NONE":
case 0:
message.type = 0;
break;
case "UNREAD":
case 1:
message.type = 1;
break;
case "GROUPS":
case 2:
message.type = 2;
break;
case "FAVORITES":
case 3:
message.type = 3;
break;
case "PREDEFINED":
case 4:
message.type = 4;
break;
case "CUSTOM":
case 5:
message.type = 5;
break;
case "COMMUNITY":
case 6:
message.type = 6;
break;
case "SERVER_ASSIGNED":
case 7:
message.type = 7;
break;
}
if (object.isImmutable != null)
message.isImmutable = Boolean(object.isImmutable);
return message;
};
/**
* Creates a plain object from a LabelEditAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @static
* @param {SyncAction.SyncActionValue.LabelEditAction} message LabelEditAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
LabelEditAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.name != null && message.hasOwnProperty("name")) {
object.name = message.name;
if (options.oneofs)
object._name = "name";
}
if (message.color != null && message.hasOwnProperty("color")) {
object.color = message.color;
if (options.oneofs)
object._color = "color";
}
if (message.predefinedId != null && message.hasOwnProperty("predefinedId")) {
object.predefinedId = message.predefinedId;
if (options.oneofs)
object._predefinedId = "predefinedId";
}
if (message.deleted != null && message.hasOwnProperty("deleted")) {
object.deleted = message.deleted;
if (options.oneofs)
object._deleted = "deleted";
}
if (message.orderIndex != null && message.hasOwnProperty("orderIndex")) {
object.orderIndex = message.orderIndex;
if (options.oneofs)
object._orderIndex = "orderIndex";
}
if (message.isActive != null && message.hasOwnProperty("isActive")) {
object.isActive = message.isActive;
if (options.oneofs)
object._isActive = "isActive";
}
if (message.type != null && message.hasOwnProperty("type")) {
object.type = options.enums === String ? $root.SyncAction.SyncActionValue.LabelEditAction.ListType[message.type] === undefined ? message.type : $root.SyncAction.SyncActionValue.LabelEditAction.ListType[message.type] : message.type;
if (options.oneofs)
object._type = "type";
}
if (message.isImmutable != null && message.hasOwnProperty("isImmutable")) {
object.isImmutable = message.isImmutable;
if (options.oneofs)
object._isImmutable = "isImmutable";
}
return object;
};
/**
* Converts this LabelEditAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
LabelEditAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for LabelEditAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.LabelEditAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
LabelEditAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.LabelEditAction";
};
/**
* ListType enum.
* @name SyncAction.SyncActionValue.LabelEditAction.ListType
* @enum {number}
* @property {number} NONE=0 NONE value
* @property {number} UNREAD=1 UNREAD value
* @property {number} GROUPS=2 GROUPS value
* @property {number} FAVORITES=3 FAVORITES value
* @property {number} PREDEFINED=4 PREDEFINED value
* @property {number} CUSTOM=5 CUSTOM value
* @property {number} COMMUNITY=6 COMMUNITY value
* @property {number} SERVER_ASSIGNED=7 SERVER_ASSIGNED value
*/
LabelEditAction.ListType = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "NONE"] = 0;
values[valuesById[1] = "UNREAD"] = 1;
values[valuesById[2] = "GROUPS"] = 2;
values[valuesById[3] = "FAVORITES"] = 3;
values[valuesById[4] = "PREDEFINED"] = 4;
values[valuesById[5] = "CUSTOM"] = 5;
values[valuesById[6] = "COMMUNITY"] = 6;
values[valuesById[7] = "SERVER_ASSIGNED"] = 7;
return values;
})();
return LabelEditAction;
})();
SyncActionValue.LabelReorderingAction = (function() {
/**
* Properties of a LabelReorderingAction.
* @memberof SyncAction.SyncActionValue
* @interface ILabelReorderingAction
* @property {Array.<number>|null} [sortedLabelIds] LabelReorderingAction sortedLabelIds
*/
/**
* Constructs a new LabelReorderingAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a LabelReorderingAction.
* @implements ILabelReorderingAction
* @constructor
* @param {SyncAction.SyncActionValue.ILabelReorderingAction=} [properties] Properties to set
*/
function LabelReorderingAction(properties) {
this.sortedLabelIds = [];
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* LabelReorderingAction sortedLabelIds.
* @member {Array.<number>} sortedLabelIds
* @memberof SyncAction.SyncActionValue.LabelReorderingAction
* @instance
*/
LabelReorderingAction.prototype.sortedLabelIds = $util.emptyArray;
/**
* Creates a new LabelReorderingAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.LabelReorderingAction
* @static
* @param {SyncAction.SyncActionValue.ILabelReorderingAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.LabelReorderingAction} LabelReorderingAction instance
*/
LabelReorderingAction.create = function create(properties) {
return new LabelReorderingAction(properties);
};
/**
* Encodes the specified LabelReorderingAction message. Does not implicitly {@link SyncAction.SyncActionValue.LabelReorderingAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.LabelReorderingAction
* @static
* @param {SyncAction.SyncActionValue.ILabelReorderingAction} message LabelReorderingAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LabelReorderingAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.sortedLabelIds != null && message.sortedLabelIds.length) {
writer.uint32(/* id 1, wireType 2 =*/10).fork();
for (var i = 0; i < message.sortedLabelIds.length; ++i)
writer.int32(message.sortedLabelIds[i]);
writer.ldelim();
}
return writer;
};
/**
* Encodes the specified LabelReorderingAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LabelReorderingAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.LabelReorderingAction
* @static
* @param {SyncAction.SyncActionValue.ILabelReorderingAction} message LabelReorderingAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LabelReorderingAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a LabelReorderingAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.LabelReorderingAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.LabelReorderingAction} LabelReorderingAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LabelReorderingAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.LabelReorderingAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.sortedLabelIds && message.sortedLabelIds.length))
message.sortedLabelIds = [];
if ((tag & 7) === 2) {
var end2 = reader.uint32() + reader.pos;
while (reader.pos < end2)
message.sortedLabelIds.push(reader.int32());
} else
message.sortedLabelIds.push(reader.int32());
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a LabelReorderingAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.LabelReorderingAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.LabelReorderingAction} LabelReorderingAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LabelReorderingAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a LabelReorderingAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.LabelReorderingAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
LabelReorderingAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
if (message.sortedLabelIds != null && message.hasOwnProperty("sortedLabelIds")) {
if (!Array.isArray(message.sortedLabelIds))
return "sortedLabelIds: array expected";
for (var i = 0; i < message.sortedLabelIds.length; ++i)
if (!$util.isInteger(message.sortedLabelIds[i]))
return "sortedLabelIds: integer[] expected";
}
return null;
};
/**
* Creates a LabelReorderingAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.LabelReorderingAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.LabelReorderingAction} LabelReorderingAction
*/
LabelReorderingAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.LabelReorderingAction)
return object;
var message = new $root.SyncAction.SyncActionValue.LabelReorderingAction();
if (object.sortedLabelIds) {
if (!Array.isArray(object.sortedLabelIds))
throw TypeError(".SyncAction.SyncActionValue.LabelReorderingAction.sortedLabelIds: array expected");
message.sortedLabelIds = [];
for (var i = 0; i < object.sortedLabelIds.length; ++i)
message.sortedLabelIds[i] = object.sortedLabelIds[i] | 0;
}
return message;
};
/**
* Creates a plain object from a LabelReorderingAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.LabelReorderingAction
* @static
* @param {SyncAction.SyncActionValue.LabelReorderingAction} message LabelReorderingAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
LabelReorderingAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.arrays || options.defaults)
object.sortedLabelIds = [];
if (message.sortedLabelIds && message.sortedLabelIds.length) {
object.sortedLabelIds = [];
for (var j = 0; j < message.sortedLabelIds.length; ++j)
object.sortedLabelIds[j] = message.sortedLabelIds[j];
}
return object;
};
/**
* Converts this LabelReorderingAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.LabelReorderingAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
LabelReorderingAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for LabelReorderingAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.LabelReorderingAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
LabelReorderingAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.LabelReorderingAction";
};
return LabelReorderingAction;
})();
SyncActionValue.LidContactAction = (function() {
/**
* Properties of a LidContactAction.
* @memberof SyncAction.SyncActionValue
* @interface ILidContactAction
* @property {string|null} [fullName] LidContactAction fullName
* @property {string|null} [firstName] LidContactAction firstName
* @property {string|null} [username] LidContactAction username
* @property {boolean|null} [saveOnPrimaryAddressbook] LidContactAction saveOnPrimaryAddressbook
*/
/**
* Constructs a new LidContactAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a LidContactAction.
* @implements ILidContactAction
* @constructor
* @param {SyncAction.SyncActionValue.ILidContactAction=} [properties] Properties to set
*/
function LidContactAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* LidContactAction fullName.
* @member {string|null|undefined} fullName
* @memberof SyncAction.SyncActionValue.LidContactAction
* @instance
*/
LidContactAction.prototype.fullName = null;
/**
* LidContactAction firstName.
* @member {string|null|undefined} firstName
* @memberof SyncAction.SyncActionValue.LidContactAction
* @instance
*/
LidContactAction.prototype.firstName = null;
/**
* LidContactAction username.
* @member {string|null|undefined} username
* @memberof SyncAction.SyncActionValue.LidContactAction
* @instance
*/
LidContactAction.prototype.username = null;
/**
* LidContactAction saveOnPrimaryAddressbook.
* @member {boolean|null|undefined} saveOnPrimaryAddressbook
* @memberof SyncAction.SyncActionValue.LidContactAction
* @instance
*/
LidContactAction.prototype.saveOnPrimaryAddressbook = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* LidContactAction _fullName.
* @member {"fullName"|undefined} _fullName
* @memberof SyncAction.SyncActionValue.LidContactAction
* @instance
*/
Object.defineProperty(LidContactAction.prototype, "_fullName", {
get: $util.oneOfGetter($oneOfFields = ["fullName"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* LidContactAction _firstName.
* @member {"firstName"|undefined} _firstName
* @memberof SyncAction.SyncActionValue.LidContactAction
* @instance
*/
Object.defineProperty(LidContactAction.prototype, "_firstName", {
get: $util.oneOfGetter($oneOfFields = ["firstName"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* LidContactAction _username.
* @member {"username"|undefined} _username
* @memberof SyncAction.SyncActionValue.LidContactAction
* @instance
*/
Object.defineProperty(LidContactAction.prototype, "_username", {
get: $util.oneOfGetter($oneOfFields = ["username"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* LidContactAction _saveOnPrimaryAddressbook.
* @member {"saveOnPrimaryAddressbook"|undefined} _saveOnPrimaryAddressbook
* @memberof SyncAction.SyncActionValue.LidContactAction
* @instance
*/
Object.defineProperty(LidContactAction.prototype, "_saveOnPrimaryAddressbook", {
get: $util.oneOfGetter($oneOfFields = ["saveOnPrimaryAddressbook"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new LidContactAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.LidContactAction
* @static
* @param {SyncAction.SyncActionValue.ILidContactAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.LidContactAction} LidContactAction instance
*/
LidContactAction.create = function create(properties) {
return new LidContactAction(properties);
};
/**
* Encodes the specified LidContactAction message. Does not implicitly {@link SyncAction.SyncActionValue.LidContactAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.LidContactAction
* @static
* @param {SyncAction.SyncActionValue.ILidContactAction} message LidContactAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LidContactAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.fullName);
if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
writer.uint32(/* id 2, wireType 2 =*/18).string(message.firstName);
if (message.username != null && Object.hasOwnProperty.call(message, "username"))
writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
if (message.saveOnPrimaryAddressbook != null && Object.hasOwnProperty.call(message, "saveOnPrimaryAddressbook"))
writer.uint32(/* id 4, wireType 0 =*/32).bool(message.saveOnPrimaryAddressbook);
return writer;
};
/**
* Encodes the specified LidContactAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LidContactAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.LidContactAction
* @static
* @param {SyncAction.SyncActionValue.ILidContactAction} message LidContactAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LidContactAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a LidContactAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.LidContactAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.LidContactAction} LidContactAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LidContactAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.LidContactAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.fullName = reader.string();
break;
}
case 2: {
message.firstName = reader.string();
break;
}
case 3: {
message.username = reader.string();
break;
}
case 4: {
message.saveOnPrimaryAddressbook = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a LidContactAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.LidContactAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.LidContactAction} LidContactAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LidContactAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a LidContactAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.LidContactAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
LidContactAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.fullName != null && message.hasOwnProperty("fullName")) {
properties._fullName = 1;
if (!$util.isString(message.fullName))
return "fullName: string expected";
}
if (message.firstName != null && message.hasOwnProperty("firstName")) {
properties._firstName = 1;
if (!$util.isString(message.firstName))
return "firstName: string expected";
}
if (message.username != null && message.hasOwnProperty("username")) {
properties._username = 1;
if (!$util.isString(message.username))
return "username: string expected";
}
if (message.saveOnPrimaryAddressbook != null && message.hasOwnProperty("saveOnPrimaryAddressbook")) {
properties._saveOnPrimaryAddressbook = 1;
if (typeof message.saveOnPrimaryAddressbook !== "boolean")
return "saveOnPrimaryAddressbook: boolean expected";
}
return null;
};
/**
* Creates a LidContactAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.LidContactAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.LidContactAction} LidContactAction
*/
LidContactAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.LidContactAction)
return object;
var message = new $root.SyncAction.SyncActionValue.LidContactAction();
if (object.fullName != null)
message.fullName = String(object.fullName);
if (object.firstName != null)
message.firstName = String(object.firstName);
if (object.username != null)
message.username = String(object.username);
if (object.saveOnPrimaryAddressbook != null)
message.saveOnPrimaryAddressbook = Boolean(object.saveOnPrimaryAddressbook);
return message;
};
/**
* Creates a plain object from a LidContactAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.LidContactAction
* @static
* @param {SyncAction.SyncActionValue.LidContactAction} message LidContactAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
LidContactAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.fullName != null && message.hasOwnProperty("fullName")) {
object.fullName = message.fullName;
if (options.oneofs)
object._fullName = "fullName";
}
if (message.firstName != null && message.hasOwnProperty("firstName")) {
object.firstName = message.firstName;
if (options.oneofs)
object._firstName = "firstName";
}
if (message.username != null && message.hasOwnProperty("username")) {
object.username = message.username;
if (options.oneofs)
object._username = "username";
}
if (message.saveOnPrimaryAddressbook != null && message.hasOwnProperty("saveOnPrimaryAddressbook")) {
object.saveOnPrimaryAddressbook = message.saveOnPrimaryAddressbook;
if (options.oneofs)
object._saveOnPrimaryAddressbook = "saveOnPrimaryAddressbook";
}
return object;
};
/**
* Converts this LidContactAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.LidContactAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
LidContactAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for LidContactAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.LidContactAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
LidContactAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.LidContactAction";
};
return LidContactAction;
})();
SyncActionValue.LocaleSetting = (function() {
/**
* Properties of a LocaleSetting.
* @memberof SyncAction.SyncActionValue
* @interface ILocaleSetting
* @property {string|null} [locale] LocaleSetting locale
*/
/**
* Constructs a new LocaleSetting.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a LocaleSetting.
* @implements ILocaleSetting
* @constructor
* @param {SyncAction.SyncActionValue.ILocaleSetting=} [properties] Properties to set
*/
function LocaleSetting(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* LocaleSetting locale.
* @member {string|null|undefined} locale
* @memberof SyncAction.SyncActionValue.LocaleSetting
* @instance
*/
LocaleSetting.prototype.locale = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* LocaleSetting _locale.
* @member {"locale"|undefined} _locale
* @memberof SyncAction.SyncActionValue.LocaleSetting
* @instance
*/
Object.defineProperty(LocaleSetting.prototype, "_locale", {
get: $util.oneOfGetter($oneOfFields = ["locale"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new LocaleSetting instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.LocaleSetting
* @static
* @param {SyncAction.SyncActionValue.ILocaleSetting=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.LocaleSetting} LocaleSetting instance
*/
LocaleSetting.create = function create(properties) {
return new LocaleSetting(properties);
};
/**
* Encodes the specified LocaleSetting message. Does not implicitly {@link SyncAction.SyncActionValue.LocaleSetting.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.LocaleSetting
* @static
* @param {SyncAction.SyncActionValue.ILocaleSetting} message LocaleSetting message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LocaleSetting.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.locale != null && Object.hasOwnProperty.call(message, "locale"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.locale);
return writer;
};
/**
* Encodes the specified LocaleSetting message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LocaleSetting.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.LocaleSetting
* @static
* @param {SyncAction.SyncActionValue.ILocaleSetting} message LocaleSetting message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LocaleSetting.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a LocaleSetting message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.LocaleSetting
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.LocaleSetting} LocaleSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LocaleSetting.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.LocaleSetting();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.locale = reader.string();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a LocaleSetting message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.LocaleSetting
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.LocaleSetting} LocaleSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LocaleSetting.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a LocaleSetting message.
* @function verify
* @memberof SyncAction.SyncActionValue.LocaleSetting
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
LocaleSetting.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.locale != null && message.hasOwnProperty("locale")) {
properties._locale = 1;
if (!$util.isString(message.locale))
return "locale: string expected";
}
return null;
};
/**
* Creates a LocaleSetting message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.LocaleSetting
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.LocaleSetting} LocaleSetting
*/
LocaleSetting.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.LocaleSetting)
return object;
var message = new $root.SyncAction.SyncActionValue.LocaleSetting();
if (object.locale != null)
message.locale = String(object.locale);
return message;
};
/**
* Creates a plain object from a LocaleSetting message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.LocaleSetting
* @static
* @param {SyncAction.SyncActionValue.LocaleSetting} message LocaleSetting
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
LocaleSetting.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.locale != null && message.hasOwnProperty("locale")) {
object.locale = message.locale;
if (options.oneofs)
object._locale = "locale";
}
return object;
};
/**
* Converts this LocaleSetting to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.LocaleSetting
* @instance
* @returns {Object.<string,*>} JSON object
*/
LocaleSetting.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for LocaleSetting
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.LocaleSetting
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
LocaleSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.LocaleSetting";
};
return LocaleSetting;
})();
SyncActionValue.LockChatAction = (function() {
/**
* Properties of a LockChatAction.
* @memberof SyncAction.SyncActionValue
* @interface ILockChatAction
* @property {boolean|null} [locked] LockChatAction locked
*/
/**
* Constructs a new LockChatAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a LockChatAction.
* @implements ILockChatAction
* @constructor
* @param {SyncAction.SyncActionValue.ILockChatAction=} [properties] Properties to set
*/
function LockChatAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* LockChatAction locked.
* @member {boolean|null|undefined} locked
* @memberof SyncAction.SyncActionValue.LockChatAction
* @instance
*/
LockChatAction.prototype.locked = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* LockChatAction _locked.
* @member {"locked"|undefined} _locked
* @memberof SyncAction.SyncActionValue.LockChatAction
* @instance
*/
Object.defineProperty(LockChatAction.prototype, "_locked", {
get: $util.oneOfGetter($oneOfFields = ["locked"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new LockChatAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.LockChatAction
* @static
* @param {SyncAction.SyncActionValue.ILockChatAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.LockChatAction} LockChatAction instance
*/
LockChatAction.create = function create(properties) {
return new LockChatAction(properties);
};
/**
* Encodes the specified LockChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.LockChatAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.LockChatAction
* @static
* @param {SyncAction.SyncActionValue.ILockChatAction} message LockChatAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LockChatAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.locked != null && Object.hasOwnProperty.call(message, "locked"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.locked);
return writer;
};
/**
* Encodes the specified LockChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LockChatAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.LockChatAction
* @static
* @param {SyncAction.SyncActionValue.ILockChatAction} message LockChatAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LockChatAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a LockChatAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.LockChatAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.LockChatAction} LockChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LockChatAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.LockChatAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.locked = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a LockChatAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.LockChatAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.LockChatAction} LockChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LockChatAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a LockChatAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.LockChatAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
LockChatAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.locked != null && message.hasOwnProperty("locked")) {
properties._locked = 1;
if (typeof message.locked !== "boolean")
return "locked: boolean expected";
}
return null;
};
/**
* Creates a LockChatAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.LockChatAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.LockChatAction} LockChatAction
*/
LockChatAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.LockChatAction)
return object;
var message = new $root.SyncAction.SyncActionValue.LockChatAction();
if (object.locked != null)
message.locked = Boolean(object.locked);
return message;
};
/**
* Creates a plain object from a LockChatAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.LockChatAction
* @static
* @param {SyncAction.SyncActionValue.LockChatAction} message LockChatAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
LockChatAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.locked != null && message.hasOwnProperty("locked")) {
object.locked = message.locked;
if (options.oneofs)
object._locked = "locked";
}
return object;
};
/**
* Converts this LockChatAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.LockChatAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
LockChatAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for LockChatAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.LockChatAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
LockChatAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.LockChatAction";
};
return LockChatAction;
})();
SyncActionValue.MarkChatAsReadAction = (function() {
/**
* Properties of a MarkChatAsReadAction.
* @memberof SyncAction.SyncActionValue
* @interface IMarkChatAsReadAction
* @property {boolean|null} [read] MarkChatAsReadAction read
* @property {SyncAction.SyncActionValue.ISyncActionMessageRange|null} [messageRange] MarkChatAsReadAction messageRange
*/
/**
* Constructs a new MarkChatAsReadAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a MarkChatAsReadAction.
* @implements IMarkChatAsReadAction
* @constructor
* @param {SyncAction.SyncActionValue.IMarkChatAsReadAction=} [properties] Properties to set
*/
function MarkChatAsReadAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* MarkChatAsReadAction read.
* @member {boolean|null|undefined} read
* @memberof SyncAction.SyncActionValue.MarkChatAsReadAction
* @instance
*/
MarkChatAsReadAction.prototype.read = null;
/**
* MarkChatAsReadAction messageRange.
* @member {SyncAction.SyncActionValue.ISyncActionMessageRange|null|undefined} messageRange
* @memberof SyncAction.SyncActionValue.MarkChatAsReadAction
* @instance
*/
MarkChatAsReadAction.prototype.messageRange = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* MarkChatAsReadAction _read.
* @member {"read"|undefined} _read
* @memberof SyncAction.SyncActionValue.MarkChatAsReadAction
* @instance
*/
Object.defineProperty(MarkChatAsReadAction.prototype, "_read", {
get: $util.oneOfGetter($oneOfFields = ["read"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MarkChatAsReadAction _messageRange.
* @member {"messageRange"|undefined} _messageRange
* @memberof SyncAction.SyncActionValue.MarkChatAsReadAction
* @instance
*/
Object.defineProperty(MarkChatAsReadAction.prototype, "_messageRange", {
get: $util.oneOfGetter($oneOfFields = ["messageRange"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new MarkChatAsReadAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.MarkChatAsReadAction
* @static
* @param {SyncAction.SyncActionValue.IMarkChatAsReadAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.MarkChatAsReadAction} MarkChatAsReadAction instance
*/
MarkChatAsReadAction.create = function create(properties) {
return new MarkChatAsReadAction(properties);
};
/**
* Encodes the specified MarkChatAsReadAction message. Does not implicitly {@link SyncAction.SyncActionValue.MarkChatAsReadAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.MarkChatAsReadAction
* @static
* @param {SyncAction.SyncActionValue.IMarkChatAsReadAction} message MarkChatAsReadAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
MarkChatAsReadAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.read != null && Object.hasOwnProperty.call(message, "read"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.read);
if (message.messageRange != null && Object.hasOwnProperty.call(message, "messageRange"))
$root.SyncAction.SyncActionValue.SyncActionMessageRange.encode(message.messageRange, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
return writer;
};
/**
* Encodes the specified MarkChatAsReadAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MarkChatAsReadAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.MarkChatAsReadAction
* @static
* @param {SyncAction.SyncActionValue.IMarkChatAsReadAction} message MarkChatAsReadAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
MarkChatAsReadAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a MarkChatAsReadAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.MarkChatAsReadAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.MarkChatAsReadAction} MarkChatAsReadAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
MarkChatAsReadAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.MarkChatAsReadAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.read = reader.bool();
break;
}
case 2: {
message.messageRange = $root.SyncAction.SyncActionValue.SyncActionMessageRange.decode(reader, reader.uint32());
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a MarkChatAsReadAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.MarkChatAsReadAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.MarkChatAsReadAction} MarkChatAsReadAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
MarkChatAsReadAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a MarkChatAsReadAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.MarkChatAsReadAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
MarkChatAsReadAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.read != null && message.hasOwnProperty("read")) {
properties._read = 1;
if (typeof message.read !== "boolean")
return "read: boolean expected";
}
if (message.messageRange != null && message.hasOwnProperty("messageRange")) {
properties._messageRange = 1;
{
var error = $root.SyncAction.SyncActionValue.SyncActionMessageRange.verify(message.messageRange);
if (error)
return "messageRange." + error;
}
}
return null;
};
/**
* Creates a MarkChatAsReadAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.MarkChatAsReadAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.MarkChatAsReadAction} MarkChatAsReadAction
*/
MarkChatAsReadAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.MarkChatAsReadAction)
return object;
var message = new $root.SyncAction.SyncActionValue.MarkChatAsReadAction();
if (object.read != null)
message.read = Boolean(object.read);
if (object.messageRange != null) {
if (typeof object.messageRange !== "object")
throw TypeError(".SyncAction.SyncActionValue.MarkChatAsReadAction.messageRange: object expected");
message.messageRange = $root.SyncAction.SyncActionValue.SyncActionMessageRange.fromObject(object.messageRange);
}
return message;
};
/**
* Creates a plain object from a MarkChatAsReadAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.MarkChatAsReadAction
* @static
* @param {SyncAction.SyncActionValue.MarkChatAsReadAction} message MarkChatAsReadAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
MarkChatAsReadAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.read != null && message.hasOwnProperty("read")) {
object.read = message.read;
if (options.oneofs)
object._read = "read";
}
if (message.messageRange != null && message.hasOwnProperty("messageRange")) {
object.messageRange = $root.SyncAction.SyncActionValue.SyncActionMessageRange.toObject(message.messageRange, options);
if (options.oneofs)
object._messageRange = "messageRange";
}
return object;
};
/**
* Converts this MarkChatAsReadAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.MarkChatAsReadAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
MarkChatAsReadAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for MarkChatAsReadAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.MarkChatAsReadAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
MarkChatAsReadAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.MarkChatAsReadAction";
};
return MarkChatAsReadAction;
})();
SyncActionValue.MarketingMessageAction = (function() {
/**
* Properties of a MarketingMessageAction.
* @memberof SyncAction.SyncActionValue
* @interface IMarketingMessageAction
* @property {string|null} [name] MarketingMessageAction name
* @property {string|null} [message] MarketingMessageAction message
* @property {SyncAction.SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType|null} [type] MarketingMessageAction type
* @property {number|Long|null} [createdAt] MarketingMessageAction createdAt
* @property {number|Long|null} [lastSentAt] MarketingMessageAction lastSentAt
* @property {boolean|null} [isDeleted] MarketingMessageAction isDeleted
* @property {string|null} [mediaId] MarketingMessageAction mediaId
*/
/**
* Constructs a new MarketingMessageAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a MarketingMessageAction.
* @implements IMarketingMessageAction
* @constructor
* @param {SyncAction.SyncActionValue.IMarketingMessageAction=} [properties] Properties to set
*/
function MarketingMessageAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* MarketingMessageAction name.
* @member {string|null|undefined} name
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
*/
MarketingMessageAction.prototype.name = null;
/**
* MarketingMessageAction message.
* @member {string|null|undefined} message
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
*/
MarketingMessageAction.prototype.message = null;
/**
* MarketingMessageAction type.
* @member {SyncAction.SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType|null|undefined} type
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
*/
MarketingMessageAction.prototype.type = null;
/**
* MarketingMessageAction createdAt.
* @member {number|Long|null|undefined} createdAt
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
*/
MarketingMessageAction.prototype.createdAt = null;
/**
* MarketingMessageAction lastSentAt.
* @member {number|Long|null|undefined} lastSentAt
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
*/
MarketingMessageAction.prototype.lastSentAt = null;
/**
* MarketingMessageAction isDeleted.
* @member {boolean|null|undefined} isDeleted
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
*/
MarketingMessageAction.prototype.isDeleted = null;
/**
* MarketingMessageAction mediaId.
* @member {string|null|undefined} mediaId
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
*/
MarketingMessageAction.prototype.mediaId = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* MarketingMessageAction _name.
* @member {"name"|undefined} _name
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
*/
Object.defineProperty(MarketingMessageAction.prototype, "_name", {
get: $util.oneOfGetter($oneOfFields = ["name"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MarketingMessageAction _message.
* @member {"message"|undefined} _message
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
*/
Object.defineProperty(MarketingMessageAction.prototype, "_message", {
get: $util.oneOfGetter($oneOfFields = ["message"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MarketingMessageAction _type.
* @member {"type"|undefined} _type
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
*/
Object.defineProperty(MarketingMessageAction.prototype, "_type", {
get: $util.oneOfGetter($oneOfFields = ["type"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MarketingMessageAction _createdAt.
* @member {"createdAt"|undefined} _createdAt
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
*/
Object.defineProperty(MarketingMessageAction.prototype, "_createdAt", {
get: $util.oneOfGetter($oneOfFields = ["createdAt"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MarketingMessageAction _lastSentAt.
* @member {"lastSentAt"|undefined} _lastSentAt
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
*/
Object.defineProperty(MarketingMessageAction.prototype, "_lastSentAt", {
get: $util.oneOfGetter($oneOfFields = ["lastSentAt"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MarketingMessageAction _isDeleted.
* @member {"isDeleted"|undefined} _isDeleted
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
*/
Object.defineProperty(MarketingMessageAction.prototype, "_isDeleted", {
get: $util.oneOfGetter($oneOfFields = ["isDeleted"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MarketingMessageAction _mediaId.
* @member {"mediaId"|undefined} _mediaId
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
*/
Object.defineProperty(MarketingMessageAction.prototype, "_mediaId", {
get: $util.oneOfGetter($oneOfFields = ["mediaId"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new MarketingMessageAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @static
* @param {SyncAction.SyncActionValue.IMarketingMessageAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.MarketingMessageAction} MarketingMessageAction instance
*/
MarketingMessageAction.create = function create(properties) {
return new MarketingMessageAction(properties);
};
/**
* Encodes the specified MarketingMessageAction message. Does not implicitly {@link SyncAction.SyncActionValue.MarketingMessageAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @static
* @param {SyncAction.SyncActionValue.IMarketingMessageAction} message MarketingMessageAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
MarketingMessageAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.name != null && Object.hasOwnProperty.call(message, "name"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
if (message.message != null && Object.hasOwnProperty.call(message, "message"))
writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
if (message.type != null && Object.hasOwnProperty.call(message, "type"))
writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
writer.uint32(/* id 4, wireType 0 =*/32).int64(message.createdAt);
if (message.lastSentAt != null && Object.hasOwnProperty.call(message, "lastSentAt"))
writer.uint32(/* id 5, wireType 0 =*/40).int64(message.lastSentAt);
if (message.isDeleted != null && Object.hasOwnProperty.call(message, "isDeleted"))
writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isDeleted);
if (message.mediaId != null && Object.hasOwnProperty.call(message, "mediaId"))
writer.uint32(/* id 7, wireType 2 =*/58).string(message.mediaId);
return writer;
};
/**
* Encodes the specified MarketingMessageAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MarketingMessageAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @static
* @param {SyncAction.SyncActionValue.IMarketingMessageAction} message MarketingMessageAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
MarketingMessageAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a MarketingMessageAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.MarketingMessageAction} MarketingMessageAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
MarketingMessageAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.MarketingMessageAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.name = reader.string();
break;
}
case 2: {
message.message = reader.string();
break;
}
case 3: {
message.type = reader.int32();
break;
}
case 4: {
message.createdAt = reader.int64();
break;
}
case 5: {
message.lastSentAt = reader.int64();
break;
}
case 6: {
message.isDeleted = reader.bool();
break;
}
case 7: {
message.mediaId = reader.string();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a MarketingMessageAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.MarketingMessageAction} MarketingMessageAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
MarketingMessageAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a MarketingMessageAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
MarketingMessageAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.name != null && message.hasOwnProperty("name")) {
properties._name = 1;
if (!$util.isString(message.name))
return "name: string expected";
}
if (message.message != null && message.hasOwnProperty("message")) {
properties._message = 1;
if (!$util.isString(message.message))
return "message: string expected";
}
if (message.type != null && message.hasOwnProperty("type")) {
properties._type = 1;
switch (message.type) {
default:
return "type: enum value expected";
case 0:
break;
}
}
if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
properties._createdAt = 1;
if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
return "createdAt: integer|Long expected";
}
if (message.lastSentAt != null && message.hasOwnProperty("lastSentAt")) {
properties._lastSentAt = 1;
if (!$util.isInteger(message.lastSentAt) && !(message.lastSentAt && $util.isInteger(message.lastSentAt.low) && $util.isInteger(message.lastSentAt.high)))
return "lastSentAt: integer|Long expected";
}
if (message.isDeleted != null && message.hasOwnProperty("isDeleted")) {
properties._isDeleted = 1;
if (typeof message.isDeleted !== "boolean")
return "isDeleted: boolean expected";
}
if (message.mediaId != null && message.hasOwnProperty("mediaId")) {
properties._mediaId = 1;
if (!$util.isString(message.mediaId))
return "mediaId: string expected";
}
return null;
};
/**
* Creates a MarketingMessageAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.MarketingMessageAction} MarketingMessageAction
*/
MarketingMessageAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.MarketingMessageAction)
return object;
var message = new $root.SyncAction.SyncActionValue.MarketingMessageAction();
if (object.name != null)
message.name = String(object.name);
if (object.message != null)
message.message = String(object.message);
switch (object.type) {
default:
if (typeof object.type === "number") {
message.type = object.type;
break;
}
break;
case "PERSONALIZED":
case 0:
message.type = 0;
break;
}
if (object.createdAt != null)
if ($util.Long)
(message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
else if (typeof object.createdAt === "string")
message.createdAt = parseInt(object.createdAt, 10);
else if (typeof object.createdAt === "number")
message.createdAt = object.createdAt;
else if (typeof object.createdAt === "object")
message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
if (object.lastSentAt != null)
if ($util.Long)
(message.lastSentAt = $util.Long.fromValue(object.lastSentAt)).unsigned = false;
else if (typeof object.lastSentAt === "string")
message.lastSentAt = parseInt(object.lastSentAt, 10);
else if (typeof object.lastSentAt === "number")
message.lastSentAt = object.lastSentAt;
else if (typeof object.lastSentAt === "object")
message.lastSentAt = new $util.LongBits(object.lastSentAt.low >>> 0, object.lastSentAt.high >>> 0).toNumber();
if (object.isDeleted != null)
message.isDeleted = Boolean(object.isDeleted);
if (object.mediaId != null)
message.mediaId = String(object.mediaId);
return message;
};
/**
* Creates a plain object from a MarketingMessageAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @static
* @param {SyncAction.SyncActionValue.MarketingMessageAction} message MarketingMessageAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
MarketingMessageAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.name != null && message.hasOwnProperty("name")) {
object.name = message.name;
if (options.oneofs)
object._name = "name";
}
if (message.message != null && message.hasOwnProperty("message")) {
object.message = message.message;
if (options.oneofs)
object._message = "message";
}
if (message.type != null && message.hasOwnProperty("type")) {
object.type = options.enums === String ? $root.SyncAction.SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType[message.type] === undefined ? message.type : $root.SyncAction.SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType[message.type] : message.type;
if (options.oneofs)
object._type = "type";
}
if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
if (typeof message.createdAt === "number")
object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
else
object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
if (options.oneofs)
object._createdAt = "createdAt";
}
if (message.lastSentAt != null && message.hasOwnProperty("lastSentAt")) {
if (typeof message.lastSentAt === "number")
object.lastSentAt = options.longs === String ? String(message.lastSentAt) : message.lastSentAt;
else
object.lastSentAt = options.longs === String ? $util.Long.prototype.toString.call(message.lastSentAt) : options.longs === Number ? new $util.LongBits(message.lastSentAt.low >>> 0, message.lastSentAt.high >>> 0).toNumber() : message.lastSentAt;
if (options.oneofs)
object._lastSentAt = "lastSentAt";
}
if (message.isDeleted != null && message.hasOwnProperty("isDeleted")) {
object.isDeleted = message.isDeleted;
if (options.oneofs)
object._isDeleted = "isDeleted";
}
if (message.mediaId != null && message.hasOwnProperty("mediaId")) {
object.mediaId = message.mediaId;
if (options.oneofs)
object._mediaId = "mediaId";
}
return object;
};
/**
* Converts this MarketingMessageAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
MarketingMessageAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for MarketingMessageAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.MarketingMessageAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
MarketingMessageAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.MarketingMessageAction";
};
/**
* MarketingMessagePrototypeType enum.
* @name SyncAction.SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType
* @enum {number}
* @property {number} PERSONALIZED=0 PERSONALIZED value
*/
MarketingMessageAction.MarketingMessagePrototypeType = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "PERSONALIZED"] = 0;
return values;
})();
return MarketingMessageAction;
})();
SyncActionValue.MarketingMessageBroadcastAction = (function() {
/**
* Properties of a MarketingMessageBroadcastAction.
* @memberof SyncAction.SyncActionValue
* @interface IMarketingMessageBroadcastAction
* @property {number|null} [repliedCount] MarketingMessageBroadcastAction repliedCount
*/
/**
* Constructs a new MarketingMessageBroadcastAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a MarketingMessageBroadcastAction.
* @implements IMarketingMessageBroadcastAction
* @constructor
* @param {SyncAction.SyncActionValue.IMarketingMessageBroadcastAction=} [properties] Properties to set
*/
function MarketingMessageBroadcastAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* MarketingMessageBroadcastAction repliedCount.
* @member {number|null|undefined} repliedCount
* @memberof SyncAction.SyncActionValue.MarketingMessageBroadcastAction
* @instance
*/
MarketingMessageBroadcastAction.prototype.repliedCount = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* MarketingMessageBroadcastAction _repliedCount.
* @member {"repliedCount"|undefined} _repliedCount
* @memberof SyncAction.SyncActionValue.MarketingMessageBroadcastAction
* @instance
*/
Object.defineProperty(MarketingMessageBroadcastAction.prototype, "_repliedCount", {
get: $util.oneOfGetter($oneOfFields = ["repliedCount"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new MarketingMessageBroadcastAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.MarketingMessageBroadcastAction
* @static
* @param {SyncAction.SyncActionValue.IMarketingMessageBroadcastAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.MarketingMessageBroadcastAction} MarketingMessageBroadcastAction instance
*/
MarketingMessageBroadcastAction.create = function create(properties) {
return new MarketingMessageBroadcastAction(properties);
};
/**
* Encodes the specified MarketingMessageBroadcastAction message. Does not implicitly {@link SyncAction.SyncActionValue.MarketingMessageBroadcastAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.MarketingMessageBroadcastAction
* @static
* @param {SyncAction.SyncActionValue.IMarketingMessageBroadcastAction} message MarketingMessageBroadcastAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
MarketingMessageBroadcastAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.repliedCount != null && Object.hasOwnProperty.call(message, "repliedCount"))
writer.uint32(/* id 1, wireType 0 =*/8).int32(message.repliedCount);
return writer;
};
/**
* Encodes the specified MarketingMessageBroadcastAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MarketingMessageBroadcastAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.MarketingMessageBroadcastAction
* @static
* @param {SyncAction.SyncActionValue.IMarketingMessageBroadcastAction} message MarketingMessageBroadcastAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
MarketingMessageBroadcastAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a MarketingMessageBroadcastAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.MarketingMessageBroadcastAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.MarketingMessageBroadcastAction} MarketingMessageBroadcastAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
MarketingMessageBroadcastAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.MarketingMessageBroadcastAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.repliedCount = reader.int32();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a MarketingMessageBroadcastAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.MarketingMessageBroadcastAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.MarketingMessageBroadcastAction} MarketingMessageBroadcastAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
MarketingMessageBroadcastAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a MarketingMessageBroadcastAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.MarketingMessageBroadcastAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
MarketingMessageBroadcastAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.repliedCount != null && message.hasOwnProperty("repliedCount")) {
properties._repliedCount = 1;
if (!$util.isInteger(message.repliedCount))
return "repliedCount: integer expected";
}
return null;
};
/**
* Creates a MarketingMessageBroadcastAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.MarketingMessageBroadcastAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.MarketingMessageBroadcastAction} MarketingMessageBroadcastAction
*/
MarketingMessageBroadcastAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.MarketingMessageBroadcastAction)
return object;
var message = new $root.SyncAction.SyncActionValue.MarketingMessageBroadcastAction();
if (object.repliedCount != null)
message.repliedCount = object.repliedCount | 0;
return message;
};
/**
* Creates a plain object from a MarketingMessageBroadcastAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.MarketingMessageBroadcastAction
* @static
* @param {SyncAction.SyncActionValue.MarketingMessageBroadcastAction} message MarketingMessageBroadcastAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
MarketingMessageBroadcastAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.repliedCount != null && message.hasOwnProperty("repliedCount")) {
object.repliedCount = message.repliedCount;
if (options.oneofs)
object._repliedCount = "repliedCount";
}
return object;
};
/**
* Converts this MarketingMessageBroadcastAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.MarketingMessageBroadcastAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
MarketingMessageBroadcastAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for MarketingMessageBroadcastAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.MarketingMessageBroadcastAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
MarketingMessageBroadcastAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.MarketingMessageBroadcastAction";
};
return MarketingMessageBroadcastAction;
})();
SyncActionValue.MerchantPaymentPartnerAction = (function() {
/**
* Properties of a MerchantPaymentPartnerAction.
* @memberof SyncAction.SyncActionValue
* @interface IMerchantPaymentPartnerAction
* @property {SyncAction.SyncActionValue.MerchantPaymentPartnerAction.Status|null} [status] MerchantPaymentPartnerAction status
* @property {string|null} [country] MerchantPaymentPartnerAction country
* @property {string|null} [gatewayName] MerchantPaymentPartnerAction gatewayName
* @property {string|null} [credentialId] MerchantPaymentPartnerAction credentialId
*/
/**
* Constructs a new MerchantPaymentPartnerAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a MerchantPaymentPartnerAction.
* @implements IMerchantPaymentPartnerAction
* @constructor
* @param {SyncAction.SyncActionValue.IMerchantPaymentPartnerAction=} [properties] Properties to set
*/
function MerchantPaymentPartnerAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* MerchantPaymentPartnerAction status.
* @member {SyncAction.SyncActionValue.MerchantPaymentPartnerAction.Status|null|undefined} status
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @instance
*/
MerchantPaymentPartnerAction.prototype.status = null;
/**
* MerchantPaymentPartnerAction country.
* @member {string|null|undefined} country
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @instance
*/
MerchantPaymentPartnerAction.prototype.country = null;
/**
* MerchantPaymentPartnerAction gatewayName.
* @member {string|null|undefined} gatewayName
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @instance
*/
MerchantPaymentPartnerAction.prototype.gatewayName = null;
/**
* MerchantPaymentPartnerAction credentialId.
* @member {string|null|undefined} credentialId
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @instance
*/
MerchantPaymentPartnerAction.prototype.credentialId = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* MerchantPaymentPartnerAction _status.
* @member {"status"|undefined} _status
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @instance
*/
Object.defineProperty(MerchantPaymentPartnerAction.prototype, "_status", {
get: $util.oneOfGetter($oneOfFields = ["status"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MerchantPaymentPartnerAction _country.
* @member {"country"|undefined} _country
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @instance
*/
Object.defineProperty(MerchantPaymentPartnerAction.prototype, "_country", {
get: $util.oneOfGetter($oneOfFields = ["country"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MerchantPaymentPartnerAction _gatewayName.
* @member {"gatewayName"|undefined} _gatewayName
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @instance
*/
Object.defineProperty(MerchantPaymentPartnerAction.prototype, "_gatewayName", {
get: $util.oneOfGetter($oneOfFields = ["gatewayName"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MerchantPaymentPartnerAction _credentialId.
* @member {"credentialId"|undefined} _credentialId
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @instance
*/
Object.defineProperty(MerchantPaymentPartnerAction.prototype, "_credentialId", {
get: $util.oneOfGetter($oneOfFields = ["credentialId"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new MerchantPaymentPartnerAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @static
* @param {SyncAction.SyncActionValue.IMerchantPaymentPartnerAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.MerchantPaymentPartnerAction} MerchantPaymentPartnerAction instance
*/
MerchantPaymentPartnerAction.create = function create(properties) {
return new MerchantPaymentPartnerAction(properties);
};
/**
* Encodes the specified MerchantPaymentPartnerAction message. Does not implicitly {@link SyncAction.SyncActionValue.MerchantPaymentPartnerAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @static
* @param {SyncAction.SyncActionValue.IMerchantPaymentPartnerAction} message MerchantPaymentPartnerAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
MerchantPaymentPartnerAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.status != null && Object.hasOwnProperty.call(message, "status"))
writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
if (message.country != null && Object.hasOwnProperty.call(message, "country"))
writer.uint32(/* id 2, wireType 2 =*/18).string(message.country);
if (message.gatewayName != null && Object.hasOwnProperty.call(message, "gatewayName"))
writer.uint32(/* id 3, wireType 2 =*/26).string(message.gatewayName);
if (message.credentialId != null && Object.hasOwnProperty.call(message, "credentialId"))
writer.uint32(/* id 4, wireType 2 =*/34).string(message.credentialId);
return writer;
};
/**
* Encodes the specified MerchantPaymentPartnerAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MerchantPaymentPartnerAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @static
* @param {SyncAction.SyncActionValue.IMerchantPaymentPartnerAction} message MerchantPaymentPartnerAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
MerchantPaymentPartnerAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a MerchantPaymentPartnerAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.MerchantPaymentPartnerAction} MerchantPaymentPartnerAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
MerchantPaymentPartnerAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.MerchantPaymentPartnerAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.status = reader.int32();
break;
}
case 2: {
message.country = reader.string();
break;
}
case 3: {
message.gatewayName = reader.string();
break;
}
case 4: {
message.credentialId = reader.string();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a MerchantPaymentPartnerAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.MerchantPaymentPartnerAction} MerchantPaymentPartnerAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
MerchantPaymentPartnerAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a MerchantPaymentPartnerAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
MerchantPaymentPartnerAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.status != null && message.hasOwnProperty("status")) {
properties._status = 1;
switch (message.status) {
default:
return "status: enum value expected";
case 0:
case 1:
break;
}
}
if (message.country != null && message.hasOwnProperty("country")) {
properties._country = 1;
if (!$util.isString(message.country))
return "country: string expected";
}
if (message.gatewayName != null && message.hasOwnProperty("gatewayName")) {
properties._gatewayName = 1;
if (!$util.isString(message.gatewayName))
return "gatewayName: string expected";
}
if (message.credentialId != null && message.hasOwnProperty("credentialId")) {
properties._credentialId = 1;
if (!$util.isString(message.credentialId))
return "credentialId: string expected";
}
return null;
};
/**
* Creates a MerchantPaymentPartnerAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.MerchantPaymentPartnerAction} MerchantPaymentPartnerAction
*/
MerchantPaymentPartnerAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.MerchantPaymentPartnerAction)
return object;
var message = new $root.SyncAction.SyncActionValue.MerchantPaymentPartnerAction();
switch (object.status) {
default:
if (typeof object.status === "number") {
message.status = object.status;
break;
}
break;
case "ACTIVE":
case 0:
message.status = 0;
break;
case "INACTIVE":
case 1:
message.status = 1;
break;
}
if (object.country != null)
message.country = String(object.country);
if (object.gatewayName != null)
message.gatewayName = String(object.gatewayName);
if (object.credentialId != null)
message.credentialId = String(object.credentialId);
return message;
};
/**
* Creates a plain object from a MerchantPaymentPartnerAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @static
* @param {SyncAction.SyncActionValue.MerchantPaymentPartnerAction} message MerchantPaymentPartnerAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
MerchantPaymentPartnerAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.status != null && message.hasOwnProperty("status")) {
object.status = options.enums === String ? $root.SyncAction.SyncActionValue.MerchantPaymentPartnerAction.Status[message.status] === undefined ? message.status : $root.SyncAction.SyncActionValue.MerchantPaymentPartnerAction.Status[message.status] : message.status;
if (options.oneofs)
object._status = "status";
}
if (message.country != null && message.hasOwnProperty("country")) {
object.country = message.country;
if (options.oneofs)
object._country = "country";
}
if (message.gatewayName != null && message.hasOwnProperty("gatewayName")) {
object.gatewayName = message.gatewayName;
if (options.oneofs)
object._gatewayName = "gatewayName";
}
if (message.credentialId != null && message.hasOwnProperty("credentialId")) {
object.credentialId = message.credentialId;
if (options.oneofs)
object._credentialId = "credentialId";
}
return object;
};
/**
* Converts this MerchantPaymentPartnerAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
MerchantPaymentPartnerAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for MerchantPaymentPartnerAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.MerchantPaymentPartnerAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
MerchantPaymentPartnerAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.MerchantPaymentPartnerAction";
};
/**
* Status enum.
* @name SyncAction.SyncActionValue.MerchantPaymentPartnerAction.Status
* @enum {number}
* @property {number} ACTIVE=0 ACTIVE value
* @property {number} INACTIVE=1 INACTIVE value
*/
MerchantPaymentPartnerAction.Status = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "ACTIVE"] = 0;
values[valuesById[1] = "INACTIVE"] = 1;
return values;
})();
return MerchantPaymentPartnerAction;
})();
SyncActionValue.MuteAction = (function() {
/**
* Properties of a MuteAction.
* @memberof SyncAction.SyncActionValue
* @interface IMuteAction
* @property {boolean|null} [muted] MuteAction muted
* @property {number|Long|null} [muteEndTimestamp] MuteAction muteEndTimestamp
* @property {boolean|null} [autoMuted] MuteAction autoMuted
*/
/**
* Constructs a new MuteAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a MuteAction.
* @implements IMuteAction
* @constructor
* @param {SyncAction.SyncActionValue.IMuteAction=} [properties] Properties to set
*/
function MuteAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* MuteAction muted.
* @member {boolean|null|undefined} muted
* @memberof SyncAction.SyncActionValue.MuteAction
* @instance
*/
MuteAction.prototype.muted = null;
/**
* MuteAction muteEndTimestamp.
* @member {number|Long|null|undefined} muteEndTimestamp
* @memberof SyncAction.SyncActionValue.MuteAction
* @instance
*/
MuteAction.prototype.muteEndTimestamp = null;
/**
* MuteAction autoMuted.
* @member {boolean|null|undefined} autoMuted
* @memberof SyncAction.SyncActionValue.MuteAction
* @instance
*/
MuteAction.prototype.autoMuted = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* MuteAction _muted.
* @member {"muted"|undefined} _muted
* @memberof SyncAction.SyncActionValue.MuteAction
* @instance
*/
Object.defineProperty(MuteAction.prototype, "_muted", {
get: $util.oneOfGetter($oneOfFields = ["muted"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MuteAction _muteEndTimestamp.
* @member {"muteEndTimestamp"|undefined} _muteEndTimestamp
* @memberof SyncAction.SyncActionValue.MuteAction
* @instance
*/
Object.defineProperty(MuteAction.prototype, "_muteEndTimestamp", {
get: $util.oneOfGetter($oneOfFields = ["muteEndTimestamp"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MuteAction _autoMuted.
* @member {"autoMuted"|undefined} _autoMuted
* @memberof SyncAction.SyncActionValue.MuteAction
* @instance
*/
Object.defineProperty(MuteAction.prototype, "_autoMuted", {
get: $util.oneOfGetter($oneOfFields = ["autoMuted"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new MuteAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.MuteAction
* @static
* @param {SyncAction.SyncActionValue.IMuteAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.MuteAction} MuteAction instance
*/
MuteAction.create = function create(properties) {
return new MuteAction(properties);
};
/**
* Encodes the specified MuteAction message. Does not implicitly {@link SyncAction.SyncActionValue.MuteAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.MuteAction
* @static
* @param {SyncAction.SyncActionValue.IMuteAction} message MuteAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
MuteAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.muted != null && Object.hasOwnProperty.call(message, "muted"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.muted);
if (message.muteEndTimestamp != null && Object.hasOwnProperty.call(message, "muteEndTimestamp"))
writer.uint32(/* id 2, wireType 0 =*/16).int64(message.muteEndTimestamp);
if (message.autoMuted != null && Object.hasOwnProperty.call(message, "autoMuted"))
writer.uint32(/* id 3, wireType 0 =*/24).bool(message.autoMuted);
return writer;
};
/**
* Encodes the specified MuteAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MuteAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.MuteAction
* @static
* @param {SyncAction.SyncActionValue.IMuteAction} message MuteAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
MuteAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a MuteAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.MuteAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.MuteAction} MuteAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
MuteAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.MuteAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.muted = reader.bool();
break;
}
case 2: {
message.muteEndTimestamp = reader.int64();
break;
}
case 3: {
message.autoMuted = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a MuteAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.MuteAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.MuteAction} MuteAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
MuteAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a MuteAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.MuteAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
MuteAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.muted != null && message.hasOwnProperty("muted")) {
properties._muted = 1;
if (typeof message.muted !== "boolean")
return "muted: boolean expected";
}
if (message.muteEndTimestamp != null && message.hasOwnProperty("muteEndTimestamp")) {
properties._muteEndTimestamp = 1;
if (!$util.isInteger(message.muteEndTimestamp) && !(message.muteEndTimestamp && $util.isInteger(message.muteEndTimestamp.low) && $util.isInteger(message.muteEndTimestamp.high)))
return "muteEndTimestamp: integer|Long expected";
}
if (message.autoMuted != null && message.hasOwnProperty("autoMuted")) {
properties._autoMuted = 1;
if (typeof message.autoMuted !== "boolean")
return "autoMuted: boolean expected";
}
return null;
};
/**
* Creates a MuteAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.MuteAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.MuteAction} MuteAction
*/
MuteAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.MuteAction)
return object;
var message = new $root.SyncAction.SyncActionValue.MuteAction();
if (object.muted != null)
message.muted = Boolean(object.muted);
if (object.muteEndTimestamp != null)
if ($util.Long)
(message.muteEndTimestamp = $util.Long.fromValue(object.muteEndTimestamp)).unsigned = false;
else if (typeof object.muteEndTimestamp === "string")
message.muteEndTimestamp = parseInt(object.muteEndTimestamp, 10);
else if (typeof object.muteEndTimestamp === "number")
message.muteEndTimestamp = object.muteEndTimestamp;
else if (typeof object.muteEndTimestamp === "object")
message.muteEndTimestamp = new $util.LongBits(object.muteEndTimestamp.low >>> 0, object.muteEndTimestamp.high >>> 0).toNumber();
if (object.autoMuted != null)
message.autoMuted = Boolean(object.autoMuted);
return message;
};
/**
* Creates a plain object from a MuteAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.MuteAction
* @static
* @param {SyncAction.SyncActionValue.MuteAction} message MuteAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
MuteAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.muted != null && message.hasOwnProperty("muted")) {
object.muted = message.muted;
if (options.oneofs)
object._muted = "muted";
}
if (message.muteEndTimestamp != null && message.hasOwnProperty("muteEndTimestamp")) {
if (typeof message.muteEndTimestamp === "number")
object.muteEndTimestamp = options.longs === String ? String(message.muteEndTimestamp) : message.muteEndTimestamp;
else
object.muteEndTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.muteEndTimestamp) : options.longs === Number ? new $util.LongBits(message.muteEndTimestamp.low >>> 0, message.muteEndTimestamp.high >>> 0).toNumber() : message.muteEndTimestamp;
if (options.oneofs)
object._muteEndTimestamp = "muteEndTimestamp";
}
if (message.autoMuted != null && message.hasOwnProperty("autoMuted")) {
object.autoMuted = message.autoMuted;
if (options.oneofs)
object._autoMuted = "autoMuted";
}
return object;
};
/**
* Converts this MuteAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.MuteAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
MuteAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for MuteAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.MuteAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
MuteAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.MuteAction";
};
return MuteAction;
})();
SyncActionValue.NoteEditAction = (function() {
/**
* Properties of a NoteEditAction.
* @memberof SyncAction.SyncActionValue
* @interface INoteEditAction
* @property {SyncAction.SyncActionValue.NoteEditAction.NoteType|null} [type] NoteEditAction type
* @property {string|null} [chatJid] NoteEditAction chatJid
* @property {number|Long|null} [createdAt] NoteEditAction createdAt
* @property {boolean|null} [deleted] NoteEditAction deleted
* @property {string|null} [unstructuredContent] NoteEditAction unstructuredContent
*/
/**
* Constructs a new NoteEditAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a NoteEditAction.
* @implements INoteEditAction
* @constructor
* @param {SyncAction.SyncActionValue.INoteEditAction=} [properties] Properties to set
*/
function NoteEditAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* NoteEditAction type.
* @member {SyncAction.SyncActionValue.NoteEditAction.NoteType|null|undefined} type
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @instance
*/
NoteEditAction.prototype.type = null;
/**
* NoteEditAction chatJid.
* @member {string|null|undefined} chatJid
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @instance
*/
NoteEditAction.prototype.chatJid = null;
/**
* NoteEditAction createdAt.
* @member {number|Long|null|undefined} createdAt
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @instance
*/
NoteEditAction.prototype.createdAt = null;
/**
* NoteEditAction deleted.
* @member {boolean|null|undefined} deleted
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @instance
*/
NoteEditAction.prototype.deleted = null;
/**
* NoteEditAction unstructuredContent.
* @member {string|null|undefined} unstructuredContent
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @instance
*/
NoteEditAction.prototype.unstructuredContent = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* NoteEditAction _type.
* @member {"type"|undefined} _type
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @instance
*/
Object.defineProperty(NoteEditAction.prototype, "_type", {
get: $util.oneOfGetter($oneOfFields = ["type"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* NoteEditAction _chatJid.
* @member {"chatJid"|undefined} _chatJid
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @instance
*/
Object.defineProperty(NoteEditAction.prototype, "_chatJid", {
get: $util.oneOfGetter($oneOfFields = ["chatJid"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* NoteEditAction _createdAt.
* @member {"createdAt"|undefined} _createdAt
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @instance
*/
Object.defineProperty(NoteEditAction.prototype, "_createdAt", {
get: $util.oneOfGetter($oneOfFields = ["createdAt"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* NoteEditAction _deleted.
* @member {"deleted"|undefined} _deleted
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @instance
*/
Object.defineProperty(NoteEditAction.prototype, "_deleted", {
get: $util.oneOfGetter($oneOfFields = ["deleted"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* NoteEditAction _unstructuredContent.
* @member {"unstructuredContent"|undefined} _unstructuredContent
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @instance
*/
Object.defineProperty(NoteEditAction.prototype, "_unstructuredContent", {
get: $util.oneOfGetter($oneOfFields = ["unstructuredContent"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new NoteEditAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @static
* @param {SyncAction.SyncActionValue.INoteEditAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.NoteEditAction} NoteEditAction instance
*/
NoteEditAction.create = function create(properties) {
return new NoteEditAction(properties);
};
/**
* Encodes the specified NoteEditAction message. Does not implicitly {@link SyncAction.SyncActionValue.NoteEditAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @static
* @param {SyncAction.SyncActionValue.INoteEditAction} message NoteEditAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
NoteEditAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.type != null && Object.hasOwnProperty.call(message, "type"))
writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
if (message.chatJid != null && Object.hasOwnProperty.call(message, "chatJid"))
writer.uint32(/* id 2, wireType 2 =*/18).string(message.chatJid);
if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
writer.uint32(/* id 3, wireType 0 =*/24).int64(message.createdAt);
if (message.deleted != null && Object.hasOwnProperty.call(message, "deleted"))
writer.uint32(/* id 4, wireType 0 =*/32).bool(message.deleted);
if (message.unstructuredContent != null && Object.hasOwnProperty.call(message, "unstructuredContent"))
writer.uint32(/* id 5, wireType 2 =*/42).string(message.unstructuredContent);
return writer;
};
/**
* Encodes the specified NoteEditAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.NoteEditAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @static
* @param {SyncAction.SyncActionValue.INoteEditAction} message NoteEditAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
NoteEditAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a NoteEditAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.NoteEditAction} NoteEditAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
NoteEditAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.NoteEditAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.type = reader.int32();
break;
}
case 2: {
message.chatJid = reader.string();
break;
}
case 3: {
message.createdAt = reader.int64();
break;
}
case 4: {
message.deleted = reader.bool();
break;
}
case 5: {
message.unstructuredContent = reader.string();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a NoteEditAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.NoteEditAction} NoteEditAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
NoteEditAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a NoteEditAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
NoteEditAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.type != null && message.hasOwnProperty("type")) {
properties._type = 1;
switch (message.type) {
default:
return "type: enum value expected";
case 1:
case 2:
break;
}
}
if (message.chatJid != null && message.hasOwnProperty("chatJid")) {
properties._chatJid = 1;
if (!$util.isString(message.chatJid))
return "chatJid: string expected";
}
if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
properties._createdAt = 1;
if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
return "createdAt: integer|Long expected";
}
if (message.deleted != null && message.hasOwnProperty("deleted")) {
properties._deleted = 1;
if (typeof message.deleted !== "boolean")
return "deleted: boolean expected";
}
if (message.unstructuredContent != null && message.hasOwnProperty("unstructuredContent")) {
properties._unstructuredContent = 1;
if (!$util.isString(message.unstructuredContent))
return "unstructuredContent: string expected";
}
return null;
};
/**
* Creates a NoteEditAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.NoteEditAction} NoteEditAction
*/
NoteEditAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.NoteEditAction)
return object;
var message = new $root.SyncAction.SyncActionValue.NoteEditAction();
switch (object.type) {
default:
if (typeof object.type === "number") {
message.type = object.type;
break;
}
break;
case "UNSTRUCTURED":
case 1:
message.type = 1;
break;
case "STRUCTURED":
case 2:
message.type = 2;
break;
}
if (object.chatJid != null)
message.chatJid = String(object.chatJid);
if (object.createdAt != null)
if ($util.Long)
(message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
else if (typeof object.createdAt === "string")
message.createdAt = parseInt(object.createdAt, 10);
else if (typeof object.createdAt === "number")
message.createdAt = object.createdAt;
else if (typeof object.createdAt === "object")
message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
if (object.deleted != null)
message.deleted = Boolean(object.deleted);
if (object.unstructuredContent != null)
message.unstructuredContent = String(object.unstructuredContent);
return message;
};
/**
* Creates a plain object from a NoteEditAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @static
* @param {SyncAction.SyncActionValue.NoteEditAction} message NoteEditAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
NoteEditAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.type != null && message.hasOwnProperty("type")) {
object.type = options.enums === String ? $root.SyncAction.SyncActionValue.NoteEditAction.NoteType[message.type] === undefined ? message.type : $root.SyncAction.SyncActionValue.NoteEditAction.NoteType[message.type] : message.type;
if (options.oneofs)
object._type = "type";
}
if (message.chatJid != null && message.hasOwnProperty("chatJid")) {
object.chatJid = message.chatJid;
if (options.oneofs)
object._chatJid = "chatJid";
}
if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
if (typeof message.createdAt === "number")
object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
else
object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
if (options.oneofs)
object._createdAt = "createdAt";
}
if (message.deleted != null && message.hasOwnProperty("deleted")) {
object.deleted = message.deleted;
if (options.oneofs)
object._deleted = "deleted";
}
if (message.unstructuredContent != null && message.hasOwnProperty("unstructuredContent")) {
object.unstructuredContent = message.unstructuredContent;
if (options.oneofs)
object._unstructuredContent = "unstructuredContent";
}
return object;
};
/**
* Converts this NoteEditAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
NoteEditAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for NoteEditAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.NoteEditAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
NoteEditAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.NoteEditAction";
};
/**
* NoteType enum.
* @name SyncAction.SyncActionValue.NoteEditAction.NoteType
* @enum {number}
* @property {number} UNSTRUCTURED=1 UNSTRUCTURED value
* @property {number} STRUCTURED=2 STRUCTURED value
*/
NoteEditAction.NoteType = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[1] = "UNSTRUCTURED"] = 1;
values[valuesById[2] = "STRUCTURED"] = 2;
return values;
})();
return NoteEditAction;
})();
SyncActionValue.NotificationActivitySettingAction = (function() {
/**
* Properties of a NotificationActivitySettingAction.
* @memberof SyncAction.SyncActionValue
* @interface INotificationActivitySettingAction
* @property {SyncAction.SyncActionValue.NotificationActivitySettingAction.NotificationActivitySetting|null} [notificationActivitySetting] NotificationActivitySettingAction notificationActivitySetting
*/
/**
* Constructs a new NotificationActivitySettingAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a NotificationActivitySettingAction.
* @implements INotificationActivitySettingAction
* @constructor
* @param {SyncAction.SyncActionValue.INotificationActivitySettingAction=} [properties] Properties to set
*/
function NotificationActivitySettingAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* NotificationActivitySettingAction notificationActivitySetting.
* @member {SyncAction.SyncActionValue.NotificationActivitySettingAction.NotificationActivitySetting|null|undefined} notificationActivitySetting
* @memberof SyncAction.SyncActionValue.NotificationActivitySettingAction
* @instance
*/
NotificationActivitySettingAction.prototype.notificationActivitySetting = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* NotificationActivitySettingAction _notificationActivitySetting.
* @member {"notificationActivitySetting"|undefined} _notificationActivitySetting
* @memberof SyncAction.SyncActionValue.NotificationActivitySettingAction
* @instance
*/
Object.defineProperty(NotificationActivitySettingAction.prototype, "_notificationActivitySetting", {
get: $util.oneOfGetter($oneOfFields = ["notificationActivitySetting"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new NotificationActivitySettingAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.NotificationActivitySettingAction
* @static
* @param {SyncAction.SyncActionValue.INotificationActivitySettingAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.NotificationActivitySettingAction} NotificationActivitySettingAction instance
*/
NotificationActivitySettingAction.create = function create(properties) {
return new NotificationActivitySettingAction(properties);
};
/**
* Encodes the specified NotificationActivitySettingAction message. Does not implicitly {@link SyncAction.SyncActionValue.NotificationActivitySettingAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.NotificationActivitySettingAction
* @static
* @param {SyncAction.SyncActionValue.INotificationActivitySettingAction} message NotificationActivitySettingAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
NotificationActivitySettingAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.notificationActivitySetting != null && Object.hasOwnProperty.call(message, "notificationActivitySetting"))
writer.uint32(/* id 1, wireType 0 =*/8).int32(message.notificationActivitySetting);
return writer;
};
/**
* Encodes the specified NotificationActivitySettingAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.NotificationActivitySettingAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.NotificationActivitySettingAction
* @static
* @param {SyncAction.SyncActionValue.INotificationActivitySettingAction} message NotificationActivitySettingAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
NotificationActivitySettingAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a NotificationActivitySettingAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.NotificationActivitySettingAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.NotificationActivitySettingAction} NotificationActivitySettingAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
NotificationActivitySettingAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.NotificationActivitySettingAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.notificationActivitySetting = reader.int32();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a NotificationActivitySettingAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.NotificationActivitySettingAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.NotificationActivitySettingAction} NotificationActivitySettingAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
NotificationActivitySettingAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a NotificationActivitySettingAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.NotificationActivitySettingAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
NotificationActivitySettingAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.notificationActivitySetting != null && message.hasOwnProperty("notificationActivitySetting")) {
properties._notificationActivitySetting = 1;
switch (message.notificationActivitySetting) {
default:
return "notificationActivitySetting: enum value expected";
case 0:
case 1:
case 2:
case 3:
break;
}
}
return null;
};
/**
* Creates a NotificationActivitySettingAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.NotificationActivitySettingAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.NotificationActivitySettingAction} NotificationActivitySettingAction
*/
NotificationActivitySettingAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.NotificationActivitySettingAction)
return object;
var message = new $root.SyncAction.SyncActionValue.NotificationActivitySettingAction();
switch (object.notificationActivitySetting) {
default:
if (typeof object.notificationActivitySetting === "number") {
message.notificationActivitySetting = object.notificationActivitySetting;
break;
}
break;
case "DEFAULT_ALL_MESSAGES":
case 0:
message.notificationActivitySetting = 0;
break;
case "ALL_MESSAGES":
case 1:
message.notificationActivitySetting = 1;
break;
case "HIGHLIGHTS":
case 2:
message.notificationActivitySetting = 2;
break;
case "DEFAULT_HIGHLIGHTS":
case 3:
message.notificationActivitySetting = 3;
break;
}
return message;
};
/**
* Creates a plain object from a NotificationActivitySettingAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.NotificationActivitySettingAction
* @static
* @param {SyncAction.SyncActionValue.NotificationActivitySettingAction} message NotificationActivitySettingAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
NotificationActivitySettingAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.notificationActivitySetting != null && message.hasOwnProperty("notificationActivitySetting")) {
object.notificationActivitySetting = options.enums === String ? $root.SyncAction.SyncActionValue.NotificationActivitySettingAction.NotificationActivitySetting[message.notificationActivitySetting] === undefined ? message.notificationActivitySetting : $root.SyncAction.SyncActionValue.NotificationActivitySettingAction.NotificationActivitySetting[message.notificationActivitySetting] : message.notificationActivitySetting;
if (options.oneofs)
object._notificationActivitySetting = "notificationActivitySetting";
}
return object;
};
/**
* Converts this NotificationActivitySettingAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.NotificationActivitySettingAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
NotificationActivitySettingAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for NotificationActivitySettingAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.NotificationActivitySettingAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
NotificationActivitySettingAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.NotificationActivitySettingAction";
};
/**
* NotificationActivitySetting enum.
* @name SyncAction.SyncActionValue.NotificationActivitySettingAction.NotificationActivitySetting
* @enum {number}
* @property {number} DEFAULT_ALL_MESSAGES=0 DEFAULT_ALL_MESSAGES value
* @property {number} ALL_MESSAGES=1 ALL_MESSAGES value
* @property {number} HIGHLIGHTS=2 HIGHLIGHTS value
* @property {number} DEFAULT_HIGHLIGHTS=3 DEFAULT_HIGHLIGHTS value
*/
NotificationActivitySettingAction.NotificationActivitySetting = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "DEFAULT_ALL_MESSAGES"] = 0;
values[valuesById[1] = "ALL_MESSAGES"] = 1;
values[valuesById[2] = "HIGHLIGHTS"] = 2;
values[valuesById[3] = "DEFAULT_HIGHLIGHTS"] = 3;
return values;
})();
return NotificationActivitySettingAction;
})();
SyncActionValue.NuxAction = (function() {
/**
* Properties of a NuxAction.
* @memberof SyncAction.SyncActionValue
* @interface INuxAction
* @property {boolean|null} [acknowledged] NuxAction acknowledged
*/
/**
* Constructs a new NuxAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a NuxAction.
* @implements INuxAction
* @constructor
* @param {SyncAction.SyncActionValue.INuxAction=} [properties] Properties to set
*/
function NuxAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* NuxAction acknowledged.
* @member {boolean|null|undefined} acknowledged
* @memberof SyncAction.SyncActionValue.NuxAction
* @instance
*/
NuxAction.prototype.acknowledged = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* NuxAction _acknowledged.
* @member {"acknowledged"|undefined} _acknowledged
* @memberof SyncAction.SyncActionValue.NuxAction
* @instance
*/
Object.defineProperty(NuxAction.prototype, "_acknowledged", {
get: $util.oneOfGetter($oneOfFields = ["acknowledged"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new NuxAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.NuxAction
* @static
* @param {SyncAction.SyncActionValue.INuxAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.NuxAction} NuxAction instance
*/
NuxAction.create = function create(properties) {
return new NuxAction(properties);
};
/**
* Encodes the specified NuxAction message. Does not implicitly {@link SyncAction.SyncActionValue.NuxAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.NuxAction
* @static
* @param {SyncAction.SyncActionValue.INuxAction} message NuxAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
NuxAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.acknowledged != null && Object.hasOwnProperty.call(message, "acknowledged"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.acknowledged);
return writer;
};
/**
* Encodes the specified NuxAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.NuxAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.NuxAction
* @static
* @param {SyncAction.SyncActionValue.INuxAction} message NuxAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
NuxAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a NuxAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.NuxAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.NuxAction} NuxAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
NuxAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.NuxAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.acknowledged = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a NuxAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.NuxAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.NuxAction} NuxAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
NuxAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a NuxAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.NuxAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
NuxAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.acknowledged != null && message.hasOwnProperty("acknowledged")) {
properties._acknowledged = 1;
if (typeof message.acknowledged !== "boolean")
return "acknowledged: boolean expected";
}
return null;
};
/**
* Creates a NuxAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.NuxAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.NuxAction} NuxAction
*/
NuxAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.NuxAction)
return object;
var message = new $root.SyncAction.SyncActionValue.NuxAction();
if (object.acknowledged != null)
message.acknowledged = Boolean(object.acknowledged);
return message;
};
/**
* Creates a plain object from a NuxAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.NuxAction
* @static
* @param {SyncAction.SyncActionValue.NuxAction} message NuxAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
NuxAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.acknowledged != null && message.hasOwnProperty("acknowledged")) {
object.acknowledged = message.acknowledged;
if (options.oneofs)
object._acknowledged = "acknowledged";
}
return object;
};
/**
* Converts this NuxAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.NuxAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
NuxAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for NuxAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.NuxAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
NuxAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.NuxAction";
};
return NuxAction;
})();
SyncActionValue.PaymentInfoAction = (function() {
/**
* Properties of a PaymentInfoAction.
* @memberof SyncAction.SyncActionValue
* @interface IPaymentInfoAction
* @property {string|null} [cpi] PaymentInfoAction cpi
*/
/**
* Constructs a new PaymentInfoAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a PaymentInfoAction.
* @implements IPaymentInfoAction
* @constructor
* @param {SyncAction.SyncActionValue.IPaymentInfoAction=} [properties] Properties to set
*/
function PaymentInfoAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* PaymentInfoAction cpi.
* @member {string|null|undefined} cpi
* @memberof SyncAction.SyncActionValue.PaymentInfoAction
* @instance
*/
PaymentInfoAction.prototype.cpi = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* PaymentInfoAction _cpi.
* @member {"cpi"|undefined} _cpi
* @memberof SyncAction.SyncActionValue.PaymentInfoAction
* @instance
*/
Object.defineProperty(PaymentInfoAction.prototype, "_cpi", {
get: $util.oneOfGetter($oneOfFields = ["cpi"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new PaymentInfoAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.PaymentInfoAction
* @static
* @param {SyncAction.SyncActionValue.IPaymentInfoAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.PaymentInfoAction} PaymentInfoAction instance
*/
PaymentInfoAction.create = function create(properties) {
return new PaymentInfoAction(properties);
};
/**
* Encodes the specified PaymentInfoAction message. Does not implicitly {@link SyncAction.SyncActionValue.PaymentInfoAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.PaymentInfoAction
* @static
* @param {SyncAction.SyncActionValue.IPaymentInfoAction} message PaymentInfoAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PaymentInfoAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.cpi != null && Object.hasOwnProperty.call(message, "cpi"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.cpi);
return writer;
};
/**
* Encodes the specified PaymentInfoAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PaymentInfoAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.PaymentInfoAction
* @static
* @param {SyncAction.SyncActionValue.IPaymentInfoAction} message PaymentInfoAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PaymentInfoAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a PaymentInfoAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.PaymentInfoAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.PaymentInfoAction} PaymentInfoAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PaymentInfoAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.PaymentInfoAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.cpi = reader.string();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a PaymentInfoAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.PaymentInfoAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.PaymentInfoAction} PaymentInfoAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PaymentInfoAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a PaymentInfoAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.PaymentInfoAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
PaymentInfoAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.cpi != null && message.hasOwnProperty("cpi")) {
properties._cpi = 1;
if (!$util.isString(message.cpi))
return "cpi: string expected";
}
return null;
};
/**
* Creates a PaymentInfoAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.PaymentInfoAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.PaymentInfoAction} PaymentInfoAction
*/
PaymentInfoAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.PaymentInfoAction)
return object;
var message = new $root.SyncAction.SyncActionValue.PaymentInfoAction();
if (object.cpi != null)
message.cpi = String(object.cpi);
return message;
};
/**
* Creates a plain object from a PaymentInfoAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.PaymentInfoAction
* @static
* @param {SyncAction.SyncActionValue.PaymentInfoAction} message PaymentInfoAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
PaymentInfoAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.cpi != null && message.hasOwnProperty("cpi")) {
object.cpi = message.cpi;
if (options.oneofs)
object._cpi = "cpi";
}
return object;
};
/**
* Converts this PaymentInfoAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.PaymentInfoAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
PaymentInfoAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for PaymentInfoAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.PaymentInfoAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
PaymentInfoAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.PaymentInfoAction";
};
return PaymentInfoAction;
})();
SyncActionValue.PaymentTosAction = (function() {
/**
* Properties of a PaymentTosAction.
* @memberof SyncAction.SyncActionValue
* @interface IPaymentTosAction
* @property {SyncAction.SyncActionValue.PaymentTosAction.PaymentNotice|null} [paymentNotice] PaymentTosAction paymentNotice
* @property {boolean|null} [accepted] PaymentTosAction accepted
*/
/**
* Constructs a new PaymentTosAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a PaymentTosAction.
* @implements IPaymentTosAction
* @constructor
* @param {SyncAction.SyncActionValue.IPaymentTosAction=} [properties] Properties to set
*/
function PaymentTosAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* PaymentTosAction paymentNotice.
* @member {SyncAction.SyncActionValue.PaymentTosAction.PaymentNotice|null|undefined} paymentNotice
* @memberof SyncAction.SyncActionValue.PaymentTosAction
* @instance
*/
PaymentTosAction.prototype.paymentNotice = null;
/**
* PaymentTosAction accepted.
* @member {boolean|null|undefined} accepted
* @memberof SyncAction.SyncActionValue.PaymentTosAction
* @instance
*/
PaymentTosAction.prototype.accepted = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* PaymentTosAction _paymentNotice.
* @member {"paymentNotice"|undefined} _paymentNotice
* @memberof SyncAction.SyncActionValue.PaymentTosAction
* @instance
*/
Object.defineProperty(PaymentTosAction.prototype, "_paymentNotice", {
get: $util.oneOfGetter($oneOfFields = ["paymentNotice"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* PaymentTosAction _accepted.
* @member {"accepted"|undefined} _accepted
* @memberof SyncAction.SyncActionValue.PaymentTosAction
* @instance
*/
Object.defineProperty(PaymentTosAction.prototype, "_accepted", {
get: $util.oneOfGetter($oneOfFields = ["accepted"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new PaymentTosAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.PaymentTosAction
* @static
* @param {SyncAction.SyncActionValue.IPaymentTosAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.PaymentTosAction} PaymentTosAction instance
*/
PaymentTosAction.create = function create(properties) {
return new PaymentTosAction(properties);
};
/**
* Encodes the specified PaymentTosAction message. Does not implicitly {@link SyncAction.SyncActionValue.PaymentTosAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.PaymentTosAction
* @static
* @param {SyncAction.SyncActionValue.IPaymentTosAction} message PaymentTosAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PaymentTosAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.paymentNotice != null && Object.hasOwnProperty.call(message, "paymentNotice"))
writer.uint32(/* id 1, wireType 0 =*/8).int32(message.paymentNotice);
if (message.accepted != null && Object.hasOwnProperty.call(message, "accepted"))
writer.uint32(/* id 2, wireType 0 =*/16).bool(message.accepted);
return writer;
};
/**
* Encodes the specified PaymentTosAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PaymentTosAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.PaymentTosAction
* @static
* @param {SyncAction.SyncActionValue.IPaymentTosAction} message PaymentTosAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PaymentTosAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a PaymentTosAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.PaymentTosAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.PaymentTosAction} PaymentTosAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PaymentTosAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.PaymentTosAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.paymentNotice = reader.int32();
break;
}
case 2: {
message.accepted = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a PaymentTosAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.PaymentTosAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.PaymentTosAction} PaymentTosAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PaymentTosAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a PaymentTosAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.PaymentTosAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
PaymentTosAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.paymentNotice != null && message.hasOwnProperty("paymentNotice")) {
properties._paymentNotice = 1;
switch (message.paymentNotice) {
default:
return "paymentNotice: enum value expected";
case 0:
break;
}
}
if (message.accepted != null && message.hasOwnProperty("accepted")) {
properties._accepted = 1;
if (typeof message.accepted !== "boolean")
return "accepted: boolean expected";
}
return null;
};
/**
* Creates a PaymentTosAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.PaymentTosAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.PaymentTosAction} PaymentTosAction
*/
PaymentTosAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.PaymentTosAction)
return object;
var message = new $root.SyncAction.SyncActionValue.PaymentTosAction();
switch (object.paymentNotice) {
default:
if (typeof object.paymentNotice === "number") {
message.paymentNotice = object.paymentNotice;
break;
}
break;
case "BR_PAY_PRIVACY_POLICY":
case 0:
message.paymentNotice = 0;
break;
}
if (object.accepted != null)
message.accepted = Boolean(object.accepted);
return message;
};
/**
* Creates a plain object from a PaymentTosAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.PaymentTosAction
* @static
* @param {SyncAction.SyncActionValue.PaymentTosAction} message PaymentTosAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
PaymentTosAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.paymentNotice != null && message.hasOwnProperty("paymentNotice")) {
object.paymentNotice = options.enums === String ? $root.SyncAction.SyncActionValue.PaymentTosAction.PaymentNotice[message.paymentNotice] === undefined ? message.paymentNotice : $root.SyncAction.SyncActionValue.PaymentTosAction.PaymentNotice[message.paymentNotice] : message.paymentNotice;
if (options.oneofs)
object._paymentNotice = "paymentNotice";
}
if (message.accepted != null && message.hasOwnProperty("accepted")) {
object.accepted = message.accepted;
if (options.oneofs)
object._accepted = "accepted";
}
return object;
};
/**
* Converts this PaymentTosAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.PaymentTosAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
PaymentTosAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for PaymentTosAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.PaymentTosAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
PaymentTosAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.PaymentTosAction";
};
/**
* PaymentNotice enum.
* @name SyncAction.SyncActionValue.PaymentTosAction.PaymentNotice
* @enum {number}
* @property {number} BR_PAY_PRIVACY_POLICY=0 BR_PAY_PRIVACY_POLICY value
*/
PaymentTosAction.PaymentNotice = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "BR_PAY_PRIVACY_POLICY"] = 0;
return values;
})();
return PaymentTosAction;
})();
SyncActionValue.PinAction = (function() {
/**
* Properties of a PinAction.
* @memberof SyncAction.SyncActionValue
* @interface IPinAction
* @property {boolean|null} [pinned] PinAction pinned
*/
/**
* Constructs a new PinAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a PinAction.
* @implements IPinAction
* @constructor
* @param {SyncAction.SyncActionValue.IPinAction=} [properties] Properties to set
*/
function PinAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* PinAction pinned.
* @member {boolean|null|undefined} pinned
* @memberof SyncAction.SyncActionValue.PinAction
* @instance
*/
PinAction.prototype.pinned = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* PinAction _pinned.
* @member {"pinned"|undefined} _pinned
* @memberof SyncAction.SyncActionValue.PinAction
* @instance
*/
Object.defineProperty(PinAction.prototype, "_pinned", {
get: $util.oneOfGetter($oneOfFields = ["pinned"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new PinAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.PinAction
* @static
* @param {SyncAction.SyncActionValue.IPinAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.PinAction} PinAction instance
*/
PinAction.create = function create(properties) {
return new PinAction(properties);
};
/**
* Encodes the specified PinAction message. Does not implicitly {@link SyncAction.SyncActionValue.PinAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.PinAction
* @static
* @param {SyncAction.SyncActionValue.IPinAction} message PinAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PinAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.pinned != null && Object.hasOwnProperty.call(message, "pinned"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.pinned);
return writer;
};
/**
* Encodes the specified PinAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PinAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.PinAction
* @static
* @param {SyncAction.SyncActionValue.IPinAction} message PinAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PinAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a PinAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.PinAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.PinAction} PinAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PinAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.PinAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.pinned = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a PinAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.PinAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.PinAction} PinAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PinAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a PinAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.PinAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
PinAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.pinned != null && message.hasOwnProperty("pinned")) {
properties._pinned = 1;
if (typeof message.pinned !== "boolean")
return "pinned: boolean expected";
}
return null;
};
/**
* Creates a PinAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.PinAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.PinAction} PinAction
*/
PinAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.PinAction)
return object;
var message = new $root.SyncAction.SyncActionValue.PinAction();
if (object.pinned != null)
message.pinned = Boolean(object.pinned);
return message;
};
/**
* Creates a plain object from a PinAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.PinAction
* @static
* @param {SyncAction.SyncActionValue.PinAction} message PinAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
PinAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.pinned != null && message.hasOwnProperty("pinned")) {
object.pinned = message.pinned;
if (options.oneofs)
object._pinned = "pinned";
}
return object;
};
/**
* Converts this PinAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.PinAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
PinAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for PinAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.PinAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
PinAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.PinAction";
};
return PinAction;
})();
SyncActionValue.PnForLidChatAction = (function() {
/**
* Properties of a PnForLidChatAction.
* @memberof SyncAction.SyncActionValue
* @interface IPnForLidChatAction
* @property {string|null} [pnJid] PnForLidChatAction pnJid
*/
/**
* Constructs a new PnForLidChatAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a PnForLidChatAction.
* @implements IPnForLidChatAction
* @constructor
* @param {SyncAction.SyncActionValue.IPnForLidChatAction=} [properties] Properties to set
*/
function PnForLidChatAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* PnForLidChatAction pnJid.
* @member {string|null|undefined} pnJid
* @memberof SyncAction.SyncActionValue.PnForLidChatAction
* @instance
*/
PnForLidChatAction.prototype.pnJid = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* PnForLidChatAction _pnJid.
* @member {"pnJid"|undefined} _pnJid
* @memberof SyncAction.SyncActionValue.PnForLidChatAction
* @instance
*/
Object.defineProperty(PnForLidChatAction.prototype, "_pnJid", {
get: $util.oneOfGetter($oneOfFields = ["pnJid"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new PnForLidChatAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.PnForLidChatAction
* @static
* @param {SyncAction.SyncActionValue.IPnForLidChatAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.PnForLidChatAction} PnForLidChatAction instance
*/
PnForLidChatAction.create = function create(properties) {
return new PnForLidChatAction(properties);
};
/**
* Encodes the specified PnForLidChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.PnForLidChatAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.PnForLidChatAction
* @static
* @param {SyncAction.SyncActionValue.IPnForLidChatAction} message PnForLidChatAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PnForLidChatAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.pnJid != null && Object.hasOwnProperty.call(message, "pnJid"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.pnJid);
return writer;
};
/**
* Encodes the specified PnForLidChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PnForLidChatAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.PnForLidChatAction
* @static
* @param {SyncAction.SyncActionValue.IPnForLidChatAction} message PnForLidChatAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PnForLidChatAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a PnForLidChatAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.PnForLidChatAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.PnForLidChatAction} PnForLidChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PnForLidChatAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.PnForLidChatAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.pnJid = reader.string();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a PnForLidChatAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.PnForLidChatAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.PnForLidChatAction} PnForLidChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PnForLidChatAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a PnForLidChatAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.PnForLidChatAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
PnForLidChatAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.pnJid != null && message.hasOwnProperty("pnJid")) {
properties._pnJid = 1;
if (!$util.isString(message.pnJid))
return "pnJid: string expected";
}
return null;
};
/**
* Creates a PnForLidChatAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.PnForLidChatAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.PnForLidChatAction} PnForLidChatAction
*/
PnForLidChatAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.PnForLidChatAction)
return object;
var message = new $root.SyncAction.SyncActionValue.PnForLidChatAction();
if (object.pnJid != null)
message.pnJid = String(object.pnJid);
return message;
};
/**
* Creates a plain object from a PnForLidChatAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.PnForLidChatAction
* @static
* @param {SyncAction.SyncActionValue.PnForLidChatAction} message PnForLidChatAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
PnForLidChatAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.pnJid != null && message.hasOwnProperty("pnJid")) {
object.pnJid = message.pnJid;
if (options.oneofs)
object._pnJid = "pnJid";
}
return object;
};
/**
* Converts this PnForLidChatAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.PnForLidChatAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
PnForLidChatAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for PnForLidChatAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.PnForLidChatAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
PnForLidChatAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.PnForLidChatAction";
};
return PnForLidChatAction;
})();
SyncActionValue.PrimaryFeature = (function() {
/**
* Properties of a PrimaryFeature.
* @memberof SyncAction.SyncActionValue
* @interface IPrimaryFeature
* @property {Array.<string>|null} [flags] PrimaryFeature flags
*/
/**
* Constructs a new PrimaryFeature.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a PrimaryFeature.
* @implements IPrimaryFeature
* @constructor
* @param {SyncAction.SyncActionValue.IPrimaryFeature=} [properties] Properties to set
*/
function PrimaryFeature(properties) {
this.flags = [];
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* PrimaryFeature flags.
* @member {Array.<string>} flags
* @memberof SyncAction.SyncActionValue.PrimaryFeature
* @instance
*/
PrimaryFeature.prototype.flags = $util.emptyArray;
/**
* Creates a new PrimaryFeature instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.PrimaryFeature
* @static
* @param {SyncAction.SyncActionValue.IPrimaryFeature=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.PrimaryFeature} PrimaryFeature instance
*/
PrimaryFeature.create = function create(properties) {
return new PrimaryFeature(properties);
};
/**
* Encodes the specified PrimaryFeature message. Does not implicitly {@link SyncAction.SyncActionValue.PrimaryFeature.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.PrimaryFeature
* @static
* @param {SyncAction.SyncActionValue.IPrimaryFeature} message PrimaryFeature message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PrimaryFeature.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.flags != null && message.flags.length)
for (var i = 0; i < message.flags.length; ++i)
writer.uint32(/* id 1, wireType 2 =*/10).string(message.flags[i]);
return writer;
};
/**
* Encodes the specified PrimaryFeature message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PrimaryFeature.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.PrimaryFeature
* @static
* @param {SyncAction.SyncActionValue.IPrimaryFeature} message PrimaryFeature message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PrimaryFeature.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a PrimaryFeature message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.PrimaryFeature
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.PrimaryFeature} PrimaryFeature
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PrimaryFeature.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.PrimaryFeature();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.flags && message.flags.length))
message.flags = [];
message.flags.push(reader.string());
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a PrimaryFeature message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.PrimaryFeature
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.PrimaryFeature} PrimaryFeature
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PrimaryFeature.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a PrimaryFeature message.
* @function verify
* @memberof SyncAction.SyncActionValue.PrimaryFeature
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
PrimaryFeature.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
if (message.flags != null && message.hasOwnProperty("flags")) {
if (!Array.isArray(message.flags))
return "flags: array expected";
for (var i = 0; i < message.flags.length; ++i)
if (!$util.isString(message.flags[i]))
return "flags: string[] expected";
}
return null;
};
/**
* Creates a PrimaryFeature message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.PrimaryFeature
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.PrimaryFeature} PrimaryFeature
*/
PrimaryFeature.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.PrimaryFeature)
return object;
var message = new $root.SyncAction.SyncActionValue.PrimaryFeature();
if (object.flags) {
if (!Array.isArray(object.flags))
throw TypeError(".SyncAction.SyncActionValue.PrimaryFeature.flags: array expected");
message.flags = [];
for (var i = 0; i < object.flags.length; ++i)
message.flags[i] = String(object.flags[i]);
}
return message;
};
/**
* Creates a plain object from a PrimaryFeature message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.PrimaryFeature
* @static
* @param {SyncAction.SyncActionValue.PrimaryFeature} message PrimaryFeature
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
PrimaryFeature.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.arrays || options.defaults)
object.flags = [];
if (message.flags && message.flags.length) {
object.flags = [];
for (var j = 0; j < message.flags.length; ++j)
object.flags[j] = message.flags[j];
}
return object;
};
/**
* Converts this PrimaryFeature to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.PrimaryFeature
* @instance
* @returns {Object.<string,*>} JSON object
*/
PrimaryFeature.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for PrimaryFeature
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.PrimaryFeature
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
PrimaryFeature.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.PrimaryFeature";
};
return PrimaryFeature;
})();
SyncActionValue.PrimaryVersionAction = (function() {
/**
* Properties of a PrimaryVersionAction.
* @memberof SyncAction.SyncActionValue
* @interface IPrimaryVersionAction
* @property {string|null} [version] PrimaryVersionAction version
*/
/**
* Constructs a new PrimaryVersionAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a PrimaryVersionAction.
* @implements IPrimaryVersionAction
* @constructor
* @param {SyncAction.SyncActionValue.IPrimaryVersionAction=} [properties] Properties to set
*/
function PrimaryVersionAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* PrimaryVersionAction version.
* @member {string|null|undefined} version
* @memberof SyncAction.SyncActionValue.PrimaryVersionAction
* @instance
*/
PrimaryVersionAction.prototype.version = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* PrimaryVersionAction _version.
* @member {"version"|undefined} _version
* @memberof SyncAction.SyncActionValue.PrimaryVersionAction
* @instance
*/
Object.defineProperty(PrimaryVersionAction.prototype, "_version", {
get: $util.oneOfGetter($oneOfFields = ["version"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new PrimaryVersionAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.PrimaryVersionAction
* @static
* @param {SyncAction.SyncActionValue.IPrimaryVersionAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.PrimaryVersionAction} PrimaryVersionAction instance
*/
PrimaryVersionAction.create = function create(properties) {
return new PrimaryVersionAction(properties);
};
/**
* Encodes the specified PrimaryVersionAction message. Does not implicitly {@link SyncAction.SyncActionValue.PrimaryVersionAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.PrimaryVersionAction
* @static
* @param {SyncAction.SyncActionValue.IPrimaryVersionAction} message PrimaryVersionAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PrimaryVersionAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.version != null && Object.hasOwnProperty.call(message, "version"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
return writer;
};
/**
* Encodes the specified PrimaryVersionAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PrimaryVersionAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.PrimaryVersionAction
* @static
* @param {SyncAction.SyncActionValue.IPrimaryVersionAction} message PrimaryVersionAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PrimaryVersionAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a PrimaryVersionAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.PrimaryVersionAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.PrimaryVersionAction} PrimaryVersionAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PrimaryVersionAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.PrimaryVersionAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.version = reader.string();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a PrimaryVersionAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.PrimaryVersionAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.PrimaryVersionAction} PrimaryVersionAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PrimaryVersionAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a PrimaryVersionAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.PrimaryVersionAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
PrimaryVersionAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.version != null && message.hasOwnProperty("version")) {
properties._version = 1;
if (!$util.isString(message.version))
return "version: string expected";
}
return null;
};
/**
* Creates a PrimaryVersionAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.PrimaryVersionAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.PrimaryVersionAction} PrimaryVersionAction
*/
PrimaryVersionAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.PrimaryVersionAction)
return object;
var message = new $root.SyncAction.SyncActionValue.PrimaryVersionAction();
if (object.version != null)
message.version = String(object.version);
return message;
};
/**
* Creates a plain object from a PrimaryVersionAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.PrimaryVersionAction
* @static
* @param {SyncAction.SyncActionValue.PrimaryVersionAction} message PrimaryVersionAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
PrimaryVersionAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.version != null && message.hasOwnProperty("version")) {
object.version = message.version;
if (options.oneofs)
object._version = "version";
}
return object;
};
/**
* Converts this PrimaryVersionAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.PrimaryVersionAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
PrimaryVersionAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for PrimaryVersionAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.PrimaryVersionAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
PrimaryVersionAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.PrimaryVersionAction";
};
return PrimaryVersionAction;
})();
SyncActionValue.PrivacySettingDisableLinkPreviewsAction = (function() {
/**
* Properties of a PrivacySettingDisableLinkPreviewsAction.
* @memberof SyncAction.SyncActionValue
* @interface IPrivacySettingDisableLinkPreviewsAction
* @property {boolean|null} [isPreviewsDisabled] PrivacySettingDisableLinkPreviewsAction isPreviewsDisabled
*/
/**
* Constructs a new PrivacySettingDisableLinkPreviewsAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a PrivacySettingDisableLinkPreviewsAction.
* @implements IPrivacySettingDisableLinkPreviewsAction
* @constructor
* @param {SyncAction.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction=} [properties] Properties to set
*/
function PrivacySettingDisableLinkPreviewsAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* PrivacySettingDisableLinkPreviewsAction isPreviewsDisabled.
* @member {boolean|null|undefined} isPreviewsDisabled
* @memberof SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction
* @instance
*/
PrivacySettingDisableLinkPreviewsAction.prototype.isPreviewsDisabled = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* PrivacySettingDisableLinkPreviewsAction _isPreviewsDisabled.
* @member {"isPreviewsDisabled"|undefined} _isPreviewsDisabled
* @memberof SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction
* @instance
*/
Object.defineProperty(PrivacySettingDisableLinkPreviewsAction.prototype, "_isPreviewsDisabled", {
get: $util.oneOfGetter($oneOfFields = ["isPreviewsDisabled"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new PrivacySettingDisableLinkPreviewsAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction
* @static
* @param {SyncAction.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction} PrivacySettingDisableLinkPreviewsAction instance
*/
PrivacySettingDisableLinkPreviewsAction.create = function create(properties) {
return new PrivacySettingDisableLinkPreviewsAction(properties);
};
/**
* Encodes the specified PrivacySettingDisableLinkPreviewsAction message. Does not implicitly {@link SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction
* @static
* @param {SyncAction.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction} message PrivacySettingDisableLinkPreviewsAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PrivacySettingDisableLinkPreviewsAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.isPreviewsDisabled != null && Object.hasOwnProperty.call(message, "isPreviewsDisabled"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isPreviewsDisabled);
return writer;
};
/**
* Encodes the specified PrivacySettingDisableLinkPreviewsAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction
* @static
* @param {SyncAction.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction} message PrivacySettingDisableLinkPreviewsAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PrivacySettingDisableLinkPreviewsAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a PrivacySettingDisableLinkPreviewsAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction} PrivacySettingDisableLinkPreviewsAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PrivacySettingDisableLinkPreviewsAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.isPreviewsDisabled = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a PrivacySettingDisableLinkPreviewsAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction} PrivacySettingDisableLinkPreviewsAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PrivacySettingDisableLinkPreviewsAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a PrivacySettingDisableLinkPreviewsAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
PrivacySettingDisableLinkPreviewsAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.isPreviewsDisabled != null && message.hasOwnProperty("isPreviewsDisabled")) {
properties._isPreviewsDisabled = 1;
if (typeof message.isPreviewsDisabled !== "boolean")
return "isPreviewsDisabled: boolean expected";
}
return null;
};
/**
* Creates a PrivacySettingDisableLinkPreviewsAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction} PrivacySettingDisableLinkPreviewsAction
*/
PrivacySettingDisableLinkPreviewsAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction)
return object;
var message = new $root.SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction();
if (object.isPreviewsDisabled != null)
message.isPreviewsDisabled = Boolean(object.isPreviewsDisabled);
return message;
};
/**
* Creates a plain object from a PrivacySettingDisableLinkPreviewsAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction
* @static
* @param {SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction} message PrivacySettingDisableLinkPreviewsAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
PrivacySettingDisableLinkPreviewsAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.isPreviewsDisabled != null && message.hasOwnProperty("isPreviewsDisabled")) {
object.isPreviewsDisabled = message.isPreviewsDisabled;
if (options.oneofs)
object._isPreviewsDisabled = "isPreviewsDisabled";
}
return object;
};
/**
* Converts this PrivacySettingDisableLinkPreviewsAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
PrivacySettingDisableLinkPreviewsAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for PrivacySettingDisableLinkPreviewsAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
PrivacySettingDisableLinkPreviewsAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction";
};
return PrivacySettingDisableLinkPreviewsAction;
})();
SyncActionValue.PrivacySettingRelayAllCalls = (function() {
/**
* Properties of a PrivacySettingRelayAllCalls.
* @memberof SyncAction.SyncActionValue
* @interface IPrivacySettingRelayAllCalls
* @property {boolean|null} [isEnabled] PrivacySettingRelayAllCalls isEnabled
*/
/**
* Constructs a new PrivacySettingRelayAllCalls.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a PrivacySettingRelayAllCalls.
* @implements IPrivacySettingRelayAllCalls
* @constructor
* @param {SyncAction.SyncActionValue.IPrivacySettingRelayAllCalls=} [properties] Properties to set
*/
function PrivacySettingRelayAllCalls(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* PrivacySettingRelayAllCalls isEnabled.
* @member {boolean|null|undefined} isEnabled
* @memberof SyncAction.SyncActionValue.PrivacySettingRelayAllCalls
* @instance
*/
PrivacySettingRelayAllCalls.prototype.isEnabled = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* PrivacySettingRelayAllCalls _isEnabled.
* @member {"isEnabled"|undefined} _isEnabled
* @memberof SyncAction.SyncActionValue.PrivacySettingRelayAllCalls
* @instance
*/
Object.defineProperty(PrivacySettingRelayAllCalls.prototype, "_isEnabled", {
get: $util.oneOfGetter($oneOfFields = ["isEnabled"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new PrivacySettingRelayAllCalls instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.PrivacySettingRelayAllCalls
* @static
* @param {SyncAction.SyncActionValue.IPrivacySettingRelayAllCalls=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.PrivacySettingRelayAllCalls} PrivacySettingRelayAllCalls instance
*/
PrivacySettingRelayAllCalls.create = function create(properties) {
return new PrivacySettingRelayAllCalls(properties);
};
/**
* Encodes the specified PrivacySettingRelayAllCalls message. Does not implicitly {@link SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.PrivacySettingRelayAllCalls
* @static
* @param {SyncAction.SyncActionValue.IPrivacySettingRelayAllCalls} message PrivacySettingRelayAllCalls message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PrivacySettingRelayAllCalls.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.isEnabled != null && Object.hasOwnProperty.call(message, "isEnabled"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isEnabled);
return writer;
};
/**
* Encodes the specified PrivacySettingRelayAllCalls message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.PrivacySettingRelayAllCalls
* @static
* @param {SyncAction.SyncActionValue.IPrivacySettingRelayAllCalls} message PrivacySettingRelayAllCalls message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PrivacySettingRelayAllCalls.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a PrivacySettingRelayAllCalls message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.PrivacySettingRelayAllCalls
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.PrivacySettingRelayAllCalls} PrivacySettingRelayAllCalls
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PrivacySettingRelayAllCalls.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.PrivacySettingRelayAllCalls();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.isEnabled = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a PrivacySettingRelayAllCalls message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.PrivacySettingRelayAllCalls
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.PrivacySettingRelayAllCalls} PrivacySettingRelayAllCalls
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PrivacySettingRelayAllCalls.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a PrivacySettingRelayAllCalls message.
* @function verify
* @memberof SyncAction.SyncActionValue.PrivacySettingRelayAllCalls
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
PrivacySettingRelayAllCalls.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.isEnabled != null && message.hasOwnProperty("isEnabled")) {
properties._isEnabled = 1;
if (typeof message.isEnabled !== "boolean")
return "isEnabled: boolean expected";
}
return null;
};
/**
* Creates a PrivacySettingRelayAllCalls message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.PrivacySettingRelayAllCalls
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.PrivacySettingRelayAllCalls} PrivacySettingRelayAllCalls
*/
PrivacySettingRelayAllCalls.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.PrivacySettingRelayAllCalls)
return object;
var message = new $root.SyncAction.SyncActionValue.PrivacySettingRelayAllCalls();
if (object.isEnabled != null)
message.isEnabled = Boolean(object.isEnabled);
return message;
};
/**
* Creates a plain object from a PrivacySettingRelayAllCalls message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.PrivacySettingRelayAllCalls
* @static
* @param {SyncAction.SyncActionValue.PrivacySettingRelayAllCalls} message PrivacySettingRelayAllCalls
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
PrivacySettingRelayAllCalls.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.isEnabled != null && message.hasOwnProperty("isEnabled")) {
object.isEnabled = message.isEnabled;
if (options.oneofs)
object._isEnabled = "isEnabled";
}
return object;
};
/**
* Converts this PrivacySettingRelayAllCalls to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.PrivacySettingRelayAllCalls
* @instance
* @returns {Object.<string,*>} JSON object
*/
PrivacySettingRelayAllCalls.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for PrivacySettingRelayAllCalls
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.PrivacySettingRelayAllCalls
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
PrivacySettingRelayAllCalls.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.PrivacySettingRelayAllCalls";
};
return PrivacySettingRelayAllCalls;
})();
SyncActionValue.PushNameSetting = (function() {
/**
* Properties of a PushNameSetting.
* @memberof SyncAction.SyncActionValue
* @interface IPushNameSetting
* @property {string|null} [name] PushNameSetting name
*/
/**
* Constructs a new PushNameSetting.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a PushNameSetting.
* @implements IPushNameSetting
* @constructor
* @param {SyncAction.SyncActionValue.IPushNameSetting=} [properties] Properties to set
*/
function PushNameSetting(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* PushNameSetting name.
* @member {string|null|undefined} name
* @memberof SyncAction.SyncActionValue.PushNameSetting
* @instance
*/
PushNameSetting.prototype.name = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* PushNameSetting _name.
* @member {"name"|undefined} _name
* @memberof SyncAction.SyncActionValue.PushNameSetting
* @instance
*/
Object.defineProperty(PushNameSetting.prototype, "_name", {
get: $util.oneOfGetter($oneOfFields = ["name"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new PushNameSetting instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.PushNameSetting
* @static
* @param {SyncAction.SyncActionValue.IPushNameSetting=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.PushNameSetting} PushNameSetting instance
*/
PushNameSetting.create = function create(properties) {
return new PushNameSetting(properties);
};
/**
* Encodes the specified PushNameSetting message. Does not implicitly {@link SyncAction.SyncActionValue.PushNameSetting.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.PushNameSetting
* @static
* @param {SyncAction.SyncActionValue.IPushNameSetting} message PushNameSetting message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PushNameSetting.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.name != null && Object.hasOwnProperty.call(message, "name"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
return writer;
};
/**
* Encodes the specified PushNameSetting message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PushNameSetting.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.PushNameSetting
* @static
* @param {SyncAction.SyncActionValue.IPushNameSetting} message PushNameSetting message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
PushNameSetting.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a PushNameSetting message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.PushNameSetting
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.PushNameSetting} PushNameSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PushNameSetting.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.PushNameSetting();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.name = reader.string();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a PushNameSetting message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.PushNameSetting
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.PushNameSetting} PushNameSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
PushNameSetting.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a PushNameSetting message.
* @function verify
* @memberof SyncAction.SyncActionValue.PushNameSetting
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
PushNameSetting.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.name != null && message.hasOwnProperty("name")) {
properties._name = 1;
if (!$util.isString(message.name))
return "name: string expected";
}
return null;
};
/**
* Creates a PushNameSetting message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.PushNameSetting
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.PushNameSetting} PushNameSetting
*/
PushNameSetting.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.PushNameSetting)
return object;
var message = new $root.SyncAction.SyncActionValue.PushNameSetting();
if (object.name != null)
message.name = String(object.name);
return message;
};
/**
* Creates a plain object from a PushNameSetting message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.PushNameSetting
* @static
* @param {SyncAction.SyncActionValue.PushNameSetting} message PushNameSetting
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
PushNameSetting.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.name != null && message.hasOwnProperty("name")) {
object.name = message.name;
if (options.oneofs)
object._name = "name";
}
return object;
};
/**
* Converts this PushNameSetting to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.PushNameSetting
* @instance
* @returns {Object.<string,*>} JSON object
*/
PushNameSetting.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for PushNameSetting
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.PushNameSetting
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
PushNameSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.PushNameSetting";
};
return PushNameSetting;
})();
SyncActionValue.QuickReplyAction = (function() {
/**
* Properties of a QuickReplyAction.
* @memberof SyncAction.SyncActionValue
* @interface IQuickReplyAction
* @property {string|null} [shortcut] QuickReplyAction shortcut
* @property {string|null} [message] QuickReplyAction message
* @property {Array.<string>|null} [keywords] QuickReplyAction keywords
* @property {number|null} [count] QuickReplyAction count
* @property {boolean|null} [deleted] QuickReplyAction deleted
*/
/**
* Constructs a new QuickReplyAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a QuickReplyAction.
* @implements IQuickReplyAction
* @constructor
* @param {SyncAction.SyncActionValue.IQuickReplyAction=} [properties] Properties to set
*/
function QuickReplyAction(properties) {
this.keywords = [];
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* QuickReplyAction shortcut.
* @member {string|null|undefined} shortcut
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @instance
*/
QuickReplyAction.prototype.shortcut = null;
/**
* QuickReplyAction message.
* @member {string|null|undefined} message
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @instance
*/
QuickReplyAction.prototype.message = null;
/**
* QuickReplyAction keywords.
* @member {Array.<string>} keywords
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @instance
*/
QuickReplyAction.prototype.keywords = $util.emptyArray;
/**
* QuickReplyAction count.
* @member {number|null|undefined} count
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @instance
*/
QuickReplyAction.prototype.count = null;
/**
* QuickReplyAction deleted.
* @member {boolean|null|undefined} deleted
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @instance
*/
QuickReplyAction.prototype.deleted = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* QuickReplyAction _shortcut.
* @member {"shortcut"|undefined} _shortcut
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @instance
*/
Object.defineProperty(QuickReplyAction.prototype, "_shortcut", {
get: $util.oneOfGetter($oneOfFields = ["shortcut"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* QuickReplyAction _message.
* @member {"message"|undefined} _message
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @instance
*/
Object.defineProperty(QuickReplyAction.prototype, "_message", {
get: $util.oneOfGetter($oneOfFields = ["message"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* QuickReplyAction _count.
* @member {"count"|undefined} _count
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @instance
*/
Object.defineProperty(QuickReplyAction.prototype, "_count", {
get: $util.oneOfGetter($oneOfFields = ["count"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* QuickReplyAction _deleted.
* @member {"deleted"|undefined} _deleted
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @instance
*/
Object.defineProperty(QuickReplyAction.prototype, "_deleted", {
get: $util.oneOfGetter($oneOfFields = ["deleted"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new QuickReplyAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @static
* @param {SyncAction.SyncActionValue.IQuickReplyAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.QuickReplyAction} QuickReplyAction instance
*/
QuickReplyAction.create = function create(properties) {
return new QuickReplyAction(properties);
};
/**
* Encodes the specified QuickReplyAction message. Does not implicitly {@link SyncAction.SyncActionValue.QuickReplyAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @static
* @param {SyncAction.SyncActionValue.IQuickReplyAction} message QuickReplyAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
QuickReplyAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.shortcut != null && Object.hasOwnProperty.call(message, "shortcut"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.shortcut);
if (message.message != null && Object.hasOwnProperty.call(message, "message"))
writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
if (message.keywords != null && message.keywords.length)
for (var i = 0; i < message.keywords.length; ++i)
writer.uint32(/* id 3, wireType 2 =*/26).string(message.keywords[i]);
if (message.count != null && Object.hasOwnProperty.call(message, "count"))
writer.uint32(/* id 4, wireType 0 =*/32).int32(message.count);
if (message.deleted != null && Object.hasOwnProperty.call(message, "deleted"))
writer.uint32(/* id 5, wireType 0 =*/40).bool(message.deleted);
return writer;
};
/**
* Encodes the specified QuickReplyAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.QuickReplyAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @static
* @param {SyncAction.SyncActionValue.IQuickReplyAction} message QuickReplyAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
QuickReplyAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a QuickReplyAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.QuickReplyAction} QuickReplyAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
QuickReplyAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.QuickReplyAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.shortcut = reader.string();
break;
}
case 2: {
message.message = reader.string();
break;
}
case 3: {
if (!(message.keywords && message.keywords.length))
message.keywords = [];
message.keywords.push(reader.string());
break;
}
case 4: {
message.count = reader.int32();
break;
}
case 5: {
message.deleted = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a QuickReplyAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.QuickReplyAction} QuickReplyAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
QuickReplyAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a QuickReplyAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
QuickReplyAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.shortcut != null && message.hasOwnProperty("shortcut")) {
properties._shortcut = 1;
if (!$util.isString(message.shortcut))
return "shortcut: string expected";
}
if (message.message != null && message.hasOwnProperty("message")) {
properties._message = 1;
if (!$util.isString(message.message))
return "message: string expected";
}
if (message.keywords != null && message.hasOwnProperty("keywords")) {
if (!Array.isArray(message.keywords))
return "keywords: array expected";
for (var i = 0; i < message.keywords.length; ++i)
if (!$util.isString(message.keywords[i]))
return "keywords: string[] expected";
}
if (message.count != null && message.hasOwnProperty("count")) {
properties._count = 1;
if (!$util.isInteger(message.count))
return "count: integer expected";
}
if (message.deleted != null && message.hasOwnProperty("deleted")) {
properties._deleted = 1;
if (typeof message.deleted !== "boolean")
return "deleted: boolean expected";
}
return null;
};
/**
* Creates a QuickReplyAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.QuickReplyAction} QuickReplyAction
*/
QuickReplyAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.QuickReplyAction)
return object;
var message = new $root.SyncAction.SyncActionValue.QuickReplyAction();
if (object.shortcut != null)
message.shortcut = String(object.shortcut);
if (object.message != null)
message.message = String(object.message);
if (object.keywords) {
if (!Array.isArray(object.keywords))
throw TypeError(".SyncAction.SyncActionValue.QuickReplyAction.keywords: array expected");
message.keywords = [];
for (var i = 0; i < object.keywords.length; ++i)
message.keywords[i] = String(object.keywords[i]);
}
if (object.count != null)
message.count = object.count | 0;
if (object.deleted != null)
message.deleted = Boolean(object.deleted);
return message;
};
/**
* Creates a plain object from a QuickReplyAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @static
* @param {SyncAction.SyncActionValue.QuickReplyAction} message QuickReplyAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
QuickReplyAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.arrays || options.defaults)
object.keywords = [];
if (message.shortcut != null && message.hasOwnProperty("shortcut")) {
object.shortcut = message.shortcut;
if (options.oneofs)
object._shortcut = "shortcut";
}
if (message.message != null && message.hasOwnProperty("message")) {
object.message = message.message;
if (options.oneofs)
object._message = "message";
}
if (message.keywords && message.keywords.length) {
object.keywords = [];
for (var j = 0; j < message.keywords.length; ++j)
object.keywords[j] = message.keywords[j];
}
if (message.count != null && message.hasOwnProperty("count")) {
object.count = message.count;
if (options.oneofs)
object._count = "count";
}
if (message.deleted != null && message.hasOwnProperty("deleted")) {
object.deleted = message.deleted;
if (options.oneofs)
object._deleted = "deleted";
}
return object;
};
/**
* Converts this QuickReplyAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
QuickReplyAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for QuickReplyAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.QuickReplyAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
QuickReplyAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.QuickReplyAction";
};
return QuickReplyAction;
})();
SyncActionValue.RecentEmojiWeightsAction = (function() {
/**
* Properties of a RecentEmojiWeightsAction.
* @memberof SyncAction.SyncActionValue
* @interface IRecentEmojiWeightsAction
* @property {Array.<SyncAction.IRecentEmojiWeight>|null} [weights] RecentEmojiWeightsAction weights
*/
/**
* Constructs a new RecentEmojiWeightsAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a RecentEmojiWeightsAction.
* @implements IRecentEmojiWeightsAction
* @constructor
* @param {SyncAction.SyncActionValue.IRecentEmojiWeightsAction=} [properties] Properties to set
*/
function RecentEmojiWeightsAction(properties) {
this.weights = [];
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* RecentEmojiWeightsAction weights.
* @member {Array.<SyncAction.IRecentEmojiWeight>} weights
* @memberof SyncAction.SyncActionValue.RecentEmojiWeightsAction
* @instance
*/
RecentEmojiWeightsAction.prototype.weights = $util.emptyArray;
/**
* Creates a new RecentEmojiWeightsAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.RecentEmojiWeightsAction
* @static
* @param {SyncAction.SyncActionValue.IRecentEmojiWeightsAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.RecentEmojiWeightsAction} RecentEmojiWeightsAction instance
*/
RecentEmojiWeightsAction.create = function create(properties) {
return new RecentEmojiWeightsAction(properties);
};
/**
* Encodes the specified RecentEmojiWeightsAction message. Does not implicitly {@link SyncAction.SyncActionValue.RecentEmojiWeightsAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.RecentEmojiWeightsAction
* @static
* @param {SyncAction.SyncActionValue.IRecentEmojiWeightsAction} message RecentEmojiWeightsAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
RecentEmojiWeightsAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.weights != null && message.weights.length)
for (var i = 0; i < message.weights.length; ++i)
$root.SyncAction.RecentEmojiWeight.encode(message.weights[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
return writer;
};
/**
* Encodes the specified RecentEmojiWeightsAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.RecentEmojiWeightsAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.RecentEmojiWeightsAction
* @static
* @param {SyncAction.SyncActionValue.IRecentEmojiWeightsAction} message RecentEmojiWeightsAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
RecentEmojiWeightsAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a RecentEmojiWeightsAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.RecentEmojiWeightsAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.RecentEmojiWeightsAction} RecentEmojiWeightsAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
RecentEmojiWeightsAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.RecentEmojiWeightsAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.weights && message.weights.length))
message.weights = [];
message.weights.push($root.SyncAction.RecentEmojiWeight.decode(reader, reader.uint32()));
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a RecentEmojiWeightsAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.RecentEmojiWeightsAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.RecentEmojiWeightsAction} RecentEmojiWeightsAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
RecentEmojiWeightsAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a RecentEmojiWeightsAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.RecentEmojiWeightsAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
RecentEmojiWeightsAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
if (message.weights != null && message.hasOwnProperty("weights")) {
if (!Array.isArray(message.weights))
return "weights: array expected";
for (var i = 0; i < message.weights.length; ++i) {
var error = $root.SyncAction.RecentEmojiWeight.verify(message.weights[i]);
if (error)
return "weights." + error;
}
}
return null;
};
/**
* Creates a RecentEmojiWeightsAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.RecentEmojiWeightsAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.RecentEmojiWeightsAction} RecentEmojiWeightsAction
*/
RecentEmojiWeightsAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.RecentEmojiWeightsAction)
return object;
var message = new $root.SyncAction.SyncActionValue.RecentEmojiWeightsAction();
if (object.weights) {
if (!Array.isArray(object.weights))
throw TypeError(".SyncAction.SyncActionValue.RecentEmojiWeightsAction.weights: array expected");
message.weights = [];
for (var i = 0; i < object.weights.length; ++i) {
if (typeof object.weights[i] !== "object")
throw TypeError(".SyncAction.SyncActionValue.RecentEmojiWeightsAction.weights: object expected");
message.weights[i] = $root.SyncAction.RecentEmojiWeight.fromObject(object.weights[i]);
}
}
return message;
};
/**
* Creates a plain object from a RecentEmojiWeightsAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.RecentEmojiWeightsAction
* @static
* @param {SyncAction.SyncActionValue.RecentEmojiWeightsAction} message RecentEmojiWeightsAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
RecentEmojiWeightsAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.arrays || options.defaults)
object.weights = [];
if (message.weights && message.weights.length) {
object.weights = [];
for (var j = 0; j < message.weights.length; ++j)
object.weights[j] = $root.SyncAction.RecentEmojiWeight.toObject(message.weights[j], options);
}
return object;
};
/**
* Converts this RecentEmojiWeightsAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.RecentEmojiWeightsAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
RecentEmojiWeightsAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for RecentEmojiWeightsAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.RecentEmojiWeightsAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
RecentEmojiWeightsAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.RecentEmojiWeightsAction";
};
return RecentEmojiWeightsAction;
})();
SyncActionValue.RemoveRecentStickerAction = (function() {
/**
* Properties of a RemoveRecentStickerAction.
* @memberof SyncAction.SyncActionValue
* @interface IRemoveRecentStickerAction
* @property {number|Long|null} [lastStickerSentTs] RemoveRecentStickerAction lastStickerSentTs
*/
/**
* Constructs a new RemoveRecentStickerAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a RemoveRecentStickerAction.
* @implements IRemoveRecentStickerAction
* @constructor
* @param {SyncAction.SyncActionValue.IRemoveRecentStickerAction=} [properties] Properties to set
*/
function RemoveRecentStickerAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* RemoveRecentStickerAction lastStickerSentTs.
* @member {number|Long|null|undefined} lastStickerSentTs
* @memberof SyncAction.SyncActionValue.RemoveRecentStickerAction
* @instance
*/
RemoveRecentStickerAction.prototype.lastStickerSentTs = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* RemoveRecentStickerAction _lastStickerSentTs.
* @member {"lastStickerSentTs"|undefined} _lastStickerSentTs
* @memberof SyncAction.SyncActionValue.RemoveRecentStickerAction
* @instance
*/
Object.defineProperty(RemoveRecentStickerAction.prototype, "_lastStickerSentTs", {
get: $util.oneOfGetter($oneOfFields = ["lastStickerSentTs"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new RemoveRecentStickerAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.RemoveRecentStickerAction
* @static
* @param {SyncAction.SyncActionValue.IRemoveRecentStickerAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.RemoveRecentStickerAction} RemoveRecentStickerAction instance
*/
RemoveRecentStickerAction.create = function create(properties) {
return new RemoveRecentStickerAction(properties);
};
/**
* Encodes the specified RemoveRecentStickerAction message. Does not implicitly {@link SyncAction.SyncActionValue.RemoveRecentStickerAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.RemoveRecentStickerAction
* @static
* @param {SyncAction.SyncActionValue.IRemoveRecentStickerAction} message RemoveRecentStickerAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
RemoveRecentStickerAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.lastStickerSentTs != null && Object.hasOwnProperty.call(message, "lastStickerSentTs"))
writer.uint32(/* id 1, wireType 0 =*/8).int64(message.lastStickerSentTs);
return writer;
};
/**
* Encodes the specified RemoveRecentStickerAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.RemoveRecentStickerAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.RemoveRecentStickerAction
* @static
* @param {SyncAction.SyncActionValue.IRemoveRecentStickerAction} message RemoveRecentStickerAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
RemoveRecentStickerAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a RemoveRecentStickerAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.RemoveRecentStickerAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.RemoveRecentStickerAction} RemoveRecentStickerAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
RemoveRecentStickerAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.RemoveRecentStickerAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.lastStickerSentTs = reader.int64();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a RemoveRecentStickerAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.RemoveRecentStickerAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.RemoveRecentStickerAction} RemoveRecentStickerAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
RemoveRecentStickerAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a RemoveRecentStickerAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.RemoveRecentStickerAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
RemoveRecentStickerAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.lastStickerSentTs != null && message.hasOwnProperty("lastStickerSentTs")) {
properties._lastStickerSentTs = 1;
if (!$util.isInteger(message.lastStickerSentTs) && !(message.lastStickerSentTs && $util.isInteger(message.lastStickerSentTs.low) && $util.isInteger(message.lastStickerSentTs.high)))
return "lastStickerSentTs: integer|Long expected";
}
return null;
};
/**
* Creates a RemoveRecentStickerAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.RemoveRecentStickerAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.RemoveRecentStickerAction} RemoveRecentStickerAction
*/
RemoveRecentStickerAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.RemoveRecentStickerAction)
return object;
var message = new $root.SyncAction.SyncActionValue.RemoveRecentStickerAction();
if (object.lastStickerSentTs != null)
if ($util.Long)
(message.lastStickerSentTs = $util.Long.fromValue(object.lastStickerSentTs)).unsigned = false;
else if (typeof object.lastStickerSentTs === "string")
message.lastStickerSentTs = parseInt(object.lastStickerSentTs, 10);
else if (typeof object.lastStickerSentTs === "number")
message.lastStickerSentTs = object.lastStickerSentTs;
else if (typeof object.lastStickerSentTs === "object")
message.lastStickerSentTs = new $util.LongBits(object.lastStickerSentTs.low >>> 0, object.lastStickerSentTs.high >>> 0).toNumber();
return message;
};
/**
* Creates a plain object from a RemoveRecentStickerAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.RemoveRecentStickerAction
* @static
* @param {SyncAction.SyncActionValue.RemoveRecentStickerAction} message RemoveRecentStickerAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
RemoveRecentStickerAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.lastStickerSentTs != null && message.hasOwnProperty("lastStickerSentTs")) {
if (typeof message.lastStickerSentTs === "number")
object.lastStickerSentTs = options.longs === String ? String(message.lastStickerSentTs) : message.lastStickerSentTs;
else
object.lastStickerSentTs = options.longs === String ? $util.Long.prototype.toString.call(message.lastStickerSentTs) : options.longs === Number ? new $util.LongBits(message.lastStickerSentTs.low >>> 0, message.lastStickerSentTs.high >>> 0).toNumber() : message.lastStickerSentTs;
if (options.oneofs)
object._lastStickerSentTs = "lastStickerSentTs";
}
return object;
};
/**
* Converts this RemoveRecentStickerAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.RemoveRecentStickerAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
RemoveRecentStickerAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for RemoveRecentStickerAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.RemoveRecentStickerAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
RemoveRecentStickerAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.RemoveRecentStickerAction";
};
return RemoveRecentStickerAction;
})();
SyncActionValue.SecurityNotificationSetting = (function() {
/**
* Properties of a SecurityNotificationSetting.
* @memberof SyncAction.SyncActionValue
* @interface ISecurityNotificationSetting
* @property {boolean|null} [showNotification] SecurityNotificationSetting showNotification
*/
/**
* Constructs a new SecurityNotificationSetting.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a SecurityNotificationSetting.
* @implements ISecurityNotificationSetting
* @constructor
* @param {SyncAction.SyncActionValue.ISecurityNotificationSetting=} [properties] Properties to set
*/
function SecurityNotificationSetting(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* SecurityNotificationSetting showNotification.
* @member {boolean|null|undefined} showNotification
* @memberof SyncAction.SyncActionValue.SecurityNotificationSetting
* @instance
*/
SecurityNotificationSetting.prototype.showNotification = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* SecurityNotificationSetting _showNotification.
* @member {"showNotification"|undefined} _showNotification
* @memberof SyncAction.SyncActionValue.SecurityNotificationSetting
* @instance
*/
Object.defineProperty(SecurityNotificationSetting.prototype, "_showNotification", {
get: $util.oneOfGetter($oneOfFields = ["showNotification"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new SecurityNotificationSetting instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.SecurityNotificationSetting
* @static
* @param {SyncAction.SyncActionValue.ISecurityNotificationSetting=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.SecurityNotificationSetting} SecurityNotificationSetting instance
*/
SecurityNotificationSetting.create = function create(properties) {
return new SecurityNotificationSetting(properties);
};
/**
* Encodes the specified SecurityNotificationSetting message. Does not implicitly {@link SyncAction.SyncActionValue.SecurityNotificationSetting.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.SecurityNotificationSetting
* @static
* @param {SyncAction.SyncActionValue.ISecurityNotificationSetting} message SecurityNotificationSetting message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SecurityNotificationSetting.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.showNotification != null && Object.hasOwnProperty.call(message, "showNotification"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.showNotification);
return writer;
};
/**
* Encodes the specified SecurityNotificationSetting message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SecurityNotificationSetting.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.SecurityNotificationSetting
* @static
* @param {SyncAction.SyncActionValue.ISecurityNotificationSetting} message SecurityNotificationSetting message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SecurityNotificationSetting.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a SecurityNotificationSetting message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.SecurityNotificationSetting
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.SecurityNotificationSetting} SecurityNotificationSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SecurityNotificationSetting.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.SecurityNotificationSetting();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.showNotification = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a SecurityNotificationSetting message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.SecurityNotificationSetting
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.SecurityNotificationSetting} SecurityNotificationSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SecurityNotificationSetting.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a SecurityNotificationSetting message.
* @function verify
* @memberof SyncAction.SyncActionValue.SecurityNotificationSetting
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
SecurityNotificationSetting.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.showNotification != null && message.hasOwnProperty("showNotification")) {
properties._showNotification = 1;
if (typeof message.showNotification !== "boolean")
return "showNotification: boolean expected";
}
return null;
};
/**
* Creates a SecurityNotificationSetting message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.SecurityNotificationSetting
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.SecurityNotificationSetting} SecurityNotificationSetting
*/
SecurityNotificationSetting.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.SecurityNotificationSetting)
return object;
var message = new $root.SyncAction.SyncActionValue.SecurityNotificationSetting();
if (object.showNotification != null)
message.showNotification = Boolean(object.showNotification);
return message;
};
/**
* Creates a plain object from a SecurityNotificationSetting message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.SecurityNotificationSetting
* @static
* @param {SyncAction.SyncActionValue.SecurityNotificationSetting} message SecurityNotificationSetting
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
SecurityNotificationSetting.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.showNotification != null && message.hasOwnProperty("showNotification")) {
object.showNotification = message.showNotification;
if (options.oneofs)
object._showNotification = "showNotification";
}
return object;
};
/**
* Converts this SecurityNotificationSetting to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.SecurityNotificationSetting
* @instance
* @returns {Object.<string,*>} JSON object
*/
SecurityNotificationSetting.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for SecurityNotificationSetting
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.SecurityNotificationSetting
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
SecurityNotificationSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.SecurityNotificationSetting";
};
return SecurityNotificationSetting;
})();
SyncActionValue.StarAction = (function() {
/**
* Properties of a StarAction.
* @memberof SyncAction.SyncActionValue
* @interface IStarAction
* @property {boolean|null} [starred] StarAction starred
*/
/**
* Constructs a new StarAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a StarAction.
* @implements IStarAction
* @constructor
* @param {SyncAction.SyncActionValue.IStarAction=} [properties] Properties to set
*/
function StarAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* StarAction starred.
* @member {boolean|null|undefined} starred
* @memberof SyncAction.SyncActionValue.StarAction
* @instance
*/
StarAction.prototype.starred = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* StarAction _starred.
* @member {"starred"|undefined} _starred
* @memberof SyncAction.SyncActionValue.StarAction
* @instance
*/
Object.defineProperty(StarAction.prototype, "_starred", {
get: $util.oneOfGetter($oneOfFields = ["starred"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new StarAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.StarAction
* @static
* @param {SyncAction.SyncActionValue.IStarAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.StarAction} StarAction instance
*/
StarAction.create = function create(properties) {
return new StarAction(properties);
};
/**
* Encodes the specified StarAction message. Does not implicitly {@link SyncAction.SyncActionValue.StarAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.StarAction
* @static
* @param {SyncAction.SyncActionValue.IStarAction} message StarAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
StarAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.starred != null && Object.hasOwnProperty.call(message, "starred"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.starred);
return writer;
};
/**
* Encodes the specified StarAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.StarAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.StarAction
* @static
* @param {SyncAction.SyncActionValue.IStarAction} message StarAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
StarAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a StarAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.StarAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.StarAction} StarAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
StarAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.StarAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.starred = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a StarAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.StarAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.StarAction} StarAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
StarAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a StarAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.StarAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
StarAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.starred != null && message.hasOwnProperty("starred")) {
properties._starred = 1;
if (typeof message.starred !== "boolean")
return "starred: boolean expected";
}
return null;
};
/**
* Creates a StarAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.StarAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.StarAction} StarAction
*/
StarAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.StarAction)
return object;
var message = new $root.SyncAction.SyncActionValue.StarAction();
if (object.starred != null)
message.starred = Boolean(object.starred);
return message;
};
/**
* Creates a plain object from a StarAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.StarAction
* @static
* @param {SyncAction.SyncActionValue.StarAction} message StarAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
StarAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.starred != null && message.hasOwnProperty("starred")) {
object.starred = message.starred;
if (options.oneofs)
object._starred = "starred";
}
return object;
};
/**
* Converts this StarAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.StarAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
StarAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for StarAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.StarAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
StarAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.StarAction";
};
return StarAction;
})();
SyncActionValue.StatusPrivacyAction = (function() {
/**
* Properties of a StatusPrivacyAction.
* @memberof SyncAction.SyncActionValue
* @interface IStatusPrivacyAction
* @property {SyncAction.SyncActionValue.StatusPrivacyAction.StatusDistributionMode|null} [mode] StatusPrivacyAction mode
* @property {Array.<string>|null} [userJid] StatusPrivacyAction userJid
*/
/**
* Constructs a new StatusPrivacyAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a StatusPrivacyAction.
* @implements IStatusPrivacyAction
* @constructor
* @param {SyncAction.SyncActionValue.IStatusPrivacyAction=} [properties] Properties to set
*/
function StatusPrivacyAction(properties) {
this.userJid = [];
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* StatusPrivacyAction mode.
* @member {SyncAction.SyncActionValue.StatusPrivacyAction.StatusDistributionMode|null|undefined} mode
* @memberof SyncAction.SyncActionValue.StatusPrivacyAction
* @instance
*/
StatusPrivacyAction.prototype.mode = null;
/**
* StatusPrivacyAction userJid.
* @member {Array.<string>} userJid
* @memberof SyncAction.SyncActionValue.StatusPrivacyAction
* @instance
*/
StatusPrivacyAction.prototype.userJid = $util.emptyArray;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* StatusPrivacyAction _mode.
* @member {"mode"|undefined} _mode
* @memberof SyncAction.SyncActionValue.StatusPrivacyAction
* @instance
*/
Object.defineProperty(StatusPrivacyAction.prototype, "_mode", {
get: $util.oneOfGetter($oneOfFields = ["mode"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new StatusPrivacyAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.StatusPrivacyAction
* @static
* @param {SyncAction.SyncActionValue.IStatusPrivacyAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.StatusPrivacyAction} StatusPrivacyAction instance
*/
StatusPrivacyAction.create = function create(properties) {
return new StatusPrivacyAction(properties);
};
/**
* Encodes the specified StatusPrivacyAction message. Does not implicitly {@link SyncAction.SyncActionValue.StatusPrivacyAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.StatusPrivacyAction
* @static
* @param {SyncAction.SyncActionValue.IStatusPrivacyAction} message StatusPrivacyAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
StatusPrivacyAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
if (message.userJid != null && message.userJid.length)
for (var i = 0; i < message.userJid.length; ++i)
writer.uint32(/* id 2, wireType 2 =*/18).string(message.userJid[i]);
return writer;
};
/**
* Encodes the specified StatusPrivacyAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.StatusPrivacyAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.StatusPrivacyAction
* @static
* @param {SyncAction.SyncActionValue.IStatusPrivacyAction} message StatusPrivacyAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
StatusPrivacyAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a StatusPrivacyAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.StatusPrivacyAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.StatusPrivacyAction} StatusPrivacyAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
StatusPrivacyAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.StatusPrivacyAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.mode = reader.int32();
break;
}
case 2: {
if (!(message.userJid && message.userJid.length))
message.userJid = [];
message.userJid.push(reader.string());
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a StatusPrivacyAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.StatusPrivacyAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.StatusPrivacyAction} StatusPrivacyAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
StatusPrivacyAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a StatusPrivacyAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.StatusPrivacyAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
StatusPrivacyAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.mode != null && message.hasOwnProperty("mode")) {
properties._mode = 1;
switch (message.mode) {
default:
return "mode: enum value expected";
case 0:
case 1:
case 2:
break;
}
}
if (message.userJid != null && message.hasOwnProperty("userJid")) {
if (!Array.isArray(message.userJid))
return "userJid: array expected";
for (var i = 0; i < message.userJid.length; ++i)
if (!$util.isString(message.userJid[i]))
return "userJid: string[] expected";
}
return null;
};
/**
* Creates a StatusPrivacyAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.StatusPrivacyAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.StatusPrivacyAction} StatusPrivacyAction
*/
StatusPrivacyAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.StatusPrivacyAction)
return object;
var message = new $root.SyncAction.SyncActionValue.StatusPrivacyAction();
switch (object.mode) {
default:
if (typeof object.mode === "number") {
message.mode = object.mode;
break;
}
break;
case "ALLOW_LIST":
case 0:
message.mode = 0;
break;
case "DENY_LIST":
case 1:
message.mode = 1;
break;
case "CONTACTS":
case 2:
message.mode = 2;
break;
}
if (object.userJid) {
if (!Array.isArray(object.userJid))
throw TypeError(".SyncAction.SyncActionValue.StatusPrivacyAction.userJid: array expected");
message.userJid = [];
for (var i = 0; i < object.userJid.length; ++i)
message.userJid[i] = String(object.userJid[i]);
}
return message;
};
/**
* Creates a plain object from a StatusPrivacyAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.StatusPrivacyAction
* @static
* @param {SyncAction.SyncActionValue.StatusPrivacyAction} message StatusPrivacyAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
StatusPrivacyAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.arrays || options.defaults)
object.userJid = [];
if (message.mode != null && message.hasOwnProperty("mode")) {
object.mode = options.enums === String ? $root.SyncAction.SyncActionValue.StatusPrivacyAction.StatusDistributionMode[message.mode] === undefined ? message.mode : $root.SyncAction.SyncActionValue.StatusPrivacyAction.StatusDistributionMode[message.mode] : message.mode;
if (options.oneofs)
object._mode = "mode";
}
if (message.userJid && message.userJid.length) {
object.userJid = [];
for (var j = 0; j < message.userJid.length; ++j)
object.userJid[j] = message.userJid[j];
}
return object;
};
/**
* Converts this StatusPrivacyAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.StatusPrivacyAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
StatusPrivacyAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for StatusPrivacyAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.StatusPrivacyAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
StatusPrivacyAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.StatusPrivacyAction";
};
/**
* StatusDistributionMode enum.
* @name SyncAction.SyncActionValue.StatusPrivacyAction.StatusDistributionMode
* @enum {number}
* @property {number} ALLOW_LIST=0 ALLOW_LIST value
* @property {number} DENY_LIST=1 DENY_LIST value
* @property {number} CONTACTS=2 CONTACTS value
*/
StatusPrivacyAction.StatusDistributionMode = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "ALLOW_LIST"] = 0;
values[valuesById[1] = "DENY_LIST"] = 1;
values[valuesById[2] = "CONTACTS"] = 2;
return values;
})();
return StatusPrivacyAction;
})();
SyncActionValue.StickerAction = (function() {
/**
* Properties of a StickerAction.
* @memberof SyncAction.SyncActionValue
* @interface IStickerAction
* @property {string|null} [url] StickerAction url
* @property {Uint8Array|null} [fileEncSha256] StickerAction fileEncSha256
* @property {Uint8Array|null} [mediaKey] StickerAction mediaKey
* @property {string|null} [mimetype] StickerAction mimetype
* @property {number|null} [height] StickerAction height
* @property {number|null} [width] StickerAction width
* @property {string|null} [directPath] StickerAction directPath
* @property {number|Long|null} [fileLength] StickerAction fileLength
* @property {boolean|null} [isFavorite] StickerAction isFavorite
* @property {number|null} [deviceIdHint] StickerAction deviceIdHint
* @property {boolean|null} [isLottie] StickerAction isLottie
*/
/**
* Constructs a new StickerAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a StickerAction.
* @implements IStickerAction
* @constructor
* @param {SyncAction.SyncActionValue.IStickerAction=} [properties] Properties to set
*/
function StickerAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* StickerAction url.
* @member {string|null|undefined} url
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
StickerAction.prototype.url = null;
/**
* StickerAction fileEncSha256.
* @member {Uint8Array|null|undefined} fileEncSha256
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
StickerAction.prototype.fileEncSha256 = null;
/**
* StickerAction mediaKey.
* @member {Uint8Array|null|undefined} mediaKey
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
StickerAction.prototype.mediaKey = null;
/**
* StickerAction mimetype.
* @member {string|null|undefined} mimetype
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
StickerAction.prototype.mimetype = null;
/**
* StickerAction height.
* @member {number|null|undefined} height
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
StickerAction.prototype.height = null;
/**
* StickerAction width.
* @member {number|null|undefined} width
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
StickerAction.prototype.width = null;
/**
* StickerAction directPath.
* @member {string|null|undefined} directPath
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
StickerAction.prototype.directPath = null;
/**
* StickerAction fileLength.
* @member {number|Long|null|undefined} fileLength
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
StickerAction.prototype.fileLength = null;
/**
* StickerAction isFavorite.
* @member {boolean|null|undefined} isFavorite
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
StickerAction.prototype.isFavorite = null;
/**
* StickerAction deviceIdHint.
* @member {number|null|undefined} deviceIdHint
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
StickerAction.prototype.deviceIdHint = null;
/**
* StickerAction isLottie.
* @member {boolean|null|undefined} isLottie
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
StickerAction.prototype.isLottie = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* StickerAction _url.
* @member {"url"|undefined} _url
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
Object.defineProperty(StickerAction.prototype, "_url", {
get: $util.oneOfGetter($oneOfFields = ["url"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* StickerAction _fileEncSha256.
* @member {"fileEncSha256"|undefined} _fileEncSha256
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
Object.defineProperty(StickerAction.prototype, "_fileEncSha256", {
get: $util.oneOfGetter($oneOfFields = ["fileEncSha256"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* StickerAction _mediaKey.
* @member {"mediaKey"|undefined} _mediaKey
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
Object.defineProperty(StickerAction.prototype, "_mediaKey", {
get: $util.oneOfGetter($oneOfFields = ["mediaKey"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* StickerAction _mimetype.
* @member {"mimetype"|undefined} _mimetype
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
Object.defineProperty(StickerAction.prototype, "_mimetype", {
get: $util.oneOfGetter($oneOfFields = ["mimetype"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* StickerAction _height.
* @member {"height"|undefined} _height
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
Object.defineProperty(StickerAction.prototype, "_height", {
get: $util.oneOfGetter($oneOfFields = ["height"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* StickerAction _width.
* @member {"width"|undefined} _width
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
Object.defineProperty(StickerAction.prototype, "_width", {
get: $util.oneOfGetter($oneOfFields = ["width"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* StickerAction _directPath.
* @member {"directPath"|undefined} _directPath
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
Object.defineProperty(StickerAction.prototype, "_directPath", {
get: $util.oneOfGetter($oneOfFields = ["directPath"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* StickerAction _fileLength.
* @member {"fileLength"|undefined} _fileLength
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
Object.defineProperty(StickerAction.prototype, "_fileLength", {
get: $util.oneOfGetter($oneOfFields = ["fileLength"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* StickerAction _isFavorite.
* @member {"isFavorite"|undefined} _isFavorite
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
Object.defineProperty(StickerAction.prototype, "_isFavorite", {
get: $util.oneOfGetter($oneOfFields = ["isFavorite"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* StickerAction _deviceIdHint.
* @member {"deviceIdHint"|undefined} _deviceIdHint
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
Object.defineProperty(StickerAction.prototype, "_deviceIdHint", {
get: $util.oneOfGetter($oneOfFields = ["deviceIdHint"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* StickerAction _isLottie.
* @member {"isLottie"|undefined} _isLottie
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
*/
Object.defineProperty(StickerAction.prototype, "_isLottie", {
get: $util.oneOfGetter($oneOfFields = ["isLottie"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new StickerAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.StickerAction
* @static
* @param {SyncAction.SyncActionValue.IStickerAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.StickerAction} StickerAction instance
*/
StickerAction.create = function create(properties) {
return new StickerAction(properties);
};
/**
* Encodes the specified StickerAction message. Does not implicitly {@link SyncAction.SyncActionValue.StickerAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.StickerAction
* @static
* @param {SyncAction.SyncActionValue.IStickerAction} message StickerAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
StickerAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.url != null && Object.hasOwnProperty.call(message, "url"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
if (message.fileEncSha256 != null && Object.hasOwnProperty.call(message, "fileEncSha256"))
writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.fileEncSha256);
if (message.mediaKey != null && Object.hasOwnProperty.call(message, "mediaKey"))
writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.mediaKey);
if (message.mimetype != null && Object.hasOwnProperty.call(message, "mimetype"))
writer.uint32(/* id 4, wireType 2 =*/34).string(message.mimetype);
if (message.height != null && Object.hasOwnProperty.call(message, "height"))
writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.height);
if (message.width != null && Object.hasOwnProperty.call(message, "width"))
writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.width);
if (message.directPath != null && Object.hasOwnProperty.call(message, "directPath"))
writer.uint32(/* id 7, wireType 2 =*/58).string(message.directPath);
if (message.fileLength != null && Object.hasOwnProperty.call(message, "fileLength"))
writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.fileLength);
if (message.isFavorite != null && Object.hasOwnProperty.call(message, "isFavorite"))
writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isFavorite);
if (message.deviceIdHint != null && Object.hasOwnProperty.call(message, "deviceIdHint"))
writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.deviceIdHint);
if (message.isLottie != null && Object.hasOwnProperty.call(message, "isLottie"))
writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isLottie);
return writer;
};
/**
* Encodes the specified StickerAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.StickerAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.StickerAction
* @static
* @param {SyncAction.SyncActionValue.IStickerAction} message StickerAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
StickerAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a StickerAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.StickerAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.StickerAction} StickerAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
StickerAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.StickerAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.url = reader.string();
break;
}
case 2: {
message.fileEncSha256 = reader.bytes();
break;
}
case 3: {
message.mediaKey = reader.bytes();
break;
}
case 4: {
message.mimetype = reader.string();
break;
}
case 5: {
message.height = reader.uint32();
break;
}
case 6: {
message.width = reader.uint32();
break;
}
case 7: {
message.directPath = reader.string();
break;
}
case 8: {
message.fileLength = reader.uint64();
break;
}
case 9: {
message.isFavorite = reader.bool();
break;
}
case 10: {
message.deviceIdHint = reader.uint32();
break;
}
case 11: {
message.isLottie = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a StickerAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.StickerAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.StickerAction} StickerAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
StickerAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a StickerAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.StickerAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
StickerAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.url != null && message.hasOwnProperty("url")) {
properties._url = 1;
if (!$util.isString(message.url))
return "url: string expected";
}
if (message.fileEncSha256 != null && message.hasOwnProperty("fileEncSha256")) {
properties._fileEncSha256 = 1;
if (!(message.fileEncSha256 && typeof message.fileEncSha256.length === "number" || $util.isString(message.fileEncSha256)))
return "fileEncSha256: buffer expected";
}
if (message.mediaKey != null && message.hasOwnProperty("mediaKey")) {
properties._mediaKey = 1;
if (!(message.mediaKey && typeof message.mediaKey.length === "number" || $util.isString(message.mediaKey)))
return "mediaKey: buffer expected";
}
if (message.mimetype != null && message.hasOwnProperty("mimetype")) {
properties._mimetype = 1;
if (!$util.isString(message.mimetype))
return "mimetype: string expected";
}
if (message.height != null && message.hasOwnProperty("height")) {
properties._height = 1;
if (!$util.isInteger(message.height))
return "height: integer expected";
}
if (message.width != null && message.hasOwnProperty("width")) {
properties._width = 1;
if (!$util.isInteger(message.width))
return "width: integer expected";
}
if (message.directPath != null && message.hasOwnProperty("directPath")) {
properties._directPath = 1;
if (!$util.isString(message.directPath))
return "directPath: string expected";
}
if (message.fileLength != null && message.hasOwnProperty("fileLength")) {
properties._fileLength = 1;
if (!$util.isInteger(message.fileLength) && !(message.fileLength && $util.isInteger(message.fileLength.low) && $util.isInteger(message.fileLength.high)))
return "fileLength: integer|Long expected";
}
if (message.isFavorite != null && message.hasOwnProperty("isFavorite")) {
properties._isFavorite = 1;
if (typeof message.isFavorite !== "boolean")
return "isFavorite: boolean expected";
}
if (message.deviceIdHint != null && message.hasOwnProperty("deviceIdHint")) {
properties._deviceIdHint = 1;
if (!$util.isInteger(message.deviceIdHint))
return "deviceIdHint: integer expected";
}
if (message.isLottie != null && message.hasOwnProperty("isLottie")) {
properties._isLottie = 1;
if (typeof message.isLottie !== "boolean")
return "isLottie: boolean expected";
}
return null;
};
/**
* Creates a StickerAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.StickerAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.StickerAction} StickerAction
*/
StickerAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.StickerAction)
return object;
var message = new $root.SyncAction.SyncActionValue.StickerAction();
if (object.url != null)
message.url = String(object.url);
if (object.fileEncSha256 != null)
if (typeof object.fileEncSha256 === "string")
$util.base64.decode(object.fileEncSha256, message.fileEncSha256 = $util.newBuffer($util.base64.length(object.fileEncSha256)), 0);
else if (object.fileEncSha256.length >= 0)
message.fileEncSha256 = object.fileEncSha256;
if (object.mediaKey != null)
if (typeof object.mediaKey === "string")
$util.base64.decode(object.mediaKey, message.mediaKey = $util.newBuffer($util.base64.length(object.mediaKey)), 0);
else if (object.mediaKey.length >= 0)
message.mediaKey = object.mediaKey;
if (object.mimetype != null)
message.mimetype = String(object.mimetype);
if (object.height != null)
message.height = object.height >>> 0;
if (object.width != null)
message.width = object.width >>> 0;
if (object.directPath != null)
message.directPath = String(object.directPath);
if (object.fileLength != null)
if ($util.Long)
(message.fileLength = $util.Long.fromValue(object.fileLength)).unsigned = true;
else if (typeof object.fileLength === "string")
message.fileLength = parseInt(object.fileLength, 10);
else if (typeof object.fileLength === "number")
message.fileLength = object.fileLength;
else if (typeof object.fileLength === "object")
message.fileLength = new $util.LongBits(object.fileLength.low >>> 0, object.fileLength.high >>> 0).toNumber(true);
if (object.isFavorite != null)
message.isFavorite = Boolean(object.isFavorite);
if (object.deviceIdHint != null)
message.deviceIdHint = object.deviceIdHint >>> 0;
if (object.isLottie != null)
message.isLottie = Boolean(object.isLottie);
return message;
};
/**
* Creates a plain object from a StickerAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.StickerAction
* @static
* @param {SyncAction.SyncActionValue.StickerAction} message StickerAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
StickerAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.url != null && message.hasOwnProperty("url")) {
object.url = message.url;
if (options.oneofs)
object._url = "url";
}
if (message.fileEncSha256 != null && message.hasOwnProperty("fileEncSha256")) {
object.fileEncSha256 = options.bytes === String ? $util.base64.encode(message.fileEncSha256, 0, message.fileEncSha256.length) : options.bytes === Array ? Array.prototype.slice.call(message.fileEncSha256) : message.fileEncSha256;
if (options.oneofs)
object._fileEncSha256 = "fileEncSha256";
}
if (message.mediaKey != null && message.hasOwnProperty("mediaKey")) {
object.mediaKey = options.bytes === String ? $util.base64.encode(message.mediaKey, 0, message.mediaKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.mediaKey) : message.mediaKey;
if (options.oneofs)
object._mediaKey = "mediaKey";
}
if (message.mimetype != null && message.hasOwnProperty("mimetype")) {
object.mimetype = message.mimetype;
if (options.oneofs)
object._mimetype = "mimetype";
}
if (message.height != null && message.hasOwnProperty("height")) {
object.height = message.height;
if (options.oneofs)
object._height = "height";
}
if (message.width != null && message.hasOwnProperty("width")) {
object.width = message.width;
if (options.oneofs)
object._width = "width";
}
if (message.directPath != null && message.hasOwnProperty("directPath")) {
object.directPath = message.directPath;
if (options.oneofs)
object._directPath = "directPath";
}
if (message.fileLength != null && message.hasOwnProperty("fileLength")) {
if (typeof message.fileLength === "number")
object.fileLength = options.longs === String ? String(message.fileLength) : message.fileLength;
else
object.fileLength = options.longs === String ? $util.Long.prototype.toString.call(message.fileLength) : options.longs === Number ? new $util.LongBits(message.fileLength.low >>> 0, message.fileLength.high >>> 0).toNumber(true) : message.fileLength;
if (options.oneofs)
object._fileLength = "fileLength";
}
if (message.isFavorite != null && message.hasOwnProperty("isFavorite")) {
object.isFavorite = message.isFavorite;
if (options.oneofs)
object._isFavorite = "isFavorite";
}
if (message.deviceIdHint != null && message.hasOwnProperty("deviceIdHint")) {
object.deviceIdHint = message.deviceIdHint;
if (options.oneofs)
object._deviceIdHint = "deviceIdHint";
}
if (message.isLottie != null && message.hasOwnProperty("isLottie")) {
object.isLottie = message.isLottie;
if (options.oneofs)
object._isLottie = "isLottie";
}
return object;
};
/**
* Converts this StickerAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.StickerAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
StickerAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for StickerAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.StickerAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
StickerAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.StickerAction";
};
return StickerAction;
})();
SyncActionValue.SubscriptionAction = (function() {
/**
* Properties of a SubscriptionAction.
* @memberof SyncAction.SyncActionValue
* @interface ISubscriptionAction
* @property {boolean|null} [isDeactivated] SubscriptionAction isDeactivated
* @property {boolean|null} [isAutoRenewing] SubscriptionAction isAutoRenewing
* @property {number|Long|null} [expirationDate] SubscriptionAction expirationDate
*/
/**
* Constructs a new SubscriptionAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a SubscriptionAction.
* @implements ISubscriptionAction
* @constructor
* @param {SyncAction.SyncActionValue.ISubscriptionAction=} [properties] Properties to set
*/
function SubscriptionAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* SubscriptionAction isDeactivated.
* @member {boolean|null|undefined} isDeactivated
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @instance
*/
SubscriptionAction.prototype.isDeactivated = null;
/**
* SubscriptionAction isAutoRenewing.
* @member {boolean|null|undefined} isAutoRenewing
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @instance
*/
SubscriptionAction.prototype.isAutoRenewing = null;
/**
* SubscriptionAction expirationDate.
* @member {number|Long|null|undefined} expirationDate
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @instance
*/
SubscriptionAction.prototype.expirationDate = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* SubscriptionAction _isDeactivated.
* @member {"isDeactivated"|undefined} _isDeactivated
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @instance
*/
Object.defineProperty(SubscriptionAction.prototype, "_isDeactivated", {
get: $util.oneOfGetter($oneOfFields = ["isDeactivated"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SubscriptionAction _isAutoRenewing.
* @member {"isAutoRenewing"|undefined} _isAutoRenewing
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @instance
*/
Object.defineProperty(SubscriptionAction.prototype, "_isAutoRenewing", {
get: $util.oneOfGetter($oneOfFields = ["isAutoRenewing"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SubscriptionAction _expirationDate.
* @member {"expirationDate"|undefined} _expirationDate
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @instance
*/
Object.defineProperty(SubscriptionAction.prototype, "_expirationDate", {
get: $util.oneOfGetter($oneOfFields = ["expirationDate"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new SubscriptionAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @static
* @param {SyncAction.SyncActionValue.ISubscriptionAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.SubscriptionAction} SubscriptionAction instance
*/
SubscriptionAction.create = function create(properties) {
return new SubscriptionAction(properties);
};
/**
* Encodes the specified SubscriptionAction message. Does not implicitly {@link SyncAction.SyncActionValue.SubscriptionAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @static
* @param {SyncAction.SyncActionValue.ISubscriptionAction} message SubscriptionAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SubscriptionAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.isDeactivated != null && Object.hasOwnProperty.call(message, "isDeactivated"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isDeactivated);
if (message.isAutoRenewing != null && Object.hasOwnProperty.call(message, "isAutoRenewing"))
writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isAutoRenewing);
if (message.expirationDate != null && Object.hasOwnProperty.call(message, "expirationDate"))
writer.uint32(/* id 3, wireType 0 =*/24).int64(message.expirationDate);
return writer;
};
/**
* Encodes the specified SubscriptionAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SubscriptionAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @static
* @param {SyncAction.SyncActionValue.ISubscriptionAction} message SubscriptionAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SubscriptionAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a SubscriptionAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.SubscriptionAction} SubscriptionAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SubscriptionAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.SubscriptionAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.isDeactivated = reader.bool();
break;
}
case 2: {
message.isAutoRenewing = reader.bool();
break;
}
case 3: {
message.expirationDate = reader.int64();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a SubscriptionAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.SubscriptionAction} SubscriptionAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SubscriptionAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a SubscriptionAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
SubscriptionAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.isDeactivated != null && message.hasOwnProperty("isDeactivated")) {
properties._isDeactivated = 1;
if (typeof message.isDeactivated !== "boolean")
return "isDeactivated: boolean expected";
}
if (message.isAutoRenewing != null && message.hasOwnProperty("isAutoRenewing")) {
properties._isAutoRenewing = 1;
if (typeof message.isAutoRenewing !== "boolean")
return "isAutoRenewing: boolean expected";
}
if (message.expirationDate != null && message.hasOwnProperty("expirationDate")) {
properties._expirationDate = 1;
if (!$util.isInteger(message.expirationDate) && !(message.expirationDate && $util.isInteger(message.expirationDate.low) && $util.isInteger(message.expirationDate.high)))
return "expirationDate: integer|Long expected";
}
return null;
};
/**
* Creates a SubscriptionAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.SubscriptionAction} SubscriptionAction
*/
SubscriptionAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.SubscriptionAction)
return object;
var message = new $root.SyncAction.SyncActionValue.SubscriptionAction();
if (object.isDeactivated != null)
message.isDeactivated = Boolean(object.isDeactivated);
if (object.isAutoRenewing != null)
message.isAutoRenewing = Boolean(object.isAutoRenewing);
if (object.expirationDate != null)
if ($util.Long)
(message.expirationDate = $util.Long.fromValue(object.expirationDate)).unsigned = false;
else if (typeof object.expirationDate === "string")
message.expirationDate = parseInt(object.expirationDate, 10);
else if (typeof object.expirationDate === "number")
message.expirationDate = object.expirationDate;
else if (typeof object.expirationDate === "object")
message.expirationDate = new $util.LongBits(object.expirationDate.low >>> 0, object.expirationDate.high >>> 0).toNumber();
return message;
};
/**
* Creates a plain object from a SubscriptionAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @static
* @param {SyncAction.SyncActionValue.SubscriptionAction} message SubscriptionAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
SubscriptionAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.isDeactivated != null && message.hasOwnProperty("isDeactivated")) {
object.isDeactivated = message.isDeactivated;
if (options.oneofs)
object._isDeactivated = "isDeactivated";
}
if (message.isAutoRenewing != null && message.hasOwnProperty("isAutoRenewing")) {
object.isAutoRenewing = message.isAutoRenewing;
if (options.oneofs)
object._isAutoRenewing = "isAutoRenewing";
}
if (message.expirationDate != null && message.hasOwnProperty("expirationDate")) {
if (typeof message.expirationDate === "number")
object.expirationDate = options.longs === String ? String(message.expirationDate) : message.expirationDate;
else
object.expirationDate = options.longs === String ? $util.Long.prototype.toString.call(message.expirationDate) : options.longs === Number ? new $util.LongBits(message.expirationDate.low >>> 0, message.expirationDate.high >>> 0).toNumber() : message.expirationDate;
if (options.oneofs)
object._expirationDate = "expirationDate";
}
return object;
};
/**
* Converts this SubscriptionAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
SubscriptionAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for SubscriptionAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.SubscriptionAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
SubscriptionAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.SubscriptionAction";
};
return SubscriptionAction;
})();
SyncActionValue.SyncActionMessage = (function() {
/**
* Properties of a SyncActionMessage.
* @memberof SyncAction.SyncActionValue
* @interface ISyncActionMessage
* @property {Protocol.IMessageKey|null} [key] SyncActionMessage key
* @property {number|Long|null} [timestamp] SyncActionMessage timestamp
*/
/**
* Constructs a new SyncActionMessage.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a SyncActionMessage.
* @implements ISyncActionMessage
* @constructor
* @param {SyncAction.SyncActionValue.ISyncActionMessage=} [properties] Properties to set
*/
function SyncActionMessage(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* SyncActionMessage key.
* @member {Protocol.IMessageKey|null|undefined} key
* @memberof SyncAction.SyncActionValue.SyncActionMessage
* @instance
*/
SyncActionMessage.prototype.key = null;
/**
* SyncActionMessage timestamp.
* @member {number|Long|null|undefined} timestamp
* @memberof SyncAction.SyncActionValue.SyncActionMessage
* @instance
*/
SyncActionMessage.prototype.timestamp = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* SyncActionMessage _key.
* @member {"key"|undefined} _key
* @memberof SyncAction.SyncActionValue.SyncActionMessage
* @instance
*/
Object.defineProperty(SyncActionMessage.prototype, "_key", {
get: $util.oneOfGetter($oneOfFields = ["key"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionMessage _timestamp.
* @member {"timestamp"|undefined} _timestamp
* @memberof SyncAction.SyncActionValue.SyncActionMessage
* @instance
*/
Object.defineProperty(SyncActionMessage.prototype, "_timestamp", {
get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new SyncActionMessage instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.SyncActionMessage
* @static
* @param {SyncAction.SyncActionValue.ISyncActionMessage=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.SyncActionMessage} SyncActionMessage instance
*/
SyncActionMessage.create = function create(properties) {
return new SyncActionMessage(properties);
};
/**
* Encodes the specified SyncActionMessage message. Does not implicitly {@link SyncAction.SyncActionValue.SyncActionMessage.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.SyncActionMessage
* @static
* @param {SyncAction.SyncActionValue.ISyncActionMessage} message SyncActionMessage message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SyncActionMessage.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.key != null && Object.hasOwnProperty.call(message, "key"))
$root.Protocol.MessageKey.encode(message.key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
return writer;
};
/**
* Encodes the specified SyncActionMessage message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SyncActionMessage.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.SyncActionMessage
* @static
* @param {SyncAction.SyncActionValue.ISyncActionMessage} message SyncActionMessage message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SyncActionMessage.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a SyncActionMessage message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.SyncActionMessage
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.SyncActionMessage} SyncActionMessage
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SyncActionMessage.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.SyncActionMessage();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.key = $root.Protocol.MessageKey.decode(reader, reader.uint32());
break;
}
case 2: {
message.timestamp = reader.int64();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a SyncActionMessage message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.SyncActionMessage
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.SyncActionMessage} SyncActionMessage
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SyncActionMessage.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a SyncActionMessage message.
* @function verify
* @memberof SyncAction.SyncActionValue.SyncActionMessage
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
SyncActionMessage.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.key != null && message.hasOwnProperty("key")) {
properties._key = 1;
{
var error = $root.Protocol.MessageKey.verify(message.key);
if (error)
return "key." + error;
}
}
if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
properties._timestamp = 1;
if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
return "timestamp: integer|Long expected";
}
return null;
};
/**
* Creates a SyncActionMessage message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.SyncActionMessage
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.SyncActionMessage} SyncActionMessage
*/
SyncActionMessage.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.SyncActionMessage)
return object;
var message = new $root.SyncAction.SyncActionValue.SyncActionMessage();
if (object.key != null) {
if (typeof object.key !== "object")
throw TypeError(".SyncAction.SyncActionValue.SyncActionMessage.key: object expected");
message.key = $root.Protocol.MessageKey.fromObject(object.key);
}
if (object.timestamp != null)
if ($util.Long)
(message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
else if (typeof object.timestamp === "string")
message.timestamp = parseInt(object.timestamp, 10);
else if (typeof object.timestamp === "number")
message.timestamp = object.timestamp;
else if (typeof object.timestamp === "object")
message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
return message;
};
/**
* Creates a plain object from a SyncActionMessage message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.SyncActionMessage
* @static
* @param {SyncAction.SyncActionValue.SyncActionMessage} message SyncActionMessage
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
SyncActionMessage.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.key != null && message.hasOwnProperty("key")) {
object.key = $root.Protocol.MessageKey.toObject(message.key, options);
if (options.oneofs)
object._key = "key";
}
if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
if (typeof message.timestamp === "number")
object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
else
object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
if (options.oneofs)
object._timestamp = "timestamp";
}
return object;
};
/**
* Converts this SyncActionMessage to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.SyncActionMessage
* @instance
* @returns {Object.<string,*>} JSON object
*/
SyncActionMessage.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for SyncActionMessage
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.SyncActionMessage
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
SyncActionMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.SyncActionMessage";
};
return SyncActionMessage;
})();
SyncActionValue.SyncActionMessageRange = (function() {
/**
* Properties of a SyncActionMessageRange.
* @memberof SyncAction.SyncActionValue
* @interface ISyncActionMessageRange
* @property {number|Long|null} [lastMessageTimestamp] SyncActionMessageRange lastMessageTimestamp
* @property {number|Long|null} [lastSystemMessageTimestamp] SyncActionMessageRange lastSystemMessageTimestamp
* @property {Array.<SyncAction.SyncActionValue.ISyncActionMessage>|null} [messages] SyncActionMessageRange messages
*/
/**
* Constructs a new SyncActionMessageRange.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a SyncActionMessageRange.
* @implements ISyncActionMessageRange
* @constructor
* @param {SyncAction.SyncActionValue.ISyncActionMessageRange=} [properties] Properties to set
*/
function SyncActionMessageRange(properties) {
this.messages = [];
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* SyncActionMessageRange lastMessageTimestamp.
* @member {number|Long|null|undefined} lastMessageTimestamp
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @instance
*/
SyncActionMessageRange.prototype.lastMessageTimestamp = null;
/**
* SyncActionMessageRange lastSystemMessageTimestamp.
* @member {number|Long|null|undefined} lastSystemMessageTimestamp
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @instance
*/
SyncActionMessageRange.prototype.lastSystemMessageTimestamp = null;
/**
* SyncActionMessageRange messages.
* @member {Array.<SyncAction.SyncActionValue.ISyncActionMessage>} messages
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @instance
*/
SyncActionMessageRange.prototype.messages = $util.emptyArray;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* SyncActionMessageRange _lastMessageTimestamp.
* @member {"lastMessageTimestamp"|undefined} _lastMessageTimestamp
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @instance
*/
Object.defineProperty(SyncActionMessageRange.prototype, "_lastMessageTimestamp", {
get: $util.oneOfGetter($oneOfFields = ["lastMessageTimestamp"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SyncActionMessageRange _lastSystemMessageTimestamp.
* @member {"lastSystemMessageTimestamp"|undefined} _lastSystemMessageTimestamp
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @instance
*/
Object.defineProperty(SyncActionMessageRange.prototype, "_lastSystemMessageTimestamp", {
get: $util.oneOfGetter($oneOfFields = ["lastSystemMessageTimestamp"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new SyncActionMessageRange instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @static
* @param {SyncAction.SyncActionValue.ISyncActionMessageRange=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.SyncActionMessageRange} SyncActionMessageRange instance
*/
SyncActionMessageRange.create = function create(properties) {
return new SyncActionMessageRange(properties);
};
/**
* Encodes the specified SyncActionMessageRange message. Does not implicitly {@link SyncAction.SyncActionValue.SyncActionMessageRange.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @static
* @param {SyncAction.SyncActionValue.ISyncActionMessageRange} message SyncActionMessageRange message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SyncActionMessageRange.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.lastMessageTimestamp != null && Object.hasOwnProperty.call(message, "lastMessageTimestamp"))
writer.uint32(/* id 1, wireType 0 =*/8).int64(message.lastMessageTimestamp);
if (message.lastSystemMessageTimestamp != null && Object.hasOwnProperty.call(message, "lastSystemMessageTimestamp"))
writer.uint32(/* id 2, wireType 0 =*/16).int64(message.lastSystemMessageTimestamp);
if (message.messages != null && message.messages.length)
for (var i = 0; i < message.messages.length; ++i)
$root.SyncAction.SyncActionValue.SyncActionMessage.encode(message.messages[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
return writer;
};
/**
* Encodes the specified SyncActionMessageRange message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SyncActionMessageRange.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @static
* @param {SyncAction.SyncActionValue.ISyncActionMessageRange} message SyncActionMessageRange message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SyncActionMessageRange.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a SyncActionMessageRange message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.SyncActionMessageRange} SyncActionMessageRange
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SyncActionMessageRange.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.SyncActionMessageRange();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.lastMessageTimestamp = reader.int64();
break;
}
case 2: {
message.lastSystemMessageTimestamp = reader.int64();
break;
}
case 3: {
if (!(message.messages && message.messages.length))
message.messages = [];
message.messages.push($root.SyncAction.SyncActionValue.SyncActionMessage.decode(reader, reader.uint32()));
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a SyncActionMessageRange message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.SyncActionMessageRange} SyncActionMessageRange
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SyncActionMessageRange.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a SyncActionMessageRange message.
* @function verify
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
SyncActionMessageRange.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.lastMessageTimestamp != null && message.hasOwnProperty("lastMessageTimestamp")) {
properties._lastMessageTimestamp = 1;
if (!$util.isInteger(message.lastMessageTimestamp) && !(message.lastMessageTimestamp && $util.isInteger(message.lastMessageTimestamp.low) && $util.isInteger(message.lastMessageTimestamp.high)))
return "lastMessageTimestamp: integer|Long expected";
}
if (message.lastSystemMessageTimestamp != null && message.hasOwnProperty("lastSystemMessageTimestamp")) {
properties._lastSystemMessageTimestamp = 1;
if (!$util.isInteger(message.lastSystemMessageTimestamp) && !(message.lastSystemMessageTimestamp && $util.isInteger(message.lastSystemMessageTimestamp.low) && $util.isInteger(message.lastSystemMessageTimestamp.high)))
return "lastSystemMessageTimestamp: integer|Long expected";
}
if (message.messages != null && message.hasOwnProperty("messages")) {
if (!Array.isArray(message.messages))
return "messages: array expected";
for (var i = 0; i < message.messages.length; ++i) {
var error = $root.SyncAction.SyncActionValue.SyncActionMessage.verify(message.messages[i]);
if (error)
return "messages." + error;
}
}
return null;
};
/**
* Creates a SyncActionMessageRange message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.SyncActionMessageRange} SyncActionMessageRange
*/
SyncActionMessageRange.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.SyncActionMessageRange)
return object;
var message = new $root.SyncAction.SyncActionValue.SyncActionMessageRange();
if (object.lastMessageTimestamp != null)
if ($util.Long)
(message.lastMessageTimestamp = $util.Long.fromValue(object.lastMessageTimestamp)).unsigned = false;
else if (typeof object.lastMessageTimestamp === "string")
message.lastMessageTimestamp = parseInt(object.lastMessageTimestamp, 10);
else if (typeof object.lastMessageTimestamp === "number")
message.lastMessageTimestamp = object.lastMessageTimestamp;
else if (typeof object.lastMessageTimestamp === "object")
message.lastMessageTimestamp = new $util.LongBits(object.lastMessageTimestamp.low >>> 0, object.lastMessageTimestamp.high >>> 0).toNumber();
if (object.lastSystemMessageTimestamp != null)
if ($util.Long)
(message.lastSystemMessageTimestamp = $util.Long.fromValue(object.lastSystemMessageTimestamp)).unsigned = false;
else if (typeof object.lastSystemMessageTimestamp === "string")
message.lastSystemMessageTimestamp = parseInt(object.lastSystemMessageTimestamp, 10);
else if (typeof object.lastSystemMessageTimestamp === "number")
message.lastSystemMessageTimestamp = object.lastSystemMessageTimestamp;
else if (typeof object.lastSystemMessageTimestamp === "object")
message.lastSystemMessageTimestamp = new $util.LongBits(object.lastSystemMessageTimestamp.low >>> 0, object.lastSystemMessageTimestamp.high >>> 0).toNumber();
if (object.messages) {
if (!Array.isArray(object.messages))
throw TypeError(".SyncAction.SyncActionValue.SyncActionMessageRange.messages: array expected");
message.messages = [];
for (var i = 0; i < object.messages.length; ++i) {
if (typeof object.messages[i] !== "object")
throw TypeError(".SyncAction.SyncActionValue.SyncActionMessageRange.messages: object expected");
message.messages[i] = $root.SyncAction.SyncActionValue.SyncActionMessage.fromObject(object.messages[i]);
}
}
return message;
};
/**
* Creates a plain object from a SyncActionMessageRange message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @static
* @param {SyncAction.SyncActionValue.SyncActionMessageRange} message SyncActionMessageRange
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
SyncActionMessageRange.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.arrays || options.defaults)
object.messages = [];
if (message.lastMessageTimestamp != null && message.hasOwnProperty("lastMessageTimestamp")) {
if (typeof message.lastMessageTimestamp === "number")
object.lastMessageTimestamp = options.longs === String ? String(message.lastMessageTimestamp) : message.lastMessageTimestamp;
else
object.lastMessageTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.lastMessageTimestamp) : options.longs === Number ? new $util.LongBits(message.lastMessageTimestamp.low >>> 0, message.lastMessageTimestamp.high >>> 0).toNumber() : message.lastMessageTimestamp;
if (options.oneofs)
object._lastMessageTimestamp = "lastMessageTimestamp";
}
if (message.lastSystemMessageTimestamp != null && message.hasOwnProperty("lastSystemMessageTimestamp")) {
if (typeof message.lastSystemMessageTimestamp === "number")
object.lastSystemMessageTimestamp = options.longs === String ? String(message.lastSystemMessageTimestamp) : message.lastSystemMessageTimestamp;
else
object.lastSystemMessageTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.lastSystemMessageTimestamp) : options.longs === Number ? new $util.LongBits(message.lastSystemMessageTimestamp.low >>> 0, message.lastSystemMessageTimestamp.high >>> 0).toNumber() : message.lastSystemMessageTimestamp;
if (options.oneofs)
object._lastSystemMessageTimestamp = "lastSystemMessageTimestamp";
}
if (message.messages && message.messages.length) {
object.messages = [];
for (var j = 0; j < message.messages.length; ++j)
object.messages[j] = $root.SyncAction.SyncActionValue.SyncActionMessage.toObject(message.messages[j], options);
}
return object;
};
/**
* Converts this SyncActionMessageRange to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @instance
* @returns {Object.<string,*>} JSON object
*/
SyncActionMessageRange.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for SyncActionMessageRange
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.SyncActionMessageRange
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
SyncActionMessageRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.SyncActionMessageRange";
};
return SyncActionMessageRange;
})();
SyncActionValue.TimeFormatAction = (function() {
/**
* Properties of a TimeFormatAction.
* @memberof SyncAction.SyncActionValue
* @interface ITimeFormatAction
* @property {boolean|null} [isTwentyFourHourFormatEnabled] TimeFormatAction isTwentyFourHourFormatEnabled
*/
/**
* Constructs a new TimeFormatAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a TimeFormatAction.
* @implements ITimeFormatAction
* @constructor
* @param {SyncAction.SyncActionValue.ITimeFormatAction=} [properties] Properties to set
*/
function TimeFormatAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* TimeFormatAction isTwentyFourHourFormatEnabled.
* @member {boolean|null|undefined} isTwentyFourHourFormatEnabled
* @memberof SyncAction.SyncActionValue.TimeFormatAction
* @instance
*/
TimeFormatAction.prototype.isTwentyFourHourFormatEnabled = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* TimeFormatAction _isTwentyFourHourFormatEnabled.
* @member {"isTwentyFourHourFormatEnabled"|undefined} _isTwentyFourHourFormatEnabled
* @memberof SyncAction.SyncActionValue.TimeFormatAction
* @instance
*/
Object.defineProperty(TimeFormatAction.prototype, "_isTwentyFourHourFormatEnabled", {
get: $util.oneOfGetter($oneOfFields = ["isTwentyFourHourFormatEnabled"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new TimeFormatAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.TimeFormatAction
* @static
* @param {SyncAction.SyncActionValue.ITimeFormatAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.TimeFormatAction} TimeFormatAction instance
*/
TimeFormatAction.create = function create(properties) {
return new TimeFormatAction(properties);
};
/**
* Encodes the specified TimeFormatAction message. Does not implicitly {@link SyncAction.SyncActionValue.TimeFormatAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.TimeFormatAction
* @static
* @param {SyncAction.SyncActionValue.ITimeFormatAction} message TimeFormatAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
TimeFormatAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.isTwentyFourHourFormatEnabled != null && Object.hasOwnProperty.call(message, "isTwentyFourHourFormatEnabled"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isTwentyFourHourFormatEnabled);
return writer;
};
/**
* Encodes the specified TimeFormatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.TimeFormatAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.TimeFormatAction
* @static
* @param {SyncAction.SyncActionValue.ITimeFormatAction} message TimeFormatAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
TimeFormatAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a TimeFormatAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.TimeFormatAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.TimeFormatAction} TimeFormatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
TimeFormatAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.TimeFormatAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.isTwentyFourHourFormatEnabled = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a TimeFormatAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.TimeFormatAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.TimeFormatAction} TimeFormatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
TimeFormatAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a TimeFormatAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.TimeFormatAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
TimeFormatAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.isTwentyFourHourFormatEnabled != null && message.hasOwnProperty("isTwentyFourHourFormatEnabled")) {
properties._isTwentyFourHourFormatEnabled = 1;
if (typeof message.isTwentyFourHourFormatEnabled !== "boolean")
return "isTwentyFourHourFormatEnabled: boolean expected";
}
return null;
};
/**
* Creates a TimeFormatAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.TimeFormatAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.TimeFormatAction} TimeFormatAction
*/
TimeFormatAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.TimeFormatAction)
return object;
var message = new $root.SyncAction.SyncActionValue.TimeFormatAction();
if (object.isTwentyFourHourFormatEnabled != null)
message.isTwentyFourHourFormatEnabled = Boolean(object.isTwentyFourHourFormatEnabled);
return message;
};
/**
* Creates a plain object from a TimeFormatAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.TimeFormatAction
* @static
* @param {SyncAction.SyncActionValue.TimeFormatAction} message TimeFormatAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
TimeFormatAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.isTwentyFourHourFormatEnabled != null && message.hasOwnProperty("isTwentyFourHourFormatEnabled")) {
object.isTwentyFourHourFormatEnabled = message.isTwentyFourHourFormatEnabled;
if (options.oneofs)
object._isTwentyFourHourFormatEnabled = "isTwentyFourHourFormatEnabled";
}
return object;
};
/**
* Converts this TimeFormatAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.TimeFormatAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
TimeFormatAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for TimeFormatAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.TimeFormatAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
TimeFormatAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.TimeFormatAction";
};
return TimeFormatAction;
})();
SyncActionValue.UnarchiveChatsSetting = (function() {
/**
* Properties of an UnarchiveChatsSetting.
* @memberof SyncAction.SyncActionValue
* @interface IUnarchiveChatsSetting
* @property {boolean|null} [unarchiveChats] UnarchiveChatsSetting unarchiveChats
*/
/**
* Constructs a new UnarchiveChatsSetting.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents an UnarchiveChatsSetting.
* @implements IUnarchiveChatsSetting
* @constructor
* @param {SyncAction.SyncActionValue.IUnarchiveChatsSetting=} [properties] Properties to set
*/
function UnarchiveChatsSetting(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* UnarchiveChatsSetting unarchiveChats.
* @member {boolean|null|undefined} unarchiveChats
* @memberof SyncAction.SyncActionValue.UnarchiveChatsSetting
* @instance
*/
UnarchiveChatsSetting.prototype.unarchiveChats = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* UnarchiveChatsSetting _unarchiveChats.
* @member {"unarchiveChats"|undefined} _unarchiveChats
* @memberof SyncAction.SyncActionValue.UnarchiveChatsSetting
* @instance
*/
Object.defineProperty(UnarchiveChatsSetting.prototype, "_unarchiveChats", {
get: $util.oneOfGetter($oneOfFields = ["unarchiveChats"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new UnarchiveChatsSetting instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.UnarchiveChatsSetting
* @static
* @param {SyncAction.SyncActionValue.IUnarchiveChatsSetting=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.UnarchiveChatsSetting} UnarchiveChatsSetting instance
*/
UnarchiveChatsSetting.create = function create(properties) {
return new UnarchiveChatsSetting(properties);
};
/**
* Encodes the specified UnarchiveChatsSetting message. Does not implicitly {@link SyncAction.SyncActionValue.UnarchiveChatsSetting.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.UnarchiveChatsSetting
* @static
* @param {SyncAction.SyncActionValue.IUnarchiveChatsSetting} message UnarchiveChatsSetting message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
UnarchiveChatsSetting.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.unarchiveChats != null && Object.hasOwnProperty.call(message, "unarchiveChats"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.unarchiveChats);
return writer;
};
/**
* Encodes the specified UnarchiveChatsSetting message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.UnarchiveChatsSetting.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.UnarchiveChatsSetting
* @static
* @param {SyncAction.SyncActionValue.IUnarchiveChatsSetting} message UnarchiveChatsSetting message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
UnarchiveChatsSetting.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes an UnarchiveChatsSetting message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.UnarchiveChatsSetting
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.UnarchiveChatsSetting} UnarchiveChatsSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
UnarchiveChatsSetting.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.UnarchiveChatsSetting();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.unarchiveChats = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes an UnarchiveChatsSetting message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.UnarchiveChatsSetting
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.UnarchiveChatsSetting} UnarchiveChatsSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
UnarchiveChatsSetting.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies an UnarchiveChatsSetting message.
* @function verify
* @memberof SyncAction.SyncActionValue.UnarchiveChatsSetting
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
UnarchiveChatsSetting.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.unarchiveChats != null && message.hasOwnProperty("unarchiveChats")) {
properties._unarchiveChats = 1;
if (typeof message.unarchiveChats !== "boolean")
return "unarchiveChats: boolean expected";
}
return null;
};
/**
* Creates an UnarchiveChatsSetting message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.UnarchiveChatsSetting
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.UnarchiveChatsSetting} UnarchiveChatsSetting
*/
UnarchiveChatsSetting.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.UnarchiveChatsSetting)
return object;
var message = new $root.SyncAction.SyncActionValue.UnarchiveChatsSetting();
if (object.unarchiveChats != null)
message.unarchiveChats = Boolean(object.unarchiveChats);
return message;
};
/**
* Creates a plain object from an UnarchiveChatsSetting message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.UnarchiveChatsSetting
* @static
* @param {SyncAction.SyncActionValue.UnarchiveChatsSetting} message UnarchiveChatsSetting
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
UnarchiveChatsSetting.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.unarchiveChats != null && message.hasOwnProperty("unarchiveChats")) {
object.unarchiveChats = message.unarchiveChats;
if (options.oneofs)
object._unarchiveChats = "unarchiveChats";
}
return object;
};
/**
* Converts this UnarchiveChatsSetting to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.UnarchiveChatsSetting
* @instance
* @returns {Object.<string,*>} JSON object
*/
UnarchiveChatsSetting.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for UnarchiveChatsSetting
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.UnarchiveChatsSetting
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
UnarchiveChatsSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.UnarchiveChatsSetting";
};
return UnarchiveChatsSetting;
})();
SyncActionValue.UserStatusMuteAction = (function() {
/**
* Properties of a UserStatusMuteAction.
* @memberof SyncAction.SyncActionValue
* @interface IUserStatusMuteAction
* @property {boolean|null} [muted] UserStatusMuteAction muted
*/
/**
* Constructs a new UserStatusMuteAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a UserStatusMuteAction.
* @implements IUserStatusMuteAction
* @constructor
* @param {SyncAction.SyncActionValue.IUserStatusMuteAction=} [properties] Properties to set
*/
function UserStatusMuteAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* UserStatusMuteAction muted.
* @member {boolean|null|undefined} muted
* @memberof SyncAction.SyncActionValue.UserStatusMuteAction
* @instance
*/
UserStatusMuteAction.prototype.muted = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* UserStatusMuteAction _muted.
* @member {"muted"|undefined} _muted
* @memberof SyncAction.SyncActionValue.UserStatusMuteAction
* @instance
*/
Object.defineProperty(UserStatusMuteAction.prototype, "_muted", {
get: $util.oneOfGetter($oneOfFields = ["muted"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new UserStatusMuteAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.UserStatusMuteAction
* @static
* @param {SyncAction.SyncActionValue.IUserStatusMuteAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.UserStatusMuteAction} UserStatusMuteAction instance
*/
UserStatusMuteAction.create = function create(properties) {
return new UserStatusMuteAction(properties);
};
/**
* Encodes the specified UserStatusMuteAction message. Does not implicitly {@link SyncAction.SyncActionValue.UserStatusMuteAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.UserStatusMuteAction
* @static
* @param {SyncAction.SyncActionValue.IUserStatusMuteAction} message UserStatusMuteAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
UserStatusMuteAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.muted != null && Object.hasOwnProperty.call(message, "muted"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.muted);
return writer;
};
/**
* Encodes the specified UserStatusMuteAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.UserStatusMuteAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.UserStatusMuteAction
* @static
* @param {SyncAction.SyncActionValue.IUserStatusMuteAction} message UserStatusMuteAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
UserStatusMuteAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a UserStatusMuteAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.UserStatusMuteAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.UserStatusMuteAction} UserStatusMuteAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
UserStatusMuteAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.UserStatusMuteAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.muted = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a UserStatusMuteAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.UserStatusMuteAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.UserStatusMuteAction} UserStatusMuteAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
UserStatusMuteAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a UserStatusMuteAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.UserStatusMuteAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
UserStatusMuteAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.muted != null && message.hasOwnProperty("muted")) {
properties._muted = 1;
if (typeof message.muted !== "boolean")
return "muted: boolean expected";
}
return null;
};
/**
* Creates a UserStatusMuteAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.UserStatusMuteAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.UserStatusMuteAction} UserStatusMuteAction
*/
UserStatusMuteAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.UserStatusMuteAction)
return object;
var message = new $root.SyncAction.SyncActionValue.UserStatusMuteAction();
if (object.muted != null)
message.muted = Boolean(object.muted);
return message;
};
/**
* Creates a plain object from a UserStatusMuteAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.UserStatusMuteAction
* @static
* @param {SyncAction.SyncActionValue.UserStatusMuteAction} message UserStatusMuteAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
UserStatusMuteAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.muted != null && message.hasOwnProperty("muted")) {
object.muted = message.muted;
if (options.oneofs)
object._muted = "muted";
}
return object;
};
/**
* Converts this UserStatusMuteAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.UserStatusMuteAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
UserStatusMuteAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for UserStatusMuteAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.UserStatusMuteAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
UserStatusMuteAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.UserStatusMuteAction";
};
return UserStatusMuteAction;
})();
SyncActionValue.UsernameChatStartModeAction = (function() {
/**
* Properties of a UsernameChatStartModeAction.
* @memberof SyncAction.SyncActionValue
* @interface IUsernameChatStartModeAction
* @property {SyncAction.SyncActionValue.UsernameChatStartModeAction.ChatStartMode|null} [chatStartMode] UsernameChatStartModeAction chatStartMode
*/
/**
* Constructs a new UsernameChatStartModeAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a UsernameChatStartModeAction.
* @implements IUsernameChatStartModeAction
* @constructor
* @param {SyncAction.SyncActionValue.IUsernameChatStartModeAction=} [properties] Properties to set
*/
function UsernameChatStartModeAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* UsernameChatStartModeAction chatStartMode.
* @member {SyncAction.SyncActionValue.UsernameChatStartModeAction.ChatStartMode|null|undefined} chatStartMode
* @memberof SyncAction.SyncActionValue.UsernameChatStartModeAction
* @instance
*/
UsernameChatStartModeAction.prototype.chatStartMode = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* UsernameChatStartModeAction _chatStartMode.
* @member {"chatStartMode"|undefined} _chatStartMode
* @memberof SyncAction.SyncActionValue.UsernameChatStartModeAction
* @instance
*/
Object.defineProperty(UsernameChatStartModeAction.prototype, "_chatStartMode", {
get: $util.oneOfGetter($oneOfFields = ["chatStartMode"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new UsernameChatStartModeAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.UsernameChatStartModeAction
* @static
* @param {SyncAction.SyncActionValue.IUsernameChatStartModeAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.UsernameChatStartModeAction} UsernameChatStartModeAction instance
*/
UsernameChatStartModeAction.create = function create(properties) {
return new UsernameChatStartModeAction(properties);
};
/**
* Encodes the specified UsernameChatStartModeAction message. Does not implicitly {@link SyncAction.SyncActionValue.UsernameChatStartModeAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.UsernameChatStartModeAction
* @static
* @param {SyncAction.SyncActionValue.IUsernameChatStartModeAction} message UsernameChatStartModeAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
UsernameChatStartModeAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.chatStartMode != null && Object.hasOwnProperty.call(message, "chatStartMode"))
writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chatStartMode);
return writer;
};
/**
* Encodes the specified UsernameChatStartModeAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.UsernameChatStartModeAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.UsernameChatStartModeAction
* @static
* @param {SyncAction.SyncActionValue.IUsernameChatStartModeAction} message UsernameChatStartModeAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
UsernameChatStartModeAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a UsernameChatStartModeAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.UsernameChatStartModeAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.UsernameChatStartModeAction} UsernameChatStartModeAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
UsernameChatStartModeAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.UsernameChatStartModeAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.chatStartMode = reader.int32();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a UsernameChatStartModeAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.UsernameChatStartModeAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.UsernameChatStartModeAction} UsernameChatStartModeAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
UsernameChatStartModeAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a UsernameChatStartModeAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.UsernameChatStartModeAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
UsernameChatStartModeAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.chatStartMode != null && message.hasOwnProperty("chatStartMode")) {
properties._chatStartMode = 1;
switch (message.chatStartMode) {
default:
return "chatStartMode: enum value expected";
case 1:
case 2:
break;
}
}
return null;
};
/**
* Creates a UsernameChatStartModeAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.UsernameChatStartModeAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.UsernameChatStartModeAction} UsernameChatStartModeAction
*/
UsernameChatStartModeAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.UsernameChatStartModeAction)
return object;
var message = new $root.SyncAction.SyncActionValue.UsernameChatStartModeAction();
switch (object.chatStartMode) {
default:
if (typeof object.chatStartMode === "number") {
message.chatStartMode = object.chatStartMode;
break;
}
break;
case "LID":
case 1:
message.chatStartMode = 1;
break;
case "PN":
case 2:
message.chatStartMode = 2;
break;
}
return message;
};
/**
* Creates a plain object from a UsernameChatStartModeAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.UsernameChatStartModeAction
* @static
* @param {SyncAction.SyncActionValue.UsernameChatStartModeAction} message UsernameChatStartModeAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
UsernameChatStartModeAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.chatStartMode != null && message.hasOwnProperty("chatStartMode")) {
object.chatStartMode = options.enums === String ? $root.SyncAction.SyncActionValue.UsernameChatStartModeAction.ChatStartMode[message.chatStartMode] === undefined ? message.chatStartMode : $root.SyncAction.SyncActionValue.UsernameChatStartModeAction.ChatStartMode[message.chatStartMode] : message.chatStartMode;
if (options.oneofs)
object._chatStartMode = "chatStartMode";
}
return object;
};
/**
* Converts this UsernameChatStartModeAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.UsernameChatStartModeAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
UsernameChatStartModeAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for UsernameChatStartModeAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.UsernameChatStartModeAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
UsernameChatStartModeAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.UsernameChatStartModeAction";
};
/**
* ChatStartMode enum.
* @name SyncAction.SyncActionValue.UsernameChatStartModeAction.ChatStartMode
* @enum {number}
* @property {number} LID=1 LID value
* @property {number} PN=2 PN value
*/
UsernameChatStartModeAction.ChatStartMode = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[1] = "LID"] = 1;
values[valuesById[2] = "PN"] = 2;
return values;
})();
return UsernameChatStartModeAction;
})();
SyncActionValue.WaffleAccountLinkStateAction = (function() {
/**
* Properties of a WaffleAccountLinkStateAction.
* @memberof SyncAction.SyncActionValue
* @interface IWaffleAccountLinkStateAction
* @property {SyncAction.SyncActionValue.WaffleAccountLinkStateAction.AccountLinkState|null} [linkState] WaffleAccountLinkStateAction linkState
*/
/**
* Constructs a new WaffleAccountLinkStateAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a WaffleAccountLinkStateAction.
* @implements IWaffleAccountLinkStateAction
* @constructor
* @param {SyncAction.SyncActionValue.IWaffleAccountLinkStateAction=} [properties] Properties to set
*/
function WaffleAccountLinkStateAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* WaffleAccountLinkStateAction linkState.
* @member {SyncAction.SyncActionValue.WaffleAccountLinkStateAction.AccountLinkState|null|undefined} linkState
* @memberof SyncAction.SyncActionValue.WaffleAccountLinkStateAction
* @instance
*/
WaffleAccountLinkStateAction.prototype.linkState = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* WaffleAccountLinkStateAction _linkState.
* @member {"linkState"|undefined} _linkState
* @memberof SyncAction.SyncActionValue.WaffleAccountLinkStateAction
* @instance
*/
Object.defineProperty(WaffleAccountLinkStateAction.prototype, "_linkState", {
get: $util.oneOfGetter($oneOfFields = ["linkState"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new WaffleAccountLinkStateAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.WaffleAccountLinkStateAction
* @static
* @param {SyncAction.SyncActionValue.IWaffleAccountLinkStateAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.WaffleAccountLinkStateAction} WaffleAccountLinkStateAction instance
*/
WaffleAccountLinkStateAction.create = function create(properties) {
return new WaffleAccountLinkStateAction(properties);
};
/**
* Encodes the specified WaffleAccountLinkStateAction message. Does not implicitly {@link SyncAction.SyncActionValue.WaffleAccountLinkStateAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.WaffleAccountLinkStateAction
* @static
* @param {SyncAction.SyncActionValue.IWaffleAccountLinkStateAction} message WaffleAccountLinkStateAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
WaffleAccountLinkStateAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.linkState != null && Object.hasOwnProperty.call(message, "linkState"))
writer.uint32(/* id 2, wireType 0 =*/16).int32(message.linkState);
return writer;
};
/**
* Encodes the specified WaffleAccountLinkStateAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.WaffleAccountLinkStateAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.WaffleAccountLinkStateAction
* @static
* @param {SyncAction.SyncActionValue.IWaffleAccountLinkStateAction} message WaffleAccountLinkStateAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
WaffleAccountLinkStateAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a WaffleAccountLinkStateAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.WaffleAccountLinkStateAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.WaffleAccountLinkStateAction} WaffleAccountLinkStateAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
WaffleAccountLinkStateAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.WaffleAccountLinkStateAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 2: {
message.linkState = reader.int32();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a WaffleAccountLinkStateAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.WaffleAccountLinkStateAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.WaffleAccountLinkStateAction} WaffleAccountLinkStateAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
WaffleAccountLinkStateAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a WaffleAccountLinkStateAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.WaffleAccountLinkStateAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
WaffleAccountLinkStateAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.linkState != null && message.hasOwnProperty("linkState")) {
properties._linkState = 1;
switch (message.linkState) {
default:
return "linkState: enum value expected";
case 0:
break;
}
}
return null;
};
/**
* Creates a WaffleAccountLinkStateAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.WaffleAccountLinkStateAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.WaffleAccountLinkStateAction} WaffleAccountLinkStateAction
*/
WaffleAccountLinkStateAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.WaffleAccountLinkStateAction)
return object;
var message = new $root.SyncAction.SyncActionValue.WaffleAccountLinkStateAction();
switch (object.linkState) {
default:
if (typeof object.linkState === "number") {
message.linkState = object.linkState;
break;
}
break;
case "ACTIVE":
case 0:
message.linkState = 0;
break;
}
return message;
};
/**
* Creates a plain object from a WaffleAccountLinkStateAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.WaffleAccountLinkStateAction
* @static
* @param {SyncAction.SyncActionValue.WaffleAccountLinkStateAction} message WaffleAccountLinkStateAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
WaffleAccountLinkStateAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.linkState != null && message.hasOwnProperty("linkState")) {
object.linkState = options.enums === String ? $root.SyncAction.SyncActionValue.WaffleAccountLinkStateAction.AccountLinkState[message.linkState] === undefined ? message.linkState : $root.SyncAction.SyncActionValue.WaffleAccountLinkStateAction.AccountLinkState[message.linkState] : message.linkState;
if (options.oneofs)
object._linkState = "linkState";
}
return object;
};
/**
* Converts this WaffleAccountLinkStateAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.WaffleAccountLinkStateAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
WaffleAccountLinkStateAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for WaffleAccountLinkStateAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.WaffleAccountLinkStateAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
WaffleAccountLinkStateAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.WaffleAccountLinkStateAction";
};
/**
* AccountLinkState enum.
* @name SyncAction.SyncActionValue.WaffleAccountLinkStateAction.AccountLinkState
* @enum {number}
* @property {number} ACTIVE=0 ACTIVE value
*/
WaffleAccountLinkStateAction.AccountLinkState = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "ACTIVE"] = 0;
return values;
})();
return WaffleAccountLinkStateAction;
})();
SyncActionValue.WamoUserIdentifierAction = (function() {
/**
* Properties of a WamoUserIdentifierAction.
* @memberof SyncAction.SyncActionValue
* @interface IWamoUserIdentifierAction
* @property {string|null} [identifier] WamoUserIdentifierAction identifier
*/
/**
* Constructs a new WamoUserIdentifierAction.
* @memberof SyncAction.SyncActionValue
* @classdesc Represents a WamoUserIdentifierAction.
* @implements IWamoUserIdentifierAction
* @constructor
* @param {SyncAction.SyncActionValue.IWamoUserIdentifierAction=} [properties] Properties to set
*/
function WamoUserIdentifierAction(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* WamoUserIdentifierAction identifier.
* @member {string|null|undefined} identifier
* @memberof SyncAction.SyncActionValue.WamoUserIdentifierAction
* @instance
*/
WamoUserIdentifierAction.prototype.identifier = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* WamoUserIdentifierAction _identifier.
* @member {"identifier"|undefined} _identifier
* @memberof SyncAction.SyncActionValue.WamoUserIdentifierAction
* @instance
*/
Object.defineProperty(WamoUserIdentifierAction.prototype, "_identifier", {
get: $util.oneOfGetter($oneOfFields = ["identifier"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new WamoUserIdentifierAction instance using the specified properties.
* @function create
* @memberof SyncAction.SyncActionValue.WamoUserIdentifierAction
* @static
* @param {SyncAction.SyncActionValue.IWamoUserIdentifierAction=} [properties] Properties to set
* @returns {SyncAction.SyncActionValue.WamoUserIdentifierAction} WamoUserIdentifierAction instance
*/
WamoUserIdentifierAction.create = function create(properties) {
return new WamoUserIdentifierAction(properties);
};
/**
* Encodes the specified WamoUserIdentifierAction message. Does not implicitly {@link SyncAction.SyncActionValue.WamoUserIdentifierAction.verify|verify} messages.
* @function encode
* @memberof SyncAction.SyncActionValue.WamoUserIdentifierAction
* @static
* @param {SyncAction.SyncActionValue.IWamoUserIdentifierAction} message WamoUserIdentifierAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
WamoUserIdentifierAction.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.identifier != null && Object.hasOwnProperty.call(message, "identifier"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.identifier);
return writer;
};
/**
* Encodes the specified WamoUserIdentifierAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.WamoUserIdentifierAction.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.SyncActionValue.WamoUserIdentifierAction
* @static
* @param {SyncAction.SyncActionValue.IWamoUserIdentifierAction} message WamoUserIdentifierAction message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
WamoUserIdentifierAction.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a WamoUserIdentifierAction message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.SyncActionValue.WamoUserIdentifierAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.SyncActionValue.WamoUserIdentifierAction} WamoUserIdentifierAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
WamoUserIdentifierAction.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.SyncActionValue.WamoUserIdentifierAction();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.identifier = reader.string();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a WamoUserIdentifierAction message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.SyncActionValue.WamoUserIdentifierAction
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.SyncActionValue.WamoUserIdentifierAction} WamoUserIdentifierAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
WamoUserIdentifierAction.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a WamoUserIdentifierAction message.
* @function verify
* @memberof SyncAction.SyncActionValue.WamoUserIdentifierAction
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
WamoUserIdentifierAction.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.identifier != null && message.hasOwnProperty("identifier")) {
properties._identifier = 1;
if (!$util.isString(message.identifier))
return "identifier: string expected";
}
return null;
};
/**
* Creates a WamoUserIdentifierAction message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.SyncActionValue.WamoUserIdentifierAction
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.SyncActionValue.WamoUserIdentifierAction} WamoUserIdentifierAction
*/
WamoUserIdentifierAction.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.SyncActionValue.WamoUserIdentifierAction)
return object;
var message = new $root.SyncAction.SyncActionValue.WamoUserIdentifierAction();
if (object.identifier != null)
message.identifier = String(object.identifier);
return message;
};
/**
* Creates a plain object from a WamoUserIdentifierAction message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.SyncActionValue.WamoUserIdentifierAction
* @static
* @param {SyncAction.SyncActionValue.WamoUserIdentifierAction} message WamoUserIdentifierAction
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
WamoUserIdentifierAction.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.identifier != null && message.hasOwnProperty("identifier")) {
object.identifier = message.identifier;
if (options.oneofs)
object._identifier = "identifier";
}
return object;
};
/**
* Converts this WamoUserIdentifierAction to JSON.
* @function toJSON
* @memberof SyncAction.SyncActionValue.WamoUserIdentifierAction
* @instance
* @returns {Object.<string,*>} JSON object
*/
WamoUserIdentifierAction.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for WamoUserIdentifierAction
* @function getTypeUrl
* @memberof SyncAction.SyncActionValue.WamoUserIdentifierAction
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
WamoUserIdentifierAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.SyncActionValue.WamoUserIdentifierAction";
};
return WamoUserIdentifierAction;
})();
return SyncActionValue;
})();
SyncAction.CallLogRecord = (function() {
/**
* Properties of a CallLogRecord.
* @memberof SyncAction
* @interface ICallLogRecord
* @property {SyncAction.CallLogRecord.CallResult|null} [callResult] CallLogRecord callResult
* @property {boolean|null} [isDndMode] CallLogRecord isDndMode
* @property {SyncAction.CallLogRecord.SilenceReason|null} [silenceReason] CallLogRecord silenceReason
* @property {number|Long|null} [duration] CallLogRecord duration
* @property {number|Long|null} [startTime] CallLogRecord startTime
* @property {boolean|null} [isIncoming] CallLogRecord isIncoming
* @property {boolean|null} [isVideo] CallLogRecord isVideo
* @property {boolean|null} [isCallLink] CallLogRecord isCallLink
* @property {string|null} [callLinkToken] CallLogRecord callLinkToken
* @property {string|null} [scheduledCallId] CallLogRecord scheduledCallId
* @property {string|null} [callId] CallLogRecord callId
* @property {string|null} [callCreatorJid] CallLogRecord callCreatorJid
* @property {string|null} [groupJid] CallLogRecord groupJid
* @property {Array.<SyncAction.CallLogRecord.IParticipantInfo>|null} [participants] CallLogRecord participants
* @property {SyncAction.CallLogRecord.CallType|null} [callType] CallLogRecord callType
*/
/**
* Constructs a new CallLogRecord.
* @memberof SyncAction
* @classdesc Represents a CallLogRecord.
* @implements ICallLogRecord
* @constructor
* @param {SyncAction.ICallLogRecord=} [properties] Properties to set
*/
function CallLogRecord(properties) {
this.participants = [];
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* CallLogRecord callResult.
* @member {SyncAction.CallLogRecord.CallResult|null|undefined} callResult
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.callResult = null;
/**
* CallLogRecord isDndMode.
* @member {boolean|null|undefined} isDndMode
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.isDndMode = null;
/**
* CallLogRecord silenceReason.
* @member {SyncAction.CallLogRecord.SilenceReason|null|undefined} silenceReason
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.silenceReason = null;
/**
* CallLogRecord duration.
* @member {number|Long|null|undefined} duration
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.duration = null;
/**
* CallLogRecord startTime.
* @member {number|Long|null|undefined} startTime
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.startTime = null;
/**
* CallLogRecord isIncoming.
* @member {boolean|null|undefined} isIncoming
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.isIncoming = null;
/**
* CallLogRecord isVideo.
* @member {boolean|null|undefined} isVideo
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.isVideo = null;
/**
* CallLogRecord isCallLink.
* @member {boolean|null|undefined} isCallLink
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.isCallLink = null;
/**
* CallLogRecord callLinkToken.
* @member {string|null|undefined} callLinkToken
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.callLinkToken = null;
/**
* CallLogRecord scheduledCallId.
* @member {string|null|undefined} scheduledCallId
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.scheduledCallId = null;
/**
* CallLogRecord callId.
* @member {string|null|undefined} callId
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.callId = null;
/**
* CallLogRecord callCreatorJid.
* @member {string|null|undefined} callCreatorJid
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.callCreatorJid = null;
/**
* CallLogRecord groupJid.
* @member {string|null|undefined} groupJid
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.groupJid = null;
/**
* CallLogRecord participants.
* @member {Array.<SyncAction.CallLogRecord.IParticipantInfo>} participants
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.participants = $util.emptyArray;
/**
* CallLogRecord callType.
* @member {SyncAction.CallLogRecord.CallType|null|undefined} callType
* @memberof SyncAction.CallLogRecord
* @instance
*/
CallLogRecord.prototype.callType = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* CallLogRecord _callResult.
* @member {"callResult"|undefined} _callResult
* @memberof SyncAction.CallLogRecord
* @instance
*/
Object.defineProperty(CallLogRecord.prototype, "_callResult", {
get: $util.oneOfGetter($oneOfFields = ["callResult"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CallLogRecord _isDndMode.
* @member {"isDndMode"|undefined} _isDndMode
* @memberof SyncAction.CallLogRecord
* @instance
*/
Object.defineProperty(CallLogRecord.prototype, "_isDndMode", {
get: $util.oneOfGetter($oneOfFields = ["isDndMode"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CallLogRecord _silenceReason.
* @member {"silenceReason"|undefined} _silenceReason
* @memberof SyncAction.CallLogRecord
* @instance
*/
Object.defineProperty(CallLogRecord.prototype, "_silenceReason", {
get: $util.oneOfGetter($oneOfFields = ["silenceReason"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CallLogRecord _duration.
* @member {"duration"|undefined} _duration
* @memberof SyncAction.CallLogRecord
* @instance
*/
Object.defineProperty(CallLogRecord.prototype, "_duration", {
get: $util.oneOfGetter($oneOfFields = ["duration"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CallLogRecord _startTime.
* @member {"startTime"|undefined} _startTime
* @memberof SyncAction.CallLogRecord
* @instance
*/
Object.defineProperty(CallLogRecord.prototype, "_startTime", {
get: $util.oneOfGetter($oneOfFields = ["startTime"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CallLogRecord _isIncoming.
* @member {"isIncoming"|undefined} _isIncoming
* @memberof SyncAction.CallLogRecord
* @instance
*/
Object.defineProperty(CallLogRecord.prototype, "_isIncoming", {
get: $util.oneOfGetter($oneOfFields = ["isIncoming"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CallLogRecord _isVideo.
* @member {"isVideo"|undefined} _isVideo
* @memberof SyncAction.CallLogRecord
* @instance
*/
Object.defineProperty(CallLogRecord.prototype, "_isVideo", {
get: $util.oneOfGetter($oneOfFields = ["isVideo"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CallLogRecord _isCallLink.
* @member {"isCallLink"|undefined} _isCallLink
* @memberof SyncAction.CallLogRecord
* @instance
*/
Object.defineProperty(CallLogRecord.prototype, "_isCallLink", {
get: $util.oneOfGetter($oneOfFields = ["isCallLink"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CallLogRecord _callLinkToken.
* @member {"callLinkToken"|undefined} _callLinkToken
* @memberof SyncAction.CallLogRecord
* @instance
*/
Object.defineProperty(CallLogRecord.prototype, "_callLinkToken", {
get: $util.oneOfGetter($oneOfFields = ["callLinkToken"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CallLogRecord _scheduledCallId.
* @member {"scheduledCallId"|undefined} _scheduledCallId
* @memberof SyncAction.CallLogRecord
* @instance
*/
Object.defineProperty(CallLogRecord.prototype, "_scheduledCallId", {
get: $util.oneOfGetter($oneOfFields = ["scheduledCallId"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CallLogRecord _callId.
* @member {"callId"|undefined} _callId
* @memberof SyncAction.CallLogRecord
* @instance
*/
Object.defineProperty(CallLogRecord.prototype, "_callId", {
get: $util.oneOfGetter($oneOfFields = ["callId"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CallLogRecord _callCreatorJid.
* @member {"callCreatorJid"|undefined} _callCreatorJid
* @memberof SyncAction.CallLogRecord
* @instance
*/
Object.defineProperty(CallLogRecord.prototype, "_callCreatorJid", {
get: $util.oneOfGetter($oneOfFields = ["callCreatorJid"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CallLogRecord _groupJid.
* @member {"groupJid"|undefined} _groupJid
* @memberof SyncAction.CallLogRecord
* @instance
*/
Object.defineProperty(CallLogRecord.prototype, "_groupJid", {
get: $util.oneOfGetter($oneOfFields = ["groupJid"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* CallLogRecord _callType.
* @member {"callType"|undefined} _callType
* @memberof SyncAction.CallLogRecord
* @instance
*/
Object.defineProperty(CallLogRecord.prototype, "_callType", {
get: $util.oneOfGetter($oneOfFields = ["callType"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new CallLogRecord instance using the specified properties.
* @function create
* @memberof SyncAction.CallLogRecord
* @static
* @param {SyncAction.ICallLogRecord=} [properties] Properties to set
* @returns {SyncAction.CallLogRecord} CallLogRecord instance
*/
CallLogRecord.create = function create(properties) {
return new CallLogRecord(properties);
};
/**
* Encodes the specified CallLogRecord message. Does not implicitly {@link SyncAction.CallLogRecord.verify|verify} messages.
* @function encode
* @memberof SyncAction.CallLogRecord
* @static
* @param {SyncAction.ICallLogRecord} message CallLogRecord message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
CallLogRecord.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.callResult != null && Object.hasOwnProperty.call(message, "callResult"))
writer.uint32(/* id 1, wireType 0 =*/8).int32(message.callResult);
if (message.isDndMode != null && Object.hasOwnProperty.call(message, "isDndMode"))
writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isDndMode);
if (message.silenceReason != null && Object.hasOwnProperty.call(message, "silenceReason"))
writer.uint32(/* id 3, wireType 0 =*/24).int32(message.silenceReason);
if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
writer.uint32(/* id 4, wireType 0 =*/32).int64(message.duration);
if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
writer.uint32(/* id 5, wireType 0 =*/40).int64(message.startTime);
if (message.isIncoming != null && Object.hasOwnProperty.call(message, "isIncoming"))
writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isIncoming);
if (message.isVideo != null && Object.hasOwnProperty.call(message, "isVideo"))
writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isVideo);
if (message.isCallLink != null && Object.hasOwnProperty.call(message, "isCallLink"))
writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isCallLink);
if (message.callLinkToken != null && Object.hasOwnProperty.call(message, "callLinkToken"))
writer.uint32(/* id 9, wireType 2 =*/74).string(message.callLinkToken);
if (message.scheduledCallId != null && Object.hasOwnProperty.call(message, "scheduledCallId"))
writer.uint32(/* id 10, wireType 2 =*/82).string(message.scheduledCallId);
if (message.callId != null && Object.hasOwnProperty.call(message, "callId"))
writer.uint32(/* id 11, wireType 2 =*/90).string(message.callId);
if (message.callCreatorJid != null && Object.hasOwnProperty.call(message, "callCreatorJid"))
writer.uint32(/* id 12, wireType 2 =*/98).string(message.callCreatorJid);
if (message.groupJid != null && Object.hasOwnProperty.call(message, "groupJid"))
writer.uint32(/* id 13, wireType 2 =*/106).string(message.groupJid);
if (message.participants != null && message.participants.length)
for (var i = 0; i < message.participants.length; ++i)
$root.SyncAction.CallLogRecord.ParticipantInfo.encode(message.participants[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
if (message.callType != null && Object.hasOwnProperty.call(message, "callType"))
writer.uint32(/* id 15, wireType 0 =*/120).int32(message.callType);
return writer;
};
/**
* Encodes the specified CallLogRecord message, length delimited. Does not implicitly {@link SyncAction.CallLogRecord.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.CallLogRecord
* @static
* @param {SyncAction.ICallLogRecord} message CallLogRecord message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
CallLogRecord.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a CallLogRecord message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.CallLogRecord
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.CallLogRecord} CallLogRecord
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
CallLogRecord.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.CallLogRecord();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.callResult = reader.int32();
break;
}
case 2: {
message.isDndMode = reader.bool();
break;
}
case 3: {
message.silenceReason = reader.int32();
break;
}
case 4: {
message.duration = reader.int64();
break;
}
case 5: {
message.startTime = reader.int64();
break;
}
case 6: {
message.isIncoming = reader.bool();
break;
}
case 7: {
message.isVideo = reader.bool();
break;
}
case 8: {
message.isCallLink = reader.bool();
break;
}
case 9: {
message.callLinkToken = reader.string();
break;
}
case 10: {
message.scheduledCallId = reader.string();
break;
}
case 11: {
message.callId = reader.string();
break;
}
case 12: {
message.callCreatorJid = reader.string();
break;
}
case 13: {
message.groupJid = reader.string();
break;
}
case 14: {
if (!(message.participants && message.participants.length))
message.participants = [];
message.participants.push($root.SyncAction.CallLogRecord.ParticipantInfo.decode(reader, reader.uint32()));
break;
}
case 15: {
message.callType = reader.int32();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a CallLogRecord message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.CallLogRecord
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.CallLogRecord} CallLogRecord
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
CallLogRecord.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a CallLogRecord message.
* @function verify
* @memberof SyncAction.CallLogRecord
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
CallLogRecord.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.callResult != null && message.hasOwnProperty("callResult")) {
properties._callResult = 1;
switch (message.callResult) {
default:
return "callResult: enum value expected";
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
break;
}
}
if (message.isDndMode != null && message.hasOwnProperty("isDndMode")) {
properties._isDndMode = 1;
if (typeof message.isDndMode !== "boolean")
return "isDndMode: boolean expected";
}
if (message.silenceReason != null && message.hasOwnProperty("silenceReason")) {
properties._silenceReason = 1;
switch (message.silenceReason) {
default:
return "silenceReason: enum value expected";
case 0:
case 1:
case 2:
case 3:
break;
}
}
if (message.duration != null && message.hasOwnProperty("duration")) {
properties._duration = 1;
if (!$util.isInteger(message.duration) && !(message.duration && $util.isInteger(message.duration.low) && $util.isInteger(message.duration.high)))
return "duration: integer|Long expected";
}
if (message.startTime != null && message.hasOwnProperty("startTime")) {
properties._startTime = 1;
if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
return "startTime: integer|Long expected";
}
if (message.isIncoming != null && message.hasOwnProperty("isIncoming")) {
properties._isIncoming = 1;
if (typeof message.isIncoming !== "boolean")
return "isIncoming: boolean expected";
}
if (message.isVideo != null && message.hasOwnProperty("isVideo")) {
properties._isVideo = 1;
if (typeof message.isVideo !== "boolean")
return "isVideo: boolean expected";
}
if (message.isCallLink != null && message.hasOwnProperty("isCallLink")) {
properties._isCallLink = 1;
if (typeof message.isCallLink !== "boolean")
return "isCallLink: boolean expected";
}
if (message.callLinkToken != null && message.hasOwnProperty("callLinkToken")) {
properties._callLinkToken = 1;
if (!$util.isString(message.callLinkToken))
return "callLinkToken: string expected";
}
if (message.scheduledCallId != null && message.hasOwnProperty("scheduledCallId")) {
properties._scheduledCallId = 1;
if (!$util.isString(message.scheduledCallId))
return "scheduledCallId: string expected";
}
if (message.callId != null && message.hasOwnProperty("callId")) {
properties._callId = 1;
if (!$util.isString(message.callId))
return "callId: string expected";
}
if (message.callCreatorJid != null && message.hasOwnProperty("callCreatorJid")) {
properties._callCreatorJid = 1;
if (!$util.isString(message.callCreatorJid))
return "callCreatorJid: string expected";
}
if (message.groupJid != null && message.hasOwnProperty("groupJid")) {
properties._groupJid = 1;
if (!$util.isString(message.groupJid))
return "groupJid: string expected";
}
if (message.participants != null && message.hasOwnProperty("participants")) {
if (!Array.isArray(message.participants))
return "participants: array expected";
for (var i = 0; i < message.participants.length; ++i) {
var error = $root.SyncAction.CallLogRecord.ParticipantInfo.verify(message.participants[i]);
if (error)
return "participants." + error;
}
}
if (message.callType != null && message.hasOwnProperty("callType")) {
properties._callType = 1;
switch (message.callType) {
default:
return "callType: enum value expected";
case 0:
case 1:
case 2:
break;
}
}
return null;
};
/**
* Creates a CallLogRecord message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.CallLogRecord
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.CallLogRecord} CallLogRecord
*/
CallLogRecord.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.CallLogRecord)
return object;
var message = new $root.SyncAction.CallLogRecord();
switch (object.callResult) {
default:
if (typeof object.callResult === "number") {
message.callResult = object.callResult;
break;
}
break;
case "CONNECTED":
case 0:
message.callResult = 0;
break;
case "REJECTED":
case 1:
message.callResult = 1;
break;
case "CANCELLED":
case 2:
message.callResult = 2;
break;
case "ACCEPTEDELSEWHERE":
case 3:
message.callResult = 3;
break;
case "MISSED":
case 4:
message.callResult = 4;
break;
case "INVALID":
case 5:
message.callResult = 5;
break;
case "UNAVAILABLE":
case 6:
message.callResult = 6;
break;
case "UPCOMING":
case 7:
message.callResult = 7;
break;
case "FAILED":
case 8:
message.callResult = 8;
break;
case "ABANDONED":
case 9:
message.callResult = 9;
break;
case "ONGOING":
case 10:
message.callResult = 10;
break;
}
if (object.isDndMode != null)
message.isDndMode = Boolean(object.isDndMode);
switch (object.silenceReason) {
default:
if (typeof object.silenceReason === "number") {
message.silenceReason = object.silenceReason;
break;
}
break;
case "NONE":
case 0:
message.silenceReason = 0;
break;
case "SCHEDULED":
case 1:
message.silenceReason = 1;
break;
case "PRIVACY":
case 2:
message.silenceReason = 2;
break;
case "LIGHTWEIGHT":
case 3:
message.silenceReason = 3;
break;
}
if (object.duration != null)
if ($util.Long)
(message.duration = $util.Long.fromValue(object.duration)).unsigned = false;
else if (typeof object.duration === "string")
message.duration = parseInt(object.duration, 10);
else if (typeof object.duration === "number")
message.duration = object.duration;
else if (typeof object.duration === "object")
message.duration = new $util.LongBits(object.duration.low >>> 0, object.duration.high >>> 0).toNumber();
if (object.startTime != null)
if ($util.Long)
(message.startTime = $util.Long.fromValue(object.startTime)).unsigned = false;
else if (typeof object.startTime === "string")
message.startTime = parseInt(object.startTime, 10);
else if (typeof object.startTime === "number")
message.startTime = object.startTime;
else if (typeof object.startTime === "object")
message.startTime = new $util.LongBits(object.startTime.low >>> 0, object.startTime.high >>> 0).toNumber();
if (object.isIncoming != null)
message.isIncoming = Boolean(object.isIncoming);
if (object.isVideo != null)
message.isVideo = Boolean(object.isVideo);
if (object.isCallLink != null)
message.isCallLink = Boolean(object.isCallLink);
if (object.callLinkToken != null)
message.callLinkToken = String(object.callLinkToken);
if (object.scheduledCallId != null)
message.scheduledCallId = String(object.scheduledCallId);
if (object.callId != null)
message.callId = String(object.callId);
if (object.callCreatorJid != null)
message.callCreatorJid = String(object.callCreatorJid);
if (object.groupJid != null)
message.groupJid = String(object.groupJid);
if (object.participants) {
if (!Array.isArray(object.participants))
throw TypeError(".SyncAction.CallLogRecord.participants: array expected");
message.participants = [];
for (var i = 0; i < object.participants.length; ++i) {
if (typeof object.participants[i] !== "object")
throw TypeError(".SyncAction.CallLogRecord.participants: object expected");
message.participants[i] = $root.SyncAction.CallLogRecord.ParticipantInfo.fromObject(object.participants[i]);
}
}
switch (object.callType) {
default:
if (typeof object.callType === "number") {
message.callType = object.callType;
break;
}
break;
case "REGULAR":
case 0:
message.callType = 0;
break;
case "SCHEDULED_CALL":
case 1:
message.callType = 1;
break;
case "VOICE_CHAT":
case 2:
message.callType = 2;
break;
}
return message;
};
/**
* Creates a plain object from a CallLogRecord message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.CallLogRecord
* @static
* @param {SyncAction.CallLogRecord} message CallLogRecord
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
CallLogRecord.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.arrays || options.defaults)
object.participants = [];
if (message.callResult != null && message.hasOwnProperty("callResult")) {
object.callResult = options.enums === String ? $root.SyncAction.CallLogRecord.CallResult[message.callResult] === undefined ? message.callResult : $root.SyncAction.CallLogRecord.CallResult[message.callResult] : message.callResult;
if (options.oneofs)
object._callResult = "callResult";
}
if (message.isDndMode != null && message.hasOwnProperty("isDndMode")) {
object.isDndMode = message.isDndMode;
if (options.oneofs)
object._isDndMode = "isDndMode";
}
if (message.silenceReason != null && message.hasOwnProperty("silenceReason")) {
object.silenceReason = options.enums === String ? $root.SyncAction.CallLogRecord.SilenceReason[message.silenceReason] === undefined ? message.silenceReason : $root.SyncAction.CallLogRecord.SilenceReason[message.silenceReason] : message.silenceReason;
if (options.oneofs)
object._silenceReason = "silenceReason";
}
if (message.duration != null && message.hasOwnProperty("duration")) {
if (typeof message.duration === "number")
object.duration = options.longs === String ? String(message.duration) : message.duration;
else
object.duration = options.longs === String ? $util.Long.prototype.toString.call(message.duration) : options.longs === Number ? new $util.LongBits(message.duration.low >>> 0, message.duration.high >>> 0).toNumber() : message.duration;
if (options.oneofs)
object._duration = "duration";
}
if (message.startTime != null && message.hasOwnProperty("startTime")) {
if (typeof message.startTime === "number")
object.startTime = options.longs === String ? String(message.startTime) : message.startTime;
else
object.startTime = options.longs === String ? $util.Long.prototype.toString.call(message.startTime) : options.longs === Number ? new $util.LongBits(message.startTime.low >>> 0, message.startTime.high >>> 0).toNumber() : message.startTime;
if (options.oneofs)
object._startTime = "startTime";
}
if (message.isIncoming != null && message.hasOwnProperty("isIncoming")) {
object.isIncoming = message.isIncoming;
if (options.oneofs)
object._isIncoming = "isIncoming";
}
if (message.isVideo != null && message.hasOwnProperty("isVideo")) {
object.isVideo = message.isVideo;
if (options.oneofs)
object._isVideo = "isVideo";
}
if (message.isCallLink != null && message.hasOwnProperty("isCallLink")) {
object.isCallLink = message.isCallLink;
if (options.oneofs)
object._isCallLink = "isCallLink";
}
if (message.callLinkToken != null && message.hasOwnProperty("callLinkToken")) {
object.callLinkToken = message.callLinkToken;
if (options.oneofs)
object._callLinkToken = "callLinkToken";
}
if (message.scheduledCallId != null && message.hasOwnProperty("scheduledCallId")) {
object.scheduledCallId = message.scheduledCallId;
if (options.oneofs)
object._scheduledCallId = "scheduledCallId";
}
if (message.callId != null && message.hasOwnProperty("callId")) {
object.callId = message.callId;
if (options.oneofs)
object._callId = "callId";
}
if (message.callCreatorJid != null && message.hasOwnProperty("callCreatorJid")) {
object.callCreatorJid = message.callCreatorJid;
if (options.oneofs)
object._callCreatorJid = "callCreatorJid";
}
if (message.groupJid != null && message.hasOwnProperty("groupJid")) {
object.groupJid = message.groupJid;
if (options.oneofs)
object._groupJid = "groupJid";
}
if (message.participants && message.participants.length) {
object.participants = [];
for (var j = 0; j < message.participants.length; ++j)
object.participants[j] = $root.SyncAction.CallLogRecord.ParticipantInfo.toObject(message.participants[j], options);
}
if (message.callType != null && message.hasOwnProperty("callType")) {
object.callType = options.enums === String ? $root.SyncAction.CallLogRecord.CallType[message.callType] === undefined ? message.callType : $root.SyncAction.CallLogRecord.CallType[message.callType] : message.callType;
if (options.oneofs)
object._callType = "callType";
}
return object;
};
/**
* Converts this CallLogRecord to JSON.
* @function toJSON
* @memberof SyncAction.CallLogRecord
* @instance
* @returns {Object.<string,*>} JSON object
*/
CallLogRecord.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for CallLogRecord
* @function getTypeUrl
* @memberof SyncAction.CallLogRecord
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
CallLogRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.CallLogRecord";
};
/**
* CallResult enum.
* @name SyncAction.CallLogRecord.CallResult
* @enum {number}
* @property {number} CONNECTED=0 CONNECTED value
* @property {number} REJECTED=1 REJECTED value
* @property {number} CANCELLED=2 CANCELLED value
* @property {number} ACCEPTEDELSEWHERE=3 ACCEPTEDELSEWHERE value
* @property {number} MISSED=4 MISSED value
* @property {number} INVALID=5 INVALID value
* @property {number} UNAVAILABLE=6 UNAVAILABLE value
* @property {number} UPCOMING=7 UPCOMING value
* @property {number} FAILED=8 FAILED value
* @property {number} ABANDONED=9 ABANDONED value
* @property {number} ONGOING=10 ONGOING value
*/
CallLogRecord.CallResult = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "CONNECTED"] = 0;
values[valuesById[1] = "REJECTED"] = 1;
values[valuesById[2] = "CANCELLED"] = 2;
values[valuesById[3] = "ACCEPTEDELSEWHERE"] = 3;
values[valuesById[4] = "MISSED"] = 4;
values[valuesById[5] = "INVALID"] = 5;
values[valuesById[6] = "UNAVAILABLE"] = 6;
values[valuesById[7] = "UPCOMING"] = 7;
values[valuesById[8] = "FAILED"] = 8;
values[valuesById[9] = "ABANDONED"] = 9;
values[valuesById[10] = "ONGOING"] = 10;
return values;
})();
/**
* CallType enum.
* @name SyncAction.CallLogRecord.CallType
* @enum {number}
* @property {number} REGULAR=0 REGULAR value
* @property {number} SCHEDULED_CALL=1 SCHEDULED_CALL value
* @property {number} VOICE_CHAT=2 VOICE_CHAT value
*/
CallLogRecord.CallType = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "REGULAR"] = 0;
values[valuesById[1] = "SCHEDULED_CALL"] = 1;
values[valuesById[2] = "VOICE_CHAT"] = 2;
return values;
})();
CallLogRecord.ParticipantInfo = (function() {
/**
* Properties of a ParticipantInfo.
* @memberof SyncAction.CallLogRecord
* @interface IParticipantInfo
* @property {string|null} [userJid] ParticipantInfo userJid
* @property {SyncAction.CallLogRecord.CallResult|null} [callResult] ParticipantInfo callResult
*/
/**
* Constructs a new ParticipantInfo.
* @memberof SyncAction.CallLogRecord
* @classdesc Represents a ParticipantInfo.
* @implements IParticipantInfo
* @constructor
* @param {SyncAction.CallLogRecord.IParticipantInfo=} [properties] Properties to set
*/
function ParticipantInfo(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* ParticipantInfo userJid.
* @member {string|null|undefined} userJid
* @memberof SyncAction.CallLogRecord.ParticipantInfo
* @instance
*/
ParticipantInfo.prototype.userJid = null;
/**
* ParticipantInfo callResult.
* @member {SyncAction.CallLogRecord.CallResult|null|undefined} callResult
* @memberof SyncAction.CallLogRecord.ParticipantInfo
* @instance
*/
ParticipantInfo.prototype.callResult = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* ParticipantInfo _userJid.
* @member {"userJid"|undefined} _userJid
* @memberof SyncAction.CallLogRecord.ParticipantInfo
* @instance
*/
Object.defineProperty(ParticipantInfo.prototype, "_userJid", {
get: $util.oneOfGetter($oneOfFields = ["userJid"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* ParticipantInfo _callResult.
* @member {"callResult"|undefined} _callResult
* @memberof SyncAction.CallLogRecord.ParticipantInfo
* @instance
*/
Object.defineProperty(ParticipantInfo.prototype, "_callResult", {
get: $util.oneOfGetter($oneOfFields = ["callResult"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new ParticipantInfo instance using the specified properties.
* @function create
* @memberof SyncAction.CallLogRecord.ParticipantInfo
* @static
* @param {SyncAction.CallLogRecord.IParticipantInfo=} [properties] Properties to set
* @returns {SyncAction.CallLogRecord.ParticipantInfo} ParticipantInfo instance
*/
ParticipantInfo.create = function create(properties) {
return new ParticipantInfo(properties);
};
/**
* Encodes the specified ParticipantInfo message. Does not implicitly {@link SyncAction.CallLogRecord.ParticipantInfo.verify|verify} messages.
* @function encode
* @memberof SyncAction.CallLogRecord.ParticipantInfo
* @static
* @param {SyncAction.CallLogRecord.IParticipantInfo} message ParticipantInfo message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ParticipantInfo.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.userJid != null && Object.hasOwnProperty.call(message, "userJid"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.userJid);
if (message.callResult != null && Object.hasOwnProperty.call(message, "callResult"))
writer.uint32(/* id 2, wireType 0 =*/16).int32(message.callResult);
return writer;
};
/**
* Encodes the specified ParticipantInfo message, length delimited. Does not implicitly {@link SyncAction.CallLogRecord.ParticipantInfo.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.CallLogRecord.ParticipantInfo
* @static
* @param {SyncAction.CallLogRecord.IParticipantInfo} message ParticipantInfo message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ParticipantInfo.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a ParticipantInfo message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.CallLogRecord.ParticipantInfo
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.CallLogRecord.ParticipantInfo} ParticipantInfo
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ParticipantInfo.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.CallLogRecord.ParticipantInfo();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.userJid = reader.string();
break;
}
case 2: {
message.callResult = reader.int32();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a ParticipantInfo message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.CallLogRecord.ParticipantInfo
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.CallLogRecord.ParticipantInfo} ParticipantInfo
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ParticipantInfo.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a ParticipantInfo message.
* @function verify
* @memberof SyncAction.CallLogRecord.ParticipantInfo
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
ParticipantInfo.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.userJid != null && message.hasOwnProperty("userJid")) {
properties._userJid = 1;
if (!$util.isString(message.userJid))
return "userJid: string expected";
}
if (message.callResult != null && message.hasOwnProperty("callResult")) {
properties._callResult = 1;
switch (message.callResult) {
default:
return "callResult: enum value expected";
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
break;
}
}
return null;
};
/**
* Creates a ParticipantInfo message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.CallLogRecord.ParticipantInfo
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.CallLogRecord.ParticipantInfo} ParticipantInfo
*/
ParticipantInfo.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.CallLogRecord.ParticipantInfo)
return object;
var message = new $root.SyncAction.CallLogRecord.ParticipantInfo();
if (object.userJid != null)
message.userJid = String(object.userJid);
switch (object.callResult) {
default:
if (typeof object.callResult === "number") {
message.callResult = object.callResult;
break;
}
break;
case "CONNECTED":
case 0:
message.callResult = 0;
break;
case "REJECTED":
case 1:
message.callResult = 1;
break;
case "CANCELLED":
case 2:
message.callResult = 2;
break;
case "ACCEPTEDELSEWHERE":
case 3:
message.callResult = 3;
break;
case "MISSED":
case 4:
message.callResult = 4;
break;
case "INVALID":
case 5:
message.callResult = 5;
break;
case "UNAVAILABLE":
case 6:
message.callResult = 6;
break;
case "UPCOMING":
case 7:
message.callResult = 7;
break;
case "FAILED":
case 8:
message.callResult = 8;
break;
case "ABANDONED":
case 9:
message.callResult = 9;
break;
case "ONGOING":
case 10:
message.callResult = 10;
break;
}
return message;
};
/**
* Creates a plain object from a ParticipantInfo message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.CallLogRecord.ParticipantInfo
* @static
* @param {SyncAction.CallLogRecord.ParticipantInfo} message ParticipantInfo
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
ParticipantInfo.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.userJid != null && message.hasOwnProperty("userJid")) {
object.userJid = message.userJid;
if (options.oneofs)
object._userJid = "userJid";
}
if (message.callResult != null && message.hasOwnProperty("callResult")) {
object.callResult = options.enums === String ? $root.SyncAction.CallLogRecord.CallResult[message.callResult] === undefined ? message.callResult : $root.SyncAction.CallLogRecord.CallResult[message.callResult] : message.callResult;
if (options.oneofs)
object._callResult = "callResult";
}
return object;
};
/**
* Converts this ParticipantInfo to JSON.
* @function toJSON
* @memberof SyncAction.CallLogRecord.ParticipantInfo
* @instance
* @returns {Object.<string,*>} JSON object
*/
ParticipantInfo.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for ParticipantInfo
* @function getTypeUrl
* @memberof SyncAction.CallLogRecord.ParticipantInfo
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
ParticipantInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.CallLogRecord.ParticipantInfo";
};
return ParticipantInfo;
})();
/**
* SilenceReason enum.
* @name SyncAction.CallLogRecord.SilenceReason
* @enum {number}
* @property {number} NONE=0 NONE value
* @property {number} SCHEDULED=1 SCHEDULED value
* @property {number} PRIVACY=2 PRIVACY value
* @property {number} LIGHTWEIGHT=3 LIGHTWEIGHT value
*/
CallLogRecord.SilenceReason = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "NONE"] = 0;
values[valuesById[1] = "SCHEDULED"] = 1;
values[valuesById[2] = "PRIVACY"] = 2;
values[valuesById[3] = "LIGHTWEIGHT"] = 3;
return values;
})();
return CallLogRecord;
})();
SyncAction.RecentEmojiWeight = (function() {
/**
* Properties of a RecentEmojiWeight.
* @memberof SyncAction
* @interface IRecentEmojiWeight
* @property {string|null} [emoji] RecentEmojiWeight emoji
* @property {number|null} [weight] RecentEmojiWeight weight
*/
/**
* Constructs a new RecentEmojiWeight.
* @memberof SyncAction
* @classdesc Represents a RecentEmojiWeight.
* @implements IRecentEmojiWeight
* @constructor
* @param {SyncAction.IRecentEmojiWeight=} [properties] Properties to set
*/
function RecentEmojiWeight(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* RecentEmojiWeight emoji.
* @member {string|null|undefined} emoji
* @memberof SyncAction.RecentEmojiWeight
* @instance
*/
RecentEmojiWeight.prototype.emoji = null;
/**
* RecentEmojiWeight weight.
* @member {number|null|undefined} weight
* @memberof SyncAction.RecentEmojiWeight
* @instance
*/
RecentEmojiWeight.prototype.weight = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* RecentEmojiWeight _emoji.
* @member {"emoji"|undefined} _emoji
* @memberof SyncAction.RecentEmojiWeight
* @instance
*/
Object.defineProperty(RecentEmojiWeight.prototype, "_emoji", {
get: $util.oneOfGetter($oneOfFields = ["emoji"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* RecentEmojiWeight _weight.
* @member {"weight"|undefined} _weight
* @memberof SyncAction.RecentEmojiWeight
* @instance
*/
Object.defineProperty(RecentEmojiWeight.prototype, "_weight", {
get: $util.oneOfGetter($oneOfFields = ["weight"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new RecentEmojiWeight instance using the specified properties.
* @function create
* @memberof SyncAction.RecentEmojiWeight
* @static
* @param {SyncAction.IRecentEmojiWeight=} [properties] Properties to set
* @returns {SyncAction.RecentEmojiWeight} RecentEmojiWeight instance
*/
RecentEmojiWeight.create = function create(properties) {
return new RecentEmojiWeight(properties);
};
/**
* Encodes the specified RecentEmojiWeight message. Does not implicitly {@link SyncAction.RecentEmojiWeight.verify|verify} messages.
* @function encode
* @memberof SyncAction.RecentEmojiWeight
* @static
* @param {SyncAction.IRecentEmojiWeight} message RecentEmojiWeight message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
RecentEmojiWeight.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.emoji != null && Object.hasOwnProperty.call(message, "emoji"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.emoji);
if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
writer.uint32(/* id 2, wireType 5 =*/21).float(message.weight);
return writer;
};
/**
* Encodes the specified RecentEmojiWeight message, length delimited. Does not implicitly {@link SyncAction.RecentEmojiWeight.verify|verify} messages.
* @function encodeDelimited
* @memberof SyncAction.RecentEmojiWeight
* @static
* @param {SyncAction.IRecentEmojiWeight} message RecentEmojiWeight message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
RecentEmojiWeight.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a RecentEmojiWeight message from the specified reader or buffer.
* @function decode
* @memberof SyncAction.RecentEmojiWeight
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {SyncAction.RecentEmojiWeight} RecentEmojiWeight
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
RecentEmojiWeight.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SyncAction.RecentEmojiWeight();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.emoji = reader.string();
break;
}
case 2: {
message.weight = reader.float();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a RecentEmojiWeight message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof SyncAction.RecentEmojiWeight
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {SyncAction.RecentEmojiWeight} RecentEmojiWeight
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
RecentEmojiWeight.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a RecentEmojiWeight message.
* @function verify
* @memberof SyncAction.RecentEmojiWeight
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
RecentEmojiWeight.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.emoji != null && message.hasOwnProperty("emoji")) {
properties._emoji = 1;
if (!$util.isString(message.emoji))
return "emoji: string expected";
}
if (message.weight != null && message.hasOwnProperty("weight")) {
properties._weight = 1;
if (typeof message.weight !== "number")
return "weight: number expected";
}
return null;
};
/**
* Creates a RecentEmojiWeight message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof SyncAction.RecentEmojiWeight
* @static
* @param {Object.<string,*>} object Plain object
* @returns {SyncAction.RecentEmojiWeight} RecentEmojiWeight
*/
RecentEmojiWeight.fromObject = function fromObject(object) {
if (object instanceof $root.SyncAction.RecentEmojiWeight)
return object;
var message = new $root.SyncAction.RecentEmojiWeight();
if (object.emoji != null)
message.emoji = String(object.emoji);
if (object.weight != null)
message.weight = Number(object.weight);
return message;
};
/**
* Creates a plain object from a RecentEmojiWeight message. Also converts values to other types if specified.
* @function toObject
* @memberof SyncAction.RecentEmojiWeight
* @static
* @param {SyncAction.RecentEmojiWeight} message RecentEmojiWeight
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
RecentEmojiWeight.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.emoji != null && message.hasOwnProperty("emoji")) {
object.emoji = message.emoji;
if (options.oneofs)
object._emoji = "emoji";
}
if (message.weight != null && message.hasOwnProperty("weight")) {
object.weight = options.json && !isFinite(message.weight) ? String(message.weight) : message.weight;
if (options.oneofs)
object._weight = "weight";
}
return object;
};
/**
* Converts this RecentEmojiWeight to JSON.
* @function toJSON
* @memberof SyncAction.RecentEmojiWeight
* @instance
* @returns {Object.<string,*>} JSON object
*/
RecentEmojiWeight.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for RecentEmojiWeight
* @function getTypeUrl
* @memberof SyncAction.RecentEmojiWeight
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
RecentEmojiWeight.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/SyncAction.RecentEmojiWeight";
};
return RecentEmojiWeight;
})();
return SyncAction;
})();
$root.ChatLockSettings = (function() {
/**
* Namespace ChatLockSettings.
* @exports ChatLockSettings
* @namespace
*/
var ChatLockSettings = {};
ChatLockSettings.ChatLockSettings = (function() {
/**
* Properties of a ChatLockSettings.
* @memberof ChatLockSettings
* @interface IChatLockSettings
* @property {boolean|null} [hideLockedChats] ChatLockSettings hideLockedChats
* @property {UserPassword.IUserPassword|null} [secretCode] ChatLockSettings secretCode
*/
/**
* Constructs a new ChatLockSettings.
* @memberof ChatLockSettings
* @classdesc Represents a ChatLockSettings.
* @implements IChatLockSettings
* @constructor
* @param {ChatLockSettings.IChatLockSettings=} [properties] Properties to set
*/
function ChatLockSettings(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* ChatLockSettings hideLockedChats.
* @member {boolean|null|undefined} hideLockedChats
* @memberof ChatLockSettings.ChatLockSettings
* @instance
*/
ChatLockSettings.prototype.hideLockedChats = null;
/**
* ChatLockSettings secretCode.
* @member {UserPassword.IUserPassword|null|undefined} secretCode
* @memberof ChatLockSettings.ChatLockSettings
* @instance
*/
ChatLockSettings.prototype.secretCode = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* ChatLockSettings _hideLockedChats.
* @member {"hideLockedChats"|undefined} _hideLockedChats
* @memberof ChatLockSettings.ChatLockSettings
* @instance
*/
Object.defineProperty(ChatLockSettings.prototype, "_hideLockedChats", {
get: $util.oneOfGetter($oneOfFields = ["hideLockedChats"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* ChatLockSettings _secretCode.
* @member {"secretCode"|undefined} _secretCode
* @memberof ChatLockSettings.ChatLockSettings
* @instance
*/
Object.defineProperty(ChatLockSettings.prototype, "_secretCode", {
get: $util.oneOfGetter($oneOfFields = ["secretCode"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new ChatLockSettings instance using the specified properties.
* @function create
* @memberof ChatLockSettings.ChatLockSettings
* @static
* @param {ChatLockSettings.IChatLockSettings=} [properties] Properties to set
* @returns {ChatLockSettings.ChatLockSettings} ChatLockSettings instance
*/
ChatLockSettings.create = function create(properties) {
return new ChatLockSettings(properties);
};
/**
* Encodes the specified ChatLockSettings message. Does not implicitly {@link ChatLockSettings.ChatLockSettings.verify|verify} messages.
* @function encode
* @memberof ChatLockSettings.ChatLockSettings
* @static
* @param {ChatLockSettings.IChatLockSettings} message ChatLockSettings message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ChatLockSettings.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.hideLockedChats != null && Object.hasOwnProperty.call(message, "hideLockedChats"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.hideLockedChats);
if (message.secretCode != null && Object.hasOwnProperty.call(message, "secretCode"))
$root.UserPassword.UserPassword.encode(message.secretCode, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
return writer;
};
/**
* Encodes the specified ChatLockSettings message, length delimited. Does not implicitly {@link ChatLockSettings.ChatLockSettings.verify|verify} messages.
* @function encodeDelimited
* @memberof ChatLockSettings.ChatLockSettings
* @static
* @param {ChatLockSettings.IChatLockSettings} message ChatLockSettings message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
ChatLockSettings.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a ChatLockSettings message from the specified reader or buffer.
* @function decode
* @memberof ChatLockSettings.ChatLockSettings
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {ChatLockSettings.ChatLockSettings} ChatLockSettings
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ChatLockSettings.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatLockSettings.ChatLockSettings();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.hideLockedChats = reader.bool();
break;
}
case 2: {
message.secretCode = $root.UserPassword.UserPassword.decode(reader, reader.uint32());
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a ChatLockSettings message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof ChatLockSettings.ChatLockSettings
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {ChatLockSettings.ChatLockSettings} ChatLockSettings
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
ChatLockSettings.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a ChatLockSettings message.
* @function verify
* @memberof ChatLockSettings.ChatLockSettings
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
ChatLockSettings.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.hideLockedChats != null && message.hasOwnProperty("hideLockedChats")) {
properties._hideLockedChats = 1;
if (typeof message.hideLockedChats !== "boolean")
return "hideLockedChats: boolean expected";
}
if (message.secretCode != null && message.hasOwnProperty("secretCode")) {
properties._secretCode = 1;
{
var error = $root.UserPassword.UserPassword.verify(message.secretCode);
if (error)
return "secretCode." + error;
}
}
return null;
};
/**
* Creates a ChatLockSettings message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof ChatLockSettings.ChatLockSettings
* @static
* @param {Object.<string,*>} object Plain object
* @returns {ChatLockSettings.ChatLockSettings} ChatLockSettings
*/
ChatLockSettings.fromObject = function fromObject(object) {
if (object instanceof $root.ChatLockSettings.ChatLockSettings)
return object;
var message = new $root.ChatLockSettings.ChatLockSettings();
if (object.hideLockedChats != null)
message.hideLockedChats = Boolean(object.hideLockedChats);
if (object.secretCode != null) {
if (typeof object.secretCode !== "object")
throw TypeError(".ChatLockSettings.ChatLockSettings.secretCode: object expected");
message.secretCode = $root.UserPassword.UserPassword.fromObject(object.secretCode);
}
return message;
};
/**
* Creates a plain object from a ChatLockSettings message. Also converts values to other types if specified.
* @function toObject
* @memberof ChatLockSettings.ChatLockSettings
* @static
* @param {ChatLockSettings.ChatLockSettings} message ChatLockSettings
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
ChatLockSettings.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.hideLockedChats != null && message.hasOwnProperty("hideLockedChats")) {
object.hideLockedChats = message.hideLockedChats;
if (options.oneofs)
object._hideLockedChats = "hideLockedChats";
}
if (message.secretCode != null && message.hasOwnProperty("secretCode")) {
object.secretCode = $root.UserPassword.UserPassword.toObject(message.secretCode, options);
if (options.oneofs)
object._secretCode = "secretCode";
}
return object;
};
/**
* Converts this ChatLockSettings to JSON.
* @function toJSON
* @memberof ChatLockSettings.ChatLockSettings
* @instance
* @returns {Object.<string,*>} JSON object
*/
ChatLockSettings.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for ChatLockSettings
* @function getTypeUrl
* @memberof ChatLockSettings.ChatLockSettings
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
ChatLockSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/ChatLockSettings.ChatLockSettings";
};
return ChatLockSettings;
})();
return ChatLockSettings;
})();
$root.UserPassword = (function() {
/**
* Namespace UserPassword.
* @exports UserPassword
* @namespace
*/
var UserPassword = {};
UserPassword.UserPassword = (function() {
/**
* Properties of a UserPassword.
* @memberof UserPassword
* @interface IUserPassword
* @property {UserPassword.UserPassword.Encoding|null} [encoding] UserPassword encoding
* @property {UserPassword.UserPassword.Transformer|null} [transformer] UserPassword transformer
* @property {Array.<UserPassword.UserPassword.ITransformerArg>|null} [transformerArg] UserPassword transformerArg
* @property {Uint8Array|null} [transformedData] UserPassword transformedData
*/
/**
* Constructs a new UserPassword.
* @memberof UserPassword
* @classdesc Represents a UserPassword.
* @implements IUserPassword
* @constructor
* @param {UserPassword.IUserPassword=} [properties] Properties to set
*/
function UserPassword(properties) {
this.transformerArg = [];
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* UserPassword encoding.
* @member {UserPassword.UserPassword.Encoding|null|undefined} encoding
* @memberof UserPassword.UserPassword
* @instance
*/
UserPassword.prototype.encoding = null;
/**
* UserPassword transformer.
* @member {UserPassword.UserPassword.Transformer|null|undefined} transformer
* @memberof UserPassword.UserPassword
* @instance
*/
UserPassword.prototype.transformer = null;
/**
* UserPassword transformerArg.
* @member {Array.<UserPassword.UserPassword.ITransformerArg>} transformerArg
* @memberof UserPassword.UserPassword
* @instance
*/
UserPassword.prototype.transformerArg = $util.emptyArray;
/**
* UserPassword transformedData.
* @member {Uint8Array|null|undefined} transformedData
* @memberof UserPassword.UserPassword
* @instance
*/
UserPassword.prototype.transformedData = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* UserPassword _encoding.
* @member {"encoding"|undefined} _encoding
* @memberof UserPassword.UserPassword
* @instance
*/
Object.defineProperty(UserPassword.prototype, "_encoding", {
get: $util.oneOfGetter($oneOfFields = ["encoding"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* UserPassword _transformer.
* @member {"transformer"|undefined} _transformer
* @memberof UserPassword.UserPassword
* @instance
*/
Object.defineProperty(UserPassword.prototype, "_transformer", {
get: $util.oneOfGetter($oneOfFields = ["transformer"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* UserPassword _transformedData.
* @member {"transformedData"|undefined} _transformedData
* @memberof UserPassword.UserPassword
* @instance
*/
Object.defineProperty(UserPassword.prototype, "_transformedData", {
get: $util.oneOfGetter($oneOfFields = ["transformedData"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new UserPassword instance using the specified properties.
* @function create
* @memberof UserPassword.UserPassword
* @static
* @param {UserPassword.IUserPassword=} [properties] Properties to set
* @returns {UserPassword.UserPassword} UserPassword instance
*/
UserPassword.create = function create(properties) {
return new UserPassword(properties);
};
/**
* Encodes the specified UserPassword message. Does not implicitly {@link UserPassword.UserPassword.verify|verify} messages.
* @function encode
* @memberof UserPassword.UserPassword
* @static
* @param {UserPassword.IUserPassword} message UserPassword message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
UserPassword.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.encoding != null && Object.hasOwnProperty.call(message, "encoding"))
writer.uint32(/* id 1, wireType 0 =*/8).int32(message.encoding);
if (message.transformer != null && Object.hasOwnProperty.call(message, "transformer"))
writer.uint32(/* id 2, wireType 0 =*/16).int32(message.transformer);
if (message.transformerArg != null && message.transformerArg.length)
for (var i = 0; i < message.transformerArg.length; ++i)
$root.UserPassword.UserPassword.TransformerArg.encode(message.transformerArg[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
if (message.transformedData != null && Object.hasOwnProperty.call(message, "transformedData"))
writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.transformedData);
return writer;
};
/**
* Encodes the specified UserPassword message, length delimited. Does not implicitly {@link UserPassword.UserPassword.verify|verify} messages.
* @function encodeDelimited
* @memberof UserPassword.UserPassword
* @static
* @param {UserPassword.IUserPassword} message UserPassword message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
UserPassword.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a UserPassword message from the specified reader or buffer.
* @function decode
* @memberof UserPassword.UserPassword
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {UserPassword.UserPassword} UserPassword
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
UserPassword.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserPassword.UserPassword();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.encoding = reader.int32();
break;
}
case 2: {
message.transformer = reader.int32();
break;
}
case 3: {
if (!(message.transformerArg && message.transformerArg.length))
message.transformerArg = [];
message.transformerArg.push($root.UserPassword.UserPassword.TransformerArg.decode(reader, reader.uint32()));
break;
}
case 4: {
message.transformedData = reader.bytes();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a UserPassword message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof UserPassword.UserPassword
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {UserPassword.UserPassword} UserPassword
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
UserPassword.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a UserPassword message.
* @function verify
* @memberof UserPassword.UserPassword
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
UserPassword.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.encoding != null && message.hasOwnProperty("encoding")) {
properties._encoding = 1;
switch (message.encoding) {
default:
return "encoding: enum value expected";
case 0:
case 1:
break;
}
}
if (message.transformer != null && message.hasOwnProperty("transformer")) {
properties._transformer = 1;
switch (message.transformer) {
default:
return "transformer: enum value expected";
case 0:
case 1:
case 2:
break;
}
}
if (message.transformerArg != null && message.hasOwnProperty("transformerArg")) {
if (!Array.isArray(message.transformerArg))
return "transformerArg: array expected";
for (var i = 0; i < message.transformerArg.length; ++i) {
var error = $root.UserPassword.UserPassword.TransformerArg.verify(message.transformerArg[i]);
if (error)
return "transformerArg." + error;
}
}
if (message.transformedData != null && message.hasOwnProperty("transformedData")) {
properties._transformedData = 1;
if (!(message.transformedData && typeof message.transformedData.length === "number" || $util.isString(message.transformedData)))
return "transformedData: buffer expected";
}
return null;
};
/**
* Creates a UserPassword message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof UserPassword.UserPassword
* @static
* @param {Object.<string,*>} object Plain object
* @returns {UserPassword.UserPassword} UserPassword
*/
UserPassword.fromObject = function fromObject(object) {
if (object instanceof $root.UserPassword.UserPassword)
return object;
var message = new $root.UserPassword.UserPassword();
switch (object.encoding) {
default:
if (typeof object.encoding === "number") {
message.encoding = object.encoding;
break;
}
break;
case "UTF8":
case 0:
message.encoding = 0;
break;
case "UTF8_BROKEN":
case 1:
message.encoding = 1;
break;
}
switch (object.transformer) {
default:
if (typeof object.transformer === "number") {
message.transformer = object.transformer;
break;
}
break;
case "NONE":
case 0:
message.transformer = 0;
break;
case "PBKDF2_HMAC_SHA512":
case 1:
message.transformer = 1;
break;
case "PBKDF2_HMAC_SHA384":
case 2:
message.transformer = 2;
break;
}
if (object.transformerArg) {
if (!Array.isArray(object.transformerArg))
throw TypeError(".UserPassword.UserPassword.transformerArg: array expected");
message.transformerArg = [];
for (var i = 0; i < object.transformerArg.length; ++i) {
if (typeof object.transformerArg[i] !== "object")
throw TypeError(".UserPassword.UserPassword.transformerArg: object expected");
message.transformerArg[i] = $root.UserPassword.UserPassword.TransformerArg.fromObject(object.transformerArg[i]);
}
}
if (object.transformedData != null)
if (typeof object.transformedData === "string")
$util.base64.decode(object.transformedData, message.transformedData = $util.newBuffer($util.base64.length(object.transformedData)), 0);
else if (object.transformedData.length >= 0)
message.transformedData = object.transformedData;
return message;
};
/**
* Creates a plain object from a UserPassword message. Also converts values to other types if specified.
* @function toObject
* @memberof UserPassword.UserPassword
* @static
* @param {UserPassword.UserPassword} message UserPassword
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
UserPassword.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.arrays || options.defaults)
object.transformerArg = [];
if (message.encoding != null && message.hasOwnProperty("encoding")) {
object.encoding = options.enums === String ? $root.UserPassword.UserPassword.Encoding[message.encoding] === undefined ? message.encoding : $root.UserPassword.UserPassword.Encoding[message.encoding] : message.encoding;
if (options.oneofs)
object._encoding = "encoding";
}
if (message.transformer != null && message.hasOwnProperty("transformer")) {
object.transformer = options.enums === String ? $root.UserPassword.UserPassword.Transformer[message.transformer] === undefined ? message.transformer : $root.UserPassword.UserPassword.Transformer[message.transformer] : message.transformer;
if (options.oneofs)
object._transformer = "transformer";
}
if (message.transformerArg && message.transformerArg.length) {
object.transformerArg = [];
for (var j = 0; j < message.transformerArg.length; ++j)
object.transformerArg[j] = $root.UserPassword.UserPassword.TransformerArg.toObject(message.transformerArg[j], options);
}
if (message.transformedData != null && message.hasOwnProperty("transformedData")) {
object.transformedData = options.bytes === String ? $util.base64.encode(message.transformedData, 0, message.transformedData.length) : options.bytes === Array ? Array.prototype.slice.call(message.transformedData) : message.transformedData;
if (options.oneofs)
object._transformedData = "transformedData";
}
return object;
};
/**
* Converts this UserPassword to JSON.
* @function toJSON
* @memberof UserPassword.UserPassword
* @instance
* @returns {Object.<string,*>} JSON object
*/
UserPassword.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for UserPassword
* @function getTypeUrl
* @memberof UserPassword.UserPassword
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
UserPassword.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/UserPassword.UserPassword";
};
/**
* Encoding enum.
* @name UserPassword.UserPassword.Encoding
* @enum {number}
* @property {number} UTF8=0 UTF8 value
* @property {number} UTF8_BROKEN=1 UTF8_BROKEN value
*/
UserPassword.Encoding = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "UTF8"] = 0;
values[valuesById[1] = "UTF8_BROKEN"] = 1;
return values;
})();
/**
* Transformer enum.
* @name UserPassword.UserPassword.Transformer
* @enum {number}
* @property {number} NONE=0 NONE value
* @property {number} PBKDF2_HMAC_SHA512=1 PBKDF2_HMAC_SHA512 value
* @property {number} PBKDF2_HMAC_SHA384=2 PBKDF2_HMAC_SHA384 value
*/
UserPassword.Transformer = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "NONE"] = 0;
values[valuesById[1] = "PBKDF2_HMAC_SHA512"] = 1;
values[valuesById[2] = "PBKDF2_HMAC_SHA384"] = 2;
return values;
})();
UserPassword.TransformerArg = (function() {
/**
* Properties of a TransformerArg.
* @memberof UserPassword.UserPassword
* @interface ITransformerArg
* @property {string|null} [key] TransformerArg key
* @property {UserPassword.UserPassword.TransformerArg.IValue|null} [value] TransformerArg value
*/
/**
* Constructs a new TransformerArg.
* @memberof UserPassword.UserPassword
* @classdesc Represents a TransformerArg.
* @implements ITransformerArg
* @constructor
* @param {UserPassword.UserPassword.ITransformerArg=} [properties] Properties to set
*/
function TransformerArg(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* TransformerArg key.
* @member {string|null|undefined} key
* @memberof UserPassword.UserPassword.TransformerArg
* @instance
*/
TransformerArg.prototype.key = null;
/**
* TransformerArg value.
* @member {UserPassword.UserPassword.TransformerArg.IValue|null|undefined} value
* @memberof UserPassword.UserPassword.TransformerArg
* @instance
*/
TransformerArg.prototype.value = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* TransformerArg _key.
* @member {"key"|undefined} _key
* @memberof UserPassword.UserPassword.TransformerArg
* @instance
*/
Object.defineProperty(TransformerArg.prototype, "_key", {
get: $util.oneOfGetter($oneOfFields = ["key"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* TransformerArg _value.
* @member {"value"|undefined} _value
* @memberof UserPassword.UserPassword.TransformerArg
* @instance
*/
Object.defineProperty(TransformerArg.prototype, "_value", {
get: $util.oneOfGetter($oneOfFields = ["value"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new TransformerArg instance using the specified properties.
* @function create
* @memberof UserPassword.UserPassword.TransformerArg
* @static
* @param {UserPassword.UserPassword.ITransformerArg=} [properties] Properties to set
* @returns {UserPassword.UserPassword.TransformerArg} TransformerArg instance
*/
TransformerArg.create = function create(properties) {
return new TransformerArg(properties);
};
/**
* Encodes the specified TransformerArg message. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.verify|verify} messages.
* @function encode
* @memberof UserPassword.UserPassword.TransformerArg
* @static
* @param {UserPassword.UserPassword.ITransformerArg} message TransformerArg message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
TransformerArg.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.key != null && Object.hasOwnProperty.call(message, "key"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
if (message.value != null && Object.hasOwnProperty.call(message, "value"))
$root.UserPassword.UserPassword.TransformerArg.Value.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
return writer;
};
/**
* Encodes the specified TransformerArg message, length delimited. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.verify|verify} messages.
* @function encodeDelimited
* @memberof UserPassword.UserPassword.TransformerArg
* @static
* @param {UserPassword.UserPassword.ITransformerArg} message TransformerArg message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
TransformerArg.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a TransformerArg message from the specified reader or buffer.
* @function decode
* @memberof UserPassword.UserPassword.TransformerArg
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {UserPassword.UserPassword.TransformerArg} TransformerArg
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
TransformerArg.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserPassword.UserPassword.TransformerArg();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.key = reader.string();
break;
}
case 2: {
message.value = $root.UserPassword.UserPassword.TransformerArg.Value.decode(reader, reader.uint32());
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a TransformerArg message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof UserPassword.UserPassword.TransformerArg
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {UserPassword.UserPassword.TransformerArg} TransformerArg
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
TransformerArg.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a TransformerArg message.
* @function verify
* @memberof UserPassword.UserPassword.TransformerArg
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
TransformerArg.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.key != null && message.hasOwnProperty("key")) {
properties._key = 1;
if (!$util.isString(message.key))
return "key: string expected";
}
if (message.value != null && message.hasOwnProperty("value")) {
properties._value = 1;
{
var error = $root.UserPassword.UserPassword.TransformerArg.Value.verify(message.value);
if (error)
return "value." + error;
}
}
return null;
};
/**
* Creates a TransformerArg message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof UserPassword.UserPassword.TransformerArg
* @static
* @param {Object.<string,*>} object Plain object
* @returns {UserPassword.UserPassword.TransformerArg} TransformerArg
*/
TransformerArg.fromObject = function fromObject(object) {
if (object instanceof $root.UserPassword.UserPassword.TransformerArg)
return object;
var message = new $root.UserPassword.UserPassword.TransformerArg();
if (object.key != null)
message.key = String(object.key);
if (object.value != null) {
if (typeof object.value !== "object")
throw TypeError(".UserPassword.UserPassword.TransformerArg.value: object expected");
message.value = $root.UserPassword.UserPassword.TransformerArg.Value.fromObject(object.value);
}
return message;
};
/**
* Creates a plain object from a TransformerArg message. Also converts values to other types if specified.
* @function toObject
* @memberof UserPassword.UserPassword.TransformerArg
* @static
* @param {UserPassword.UserPassword.TransformerArg} message TransformerArg
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
TransformerArg.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.key != null && message.hasOwnProperty("key")) {
object.key = message.key;
if (options.oneofs)
object._key = "key";
}
if (message.value != null && message.hasOwnProperty("value")) {
object.value = $root.UserPassword.UserPassword.TransformerArg.Value.toObject(message.value, options);
if (options.oneofs)
object._value = "value";
}
return object;
};
/**
* Converts this TransformerArg to JSON.
* @function toJSON
* @memberof UserPassword.UserPassword.TransformerArg
* @instance
* @returns {Object.<string,*>} JSON object
*/
TransformerArg.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for TransformerArg
* @function getTypeUrl
* @memberof UserPassword.UserPassword.TransformerArg
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
TransformerArg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/UserPassword.UserPassword.TransformerArg";
};
TransformerArg.Value = (function() {
/**
* Properties of a Value.
* @memberof UserPassword.UserPassword.TransformerArg
* @interface IValue
* @property {Uint8Array|null} [asBlob] Value asBlob
* @property {number|null} [asUnsignedInteger] Value asUnsignedInteger
*/
/**
* Constructs a new Value.
* @memberof UserPassword.UserPassword.TransformerArg
* @classdesc Represents a Value.
* @implements IValue
* @constructor
* @param {UserPassword.UserPassword.TransformerArg.IValue=} [properties] Properties to set
*/
function Value(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* Value asBlob.
* @member {Uint8Array|null|undefined} asBlob
* @memberof UserPassword.UserPassword.TransformerArg.Value
* @instance
*/
Value.prototype.asBlob = null;
/**
* Value asUnsignedInteger.
* @member {number|null|undefined} asUnsignedInteger
* @memberof UserPassword.UserPassword.TransformerArg.Value
* @instance
*/
Value.prototype.asUnsignedInteger = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* Value value.
* @member {"asBlob"|"asUnsignedInteger"|undefined} value
* @memberof UserPassword.UserPassword.TransformerArg.Value
* @instance
*/
Object.defineProperty(Value.prototype, "value", {
get: $util.oneOfGetter($oneOfFields = ["asBlob", "asUnsignedInteger"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new Value instance using the specified properties.
* @function create
* @memberof UserPassword.UserPassword.TransformerArg.Value
* @static
* @param {UserPassword.UserPassword.TransformerArg.IValue=} [properties] Properties to set
* @returns {UserPassword.UserPassword.TransformerArg.Value} Value instance
*/
Value.create = function create(properties) {
return new Value(properties);
};
/**
* Encodes the specified Value message. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.Value.verify|verify} messages.
* @function encode
* @memberof UserPassword.UserPassword.TransformerArg.Value
* @static
* @param {UserPassword.UserPassword.TransformerArg.IValue} message Value message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
Value.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.asBlob != null && Object.hasOwnProperty.call(message, "asBlob"))
writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.asBlob);
if (message.asUnsignedInteger != null && Object.hasOwnProperty.call(message, "asUnsignedInteger"))
writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.asUnsignedInteger);
return writer;
};
/**
* Encodes the specified Value message, length delimited. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.Value.verify|verify} messages.
* @function encodeDelimited
* @memberof UserPassword.UserPassword.TransformerArg.Value
* @static
* @param {UserPassword.UserPassword.TransformerArg.IValue} message Value message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
Value.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a Value message from the specified reader or buffer.
* @function decode
* @memberof UserPassword.UserPassword.TransformerArg.Value
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {UserPassword.UserPassword.TransformerArg.Value} Value
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
Value.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserPassword.UserPassword.TransformerArg.Value();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.asBlob = reader.bytes();
break;
}
case 2: {
message.asUnsignedInteger = reader.uint32();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a Value message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof UserPassword.UserPassword.TransformerArg.Value
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {UserPassword.UserPassword.TransformerArg.Value} Value
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
Value.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a Value message.
* @function verify
* @memberof UserPassword.UserPassword.TransformerArg.Value
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
Value.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.asBlob != null && message.hasOwnProperty("asBlob")) {
properties.value = 1;
if (!(message.asBlob && typeof message.asBlob.length === "number" || $util.isString(message.asBlob)))
return "asBlob: buffer expected";
}
if (message.asUnsignedInteger != null && message.hasOwnProperty("asUnsignedInteger")) {
if (properties.value === 1)
return "value: multiple values";
properties.value = 1;
if (!$util.isInteger(message.asUnsignedInteger))
return "asUnsignedInteger: integer expected";
}
return null;
};
/**
* Creates a Value message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof UserPassword.UserPassword.TransformerArg.Value
* @static
* @param {Object.<string,*>} object Plain object
* @returns {UserPassword.UserPassword.TransformerArg.Value} Value
*/
Value.fromObject = function fromObject(object) {
if (object instanceof $root.UserPassword.UserPassword.TransformerArg.Value)
return object;
var message = new $root.UserPassword.UserPassword.TransformerArg.Value();
if (object.asBlob != null)
if (typeof object.asBlob === "string")
$util.base64.decode(object.asBlob, message.asBlob = $util.newBuffer($util.base64.length(object.asBlob)), 0);
else if (object.asBlob.length >= 0)
message.asBlob = object.asBlob;
if (object.asUnsignedInteger != null)
message.asUnsignedInteger = object.asUnsignedInteger >>> 0;
return message;
};
/**
* Creates a plain object from a Value message. Also converts values to other types if specified.
* @function toObject
* @memberof UserPassword.UserPassword.TransformerArg.Value
* @static
* @param {UserPassword.UserPassword.TransformerArg.Value} message Value
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
Value.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.asBlob != null && message.hasOwnProperty("asBlob")) {
object.asBlob = options.bytes === String ? $util.base64.encode(message.asBlob, 0, message.asBlob.length) : options.bytes === Array ? Array.prototype.slice.call(message.asBlob) : message.asBlob;
if (options.oneofs)
object.value = "asBlob";
}
if (message.asUnsignedInteger != null && message.hasOwnProperty("asUnsignedInteger")) {
object.asUnsignedInteger = message.asUnsignedInteger;
if (options.oneofs)
object.value = "asUnsignedInteger";
}
return object;
};
/**
* Converts this Value to JSON.
* @function toJSON
* @memberof UserPassword.UserPassword.TransformerArg.Value
* @instance
* @returns {Object.<string,*>} JSON object
*/
Value.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for Value
* @function getTypeUrl
* @memberof UserPassword.UserPassword.TransformerArg.Value
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/UserPassword.UserPassword.TransformerArg.Value";
};
return Value;
})();
return TransformerArg;
})();
return UserPassword;
})();
return UserPassword;
})();
$root.DeviceCapabilities = (function() {
/**
* Namespace DeviceCapabilities.
* @exports DeviceCapabilities
* @namespace
*/
var DeviceCapabilities = {};
DeviceCapabilities.DeviceCapabilities = (function() {
/**
* Properties of a DeviceCapabilities.
* @memberof DeviceCapabilities
* @interface IDeviceCapabilities
* @property {DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel|null} [chatLockSupportLevel] DeviceCapabilities chatLockSupportLevel
* @property {DeviceCapabilities.DeviceCapabilities.ILIDMigration|null} [lidMigration] DeviceCapabilities lidMigration
*/
/**
* Constructs a new DeviceCapabilities.
* @memberof DeviceCapabilities
* @classdesc Represents a DeviceCapabilities.
* @implements IDeviceCapabilities
* @constructor
* @param {DeviceCapabilities.IDeviceCapabilities=} [properties] Properties to set
*/
function DeviceCapabilities(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* DeviceCapabilities chatLockSupportLevel.
* @member {DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel|null|undefined} chatLockSupportLevel
* @memberof DeviceCapabilities.DeviceCapabilities
* @instance
*/
DeviceCapabilities.prototype.chatLockSupportLevel = null;
/**
* DeviceCapabilities lidMigration.
* @member {DeviceCapabilities.DeviceCapabilities.ILIDMigration|null|undefined} lidMigration
* @memberof DeviceCapabilities.DeviceCapabilities
* @instance
*/
DeviceCapabilities.prototype.lidMigration = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* DeviceCapabilities _chatLockSupportLevel.
* @member {"chatLockSupportLevel"|undefined} _chatLockSupportLevel
* @memberof DeviceCapabilities.DeviceCapabilities
* @instance
*/
Object.defineProperty(DeviceCapabilities.prototype, "_chatLockSupportLevel", {
get: $util.oneOfGetter($oneOfFields = ["chatLockSupportLevel"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* DeviceCapabilities _lidMigration.
* @member {"lidMigration"|undefined} _lidMigration
* @memberof DeviceCapabilities.DeviceCapabilities
* @instance
*/
Object.defineProperty(DeviceCapabilities.prototype, "_lidMigration", {
get: $util.oneOfGetter($oneOfFields = ["lidMigration"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new DeviceCapabilities instance using the specified properties.
* @function create
* @memberof DeviceCapabilities.DeviceCapabilities
* @static
* @param {DeviceCapabilities.IDeviceCapabilities=} [properties] Properties to set
* @returns {DeviceCapabilities.DeviceCapabilities} DeviceCapabilities instance
*/
DeviceCapabilities.create = function create(properties) {
return new DeviceCapabilities(properties);
};
/**
* Encodes the specified DeviceCapabilities message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.verify|verify} messages.
* @function encode
* @memberof DeviceCapabilities.DeviceCapabilities
* @static
* @param {DeviceCapabilities.IDeviceCapabilities} message DeviceCapabilities message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
DeviceCapabilities.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.chatLockSupportLevel != null && Object.hasOwnProperty.call(message, "chatLockSupportLevel"))
writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chatLockSupportLevel);
if (message.lidMigration != null && Object.hasOwnProperty.call(message, "lidMigration"))
$root.DeviceCapabilities.DeviceCapabilities.LIDMigration.encode(message.lidMigration, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
return writer;
};
/**
* Encodes the specified DeviceCapabilities message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.verify|verify} messages.
* @function encodeDelimited
* @memberof DeviceCapabilities.DeviceCapabilities
* @static
* @param {DeviceCapabilities.IDeviceCapabilities} message DeviceCapabilities message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
DeviceCapabilities.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a DeviceCapabilities message from the specified reader or buffer.
* @function decode
* @memberof DeviceCapabilities.DeviceCapabilities
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {DeviceCapabilities.DeviceCapabilities} DeviceCapabilities
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
DeviceCapabilities.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceCapabilities.DeviceCapabilities();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.chatLockSupportLevel = reader.int32();
break;
}
case 2: {
message.lidMigration = $root.DeviceCapabilities.DeviceCapabilities.LIDMigration.decode(reader, reader.uint32());
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a DeviceCapabilities message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof DeviceCapabilities.DeviceCapabilities
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {DeviceCapabilities.DeviceCapabilities} DeviceCapabilities
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
DeviceCapabilities.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a DeviceCapabilities message.
* @function verify
* @memberof DeviceCapabilities.DeviceCapabilities
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
DeviceCapabilities.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.chatLockSupportLevel != null && message.hasOwnProperty("chatLockSupportLevel")) {
properties._chatLockSupportLevel = 1;
switch (message.chatLockSupportLevel) {
default:
return "chatLockSupportLevel: enum value expected";
case 0:
case 1:
case 2:
break;
}
}
if (message.lidMigration != null && message.hasOwnProperty("lidMigration")) {
properties._lidMigration = 1;
{
var error = $root.DeviceCapabilities.DeviceCapabilities.LIDMigration.verify(message.lidMigration);
if (error)
return "lidMigration." + error;
}
}
return null;
};
/**
* Creates a DeviceCapabilities message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof DeviceCapabilities.DeviceCapabilities
* @static
* @param {Object.<string,*>} object Plain object
* @returns {DeviceCapabilities.DeviceCapabilities} DeviceCapabilities
*/
DeviceCapabilities.fromObject = function fromObject(object) {
if (object instanceof $root.DeviceCapabilities.DeviceCapabilities)
return object;
var message = new $root.DeviceCapabilities.DeviceCapabilities();
switch (object.chatLockSupportLevel) {
default:
if (typeof object.chatLockSupportLevel === "number") {
message.chatLockSupportLevel = object.chatLockSupportLevel;
break;
}
break;
case "NONE":
case 0:
message.chatLockSupportLevel = 0;
break;
case "MINIMAL":
case 1:
message.chatLockSupportLevel = 1;
break;
case "FULL":
case 2:
message.chatLockSupportLevel = 2;
break;
}
if (object.lidMigration != null) {
if (typeof object.lidMigration !== "object")
throw TypeError(".DeviceCapabilities.DeviceCapabilities.lidMigration: object expected");
message.lidMigration = $root.DeviceCapabilities.DeviceCapabilities.LIDMigration.fromObject(object.lidMigration);
}
return message;
};
/**
* Creates a plain object from a DeviceCapabilities message. Also converts values to other types if specified.
* @function toObject
* @memberof DeviceCapabilities.DeviceCapabilities
* @static
* @param {DeviceCapabilities.DeviceCapabilities} message DeviceCapabilities
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
DeviceCapabilities.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.chatLockSupportLevel != null && message.hasOwnProperty("chatLockSupportLevel")) {
object.chatLockSupportLevel = options.enums === String ? $root.DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel[message.chatLockSupportLevel] === undefined ? message.chatLockSupportLevel : $root.DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel[message.chatLockSupportLevel] : message.chatLockSupportLevel;
if (options.oneofs)
object._chatLockSupportLevel = "chatLockSupportLevel";
}
if (message.lidMigration != null && message.hasOwnProperty("lidMigration")) {
object.lidMigration = $root.DeviceCapabilities.DeviceCapabilities.LIDMigration.toObject(message.lidMigration, options);
if (options.oneofs)
object._lidMigration = "lidMigration";
}
return object;
};
/**
* Converts this DeviceCapabilities to JSON.
* @function toJSON
* @memberof DeviceCapabilities.DeviceCapabilities
* @instance
* @returns {Object.<string,*>} JSON object
*/
DeviceCapabilities.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for DeviceCapabilities
* @function getTypeUrl
* @memberof DeviceCapabilities.DeviceCapabilities
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
DeviceCapabilities.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/DeviceCapabilities.DeviceCapabilities";
};
/**
* ChatLockSupportLevel enum.
* @name DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel
* @enum {number}
* @property {number} NONE=0 NONE value
* @property {number} MINIMAL=1 MINIMAL value
* @property {number} FULL=2 FULL value
*/
DeviceCapabilities.ChatLockSupportLevel = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "NONE"] = 0;
values[valuesById[1] = "MINIMAL"] = 1;
values[valuesById[2] = "FULL"] = 2;
return values;
})();
DeviceCapabilities.LIDMigration = (function() {
/**
* Properties of a LIDMigration.
* @memberof DeviceCapabilities.DeviceCapabilities
* @interface ILIDMigration
* @property {number|Long|null} [chatDbMigrationTimestamp] LIDMigration chatDbMigrationTimestamp
*/
/**
* Constructs a new LIDMigration.
* @memberof DeviceCapabilities.DeviceCapabilities
* @classdesc Represents a LIDMigration.
* @implements ILIDMigration
* @constructor
* @param {DeviceCapabilities.DeviceCapabilities.ILIDMigration=} [properties] Properties to set
*/
function LIDMigration(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* LIDMigration chatDbMigrationTimestamp.
* @member {number|Long|null|undefined} chatDbMigrationTimestamp
* @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
* @instance
*/
LIDMigration.prototype.chatDbMigrationTimestamp = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* LIDMigration _chatDbMigrationTimestamp.
* @member {"chatDbMigrationTimestamp"|undefined} _chatDbMigrationTimestamp
* @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
* @instance
*/
Object.defineProperty(LIDMigration.prototype, "_chatDbMigrationTimestamp", {
get: $util.oneOfGetter($oneOfFields = ["chatDbMigrationTimestamp"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new LIDMigration instance using the specified properties.
* @function create
* @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
* @static
* @param {DeviceCapabilities.DeviceCapabilities.ILIDMigration=} [properties] Properties to set
* @returns {DeviceCapabilities.DeviceCapabilities.LIDMigration} LIDMigration instance
*/
LIDMigration.create = function create(properties) {
return new LIDMigration(properties);
};
/**
* Encodes the specified LIDMigration message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.LIDMigration.verify|verify} messages.
* @function encode
* @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
* @static
* @param {DeviceCapabilities.DeviceCapabilities.ILIDMigration} message LIDMigration message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LIDMigration.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.chatDbMigrationTimestamp != null && Object.hasOwnProperty.call(message, "chatDbMigrationTimestamp"))
writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.chatDbMigrationTimestamp);
return writer;
};
/**
* Encodes the specified LIDMigration message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.LIDMigration.verify|verify} messages.
* @function encodeDelimited
* @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
* @static
* @param {DeviceCapabilities.DeviceCapabilities.ILIDMigration} message LIDMigration message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LIDMigration.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a LIDMigration message from the specified reader or buffer.
* @function decode
* @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {DeviceCapabilities.DeviceCapabilities.LIDMigration} LIDMigration
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LIDMigration.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceCapabilities.DeviceCapabilities.LIDMigration();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.chatDbMigrationTimestamp = reader.uint64();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a LIDMigration message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {DeviceCapabilities.DeviceCapabilities.LIDMigration} LIDMigration
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LIDMigration.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a LIDMigration message.
* @function verify
* @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
LIDMigration.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.chatDbMigrationTimestamp != null && message.hasOwnProperty("chatDbMigrationTimestamp")) {
properties._chatDbMigrationTimestamp = 1;
if (!$util.isInteger(message.chatDbMigrationTimestamp) && !(message.chatDbMigrationTimestamp && $util.isInteger(message.chatDbMigrationTimestamp.low) && $util.isInteger(message.chatDbMigrationTimestamp.high)))
return "chatDbMigrationTimestamp: integer|Long expected";
}
return null;
};
/**
* Creates a LIDMigration message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
* @static
* @param {Object.<string,*>} object Plain object
* @returns {DeviceCapabilities.DeviceCapabilities.LIDMigration} LIDMigration
*/
LIDMigration.fromObject = function fromObject(object) {
if (object instanceof $root.DeviceCapabilities.DeviceCapabilities.LIDMigration)
return object;
var message = new $root.DeviceCapabilities.DeviceCapabilities.LIDMigration();
if (object.chatDbMigrationTimestamp != null)
if ($util.Long)
(message.chatDbMigrationTimestamp = $util.Long.fromValue(object.chatDbMigrationTimestamp)).unsigned = true;
else if (typeof object.chatDbMigrationTimestamp === "string")
message.chatDbMigrationTimestamp = parseInt(object.chatDbMigrationTimestamp, 10);
else if (typeof object.chatDbMigrationTimestamp === "number")
message.chatDbMigrationTimestamp = object.chatDbMigrationTimestamp;
else if (typeof object.chatDbMigrationTimestamp === "object")
message.chatDbMigrationTimestamp = new $util.LongBits(object.chatDbMigrationTimestamp.low >>> 0, object.chatDbMigrationTimestamp.high >>> 0).toNumber(true);
return message;
};
/**
* Creates a plain object from a LIDMigration message. Also converts values to other types if specified.
* @function toObject
* @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
* @static
* @param {DeviceCapabilities.DeviceCapabilities.LIDMigration} message LIDMigration
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
LIDMigration.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.chatDbMigrationTimestamp != null && message.hasOwnProperty("chatDbMigrationTimestamp")) {
if (typeof message.chatDbMigrationTimestamp === "number")
object.chatDbMigrationTimestamp = options.longs === String ? String(message.chatDbMigrationTimestamp) : message.chatDbMigrationTimestamp;
else
object.chatDbMigrationTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.chatDbMigrationTimestamp) : options.longs === Number ? new $util.LongBits(message.chatDbMigrationTimestamp.low >>> 0, message.chatDbMigrationTimestamp.high >>> 0).toNumber(true) : message.chatDbMigrationTimestamp;
if (options.oneofs)
object._chatDbMigrationTimestamp = "chatDbMigrationTimestamp";
}
return object;
};
/**
* Converts this LIDMigration to JSON.
* @function toJSON
* @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
* @instance
* @returns {Object.<string,*>} JSON object
*/
LIDMigration.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for LIDMigration
* @function getTypeUrl
* @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
LIDMigration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/DeviceCapabilities.DeviceCapabilities.LIDMigration";
};
return LIDMigration;
})();
return DeviceCapabilities;
})();
return DeviceCapabilities;
})();
$root.Protocol = (function() {
/**
* Namespace Protocol.
* @exports Protocol
* @namespace
*/
var Protocol = {};
Protocol.LimitSharing = (function() {
/**
* Properties of a LimitSharing.
* @memberof Protocol
* @interface ILimitSharing
* @property {boolean|null} [sharingLimited] LimitSharing sharingLimited
* @property {Protocol.LimitSharing.TriggerType|null} [trigger] LimitSharing trigger
* @property {number|Long|null} [limitSharingSettingTimestamp] LimitSharing limitSharingSettingTimestamp
* @property {boolean|null} [initiatedByMe] LimitSharing initiatedByMe
*/
/**
* Constructs a new LimitSharing.
* @memberof Protocol
* @classdesc Represents a LimitSharing.
* @implements ILimitSharing
* @constructor
* @param {Protocol.ILimitSharing=} [properties] Properties to set
*/
function LimitSharing(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* LimitSharing sharingLimited.
* @member {boolean|null|undefined} sharingLimited
* @memberof Protocol.LimitSharing
* @instance
*/
LimitSharing.prototype.sharingLimited = null;
/**
* LimitSharing trigger.
* @member {Protocol.LimitSharing.TriggerType|null|undefined} trigger
* @memberof Protocol.LimitSharing
* @instance
*/
LimitSharing.prototype.trigger = null;
/**
* LimitSharing limitSharingSettingTimestamp.
* @member {number|Long|null|undefined} limitSharingSettingTimestamp
* @memberof Protocol.LimitSharing
* @instance
*/
LimitSharing.prototype.limitSharingSettingTimestamp = null;
/**
* LimitSharing initiatedByMe.
* @member {boolean|null|undefined} initiatedByMe
* @memberof Protocol.LimitSharing
* @instance
*/
LimitSharing.prototype.initiatedByMe = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* LimitSharing _sharingLimited.
* @member {"sharingLimited"|undefined} _sharingLimited
* @memberof Protocol.LimitSharing
* @instance
*/
Object.defineProperty(LimitSharing.prototype, "_sharingLimited", {
get: $util.oneOfGetter($oneOfFields = ["sharingLimited"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* LimitSharing _trigger.
* @member {"trigger"|undefined} _trigger
* @memberof Protocol.LimitSharing
* @instance
*/
Object.defineProperty(LimitSharing.prototype, "_trigger", {
get: $util.oneOfGetter($oneOfFields = ["trigger"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* LimitSharing _limitSharingSettingTimestamp.
* @member {"limitSharingSettingTimestamp"|undefined} _limitSharingSettingTimestamp
* @memberof Protocol.LimitSharing
* @instance
*/
Object.defineProperty(LimitSharing.prototype, "_limitSharingSettingTimestamp", {
get: $util.oneOfGetter($oneOfFields = ["limitSharingSettingTimestamp"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* LimitSharing _initiatedByMe.
* @member {"initiatedByMe"|undefined} _initiatedByMe
* @memberof Protocol.LimitSharing
* @instance
*/
Object.defineProperty(LimitSharing.prototype, "_initiatedByMe", {
get: $util.oneOfGetter($oneOfFields = ["initiatedByMe"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new LimitSharing instance using the specified properties.
* @function create
* @memberof Protocol.LimitSharing
* @static
* @param {Protocol.ILimitSharing=} [properties] Properties to set
* @returns {Protocol.LimitSharing} LimitSharing instance
*/
LimitSharing.create = function create(properties) {
return new LimitSharing(properties);
};
/**
* Encodes the specified LimitSharing message. Does not implicitly {@link Protocol.LimitSharing.verify|verify} messages.
* @function encode
* @memberof Protocol.LimitSharing
* @static
* @param {Protocol.ILimitSharing} message LimitSharing message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LimitSharing.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.sharingLimited != null && Object.hasOwnProperty.call(message, "sharingLimited"))
writer.uint32(/* id 1, wireType 0 =*/8).bool(message.sharingLimited);
if (message.trigger != null && Object.hasOwnProperty.call(message, "trigger"))
writer.uint32(/* id 2, wireType 0 =*/16).int32(message.trigger);
if (message.limitSharingSettingTimestamp != null && Object.hasOwnProperty.call(message, "limitSharingSettingTimestamp"))
writer.uint32(/* id 3, wireType 0 =*/24).int64(message.limitSharingSettingTimestamp);
if (message.initiatedByMe != null && Object.hasOwnProperty.call(message, "initiatedByMe"))
writer.uint32(/* id 4, wireType 0 =*/32).bool(message.initiatedByMe);
return writer;
};
/**
* Encodes the specified LimitSharing message, length delimited. Does not implicitly {@link Protocol.LimitSharing.verify|verify} messages.
* @function encodeDelimited
* @memberof Protocol.LimitSharing
* @static
* @param {Protocol.ILimitSharing} message LimitSharing message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
LimitSharing.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a LimitSharing message from the specified reader or buffer.
* @function decode
* @memberof Protocol.LimitSharing
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {Protocol.LimitSharing} LimitSharing
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LimitSharing.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.LimitSharing();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.sharingLimited = reader.bool();
break;
}
case 2: {
message.trigger = reader.int32();
break;
}
case 3: {
message.limitSharingSettingTimestamp = reader.int64();
break;
}
case 4: {
message.initiatedByMe = reader.bool();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a LimitSharing message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof Protocol.LimitSharing
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {Protocol.LimitSharing} LimitSharing
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
LimitSharing.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a LimitSharing message.
* @function verify
* @memberof Protocol.LimitSharing
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
LimitSharing.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.sharingLimited != null && message.hasOwnProperty("sharingLimited")) {
properties._sharingLimited = 1;
if (typeof message.sharingLimited !== "boolean")
return "sharingLimited: boolean expected";
}
if (message.trigger != null && message.hasOwnProperty("trigger")) {
properties._trigger = 1;
switch (message.trigger) {
default:
return "trigger: enum value expected";
case 0:
case 1:
case 2:
case 3:
break;
}
}
if (message.limitSharingSettingTimestamp != null && message.hasOwnProperty("limitSharingSettingTimestamp")) {
properties._limitSharingSettingTimestamp = 1;
if (!$util.isInteger(message.limitSharingSettingTimestamp) && !(message.limitSharingSettingTimestamp && $util.isInteger(message.limitSharingSettingTimestamp.low) && $util.isInteger(message.limitSharingSettingTimestamp.high)))
return "limitSharingSettingTimestamp: integer|Long expected";
}
if (message.initiatedByMe != null && message.hasOwnProperty("initiatedByMe")) {
properties._initiatedByMe = 1;
if (typeof message.initiatedByMe !== "boolean")
return "initiatedByMe: boolean expected";
}
return null;
};
/**
* Creates a LimitSharing message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof Protocol.LimitSharing
* @static
* @param {Object.<string,*>} object Plain object
* @returns {Protocol.LimitSharing} LimitSharing
*/
LimitSharing.fromObject = function fromObject(object) {
if (object instanceof $root.Protocol.LimitSharing)
return object;
var message = new $root.Protocol.LimitSharing();
if (object.sharingLimited != null)
message.sharingLimited = Boolean(object.sharingLimited);
switch (object.trigger) {
default:
if (typeof object.trigger === "number") {
message.trigger = object.trigger;
break;
}
break;
case "UNKNOWN":
case 0:
message.trigger = 0;
break;
case "CHAT_SETTING":
case 1:
message.trigger = 1;
break;
case "BIZ_SUPPORTS_FB_HOSTING":
case 2:
message.trigger = 2;
break;
case "UNKNOWN_GROUP":
case 3:
message.trigger = 3;
break;
}
if (object.limitSharingSettingTimestamp != null)
if ($util.Long)
(message.limitSharingSettingTimestamp = $util.Long.fromValue(object.limitSharingSettingTimestamp)).unsigned = false;
else if (typeof object.limitSharingSettingTimestamp === "string")
message.limitSharingSettingTimestamp = parseInt(object.limitSharingSettingTimestamp, 10);
else if (typeof object.limitSharingSettingTimestamp === "number")
message.limitSharingSettingTimestamp = object.limitSharingSettingTimestamp;
else if (typeof object.limitSharingSettingTimestamp === "object")
message.limitSharingSettingTimestamp = new $util.LongBits(object.limitSharingSettingTimestamp.low >>> 0, object.limitSharingSettingTimestamp.high >>> 0).toNumber();
if (object.initiatedByMe != null)
message.initiatedByMe = Boolean(object.initiatedByMe);
return message;
};
/**
* Creates a plain object from a LimitSharing message. Also converts values to other types if specified.
* @function toObject
* @memberof Protocol.LimitSharing
* @static
* @param {Protocol.LimitSharing} message LimitSharing
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
LimitSharing.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.sharingLimited != null && message.hasOwnProperty("sharingLimited")) {
object.sharingLimited = message.sharingLimited;
if (options.oneofs)
object._sharingLimited = "sharingLimited";
}
if (message.trigger != null && message.hasOwnProperty("trigger")) {
object.trigger = options.enums === String ? $root.Protocol.LimitSharing.TriggerType[message.trigger] === undefined ? message.trigger : $root.Protocol.LimitSharing.TriggerType[message.trigger] : message.trigger;
if (options.oneofs)
object._trigger = "trigger";
}
if (message.limitSharingSettingTimestamp != null && message.hasOwnProperty("limitSharingSettingTimestamp")) {
if (typeof message.limitSharingSettingTimestamp === "number")
object.limitSharingSettingTimestamp = options.longs === String ? String(message.limitSharingSettingTimestamp) : message.limitSharingSettingTimestamp;
else
object.limitSharingSettingTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.limitSharingSettingTimestamp) : options.longs === Number ? new $util.LongBits(message.limitSharingSettingTimestamp.low >>> 0, message.limitSharingSettingTimestamp.high >>> 0).toNumber() : message.limitSharingSettingTimestamp;
if (options.oneofs)
object._limitSharingSettingTimestamp = "limitSharingSettingTimestamp";
}
if (message.initiatedByMe != null && message.hasOwnProperty("initiatedByMe")) {
object.initiatedByMe = message.initiatedByMe;
if (options.oneofs)
object._initiatedByMe = "initiatedByMe";
}
return object;
};
/**
* Converts this LimitSharing to JSON.
* @function toJSON
* @memberof Protocol.LimitSharing
* @instance
* @returns {Object.<string,*>} JSON object
*/
LimitSharing.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for LimitSharing
* @function getTypeUrl
* @memberof Protocol.LimitSharing
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
LimitSharing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/Protocol.LimitSharing";
};
/**
* TriggerType enum.
* @name Protocol.LimitSharing.TriggerType
* @enum {number}
* @property {number} UNKNOWN=0 UNKNOWN value
* @property {number} CHAT_SETTING=1 CHAT_SETTING value
* @property {number} BIZ_SUPPORTS_FB_HOSTING=2 BIZ_SUPPORTS_FB_HOSTING value
* @property {number} UNKNOWN_GROUP=3 UNKNOWN_GROUP value
*/
LimitSharing.TriggerType = (function() {
var valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "UNKNOWN"] = 0;
values[valuesById[1] = "CHAT_SETTING"] = 1;
values[valuesById[2] = "BIZ_SUPPORTS_FB_HOSTING"] = 2;
values[valuesById[3] = "UNKNOWN_GROUP"] = 3;
return values;
})();
return LimitSharing;
})();
Protocol.MessageKey = (function() {
/**
* Properties of a MessageKey.
* @memberof Protocol
* @interface IMessageKey
* @property {string|null} [remoteJid] MessageKey remoteJid
* @property {boolean|null} [fromMe] MessageKey fromMe
* @property {string|null} [id] MessageKey id
* @property {string|null} [participant] MessageKey participant
*/
/**
* Constructs a new MessageKey.
* @memberof Protocol
* @classdesc Represents a MessageKey.
* @implements IMessageKey
* @constructor
* @param {Protocol.IMessageKey=} [properties] Properties to set
*/
function MessageKey(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* MessageKey remoteJid.
* @member {string|null|undefined} remoteJid
* @memberof Protocol.MessageKey
* @instance
*/
MessageKey.prototype.remoteJid = null;
/**
* MessageKey fromMe.
* @member {boolean|null|undefined} fromMe
* @memberof Protocol.MessageKey
* @instance
*/
MessageKey.prototype.fromMe = null;
/**
* MessageKey id.
* @member {string|null|undefined} id
* @memberof Protocol.MessageKey
* @instance
*/
MessageKey.prototype.id = null;
/**
* MessageKey participant.
* @member {string|null|undefined} participant
* @memberof Protocol.MessageKey
* @instance
*/
MessageKey.prototype.participant = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* MessageKey _remoteJid.
* @member {"remoteJid"|undefined} _remoteJid
* @memberof Protocol.MessageKey
* @instance
*/
Object.defineProperty(MessageKey.prototype, "_remoteJid", {
get: $util.oneOfGetter($oneOfFields = ["remoteJid"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MessageKey _fromMe.
* @member {"fromMe"|undefined} _fromMe
* @memberof Protocol.MessageKey
* @instance
*/
Object.defineProperty(MessageKey.prototype, "_fromMe", {
get: $util.oneOfGetter($oneOfFields = ["fromMe"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MessageKey _id.
* @member {"id"|undefined} _id
* @memberof Protocol.MessageKey
* @instance
*/
Object.defineProperty(MessageKey.prototype, "_id", {
get: $util.oneOfGetter($oneOfFields = ["id"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* MessageKey _participant.
* @member {"participant"|undefined} _participant
* @memberof Protocol.MessageKey
* @instance
*/
Object.defineProperty(MessageKey.prototype, "_participant", {
get: $util.oneOfGetter($oneOfFields = ["participant"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new MessageKey instance using the specified properties.
* @function create
* @memberof Protocol.MessageKey
* @static
* @param {Protocol.IMessageKey=} [properties] Properties to set
* @returns {Protocol.MessageKey} MessageKey instance
*/
MessageKey.create = function create(properties) {
return new MessageKey(properties);
};
/**
* Encodes the specified MessageKey message. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
* @function encode
* @memberof Protocol.MessageKey
* @static
* @param {Protocol.IMessageKey} message MessageKey message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
MessageKey.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.remoteJid != null && Object.hasOwnProperty.call(message, "remoteJid"))
writer.uint32(/* id 1, wireType 2 =*/10).string(message.remoteJid);
if (message.fromMe != null && Object.hasOwnProperty.call(message, "fromMe"))
writer.uint32(/* id 2, wireType 0 =*/16).bool(message.fromMe);
if (message.id != null && Object.hasOwnProperty.call(message, "id"))
writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
if (message.participant != null && Object.hasOwnProperty.call(message, "participant"))
writer.uint32(/* id 4, wireType 2 =*/34).string(message.participant);
return writer;
};
/**
* Encodes the specified MessageKey message, length delimited. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
* @function encodeDelimited
* @memberof Protocol.MessageKey
* @static
* @param {Protocol.IMessageKey} message MessageKey message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
MessageKey.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a MessageKey message from the specified reader or buffer.
* @function decode
* @memberof Protocol.MessageKey
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {Protocol.MessageKey} MessageKey
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
MessageKey.decode = function decode(reader, length, error) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.MessageKey();
while (reader.pos < end) {
var tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.remoteJid = reader.string();
break;
}
case 2: {
message.fromMe = reader.bool();
break;
}
case 3: {
message.id = reader.string();
break;
}
case 4: {
message.participant = reader.string();
break;
}
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a MessageKey message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof Protocol.MessageKey
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {Protocol.MessageKey} MessageKey
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
MessageKey.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a MessageKey message.
* @function verify
* @memberof Protocol.MessageKey
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
MessageKey.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.remoteJid != null && message.hasOwnProperty("remoteJid")) {
properties._remoteJid = 1;
if (!$util.isString(message.remoteJid))
return "remoteJid: string expected";
}
if (message.fromMe != null && message.hasOwnProperty("fromMe")) {
properties._fromMe = 1;
if (typeof message.fromMe !== "boolean")
return "fromMe: boolean expected";
}
if (message.id != null && message.hasOwnProperty("id")) {
properties._id = 1;
if (!$util.isString(message.id))
return "id: string expected";
}
if (message.participant != null && message.hasOwnProperty("participant")) {
properties._participant = 1;
if (!$util.isString(message.participant))
return "participant: string expected";
}
return null;
};
/**
* Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof Protocol.MessageKey
* @static
* @param {Object.<string,*>} object Plain object
* @returns {Protocol.MessageKey} MessageKey
*/
MessageKey.fromObject = function fromObject(object) {
if (object instanceof $root.Protocol.MessageKey)
return object;
var message = new $root.Protocol.MessageKey();
if (object.remoteJid != null)
message.remoteJid = String(object.remoteJid);
if (object.fromMe != null)
message.fromMe = Boolean(object.fromMe);
if (object.id != null)
message.id = String(object.id);
if (object.participant != null)
message.participant = String(object.participant);
return message;
};
/**
* Creates a plain object from a MessageKey message. Also converts values to other types if specified.
* @function toObject
* @memberof Protocol.MessageKey
* @static
* @param {Protocol.MessageKey} message MessageKey
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
MessageKey.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.remoteJid != null && message.hasOwnProperty("remoteJid")) {
object.remoteJid = message.remoteJid;
if (options.oneofs)
object._remoteJid = "remoteJid";
}
if (message.fromMe != null && message.hasOwnProperty("fromMe")) {
object.fromMe = message.fromMe;
if (options.oneofs)
object._fromMe = "fromMe";
}
if (message.id != null && message.hasOwnProperty("id")) {
object.id = message.id;
if (options.oneofs)
object._id = "id";
}
if (message.participant != null && message.hasOwnProperty("participant")) {
object.participant = message.participant;
if (options.oneofs)
object._participant = "participant";
}
return object;
};
/**
* Converts this MessageKey to JSON.
* @function toJSON
* @memberof Protocol.MessageKey
* @instance
* @returns {Object.<string,*>} JSON object
*/
MessageKey.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
/**
* Gets the default type url for MessageKey
* @function getTypeUrl
* @memberof Protocol.MessageKey
* @static
* @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns {string} The default type url
*/
MessageKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
if (typeUrlPrefix === undefined) {
typeUrlPrefix = "type.googleapis.com";
}
return typeUrlPrefix + "/Protocol.MessageKey";
};
return MessageKey;
})();
return Protocol;
})();
module.exports = $root;
