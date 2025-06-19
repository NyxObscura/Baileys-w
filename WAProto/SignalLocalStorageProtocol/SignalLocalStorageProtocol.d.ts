import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace SignalLocalStorageProtocol. */
export namespace SignalLocalStorageProtocol {

    /** Properties of a SenderKeyRecordStructure. */
    interface ISenderKeyRecordStructure {

        /** SenderKeyRecordStructure senderKeyStates */
        senderKeyStates?: (SignalLocalStorageProtocol.ISenderKeyStateStructure[]|null);
    }

    /** Represents a SenderKeyRecordStructure. */
    class SenderKeyRecordStructure implements ISenderKeyRecordStructure {

        /**
         * Constructs a new SenderKeyRecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalLocalStorageProtocol.ISenderKeyRecordStructure);

        /** SenderKeyRecordStructure senderKeyStates. */
        public senderKeyStates: SignalLocalStorageProtocol.ISenderKeyStateStructure[];

        /**
         * Creates a new SenderKeyRecordStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyRecordStructure instance
         */
        public static create(properties?: SignalLocalStorageProtocol.ISenderKeyRecordStructure): SignalLocalStorageProtocol.SenderKeyRecordStructure;

        /**
         * Encodes the specified SenderKeyRecordStructure message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyRecordStructure.verify|verify} messages.
         * @param message SenderKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SignalLocalStorageProtocol.ISenderKeyRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyRecordStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyRecordStructure.verify|verify} messages.
         * @param message SenderKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SignalLocalStorageProtocol.ISenderKeyRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SenderKeyRecordStructure;

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SenderKeyRecordStructure;

        /**
         * Verifies a SenderKeyRecordStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyRecordStructure
         */
        public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SenderKeyRecordStructure;

        /**
         * Creates a plain object from a SenderKeyRecordStructure message. Also converts values to other types if specified.
         * @param message SenderKeyRecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SignalLocalStorageProtocol.SenderKeyRecordStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyRecordStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderKeyRecordStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SenderKeyStateStructure. */
    interface ISenderKeyStateStructure {

        /** SenderKeyStateStructure senderKeyId */
        senderKeyId?: (number|null);

        /** SenderKeyStateStructure senderChainKey */
        senderChainKey?: (SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderChainKey|null);

        /** SenderKeyStateStructure senderSigningKey */
        senderSigningKey?: (SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderSigningKey|null);

        /** SenderKeyStateStructure senderMessageKeys */
        senderMessageKeys?: (SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderMessageKey[]|null);
    }

    /** Represents a SenderKeyStateStructure. */
    class SenderKeyStateStructure implements ISenderKeyStateStructure {

        /**
         * Constructs a new SenderKeyStateStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalLocalStorageProtocol.ISenderKeyStateStructure);

        /** SenderKeyStateStructure senderKeyId. */
        public senderKeyId?: (number|null);

        /** SenderKeyStateStructure senderChainKey. */
        public senderChainKey?: (SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderChainKey|null);

        /** SenderKeyStateStructure senderSigningKey. */
        public senderSigningKey?: (SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderSigningKey|null);

        /** SenderKeyStateStructure senderMessageKeys. */
        public senderMessageKeys: SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderMessageKey[];

        /** SenderKeyStateStructure _senderKeyId. */
        public _senderKeyId?: "senderKeyId";

        /** SenderKeyStateStructure _senderChainKey. */
        public _senderChainKey?: "senderChainKey";

        /** SenderKeyStateStructure _senderSigningKey. */
        public _senderSigningKey?: "senderSigningKey";

        /**
         * Creates a new SenderKeyStateStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyStateStructure instance
         */
        public static create(properties?: SignalLocalStorageProtocol.ISenderKeyStateStructure): SignalLocalStorageProtocol.SenderKeyStateStructure;

        /**
         * Encodes the specified SenderKeyStateStructure message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.verify|verify} messages.
         * @param message SenderKeyStateStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SignalLocalStorageProtocol.ISenderKeyStateStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyStateStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.verify|verify} messages.
         * @param message SenderKeyStateStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SignalLocalStorageProtocol.ISenderKeyStateStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SenderKeyStateStructure;

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SenderKeyStateStructure;

        /**
         * Verifies a SenderKeyStateStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyStateStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyStateStructure
         */
        public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SenderKeyStateStructure;

