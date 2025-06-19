import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace Wa6. */
export namespace Wa6 {

    /** Properties of a ClientPayload. */
    interface IClientPayload {

        /** ClientPayload username */
        username?: (number|Long|null);

        /** ClientPayload passive */
        passive?: (boolean|null);

        /** ClientPayload userAgent */
        userAgent?: (Wa6.ClientPayload.IUserAgent|null);

        /** ClientPayload webInfo */
        webInfo?: (Wa6.ClientPayload.IWebInfo|null);

        /** ClientPayload pushName */
        pushName?: (string|null);

        /** ClientPayload sessionId */
        sessionId?: (number|null);

        /** ClientPayload shortConnect */
        shortConnect?: (boolean|null);

        /** ClientPayload connectType */
        connectType?: (Wa6.ClientPayload.ConnectType|null);

        /** ClientPayload connectReason */
        connectReason?: (Wa6.ClientPayload.ConnectReason|null);

        /** ClientPayload shards */
        shards?: (number[]|null);

        /** ClientPayload dnsSource */
        dnsSource?: (Wa6.ClientPayload.IDNSSource|null);

        /** ClientPayload connectAttemptCount */
        connectAttemptCount?: (number|null);

        /** ClientPayload device */
        device?: (number|null);

        /** ClientPayload devicePairingData */
        devicePairingData?: (Wa6.ClientPayload.IDevicePairingRegistrationData|null);

        /** ClientPayload product */
        product?: (Wa6.ClientPayload.Product|null);

        /** ClientPayload fbCat */
        fbCat?: (Uint8Array|null);

        /** ClientPayload fbUserAgent */
        fbUserAgent?: (Uint8Array|null);

        /** ClientPayload oc */
        oc?: (boolean|null);

        /** ClientPayload lc */
        lc?: (number|null);

        /** ClientPayload iosAppExtension */
        iosAppExtension?: (Wa6.ClientPayload.IOSAppExtension|null);

        /** ClientPayload fbAppId */
        fbAppId?: (number|Long|null);

        /** ClientPayload fbDeviceId */
        fbDeviceId?: (Uint8Array|null);

        /** ClientPayload pull */
        pull?: (boolean|null);

        /** ClientPayload paddingBytes */
        paddingBytes?: (Uint8Array|null);

        /** ClientPayload yearClass */
        yearClass?: (number|null);

        /** ClientPayload memClass */
        memClass?: (number|null);

        /** ClientPayload interopData */
        interopData?: (Wa6.ClientPayload.IInteropData|null);

        /** ClientPayload trafficAnonymization */
        trafficAnonymization?: (Wa6.ClientPayload.TrafficAnonymization|null);

        /** ClientPayload lidDbMigrated */
        lidDbMigrated?: (boolean|null);

        /** ClientPayload accountType */
        accountType?: (Wa6.ClientPayload.AccountType|null);
    }

    /** Represents a ClientPayload. */
    class ClientPayload implements IClientPayload {

        /**
         * Constructs a new ClientPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: Wa6.IClientPayload);

        /** ClientPayload username. */
        public username?: (number|Long|null);

        /** ClientPayload passive. */
        public passive?: (boolean|null);

        /** ClientPayload userAgent. */
        public userAgent?: (Wa6.ClientPayload.IUserAgent|null);

        /** ClientPayload webInfo. */
        public webInfo?: (Wa6.ClientPayload.IWebInfo|null);

        /** ClientPayload pushName. */
        public pushName?: (string|null);

        /** ClientPayload sessionId. */
        public sessionId?: (number|null);

        /** ClientPayload shortConnect. */
        public shortConnect?: (boolean|null);

        /** ClientPayload connectType. */
        public connectType?: (Wa6.ClientPayload.ConnectType|null);

        /** ClientPayload connectReason. */
        public connectReason?: (Wa6.ClientPayload.ConnectReason|null);

        /** ClientPayload shards. */
        public shards: number[];

        /** ClientPayload dnsSource. */
        public dnsSource?: (Wa6.ClientPayload.IDNSSource|null);

        /** ClientPayload connectAttemptCount. */
        public connectAttemptCount?: (number|null);

        /** ClientPayload device. */
        public device?: (number|null);

        /** ClientPayload devicePairingData. */
        public devicePairingData?: (Wa6.ClientPayload.IDevicePairingRegistrationData|null);

        /** ClientPayload product. */
        public product?: (Wa6.ClientPayload.Product|null);

        /** ClientPayload fbCat. */
        public fbCat?: (Uint8Array|null);

        /** ClientPayload fbUserAgent. */
        public fbUserAgent?: (Uint8Array|null);

        /** ClientPayload oc. */
        public oc?: (boolean|null);

        /** ClientPayload lc. */
        public lc?: (number|null);

        /** ClientPayload iosAppExtension. */
        public iosAppExtension?: (Wa6.ClientPayload.IOSAppExtension|null);

        /** ClientPayload fbAppId. */
        public fbAppId?: (number|Long|null);

        /** ClientPayload fbDeviceId. */
        public fbDeviceId?: (Uint8Array|null);

        /** ClientPayload pull. */
        public pull?: (boolean|null);

        /** ClientPayload paddingBytes. */
        public paddingBytes?: (Uint8Array|null);

        /** ClientPayload yearClass. */
        public yearClass?: (number|null);

        /** ClientPayload memClass. */
        public memClass?: (number|null);

        /** ClientPayload interopData. */
        public interopData?: (Wa6.ClientPayload.IInteropData|null);

        /** ClientPayload trafficAnonymization. */
        public trafficAnonymization?: (Wa6.ClientPayload.TrafficAnonymization|null);

