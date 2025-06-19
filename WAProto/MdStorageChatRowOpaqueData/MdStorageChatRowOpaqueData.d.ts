import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace MdStorageChatRowOpaqueData. */
export namespace MdStorageChatRowOpaqueData {

    /** Properties of a ChatRowOpaqueData. */
    interface IChatRowOpaqueData {

        /** ChatRowOpaqueData draftMessage */
        draftMessage?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage|null);
    }

    /** Represents a ChatRowOpaqueData. */
    class ChatRowOpaqueData implements IChatRowOpaqueData {

        /**
         * Constructs a new ChatRowOpaqueData.
         * @param [properties] Properties to set
         */
        constructor(properties?: MdStorageChatRowOpaqueData.IChatRowOpaqueData);

        /** ChatRowOpaqueData draftMessage. */
        public draftMessage?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage|null);

        /** ChatRowOpaqueData _draftMessage. */
        public _draftMessage?: "draftMessage";

        /**
         * Creates a new ChatRowOpaqueData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatRowOpaqueData instance
         */
        public static create(properties?: MdStorageChatRowOpaqueData.IChatRowOpaqueData): MdStorageChatRowOpaqueData.ChatRowOpaqueData;

        /**
         * Encodes the specified ChatRowOpaqueData message. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.verify|verify} messages.
         * @param message ChatRowOpaqueData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MdStorageChatRowOpaqueData.IChatRowOpaqueData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatRowOpaqueData message, length delimited. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.verify|verify} messages.
         * @param message ChatRowOpaqueData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MdStorageChatRowOpaqueData.IChatRowOpaqueData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatRowOpaqueData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatRowOpaqueData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MdStorageChatRowOpaqueData.ChatRowOpaqueData;

        /**
         * Decodes a ChatRowOpaqueData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatRowOpaqueData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MdStorageChatRowOpaqueData.ChatRowOpaqueData;

        /**
         * Verifies a ChatRowOpaqueData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatRowOpaqueData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatRowOpaqueData
         */
        public static fromObject(object: { [k: string]: any }): MdStorageChatRowOpaqueData.ChatRowOpaqueData;

        /**
         * Creates a plain object from a ChatRowOpaqueData message. Also converts values to other types if specified.
         * @param message ChatRowOpaqueData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatRowOpaqueData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChatRowOpaqueData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ChatRowOpaqueData {

        /** Properties of a DraftMessage. */
        interface IDraftMessage {

            /** DraftMessage text */
            text?: (string|null);

            /** DraftMessage omittedUrl */
            omittedUrl?: (string|null);

            /** DraftMessage ctwaContextLinkData */
            ctwaContextLinkData?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData|null);

            /** DraftMessage ctwaContext */
            ctwaContext?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData|null);

            /** DraftMessage timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a DraftMessage. */
        class DraftMessage implements IDraftMessage {

            /**
             * Constructs a new DraftMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: MdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage);

            /** DraftMessage text. */
            public text?: (string|null);

            /** DraftMessage omittedUrl. */
            public omittedUrl?: (string|null);

            /** DraftMessage ctwaContextLinkData. */
            public ctwaContextLinkData?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData|null);

            /** DraftMessage ctwaContext. */
            public ctwaContext?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData|null);

            /** DraftMessage timestamp. */
            public timestamp?: (number|Long|null);

            /** DraftMessage _text. */
            public _text?: "text";

            /** DraftMessage _omittedUrl. */
            public _omittedUrl?: "omittedUrl";

            /** DraftMessage _ctwaContextLinkData. */
            public _ctwaContextLinkData?: "ctwaContextLinkData";

            /** DraftMessage _ctwaContext. */
            public _ctwaContext?: "ctwaContext";

            /** DraftMessage _timestamp. */
            public _timestamp?: "timestamp";

            /**
             * Creates a new DraftMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DraftMessage instance
             */
            public static create(properties?: MdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage;

            /**
             * Encodes the specified DraftMessage message. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.verify|verify} messages.
             * @param message DraftMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DraftMessage message, length delimited. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.verify|verify} messages.
             * @param message DraftMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DraftMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DraftMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage;

            /**
             * Decodes a DraftMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DraftMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage;

            /**
             * Verifies a DraftMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DraftMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DraftMessage
             */
            public static fromObject(object: { [k: string]: any }): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage;

            /**
             * Creates a plain object from a DraftMessage message. Also converts values to other types if specified.
             * @param message DraftMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DraftMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DraftMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DraftMessage {

            /** Properties of a CtwaContextData. */
            interface ICtwaContextData {

                /** CtwaContextData conversionSource */
                conversionSource?: (string|null);

                /** CtwaContextData conversionData */
                conversionData?: (Uint8Array|null);

                /** CtwaContextData sourceUrl */
                sourceUrl?: (string|null);

                /** CtwaContextData sourceId */
                sourceId?: (string|null);

                /** CtwaContextData sourceType */
                sourceType?: (string|null);

                /** CtwaContextData title */
                title?: (string|null);

                /** CtwaContextData description */
                description?: (string|null);

                /** CtwaContextData thumbnail */
                thumbnail?: (string|null);

                /** CtwaContextData thumbnailUrl */
                thumbnailUrl?: (string|null);

                /** CtwaContextData mediaType */
                mediaType?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType|null);

                /** CtwaContextData mediaUrl */
                mediaUrl?: (string|null);

                /** CtwaContextData isSuspiciousLink */
                isSuspiciousLink?: (boolean|null);
            }

            /** Represents a CtwaContextData. */
            class CtwaContextData implements ICtwaContextData {

                /**
                 * Constructs a new CtwaContextData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData);

                /** CtwaContextData conversionSource. */
                public conversionSource?: (string|null);

                /** CtwaContextData conversionData. */
                public conversionData?: (Uint8Array|null);

                /** CtwaContextData sourceUrl. */
                public sourceUrl?: (string|null);

                /** CtwaContextData sourceId. */
                public sourceId?: (string|null);

                /** CtwaContextData sourceType. */
                public sourceType?: (string|null);

                /** CtwaContextData title. */
                public title?: (string|null);

                /** CtwaContextData description. */
                public description?: (string|null);

                /** CtwaContextData thumbnail. */
                public thumbnail?: (string|null);

                /** CtwaContextData thumbnailUrl. */
                public thumbnailUrl?: (string|null);

                /** CtwaContextData mediaType. */
                public mediaType?: (MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType|null);

                /** CtwaContextData mediaUrl. */
                public mediaUrl?: (string|null);

                /** CtwaContextData isSuspiciousLink. */
                public isSuspiciousLink?: (boolean|null);

                /** CtwaContextData _conversionSource. */
                public _conversionSource?: "conversionSource";

                /** CtwaContextData _conversionData. */
                public _conversionData?: "conversionData";

                /** CtwaContextData _sourceUrl. */
                public _sourceUrl?: "sourceUrl";

                /** CtwaContextData _sourceId. */
                public _sourceId?: "sourceId";

                /** CtwaContextData _sourceType. */
                public _sourceType?: "sourceType";

                /** CtwaContextData _title. */
                public _title?: "title";

                /** CtwaContextData _description. */
                public _description?: "description";

                /** CtwaContextData _thumbnail. */
                public _thumbnail?: "thumbnail";

                /** CtwaContextData _thumbnailUrl. */
                public _thumbnailUrl?: "thumbnailUrl";

                /** CtwaContextData _mediaType. */
                public _mediaType?: "mediaType";

                /** CtwaContextData _mediaUrl. */
                public _mediaUrl?: "mediaUrl";

                /** CtwaContextData _isSuspiciousLink. */
                public _isSuspiciousLink?: "isSuspiciousLink";

                /**
                 * Creates a new CtwaContextData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CtwaContextData instance
                 */
                public static create(properties?: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData;

                /**
                 * Encodes the specified CtwaContextData message. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.verify|verify} messages.
                 * @param message CtwaContextData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CtwaContextData message, length delimited. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.verify|verify} messages.
                 * @param message CtwaContextData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CtwaContextData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CtwaContextData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData;

                /**
                 * Decodes a CtwaContextData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CtwaContextData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData;

                /**
                 * Verifies a CtwaContextData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CtwaContextData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CtwaContextData
                 */
                public static fromObject(object: { [k: string]: any }): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData;

                /**
                 * Creates a plain object from a CtwaContextData message. Also converts values to other types if specified.
                 * @param message CtwaContextData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CtwaContextData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CtwaContextData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace CtwaContextData {

                /** ContextInfoExternalAdReplyInfoMediaType enum. */
                enum ContextInfoExternalAdReplyInfoMediaType {
                    NONE = 0,
                    IMAGE = 1,
                    VIDEO = 2
                }
            }

            /** Properties of a CtwaContextLinkData. */
            interface ICtwaContextLinkData {

                /** CtwaContextLinkData context */
                context?: (string|null);

                /** CtwaContextLinkData sourceUrl */
                sourceUrl?: (string|null);

                /** CtwaContextLinkData icebreaker */
                icebreaker?: (string|null);

                /** CtwaContextLinkData phone */
                phone?: (string|null);
            }

            /** Represents a CtwaContextLinkData. */
            class CtwaContextLinkData implements ICtwaContextLinkData {

                /**
                 * Constructs a new CtwaContextLinkData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData);

                /** CtwaContextLinkData context. */
                public context?: (string|null);

                /** CtwaContextLinkData sourceUrl. */
                public sourceUrl?: (string|null);

                /** CtwaContextLinkData icebreaker. */
                public icebreaker?: (string|null);

                /** CtwaContextLinkData phone. */
                public phone?: (string|null);

                /** CtwaContextLinkData _context. */
                public _context?: "context";

                /** CtwaContextLinkData _sourceUrl. */
                public _sourceUrl?: "sourceUrl";

                /** CtwaContextLinkData _icebreaker. */
                public _icebreaker?: "icebreaker";

                /** CtwaContextLinkData _phone. */
                public _phone?: "phone";

                /**
                 * Creates a new CtwaContextLinkData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CtwaContextLinkData instance
                 */
                public static create(properties?: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData;

                /**
                 * Encodes the specified CtwaContextLinkData message. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.verify|verify} messages.
                 * @param message CtwaContextLinkData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CtwaContextLinkData message, length delimited. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.verify|verify} messages.
                 * @param message CtwaContextLinkData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CtwaContextLinkData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CtwaContextLinkData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData;

                /**
                 * Decodes a CtwaContextLinkData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CtwaContextLinkData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData;

                /**
                 * Verifies a CtwaContextLinkData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CtwaContextLinkData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CtwaContextLinkData
                 */
                public static fromObject(object: { [k: string]: any }): MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData;

                /**
                 * Creates a plain object from a CtwaContextLinkData message. Also converts values to other types if specified.
                 * @param message CtwaContextLinkData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CtwaContextLinkData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CtwaContextLinkData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