        /**
         * Creates a plain object from a SenderKeyStateStructure message. Also converts values to other types if specified.
         * @param message SenderKeyStateStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SignalLocalStorageProtocol.SenderKeyStateStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyStateStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderKeyStateStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SenderKeyStateStructure {

        /** Properties of a SenderChainKey. */
        interface ISenderChainKey {

            /** SenderChainKey iteration */
            iteration?: (number|null);

            /** SenderChainKey seed */
            seed?: (Uint8Array|null);
        }

        /** Represents a SenderChainKey. */
        class SenderChainKey implements ISenderChainKey {

            /**
             * Constructs a new SenderChainKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderChainKey);

            /** SenderChainKey iteration. */
            public iteration?: (number|null);

            /** SenderChainKey seed. */
            public seed?: (Uint8Array|null);

            /** SenderChainKey _iteration. */
            public _iteration?: "iteration";

            /** SenderChainKey _seed. */
            public _seed?: "seed";

            /**
             * Creates a new SenderChainKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SenderChainKey instance
             */
            public static create(properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderChainKey): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey;

            /**
             * Encodes the specified SenderChainKey message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.verify|verify} messages.
             * @param message SenderChainKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderChainKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SenderChainKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.verify|verify} messages.
             * @param message SenderChainKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderChainKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SenderChainKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SenderChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey;

            /**
             * Decodes a SenderChainKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SenderChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey;

            /**
             * Verifies a SenderChainKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SenderChainKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SenderChainKey
             */
            public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey;

            /**
             * Creates a plain object from a SenderChainKey message. Also converts values to other types if specified.
             * @param message SenderChainKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SenderChainKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SenderChainKey
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SenderMessageKey. */
        interface ISenderMessageKey {

            /** SenderMessageKey iteration */
            iteration?: (number|null);

            /** SenderMessageKey seed */
            seed?: (Uint8Array|null);
        }

        /** Represents a SenderMessageKey. */
        class SenderMessageKey implements ISenderMessageKey {

            /**
             * Constructs a new SenderMessageKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderMessageKey);

            /** SenderMessageKey iteration. */
            public iteration?: (number|null);

            /** SenderMessageKey seed. */
            public seed?: (Uint8Array|null);

            /** SenderMessageKey _iteration. */
            public _iteration?: "iteration";

            /** SenderMessageKey _seed. */
            public _seed?: "seed";

            /**
             * Creates a new SenderMessageKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SenderMessageKey instance
             */
            public static create(properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderMessageKey): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey;

            /**
             * Encodes the specified SenderMessageKey message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.verify|verify} messages.
             * @param message SenderMessageKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SenderMessageKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.verify|verify} messages.
             * @param message SenderMessageKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SenderMessageKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SenderMessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey;

            /**
             * Decodes a SenderMessageKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SenderMessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey;

            /**
             * Verifies a SenderMessageKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SenderMessageKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SenderMessageKey
             */
            public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey;

            /**
             * Creates a plain object from a SenderMessageKey message. Also converts values to other types if specified.
             * @param message SenderMessageKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SenderMessageKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SenderMessageKey
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SenderSigningKey. */
        interface ISenderSigningKey {

            /** SenderSigningKey public */
            "public"?: (Uint8Array|null);

            /** SenderSigningKey private */
            "private"?: (Uint8Array|null);
        }

        /** Represents a SenderSigningKey. */
        class SenderSigningKey implements ISenderSigningKey {

            /**
             * Constructs a new SenderSigningKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderSigningKey);

            /** SenderSigningKey public. */
            public public?: (Uint8Array|null);

            /** SenderSigningKey private. */
            public private?: (Uint8Array|null);

            /** SenderSigningKey _public. */
            public _public?: "public";

            /** SenderSigningKey _private. */
            public _private?: "private";

            /**
             * Creates a new SenderSigningKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SenderSigningKey instance
             */
            public static create(properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderSigningKey): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey;

            /**
             * Encodes the specified SenderSigningKey message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.verify|verify} messages.
             * @param message SenderSigningKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderSigningKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SenderSigningKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.verify|verify} messages.
             * @param message SenderSigningKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: SignalLocalStorageProtocol.SenderKeyStateStructure.ISenderSigningKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SenderSigningKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SenderSigningKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey;

            /**
             * Decodes a SenderSigningKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SenderSigningKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey;

            /**
             * Verifies a SenderSigningKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SenderSigningKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SenderSigningKey
             */
            public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey;