        /** ClientPayload lidDbMigrated. */
        public lidDbMigrated?: (boolean|null);

        /** ClientPayload accountType. */
        public accountType?: (Wa6.ClientPayload.AccountType|null);

        /** ClientPayload _username. */
        public _username?: "username";

        /** ClientPayload _passive. */
        public _passive?: "passive";

        /** ClientPayload _userAgent. */
        public _userAgent?: "userAgent";

        /** ClientPayload _webInfo. */
        public _webInfo?: "webInfo";

        /** ClientPayload _pushName. */
        public _pushName?: "pushName";

        /** ClientPayload _sessionId. */
        public _sessionId?: "sessionId";

        /** ClientPayload _shortConnect. */
        public _shortConnect?: "shortConnect";

        /** ClientPayload _connectType. */
        public _connectType?: "connectType";

        /** ClientPayload _connectReason. */
        public _connectReason?: "connectReason";

        /** ClientPayload _dnsSource. */
        public _dnsSource?: "dnsSource";

        /** ClientPayload _connectAttemptCount. */
        public _connectAttemptCount?: "connectAttemptCount";

        /** ClientPayload _device. */
        public _device?: "device";

        /** ClientPayload _devicePairingData. */
        public _devicePairingData?: "devicePairingData";

        /** ClientPayload _product. */
        public _product?: "product";

        /** ClientPayload _fbCat. */
        public _fbCat?: "fbCat";

        /** ClientPayload _fbUserAgent. */
        public _fbUserAgent?: "fbUserAgent";

        /** ClientPayload _oc. */
        public _oc?: "oc";

        /** ClientPayload _lc. */
        public _lc?: "lc";

        /** ClientPayload _iosAppExtension. */
        public _iosAppExtension?: "iosAppExtension";

        /** ClientPayload _fbAppId. */
        public _fbAppId?: "fbAppId";

        /** ClientPayload _fbDeviceId. */
        public _fbDeviceId?: "fbDeviceId";

        /** ClientPayload _pull. */
        public _pull?: "pull";

        /** ClientPayload _paddingBytes. */
        public _paddingBytes?: "paddingBytes";

        /** ClientPayload _yearClass. */
        public _yearClass?: "yearClass";

        /** ClientPayload _memClass. */
        public _memClass?: "memClass";

        /** ClientPayload _interopData. */
        public _interopData?: "interopData";

        /** ClientPayload _trafficAnonymization. */
        public _trafficAnonymization?: "trafficAnonymization";

        /** ClientPayload _lidDbMigrated. */
        public _lidDbMigrated?: "lidDbMigrated";

        /** ClientPayload _accountType. */
        public _accountType?: "accountType";

        /**
         * Creates a new ClientPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPayload instance
         */
        public static create(properties?: Wa6.IClientPayload): Wa6.ClientPayload;

        /**
         * Encodes the specified ClientPayload message. Does not implicitly {@link Wa6.ClientPayload.verify|verify} messages.
         * @param message ClientPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Wa6.IClientPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientPayload message, length delimited. Does not implicitly {@link Wa6.ClientPayload.verify|verify} messages.
         * @param message ClientPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Wa6.IClientPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload;

        /**
         * Decodes a ClientPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload;

        /**
         * Verifies a ClientPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPayload
         */
        public static fromObject(object: { [k: string]: any }): Wa6.ClientPayload;

        /**
         * Creates a plain object from a ClientPayload message. Also converts values to other types if specified.
         * @param message ClientPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Wa6.ClientPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientPayload {

        /** AccountType enum. */
        enum AccountType {
            DEFAULT = 0,
            GUEST = 1
        }

        /** ConnectReason enum. */
        enum ConnectReason {
            PUSH = 0,
            USER_ACTIVATED = 1,
            SCHEDULED = 2,
            ERROR_RECONNECT = 3,
            NETWORK_SWITCH = 4,
            PING_RECONNECT = 5,
            UNKNOWN = 6
        }

        /** ConnectType enum. */
        enum ConnectType {
            CELLULAR_UNKNOWN = 0,
            WIFI_UNKNOWN = 1,
            CELLULAR_EDGE = 100,
            CELLULAR_IDEN = 101,
            CELLULAR_UMTS = 102,
            CELLULAR_EVDO = 103,
            CELLULAR_GPRS = 104,
            CELLULAR_HSDPA = 105,
            CELLULAR_HSUPA = 106,
            CELLULAR_HSPA = 107,
            CELLULAR_CDMA = 108,
            CELLULAR_1XRTT = 109,
            CELLULAR_EHRPD = 110,
            CELLULAR_LTE = 111,
            CELLULAR_HSPAP = 112
        }

        /** Properties of a DNSSource. */
        interface IDNSSource {

            /** DNSSource dnsMethod */
            dnsMethod?: (Wa6.ClientPayload.DNSSource.DNSResolutionMethod|null);

            /** DNSSource appCached */
            appCached?: (boolean|null);
        }

        /** Represents a DNSSource. */
        class DNSSource implements IDNSSource {

            /**
             * Constructs a new DNSSource.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.ClientPayload.IDNSSource);

            /** DNSSource dnsMethod. */
            public dnsMethod?: (Wa6.ClientPayload.DNSSource.DNSResolutionMethod|null);

            /** DNSSource appCached. */
            public appCached?: (boolean|null);

            /** DNSSource _dnsMethod. */
            public _dnsMethod?: "dnsMethod";

            /** DNSSource _appCached. */
            public _appCached?: "appCached";

            /**
             * Creates a new DNSSource instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DNSSource instance
             */
            public static create(properties?: Wa6.ClientPayload.IDNSSource): Wa6.ClientPayload.DNSSource;

