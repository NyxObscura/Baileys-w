import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace ServerSync. */
export namespace ServerSync {

    /** Properties of a SyncdPatch. */
    interface ISyncdPatch {

        /** SyncdPatch version */
        version?: (ServerSync.ISyncdVersion|null);

        /** SyncdPatch mutations */
        mutations?: (ServerSync.ISyncdMutation[]|null);

        /** SyncdPatch externalMutations */
        externalMutations?: (ServerSync.IExternalBlobReference|null);

        /** SyncdPatch snapshotMac */
        snapshotMac?: (Uint8Array|null);

        /** SyncdPatch patchMac */
        patchMac?: (Uint8Array|null);

        /** SyncdPatch keyId */
        keyId?: (ServerSync.IKeyId|null);

        /** SyncdPatch exitCode */
        exitCode?: (ServerSync.IExitCode|null);

        /** SyncdPatch deviceIndex */
        deviceIndex?: (number|null);

        /** SyncdPatch clientDebugData */
        clientDebugData?: (Uint8Array|null);
    }

    /** Represents a SyncdPatch. */
    class SyncdPatch implements ISyncdPatch {

        /**
         * Constructs a new SyncdPatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.ISyncdPatch);

        /** SyncdPatch version. */
        public version?: (ServerSync.ISyncdVersion|null);

        /** SyncdPatch mutations. */
        public mutations: ServerSync.ISyncdMutation[];

        /** SyncdPatch externalMutations. */
        public externalMutations?: (ServerSync.IExternalBlobReference|null);

        /** SyncdPatch snapshotMac. */
        public snapshotMac?: (Uint8Array|null);

        /** SyncdPatch patchMac. */
        public patchMac?: (Uint8Array|null);

        /** SyncdPatch keyId. */
        public keyId?: (ServerSync.IKeyId|null);

        /** SyncdPatch exitCode. */
        public exitCode?: (ServerSync.IExitCode|null);

        /** SyncdPatch deviceIndex. */
        public deviceIndex?: (number|null);

        /** SyncdPatch clientDebugData. */
        public clientDebugData?: (Uint8Array|null);

        /** SyncdPatch _version. */
        public _version?: "version";

        /** SyncdPatch _externalMutations. */
        public _externalMutations?: "externalMutations";

        /** SyncdPatch _snapshotMac. */
        public _snapshotMac?: "snapshotMac";

        /** SyncdPatch _patchMac. */
        public _patchMac?: "patchMac";

        /** SyncdPatch _keyId. */
        public _keyId?: "keyId";

        /** SyncdPatch _exitCode. */
        public _exitCode?: "exitCode";

        /** SyncdPatch _deviceIndex. */
        public _deviceIndex?: "deviceIndex";

        /** SyncdPatch _clientDebugData. */
        public _clientDebugData?: "clientDebugData";

        /**
         * Creates a new SyncdPatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdPatch instance
         */
        public static create(properties?: ServerSync.ISyncdPatch): ServerSync.SyncdPatch;

        /**
         * Encodes the specified SyncdPatch message. Does not implicitly {@link ServerSync.SyncdPatch.verify|verify} messages.
         * @param message SyncdPatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerSync.ISyncdPatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdPatch message, length delimited. Does not implicitly {@link ServerSync.SyncdPatch.verify|verify} messages.
         * @param message SyncdPatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerSync.ISyncdPatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdPatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdPatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdPatch;

        /**
         * Decodes a SyncdPatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdPatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdPatch;

        /**
         * Verifies a SyncdPatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdPatch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdPatch
         */
        public static fromObject(object: { [k: string]: any }): ServerSync.SyncdPatch;

        /**
         * Creates a plain object from a SyncdPatch message. Also converts values to other types if specified.
         * @param message SyncdPatch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerSync.SyncdPatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdPatch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncdPatch
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SyncdMutation. */
    interface ISyncdMutation {

        /** SyncdMutation operation */
        operation?: (ServerSync.SyncdMutation.SyncdOperation|null);

        /** SyncdMutation record */
        record?: (ServerSync.ISyncdRecord|null);
    }

    /** Represents a SyncdMutation. */
    class SyncdMutation implements ISyncdMutation {

        /**
         * Constructs a new SyncdMutation.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.ISyncdMutation);

        /** SyncdMutation operation. */
        public operation?: (ServerSync.SyncdMutation.SyncdOperation|null);