            /**
             * Creates a plain object from a SenderSigningKey message. Also converts values to other types if specified.
             * @param message SenderSigningKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SenderSigningKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SenderSigningKey
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an IdentityKeyPairStructure. */
    interface IIdentityKeyPairStructure {

        /** IdentityKeyPairStructure publicKey */
        publicKey?: (Uint8Array|null);

        /** IdentityKeyPairStructure privateKey */
        privateKey?: (Uint8Array|null);
    }

    /** Represents an IdentityKeyPairStructure. */
    class IdentityKeyPairStructure implements IIdentityKeyPairStructure {

        /**
         * Constructs a new IdentityKeyPairStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalLocalStorageProtocol.IIdentityKeyPairStructure);

        /** IdentityKeyPairStructure publicKey. */
        public publicKey?: (Uint8Array|null);

        /** IdentityKeyPairStructure privateKey. */
        public privateKey?: (Uint8Array|null);

        /** IdentityKeyPairStructure _publicKey. */
        public _publicKey?: "publicKey";

        /** IdentityKeyPairStructure _privateKey. */
        public _privateKey?: "privateKey";

        /**
         * Creates a new IdentityKeyPairStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IdentityKeyPairStructure instance
         */
        public static create(properties?: SignalLocalStorageProtocol.IIdentityKeyPairStructure): SignalLocalStorageProtocol.IdentityKeyPairStructure;

        /**
         * Encodes the specified IdentityKeyPairStructure message. Does not implicitly {@link SignalLocalStorageProtocol.IdentityKeyPairStructure.verify|verify} messages.
         * @param message IdentityKeyPairStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SignalLocalStorageProtocol.IIdentityKeyPairStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IdentityKeyPairStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.IdentityKeyPairStructure.verify|verify} messages.
         * @param message IdentityKeyPairStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SignalLocalStorageProtocol.IIdentityKeyPairStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IdentityKeyPairStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IdentityKeyPairStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.IdentityKeyPairStructure;

        /**
         * Decodes an IdentityKeyPairStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IdentityKeyPairStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.IdentityKeyPairStructure;

        /**
         * Verifies an IdentityKeyPairStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IdentityKeyPairStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdentityKeyPairStructure
         */
        public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.IdentityKeyPairStructure;

        /**
         * Creates a plain object from an IdentityKeyPairStructure message. Also converts values to other types if specified.
         * @param message IdentityKeyPairStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SignalLocalStorageProtocol.IdentityKeyPairStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IdentityKeyPairStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IdentityKeyPairStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SignedPreKeyRecordStructure. */
    interface ISignedPreKeyRecordStructure {

        /** SignedPreKeyRecordStructure id */
        id?: (number|null);

        /** SignedPreKeyRecordStructure publicKey */
        publicKey?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure privateKey */
        privateKey?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure signature */
        signature?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a SignedPreKeyRecordStructure. */
    class SignedPreKeyRecordStructure implements ISignedPreKeyRecordStructure {

        /**
         * Constructs a new SignedPreKeyRecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalLocalStorageProtocol.ISignedPreKeyRecordStructure);

        /** SignedPreKeyRecordStructure id. */
        public id?: (number|null);

        /** SignedPreKeyRecordStructure publicKey. */
        public publicKey?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure privateKey. */
        public privateKey?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure signature. */
        public signature?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure timestamp. */
        public timestamp?: (number|Long|null);

        /** SignedPreKeyRecordStructure _id. */
        public _id?: "id";

        /** SignedPreKeyRecordStructure _publicKey. */
        public _publicKey?: "publicKey";

        /** SignedPreKeyRecordStructure _privateKey. */
        public _privateKey?: "privateKey";

        /** SignedPreKeyRecordStructure _signature. */
        public _signature?: "signature";

        /** SignedPreKeyRecordStructure _timestamp. */
        public _timestamp?: "timestamp";

        /**
         * Creates a new SignedPreKeyRecordStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignedPreKeyRecordStructure instance
         */
        public static create(properties?: SignalLocalStorageProtocol.ISignedPreKeyRecordStructure): SignalLocalStorageProtocol.SignedPreKeyRecordStructure;