            /**
             * Encodes the specified DNSSource message. Does not implicitly {@link Wa6.ClientPayload.DNSSource.verify|verify} messages.
             * @param message DNSSource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Wa6.ClientPayload.IDNSSource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DNSSource message, length delimited. Does not implicitly {@link Wa6.ClientPayload.DNSSource.verify|verify} messages.
             * @param message DNSSource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Wa6.ClientPayload.IDNSSource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DNSSource message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DNSSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.DNSSource;

            /**
             * Decodes a DNSSource message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DNSSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.DNSSource;

            /**
             * Verifies a DNSSource message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DNSSource message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DNSSource
             */
            public static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.DNSSource;

            /**
             * Creates a plain object from a DNSSource message. Also converts values to other types if specified.
             * @param message DNSSource
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Wa6.ClientPayload.DNSSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DNSSource to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DNSSource
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DNSSource {

            /** DNSResolutionMethod enum. */
            enum DNSResolutionMethod {
                SYSTEM = 0,
                GOOGLE = 1,
                HARDCODED = 2,
                OVERRIDE = 3,
                FALLBACK = 4,
                MNS = 5
            }
        }

        /** Properties of a DevicePairingRegistrationData. */
        interface IDevicePairingRegistrationData {

            /** DevicePairingRegistrationData eRegid */
            eRegid?: (Uint8Array|null);

            /** DevicePairingRegistrationData eKeytype */
            eKeytype?: (Uint8Array|null);

            /** DevicePairingRegistrationData eIdent */
            eIdent?: (Uint8Array|null);

            /** DevicePairingRegistrationData eSkeyId */
            eSkeyId?: (Uint8Array|null);

            /** DevicePairingRegistrationData eSkeyVal */
            eSkeyVal?: (Uint8Array|null);

            /** DevicePairingRegistrationData eSkeySig */
            eSkeySig?: (Uint8Array|null);

            /** DevicePairingRegistrationData buildHash */
            buildHash?: (Uint8Array|null);

            /** DevicePairingRegistrationData deviceProps */
            deviceProps?: (Uint8Array|null);
        }

        /** Represents a DevicePairingRegistrationData. */
        class DevicePairingRegistrationData implements IDevicePairingRegistrationData {

            /**
             * Constructs a new DevicePairingRegistrationData.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.ClientPayload.IDevicePairingRegistrationData);

            /** DevicePairingRegistrationData eRegid. */
            public eRegid?: (Uint8Array|null);

            /** DevicePairingRegistrationData eKeytype. */
            public eKeytype?: (Uint8Array|null);

            /** DevicePairingRegistrationData eIdent. */
            public eIdent?: (Uint8Array|null);

            /** DevicePairingRegistrationData eSkeyId. */
            public eSkeyId?: (Uint8Array|null);

            /** DevicePairingRegistrationData eSkeyVal. */
            public eSkeyVal?: (Uint8Array|null);

            /** DevicePairingRegistrationData eSkeySig. */
            public eSkeySig?: (Uint8Array|null);

            /** DevicePairingRegistrationData buildHash. */
            public buildHash?: (Uint8Array|null);

            /** DevicePairingRegistrationData deviceProps. */
            public deviceProps?: (Uint8Array|null);

            /** DevicePairingRegistrationData _eRegid. */
            public _eRegid?: "eRegid";

            /** DevicePairingRegistrationData _eKeytype. */
            public _eKeytype?: "eKeytype";

            /** DevicePairingRegistrationData _eIdent. */
            public _eIdent?: "eIdent";

            /** DevicePairingRegistrationData _eSkeyId. */
            public _eSkeyId?: "eSkeyId";

            /** DevicePairingRegistrationData _eSkeyVal. */
            public _eSkeyVal?: "eSkeyVal";

            /** DevicePairingRegistrationData _eSkeySig. */
            public _eSkeySig?: "eSkeySig";

            /** DevicePairingRegistrationData _buildHash. */
            public _buildHash?: "buildHash";

            /** DevicePairingRegistrationData _deviceProps. */
            public _deviceProps?: "deviceProps";

            /**
             * Creates a new DevicePairingRegistrationData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DevicePairingRegistrationData instance
             */
            public static create(properties?: Wa6.ClientPayload.IDevicePairingRegistrationData): Wa6.ClientPayload.DevicePairingRegistrationData;

            /**
             * Encodes the specified DevicePairingRegistrationData message. Does not implicitly {@link Wa6.ClientPayload.DevicePairingRegistrationData.verify|verify} messages.
             * @param message DevicePairingRegistrationData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Wa6.ClientPayload.IDevicePairingRegistrationData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DevicePairingRegistrationData message, length delimited. Does not implicitly {@link Wa6.ClientPayload.DevicePairingRegistrationData.verify|verify} messages.
             * @param message DevicePairingRegistrationData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Wa6.ClientPayload.IDevicePairingRegistrationData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DevicePairingRegistrationData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DevicePairingRegistrationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.DevicePairingRegistrationData;

            /**
             * Decodes a DevicePairingRegistrationData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DevicePairingRegistrationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.DevicePairingRegistrationData;

            /**
             * Verifies a DevicePairingRegistrationData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DevicePairingRegistrationData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DevicePairingRegistrationData
             */
            public static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.DevicePairingRegistrationData;

            /**
             * Creates a plain object from a DevicePairingRegistrationData message. Also converts values to other types if specified.
             * @param message DevicePairingRegistrationData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Wa6.ClientPayload.DevicePairingRegistrationData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DevicePairingRegistrationData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DevicePairingRegistrationData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** IOSAppExtension enum. */
        enum IOSAppExtension {
            SHARE_EXTENSION = 0,
            SERVICE_EXTENSION = 1,
            INTENTS_EXTENSION = 2
        }

