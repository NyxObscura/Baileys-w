import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace Ephemeral. */
export namespace Ephemeral {

    /** Properties of an EphemeralSetting. */
    interface IEphemeralSetting {

        /** EphemeralSetting duration */
        duration?: (number|null);

        /** EphemeralSetting timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents an EphemeralSetting. */
    class EphemeralSetting implements IEphemeralSetting {

        /**
         * Constructs a new EphemeralSetting.
         * @param [properties] Properties to set
         */
        constructor(properties?: Ephemeral.IEphemeralSetting);

        /** EphemeralSetting duration. */
        public duration?: (number|null);

        /** EphemeralSetting timestamp. */
        public timestamp?: (number|Long|null);

        /** EphemeralSetting _duration. */
        public _duration?: "duration";

        /** EphemeralSetting _timestamp. */
        public _timestamp?: "timestamp";

        /**
         * Creates a new EphemeralSetting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EphemeralSetting instance
         */
        public static create(properties?: Ephemeral.IEphemeralSetting): Ephemeral.EphemeralSetting;

        /**
         * Encodes the specified EphemeralSetting message. Does not implicitly {@link Ephemeral.EphemeralSetting.verify|verify} messages.
         * @param message EphemeralSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Ephemeral.IEphemeralSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EphemeralSetting message, length delimited. Does not implicitly {@link Ephemeral.EphemeralSetting.verify|verify} messages.
         * @param message EphemeralSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Ephemeral.IEphemeralSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EphemeralSetting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EphemeralSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ephemeral.EphemeralSetting;

        /**
         * Decodes an EphemeralSetting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EphemeralSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ephemeral.EphemeralSetting;

        /**
         * Verifies an EphemeralSetting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EphemeralSetting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EphemeralSetting
         */
        public static fromObject(object: { [k: string]: any }): Ephemeral.EphemeralSetting;

        /**
         * Creates a plain object from an EphemeralSetting message. Also converts values to other types if specified.
         * @param message EphemeralSetting
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Ephemeral.EphemeralSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EphemeralSetting to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EphemeralSetting
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
