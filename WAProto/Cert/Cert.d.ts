import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace Cert. */
export namespace Cert {

    /** Properties of a CertChain. */
    interface ICertChain {

        /** CertChain leaf */
        leaf?: (Cert.CertChain.INoiseCertificate|null);

        /** CertChain intermediate */
        intermediate?: (Cert.CertChain.INoiseCertificate|null);
    }

    /** Represents a CertChain. */
    class CertChain implements ICertChain {

        /**
         * Constructs a new CertChain.
         * @param [properties] Properties to set
         */
        constructor(properties?: Cert.ICertChain);

        /** CertChain leaf. */
        public leaf?: (Cert.CertChain.INoiseCertificate|null);

        /** CertChain intermediate. */
        public intermediate?: (Cert.CertChain.INoiseCertificate|null);

        /** CertChain _leaf. */
        public _leaf?: "leaf";

        /** CertChain _intermediate. */
        public _intermediate?: "intermediate";

        /**
         * Creates a new CertChain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CertChain instance
         */
        public static create(properties?: Cert.ICertChain): Cert.CertChain;

        /**
         * Encodes the specified CertChain message. Does not implicitly {@link Cert.CertChain.verify|verify} messages.
         * @param message CertChain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Cert.ICertChain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CertChain message, length delimited. Does not implicitly {@link Cert.CertChain.verify|verify} messages.
         * @param message CertChain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Cert.ICertChain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CertChain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CertChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Cert.CertChain;

        /**
         * Decodes a CertChain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CertChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Cert.CertChain;

        /**
         * Verifies a CertChain message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CertChain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CertChain
         */
        public static fromObject(object: { [k: string]: any }): Cert.CertChain;

        /**
         * Creates a plain object from a CertChain message. Also converts values to other types if specified.
         * @param message CertChain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Cert.CertChain, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CertChain to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CertChain
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CertChain {

        /** Properties of a NoiseCertificate. */
        interface INoiseCertificate {

            /** NoiseCertificate details */
            details?: (Uint8Array|null);

            /** NoiseCertificate signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a NoiseCertificate. */
        class NoiseCertificate implements INoiseCertificate {

            /**
             * Constructs a new NoiseCertificate.
             * @param [properties] Properties to set
             */
            constructor(properties?: Cert.CertChain.INoiseCertificate);

            /** NoiseCertificate details. */
            public details?: (Uint8Array|null);

            /** NoiseCertificate signature. */
            public signature?: (Uint8Array|null);

            /** NoiseCertificate _details. */
            public _details?: "details";

            /** NoiseCertificate _signature. */
            public _signature?: "signature";

            /**
             * Creates a new NoiseCertificate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NoiseCertificate instance
             */
            public static create(properties?: Cert.CertChain.INoiseCertificate): Cert.CertChain.NoiseCertificate;

            /**
             * Encodes the specified NoiseCertificate message. Does not implicitly {@link Cert.CertChain.NoiseCertificate.verify|verify} messages.
             * @param message NoiseCertificate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Cert.CertChain.INoiseCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NoiseCertificate message, length delimited. Does not implicitly {@link Cert.CertChain.NoiseCertificate.verify|verify} messages.
             * @param message NoiseCertificate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Cert.CertChain.INoiseCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NoiseCertificate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NoiseCertificate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Cert.CertChain.NoiseCertificate;

            /**
             * Decodes a NoiseCertificate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NoiseCertificate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Cert.CertChain.NoiseCertificate;

            /**
             * Verifies a NoiseCertificate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NoiseCertificate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NoiseCertificate
             */
            public static fromObject(object: { [k: string]: any }): Cert.CertChain.NoiseCertificate;

            /**
             * Creates a plain object from a NoiseCertificate message. Also converts values to other types if specified.
             * @param message NoiseCertificate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Cert.CertChain.NoiseCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NoiseCertificate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NoiseCertificate
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace NoiseCertificate {

            /** Properties of a Details. */
            interface IDetails {

                /** Details serial */
                serial?: (number|null);

                /** Details issuerSerial */
                issuerSerial?: (number|null);

                /** Details key */
                key?: (Uint8Array|null);

                /** Details notBefore */
                notBefore?: (number|Long|null);

                /** Details notAfter */
                notAfter?: (number|Long|null);
            }

            /** Represents a Details. */
            class Details implements IDetails {

                /**
                 * Constructs a new Details.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Cert.CertChain.NoiseCertificate.IDetails);

                /** Details serial. */
                public serial?: (number|null);

                /** Details issuerSerial. */
                public issuerSerial?: (number|null);

                /** Details key. */
                public key?: (Uint8Array|null);

                /** Details notBefore. */
                public notBefore?: (number|Long|null);

                /** Details notAfter. */
                public notAfter?: (number|Long|null);

                /** Details _serial. */
                public _serial?: "serial";

                /** Details _issuerSerial. */
                public _issuerSerial?: "issuerSerial";

                /** Details _key. */
                public _key?: "key";

                /** Details _notBefore. */
                public _notBefore?: "notBefore";

                /** Details _notAfter. */
                public _notAfter?: "notAfter";