        /** SyncdMutation record. */
        public record?: (ServerSync.ISyncdRecord|null);

        /** SyncdMutation _operation. */
        public _operation?: "operation";

        /** SyncdMutation _record. */
        public _record?: "record";

        /**
         * Creates a new SyncdMutation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdMutation instance
         */
        public static create(properties?: ServerSync.ISyncdMutation): ServerSync.SyncdMutation;

        /**
         * Encodes the specified SyncdMutation message. Does not implicitly {@link ServerSync.SyncdMutation.verify|verify} messages.
         * @param message SyncdMutation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerSync.ISyncdMutation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdMutation message, length delimited. Does not implicitly {@link ServerSync.SyncdMutation.verify|verify} messages.
         * @param message SyncdMutation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerSync.ISyncdMutation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdMutation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdMutation;

        /**
         * Decodes a SyncdMutation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdMutation;

        /**
         * Verifies a SyncdMutation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdMutation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdMutation
         */
        public static fromObject(object: { [k: string]: any }): ServerSync.SyncdMutation;

        /**
         * Creates a plain object from a SyncdMutation message. Also converts values to other types if specified.
         * @param message SyncdMutation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerSync.SyncdMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdMutation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncdMutation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SyncdMutation {

        /** SyncdOperation enum. */
        enum SyncdOperation {
            SET = 0,
            REMOVE = 1
        }
    }

    /** Properties of a SyncdMutations. */
    interface ISyncdMutations {

        /** SyncdMutations mutations */
        mutations?: (ServerSync.ISyncdMutation[]|null);
    }

    /** Represents a SyncdMutations. */
    class SyncdMutations implements ISyncdMutations {

        /**
         * Constructs a new SyncdMutations.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.ISyncdMutations);

        /** SyncdMutations mutations. */
        public mutations: ServerSync.ISyncdMutation[];

        /**
         * Creates a new SyncdMutations instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdMutations instance
         */
        public static create(properties?: ServerSync.ISyncdMutations): ServerSync.SyncdMutations;

        /**
         * Encodes the specified SyncdMutations message. Does not implicitly {@link ServerSync.SyncdMutations.verify|verify} messages.
         * @param message SyncdMutations message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerSync.ISyncdMutations, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdMutations message, length delimited. Does not implicitly {@link ServerSync.SyncdMutations.verify|verify} messages.
         * @param message SyncdMutations message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerSync.ISyncdMutations, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdMutations message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdMutations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdMutations;

        /**
         * Decodes a SyncdMutations message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdMutations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdMutations;

        /**
         * Verifies a SyncdMutations message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdMutations message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdMutations
         */
        public static fromObject(object: { [k: string]: any }): ServerSync.SyncdMutations;

        /**
         * Creates a plain object from a SyncdMutations message. Also converts values to other types if specified.
         * @param message SyncdMutations
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerSync.SyncdMutations, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdMutations to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncdMutations
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SyncdSnapshot. */
    interface ISyncdSnapshot {

        /** SyncdSnapshot version */
        version?: (ServerSync.ISyncdVersion|null);

        /** SyncdSnapshot records */
        records?: (ServerSync.ISyncdRecord[]|null);

        /** SyncdSnapshot mac */
        mac?: (Uint8Array|null);

        /** SyncdSnapshot keyId */
        keyId?: (ServerSync.IKeyId|null);
    }

    /** Represents a SyncdSnapshot. */
    class SyncdSnapshot implements ISyncdSnapshot {

        /**
         * Constructs a new SyncdSnapshot.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.ISyncdSnapshot);

        /** SyncdSnapshot version. */
        public version?: (ServerSync.ISyncdVersion|null);

        /** SyncdSnapshot records. */
        public records: ServerSync.ISyncdRecord[];

        /** SyncdSnapshot mac. */
        public mac?: (Uint8Array|null);

        /** SyncdSnapshot keyId. */
        public keyId?: (ServerSync.IKeyId|null);

        /** SyncdSnapshot _version. */
        public _version?: "version";

        /** SyncdSnapshot _mac. */
        public _mac?: "mac";

        /** SyncdSnapshot _keyId. */
        public _keyId?: "keyId";

        /**
         * Creates a new SyncdSnapshot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdSnapshot instance
         */
        public static create(properties?: ServerSync.ISyncdSnapshot): ServerSync.SyncdSnapshot;