        /** Properties of an InteropData. */
        interface IInteropData {

            /** InteropData accountId */
            accountId?: (number|Long|null);

            /** InteropData token */
            token?: (Uint8Array|null);

            /** InteropData enableReadReceipts */
            enableReadReceipts?: (boolean|null);
        }

        /** Represents an InteropData. */
        class InteropData implements IInteropData {

            /**
             * Constructs a new InteropData.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.ClientPayload.IInteropData);

            /** InteropData accountId. */
            public accountId?: (number|Long|null);

            /** InteropData token. */
            public token?: (Uint8Array|null);

            /** InteropData enableReadReceipts. */
            public enableReadReceipts?: (boolean|null);

            /** InteropData _accountId. */
            public _accountId?: "accountId";

            /** InteropData _token. */
            public _token?: "token";

            /** InteropData _enableReadReceipts. */
            public _enableReadReceipts?: "enableReadReceipts";

            /**
             * Creates a new InteropData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InteropData instance
             */
            public static create(properties?: Wa6.ClientPayload.IInteropData): Wa6.ClientPayload.InteropData;

            /**
             * Encodes the specified InteropData message. Does not implicitly {@link Wa6.ClientPayload.InteropData.verify|verify} messages.
             * @param message InteropData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Wa6.ClientPayload.IInteropData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InteropData message, length delimited. Does not implicitly {@link Wa6.ClientPayload.InteropData.verify|verify} messages.
             * @param message InteropData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Wa6.ClientPayload.IInteropData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InteropData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InteropData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.InteropData;

            /**
             * Decodes an InteropData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InteropData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.InteropData;

            /**
             * Verifies an InteropData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InteropData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InteropData
             */
            public static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.InteropData;

            /**
             * Creates a plain object from an InteropData message. Also converts values to other types if specified.
             * @param message InteropData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Wa6.ClientPayload.InteropData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InteropData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InteropData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Product enum. */
        enum Product {
            WHATSAPP = 0,
            MESSENGER = 1,
            INTEROP = 2,
            INTEROP_MSGR = 3,
            WHATSAPP_LID = 4
        }

        /** TrafficAnonymization enum. */
        enum TrafficAnonymization {
            OFF = 0,
            STANDARD = 1
        }

        /** Properties of a UserAgent. */
        interface IUserAgent {

            /** UserAgent platform */
            platform?: (Wa6.ClientPayload.UserAgent.Platform|null);

            /** UserAgent appVersion */
            appVersion?: (Wa6.ClientPayload.UserAgent.IAppVersion|null);

            /** UserAgent mcc */
            mcc?: (string|null);

            /** UserAgent mnc */
            mnc?: (string|null);

            /** UserAgent osVersion */
            osVersion?: (string|null);

            /** UserAgent manufacturer */
            manufacturer?: (string|null);

            /** UserAgent device */
            device?: (string|null);

            /** UserAgent osBuildNumber */
            osBuildNumber?: (string|null);

            /** UserAgent phoneId */
            phoneId?: (string|null);

            /** UserAgent releaseChannel */
            releaseChannel?: (Wa6.ClientPayload.UserAgent.ReleaseChannel|null);

            /** UserAgent localeLanguageIso6391 */
            localeLanguageIso6391?: (string|null);

            /** UserAgent localeCountryIso31661Alpha2 */
            localeCountryIso31661Alpha2?: (string|null);

            /** UserAgent deviceBoard */
            deviceBoard?: (string|null);

            /** UserAgent deviceExpId */
            deviceExpId?: (string|null);

            /** UserAgent deviceType */
            deviceType?: (Wa6.ClientPayload.UserAgent.DeviceType|null);

            /** UserAgent deviceModelType */
            deviceModelType?: (string|null);
        }

        /** Represents a UserAgent. */
        class UserAgent implements IUserAgent {

            /**
             * Constructs a new UserAgent.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.ClientPayload.IUserAgent);

            /** UserAgent platform. */
            public platform?: (Wa6.ClientPayload.UserAgent.Platform|null);

            /** UserAgent appVersion. */
            public appVersion?: (Wa6.ClientPayload.UserAgent.IAppVersion|null);

            /** UserAgent mcc. */
            public mcc?: (string|null);

            /** UserAgent mnc. */
            public mnc?: (string|null);

            /** UserAgent osVersion. */
            public osVersion?: (string|null);

            /** UserAgent manufacturer. */
            public manufacturer?: (string|null);

            /** UserAgent device. */
            public device?: (string|null);

            /** UserAgent osBuildNumber. */
            public osBuildNumber?: (string|null);

            /** UserAgent phoneId. */
            public phoneId?: (string|null);

            /** UserAgent releaseChannel. */
            public releaseChannel?: (Wa6.ClientPayload.UserAgent.ReleaseChannel|null);

            /** UserAgent localeLanguageIso6391. */
            public localeLanguageIso6391?: (string|null);

            /** UserAgent localeCountryIso31661Alpha2. */
            public localeCountryIso31661Alpha2?: (string|null);

            /** UserAgent deviceBoard. */
            public deviceBoard?: (string|null);

            /** UserAgent deviceExpId. */
            public deviceExpId?: (string|null);

            /** UserAgent deviceType. */
            public deviceType?: (Wa6.ClientPayload.UserAgent.DeviceType|null);

            /** UserAgent deviceModelType. */
            public deviceModelType?: (string|null);

            /** UserAgent _platform. */
            public _platform?: "platform";

