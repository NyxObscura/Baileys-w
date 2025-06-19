import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace LidMigrationSyncPayload. */
export namespace LidMigrationSyncPayload {

    /** Properties of a LIDMigrationMappingSyncPayload. */
    interface ILIDMigrationMappingSyncPayload {

        /** LIDMigrationMappingSyncPayload pnToLidMappings */
        pnToLidMappings?: (LidMigrationSyncPayload.ILIDMigrationMapping[]|null);

        /** LIDMigrationMappingSyncPayload chatDbMigrationTimestamp */
        chatDbMigrationTimestamp?: (number|Long|null);
    }

    /** Represents a LIDMigrationMappingSyncPayload. */
    class LIDMigrationMappingSyncPayload implements ILIDMigrationMappingSyncPayload {

        /**
         * Constructs a new LIDMigrationMappingSyncPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: LidMigrationSyncPayload.ILIDMigrationMappingSyncPayload);

        /** LIDMigrationMappingSyncPayload pnToLidMappings. */
        public pnToLidMappings: LidMigrationSyncPayload.ILIDMigrationMapping[];

        /** LIDMigrationMappingSyncPayload chatDbMigrationTimestamp. */
        public chatDbMigrationTimestamp?: (number|Long|null);

        /**
         * Creates a new LIDMigrationMappingSyncPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LIDMigrationMappingSyncPayload instance
         */
        public static create(properties?: LidMigrationSyncPayload.ILIDMigrationMappingSyncPayload): LidMigrationSyncPayload.LIDMigrationMappingSyncPayload;

        /**
         * Encodes the specified LIDMigrationMappingSyncPayload message. Does not implicitly {@link LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.verify|verify} messages.
         * @param message LIDMigrationMappingSyncPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LidMigrationSyncPayload.ILIDMigrationMappingSyncPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LIDMigrationMappingSyncPayload message, length delimited. Does not implicitly {@link LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.verify|verify} messages.
         * @param message LIDMigrationMappingSyncPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LidMigrationSyncPayload.ILIDMigrationMappingSyncPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LIDMigrationMappingSyncPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LIDMigrationMappingSyncPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LidMigrationSyncPayload.LIDMigrationMappingSyncPayload;

        /**
         * Decodes a LIDMigrationMappingSyncPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LIDMigrationMappingSyncPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LidMigrationSyncPayload.LIDMigrationMappingSyncPayload;

        /**
         * Verifies a LIDMigrationMappingSyncPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LIDMigrationMappingSyncPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LIDMigrationMappingSyncPayload
         */
        public static fromObject(object: { [k: string]: any }): LidMigrationSyncPayload.LIDMigrationMappingSyncPayload;

        /**
         * Creates a plain object from a LIDMigrationMappingSyncPayload message. Also converts values to other types if specified.
         * @param message LIDMigrationMappingSyncPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LidMigrationSyncPayload.LIDMigrationMappingSyncPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LIDMigrationMappingSyncPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LIDMigrationMappingSyncPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LIDMigrationMapping. */
    interface ILIDMigrationMapping {

        /** LIDMigrationMapping pn */
        pn: (number|Long);

        /** LIDMigrationMapping assignedLid */
        assignedLid: (number|Long);

        /** LIDMigrationMapping latestLid */
        latestLid?: (number|Long|null);
    }

    /** Represents a LIDMigrationMapping. */
    class LIDMigrationMapping implements ILIDMigrationMapping {

        /**
         * Constructs a new LIDMigrationMapping.
         * @param [properties] Properties to set
         */
        constructor(properties?: LidMigrationSyncPayload.ILIDMigrationMapping);

        /** LIDMigrationMapping pn. */
        public pn: (number|Long);

        /** LIDMigrationMapping assignedLid. */
        public assignedLid: (number|Long);

        /** LIDMigrationMapping latestLid. */
        public latestLid?: (number|Long|null);

        /**
         * Creates a new LIDMigrationMapping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LIDMigrationMapping instance
         */
        public static create(properties?: LidMigrationSyncPayload.ILIDMigrationMapping): LidMigrationSyncPayload.LIDMigrationMapping;

        /**
         * Encodes the specified LIDMigrationMapping message. Does not implicitly {@link LidMigrationSyncPayload.LIDMigrationMapping.verify|verify} messages.
         * @param message LIDMigrationMapping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LidMigrationSyncPayload.ILIDMigrationMapping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LIDMigrationMapping message, length delimited. Does not implicitly {@link LidMigrationSyncPayload.LIDMigrationMapping.verify|verify} messages.
         * @param message LIDMigrationMapping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LidMigrationSyncPayload.ILIDMigrationMapping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LIDMigrationMapping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LIDMigrationMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LidMigrationSyncPayload.LIDMigrationMapping;

        /**
         * Decodes a LIDMigrationMapping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LIDMigrationMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LidMigrationSyncPayload.LIDMigrationMapping;

        /**
         * Verifies a LIDMigrationMapping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LIDMigrationMapping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LIDMigrationMapping
         */
        public static fromObject(object: { [k: string]: any }): LidMigrationSyncPayload.LIDMigrationMapping;

        /**
         * Creates a plain object from a LIDMigrationMapping message. Also converts values to other types if specified.
         * @param message LIDMigrationMapping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LidMigrationSyncPayload.LIDMigrationMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LIDMigrationMapping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LIDMigrationMapping
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