        /**
         * Encodes the specified SignedPreKeyRecordStructure message. Does not implicitly {@link SignalLocalStorageProtocol.SignedPreKeyRecordStructure.verify|verify} messages.
         * @param message SignedPreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SignalLocalStorageProtocol.ISignedPreKeyRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignedPreKeyRecordStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SignedPreKeyRecordStructure.verify|verify} messages.
         * @param message SignedPreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SignalLocalStorageProtocol.ISignedPreKeyRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignedPreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SignedPreKeyRecordStructure;

        /**
         * Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignedPreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SignedPreKeyRecordStructure;

        /**
         * Verifies a SignedPreKeyRecordStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignedPreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignedPreKeyRecordStructure
         */
        public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SignedPreKeyRecordStructure;

        /**
         * Creates a plain object from a SignedPreKeyRecordStructure message. Also converts values to other types if specified.
         * @param message SignedPreKeyRecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SignalLocalStorageProtocol.SignedPreKeyRecordStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignedPreKeyRecordStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SignedPreKeyRecordStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PreKeyRecordStructure. */
    interface IPreKeyRecordStructure {

        /** PreKeyRecordStructure id */
        id?: (number|null);

        /** PreKeyRecordStructure publicKey */
        publicKey?: (Uint8Array|null);

        /** PreKeyRecordStructure privateKey */
        privateKey?: (Uint8Array|null);
    }

    /** Represents a PreKeyRecordStructure. */
    class PreKeyRecordStructure implements IPreKeyRecordStructure {

        /**
         * Constructs a new PreKeyRecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalLocalStorageProtocol.IPreKeyRecordStructure);

        /** PreKeyRecordStructure id. */
        public id?: (number|null);

        /** PreKeyRecordStructure publicKey. */
        public publicKey?: (Uint8Array|null);

        /** PreKeyRecordStructure privateKey. */
        public privateKey?: (Uint8Array|null);

        /** PreKeyRecordStructure _id. */
        public _id?: "id";

        /** PreKeyRecordStructure _publicKey. */
        public _publicKey?: "publicKey";

        /** PreKeyRecordStructure _privateKey. */
        public _privateKey?: "privateKey";

        /**
         * Creates a new PreKeyRecordStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreKeyRecordStructure instance
         */
        public static create(properties?: SignalLocalStorageProtocol.IPreKeyRecordStructure): SignalLocalStorageProtocol.PreKeyRecordStructure;

        /**
         * Encodes the specified PreKeyRecordStructure message. Does not implicitly {@link SignalLocalStorageProtocol.PreKeyRecordStructure.verify|verify} messages.
         * @param message PreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SignalLocalStorageProtocol.IPreKeyRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreKeyRecordStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.PreKeyRecordStructure.verify|verify} messages.
         * @param message PreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SignalLocalStorageProtocol.IPreKeyRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreKeyRecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.PreKeyRecordStructure;

        /**
         * Decodes a PreKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.PreKeyRecordStructure;

        /**
         * Verifies a PreKeyRecordStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreKeyRecordStructure
         */
        public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.PreKeyRecordStructure;

        /**
         * Creates a plain object from a PreKeyRecordStructure message. Also converts values to other types if specified.
         * @param message PreKeyRecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SignalLocalStorageProtocol.PreKeyRecordStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreKeyRecordStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PreKeyRecordStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RecordStructure. */
    interface IRecordStructure {

        /** RecordStructure currentSession */
        currentSession?: (SignalLocalStorageProtocol.ISessionStructure|null);

        /** RecordStructure previousSessions */
        previousSessions?: (SignalLocalStorageProtocol.ISessionStructure[]|null);
    }

    /** Represents a RecordStructure. */
    class RecordStructure implements IRecordStructure {

        /**
         * Constructs a new RecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalLocalStorageProtocol.IRecordStructure);

        /** RecordStructure currentSession. */
        public currentSession?: (SignalLocalStorageProtocol.ISessionStructure|null);

        /** RecordStructure previousSessions. */
        public previousSessions: SignalLocalStorageProtocol.ISessionStructure[];

        /** RecordStructure _currentSession. */
        public _currentSession?: "currentSession";

        /**
         * Creates a new RecordStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordStructure instance
         */
        public static create(properties?: SignalLocalStorageProtocol.IRecordStructure): SignalLocalStorageProtocol.RecordStructure;

        /**
         * Encodes the specified RecordStructure message. Does not implicitly {@link SignalLocalStorageProtocol.RecordStructure.verify|verify} messages.
         * @param message RecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SignalLocalStorageProtocol.IRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.RecordStructure.verify|verify} messages.
         * @param message RecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SignalLocalStorageProtocol.IRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.RecordStructure;

        /**
         * Decodes a RecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.RecordStructure;

        /**
         * Verifies a RecordStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordStructure
         */
        public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.RecordStructure;

