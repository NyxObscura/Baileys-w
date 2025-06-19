import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace Adv. */
export namespace Adv {

    /** Properties of a ADVSignedDeviceIdentityHMAC. */
    interface IADVSignedDeviceIdentityHMAC {

        /** ADVSignedDeviceIdentityHMAC details */
        details?: (Uint8Array|null);

        /** ADVSignedDeviceIdentityHMAC hmac */
        hmac?: (Uint8Array|null);

        /** ADVSignedDeviceIdentityHMAC accountType */
        accountType?: (Adv.ADVEncryptionType|null);
    }

    /** Represents a ADVSignedDeviceIdentityHMAC. */
    class ADVSignedDeviceIdentityHMAC implements IADVSignedDeviceIdentityHMAC {

        /**
         * Constructs a new ADVSignedDeviceIdentityHMAC.
         * @param [properties] Properties to set
         */
        constructor(properties?: Adv.IADVSignedDeviceIdentityHMAC);

        /** ADVSignedDeviceIdentityHMAC details. */
        public details?: (Uint8Array|null);

        /** ADVSignedDeviceIdentityHMAC hmac. */
        public hmac?: (Uint8Array|null);

        /** ADVSignedDeviceIdentityHMAC accountType. */
        public accountType?: (Adv.ADVEncryptionType|null);

        /** ADVSignedDeviceIdentityHMAC _details. */
        public _details?: "details";

        /** ADVSignedDeviceIdentityHMAC _hmac. */
        public _hmac?: "hmac";

        /** ADVSignedDeviceIdentityHMAC _accountType. */
        public _accountType?: "accountType";

        /**
         * Creates a new ADVSignedDeviceIdentityHMAC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVSignedDeviceIdentityHMAC instance
         */
        public static create(properties?: Adv.IADVSignedDeviceIdentityHMAC): Adv.ADVSignedDeviceIdentityHMAC;

        /**
         * Encodes the specified ADVSignedDeviceIdentityHMAC message. Does not implicitly {@link Adv.ADVSignedDeviceIdentityHMAC.verify|verify} messages.
         * @param message ADVSignedDeviceIdentityHMAC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Adv.IADVSignedDeviceIdentityHMAC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVSignedDeviceIdentityHMAC message, length delimited. Does not implicitly {@link Adv.ADVSignedDeviceIdentityHMAC.verify|verify} messages.
         * @param message ADVSignedDeviceIdentityHMAC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Adv.IADVSignedDeviceIdentityHMAC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVSignedDeviceIdentityHMAC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVSignedDeviceIdentityHMAC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Adv.ADVSignedDeviceIdentityHMAC;

        /**
         * Decodes a ADVSignedDeviceIdentityHMAC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVSignedDeviceIdentityHMAC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Adv.ADVSignedDeviceIdentityHMAC;

        /**
         * Verifies a ADVSignedDeviceIdentityHMAC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVSignedDeviceIdentityHMAC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVSignedDeviceIdentityHMAC
         */
        public static fromObject(object: { [k: string]: any }): Adv.ADVSignedDeviceIdentityHMAC;

        /**
         * Creates a plain object from a ADVSignedDeviceIdentityHMAC message. Also converts values to other types if specified.
         * @param message ADVSignedDeviceIdentityHMAC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Adv.ADVSignedDeviceIdentityHMAC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVSignedDeviceIdentityHMAC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ADVSignedDeviceIdentityHMAC
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ADVSignedDeviceIdentity. */
    interface IADVSignedDeviceIdentity {

        /** ADVSignedDeviceIdentity details */
        details?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity accountSignatureKey */
        accountSignatureKey?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity accountSignature */
        accountSignature?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity deviceSignature */
        deviceSignature?: (Uint8Array|null);
    }

    /** Represents a ADVSignedDeviceIdentity. */
    class ADVSignedDeviceIdentity implements IADVSignedDeviceIdentity {

        /**
         * Constructs a new ADVSignedDeviceIdentity.
         * @param [properties] Properties to set
         */
        constructor(properties?: Adv.IADVSignedDeviceIdentity);

        /** ADVSignedDeviceIdentity details. */
        public details?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity accountSignatureKey. */
        public accountSignatureKey?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity accountSignature. */
        public accountSignature?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity deviceSignature. */
        public deviceSignature?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity _details. */
        public _details?: "details";

        /** ADVSignedDeviceIdentity _accountSignatureKey. */
        public _accountSignatureKey?: "accountSignatureKey";

        /** ADVSignedDeviceIdentity _accountSignature. */
        public _accountSignature?: "accountSignature";

        /** ADVSignedDeviceIdentity _deviceSignature. */
        public _deviceSignature?: "deviceSignature";

        /**
         * Creates a new ADVSignedDeviceIdentity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVSignedDeviceIdentity instance
         */
        public static create(properties?: Adv.IADVSignedDeviceIdentity): Adv.ADVSignedDeviceIdentity;

