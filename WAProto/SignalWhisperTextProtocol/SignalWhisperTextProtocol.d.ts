import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace SignalWhisperTextProtocol. */
export namespace SignalWhisperTextProtocol {

    /** Properties of a DeviceConsistencyCodeMessage. */
    interface IDeviceConsistencyCodeMessage {

        /** DeviceConsistencyCodeMessage generation */
        generation?: (number|null);

        /** DeviceConsistencyCodeMessage signature */
        signature?: (Uint8Array|null);
    }

    /** Represents a DeviceConsistencyCodeMessage. */
    class DeviceConsistencyCodeMessage implements IDeviceConsistencyCodeMessage {

        /**
         * Constructs a new DeviceConsistencyCodeMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalWhisperTextProtocol.IDeviceConsistencyCodeMessage);

        /** DeviceConsistencyCodeMessage generation. */
        public generation?: (number|null);

        /** DeviceConsistencyCodeMessage signature. */
        public signature?: (Uint8Array|null);

        /** DeviceConsistencyCodeMessage _generation. */
        public _generation?: "generation";

        /** DeviceConsistencyCodeMessage _signature. */
        public _signature?: "signature";

        /**
         * Creates a new DeviceConsistencyCodeMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceConsistencyCodeMessage instance
         */
        public static create(properties?: SignalWhisperTextProtocol.IDeviceConsistencyCodeMessage): SignalWhisperTextProtocol.DeviceConsistencyCodeMessage;

        /**
         * Encodes the specified DeviceConsistencyCodeMessage message. Does not implicitly {@link SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.verify|verify} messages.
         * @param message DeviceConsistencyCodeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SignalWhisperTextProtocol.IDeviceConsistencyCodeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceConsistencyCodeMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.verify|verify} messages.
         * @param message DeviceConsistencyCodeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SignalWhisperTextProtocol.IDeviceConsistencyCodeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceConsistencyCodeMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceConsistencyCodeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalWhisperTextProtocol.DeviceConsistencyCodeMessage;

        /**
         * Decodes a DeviceConsistencyCodeMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceConsistencyCodeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalWhisperTextProtocol.DeviceConsistencyCodeMessage;

        /**
         * Verifies a DeviceConsistencyCodeMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceConsistencyCodeMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceConsistencyCodeMessage
         */
        public static fromObject(object: { [k: string]: any }): SignalWhisperTextProtocol.DeviceConsistencyCodeMessage;

        /**
         * Creates a plain object from a DeviceConsistencyCodeMessage message. Also converts values to other types if specified.
         * @param message DeviceConsistencyCodeMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SignalWhisperTextProtocol.DeviceConsistencyCodeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceConsistencyCodeMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeviceConsistencyCodeMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SenderKeyDistributionMessage. */
    interface ISenderKeyDistributionMessage {

        /** SenderKeyDistributionMessage id */
        id?: (number|null);

        /** SenderKeyDistributionMessage iteration */
        iteration?: (number|null);

        /** SenderKeyDistributionMessage chainKey */
        chainKey?: (Uint8Array|null);

        /** SenderKeyDistributionMessage signingKey */
        signingKey?: (Uint8Array|null);
    }

    /** Represents a SenderKeyDistributionMessage. */
    class SenderKeyDistributionMessage implements ISenderKeyDistributionMessage {

        /**
         * Constructs a new SenderKeyDistributionMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalWhisperTextProtocol.ISenderKeyDistributionMessage);

        /** SenderKeyDistributionMessage id. */
        public id?: (number|null);

        /** SenderKeyDistributionMessage iteration. */
        public iteration?: (number|null);

        /** SenderKeyDistributionMessage chainKey. */
        public chainKey?: (Uint8Array|null);

        /** SenderKeyDistributionMessage signingKey. */
        public signingKey?: (Uint8Array|null);

        /** SenderKeyDistributionMessage _id. */
        public _id?: "id";

        /** SenderKeyDistributionMessage _iteration. */
        public _iteration?: "iteration";

        /** SenderKeyDistributionMessage _chainKey. */
        public _chainKey?: "chainKey";

