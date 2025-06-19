import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace MmsRetry. */
export namespace MmsRetry {

    /** Properties of a ServerErrorReceipt. */
    interface IServerErrorReceipt {

        /** ServerErrorReceipt stanzaId */
        stanzaId?: (string|null);
    }

    /** Represents a ServerErrorReceipt. */
    class ServerErrorReceipt implements IServerErrorReceipt {

        /**
         * Constructs a new ServerErrorReceipt.
         * @param [properties] Properties to set
         */
        constructor(properties?: MmsRetry.IServerErrorReceipt);

        /** ServerErrorReceipt stanzaId. */
        public stanzaId?: (string|null);

        /** ServerErrorReceipt _stanzaId. */
        public _stanzaId?: "stanzaId";

        /**
         * Creates a new ServerErrorReceipt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerErrorReceipt instance
         */
        public static create(properties?: MmsRetry.IServerErrorReceipt): MmsRetry.ServerErrorReceipt;

        /**
         * Encodes the specified ServerErrorReceipt message. Does not implicitly {@link MmsRetry.ServerErrorReceipt.verify|verify} messages.
         * @param message ServerErrorReceipt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MmsRetry.IServerErrorReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerErrorReceipt message, length delimited. Does not implicitly {@link MmsRetry.ServerErrorReceipt.verify|verify} messages.
         * @param message ServerErrorReceipt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MmsRetry.IServerErrorReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerErrorReceipt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerErrorReceipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MmsRetry.ServerErrorReceipt;

        /**
         * Decodes a ServerErrorReceipt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerErrorReceipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MmsRetry.ServerErrorReceipt;

        /**
         * Verifies a ServerErrorReceipt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerErrorReceipt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerErrorReceipt
         */
        public static fromObject(object: { [k: string]: any }): MmsRetry.ServerErrorReceipt;

        /**
         * Creates a plain object from a ServerErrorReceipt message. Also converts values to other types if specified.
         * @param message ServerErrorReceipt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MmsRetry.ServerErrorReceipt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerErrorReceipt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerErrorReceipt
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MediaRetryNotification. */
    interface IMediaRetryNotification {

        /** MediaRetryNotification stanzaId */
        stanzaId?: (string|null);

        /** MediaRetryNotification directPath */
        directPath?: (string|null);

        /** MediaRetryNotification result */
        result?: (MmsRetry.MediaRetryNotification.ResultType|null);

        /** MediaRetryNotification messageSecret */
        messageSecret?: (Uint8Array|null);
    }

    /** Represents a MediaRetryNotification. */
    class MediaRetryNotification implements IMediaRetryNotification {

        /**
         * Constructs a new MediaRetryNotification.
         * @param [properties] Properties to set
         */
        constructor(properties?: MmsRetry.IMediaRetryNotification);

        /** MediaRetryNotification stanzaId. */
        public stanzaId?: (string|null);

        /** MediaRetryNotification directPath. */
        public directPath?: (string|null);

        /** MediaRetryNotification result. */
        public result?: (MmsRetry.MediaRetryNotification.ResultType|null);

        /** MediaRetryNotification messageSecret. */
        public messageSecret?: (Uint8Array|null);

        /** MediaRetryNotification _stanzaId. */
        public _stanzaId?: "stanzaId";

        /** MediaRetryNotification _directPath. */
        public _directPath?: "directPath";

        /** MediaRetryNotification _result. */
        public _result?: "result";

        /** MediaRetryNotification _messageSecret. */
        public _messageSecret?: "messageSecret";

        /**
         * Creates a new MediaRetryNotification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MediaRetryNotification instance
         */
        public static create(properties?: MmsRetry.IMediaRetryNotification): MmsRetry.MediaRetryNotification;

        /**
         * Encodes the specified MediaRetryNotification message. Does not implicitly {@link MmsRetry.MediaRetryNotification.verify|verify} messages.
         * @param message MediaRetryNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MmsRetry.IMediaRetryNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MediaRetryNotification message, length delimited. Does not implicitly {@link MmsRetry.MediaRetryNotification.verify|verify} messages.
         * @param message MediaRetryNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MmsRetry.IMediaRetryNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MediaRetryNotification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MediaRetryNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MmsRetry.MediaRetryNotification;

        /**
         * Decodes a MediaRetryNotification message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MediaRetryNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MmsRetry.MediaRetryNotification;

        /**
         * Verifies a MediaRetryNotification message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MediaRetryNotification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MediaRetryNotification
         */
        public static fromObject(object: { [k: string]: any }): MmsRetry.MediaRetryNotification;

        /**
         * Creates a plain object from a MediaRetryNotification message. Also converts values to other types if specified.
         * @param message MediaRetryNotification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MmsRetry.MediaRetryNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MediaRetryNotification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MediaRetryNotification
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MediaRetryNotification {

        /** ResultType enum. */
        enum ResultType {
            GENERAL_ERROR = 0,
            SUCCESS = 1,
            NOT_FOUND = 2,
            DECRYPTION_ERROR = 3
        }
    }
}