            /** UserAgent _appVersion. */
            public _appVersion?: "appVersion";

            /** UserAgent _mcc. */
            public _mcc?: "mcc";

            /** UserAgent _mnc. */
            public _mnc?: "mnc";

            /** UserAgent _osVersion. */
            public _osVersion?: "osVersion";

            /** UserAgent _manufacturer. */
            public _manufacturer?: "manufacturer";

            /** UserAgent _device. */
            public _device?: "device";

            /** UserAgent _osBuildNumber. */
            public _osBuildNumber?: "osBuildNumber";

            /** UserAgent _phoneId. */
            public _phoneId?: "phoneId";

            /** UserAgent _releaseChannel. */
            public _releaseChannel?: "releaseChannel";

            /** UserAgent _localeLanguageIso6391. */
            public _localeLanguageIso6391?: "localeLanguageIso6391";

            /** UserAgent _localeCountryIso31661Alpha2. */
            public _localeCountryIso31661Alpha2?: "localeCountryIso31661Alpha2";

            /** UserAgent _deviceBoard. */
            public _deviceBoard?: "deviceBoard";

            /** UserAgent _deviceExpId. */
            public _deviceExpId?: "deviceExpId";

            /** UserAgent _deviceType. */
            public _deviceType?: "deviceType";

            /** UserAgent _deviceModelType. */
            public _deviceModelType?: "deviceModelType";

            /**
             * Creates a new UserAgent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserAgent instance
             */
            public static create(properties?: Wa6.ClientPayload.IUserAgent): Wa6.ClientPayload.UserAgent;

            /**
             * Encodes the specified UserAgent message. Does not implicitly {@link Wa6.ClientPayload.UserAgent.verify|verify} messages.
             * @param message UserAgent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Wa6.ClientPayload.IUserAgent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserAgent message, length delimited. Does not implicitly {@link Wa6.ClientPayload.UserAgent.verify|verify} messages.
             * @param message UserAgent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Wa6.ClientPayload.IUserAgent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserAgent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserAgent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.UserAgent;

            /**
             * Decodes a UserAgent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserAgent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.UserAgent;

            /**
             * Verifies a UserAgent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserAgent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserAgent
             */
            public static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.UserAgent;

            /**
             * Creates a plain object from a UserAgent message. Also converts values to other types if specified.
             * @param message UserAgent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Wa6.ClientPayload.UserAgent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserAgent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserAgent
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UserAgent {

            /** Properties of an AppVersion. */
            interface IAppVersion {

                /** AppVersion primary */
                primary?: (number|null);

                /** AppVersion secondary */
                secondary?: (number|null);

                /** AppVersion tertiary */
                tertiary?: (number|null);

                /** AppVersion quaternary */
                quaternary?: (number|null);

                /** AppVersion quinary */
                quinary?: (number|null);
            }

            /** Represents an AppVersion. */
            class AppVersion implements IAppVersion {

                /**
                 * Constructs a new AppVersion.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Wa6.ClientPayload.UserAgent.IAppVersion);

                /** AppVersion primary. */
                public primary?: (number|null);

                /** AppVersion secondary. */
                public secondary?: (number|null);

                /** AppVersion tertiary. */
                public tertiary?: (number|null);

                /** AppVersion quaternary. */
                public quaternary?: (number|null);

                /** AppVersion quinary. */
                public quinary?: (number|null);

                /** AppVersion _primary. */
                public _primary?: "primary";

                /** AppVersion _secondary. */
                public _secondary?: "secondary";

                /** AppVersion _tertiary. */
                public _tertiary?: "tertiary";

                /** AppVersion _quaternary. */
                public _quaternary?: "quaternary";

                /** AppVersion _quinary. */
                public _quinary?: "quinary";

                /**
                 * Creates a new AppVersion instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppVersion instance
                 */
                public static create(properties?: Wa6.ClientPayload.UserAgent.IAppVersion): Wa6.ClientPayload.UserAgent.AppVersion;

                /**
                 * Encodes the specified AppVersion message. Does not implicitly {@link Wa6.ClientPayload.UserAgent.AppVersion.verify|verify} messages.
                 * @param message AppVersion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Wa6.ClientPayload.UserAgent.IAppVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppVersion message, length delimited. Does not implicitly {@link Wa6.ClientPayload.UserAgent.AppVersion.verify|verify} messages.
                 * @param message AppVersion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Wa6.ClientPayload.UserAgent.IAppVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppVersion message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.UserAgent.AppVersion;

                /**
                 * Decodes an AppVersion message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.UserAgent.AppVersion;

                /**
                 * Verifies an AppVersion message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppVersion message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppVersion
                 */
                public static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.UserAgent.AppVersion;

                /**
                 * Creates a plain object from an AppVersion message. Also converts values to other types if specified.
                 * @param message AppVersion
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Wa6.ClientPayload.UserAgent.AppVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppVersion to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AppVersion
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** DeviceType enum. */
            enum DeviceType {
                PHONE = 0,
                TABLET = 1,
                DESKTOP = 2,
                WEARABLE = 3,
                VR = 4
            }