        /**
         * Creates a plain object from a RecordStructure message. Also converts values to other types if specified.
         * @param message RecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SignalLocalStorageProtocol.RecordStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RecordStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SessionStructure. */
    interface ISessionStructure {

        /** SessionStructure sessionVersion */
        sessionVersion?: (number|null);

        /** SessionStructure localIdentityPublic */
        localIdentityPublic?: (Uint8Array|null);

        /** SessionStructure remoteIdentityPublic */
        remoteIdentityPublic?: (Uint8Array|null);

        /** SessionStructure rootKey */
        rootKey?: (Uint8Array|null);

        /** SessionStructure previousCounter */
        previousCounter?: (number|null);

        /** SessionStructure senderChain */
        senderChain?: (SignalLocalStorageProtocol.SessionStructure.IChain|null);

        /** SessionStructure receiverChains */
        receiverChains?: (SignalLocalStorageProtocol.SessionStructure.IChain[]|null);

        /** SessionStructure pendingKeyExchange */
        pendingKeyExchange?: (SignalLocalStorageProtocol.SessionStructure.IPendingKeyExchange|null);

        /** SessionStructure pendingPreKey */
        pendingPreKey?: (SignalLocalStorageProtocol.SessionStructure.IPendingPreKey|null);

        /** SessionStructure remoteRegistrationId */
        remoteRegistrationId?: (number|null);

        /** SessionStructure localRegistrationId */
        localRegistrationId?: (number|null);

        /** SessionStructure needsRefresh */
        needsRefresh?: (boolean|null);

        /** SessionStructure aliceBaseKey */
        aliceBaseKey?: (Uint8Array|null);
    }

    /** Represents a SessionStructure. */
    class SessionStructure implements ISessionStructure {

        /**
         * Constructs a new SessionStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignalLocalStorageProtocol.ISessionStructure);

        /** SessionStructure sessionVersion. */
        public sessionVersion?: (number|null);

        /** SessionStructure localIdentityPublic. */
        public localIdentityPublic?: (Uint8Array|null);

        /** SessionStructure remoteIdentityPublic. */
        public remoteIdentityPublic?: (Uint8Array|null);

        /** SessionStructure rootKey. */
        public rootKey?: (Uint8Array|null);

        /** SessionStructure previousCounter. */
        public previousCounter?: (number|null);

        /** SessionStructure senderChain. */
        public senderChain?: (SignalLocalStorageProtocol.SessionStructure.IChain|null);

        /** SessionStructure receiverChains. */
        public receiverChains: SignalLocalStorageProtocol.SessionStructure.IChain[];

        /** SessionStructure pendingKeyExchange. */
        public pendingKeyExchange?: (SignalLocalStorageProtocol.SessionStructure.IPendingKeyExchange|null);

        /** SessionStructure pendingPreKey. */
        public pendingPreKey?: (SignalLocalStorageProtocol.SessionStructure.IPendingPreKey|null);

        /** SessionStructure remoteRegistrationId. */
        public remoteRegistrationId?: (number|null);

        /** SessionStructure localRegistrationId. */
        public localRegistrationId?: (number|null);

        /** SessionStructure needsRefresh. */
        public needsRefresh?: (boolean|null);

        /** SessionStructure aliceBaseKey. */
        public aliceBaseKey?: (Uint8Array|null);

        /** SessionStructure _sessionVersion. */
        public _sessionVersion?: "sessionVersion";

        /** SessionStructure _localIdentityPublic. */
        public _localIdentityPublic?: "localIdentityPublic";

        /** SessionStructure _remoteIdentityPublic. */
        public _remoteIdentityPublic?: "remoteIdentityPublic";

        /** SessionStructure _rootKey. */
        public _rootKey?: "rootKey";

        /** SessionStructure _previousCounter. */
        public _previousCounter?: "previousCounter";

        /** SessionStructure _senderChain. */
        public _senderChain?: "senderChain";

        /** SessionStructure _pendingKeyExchange. */
        public _pendingKeyExchange?: "pendingKeyExchange";

        /** SessionStructure _pendingPreKey. */
        public _pendingPreKey?: "pendingPreKey";

        /** SessionStructure _remoteRegistrationId. */
        public _remoteRegistrationId?: "remoteRegistrationId";

        /** SessionStructure _localRegistrationId. */
        public _localRegistrationId?: "localRegistrationId";

