import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace StatusAttributions. */
export namespace StatusAttributions {
/** Properties of a StatusAttribution. */
interface IStatusAttribution {
/** StatusAttribution type */
type?: (StatusAttributions.StatusAttribution.Type|null);
/** StatusAttribution actionUrl */
actionUrl?: (string|null);
/** StatusAttribution statusReshare */
statusReshare?: (StatusAttributions.StatusAttribution.IStatusReshare|null);
/** StatusAttribution externalShare */
externalShare?: (StatusAttributions.StatusAttribution.IExternalShare|null);
/** StatusAttribution music */
music?: (StatusAttributions.StatusAttribution.IMusic|null);
/** StatusAttribution groupStatus */
groupStatus?: (StatusAttributions.StatusAttribution.IGroupStatus|null);
}
/** Represents a StatusAttribution. */
class StatusAttribution implements IStatusAttribution {
/**
* Constructs a new StatusAttribution.
* @param [properties] Properties to set
*/
constructor(properties?: StatusAttributions.IStatusAttribution);
/** StatusAttribution type. */
public type?: (StatusAttributions.StatusAttribution.Type|null);
/** StatusAttribution actionUrl. */
public actionUrl?: (string|null);
/** StatusAttribution statusReshare. */
public statusReshare?: (StatusAttributions.StatusAttribution.IStatusReshare|null);
/** StatusAttribution externalShare. */
public externalShare?: (StatusAttributions.StatusAttribution.IExternalShare|null);
/** StatusAttribution music. */
public music?: (StatusAttributions.StatusAttribution.IMusic|null);
/** StatusAttribution groupStatus. */
public groupStatus?: (StatusAttributions.StatusAttribution.IGroupStatus|null);
/** StatusAttribution _type. */
public _type?: "type";
/** StatusAttribution _actionUrl. */
public _actionUrl?: "actionUrl";
/** StatusAttribution attributionData. */
public attributionData?: ("statusReshare"|"externalShare"|"music"|"groupStatus");
/**
* Creates a new StatusAttribution instance using the specified properties.
* @param [properties] Properties to set
* @returns StatusAttribution instance
*/
public static create(properties?: StatusAttributions.IStatusAttribution): StatusAttributions.StatusAttribution;
/**
* Encodes the specified StatusAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.verify|verify} messages.
* @param message StatusAttribution message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: StatusAttributions.IStatusAttribution, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified StatusAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.verify|verify} messages.
* @param message StatusAttribution message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: StatusAttributions.IStatusAttribution, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a StatusAttribution message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns StatusAttribution
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution;
/**
* Decodes a StatusAttribution message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns StatusAttribution
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution;
/**
* Verifies a StatusAttribution message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a StatusAttribution message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns StatusAttribution
*/
public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution;
/**
* Creates a plain object from a StatusAttribution message. Also converts values to other types if specified.
* @param message StatusAttribution
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: StatusAttributions.StatusAttribution, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this StatusAttribution to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for StatusAttribution
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace StatusAttribution {
/** Properties of an ExternalShare. */
interface IExternalShare {
/** ExternalShare actionUrl */
actionUrl?: (string|null);
/** ExternalShare source */
source?: (StatusAttributions.StatusAttribution.ExternalShare.Source|null);
/** ExternalShare duration */
duration?: (number|null);
/** ExternalShare actionFallbackUrl */
actionFallbackUrl?: (string|null);
}
/** Represents an ExternalShare. */
class ExternalShare implements IExternalShare {
/**
* Constructs a new ExternalShare.
* @param [properties] Properties to set
*/
constructor(properties?: StatusAttributions.StatusAttribution.IExternalShare);
/** ExternalShare actionUrl. */
public actionUrl?: (string|null);
/** ExternalShare source. */
public source?: (StatusAttributions.StatusAttribution.ExternalShare.Source|null);
/** ExternalShare duration. */
public duration?: (number|null);
/** ExternalShare actionFallbackUrl. */
public actionFallbackUrl?: (string|null);
/** ExternalShare _actionUrl. */
public _actionUrl?: "actionUrl";
/** ExternalShare _source. */
public _source?: "source";
/** ExternalShare _duration. */
public _duration?: "duration";
/** ExternalShare _actionFallbackUrl. */
public _actionFallbackUrl?: "actionFallbackUrl";
/**
* Creates a new ExternalShare instance using the specified properties.
* @param [properties] Properties to set
* @returns ExternalShare instance
*/
public static create(properties?: StatusAttributions.StatusAttribution.IExternalShare): StatusAttributions.StatusAttribution.ExternalShare;
/**
* Encodes the specified ExternalShare message. Does not implicitly {@link StatusAttributions.StatusAttribution.ExternalShare.verify|verify} messages.
* @param message ExternalShare message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: StatusAttributions.StatusAttribution.IExternalShare, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified ExternalShare message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.ExternalShare.verify|verify} messages.
* @param message ExternalShare message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: StatusAttributions.StatusAttribution.IExternalShare, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes an ExternalShare message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns ExternalShare
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.ExternalShare;
/**
* Decodes an ExternalShare message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns ExternalShare
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.ExternalShare;
/**
* Verifies an ExternalShare message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates an ExternalShare message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns ExternalShare
*/
public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.ExternalShare;
/**
* Creates a plain object from an ExternalShare message. Also converts values to other types if specified.
* @param message ExternalShare
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: StatusAttributions.StatusAttribution.ExternalShare, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this ExternalShare to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for ExternalShare
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace ExternalShare {
/** Source enum. */
enum Source {
UNKNOWN = 0,
INSTAGRAM = 1,
FACEBOOK = 2,
MESSENGER = 3,
SPOTIFY = 4,
YOUTUBE = 5,
PINTEREST = 6
}
}
/** Properties of a GroupStatus. */
interface IGroupStatus {
/** GroupStatus authorJid */
authorJid?: (string|null);
}
/** Represents a GroupStatus. */
class GroupStatus implements IGroupStatus {
/**
* Constructs a new GroupStatus.
* @param [properties] Properties to set
*/
constructor(properties?: StatusAttributions.StatusAttribution.IGroupStatus);
/** GroupStatus authorJid. */
public authorJid?: (string|null);
/** GroupStatus _authorJid. */
public _authorJid?: "authorJid";
/**
* Creates a new GroupStatus instance using the specified properties.
* @param [properties] Properties to set
* @returns GroupStatus instance
*/
public static create(properties?: StatusAttributions.StatusAttribution.IGroupStatus): StatusAttributions.StatusAttribution.GroupStatus;
/**
* Encodes the specified GroupStatus message. Does not implicitly {@link StatusAttributions.StatusAttribution.GroupStatus.verify|verify} messages.
* @param message GroupStatus message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: StatusAttributions.StatusAttribution.IGroupStatus, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified GroupStatus message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.GroupStatus.verify|verify} messages.
* @param message GroupStatus message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: StatusAttributions.StatusAttribution.IGroupStatus, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a GroupStatus message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns GroupStatus
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.GroupStatus;
/**
* Decodes a GroupStatus message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns GroupStatus
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.GroupStatus;
/**
* Verifies a GroupStatus message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a GroupStatus message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns GroupStatus
*/
public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.GroupStatus;
/**
* Creates a plain object from a GroupStatus message. Also converts values to other types if specified.
* @param message GroupStatus
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: StatusAttributions.StatusAttribution.GroupStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this GroupStatus to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for GroupStatus
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a Music. */
interface IMusic {
/** Music authorName */
authorName?: (string|null);
/** Music songId */
songId?: (string|null);
/** Music title */
title?: (string|null);
/** Music author */
author?: (string|null);
/** Music artistAttribution */
artistAttribution?: (string|null);
/** Music isExplicit */
isExplicit?: (boolean|null);
}
/** Represents a Music. */
class Music implements IMusic {
/**
* Constructs a new Music.
* @param [properties] Properties to set
*/
constructor(properties?: StatusAttributions.StatusAttribution.IMusic);
/** Music authorName. */
public authorName?: (string|null);
/** Music songId. */
public songId?: (string|null);
/** Music title. */
public title?: (string|null);
/** Music author. */
public author?: (string|null);
/** Music artistAttribution. */
public artistAttribution?: (string|null);
/** Music isExplicit. */
public isExplicit?: (boolean|null);
/** Music _authorName. */
public _authorName?: "authorName";
/** Music _songId. */
public _songId?: "songId";
/** Music _title. */
public _title?: "title";
/** Music _author. */
public _author?: "author";
/** Music _artistAttribution. */
public _artistAttribution?: "artistAttribution";
/** Music _isExplicit. */
public _isExplicit?: "isExplicit";
/**
* Creates a new Music instance using the specified properties.
* @param [properties] Properties to set
* @returns Music instance
*/
public static create(properties?: StatusAttributions.StatusAttribution.IMusic): StatusAttributions.StatusAttribution.Music;
/**
* Encodes the specified Music message. Does not implicitly {@link StatusAttributions.StatusAttribution.Music.verify|verify} messages.
* @param message Music message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: StatusAttributions.StatusAttribution.IMusic, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified Music message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.Music.verify|verify} messages.
* @param message Music message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: StatusAttributions.StatusAttribution.IMusic, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a Music message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns Music
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.Music;
/**
* Decodes a Music message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns Music
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.Music;
/**
* Verifies a Music message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a Music message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns Music
*/
public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.Music;
/**
* Creates a plain object from a Music message. Also converts values to other types if specified.
* @param message Music
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: StatusAttributions.StatusAttribution.Music, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this Music to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for Music
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a StatusReshare. */
interface IStatusReshare {
/** StatusReshare source */
source?: (StatusAttributions.StatusAttribution.StatusReshare.Source|null);
/** StatusReshare metadata */
metadata?: (StatusAttributions.StatusAttribution.StatusReshare.IMetadata|null);
}
/** Represents a StatusReshare. */
class StatusReshare implements IStatusReshare {
/**
* Constructs a new StatusReshare.
* @param [properties] Properties to set
*/
constructor(properties?: StatusAttributions.StatusAttribution.IStatusReshare);
/** StatusReshare source. */
public source?: (StatusAttributions.StatusAttribution.StatusReshare.Source|null);
/** StatusReshare metadata. */
public metadata?: (StatusAttributions.StatusAttribution.StatusReshare.IMetadata|null);
/** StatusReshare _source. */
public _source?: "source";
/** StatusReshare _metadata. */
public _metadata?: "metadata";
/**
* Creates a new StatusReshare instance using the specified properties.
* @param [properties] Properties to set
* @returns StatusReshare instance
*/
public static create(properties?: StatusAttributions.StatusAttribution.IStatusReshare): StatusAttributions.StatusAttribution.StatusReshare;
/**
* Encodes the specified StatusReshare message. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.verify|verify} messages.
* @param message StatusReshare message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: StatusAttributions.StatusAttribution.IStatusReshare, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified StatusReshare message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.verify|verify} messages.
* @param message StatusReshare message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: StatusAttributions.StatusAttribution.IStatusReshare, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a StatusReshare message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns StatusReshare
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.StatusReshare;
/**
* Decodes a StatusReshare message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns StatusReshare
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.StatusReshare;
/**
* Verifies a StatusReshare message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a StatusReshare message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns StatusReshare
*/
public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.StatusReshare;
/**
* Creates a plain object from a StatusReshare message. Also converts values to other types if specified.
* @param message StatusReshare
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: StatusAttributions.StatusAttribution.StatusReshare, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this StatusReshare to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for StatusReshare
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace StatusReshare {
/** Properties of a Metadata. */
interface IMetadata {
/** Metadata duration */
duration?: (number|null);
/** Metadata channelJid */
channelJid?: (string|null);
/** Metadata channelMessageId */
channelMessageId?: (number|null);
/** Metadata hasMultipleReshares */
hasMultipleReshares?: (boolean|null);
}
/** Represents a Metadata. */
class Metadata implements IMetadata {
/**
* Constructs a new Metadata.
* @param [properties] Properties to set
*/
constructor(properties?: StatusAttributions.StatusAttribution.StatusReshare.IMetadata);
/** Metadata duration. */
public duration?: (number|null);
/** Metadata channelJid. */
public channelJid?: (string|null);
/** Metadata channelMessageId. */
public channelMessageId?: (number|null);
/** Metadata hasMultipleReshares. */
public hasMultipleReshares?: (boolean|null);
/** Metadata _duration. */
public _duration?: "duration";
/** Metadata _channelJid. */
public _channelJid?: "channelJid";
/** Metadata _channelMessageId. */
public _channelMessageId?: "channelMessageId";
/** Metadata _hasMultipleReshares. */
public _hasMultipleReshares?: "hasMultipleReshares";
/**
* Creates a new Metadata instance using the specified properties.
* @param [properties] Properties to set
* @returns Metadata instance
*/
public static create(properties?: StatusAttributions.StatusAttribution.StatusReshare.IMetadata): StatusAttributions.StatusAttribution.StatusReshare.Metadata;
/**
* Encodes the specified Metadata message. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.Metadata.verify|verify} messages.
* @param message Metadata message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: StatusAttributions.StatusAttribution.StatusReshare.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified Metadata message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.Metadata.verify|verify} messages.
* @param message Metadata message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: StatusAttributions.StatusAttribution.StatusReshare.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a Metadata message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns Metadata
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.StatusReshare.Metadata;
/**
* Decodes a Metadata message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns Metadata
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.StatusReshare.Metadata;
/**
* Verifies a Metadata message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a Metadata message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns Metadata
*/
public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.StatusReshare.Metadata;
/**
* Creates a plain object from a Metadata message. Also converts values to other types if specified.
* @param message Metadata
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: StatusAttributions.StatusAttribution.StatusReshare.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this Metadata to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for Metadata
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Source enum. */
enum Source {
UNKNOWN = 0,
INTERNAL_RESHARE = 1,
MENTION_RESHARE = 2,
CHANNEL_RESHARE = 3
}
}
/** Type enum. */
enum Type {
RESHARE = 0,
EXTERNAL_SHARE = 1,
MUSIC = 2,
STATUS_MENTION = 3,
GROUP_STATUS = 4
}
}
}