            /** Platform enum. */
            enum Platform {
                ANDROID = 0,
                IOS = 1,
                WINDOWS_PHONE = 2,
                BLACKBERRY = 3,
                BLACKBERRYX = 4,
                S40 = 5,
                S60 = 6,
                PYTHON_CLIENT = 7,
                TIZEN = 8,
                ENTERPRISE = 9,
                SMB_ANDROID = 10,
                KAIOS = 11,
                SMB_IOS = 12,
                WINDOWS = 13,
                WEB = 14,
                PORTAL = 15,
                GREEN_ANDROID = 16,
                GREEN_IPHONE = 17,
                BLUE_ANDROID = 18,
                BLUE_IPHONE = 19,
                FBLITE_ANDROID = 20,
                MLITE_ANDROID = 21,
                IGLITE_ANDROID = 22,
                PAGE = 23,
                MACOS = 24,
                OCULUS_MSG = 25,
                OCULUS_CALL = 26,
                MILAN = 27,
                CAPI = 28,
                WEAROS = 29,
                ARDEVICE = 30,
                VRDEVICE = 31,
                BLUE_WEB = 32,
                IPAD = 33,
                TEST = 34,
                SMART_GLASSES = 35
            }

            /** ReleaseChannel enum. */
            enum ReleaseChannel {
                RELEASE = 0,
                BETA = 1,
                ALPHA = 2,
                DEBUG = 3
            }
        }

        /** Properties of a WebInfo. */
        interface IWebInfo {

            /** WebInfo refToken */
            refToken?: (string|null);

            /** WebInfo version */
            version?: (string|null);

            /** WebInfo webdPayload */
            webdPayload?: (Wa6.ClientPayload.WebInfo.IWebdPayload|null);

            /** WebInfo webSubPlatform */
            webSubPlatform?: (Wa6.ClientPayload.WebInfo.WebSubPlatform|null);
        }

        /** Represents a WebInfo. */
        class WebInfo implements IWebInfo {

            /**
             * Constructs a new WebInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.ClientPayload.IWebInfo);

            /** WebInfo refToken. */
            public refToken?: (string|null);

            /** WebInfo version. */
            public version?: (string|null);

            /** WebInfo webdPayload. */
            public webdPayload?: (Wa6.ClientPayload.WebInfo.IWebdPayload|null);

            /** WebInfo webSubPlatform. */
            public webSubPlatform?: (Wa6.ClientPayload.WebInfo.WebSubPlatform|null);

            /** WebInfo _refToken. */
            public _refToken?: "refToken";

            /** WebInfo _version. */
            public _version?: "version";

            /** WebInfo _webdPayload. */
            public _webdPayload?: "webdPayload";

            /** WebInfo _webSubPlatform. */
            public _webSubPlatform?: "webSubPlatform";

            /**
             * Creates a new WebInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WebInfo instance
             */
            public static create(properties?: Wa6.ClientPayload.IWebInfo): Wa6.ClientPayload.WebInfo;

            /**
             * Encodes the specified WebInfo message. Does not implicitly {@link Wa6.ClientPayload.WebInfo.verify|verify} messages.
             * @param message WebInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Wa6.ClientPayload.IWebInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WebInfo message, length delimited. Does not implicitly {@link Wa6.ClientPayload.WebInfo.verify|verify} messages.
             * @param message WebInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Wa6.ClientPayload.IWebInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WebInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WebInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.WebInfo;

            /**
             * Decodes a WebInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WebInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.WebInfo;

            /**
             * Verifies a WebInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WebInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WebInfo
             */
            public static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.WebInfo;

            /**
             * Creates a plain object from a WebInfo message. Also converts values to other types if specified.
             * @param message WebInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Wa6.ClientPayload.WebInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WebInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WebInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace WebInfo {

            /** WebSubPlatform enum. */
            enum WebSubPlatform {
                WEB_BROWSER = 0,
                APP_STORE = 1,
                WIN_STORE = 2,
                DARWIN = 3,
                WIN32 = 4,
                WIN_HYBRID = 5
            }

            /** Properties of a WebdPayload. */
            interface IWebdPayload {

                /** WebdPayload usesParticipantInKey */
                usesParticipantInKey?: (boolean|null);

                /** WebdPayload supportsStarredMessages */
                supportsStarredMessages?: (boolean|null);

                /** WebdPayload supportsDocumentMessages */
                supportsDocumentMessages?: (boolean|null);

                /** WebdPayload supportsUrlMessages */
                supportsUrlMessages?: (boolean|null);

                /** WebdPayload supportsMediaRetry */
                supportsMediaRetry?: (boolean|null);

                /** WebdPayload supportsE2EImage */
                supportsE2EImage?: (boolean|null);

                /** WebdPayload supportsE2EVideo */
                supportsE2EVideo?: (boolean|null);

                /** WebdPayload supportsE2EAudio */
                supportsE2EAudio?: (boolean|null);

                /** WebdPayload supportsE2EDocument */
                supportsE2EDocument?: (boolean|null);

                /** WebdPayload documentTypes */
                documentTypes?: (string|null);

                /** WebdPayload features */
                features?: (Uint8Array|null);
            }

            /** Represents a WebdPayload. */
            class WebdPayload implements IWebdPayload {

                /**
                 * Constructs a new WebdPayload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Wa6.ClientPayload.WebInfo.IWebdPayload);

                /** WebdPayload usesParticipantInKey. */
                public usesParticipantInKey?: (boolean|null);

                /** WebdPayload supportsStarredMessages. */
                public supportsStarredMessages?: (boolean|null);

                /** WebdPayload supportsDocumentMessages. */
                public supportsDocumentMessages?: (boolean|null);

                /** WebdPayload supportsUrlMessages. */
                public supportsUrlMessages?: (boolean|null);

                /** WebdPayload supportsMediaRetry. */
                public supportsMediaRetry?: (boolean|null);

                /** WebdPayload supportsE2EImage. */
                public supportsE2EImage?: (boolean|null);

                /** WebdPayload supportsE2EVideo. */
                public supportsE2EVideo?: (boolean|null);