        /** SessionStructure _needsRefresh. */
        public _needsRefresh?: "needsRefresh";

        /** SessionStructure _aliceBaseKey. */
        public _aliceBaseKey?: "aliceBaseKey";

        /**
         * Creates a new SessionStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionStructure instance
         */
        public static create(properties?: SignalLocalStorageProtocol.ISessionStructure): SignalLocalStorageProtocol.SessionStructure;

        /**
         * Encodes the specified SessionStructure message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.verify|verify} messages.
         * @param message SessionStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SignalLocalStorageProtocol.ISessionStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.verify|verify} messages.
         * @param message SessionStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SignalLocalStorageProtocol.ISessionStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SessionStructure;

        /**
         * Decodes a SessionStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SessionStructure;

        /**
         * Verifies a SessionStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionStructure
         */
        public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SessionStructure;

        /**
         * Creates a plain object from a SessionStructure message. Also converts values to other types if specified.
         * @param message SessionStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SignalLocalStorageProtocol.SessionStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SessionStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SessionStructure {

        /** Properties of a Chain. */
        interface IChain {

            /** Chain senderRatchetKey */
            senderRatchetKey?: (Uint8Array|null);

            /** Chain senderRatchetKeyPrivate */
            senderRatchetKeyPrivate?: (Uint8Array|null);

            /** Chain chainKey */
            chainKey?: (SignalLocalStorageProtocol.SessionStructure.Chain.IChainKey|null);

            /** Chain messageKeys */
            messageKeys?: (SignalLocalStorageProtocol.SessionStructure.Chain.IMessageKey[]|null);
        }

        /** Represents a Chain. */
        class Chain implements IChain {

            /**
             * Constructs a new Chain.
             * @param [properties] Properties to set
             */
            constructor(properties?: SignalLocalStorageProtocol.SessionStructure.IChain);

            /** Chain senderRatchetKey. */
            public senderRatchetKey?: (Uint8Array|null);

            /** Chain senderRatchetKeyPrivate. */
            public senderRatchetKeyPrivate?: (Uint8Array|null);

            /** Chain chainKey. */
            public chainKey?: (SignalLocalStorageProtocol.SessionStructure.Chain.IChainKey|null);

            /** Chain messageKeys. */
            public messageKeys: SignalLocalStorageProtocol.SessionStructure.Chain.IMessageKey[];

            /** Chain _senderRatchetKey. */
            public _senderRatchetKey?: "senderRatchetKey";

            /** Chain _senderRatchetKeyPrivate. */
            public _senderRatchetKeyPrivate?: "senderRatchetKeyPrivate";

            /** Chain _chainKey. */
            public _chainKey?: "chainKey";

            /**
             * Creates a new Chain instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Chain instance
             */
            public static create(properties?: SignalLocalStorageProtocol.SessionStructure.IChain): SignalLocalStorageProtocol.SessionStructure.Chain;

            /**
             * Encodes the specified Chain message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.verify|verify} messages.
             * @param message Chain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: SignalLocalStorageProtocol.SessionStructure.IChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Chain message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.verify|verify} messages.
             * @param message Chain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: SignalLocalStorageProtocol.SessionStructure.IChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Chain message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Chain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SessionStructure.Chain;

            /**
             * Decodes a Chain message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Chain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SessionStructure.Chain;

            /**
             * Verifies a Chain message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Chain message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Chain
             */
            public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SessionStructure.Chain;

            /**
             * Creates a plain object from a Chain message. Also converts values to other types if specified.
             * @param message Chain
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: SignalLocalStorageProtocol.SessionStructure.Chain, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Chain to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Chain
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Chain {

            /** Properties of a ChainKey. */
            interface IChainKey {

                /** ChainKey index */
                index?: (number|null);

                /** ChainKey key */
                key?: (Uint8Array|null);
            }

            /** Represents a ChainKey. */
            class ChainKey implements IChainKey {

                /**
                 * Constructs a new ChainKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: SignalLocalStorageProtocol.SessionStructure.Chain.IChainKey);

                /** ChainKey index. */
                public index?: (number|null);

                /** ChainKey key. */
                public key?: (Uint8Array|null);

                /** ChainKey _index. */
                public _index?: "index";

                /** ChainKey _key. */
                public _key?: "key";

                /**
                 * Creates a new ChainKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ChainKey instance
                 */
                public static create(properties?: SignalLocalStorageProtocol.SessionStructure.Chain.IChainKey): SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey;