        /**
         * Encodes the specified ADVSignedDeviceIdentity message. Does not implicitly {@link Adv.ADVSignedDeviceIdentity.verify|verify} messages.
         * @param message ADVSignedDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Adv.IADVSignedDeviceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVSignedDeviceIdentity message, length delimited. Does not implicitly {@link Adv.ADVSignedDeviceIdentity.verify|verify} messages.
         * @param message ADVSignedDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Adv.IADVSignedDeviceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVSignedDeviceIdentity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVSignedDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Adv.ADVSignedDeviceIdentity;

        /**
         * Decodes a ADVSignedDeviceIdentity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVSignedDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Adv.ADVSignedDeviceIdentity;

        /**
         * Verifies a ADVSignedDeviceIdentity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVSignedDeviceIdentity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVSignedDeviceIdentity
         */
        public static fromObject(object: { [k: string]: any }): Adv.ADVSignedDeviceIdentity;

        /**
         * Creates a plain object from a ADVSignedDeviceIdentity message. Also converts values to other types if specified.
         * @param message ADVSignedDeviceIdentity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Adv.ADVSignedDeviceIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVSignedDeviceIdentity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ADVSignedDeviceIdentity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ADVDeviceIdentity. */
    interface IADVDeviceIdentity {

        /** ADVDeviceIdentity rawId */
        rawId?: (number|null);

        /** ADVDeviceIdentity timestamp */
        timestamp?: (number|Long|null);

        /** ADVDeviceIdentity keyIndex */
        keyIndex?: (number|null);

        /** ADVDeviceIdentity accountType */
        accountType?: (Adv.ADVEncryptionType|null);

        /** ADVDeviceIdentity deviceType */
        deviceType?: (Adv.ADVEncryptionType|null);
    }

    /** Represents a ADVDeviceIdentity. */
    class ADVDeviceIdentity implements IADVDeviceIdentity {

        /**
         * Constructs a new ADVDeviceIdentity.
         * @param [properties] Properties to set
         */
        constructor(properties?: Adv.IADVDeviceIdentity);

        /** ADVDeviceIdentity rawId. */
        public rawId?: (number|null);

        /** ADVDeviceIdentity timestamp. */
        public timestamp?: (number|Long|null);

        /** ADVDeviceIdentity keyIndex. */
        public keyIndex?: (number|null);

        /** ADVDeviceIdentity accountType. */
        public accountType?: (Adv.ADVEncryptionType|null);

        /** ADVDeviceIdentity deviceType. */
        public deviceType?: (Adv.ADVEncryptionType|null);

        /** ADVDeviceIdentity _rawId. */
        public _rawId?: "rawId";

        /** ADVDeviceIdentity _timestamp. */
        public _timestamp?: "timestamp";

        /** ADVDeviceIdentity _keyIndex. */
        public _keyIndex?: "keyIndex";

        /** ADVDeviceIdentity _accountType. */
        public _accountType?: "accountType";

        /** ADVDeviceIdentity _deviceType. */
        public _deviceType?: "deviceType";

        /**
         * Creates a new ADVDeviceIdentity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVDeviceIdentity instance
         */
        public static create(properties?: Adv.IADVDeviceIdentity): Adv.ADVDeviceIdentity;

        /**
         * Encodes the specified ADVDeviceIdentity message. Does not implicitly {@link Adv.ADVDeviceIdentity.verify|verify} messages.
         * @param message ADVDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Adv.IADVDeviceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVDeviceIdentity message, length delimited. Does not implicitly {@link Adv.ADVDeviceIdentity.verify|verify} messages.
         * @param message ADVDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Adv.IADVDeviceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVDeviceIdentity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Adv.ADVDeviceIdentity;

        /**
         * Decodes a ADVDeviceIdentity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Adv.ADVDeviceIdentity;

        /**
         * Verifies a ADVDeviceIdentity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVDeviceIdentity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVDeviceIdentity
         */
        public static fromObject(object: { [k: string]: any }): Adv.ADVDeviceIdentity;

        /**
         * Creates a plain object from a ADVDeviceIdentity message. Also converts values to other types if specified.
         * @param message ADVDeviceIdentity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Adv.ADVDeviceIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVDeviceIdentity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ADVDeviceIdentity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ADVSignedKeyIndexList. */
    interface IADVSignedKeyIndexList {

        /** ADVSignedKeyIndexList details */
        details?: (Uint8Array|null);

        /** ADVSignedKeyIndexList accountSignature */
        accountSignature?: (Uint8Array|null);

        /** ADVSignedKeyIndexList accountSignatureKey */
        accountSignatureKey?: (Uint8Array|null);
    }

    /** Represents a ADVSignedKeyIndexList. */
    class ADVSignedKeyIndexList implements IADVSignedKeyIndexList {

        /**
         * Constructs a new ADVSignedKeyIndexList.
         * @param [properties] Properties to set
         */
        constructor(properties?: Adv.IADVSignedKeyIndexList);