        /** SenderKeyDistributionMessage _signingKey. */
        public _signingKey?: "signingKey";

        /**
         * Creates a new SenderKeyDistributionMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyDistributionMessage instance
         */
        public static create(properties?: SignalWhisperTextProtocol.ISenderKeyDistributionMessage): SignalWhisperTextProtocol.SenderKeyDistributionMessage;

        /**
         * Encodes the specified SenderKeyDistributionMessage message. Does not implicitly {@link SignalWhisperTextProtocol.SenderKeyDistributionMessage.verify|verify} messages.
         * @param message SenderKeyDistributionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SignalWhisperTextProtocol.ISenderKeyDistributionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyDistributionMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.SenderKeyDistributionMessage.verify|verify} messages.
         * @param message SenderKeyDistributionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SignalWhisperTextProtocol.ISenderKeyDistributionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalWhisperTextProtocol.SenderKeyDistributionMessage;

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalWhisperTextProtocol.SenderKeyDistributionMessage;

        /**
         * Verifies a SenderKeyDistributionMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyDistributionMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyDistributionMessage
         */
        public static fromObject(object: { [k: string]: any }): SignalWhisperTextProtocol.SenderKeyDistributionMessage;

        /**
         * Creates a plain object from a SenderKeyDistributionMessage message. Also converts values to other types if specified.
         * @param message SenderKeyDistributionMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SignalWhisperTextProtocol.SenderKeyDistributionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyDistributionMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderKeyDistributionMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SenderKeyMessage. */
    interface ISenderKeyMessage {

        /** SenderKeyMessage id */
        id?: (number|null);

        /** SenderKeyMessage iteration */
        iteration?: (number|null);

        /** SenderKeyMessage ciphertext */
        ciphertext?: (Uint8Array|null);
    }

    /** Represents a SenderKeyMessage. */
    class SenderKeyMessage implements ISenderKeyMessage {

        /**
         * Constructs a new SenderKeyMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalWhisperTextProtocol.ISenderKeyMessage);

        /** SenderKeyMessage id. */
        public id?: (number|null);

        /** SenderKeyMessage iteration. */
        public iteration?: (number|null);

        /** SenderKeyMessage ciphertext. */
        public ciphertext?: (Uint8Array|null);

        /** SenderKeyMessage _id. */
        public _id?: "id";

        /** SenderKeyMessage _iteration. */
        public _iteration?: "iteration";

        /** SenderKeyMessage _ciphertext. */
        public _ciphertext?: "ciphertext";

        /**
         * Creates a new SenderKeyMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyMessage instance
         */
        public static create(properties?: SignalWhisperTextProtocol.ISenderKeyMessage): SignalWhisperTextProtocol.SenderKeyMessage;

        /**
         * Encodes the specified SenderKeyMessage message. Does not implicitly {@link SignalWhisperTextProtocol.SenderKeyMessage.verify|verify} messages.
         * @param message SenderKeyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SignalWhisperTextProtocol.ISenderKeyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.SenderKeyMessage.verify|verify} messages.
         * @param message SenderKeyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SignalWhisperTextProtocol.ISenderKeyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalWhisperTextProtocol.SenderKeyMessage;

        /**
         * Decodes a SenderKeyMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalWhisperTextProtocol.SenderKeyMessage;

        /**
         * Verifies a SenderKeyMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyMessage
         */
        public static fromObject(object: { [k: string]: any }): SignalWhisperTextProtocol.SenderKeyMessage;

        /**
         * Creates a plain object from a SenderKeyMessage message. Also converts values to other types if specified.
         * @param message SenderKeyMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SignalWhisperTextProtocol.SenderKeyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderKeyMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KeyExchangeMessage. */
    interface IKeyExchangeMessage {

        /** KeyExchangeMessage id */
        id?: (number|null);

        /** KeyExchangeMessage baseKey */
        baseKey?: (Uint8Array|null);

        /** KeyExchangeMessage ratchetKey */
        ratchetKey?: (Uint8Array|null);

        /** KeyExchangeMessage identityKey */
        identityKey?: (Uint8Array|null);