        /**
         * Encodes the specified SyncdSnapshot message. Does not implicitly {@link ServerSync.SyncdSnapshot.verify|verify} messages.
         * @param message SyncdSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerSync.ISyncdSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdSnapshot message, length delimited. Does not implicitly {@link ServerSync.SyncdSnapshot.verify|verify} messages.
         * @param message SyncdSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerSync.ISyncdSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdSnapshot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdSnapshot;

        /**
         * Decodes a SyncdSnapshot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdSnapshot;

        /**
         * Verifies a SyncdSnapshot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdSnapshot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdSnapshot
         */
        public static fromObject(object: { [k: string]: any }): ServerSync.SyncdSnapshot;

        /**
         * Creates a plain object from a SyncdSnapshot message. Also converts values to other types if specified.
         * @param message SyncdSnapshot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerSync.SyncdSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdSnapshot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncdSnapshot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ExternalBlobReference. */
    interface IExternalBlobReference {

        /** ExternalBlobReference mediaKey */
        mediaKey?: (Uint8Array|null);

        /** ExternalBlobReference directPath */
        directPath?: (string|null);

        /** ExternalBlobReference handle */
        handle?: (string|null);

        /** ExternalBlobReference fileSizeBytes */
        fileSizeBytes?: (number|Long|null);

        /** ExternalBlobReference fileSha256 */
        fileSha256?: (Uint8Array|null);

        /** ExternalBlobReference fileEncSha256 */
        fileEncSha256?: (Uint8Array|null);
    }

    /** Represents an ExternalBlobReference. */
    class ExternalBlobReference implements IExternalBlobReference {

        /**
         * Constructs a new ExternalBlobReference.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.IExternalBlobReference);

        /** ExternalBlobReference mediaKey. */
        public mediaKey?: (Uint8Array|null);

        /** ExternalBlobReference directPath. */
        public directPath?: (string|null);

        /** ExternalBlobReference handle. */
        public handle?: (string|null);

        /** ExternalBlobReference fileSizeBytes. */
        public fileSizeBytes?: (number|Long|null);

        /** ExternalBlobReference fileSha256. */
        public fileSha256?: (Uint8Array|null);

        /** ExternalBlobReference fileEncSha256. */
        public fileEncSha256?: (Uint8Array|null);

        /** ExternalBlobReference _mediaKey. */
        public _mediaKey?: "mediaKey";

        /** ExternalBlobReference _directPath. */
        public _directPath?: "directPath";

        /** ExternalBlobReference _handle. */
        public _handle?: "handle";

        /** ExternalBlobReference _fileSizeBytes. */
        public _fileSizeBytes?: "fileSizeBytes";

        /** ExternalBlobReference _fileSha256. */
        public _fileSha256?: "fileSha256";

        /** ExternalBlobReference _fileEncSha256. */
        public _fileEncSha256?: "fileEncSha256";

        /**
         * Creates a new ExternalBlobReference instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExternalBlobReference instance
         */
        public static create(properties?: ServerSync.IExternalBlobReference): ServerSync.ExternalBlobReference;

        /**
         * Encodes the specified ExternalBlobReference message. Does not implicitly {@link ServerSync.ExternalBlobReference.verify|verify} messages.
         * @param message ExternalBlobReference message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerSync.IExternalBlobReference, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExternalBlobReference message, length delimited. Does not implicitly {@link ServerSync.ExternalBlobReference.verify|verify} messages.
         * @param message ExternalBlobReference message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerSync.IExternalBlobReference, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExternalBlobReference message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExternalBlobReference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.ExternalBlobReference;

        /**
         * Decodes an ExternalBlobReference message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExternalBlobReference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.ExternalBlobReference;

        /**
         * Verifies an ExternalBlobReference message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExternalBlobReference message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExternalBlobReference
         */
        public static fromObject(object: { [k: string]: any }): ServerSync.ExternalBlobReference;

        /**
         * Creates a plain object from an ExternalBlobReference message. Also converts values to other types if specified.
         * @param message ExternalBlobReference
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerSync.ExternalBlobReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExternalBlobReference to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ExternalBlobReference
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SyncdRecord. */
    interface ISyncdRecord {

        /** SyncdRecord index */
        index?: (ServerSync.ISyncdIndex|null);