        /** ADVSignedKeyIndexList details. */
        public details?: (Uint8Array|null);

        /** ADVSignedKeyIndexList accountSignature. */
        public accountSignature?: (Uint8Array|null);

        /** ADVSignedKeyIndexList accountSignatureKey. */
        public accountSignatureKey?: (Uint8Array|null);

        /** ADVSignedKeyIndexList _details. */
        public _details?: "details";

        /** ADVSignedKeyIndexList _accountSignature. */
        public _accountSignature?: "accountSignature";

        /** ADVSignedKeyIndexList _accountSignatureKey. */
        public _accountSignatureKey?: "accountSignatureKey";

        /**
         * Creates a new ADVSignedKeyIndexList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVSignedKeyIndexList instance
         */
        public static create(properties?: Adv.IADVSignedKeyIndexList): Adv.ADVSignedKeyIndexList;

        /**
         * Encodes the specified ADVSignedKeyIndexList message. Does not implicitly {@link Adv.ADVSignedKeyIndexList.verify|verify} messages.
         * @param message ADVSignedKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Adv.IADVSignedKeyIndexList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVSignedKeyIndexList message, length delimited. Does not implicitly {@link Adv.ADVSignedKeyIndexList.verify|verify} messages.
         * @param message ADVSignedKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Adv.IADVSignedKeyIndexList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVSignedKeyIndexList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVSignedKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Adv.ADVSignedKeyIndexList;

        /**
         * Decodes a ADVSignedKeyIndexList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVSignedKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Adv.ADVSignedKeyIndexList;

        /**
         * Verifies a ADVSignedKeyIndexList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVSignedKeyIndexList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVSignedKeyIndexList
         */
        public static fromObject(object: { [k: string]: any }): Adv.ADVSignedKeyIndexList;

        /**
         * Creates a plain object from a ADVSignedKeyIndexList message. Also converts values to other types if specified.
         * @param message ADVSignedKeyIndexList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Adv.ADVSignedKeyIndexList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVSignedKeyIndexList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ADVSignedKeyIndexList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ADVKeyIndexList. */
    interface IADVKeyIndexList {

        /** ADVKeyIndexList rawId */
        rawId?: (number|null);

        /** ADVKeyIndexList timestamp */
        timestamp?: (number|Long|null);

        /** ADVKeyIndexList currentIndex */
        currentIndex?: (number|null);

        /** ADVKeyIndexList validIndexes */
        validIndexes?: (number[]|null);

        /** ADVKeyIndexList accountType */
        accountType?: (Adv.ADVEncryptionType|null);
    }

    /** Represents a ADVKeyIndexList. */
    class ADVKeyIndexList implements IADVKeyIndexList {

        /**
         * Constructs a new ADVKeyIndexList.
         * @param [properties] Properties to set
         */
        constructor(properties?: Adv.IADVKeyIndexList);

        /** ADVKeyIndexList rawId. */
        public rawId?: (number|null);

        /** ADVKeyIndexList timestamp. */
        public timestamp?: (number|Long|null);

        /** ADVKeyIndexList currentIndex. */
        public currentIndex?: (number|null);

        /** ADVKeyIndexList validIndexes. */
        public validIndexes: number[];

        /** ADVKeyIndexList accountType. */
        public accountType?: (Adv.ADVEncryptionType|null);

        /** ADVKeyIndexList _rawId. */
        public _rawId?: "rawId";

        /** ADVKeyIndexList _timestamp. */
        public _timestamp?: "timestamp";

        /** ADVKeyIndexList _currentIndex. */
        public _currentIndex?: "currentIndex";

        /** ADVKeyIndexList _accountType. */
        public _accountType?: "accountType";

        /**
         * Creates a new ADVKeyIndexList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVKeyIndexList instance
         */
        public static create(properties?: Adv.IADVKeyIndexList): Adv.ADVKeyIndexList;

        /**
         * Encodes the specified ADVKeyIndexList message. Does not implicitly {@link Adv.ADVKeyIndexList.verify|verify} messages.
         * @param message ADVKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Adv.IADVKeyIndexList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVKeyIndexList message, length delimited. Does not implicitly {@link Adv.ADVKeyIndexList.verify|verify} messages.
         * @param message ADVKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Adv.IADVKeyIndexList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVKeyIndexList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Adv.ADVKeyIndexList;

        /**
         * Decodes a ADVKeyIndexList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Adv.ADVKeyIndexList;

        /**
         * Verifies a ADVKeyIndexList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVKeyIndexList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVKeyIndexList
         */
        public static fromObject(object: { [k: string]: any }): Adv.ADVKeyIndexList;

        /**
         * Creates a plain object from a ADVKeyIndexList message. Also converts values to other types if specified.
         * @param message ADVKeyIndexList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Adv.ADVKeyIndexList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVKeyIndexList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ADVKeyIndexList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ADVEncryptionType enum. */
    enum ADVEncryptionType {
        E2EE = 0,
        HOSTED = 1
    }
}