                /** WebdPayload supportsE2EAudio. */
                public supportsE2EAudio?: (boolean|null);

                /** WebdPayload supportsE2EDocument. */
                public supportsE2EDocument?: (boolean|null);

                /** WebdPayload documentTypes. */
                public documentTypes?: (string|null);

                /** WebdPayload features. */
                public features?: (Uint8Array|null);

                /** WebdPayload _usesParticipantInKey. */
                public _usesParticipantInKey?: "usesParticipantInKey";

                /** WebdPayload _supportsStarredMessages. */
                public _supportsStarredMessages?: "supportsStarredMessages";

                /** WebdPayload _supportsDocumentMessages. */
                public _supportsDocumentMessages?: "supportsDocumentMessages";

                /** WebdPayload _supportsUrlMessages. */
                public _supportsUrlMessages?: "supportsUrlMessages";

                /** WebdPayload _supportsMediaRetry. */
                public _supportsMediaRetry?: "supportsMediaRetry";

                /** WebdPayload _supportsE2EImage. */
                public _supportsE2EImage?: "supportsE2EImage";

                /** WebdPayload _supportsE2EVideo. */
                public _supportsE2EVideo?: "supportsE2EVideo";

                /** WebdPayload _supportsE2EAudio. */
                public _supportsE2EAudio?: "supportsE2EAudio";

                /** WebdPayload _supportsE2EDocument. */
                public _supportsE2EDocument?: "supportsE2EDocument";

                /** WebdPayload _documentTypes. */
                public _documentTypes?: "documentTypes";

                /** WebdPayload _features. */
                public _features?: "features";

                /**
                 * Creates a new WebdPayload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WebdPayload instance
                 */
                public static create(properties?: Wa6.ClientPayload.WebInfo.IWebdPayload): Wa6.ClientPayload.WebInfo.WebdPayload;

                /**
                 * Encodes the specified WebdPayload message. Does not implicitly {@link Wa6.ClientPayload.WebInfo.WebdPayload.verify|verify} messages.
                 * @param message WebdPayload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Wa6.ClientPayload.WebInfo.IWebdPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WebdPayload message, length delimited. Does not implicitly {@link Wa6.ClientPayload.WebInfo.WebdPayload.verify|verify} messages.
                 * @param message WebdPayload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Wa6.ClientPayload.WebInfo.IWebdPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WebdPayload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WebdPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.ClientPayload.WebInfo.WebdPayload;

                /**
                 * Decodes a WebdPayload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WebdPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.ClientPayload.WebInfo.WebdPayload;

                /**
                 * Verifies a WebdPayload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WebdPayload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WebdPayload
                 */
                public static fromObject(object: { [k: string]: any }): Wa6.ClientPayload.WebInfo.WebdPayload;

                /**
                 * Creates a plain object from a WebdPayload message. Also converts values to other types if specified.
                 * @param message WebdPayload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Wa6.ClientPayload.WebInfo.WebdPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WebdPayload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WebdPayload
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Properties of a HandshakeMessage. */
    interface IHandshakeMessage {

        /** HandshakeMessage clientHello */
        clientHello?: (Wa6.HandshakeMessage.IClientHello|null);

        /** HandshakeMessage serverHello */
        serverHello?: (Wa6.HandshakeMessage.IServerHello|null);

        /** HandshakeMessage clientFinish */
        clientFinish?: (Wa6.HandshakeMessage.IClientFinish|null);
    }

    /** Represents a HandshakeMessage. */
    class HandshakeMessage implements IHandshakeMessage {

        /**
         * Constructs a new HandshakeMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: Wa6.IHandshakeMessage);

        /** HandshakeMessage clientHello. */
        public clientHello?: (Wa6.HandshakeMessage.IClientHello|null);

        /** HandshakeMessage serverHello. */
        public serverHello?: (Wa6.HandshakeMessage.IServerHello|null);

        /** HandshakeMessage clientFinish. */
        public clientFinish?: (Wa6.HandshakeMessage.IClientFinish|null);

        /** HandshakeMessage _clientHello. */
        public _clientHello?: "clientHello";

        /** HandshakeMessage _serverHello. */
        public _serverHello?: "serverHello";

        /** HandshakeMessage _clientFinish. */
        public _clientFinish?: "clientFinish";

        /**
         * Creates a new HandshakeMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HandshakeMessage instance
         */
        public static create(properties?: Wa6.IHandshakeMessage): Wa6.HandshakeMessage;

        /**
         * Encodes the specified HandshakeMessage message. Does not implicitly {@link Wa6.HandshakeMessage.verify|verify} messages.
         * @param message HandshakeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Wa6.IHandshakeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HandshakeMessage message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.verify|verify} messages.
         * @param message HandshakeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Wa6.IHandshakeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HandshakeMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HandshakeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.HandshakeMessage;

        /**
         * Decodes a HandshakeMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HandshakeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.HandshakeMessage;

        /**
         * Verifies a HandshakeMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HandshakeMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HandshakeMessage
         */
        public static fromObject(object: { [k: string]: any }): Wa6.HandshakeMessage;

        /**
         * Creates a plain object from a HandshakeMessage message. Also converts values to other types if specified.
         * @param message HandshakeMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Wa6.HandshakeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HandshakeMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HandshakeMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace HandshakeMessage {

        /** Properties of a ClientFinish. */
        interface IClientFinish {

            /** ClientFinish static */
            "static"?: (Uint8Array|null);

            /** ClientFinish payload */
            payload?: (Uint8Array|null);
        }

        /** Represents a ClientFinish. */
        class ClientFinish implements IClientFinish {