        /** KeyExchangeMessage baseKeySignature */
        baseKeySignature?: (Uint8Array|null);
    }

    /** Represents a KeyExchangeMessage. */
    class KeyExchangeMessage implements IKeyExchangeMessage {

        /**
         * Constructs a new KeyExchangeMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalWhisperTextProtocol.IKeyExchangeMessage);

        /** KeyExchangeMessage id. */
        public id?: (number|null);

        /** KeyExchangeMessage baseKey. */
        public baseKey?: (Uint8Array|null);

        /** KeyExchangeMessage ratchetKey. */
        public ratchetKey?: (Uint8Array|null);

        /** KeyExchangeMessage identityKey. */
        public identityKey?: (Uint8Array|null);

        /** KeyExchangeMessage baseKeySignature. */
        public baseKeySignature?: (Uint8Array|null);

        /** KeyExchangeMessage _id. */
        public _id?: "id";

        /** KeyExchangeMessage _baseKey. */
        public _baseKey?: "baseKey";

        /** KeyExchangeMessage _ratchetKey. */
        public _ratchetKey?: "ratchetKey";

        /** KeyExchangeMessage _identityKey. */
        public _identityKey?: "identityKey";

        /** KeyExchangeMessage _baseKeySignature. */
        public _baseKeySignature?: "baseKeySignature";

        /**
         * Creates a new KeyExchangeMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyExchangeMessage instance
         */
        public static create(properties?: SignalWhisperTextProtocol.IKeyExchangeMessage): SignalWhisperTextProtocol.KeyExchangeMessage;

        /**
         * Encodes the specified KeyExchangeMessage message. Does not implicitly {@link SignalWhisperTextProtocol.KeyExchangeMessage.verify|verify} messages.
         * @param message KeyExchangeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SignalWhisperTextProtocol.IKeyExchangeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyExchangeMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.KeyExchangeMessage.verify|verify} messages.
         * @param message KeyExchangeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SignalWhisperTextProtocol.IKeyExchangeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalWhisperTextProtocol.KeyExchangeMessage;

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalWhisperTextProtocol.KeyExchangeMessage;

        /**
         * Verifies a KeyExchangeMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyExchangeMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyExchangeMessage
         */
        public static fromObject(object: { [k: string]: any }): SignalWhisperTextProtocol.KeyExchangeMessage;

        /**
         * Creates a plain object from a KeyExchangeMessage message. Also converts values to other types if specified.
         * @param message KeyExchangeMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SignalWhisperTextProtocol.KeyExchangeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyExchangeMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KeyExchangeMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PreKeySignalMessage. */
    interface IPreKeySignalMessage {

        /** PreKeySignalMessage registrationId */
        registrationId?: (number|null);

        /** PreKeySignalMessage preKeyId */
        preKeyId?: (number|null);

        /** PreKeySignalMessage signedPreKeyId */
        signedPreKeyId?: (number|null);

        /** PreKeySignalMessage baseKey */
        baseKey?: (Uint8Array|null);

        /** PreKeySignalMessage identityKey */
        identityKey?: (Uint8Array|null);

        /** PreKeySignalMessage message */
        message?: (Uint8Array|null);
    }

    /** Represents a PreKeySignalMessage. */
    class PreKeySignalMessage implements IPreKeySignalMessage {

        /**
         * Constructs a new PreKeySignalMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalWhisperTextProtocol.IPreKeySignalMessage);

        /** PreKeySignalMessage registrationId. */
        public registrationId?: (number|null);

        /** PreKeySignalMessage preKeyId. */
        public preKeyId?: (number|null);

        /** PreKeySignalMessage signedPreKeyId. */
        public signedPreKeyId?: (number|null);

        /** PreKeySignalMessage baseKey. */
        public baseKey?: (Uint8Array|null);

        /** PreKeySignalMessage identityKey. */
        public identityKey?: (Uint8Array|null);

        /** PreKeySignalMessage message. */
        public message?: (Uint8Array|null);

        /** PreKeySignalMessage _registrationId. */
        public _registrationId?: "registrationId";

        /** PreKeySignalMessage _preKeyId. */
        public _preKeyId?: "preKeyId";