        /** SyncdRecord value */
        value?: (ServerSync.ISyncdValue|null);

        /** SyncdRecord keyId */
        keyId?: (ServerSync.IKeyId|null);
    }

    /** Represents a SyncdRecord. */
    class SyncdRecord implements ISyncdRecord {

        /**
         * Constructs a new SyncdRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.ISyncdRecord);

        /** SyncdRecord index. */
        public index?: (ServerSync.ISyncdIndex|null);

        /** SyncdRecord value. */
        public value?: (ServerSync.ISyncdValue|null);

        /** SyncdRecord keyId. */
        public keyId?: (ServerSync.IKeyId|null);

        /** SyncdRecord _index. */
        public _index?: "index";

        /** SyncdRecord _value. */
        public _value?: "value";

        /** SyncdRecord _keyId. */
        public _keyId?: "keyId";

        /**
         * Creates a new SyncdRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdRecord instance
         */
        public static create(properties?: ServerSync.ISyncdRecord): ServerSync.SyncdRecord;

        /**
         * Encodes the specified SyncdRecord message. Does not implicitly {@link ServerSync.SyncdRecord.verify|verify} messages.
         * @param message SyncdRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerSync.ISyncdRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdRecord message, length delimited. Does not implicitly {@link ServerSync.SyncdRecord.verify|verify} messages.
         * @param message SyncdRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerSync.ISyncdRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdRecord;

        /**
         * Decodes a SyncdRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdRecord;

        /**
         * Verifies a SyncdRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdRecord
         */
        public static fromObject(object: { [k: string]: any }): ServerSync.SyncdRecord;

        /**
         * Creates a plain object from a SyncdRecord message. Also converts values to other types if specified.
         * @param message SyncdRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerSync.SyncdRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncdRecord
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KeyId. */
    interface IKeyId {

        /** KeyId id */
        id?: (Uint8Array|null);
    }

    /** Represents a KeyId. */
    class KeyId implements IKeyId {

        /**
         * Constructs a new KeyId.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.IKeyId);

        /** KeyId id. */
        public id?: (Uint8Array|null);

        /** KeyId _id. */
        public _id?: "id";

        /**
         * Creates a new KeyId instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyId instance
         */
        public static create(properties?: ServerSync.IKeyId): ServerSync.KeyId;

        /**
         * Encodes the specified KeyId message. Does not implicitly {@link ServerSync.KeyId.verify|verify} messages.
         * @param message KeyId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerSync.IKeyId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyId message, length delimited. Does not implicitly {@link ServerSync.KeyId.verify|verify} messages.
         * @param message KeyId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerSync.IKeyId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyId message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.KeyId;

        /**
         * Decodes a KeyId message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.KeyId;

        /**
         * Verifies a KeyId message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyId
         */
        public static fromObject(object: { [k: string]: any }): ServerSync.KeyId;

        /**
         * Creates a plain object from a KeyId message. Also converts values to other types if specified.
         * @param message KeyId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerSync.KeyId, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KeyId
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SyncdValue. */
    interface ISyncdValue {

        /** SyncdValue blob */
        blob?: (Uint8Array|null);
    }

    /** Represents a SyncdValue. */
    class SyncdValue implements ISyncdValue {

        /**
         * Constructs a new SyncdValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.ISyncdValue);

        /** SyncdValue blob. */
        public blob?: (Uint8Array|null);

        /** SyncdValue _blob. */
        public _blob?: "blob";

        /**
         * Creates a new SyncdValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdValue instance
         */
        public static create(properties?: ServerSync.ISyncdValue): ServerSync.SyncdValue;

        /**
         * Encodes the specified SyncdValue message. Does not implicitly {@link ServerSync.SyncdValue.verify|verify} messages.
         * @param message SyncdValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerSync.ISyncdValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdValue message, length delimited. Does not implicitly {@link ServerSync.SyncdValue.verify|verify} messages.
         * @param message SyncdValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerSync.ISyncdValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdValue;

        /**
         * Decodes a SyncdValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdValue;

        /**
         * Verifies a SyncdValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdValue
         */
        public static fromObject(object: { [k: string]: any }): ServerSync.SyncdValue;

        /**
         * Creates a plain object from a SyncdValue message. Also converts values to other types if specified.
         * @param message SyncdValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerSync.SyncdValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncdValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SyncdIndex. */
    interface ISyncdIndex {