                /**
                 * Creates a new Details instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Details instance
                 */
                public static create(properties?: Cert.CertChain.NoiseCertificate.IDetails): Cert.CertChain.NoiseCertificate.Details;

                /**
                 * Encodes the specified Details message. Does not implicitly {@link Cert.CertChain.NoiseCertificate.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Cert.CertChain.NoiseCertificate.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Details message, length delimited. Does not implicitly {@link Cert.CertChain.NoiseCertificate.Details.verify|verify} messages.
                 * @param message Details message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Cert.CertChain.NoiseCertificate.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Details message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Cert.CertChain.NoiseCertificate.Details;

                /**
                 * Decodes a Details message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Cert.CertChain.NoiseCertificate.Details;

                /**
                 * Verifies a Details message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Details message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Details
                 */
                public static fromObject(object: { [k: string]: any }): Cert.CertChain.NoiseCertificate.Details;

                /**
                 * Creates a plain object from a Details message. Also converts values to other types if specified.
                 * @param message Details
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Cert.CertChain.NoiseCertificate.Details, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Details to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Details
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Properties of a NoiseCertificate. */
    interface INoiseCertificate {

        /** NoiseCertificate details */
        details?: (Uint8Array|null);

        /** NoiseCertificate signature */
        signature?: (Uint8Array|null);
    }

    /** Represents a NoiseCertificate. */
    class NoiseCertificate implements INoiseCertificate {

        /**
         * Constructs a new NoiseCertificate.
         * @param [properties] Properties to set
         */
        constructor(properties?: Cert.INoiseCertificate);

        /** NoiseCertificate details. */
        public details?: (Uint8Array|null);

        /** NoiseCertificate signature. */
        public signature?: (Uint8Array|null);

        /** NoiseCertificate _details. */
        public _details?: "details";

        /** NoiseCertificate _signature. */
        public _signature?: "signature";

        /**
         * Creates a new NoiseCertificate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NoiseCertificate instance
         */
        public static create(properties?: Cert.INoiseCertificate): Cert.NoiseCertificate;

        /**
         * Encodes the specified NoiseCertificate message. Does not implicitly {@link Cert.NoiseCertificate.verify|verify} messages.
         * @param message NoiseCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Cert.INoiseCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NoiseCertificate message, length delimited. Does not implicitly {@link Cert.NoiseCertificate.verify|verify} messages.
         * @param message NoiseCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Cert.INoiseCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NoiseCertificate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NoiseCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Cert.NoiseCertificate;

        /**
         * Decodes a NoiseCertificate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NoiseCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Cert.NoiseCertificate;

        /**
         * Verifies a NoiseCertificate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NoiseCertificate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NoiseCertificate
         */
        public static fromObject(object: { [k: string]: any }): Cert.NoiseCertificate;

        /**
         * Creates a plain object from a NoiseCertificate message. Also converts values to other types if specified.
         * @param message NoiseCertificate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Cert.NoiseCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NoiseCertificate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NoiseCertificate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace NoiseCertificate {

        /** Properties of a Details. */
        interface IDetails {

            /** Details serial */
            serial?: (number|null);

            /** Details issuer */
            issuer?: (string|null);

            /** Details expires */
            expires?: (number|Long|null);

            /** Details subject */
            subject?: (string|null);

            /** Details key */
            key?: (Uint8Array|null);
        }

        /** Represents a Details. */
        class Details implements IDetails {

            /**
             * Constructs a new Details.
             * @param [properties] Properties to set
             */
            constructor(properties?: Cert.NoiseCertificate.IDetails);

            /** Details serial. */
            public serial?: (number|null);

            /** Details issuer. */
            public issuer?: (string|null);

            /** Details expires. */
            public expires?: (number|Long|null);

            /** Details subject. */
            public subject?: (string|null);

            /** Details key. */
            public key?: (Uint8Array|null);

            /** Details _serial. */
            public _serial?: "serial";

            /** Details _issuer. */
            public _issuer?: "issuer";

            /** Details _expires. */
            public _expires?: "expires";

            /** Details _subject. */
            public _subject?: "subject";

            /** Details _key. */
            public _key?: "key";

            /**
             * Creates a new Details instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Details instance
             */
            public static create(properties?: Cert.NoiseCertificate.IDetails): Cert.NoiseCertificate.Details;

            /**
             * Encodes the specified Details message. Does not implicitly {@link Cert.NoiseCertificate.Details.verify|verify} messages.
             * @param message Details message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Cert.NoiseCertificate.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Details message, length delimited. Does not implicitly {@link Cert.NoiseCertificate.Details.verify|verify} messages.
             * @param message Details message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Cert.NoiseCertificate.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Details message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Details
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Cert.NoiseCertificate.Details;

            /**
             * Decodes a Details message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Details
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Cert.NoiseCertificate.Details;

            /**
             * Verifies a Details message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Details message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Details
             */
            public static fromObject(object: { [k: string]: any }): Cert.NoiseCertificate.Details;

            /**
             * Creates a plain object from a Details message. Also converts values to other types if specified.
             * @param message Details
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Cert.NoiseCertificate.Details, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Details to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Details
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