        /** PreKeySignalMessage _signedPreKeyId. */
        public _signedPreKeyId?: "signedPreKeyId";

        /** PreKeySignalMessage _baseKey. */
        public _baseKey?: "baseKey";

        /** PreKeySignalMessage _identityKey. */
        public _identityKey?: "identityKey";

        /** PreKeySignalMessage _message. */
        public _message?: "message";

        /**
         * Creates a new PreKeySignalMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreKeySignalMessage instance
         */
        public static create(properties?: SignalWhisperTextProtocol.IPreKeySignalMessage): SignalWhisperTextProtocol.PreKeySignalMessage;

        /**
         * Encodes the specified PreKeySignalMessage message. Does not implicitly {@link SignalWhisperTextProtocol.PreKeySignalMessage.verify|verify} messages.
         * @param message PreKeySignalMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SignalWhisperTextProtocol.IPreKeySignalMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreKeySignalMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.PreKeySignalMessage.verify|verify} messages.
         * @param message PreKeySignalMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SignalWhisperTextProtocol.IPreKeySignalMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreKeySignalMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreKeySignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalWhisperTextProtocol.PreKeySignalMessage;

        /**
         * Decodes a PreKeySignalMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreKeySignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalWhisperTextProtocol.PreKeySignalMessage;

        /**
         * Verifies a PreKeySignalMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreKeySignalMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreKeySignalMessage
         */
        public static fromObject(object: { [k: string]: any }): SignalWhisperTextProtocol.PreKeySignalMessage;

        /**
         * Creates a plain object from a PreKeySignalMessage message. Also converts values to other types if specified.
         * @param message PreKeySignalMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SignalWhisperTextProtocol.PreKeySignalMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreKeySignalMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PreKeySignalMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SignalMessage. */
    interface ISignalMessage {

        /** SignalMessage ratchetKey */
        ratchetKey?: (Uint8Array|null);

        /** SignalMessage counter */
        counter?: (number|null);

        /** SignalMessage previousCounter */
        previousCounter?: (number|null);

        /** SignalMessage ciphertext */
        ciphertext?: (Uint8Array|null);
    }

    /** Represents a SignalMessage. */
    class SignalMessage implements ISignalMessage {

        /**
         * Constructs a new SignalMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalWhisperTextProtocol.ISignalMessage);

        /** SignalMessage ratchetKey. */
        public ratchetKey?: (Uint8Array|null);

        /** SignalMessage counter. */
        public counter?: (number|null);

        /** SignalMessage previousCounter. */
        public previousCounter?: (number|null);

        /** SignalMessage ciphertext. */
        public ciphertext?: (Uint8Array|null);

        /** SignalMessage _ratchetKey. */
        public _ratchetKey?: "ratchetKey";

        /** SignalMessage _counter. */
        public _counter?: "counter";

        /** SignalMessage _previousCounter. */
        public _previousCounter?: "previousCounter";

        /** SignalMessage _ciphertext. */
        public _ciphertext?: "ciphertext";

        /**
         * Creates a new SignalMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignalMessage instance
         */
        public static create(properties?: SignalWhisperTextProtocol.ISignalMessage): SignalWhisperTextProtocol.SignalMessage;

        /**
         * Encodes the specified SignalMessage message. Does not implicitly {@link SignalWhisperTextProtocol.SignalMessage.verify|verify} messages.
         * @param message SignalMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SignalWhisperTextProtocol.ISignalMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignalMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.SignalMessage.verify|verify} messages.
         * @param message SignalMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SignalWhisperTextProtocol.ISignalMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignalMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalWhisperTextProtocol.SignalMessage;

        /**
         * Decodes a SignalMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalWhisperTextProtocol.SignalMessage;

        /**
         * Verifies a SignalMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignalMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignalMessage
         */
        public static fromObject(object: { [k: string]: any }): SignalWhisperTextProtocol.SignalMessage;

        /**
         * Creates a plain object from a SignalMessage message. Also converts values to other types if specified.
         * @param message SignalMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SignalWhisperTextProtocol.SignalMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignalMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SignalMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