        /** SyncdIndex blob */
        blob?: (Uint8Array|null);
    }

    /** Represents a SyncdIndex. */
    class SyncdIndex implements ISyncdIndex {

        /**
         * Constructs a new SyncdIndex.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.ISyncdIndex);

        /** SyncdIndex blob. */
        public blob?: (Uint8Array|null);

        /** SyncdIndex _blob. */
        public _blob?: "blob";

        /**
         * Creates a new SyncdIndex instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdIndex instance
         */
        public static create(properties?: ServerSync.ISyncdIndex): ServerSync.SyncdIndex;

        /**
         * Encodes the specified SyncdIndex message. Does not implicitly {@link ServerSync.SyncdIndex.verify|verify} messages.
         * @param message SyncdIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerSync.ISyncdIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdIndex message, length delimited. Does not implicitly {@link ServerSync.SyncdIndex.verify|verify} messages.
         * @param message SyncdIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerSync.ISyncdIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdIndex message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdIndex;

        /**
         * Decodes a SyncdIndex message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdIndex;

        /**
         * Verifies a SyncdIndex message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdIndex message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdIndex
         */
        public static fromObject(object: { [k: string]: any }): ServerSync.SyncdIndex;

        /**
         * Creates a plain object from a SyncdIndex message. Also converts values to other types if specified.
         * @param message SyncdIndex
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerSync.SyncdIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdIndex to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncdIndex
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ExitCode. */
    interface IExitCode {

        /** ExitCode code */
        code?: (number|Long|null);

        /** ExitCode text */
        text?: (string|null);
    }

    /** Represents an ExitCode. */
    class ExitCode implements IExitCode {

        /**
         * Constructs a new ExitCode.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.IExitCode);

        /** ExitCode code. */
        public code?: (number|Long|null);

        /** ExitCode text. */
        public text?: (string|null);

        /** ExitCode _code. */
        public _code?: "code";

        /** ExitCode _text. */
        public _text?: "text";

        /**
         * Creates a new ExitCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitCode instance
         */
        public static create(properties?: ServerSync.IExitCode): ServerSync.ExitCode;

        /**
         * Encodes the specified ExitCode message. Does not implicitly {@link ServerSync.ExitCode.verify|verify} messages.
         * @param message ExitCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerSync.IExitCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitCode message, length delimited. Does not implicitly {@link ServerSync.ExitCode.verify|verify} messages.
         * @param message ExitCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerSync.IExitCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.ExitCode;

        /**
         * Decodes an ExitCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.ExitCode;

        /**
         * Verifies an ExitCode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExitCode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitCode
         */
        public static fromObject(object: { [k: string]: any }): ServerSync.ExitCode;

        /**
         * Creates a plain object from an ExitCode message. Also converts values to other types if specified.
         * @param message ExitCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerSync.ExitCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ExitCode
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SyncdVersion. */
    interface ISyncdVersion {

        /** SyncdVersion version */
        version?: (number|Long|null);
    }

    /** Represents a SyncdVersion. */
    class SyncdVersion implements ISyncdVersion {

        /**
         * Constructs a new SyncdVersion.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerSync.ISyncdVersion);

        /** SyncdVersion version. */
        public version?: (number|Long|null);

        /** SyncdVersion _version. */
        public _version?: "version";

        /**
         * Creates a new SyncdVersion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdVersion instance
         */
        public static create(properties?: ServerSync.ISyncdVersion): ServerSync.SyncdVersion;

        /**
         * Encodes the specified SyncdVersion message. Does not implicitly {@link ServerSync.SyncdVersion.verify|verify} messages.
         * @param message SyncdVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerSync.ISyncdVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdVersion message, length delimited. Does not implicitly {@link ServerSync.SyncdVersion.verify|verify} messages.
         * @param message SyncdVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerSync.ISyncdVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdVersion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSync.SyncdVersion;

        /**
         * Decodes a SyncdVersion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSync.SyncdVersion;

        /**
         * Verifies a SyncdVersion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdVersion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdVersion
         */
        public static fromObject(object: { [k: string]: any }): ServerSync.SyncdVersion;

        /**
         * Creates a plain object from a SyncdVersion message. Also converts values to other types if specified.
         * @param message SyncdVersion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerSync.SyncdVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdVersion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncdVersion
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