                /**
                 * Encodes the specified ChainKey message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.verify|verify} messages.
                 * @param message ChainKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: SignalLocalStorageProtocol.SessionStructure.Chain.IChainKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ChainKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.verify|verify} messages.
                 * @param message ChainKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: SignalLocalStorageProtocol.SessionStructure.Chain.IChainKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ChainKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ChainKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey;

                /**
                 * Decodes a ChainKey message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ChainKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey;

                /**
                 * Verifies a ChainKey message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ChainKey message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ChainKey
                 */
                public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey;

                /**
                 * Creates a plain object from a ChainKey message. Also converts values to other types if specified.
                 * @param message ChainKey
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ChainKey to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ChainKey
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageKey. */
            interface IMessageKey {

                /** MessageKey index */
                index?: (number|null);

                /** MessageKey cipherKey */
                cipherKey?: (Uint8Array|null);

                /** MessageKey macKey */
                macKey?: (Uint8Array|null);

                /** MessageKey iv */
                iv?: (Uint8Array|null);
            }

            /** Represents a MessageKey. */
            class MessageKey implements IMessageKey {

                /**
                 * Constructs a new MessageKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: SignalLocalStorageProtocol.SessionStructure.Chain.IMessageKey);

                /** MessageKey index. */
                public index?: (number|null);

                /** MessageKey cipherKey. */
                public cipherKey?: (Uint8Array|null);

                /** MessageKey macKey. */
                public macKey?: (Uint8Array|null);

                /** MessageKey iv. */
                public iv?: (Uint8Array|null);

                /** MessageKey _index. */
                public _index?: "index";

                /** MessageKey _cipherKey. */
                public _cipherKey?: "cipherKey";

                /** MessageKey _macKey. */
                public _macKey?: "macKey";

                /** MessageKey _iv. */
                public _iv?: "iv";

                /**
                 * Creates a new MessageKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageKey instance
                 */
                public static create(properties?: SignalLocalStorageProtocol.SessionStructure.Chain.IMessageKey): SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey;

                /**
                 * Encodes the specified MessageKey message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.verify|verify} messages.
                 * @param message MessageKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: SignalLocalStorageProtocol.SessionStructure.Chain.IMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.verify|verify} messages.
                 * @param message MessageKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: SignalLocalStorageProtocol.SessionStructure.Chain.IMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey;

                /**
                 * Decodes a MessageKey message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey;

                /**
                 * Verifies a MessageKey message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageKey
                 */
                public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey;

                /**
                 * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
                 * @param message MessageKey
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageKey to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageKey
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a PendingKeyExchange. */
        interface IPendingKeyExchange {

            /** PendingKeyExchange sequence */
            sequence?: (number|null);

            /** PendingKeyExchange localBaseKey */
            localBaseKey?: (Uint8Array|null);

            /** PendingKeyExchange localBaseKeyPrivate */
            localBaseKeyPrivate?: (Uint8Array|null);

            /** PendingKeyExchange localRatchetKey */
            localRatchetKey?: (Uint8Array|null);

            /** PendingKeyExchange localRatchetKeyPrivate */
            localRatchetKeyPrivate?: (Uint8Array|null);

            /** PendingKeyExchange localIdentityKey */
            localIdentityKey?: (Uint8Array|null);

            /** PendingKeyExchange localIdentityKeyPrivate */
            localIdentityKeyPrivate?: (Uint8Array|null);
        }

        /** Represents a PendingKeyExchange. */
        class PendingKeyExchange implements IPendingKeyExchange {

            /**
             * Constructs a new PendingKeyExchange.
             * @param [properties] Properties to set
             */
            constructor(properties?: SignalLocalStorageProtocol.SessionStructure.IPendingKeyExchange);

            /** PendingKeyExchange sequence. */
            public sequence?: (number|null);

            /** PendingKeyExchange localBaseKey. */
            public localBaseKey?: (Uint8Array|null);

            /** PendingKeyExchange localBaseKeyPrivate. */
            public localBaseKeyPrivate?: (Uint8Array|null);

            /** PendingKeyExchange localRatchetKey. */
            public localRatchetKey?: (Uint8Array|null);

            /** PendingKeyExchange localRatchetKeyPrivate. */
            public localRatchetKeyPrivate?: (Uint8Array|null);

            /** PendingKeyExchange localIdentityKey. */
            public localIdentityKey?: (Uint8Array|null);