            /**
             * Constructs a new ClientFinish.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.HandshakeMessage.IClientFinish);

            /** ClientFinish static. */
            public static?: (Uint8Array|null);

            /** ClientFinish payload. */
            public payload?: (Uint8Array|null);

            /** ClientFinish _static. */
            public _static?: "static";

            /** ClientFinish _payload. */
            public _payload?: "payload";

            /**
             * Creates a new ClientFinish instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientFinish instance
             */
            public static create(properties?: Wa6.HandshakeMessage.IClientFinish): Wa6.HandshakeMessage.ClientFinish;

            /**
             * Encodes the specified ClientFinish message. Does not implicitly {@link Wa6.HandshakeMessage.ClientFinish.verify|verify} messages.
             * @param message ClientFinish message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Wa6.HandshakeMessage.IClientFinish, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientFinish message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.ClientFinish.verify|verify} messages.
             * @param message ClientFinish message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Wa6.HandshakeMessage.IClientFinish, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientFinish message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientFinish
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.HandshakeMessage.ClientFinish;

            /**
             * Decodes a ClientFinish message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientFinish
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.HandshakeMessage.ClientFinish;

            /**
             * Verifies a ClientFinish message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientFinish message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientFinish
             */
            public static fromObject(object: { [k: string]: any }): Wa6.HandshakeMessage.ClientFinish;

            /**
             * Creates a plain object from a ClientFinish message. Also converts values to other types if specified.
             * @param message ClientFinish
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Wa6.HandshakeMessage.ClientFinish, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientFinish to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientFinish
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ClientHello. */
        interface IClientHello {

            /** ClientHello ephemeral */
            ephemeral?: (Uint8Array|null);

            /** ClientHello static */
            "static"?: (Uint8Array|null);

            /** ClientHello payload */
            payload?: (Uint8Array|null);
        }

        /** Represents a ClientHello. */
        class ClientHello implements IClientHello {

            /**
             * Constructs a new ClientHello.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.HandshakeMessage.IClientHello);

            /** ClientHello ephemeral. */
            public ephemeral?: (Uint8Array|null);

            /** ClientHello static. */
            public static?: (Uint8Array|null);

            /** ClientHello payload. */
            public payload?: (Uint8Array|null);

            /** ClientHello _ephemeral. */
            public _ephemeral?: "ephemeral";

            /** ClientHello _static. */
            public _static?: "static";

            /** ClientHello _payload. */
            public _payload?: "payload";

            /**
             * Creates a new ClientHello instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientHello instance
             */
            public static create(properties?: Wa6.HandshakeMessage.IClientHello): Wa6.HandshakeMessage.ClientHello;

            /**
             * Encodes the specified ClientHello message. Does not implicitly {@link Wa6.HandshakeMessage.ClientHello.verify|verify} messages.
             * @param message ClientHello message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Wa6.HandshakeMessage.IClientHello, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientHello message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.ClientHello.verify|verify} messages.
             * @param message ClientHello message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Wa6.HandshakeMessage.IClientHello, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientHello message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.HandshakeMessage.ClientHello;

            /**
             * Decodes a ClientHello message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.HandshakeMessage.ClientHello;

            /**
             * Verifies a ClientHello message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientHello message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientHello
             */
            public static fromObject(object: { [k: string]: any }): Wa6.HandshakeMessage.ClientHello;

            /**
             * Creates a plain object from a ClientHello message. Also converts values to other types if specified.
             * @param message ClientHello
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Wa6.HandshakeMessage.ClientHello, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientHello to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientHello
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServerHello. */
        interface IServerHello {

            /** ServerHello ephemeral */
            ephemeral?: (Uint8Array|null);

            /** ServerHello static */
            "static"?: (Uint8Array|null);

            /** ServerHello payload */
            payload?: (Uint8Array|null);
        }

        /** Represents a ServerHello. */
        class ServerHello implements IServerHello {

            /**
             * Constructs a new ServerHello.
             * @param [properties] Properties to set
             */
            constructor(properties?: Wa6.HandshakeMessage.IServerHello);

            /** ServerHello ephemeral. */
            public ephemeral?: (Uint8Array|null);

            /** ServerHello static. */
            public static?: (Uint8Array|null);

            /** ServerHello payload. */
            public payload?: (Uint8Array|null);

            /** ServerHello _ephemeral. */
            public _ephemeral?: "ephemeral";

            /** ServerHello _static. */
            public _static?: "static";

            /** ServerHello _payload. */
            public _payload?: "payload";

            /**
             * Creates a new ServerHello instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServerHello instance
             */
            public static create(properties?: Wa6.HandshakeMessage.IServerHello): Wa6.HandshakeMessage.ServerHello;

            /**
             * Encodes the specified ServerHello message. Does not implicitly {@link Wa6.HandshakeMessage.ServerHello.verify|verify} messages.
             * @param message ServerHello message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Wa6.HandshakeMessage.IServerHello, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServerHello message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.ServerHello.verify|verify} messages.
             * @param message ServerHello message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Wa6.HandshakeMessage.IServerHello, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServerHello message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServerHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Wa6.HandshakeMessage.ServerHello;

            /**
             * Decodes a ServerHello message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServerHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Wa6.HandshakeMessage.ServerHello;

            /**
             * Verifies a ServerHello message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServerHello message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServerHello
             */
            public static fromObject(object: { [k: string]: any }): Wa6.HandshakeMessage.ServerHello;

            /**
             * Creates a plain object from a ServerHello message. Also converts values to other types if specified.
             * @param message ServerHello
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Wa6.HandshakeMessage.ServerHello, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServerHello to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServerHello
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