            /** PendingKeyExchange localIdentityKeyPrivate. */
            public localIdentityKeyPrivate?: (Uint8Array|null);

            /** PendingKeyExchange _sequence. */
            public _sequence?: "sequence";

            /** PendingKeyExchange _localBaseKey. */
            public _localBaseKey?: "localBaseKey";

            /** PendingKeyExchange _localBaseKeyPrivate. */
            public _localBaseKeyPrivate?: "localBaseKeyPrivate";

            /** PendingKeyExchange _localRatchetKey. */
            public _localRatchetKey?: "localRatchetKey";

            /** PendingKeyExchange _localRatchetKeyPrivate. */
            public _localRatchetKeyPrivate?: "localRatchetKeyPrivate";

            /** PendingKeyExchange _localIdentityKey. */
            public _localIdentityKey?: "localIdentityKey";

            /** PendingKeyExchange _localIdentityKeyPrivate. */
            public _localIdentityKeyPrivate?: "localIdentityKeyPrivate";

            /**
             * Creates a new PendingKeyExchange instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PendingKeyExchange instance
             */
            public static create(properties?: SignalLocalStorageProtocol.SessionStructure.IPendingKeyExchange): SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange;

            /**
             * Encodes the specified PendingKeyExchange message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.verify|verify} messages.
             * @param message PendingKeyExchange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: SignalLocalStorageProtocol.SessionStructure.IPendingKeyExchange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PendingKeyExchange message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.verify|verify} messages.
             * @param message PendingKeyExchange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: SignalLocalStorageProtocol.SessionStructure.IPendingKeyExchange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PendingKeyExchange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PendingKeyExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange;

            /**
             * Decodes a PendingKeyExchange message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PendingKeyExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange;

            /**
             * Verifies a PendingKeyExchange message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PendingKeyExchange message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PendingKeyExchange
             */
            public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange;

            /**
             * Creates a plain object from a PendingKeyExchange message. Also converts values to other types if specified.
             * @param message PendingKeyExchange
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PendingKeyExchange to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PendingKeyExchange
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PendingPreKey. */
        interface IPendingPreKey {

            /** PendingPreKey preKeyId */
            preKeyId?: (number|null);

            /** PendingPreKey signedPreKeyId */
            signedPreKeyId?: (number|null);

            /** PendingPreKey baseKey */
            baseKey?: (Uint8Array|null);
        }

        /** Represents a PendingPreKey. */
        class PendingPreKey implements IPendingPreKey {

            /**
             * Constructs a new PendingPreKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: SignalLocalStorageProtocol.SessionStructure.IPendingPreKey);

            /** PendingPreKey preKeyId. */
            public preKeyId?: (number|null);

            /** PendingPreKey signedPreKeyId. */
            public signedPreKeyId?: (number|null);

            /** PendingPreKey baseKey. */
            public baseKey?: (Uint8Array|null);

            /** PendingPreKey _preKeyId. */
            public _preKeyId?: "preKeyId";

            /** PendingPreKey _signedPreKeyId. */
            public _signedPreKeyId?: "signedPreKeyId";

            /** PendingPreKey _baseKey. */
            public _baseKey?: "baseKey";

            /**
             * Creates a new PendingPreKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PendingPreKey instance
             */
            public static create(properties?: SignalLocalStorageProtocol.SessionStructure.IPendingPreKey): SignalLocalStorageProtocol.SessionStructure.PendingPreKey;

            /**
             * Encodes the specified PendingPreKey message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.PendingPreKey.verify|verify} messages.
             * @param message PendingPreKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: SignalLocalStorageProtocol.SessionStructure.IPendingPreKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PendingPreKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.PendingPreKey.verify|verify} messages.
             * @param message PendingPreKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: SignalLocalStorageProtocol.SessionStructure.IPendingPreKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PendingPreKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PendingPreKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignalLocalStorageProtocol.SessionStructure.PendingPreKey;

            /**
             * Decodes a PendingPreKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PendingPreKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignalLocalStorageProtocol.SessionStructure.PendingPreKey;

            /**
             * Verifies a PendingPreKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PendingPreKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PendingPreKey
             */
            public static fromObject(object: { [k: string]: any }): SignalLocalStorageProtocol.SessionStructure.PendingPreKey;

            /**
             * Creates a plain object from a PendingPreKey message. Also converts values to other types if specified.
             * @param message PendingPreKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: SignalLocalStorageProtocol.SessionStructure.PendingPreKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PendingPreKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PendingPreKey
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
