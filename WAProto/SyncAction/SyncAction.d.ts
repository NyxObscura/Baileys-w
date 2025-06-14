import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace SyncAction. */
export namespace SyncAction {
/** Properties of a PatchDebugData. */
interface IPatchDebugData {
/** PatchDebugData currentLthash */
currentLthash?: (Uint8Array|null);
/** PatchDebugData newLthash */
newLthash?: (Uint8Array|null);
/** PatchDebugData patchVersion */
patchVersion?: (Uint8Array|null);
/** PatchDebugData collectionName */
collectionName?: (Uint8Array|null);
/** PatchDebugData firstFourBytesFromAHashOfSnapshotMacKey */
firstFourBytesFromAHashOfSnapshotMacKey?: (Uint8Array|null);
/** PatchDebugData newLthashSubtract */
newLthashSubtract?: (Uint8Array|null);
/** PatchDebugData numberAdd */
numberAdd?: (number|null);
/** PatchDebugData numberRemove */
numberRemove?: (number|null);
/** PatchDebugData numberOverride */
numberOverride?: (number|null);
/** PatchDebugData senderPlatform */
senderPlatform?: (SyncAction.PatchDebugData.Platform|null);
/** PatchDebugData isSenderPrimary */
isSenderPrimary?: (boolean|null);
}
/** Represents a PatchDebugData. */
class PatchDebugData implements IPatchDebugData {
/**
* Constructs a new PatchDebugData.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.IPatchDebugData);
/** PatchDebugData currentLthash. */
public currentLthash?: (Uint8Array|null);
/** PatchDebugData newLthash. */
public newLthash?: (Uint8Array|null);
/** PatchDebugData patchVersion. */
public patchVersion?: (Uint8Array|null);
/** PatchDebugData collectionName. */
public collectionName?: (Uint8Array|null);
/** PatchDebugData firstFourBytesFromAHashOfSnapshotMacKey. */
public firstFourBytesFromAHashOfSnapshotMacKey?: (Uint8Array|null);
/** PatchDebugData newLthashSubtract. */
public newLthashSubtract?: (Uint8Array|null);
/** PatchDebugData numberAdd. */
public numberAdd?: (number|null);
/** PatchDebugData numberRemove. */
public numberRemove?: (number|null);
/** PatchDebugData numberOverride. */
public numberOverride?: (number|null);
/** PatchDebugData senderPlatform. */
public senderPlatform?: (SyncAction.PatchDebugData.Platform|null);
/** PatchDebugData isSenderPrimary. */
public isSenderPrimary?: (boolean|null);
/** PatchDebugData _currentLthash. */
public _currentLthash?: "currentLthash";
/** PatchDebugData _newLthash. */
public _newLthash?: "newLthash";
/** PatchDebugData _patchVersion. */
public _patchVersion?: "patchVersion";
/** PatchDebugData _collectionName. */
public _collectionName?: "collectionName";
/** PatchDebugData _firstFourBytesFromAHashOfSnapshotMacKey. */
public _firstFourBytesFromAHashOfSnapshotMacKey?: "firstFourBytesFromAHashOfSnapshotMacKey";
/** PatchDebugData _newLthashSubtract. */
public _newLthashSubtract?: "newLthashSubtract";
/** PatchDebugData _numberAdd. */
public _numberAdd?: "numberAdd";
/** PatchDebugData _numberRemove. */
public _numberRemove?: "numberRemove";
/** PatchDebugData _numberOverride. */
public _numberOverride?: "numberOverride";
/** PatchDebugData _senderPlatform. */
public _senderPlatform?: "senderPlatform";
/** PatchDebugData _isSenderPrimary. */
public _isSenderPrimary?: "isSenderPrimary";
/**
* Creates a new PatchDebugData instance using the specified properties.
* @param [properties] Properties to set
* @returns PatchDebugData instance
*/
public static create(properties?: SyncAction.IPatchDebugData): SyncAction.PatchDebugData;
/**
* Encodes the specified PatchDebugData message. Does not implicitly {@link SyncAction.PatchDebugData.verify|verify} messages.
* @param message PatchDebugData message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.IPatchDebugData, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified PatchDebugData message, length delimited. Does not implicitly {@link SyncAction.PatchDebugData.verify|verify} messages.
* @param message PatchDebugData message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.IPatchDebugData, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a PatchDebugData message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns PatchDebugData
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.PatchDebugData;
/**
* Decodes a PatchDebugData message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns PatchDebugData
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.PatchDebugData;
/**
* Verifies a PatchDebugData message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a PatchDebugData message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns PatchDebugData
*/
public static fromObject(object: { [k: string]: any }): SyncAction.PatchDebugData;
/**
* Creates a plain object from a PatchDebugData message. Also converts values to other types if specified.
* @param message PatchDebugData
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.PatchDebugData, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this PatchDebugData to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for PatchDebugData
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace PatchDebugData {
/** Platform enum. */
enum Platform {
ANDROID = 0,
SMBA = 1,
IPHONE = 2,
SMBI = 3,
WEB = 4,
UWP = 5,
DARWIN = 6,
IPAD = 7,
WEAROS = 8
}
}
/** Properties of a SyncActionData. */
interface ISyncActionData {
/** SyncActionData index */
index?: (Uint8Array|null);
/** SyncActionData value */
value?: (SyncAction.ISyncActionValue|null);
/** SyncActionData padding */
padding?: (Uint8Array|null);
/** SyncActionData version */
version?: (number|null);
}
/** Represents a SyncActionData. */
class SyncActionData implements ISyncActionData {
/**
* Constructs a new SyncActionData.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.ISyncActionData);
/** SyncActionData index. */
public index?: (Uint8Array|null);
/** SyncActionData value. */
public value?: (SyncAction.ISyncActionValue|null);
/** SyncActionData padding. */
public padding?: (Uint8Array|null);
/** SyncActionData version. */
public version?: (number|null);
/** SyncActionData _index. */
public _index?: "index";
/** SyncActionData _value. */
public _value?: "value";
/** SyncActionData _padding. */
public _padding?: "padding";
/** SyncActionData _version. */
public _version?: "version";
/**
* Creates a new SyncActionData instance using the specified properties.
* @param [properties] Properties to set
* @returns SyncActionData instance
*/
public static create(properties?: SyncAction.ISyncActionData): SyncAction.SyncActionData;
/**
* Encodes the specified SyncActionData message. Does not implicitly {@link SyncAction.SyncActionData.verify|verify} messages.
* @param message SyncActionData message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.ISyncActionData, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified SyncActionData message, length delimited. Does not implicitly {@link SyncAction.SyncActionData.verify|verify} messages.
* @param message SyncActionData message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.ISyncActionData, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a SyncActionData message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns SyncActionData
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionData;
/**
* Decodes a SyncActionData message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns SyncActionData
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionData;
/**
* Verifies a SyncActionData message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a SyncActionData message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns SyncActionData
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionData;
/**
* Creates a plain object from a SyncActionData message. Also converts values to other types if specified.
* @param message SyncActionData
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionData, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this SyncActionData to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for SyncActionData
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a SyncActionValue. */
interface ISyncActionValue {
/** SyncActionValue timestamp */
timestamp?: (number|Long|null);
/** SyncActionValue starAction */
starAction?: (SyncAction.SyncActionValue.IStarAction|null);
/** SyncActionValue contactAction */
contactAction?: (SyncAction.SyncActionValue.IContactAction|null);
/** SyncActionValue muteAction */
muteAction?: (SyncAction.SyncActionValue.IMuteAction|null);
/** SyncActionValue pinAction */
pinAction?: (SyncAction.SyncActionValue.IPinAction|null);
/** SyncActionValue securityNotificationSetting */
securityNotificationSetting?: (SyncAction.SyncActionValue.ISecurityNotificationSetting|null);
/** SyncActionValue pushNameSetting */
pushNameSetting?: (SyncAction.SyncActionValue.IPushNameSetting|null);
/** SyncActionValue quickReplyAction */
quickReplyAction?: (SyncAction.SyncActionValue.IQuickReplyAction|null);
/** SyncActionValue recentEmojiWeightsAction */
recentEmojiWeightsAction?: (SyncAction.SyncActionValue.IRecentEmojiWeightsAction|null);
/** SyncActionValue labelEditAction */
labelEditAction?: (SyncAction.SyncActionValue.ILabelEditAction|null);
/** SyncActionValue labelAssociationAction */
labelAssociationAction?: (SyncAction.SyncActionValue.ILabelAssociationAction|null);
/** SyncActionValue localeSetting */
localeSetting?: (SyncAction.SyncActionValue.ILocaleSetting|null);
/** SyncActionValue archiveChatAction */
archiveChatAction?: (SyncAction.SyncActionValue.IArchiveChatAction|null);
/** SyncActionValue deleteMessageForMeAction */
deleteMessageForMeAction?: (SyncAction.SyncActionValue.IDeleteMessageForMeAction|null);
/** SyncActionValue keyExpiration */
keyExpiration?: (SyncAction.SyncActionValue.IKeyExpiration|null);
/** SyncActionValue markChatAsReadAction */
markChatAsReadAction?: (SyncAction.SyncActionValue.IMarkChatAsReadAction|null);
/** SyncActionValue clearChatAction */
clearChatAction?: (SyncAction.SyncActionValue.IClearChatAction|null);
/** SyncActionValue deleteChatAction */
deleteChatAction?: (SyncAction.SyncActionValue.IDeleteChatAction|null);
/** SyncActionValue unarchiveChatsSetting */
unarchiveChatsSetting?: (SyncAction.SyncActionValue.IUnarchiveChatsSetting|null);
/** SyncActionValue primaryFeature */
primaryFeature?: (SyncAction.SyncActionValue.IPrimaryFeature|null);
/** SyncActionValue androidUnsupportedActions */
androidUnsupportedActions?: (SyncAction.SyncActionValue.IAndroidUnsupportedActions|null);
/** SyncActionValue agentAction */
agentAction?: (SyncAction.SyncActionValue.IAgentAction|null);
/** SyncActionValue subscriptionAction */
subscriptionAction?: (SyncAction.SyncActionValue.ISubscriptionAction|null);
/** SyncActionValue userStatusMuteAction */
userStatusMuteAction?: (SyncAction.SyncActionValue.IUserStatusMuteAction|null);
/** SyncActionValue timeFormatAction */
timeFormatAction?: (SyncAction.SyncActionValue.ITimeFormatAction|null);
/** SyncActionValue nuxAction */
nuxAction?: (SyncAction.SyncActionValue.INuxAction|null);
/** SyncActionValue primaryVersionAction */
primaryVersionAction?: (SyncAction.SyncActionValue.IPrimaryVersionAction|null);
/** SyncActionValue stickerAction */
stickerAction?: (SyncAction.SyncActionValue.IStickerAction|null);
/** SyncActionValue removeRecentStickerAction */
removeRecentStickerAction?: (SyncAction.SyncActionValue.IRemoveRecentStickerAction|null);
/** SyncActionValue chatAssignment */
chatAssignment?: (SyncAction.SyncActionValue.IChatAssignmentAction|null);
/** SyncActionValue chatAssignmentOpenedStatus */
chatAssignmentOpenedStatus?: (SyncAction.SyncActionValue.IChatAssignmentOpenedStatusAction|null);
/** SyncActionValue pnForLidChatAction */
pnForLidChatAction?: (SyncAction.SyncActionValue.IPnForLidChatAction|null);
/** SyncActionValue marketingMessageAction */
marketingMessageAction?: (SyncAction.SyncActionValue.IMarketingMessageAction|null);
/** SyncActionValue marketingMessageBroadcastAction */
marketingMessageBroadcastAction?: (SyncAction.SyncActionValue.IMarketingMessageBroadcastAction|null);
/** SyncActionValue externalWebBetaAction */
externalWebBetaAction?: (SyncAction.SyncActionValue.IExternalWebBetaAction|null);
/** SyncActionValue privacySettingRelayAllCalls */
privacySettingRelayAllCalls?: (SyncAction.SyncActionValue.IPrivacySettingRelayAllCalls|null);
/** SyncActionValue callLogAction */
callLogAction?: (SyncAction.SyncActionValue.ICallLogAction|null);
/** SyncActionValue statusPrivacy */
statusPrivacy?: (SyncAction.SyncActionValue.IStatusPrivacyAction|null);
/** SyncActionValue botWelcomeRequestAction */
botWelcomeRequestAction?: (SyncAction.SyncActionValue.IBotWelcomeRequestAction|null);
/** SyncActionValue deleteIndividualCallLog */
deleteIndividualCallLog?: (SyncAction.SyncActionValue.IDeleteIndividualCallLogAction|null);
/** SyncActionValue labelReorderingAction */
labelReorderingAction?: (SyncAction.SyncActionValue.ILabelReorderingAction|null);
/** SyncActionValue paymentInfoAction */
paymentInfoAction?: (SyncAction.SyncActionValue.IPaymentInfoAction|null);
/** SyncActionValue customPaymentMethodsAction */
customPaymentMethodsAction?: (SyncAction.SyncActionValue.ICustomPaymentMethodsAction|null);
/** SyncActionValue lockChatAction */
lockChatAction?: (SyncAction.SyncActionValue.ILockChatAction|null);
/** SyncActionValue chatLockSettings */
chatLockSettings?: (ChatLockSettings.IChatLockSettings|null);
/** SyncActionValue wamoUserIdentifierAction */
wamoUserIdentifierAction?: (SyncAction.SyncActionValue.IWamoUserIdentifierAction|null);
/** SyncActionValue privacySettingDisableLinkPreviewsAction */
privacySettingDisableLinkPreviewsAction?: (SyncAction.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction|null);
/** SyncActionValue deviceCapabilities */
deviceCapabilities?: (DeviceCapabilities.IDeviceCapabilities|null);
/** SyncActionValue noteEditAction */
noteEditAction?: (SyncAction.SyncActionValue.INoteEditAction|null);
/** SyncActionValue favoritesAction */
favoritesAction?: (SyncAction.SyncActionValue.IFavoritesAction|null);
/** SyncActionValue merchantPaymentPartnerAction */
merchantPaymentPartnerAction?: (SyncAction.SyncActionValue.IMerchantPaymentPartnerAction|null);
/** SyncActionValue waffleAccountLinkStateAction */
waffleAccountLinkStateAction?: (SyncAction.SyncActionValue.IWaffleAccountLinkStateAction|null);
/** SyncActionValue usernameChatStartMode */
usernameChatStartMode?: (SyncAction.SyncActionValue.IUsernameChatStartModeAction|null);
/** SyncActionValue notificationActivitySettingAction */
notificationActivitySettingAction?: (SyncAction.SyncActionValue.INotificationActivitySettingAction|null);
/** SyncActionValue lidContactAction */
lidContactAction?: (SyncAction.SyncActionValue.ILidContactAction|null);
/** SyncActionValue ctwaPerCustomerDataSharingAction */
ctwaPerCustomerDataSharingAction?: (SyncAction.SyncActionValue.ICtwaPerCustomerDataSharingAction|null);
/** SyncActionValue paymentTosAction */
paymentTosAction?: (SyncAction.SyncActionValue.IPaymentTosAction|null);
}
/** Represents a SyncActionValue. */
class SyncActionValue implements ISyncActionValue {
/**
* Constructs a new SyncActionValue.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.ISyncActionValue);
/** SyncActionValue timestamp. */
public timestamp?: (number|Long|null);
/** SyncActionValue starAction. */
public starAction?: (SyncAction.SyncActionValue.IStarAction|null);
/** SyncActionValue contactAction. */
public contactAction?: (SyncAction.SyncActionValue.IContactAction|null);
/** SyncActionValue muteAction. */
public muteAction?: (SyncAction.SyncActionValue.IMuteAction|null);
/** SyncActionValue pinAction. */
public pinAction?: (SyncAction.SyncActionValue.IPinAction|null);
/** SyncActionValue securityNotificationSetting. */
public securityNotificationSetting?: (SyncAction.SyncActionValue.ISecurityNotificationSetting|null);
/** SyncActionValue pushNameSetting. */
public pushNameSetting?: (SyncAction.SyncActionValue.IPushNameSetting|null);
/** SyncActionValue quickReplyAction. */
public quickReplyAction?: (SyncAction.SyncActionValue.IQuickReplyAction|null);
/** SyncActionValue recentEmojiWeightsAction. */
public recentEmojiWeightsAction?: (SyncAction.SyncActionValue.IRecentEmojiWeightsAction|null);
/** SyncActionValue labelEditAction. */
public labelEditAction?: (SyncAction.SyncActionValue.ILabelEditAction|null);
/** SyncActionValue labelAssociationAction. */
public labelAssociationAction?: (SyncAction.SyncActionValue.ILabelAssociationAction|null);
/** SyncActionValue localeSetting. */
public localeSetting?: (SyncAction.SyncActionValue.ILocaleSetting|null);
/** SyncActionValue archiveChatAction. */
public archiveChatAction?: (SyncAction.SyncActionValue.IArchiveChatAction|null);
/** SyncActionValue deleteMessageForMeAction. */
public deleteMessageForMeAction?: (SyncAction.SyncActionValue.IDeleteMessageForMeAction|null);
/** SyncActionValue keyExpiration. */
public keyExpiration?: (SyncAction.SyncActionValue.IKeyExpiration|null);
/** SyncActionValue markChatAsReadAction. */
public markChatAsReadAction?: (SyncAction.SyncActionValue.IMarkChatAsReadAction|null);
/** SyncActionValue clearChatAction. */
public clearChatAction?: (SyncAction.SyncActionValue.IClearChatAction|null);
/** SyncActionValue deleteChatAction. */
public deleteChatAction?: (SyncAction.SyncActionValue.IDeleteChatAction|null);
/** SyncActionValue unarchiveChatsSetting. */
public unarchiveChatsSetting?: (SyncAction.SyncActionValue.IUnarchiveChatsSetting|null);
/** SyncActionValue primaryFeature. */
public primaryFeature?: (SyncAction.SyncActionValue.IPrimaryFeature|null);
/** SyncActionValue androidUnsupportedActions. */
public androidUnsupportedActions?: (SyncAction.SyncActionValue.IAndroidUnsupportedActions|null);
/** SyncActionValue agentAction. */
public agentAction?: (SyncAction.SyncActionValue.IAgentAction|null);
/** SyncActionValue subscriptionAction. */
public subscriptionAction?: (SyncAction.SyncActionValue.ISubscriptionAction|null);
/** SyncActionValue userStatusMuteAction. */
public userStatusMuteAction?: (SyncAction.SyncActionValue.IUserStatusMuteAction|null);
/** SyncActionValue timeFormatAction. */
public timeFormatAction?: (SyncAction.SyncActionValue.ITimeFormatAction|null);
/** SyncActionValue nuxAction. */
public nuxAction?: (SyncAction.SyncActionValue.INuxAction|null);
/** SyncActionValue primaryVersionAction. */
public primaryVersionAction?: (SyncAction.SyncActionValue.IPrimaryVersionAction|null);
/** SyncActionValue stickerAction. */
public stickerAction?: (SyncAction.SyncActionValue.IStickerAction|null);
/** SyncActionValue removeRecentStickerAction. */
public removeRecentStickerAction?: (SyncAction.SyncActionValue.IRemoveRecentStickerAction|null);
/** SyncActionValue chatAssignment. */
public chatAssignment?: (SyncAction.SyncActionValue.IChatAssignmentAction|null);
/** SyncActionValue chatAssignmentOpenedStatus. */
public chatAssignmentOpenedStatus?: (SyncAction.SyncActionValue.IChatAssignmentOpenedStatusAction|null);
/** SyncActionValue pnForLidChatAction. */
public pnForLidChatAction?: (SyncAction.SyncActionValue.IPnForLidChatAction|null);
/** SyncActionValue marketingMessageAction. */
public marketingMessageAction?: (SyncAction.SyncActionValue.IMarketingMessageAction|null);
/** SyncActionValue marketingMessageBroadcastAction. */
public marketingMessageBroadcastAction?: (SyncAction.SyncActionValue.IMarketingMessageBroadcastAction|null);
/** SyncActionValue externalWebBetaAction. */
public externalWebBetaAction?: (SyncAction.SyncActionValue.IExternalWebBetaAction|null);
/** SyncActionValue privacySettingRelayAllCalls. */
public privacySettingRelayAllCalls?: (SyncAction.SyncActionValue.IPrivacySettingRelayAllCalls|null);
/** SyncActionValue callLogAction. */
public callLogAction?: (SyncAction.SyncActionValue.ICallLogAction|null);
/** SyncActionValue statusPrivacy. */
public statusPrivacy?: (SyncAction.SyncActionValue.IStatusPrivacyAction|null);
/** SyncActionValue botWelcomeRequestAction. */
public botWelcomeRequestAction?: (SyncAction.SyncActionValue.IBotWelcomeRequestAction|null);
/** SyncActionValue deleteIndividualCallLog. */
public deleteIndividualCallLog?: (SyncAction.SyncActionValue.IDeleteIndividualCallLogAction|null);
/** SyncActionValue labelReorderingAction. */
public labelReorderingAction?: (SyncAction.SyncActionValue.ILabelReorderingAction|null);
/** SyncActionValue paymentInfoAction. */
public paymentInfoAction?: (SyncAction.SyncActionValue.IPaymentInfoAction|null);
/** SyncActionValue customPaymentMethodsAction. */
public customPaymentMethodsAction?: (SyncAction.SyncActionValue.ICustomPaymentMethodsAction|null);
/** SyncActionValue lockChatAction. */
public lockChatAction?: (SyncAction.SyncActionValue.ILockChatAction|null);
/** SyncActionValue chatLockSettings. */
public chatLockSettings?: (ChatLockSettings.IChatLockSettings|null);
/** SyncActionValue wamoUserIdentifierAction. */
public wamoUserIdentifierAction?: (SyncAction.SyncActionValue.IWamoUserIdentifierAction|null);
/** SyncActionValue privacySettingDisableLinkPreviewsAction. */
public privacySettingDisableLinkPreviewsAction?: (SyncAction.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction|null);
/** SyncActionValue deviceCapabilities. */
public deviceCapabilities?: (DeviceCapabilities.IDeviceCapabilities|null);
/** SyncActionValue noteEditAction. */
public noteEditAction?: (SyncAction.SyncActionValue.INoteEditAction|null);
/** SyncActionValue favoritesAction. */
public favoritesAction?: (SyncAction.SyncActionValue.IFavoritesAction|null);
/** SyncActionValue merchantPaymentPartnerAction. */
public merchantPaymentPartnerAction?: (SyncAction.SyncActionValue.IMerchantPaymentPartnerAction|null);
/** SyncActionValue waffleAccountLinkStateAction. */
public waffleAccountLinkStateAction?: (SyncAction.SyncActionValue.IWaffleAccountLinkStateAction|null);
/** SyncActionValue usernameChatStartMode. */
public usernameChatStartMode?: (SyncAction.SyncActionValue.IUsernameChatStartModeAction|null);
/** SyncActionValue notificationActivitySettingAction. */
public notificationActivitySettingAction?: (SyncAction.SyncActionValue.INotificationActivitySettingAction|null);
/** SyncActionValue lidContactAction. */
public lidContactAction?: (SyncAction.SyncActionValue.ILidContactAction|null);
/** SyncActionValue ctwaPerCustomerDataSharingAction. */
public ctwaPerCustomerDataSharingAction?: (SyncAction.SyncActionValue.ICtwaPerCustomerDataSharingAction|null);
/** SyncActionValue paymentTosAction. */
public paymentTosAction?: (SyncAction.SyncActionValue.IPaymentTosAction|null);
/** SyncActionValue _timestamp. */
public _timestamp?: "timestamp";
/** SyncActionValue _starAction. */
public _starAction?: "starAction";
/** SyncActionValue _contactAction. */
public _contactAction?: "contactAction";
/** SyncActionValue _muteAction. */
public _muteAction?: "muteAction";
/** SyncActionValue _pinAction. */
public _pinAction?: "pinAction";
/** SyncActionValue _securityNotificationSetting. */
public _securityNotificationSetting?: "securityNotificationSetting";
/** SyncActionValue _pushNameSetting. */
public _pushNameSetting?: "pushNameSetting";
/** SyncActionValue _quickReplyAction. */
public _quickReplyAction?: "quickReplyAction";
/** SyncActionValue _recentEmojiWeightsAction. */
public _recentEmojiWeightsAction?: "recentEmojiWeightsAction";
/** SyncActionValue _labelEditAction. */
public _labelEditAction?: "labelEditAction";
/** SyncActionValue _labelAssociationAction. */
public _labelAssociationAction?: "labelAssociationAction";
/** SyncActionValue _localeSetting. */
public _localeSetting?: "localeSetting";
/** SyncActionValue _archiveChatAction. */
public _archiveChatAction?: "archiveChatAction";
/** SyncActionValue _deleteMessageForMeAction. */
public _deleteMessageForMeAction?: "deleteMessageForMeAction";
/** SyncActionValue _keyExpiration. */
public _keyExpiration?: "keyExpiration";
/** SyncActionValue _markChatAsReadAction. */
public _markChatAsReadAction?: "markChatAsReadAction";
/** SyncActionValue _clearChatAction. */
public _clearChatAction?: "clearChatAction";
/** SyncActionValue _deleteChatAction. */
public _deleteChatAction?: "deleteChatAction";
/** SyncActionValue _unarchiveChatsSetting. */
public _unarchiveChatsSetting?: "unarchiveChatsSetting";
/** SyncActionValue _primaryFeature. */
public _primaryFeature?: "primaryFeature";
/** SyncActionValue _androidUnsupportedActions. */
public _androidUnsupportedActions?: "androidUnsupportedActions";
/** SyncActionValue _agentAction. */
public _agentAction?: "agentAction";
/** SyncActionValue _subscriptionAction. */
public _subscriptionAction?: "subscriptionAction";
/** SyncActionValue _userStatusMuteAction. */
public _userStatusMuteAction?: "userStatusMuteAction";
/** SyncActionValue _timeFormatAction. */
public _timeFormatAction?: "timeFormatAction";
/** SyncActionValue _nuxAction. */
public _nuxAction?: "nuxAction";
/** SyncActionValue _primaryVersionAction. */
public _primaryVersionAction?: "primaryVersionAction";
/** SyncActionValue _stickerAction. */
public _stickerAction?: "stickerAction";
/** SyncActionValue _removeRecentStickerAction. */
public _removeRecentStickerAction?: "removeRecentStickerAction";
/** SyncActionValue _chatAssignment. */
public _chatAssignment?: "chatAssignment";
/** SyncActionValue _chatAssignmentOpenedStatus. */
public _chatAssignmentOpenedStatus?: "chatAssignmentOpenedStatus";
/** SyncActionValue _pnForLidChatAction. */
public _pnForLidChatAction?: "pnForLidChatAction";
/** SyncActionValue _marketingMessageAction. */
public _marketingMessageAction?: "marketingMessageAction";
/** SyncActionValue _marketingMessageBroadcastAction. */
public _marketingMessageBroadcastAction?: "marketingMessageBroadcastAction";
/** SyncActionValue _externalWebBetaAction. */
public _externalWebBetaAction?: "externalWebBetaAction";
/** SyncActionValue _privacySettingRelayAllCalls. */
public _privacySettingRelayAllCalls?: "privacySettingRelayAllCalls";
/** SyncActionValue _callLogAction. */
public _callLogAction?: "callLogAction";
/** SyncActionValue _statusPrivacy. */
public _statusPrivacy?: "statusPrivacy";
/** SyncActionValue _botWelcomeRequestAction. */
public _botWelcomeRequestAction?: "botWelcomeRequestAction";
/** SyncActionValue _deleteIndividualCallLog. */
public _deleteIndividualCallLog?: "deleteIndividualCallLog";
/** SyncActionValue _labelReorderingAction. */
public _labelReorderingAction?: "labelReorderingAction";
/** SyncActionValue _paymentInfoAction. */
public _paymentInfoAction?: "paymentInfoAction";
/** SyncActionValue _customPaymentMethodsAction. */
public _customPaymentMethodsAction?: "customPaymentMethodsAction";
/** SyncActionValue _lockChatAction. */
public _lockChatAction?: "lockChatAction";
/** SyncActionValue _chatLockSettings. */
public _chatLockSettings?: "chatLockSettings";
/** SyncActionValue _wamoUserIdentifierAction. */
public _wamoUserIdentifierAction?: "wamoUserIdentifierAction";
/** SyncActionValue _privacySettingDisableLinkPreviewsAction. */
public _privacySettingDisableLinkPreviewsAction?: "privacySettingDisableLinkPreviewsAction";
/** SyncActionValue _deviceCapabilities. */
public _deviceCapabilities?: "deviceCapabilities";
/** SyncActionValue _noteEditAction. */
public _noteEditAction?: "noteEditAction";
/** SyncActionValue _favoritesAction. */
public _favoritesAction?: "favoritesAction";
/** SyncActionValue _merchantPaymentPartnerAction. */
public _merchantPaymentPartnerAction?: "merchantPaymentPartnerAction";
/** SyncActionValue _waffleAccountLinkStateAction. */
public _waffleAccountLinkStateAction?: "waffleAccountLinkStateAction";
/** SyncActionValue _usernameChatStartMode. */
public _usernameChatStartMode?: "usernameChatStartMode";
/** SyncActionValue _notificationActivitySettingAction. */
public _notificationActivitySettingAction?: "notificationActivitySettingAction";
/** SyncActionValue _lidContactAction. */
public _lidContactAction?: "lidContactAction";
/** SyncActionValue _ctwaPerCustomerDataSharingAction. */
public _ctwaPerCustomerDataSharingAction?: "ctwaPerCustomerDataSharingAction";
/** SyncActionValue _paymentTosAction. */
public _paymentTosAction?: "paymentTosAction";
/**
* Creates a new SyncActionValue instance using the specified properties.
* @param [properties] Properties to set
* @returns SyncActionValue instance
*/
public static create(properties?: SyncAction.ISyncActionValue): SyncAction.SyncActionValue;
/**
* Encodes the specified SyncActionValue message. Does not implicitly {@link SyncAction.SyncActionValue.verify|verify} messages.
* @param message SyncActionValue message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.ISyncActionValue, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified SyncActionValue message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.verify|verify} messages.
* @param message SyncActionValue message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.ISyncActionValue, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a SyncActionValue message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns SyncActionValue
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue;
/**
* Decodes a SyncActionValue message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns SyncActionValue
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue;
/**
* Verifies a SyncActionValue message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a SyncActionValue message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns SyncActionValue
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue;
/**
* Creates a plain object from a SyncActionValue message. Also converts values to other types if specified.
* @param message SyncActionValue
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this SyncActionValue to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for SyncActionValue
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace SyncActionValue {
/** Properties of an AgentAction. */
interface IAgentAction {
/** AgentAction name */
name?: (string|null);
/** AgentAction deviceID */
deviceID?: (number|null);
/** AgentAction isDeleted */
isDeleted?: (boolean|null);
}
/** Represents an AgentAction. */
class AgentAction implements IAgentAction {
/**
* Constructs a new AgentAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IAgentAction);
/** AgentAction name. */
public name?: (string|null);
/** AgentAction deviceID. */
public deviceID?: (number|null);
/** AgentAction isDeleted. */
public isDeleted?: (boolean|null);
/** AgentAction _name. */
public _name?: "name";
/** AgentAction _deviceID. */
public _deviceID?: "deviceID";
/** AgentAction _isDeleted. */
public _isDeleted?: "isDeleted";
/**
* Creates a new AgentAction instance using the specified properties.
* @param [properties] Properties to set
* @returns AgentAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IAgentAction): SyncAction.SyncActionValue.AgentAction;
/**
* Encodes the specified AgentAction message. Does not implicitly {@link SyncAction.SyncActionValue.AgentAction.verify|verify} messages.
* @param message AgentAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IAgentAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified AgentAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.AgentAction.verify|verify} messages.
* @param message AgentAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IAgentAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes an AgentAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns AgentAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.AgentAction;
/**
* Decodes an AgentAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns AgentAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.AgentAction;
/**
* Verifies an AgentAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates an AgentAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns AgentAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.AgentAction;
/**
* Creates a plain object from an AgentAction message. Also converts values to other types if specified.
* @param message AgentAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.AgentAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this AgentAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for AgentAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of an AndroidUnsupportedActions. */
interface IAndroidUnsupportedActions {
/** AndroidUnsupportedActions allowed */
allowed?: (boolean|null);
}
/** Represents an AndroidUnsupportedActions. */
class AndroidUnsupportedActions implements IAndroidUnsupportedActions {
/**
* Constructs a new AndroidUnsupportedActions.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IAndroidUnsupportedActions);
/** AndroidUnsupportedActions allowed. */
public allowed?: (boolean|null);
/** AndroidUnsupportedActions _allowed. */
public _allowed?: "allowed";
/**
* Creates a new AndroidUnsupportedActions instance using the specified properties.
* @param [properties] Properties to set
* @returns AndroidUnsupportedActions instance
*/
public static create(properties?: SyncAction.SyncActionValue.IAndroidUnsupportedActions): SyncAction.SyncActionValue.AndroidUnsupportedActions;
/**
* Encodes the specified AndroidUnsupportedActions message. Does not implicitly {@link SyncAction.SyncActionValue.AndroidUnsupportedActions.verify|verify} messages.
* @param message AndroidUnsupportedActions message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IAndroidUnsupportedActions, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified AndroidUnsupportedActions message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.AndroidUnsupportedActions.verify|verify} messages.
* @param message AndroidUnsupportedActions message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IAndroidUnsupportedActions, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes an AndroidUnsupportedActions message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns AndroidUnsupportedActions
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.AndroidUnsupportedActions;
/**
* Decodes an AndroidUnsupportedActions message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns AndroidUnsupportedActions
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.AndroidUnsupportedActions;
/**
* Verifies an AndroidUnsupportedActions message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates an AndroidUnsupportedActions message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns AndroidUnsupportedActions
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.AndroidUnsupportedActions;
/**
* Creates a plain object from an AndroidUnsupportedActions message. Also converts values to other types if specified.
* @param message AndroidUnsupportedActions
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.AndroidUnsupportedActions, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this AndroidUnsupportedActions to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for AndroidUnsupportedActions
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of an ArchiveChatAction. */
interface IArchiveChatAction {
/** ArchiveChatAction archived */
archived?: (boolean|null);
/** ArchiveChatAction messageRange */
messageRange?: (SyncAction.SyncActionValue.ISyncActionMessageRange|null);
}
/** Represents an ArchiveChatAction. */
class ArchiveChatAction implements IArchiveChatAction {
/**
* Constructs a new ArchiveChatAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IArchiveChatAction);
/** ArchiveChatAction archived. */
public archived?: (boolean|null);
/** ArchiveChatAction messageRange. */
public messageRange?: (SyncAction.SyncActionValue.ISyncActionMessageRange|null);
/** ArchiveChatAction _archived. */
public _archived?: "archived";
/** ArchiveChatAction _messageRange. */
public _messageRange?: "messageRange";
/**
* Creates a new ArchiveChatAction instance using the specified properties.
* @param [properties] Properties to set
* @returns ArchiveChatAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IArchiveChatAction): SyncAction.SyncActionValue.ArchiveChatAction;
/**
* Encodes the specified ArchiveChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.ArchiveChatAction.verify|verify} messages.
* @param message ArchiveChatAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IArchiveChatAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified ArchiveChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ArchiveChatAction.verify|verify} messages.
* @param message ArchiveChatAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IArchiveChatAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes an ArchiveChatAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns ArchiveChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.ArchiveChatAction;
/**
* Decodes an ArchiveChatAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns ArchiveChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.ArchiveChatAction;
/**
* Verifies an ArchiveChatAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates an ArchiveChatAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns ArchiveChatAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.ArchiveChatAction;
/**
* Creates a plain object from an ArchiveChatAction message. Also converts values to other types if specified.
* @param message ArchiveChatAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.ArchiveChatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this ArchiveChatAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for ArchiveChatAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a BotWelcomeRequestAction. */
interface IBotWelcomeRequestAction {
/** BotWelcomeRequestAction isSent */
isSent?: (boolean|null);
}
/** Represents a BotWelcomeRequestAction. */
class BotWelcomeRequestAction implements IBotWelcomeRequestAction {
/**
* Constructs a new BotWelcomeRequestAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IBotWelcomeRequestAction);
/** BotWelcomeRequestAction isSent. */
public isSent?: (boolean|null);
/** BotWelcomeRequestAction _isSent. */
public _isSent?: "isSent";
/**
* Creates a new BotWelcomeRequestAction instance using the specified properties.
* @param [properties] Properties to set
* @returns BotWelcomeRequestAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IBotWelcomeRequestAction): SyncAction.SyncActionValue.BotWelcomeRequestAction;
/**
* Encodes the specified BotWelcomeRequestAction message. Does not implicitly {@link SyncAction.SyncActionValue.BotWelcomeRequestAction.verify|verify} messages.
* @param message BotWelcomeRequestAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IBotWelcomeRequestAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified BotWelcomeRequestAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.BotWelcomeRequestAction.verify|verify} messages.
* @param message BotWelcomeRequestAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IBotWelcomeRequestAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a BotWelcomeRequestAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns BotWelcomeRequestAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.BotWelcomeRequestAction;
/**
* Decodes a BotWelcomeRequestAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns BotWelcomeRequestAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.BotWelcomeRequestAction;
/**
* Verifies a BotWelcomeRequestAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a BotWelcomeRequestAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns BotWelcomeRequestAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.BotWelcomeRequestAction;
/**
* Creates a plain object from a BotWelcomeRequestAction message. Also converts values to other types if specified.
* @param message BotWelcomeRequestAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.BotWelcomeRequestAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this BotWelcomeRequestAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for BotWelcomeRequestAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a CallLogAction. */
interface ICallLogAction {
/** CallLogAction callLogRecord */
callLogRecord?: (SyncAction.ICallLogRecord|null);
}
/** Represents a CallLogAction. */
class CallLogAction implements ICallLogAction {
/**
* Constructs a new CallLogAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ICallLogAction);
/** CallLogAction callLogRecord. */
public callLogRecord?: (SyncAction.ICallLogRecord|null);
/** CallLogAction _callLogRecord. */
public _callLogRecord?: "callLogRecord";
/**
* Creates a new CallLogAction instance using the specified properties.
* @param [properties] Properties to set
* @returns CallLogAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.ICallLogAction): SyncAction.SyncActionValue.CallLogAction;
/**
* Encodes the specified CallLogAction message. Does not implicitly {@link SyncAction.SyncActionValue.CallLogAction.verify|verify} messages.
* @param message CallLogAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ICallLogAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified CallLogAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CallLogAction.verify|verify} messages.
* @param message CallLogAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ICallLogAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a CallLogAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns CallLogAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.CallLogAction;
/**
* Decodes a CallLogAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns CallLogAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.CallLogAction;
/**
* Verifies a CallLogAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a CallLogAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns CallLogAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.CallLogAction;
/**
* Creates a plain object from a CallLogAction message. Also converts values to other types if specified.
* @param message CallLogAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.CallLogAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this CallLogAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for CallLogAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a ChatAssignmentAction. */
interface IChatAssignmentAction {
/** ChatAssignmentAction deviceAgentID */
deviceAgentID?: (string|null);
}
/** Represents a ChatAssignmentAction. */
class ChatAssignmentAction implements IChatAssignmentAction {
/**
* Constructs a new ChatAssignmentAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IChatAssignmentAction);
/** ChatAssignmentAction deviceAgentID. */
public deviceAgentID?: (string|null);
/** ChatAssignmentAction _deviceAgentID. */
public _deviceAgentID?: "deviceAgentID";
/**
* Creates a new ChatAssignmentAction instance using the specified properties.
* @param [properties] Properties to set
* @returns ChatAssignmentAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IChatAssignmentAction): SyncAction.SyncActionValue.ChatAssignmentAction;
/**
* Encodes the specified ChatAssignmentAction message. Does not implicitly {@link SyncAction.SyncActionValue.ChatAssignmentAction.verify|verify} messages.
* @param message ChatAssignmentAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IChatAssignmentAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified ChatAssignmentAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ChatAssignmentAction.verify|verify} messages.
* @param message ChatAssignmentAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IChatAssignmentAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a ChatAssignmentAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns ChatAssignmentAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.ChatAssignmentAction;
/**
* Decodes a ChatAssignmentAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns ChatAssignmentAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.ChatAssignmentAction;
/**
* Verifies a ChatAssignmentAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a ChatAssignmentAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns ChatAssignmentAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.ChatAssignmentAction;
/**
* Creates a plain object from a ChatAssignmentAction message. Also converts values to other types if specified.
* @param message ChatAssignmentAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.ChatAssignmentAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this ChatAssignmentAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for ChatAssignmentAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a ChatAssignmentOpenedStatusAction. */
interface IChatAssignmentOpenedStatusAction {
/** ChatAssignmentOpenedStatusAction chatOpened */
chatOpened?: (boolean|null);
}
/** Represents a ChatAssignmentOpenedStatusAction. */
class ChatAssignmentOpenedStatusAction implements IChatAssignmentOpenedStatusAction {
/**
* Constructs a new ChatAssignmentOpenedStatusAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IChatAssignmentOpenedStatusAction);
/** ChatAssignmentOpenedStatusAction chatOpened. */
public chatOpened?: (boolean|null);
/** ChatAssignmentOpenedStatusAction _chatOpened. */
public _chatOpened?: "chatOpened";
/**
* Creates a new ChatAssignmentOpenedStatusAction instance using the specified properties.
* @param [properties] Properties to set
* @returns ChatAssignmentOpenedStatusAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IChatAssignmentOpenedStatusAction): SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction;
/**
* Encodes the specified ChatAssignmentOpenedStatusAction message. Does not implicitly {@link SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.verify|verify} messages.
* @param message ChatAssignmentOpenedStatusAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IChatAssignmentOpenedStatusAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified ChatAssignmentOpenedStatusAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction.verify|verify} messages.
* @param message ChatAssignmentOpenedStatusAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IChatAssignmentOpenedStatusAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a ChatAssignmentOpenedStatusAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns ChatAssignmentOpenedStatusAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction;
/**
* Decodes a ChatAssignmentOpenedStatusAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns ChatAssignmentOpenedStatusAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction;
/**
* Verifies a ChatAssignmentOpenedStatusAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a ChatAssignmentOpenedStatusAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns ChatAssignmentOpenedStatusAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction;
/**
* Creates a plain object from a ChatAssignmentOpenedStatusAction message. Also converts values to other types if specified.
* @param message ChatAssignmentOpenedStatusAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.ChatAssignmentOpenedStatusAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this ChatAssignmentOpenedStatusAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for ChatAssignmentOpenedStatusAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a ClearChatAction. */
interface IClearChatAction {
/** ClearChatAction messageRange */
messageRange?: (SyncAction.SyncActionValue.ISyncActionMessageRange|null);
}
/** Represents a ClearChatAction. */
class ClearChatAction implements IClearChatAction {
/**
* Constructs a new ClearChatAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IClearChatAction);
/** ClearChatAction messageRange. */
public messageRange?: (SyncAction.SyncActionValue.ISyncActionMessageRange|null);
/** ClearChatAction _messageRange. */
public _messageRange?: "messageRange";
/**
* Creates a new ClearChatAction instance using the specified properties.
* @param [properties] Properties to set
* @returns ClearChatAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IClearChatAction): SyncAction.SyncActionValue.ClearChatAction;
/**
* Encodes the specified ClearChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.ClearChatAction.verify|verify} messages.
* @param message ClearChatAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IClearChatAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified ClearChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ClearChatAction.verify|verify} messages.
* @param message ClearChatAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IClearChatAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a ClearChatAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns ClearChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.ClearChatAction;
/**
* Decodes a ClearChatAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns ClearChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.ClearChatAction;
/**
* Verifies a ClearChatAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a ClearChatAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns ClearChatAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.ClearChatAction;
/**
* Creates a plain object from a ClearChatAction message. Also converts values to other types if specified.
* @param message ClearChatAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.ClearChatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this ClearChatAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for ClearChatAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a ContactAction. */
interface IContactAction {
/** ContactAction fullName */
fullName?: (string|null);
/** ContactAction firstName */
firstName?: (string|null);
/** ContactAction lidJid */
lidJid?: (string|null);
/** ContactAction saveOnPrimaryAddressbook */
saveOnPrimaryAddressbook?: (boolean|null);
/** ContactAction pnJid */
pnJid?: (string|null);
/** ContactAction username */
username?: (string|null);
}
/** Represents a ContactAction. */
class ContactAction implements IContactAction {
/**
* Constructs a new ContactAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IContactAction);
/** ContactAction fullName. */
public fullName?: (string|null);
/** ContactAction firstName. */
public firstName?: (string|null);
/** ContactAction lidJid. */
public lidJid?: (string|null);
/** ContactAction saveOnPrimaryAddressbook. */
public saveOnPrimaryAddressbook?: (boolean|null);
/** ContactAction pnJid. */
public pnJid?: (string|null);
/** ContactAction username. */
public username?: (string|null);
/** ContactAction _fullName. */
public _fullName?: "fullName";
/** ContactAction _firstName. */
public _firstName?: "firstName";
/** ContactAction _lidJid. */
public _lidJid?: "lidJid";
/** ContactAction _saveOnPrimaryAddressbook. */
public _saveOnPrimaryAddressbook?: "saveOnPrimaryAddressbook";
/** ContactAction _pnJid. */
public _pnJid?: "pnJid";
/** ContactAction _username. */
public _username?: "username";
/**
* Creates a new ContactAction instance using the specified properties.
* @param [properties] Properties to set
* @returns ContactAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IContactAction): SyncAction.SyncActionValue.ContactAction;
/**
* Encodes the specified ContactAction message. Does not implicitly {@link SyncAction.SyncActionValue.ContactAction.verify|verify} messages.
* @param message ContactAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IContactAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified ContactAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ContactAction.verify|verify} messages.
* @param message ContactAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IContactAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a ContactAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns ContactAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.ContactAction;
/**
* Decodes a ContactAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns ContactAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.ContactAction;
/**
* Verifies a ContactAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a ContactAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns ContactAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.ContactAction;
/**
* Creates a plain object from a ContactAction message. Also converts values to other types if specified.
* @param message ContactAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.ContactAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this ContactAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for ContactAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a CtwaPerCustomerDataSharingAction. */
interface ICtwaPerCustomerDataSharingAction {
/** CtwaPerCustomerDataSharingAction isCtwaPerCustomerDataSharingEnabled */
isCtwaPerCustomerDataSharingEnabled?: (boolean|null);
}
/** Represents a CtwaPerCustomerDataSharingAction. */
class CtwaPerCustomerDataSharingAction implements ICtwaPerCustomerDataSharingAction {
/**
* Constructs a new CtwaPerCustomerDataSharingAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ICtwaPerCustomerDataSharingAction);
/** CtwaPerCustomerDataSharingAction isCtwaPerCustomerDataSharingEnabled. */
public isCtwaPerCustomerDataSharingEnabled?: (boolean|null);
/** CtwaPerCustomerDataSharingAction _isCtwaPerCustomerDataSharingEnabled. */
public _isCtwaPerCustomerDataSharingEnabled?: "isCtwaPerCustomerDataSharingEnabled";
/**
* Creates a new CtwaPerCustomerDataSharingAction instance using the specified properties.
* @param [properties] Properties to set
* @returns CtwaPerCustomerDataSharingAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.ICtwaPerCustomerDataSharingAction): SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction;
/**
* Encodes the specified CtwaPerCustomerDataSharingAction message. Does not implicitly {@link SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.verify|verify} messages.
* @param message CtwaPerCustomerDataSharingAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ICtwaPerCustomerDataSharingAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified CtwaPerCustomerDataSharingAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction.verify|verify} messages.
* @param message CtwaPerCustomerDataSharingAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ICtwaPerCustomerDataSharingAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a CtwaPerCustomerDataSharingAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns CtwaPerCustomerDataSharingAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction;
/**
* Decodes a CtwaPerCustomerDataSharingAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns CtwaPerCustomerDataSharingAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction;
/**
* Verifies a CtwaPerCustomerDataSharingAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a CtwaPerCustomerDataSharingAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns CtwaPerCustomerDataSharingAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction;
/**
* Creates a plain object from a CtwaPerCustomerDataSharingAction message. Also converts values to other types if specified.
* @param message CtwaPerCustomerDataSharingAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.CtwaPerCustomerDataSharingAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this CtwaPerCustomerDataSharingAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for CtwaPerCustomerDataSharingAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a CustomPaymentMethod. */
interface ICustomPaymentMethod {
/** CustomPaymentMethod credentialId */
credentialId?: (string|null);
/** CustomPaymentMethod country */
country?: (string|null);
/** CustomPaymentMethod type */
type?: (string|null);
/** CustomPaymentMethod metadata */
metadata?: (SyncAction.SyncActionValue.ICustomPaymentMethodMetadata[]|null);
}
/** Represents a CustomPaymentMethod. */
class CustomPaymentMethod implements ICustomPaymentMethod {
/**
* Constructs a new CustomPaymentMethod.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ICustomPaymentMethod);
/** CustomPaymentMethod credentialId. */
public credentialId?: (string|null);
/** CustomPaymentMethod country. */
public country?: (string|null);
/** CustomPaymentMethod type. */
public type?: (string|null);
/** CustomPaymentMethod metadata. */
public metadata: SyncAction.SyncActionValue.ICustomPaymentMethodMetadata[];
/** CustomPaymentMethod _credentialId. */
public _credentialId?: "credentialId";
/** CustomPaymentMethod _country. */
public _country?: "country";
/** CustomPaymentMethod _type. */
public _type?: "type";
/**
* Creates a new CustomPaymentMethod instance using the specified properties.
* @param [properties] Properties to set
* @returns CustomPaymentMethod instance
*/
public static create(properties?: SyncAction.SyncActionValue.ICustomPaymentMethod): SyncAction.SyncActionValue.CustomPaymentMethod;
/**
* Encodes the specified CustomPaymentMethod message. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethod.verify|verify} messages.
* @param message CustomPaymentMethod message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ICustomPaymentMethod, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified CustomPaymentMethod message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethod.verify|verify} messages.
* @param message CustomPaymentMethod message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ICustomPaymentMethod, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a CustomPaymentMethod message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns CustomPaymentMethod
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.CustomPaymentMethod;
/**
* Decodes a CustomPaymentMethod message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns CustomPaymentMethod
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.CustomPaymentMethod;
/**
* Verifies a CustomPaymentMethod message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a CustomPaymentMethod message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns CustomPaymentMethod
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.CustomPaymentMethod;
/**
* Creates a plain object from a CustomPaymentMethod message. Also converts values to other types if specified.
* @param message CustomPaymentMethod
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.CustomPaymentMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this CustomPaymentMethod to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for CustomPaymentMethod
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a CustomPaymentMethodMetadata. */
interface ICustomPaymentMethodMetadata {
/** CustomPaymentMethodMetadata key */
key?: (string|null);
/** CustomPaymentMethodMetadata value */
value?: (string|null);
}
/** Represents a CustomPaymentMethodMetadata. */
class CustomPaymentMethodMetadata implements ICustomPaymentMethodMetadata {
/**
* Constructs a new CustomPaymentMethodMetadata.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ICustomPaymentMethodMetadata);
/** CustomPaymentMethodMetadata key. */
public key?: (string|null);
/** CustomPaymentMethodMetadata value. */
public value?: (string|null);
/** CustomPaymentMethodMetadata _key. */
public _key?: "key";
/** CustomPaymentMethodMetadata _value. */
public _value?: "value";
/**
* Creates a new CustomPaymentMethodMetadata instance using the specified properties.
* @param [properties] Properties to set
* @returns CustomPaymentMethodMetadata instance
*/
public static create(properties?: SyncAction.SyncActionValue.ICustomPaymentMethodMetadata): SyncAction.SyncActionValue.CustomPaymentMethodMetadata;
/**
* Encodes the specified CustomPaymentMethodMetadata message. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethodMetadata.verify|verify} messages.
* @param message CustomPaymentMethodMetadata message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ICustomPaymentMethodMetadata, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified CustomPaymentMethodMetadata message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethodMetadata.verify|verify} messages.
* @param message CustomPaymentMethodMetadata message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ICustomPaymentMethodMetadata, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a CustomPaymentMethodMetadata message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns CustomPaymentMethodMetadata
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.CustomPaymentMethodMetadata;
/**
* Decodes a CustomPaymentMethodMetadata message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns CustomPaymentMethodMetadata
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.CustomPaymentMethodMetadata;
/**
* Verifies a CustomPaymentMethodMetadata message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a CustomPaymentMethodMetadata message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns CustomPaymentMethodMetadata
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.CustomPaymentMethodMetadata;
/**
* Creates a plain object from a CustomPaymentMethodMetadata message. Also converts values to other types if specified.
* @param message CustomPaymentMethodMetadata
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.CustomPaymentMethodMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this CustomPaymentMethodMetadata to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for CustomPaymentMethodMetadata
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a CustomPaymentMethodsAction. */
interface ICustomPaymentMethodsAction {
/** CustomPaymentMethodsAction customPaymentMethods */
customPaymentMethods?: (SyncAction.SyncActionValue.ICustomPaymentMethod[]|null);
}
/** Represents a CustomPaymentMethodsAction. */
class CustomPaymentMethodsAction implements ICustomPaymentMethodsAction {
/**
* Constructs a new CustomPaymentMethodsAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ICustomPaymentMethodsAction);
/** CustomPaymentMethodsAction customPaymentMethods. */
public customPaymentMethods: SyncAction.SyncActionValue.ICustomPaymentMethod[];
/**
* Creates a new CustomPaymentMethodsAction instance using the specified properties.
* @param [properties] Properties to set
* @returns CustomPaymentMethodsAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.ICustomPaymentMethodsAction): SyncAction.SyncActionValue.CustomPaymentMethodsAction;
/**
* Encodes the specified CustomPaymentMethodsAction message. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethodsAction.verify|verify} messages.
* @param message CustomPaymentMethodsAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ICustomPaymentMethodsAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified CustomPaymentMethodsAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.CustomPaymentMethodsAction.verify|verify} messages.
* @param message CustomPaymentMethodsAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ICustomPaymentMethodsAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a CustomPaymentMethodsAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns CustomPaymentMethodsAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.CustomPaymentMethodsAction;
/**
* Decodes a CustomPaymentMethodsAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns CustomPaymentMethodsAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.CustomPaymentMethodsAction;
/**
* Verifies a CustomPaymentMethodsAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a CustomPaymentMethodsAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns CustomPaymentMethodsAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.CustomPaymentMethodsAction;
/**
* Creates a plain object from a CustomPaymentMethodsAction message. Also converts values to other types if specified.
* @param message CustomPaymentMethodsAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.CustomPaymentMethodsAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this CustomPaymentMethodsAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for CustomPaymentMethodsAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a DeleteChatAction. */
interface IDeleteChatAction {
/** DeleteChatAction messageRange */
messageRange?: (SyncAction.SyncActionValue.ISyncActionMessageRange|null);
}
/** Represents a DeleteChatAction. */
class DeleteChatAction implements IDeleteChatAction {
/**
* Constructs a new DeleteChatAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IDeleteChatAction);
/** DeleteChatAction messageRange. */
public messageRange?: (SyncAction.SyncActionValue.ISyncActionMessageRange|null);
/** DeleteChatAction _messageRange. */
public _messageRange?: "messageRange";
/**
* Creates a new DeleteChatAction instance using the specified properties.
* @param [properties] Properties to set
* @returns DeleteChatAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IDeleteChatAction): SyncAction.SyncActionValue.DeleteChatAction;
/**
* Encodes the specified DeleteChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.DeleteChatAction.verify|verify} messages.
* @param message DeleteChatAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IDeleteChatAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified DeleteChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.DeleteChatAction.verify|verify} messages.
* @param message DeleteChatAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IDeleteChatAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a DeleteChatAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns DeleteChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.DeleteChatAction;
/**
* Decodes a DeleteChatAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns DeleteChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.DeleteChatAction;
/**
* Verifies a DeleteChatAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a DeleteChatAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns DeleteChatAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.DeleteChatAction;
/**
* Creates a plain object from a DeleteChatAction message. Also converts values to other types if specified.
* @param message DeleteChatAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.DeleteChatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this DeleteChatAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for DeleteChatAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a DeleteIndividualCallLogAction. */
interface IDeleteIndividualCallLogAction {
/** DeleteIndividualCallLogAction peerJid */
peerJid?: (string|null);
/** DeleteIndividualCallLogAction isIncoming */
isIncoming?: (boolean|null);
}
/** Represents a DeleteIndividualCallLogAction. */
class DeleteIndividualCallLogAction implements IDeleteIndividualCallLogAction {
/**
* Constructs a new DeleteIndividualCallLogAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IDeleteIndividualCallLogAction);
/** DeleteIndividualCallLogAction peerJid. */
public peerJid?: (string|null);
/** DeleteIndividualCallLogAction isIncoming. */
public isIncoming?: (boolean|null);
/** DeleteIndividualCallLogAction _peerJid. */
public _peerJid?: "peerJid";
/** DeleteIndividualCallLogAction _isIncoming. */
public _isIncoming?: "isIncoming";
/**
* Creates a new DeleteIndividualCallLogAction instance using the specified properties.
* @param [properties] Properties to set
* @returns DeleteIndividualCallLogAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IDeleteIndividualCallLogAction): SyncAction.SyncActionValue.DeleteIndividualCallLogAction;
/**
* Encodes the specified DeleteIndividualCallLogAction message. Does not implicitly {@link SyncAction.SyncActionValue.DeleteIndividualCallLogAction.verify|verify} messages.
* @param message DeleteIndividualCallLogAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IDeleteIndividualCallLogAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified DeleteIndividualCallLogAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.DeleteIndividualCallLogAction.verify|verify} messages.
* @param message DeleteIndividualCallLogAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IDeleteIndividualCallLogAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a DeleteIndividualCallLogAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns DeleteIndividualCallLogAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.DeleteIndividualCallLogAction;
/**
* Decodes a DeleteIndividualCallLogAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns DeleteIndividualCallLogAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.DeleteIndividualCallLogAction;
/**
* Verifies a DeleteIndividualCallLogAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a DeleteIndividualCallLogAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns DeleteIndividualCallLogAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.DeleteIndividualCallLogAction;
/**
* Creates a plain object from a DeleteIndividualCallLogAction message. Also converts values to other types if specified.
* @param message DeleteIndividualCallLogAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.DeleteIndividualCallLogAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this DeleteIndividualCallLogAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for DeleteIndividualCallLogAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a DeleteMessageForMeAction. */
interface IDeleteMessageForMeAction {
/** DeleteMessageForMeAction deleteMedia */
deleteMedia?: (boolean|null);
/** DeleteMessageForMeAction messageTimestamp */
messageTimestamp?: (number|Long|null);
}
/** Represents a DeleteMessageForMeAction. */
class DeleteMessageForMeAction implements IDeleteMessageForMeAction {
/**
* Constructs a new DeleteMessageForMeAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IDeleteMessageForMeAction);
/** DeleteMessageForMeAction deleteMedia. */
public deleteMedia?: (boolean|null);
/** DeleteMessageForMeAction messageTimestamp. */
public messageTimestamp?: (number|Long|null);
/** DeleteMessageForMeAction _deleteMedia. */
public _deleteMedia?: "deleteMedia";
/** DeleteMessageForMeAction _messageTimestamp. */
public _messageTimestamp?: "messageTimestamp";
/**
* Creates a new DeleteMessageForMeAction instance using the specified properties.
* @param [properties] Properties to set
* @returns DeleteMessageForMeAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IDeleteMessageForMeAction): SyncAction.SyncActionValue.DeleteMessageForMeAction;
/**
* Encodes the specified DeleteMessageForMeAction message. Does not implicitly {@link SyncAction.SyncActionValue.DeleteMessageForMeAction.verify|verify} messages.
* @param message DeleteMessageForMeAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IDeleteMessageForMeAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified DeleteMessageForMeAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.DeleteMessageForMeAction.verify|verify} messages.
* @param message DeleteMessageForMeAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IDeleteMessageForMeAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a DeleteMessageForMeAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns DeleteMessageForMeAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.DeleteMessageForMeAction;
/**
* Decodes a DeleteMessageForMeAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns DeleteMessageForMeAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.DeleteMessageForMeAction;
/**
* Verifies a DeleteMessageForMeAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a DeleteMessageForMeAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns DeleteMessageForMeAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.DeleteMessageForMeAction;
/**
* Creates a plain object from a DeleteMessageForMeAction message. Also converts values to other types if specified.
* @param message DeleteMessageForMeAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.DeleteMessageForMeAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this DeleteMessageForMeAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for DeleteMessageForMeAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of an ExternalWebBetaAction. */
interface IExternalWebBetaAction {
/** ExternalWebBetaAction isOptIn */
isOptIn?: (boolean|null);
}
/** Represents an ExternalWebBetaAction. */
class ExternalWebBetaAction implements IExternalWebBetaAction {
/**
* Constructs a new ExternalWebBetaAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IExternalWebBetaAction);
/** ExternalWebBetaAction isOptIn. */
public isOptIn?: (boolean|null);
/** ExternalWebBetaAction _isOptIn. */
public _isOptIn?: "isOptIn";
/**
* Creates a new ExternalWebBetaAction instance using the specified properties.
* @param [properties] Properties to set
* @returns ExternalWebBetaAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IExternalWebBetaAction): SyncAction.SyncActionValue.ExternalWebBetaAction;
/**
* Encodes the specified ExternalWebBetaAction message. Does not implicitly {@link SyncAction.SyncActionValue.ExternalWebBetaAction.verify|verify} messages.
* @param message ExternalWebBetaAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IExternalWebBetaAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified ExternalWebBetaAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.ExternalWebBetaAction.verify|verify} messages.
* @param message ExternalWebBetaAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IExternalWebBetaAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes an ExternalWebBetaAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns ExternalWebBetaAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.ExternalWebBetaAction;
/**
* Decodes an ExternalWebBetaAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns ExternalWebBetaAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.ExternalWebBetaAction;
/**
* Verifies an ExternalWebBetaAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates an ExternalWebBetaAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns ExternalWebBetaAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.ExternalWebBetaAction;
/**
* Creates a plain object from an ExternalWebBetaAction message. Also converts values to other types if specified.
* @param message ExternalWebBetaAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.ExternalWebBetaAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this ExternalWebBetaAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for ExternalWebBetaAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a FavoritesAction. */
interface IFavoritesAction {
/** FavoritesAction favorites */
favorites?: (SyncAction.SyncActionValue.FavoritesAction.IFavorite[]|null);
}
/** Represents a FavoritesAction. */
class FavoritesAction implements IFavoritesAction {
/**
* Constructs a new FavoritesAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IFavoritesAction);
/** FavoritesAction favorites. */
public favorites: SyncAction.SyncActionValue.FavoritesAction.IFavorite[];
/**
* Creates a new FavoritesAction instance using the specified properties.
* @param [properties] Properties to set
* @returns FavoritesAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IFavoritesAction): SyncAction.SyncActionValue.FavoritesAction;
/**
* Encodes the specified FavoritesAction message. Does not implicitly {@link SyncAction.SyncActionValue.FavoritesAction.verify|verify} messages.
* @param message FavoritesAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IFavoritesAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified FavoritesAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.FavoritesAction.verify|verify} messages.
* @param message FavoritesAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IFavoritesAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a FavoritesAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns FavoritesAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.FavoritesAction;
/**
* Decodes a FavoritesAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns FavoritesAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.FavoritesAction;
/**
* Verifies a FavoritesAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a FavoritesAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns FavoritesAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.FavoritesAction;
/**
* Creates a plain object from a FavoritesAction message. Also converts values to other types if specified.
* @param message FavoritesAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.FavoritesAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this FavoritesAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for FavoritesAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace FavoritesAction {
/** Properties of a Favorite. */
interface IFavorite {
/** Favorite id */
id?: (string|null);
}
/** Represents a Favorite. */
class Favorite implements IFavorite {
/**
* Constructs a new Favorite.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.FavoritesAction.IFavorite);
/** Favorite id. */
public id?: (string|null);
/** Favorite _id. */
public _id?: "id";
/**
* Creates a new Favorite instance using the specified properties.
* @param [properties] Properties to set
* @returns Favorite instance
*/
public static create(properties?: SyncAction.SyncActionValue.FavoritesAction.IFavorite): SyncAction.SyncActionValue.FavoritesAction.Favorite;
/**
* Encodes the specified Favorite message. Does not implicitly {@link SyncAction.SyncActionValue.FavoritesAction.Favorite.verify|verify} messages.
* @param message Favorite message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.FavoritesAction.IFavorite, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified Favorite message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.FavoritesAction.Favorite.verify|verify} messages.
* @param message Favorite message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.FavoritesAction.IFavorite, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a Favorite message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns Favorite
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.FavoritesAction.Favorite;
/**
* Decodes a Favorite message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns Favorite
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.FavoritesAction.Favorite;
/**
* Verifies a Favorite message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a Favorite message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns Favorite
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.FavoritesAction.Favorite;
/**
* Creates a plain object from a Favorite message. Also converts values to other types if specified.
* @param message Favorite
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.FavoritesAction.Favorite, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this Favorite to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for Favorite
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
}
/** Properties of a KeyExpiration. */
interface IKeyExpiration {
/** KeyExpiration expiredKeyEpoch */
expiredKeyEpoch?: (number|null);
}
/** Represents a KeyExpiration. */
class KeyExpiration implements IKeyExpiration {
/**
* Constructs a new KeyExpiration.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IKeyExpiration);
/** KeyExpiration expiredKeyEpoch. */
public expiredKeyEpoch?: (number|null);
/** KeyExpiration _expiredKeyEpoch. */
public _expiredKeyEpoch?: "expiredKeyEpoch";
/**
* Creates a new KeyExpiration instance using the specified properties.
* @param [properties] Properties to set
* @returns KeyExpiration instance
*/
public static create(properties?: SyncAction.SyncActionValue.IKeyExpiration): SyncAction.SyncActionValue.KeyExpiration;
/**
* Encodes the specified KeyExpiration message. Does not implicitly {@link SyncAction.SyncActionValue.KeyExpiration.verify|verify} messages.
* @param message KeyExpiration message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IKeyExpiration, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified KeyExpiration message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.KeyExpiration.verify|verify} messages.
* @param message KeyExpiration message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IKeyExpiration, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a KeyExpiration message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns KeyExpiration
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.KeyExpiration;
/**
* Decodes a KeyExpiration message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns KeyExpiration
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.KeyExpiration;
/**
* Verifies a KeyExpiration message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a KeyExpiration message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns KeyExpiration
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.KeyExpiration;
/**
* Creates a plain object from a KeyExpiration message. Also converts values to other types if specified.
* @param message KeyExpiration
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.KeyExpiration, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this KeyExpiration to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for KeyExpiration
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a LabelAssociationAction. */
interface ILabelAssociationAction {
/** LabelAssociationAction labeled */
labeled?: (boolean|null);
}
/** Represents a LabelAssociationAction. */
class LabelAssociationAction implements ILabelAssociationAction {
/**
* Constructs a new LabelAssociationAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ILabelAssociationAction);
/** LabelAssociationAction labeled. */
public labeled?: (boolean|null);
/** LabelAssociationAction _labeled. */
public _labeled?: "labeled";
/**
* Creates a new LabelAssociationAction instance using the specified properties.
* @param [properties] Properties to set
* @returns LabelAssociationAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.ILabelAssociationAction): SyncAction.SyncActionValue.LabelAssociationAction;
/**
* Encodes the specified LabelAssociationAction message. Does not implicitly {@link SyncAction.SyncActionValue.LabelAssociationAction.verify|verify} messages.
* @param message LabelAssociationAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ILabelAssociationAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified LabelAssociationAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LabelAssociationAction.verify|verify} messages.
* @param message LabelAssociationAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ILabelAssociationAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a LabelAssociationAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns LabelAssociationAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.LabelAssociationAction;
/**
* Decodes a LabelAssociationAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns LabelAssociationAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.LabelAssociationAction;
/**
* Verifies a LabelAssociationAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a LabelAssociationAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns LabelAssociationAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.LabelAssociationAction;
/**
* Creates a plain object from a LabelAssociationAction message. Also converts values to other types if specified.
* @param message LabelAssociationAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.LabelAssociationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this LabelAssociationAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for LabelAssociationAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a LabelEditAction. */
interface ILabelEditAction {
/** LabelEditAction name */
name?: (string|null);
/** LabelEditAction color */
color?: (number|null);
/** LabelEditAction predefinedId */
predefinedId?: (number|null);
/** LabelEditAction deleted */
deleted?: (boolean|null);
/** LabelEditAction orderIndex */
orderIndex?: (number|null);
/** LabelEditAction isActive */
isActive?: (boolean|null);
/** LabelEditAction type */
type?: (SyncAction.SyncActionValue.LabelEditAction.ListType|null);
/** LabelEditAction isImmutable */
isImmutable?: (boolean|null);
}
/** Represents a LabelEditAction. */
class LabelEditAction implements ILabelEditAction {
/**
* Constructs a new LabelEditAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ILabelEditAction);
/** LabelEditAction name. */
public name?: (string|null);
/** LabelEditAction color. */
public color?: (number|null);
/** LabelEditAction predefinedId. */
public predefinedId?: (number|null);
/** LabelEditAction deleted. */
public deleted?: (boolean|null);
/** LabelEditAction orderIndex. */
public orderIndex?: (number|null);
/** LabelEditAction isActive. */
public isActive?: (boolean|null);
/** LabelEditAction type. */
public type?: (SyncAction.SyncActionValue.LabelEditAction.ListType|null);
/** LabelEditAction isImmutable. */
public isImmutable?: (boolean|null);
/** LabelEditAction _name. */
public _name?: "name";
/** LabelEditAction _color. */
public _color?: "color";
/** LabelEditAction _predefinedId. */
public _predefinedId?: "predefinedId";
/** LabelEditAction _deleted. */
public _deleted?: "deleted";
/** LabelEditAction _orderIndex. */
public _orderIndex?: "orderIndex";
/** LabelEditAction _isActive. */
public _isActive?: "isActive";
/** LabelEditAction _type. */
public _type?: "type";
/** LabelEditAction _isImmutable. */
public _isImmutable?: "isImmutable";
/**
* Creates a new LabelEditAction instance using the specified properties.
* @param [properties] Properties to set
* @returns LabelEditAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.ILabelEditAction): SyncAction.SyncActionValue.LabelEditAction;
/**
* Encodes the specified LabelEditAction message. Does not implicitly {@link SyncAction.SyncActionValue.LabelEditAction.verify|verify} messages.
* @param message LabelEditAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ILabelEditAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified LabelEditAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LabelEditAction.verify|verify} messages.
* @param message LabelEditAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ILabelEditAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a LabelEditAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns LabelEditAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.LabelEditAction;
/**
* Decodes a LabelEditAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns LabelEditAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.LabelEditAction;
/**
* Verifies a LabelEditAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a LabelEditAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns LabelEditAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.LabelEditAction;
/**
* Creates a plain object from a LabelEditAction message. Also converts values to other types if specified.
* @param message LabelEditAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.LabelEditAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this LabelEditAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for LabelEditAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace LabelEditAction {
/** ListType enum. */
enum ListType {
NONE = 0,
UNREAD = 1,
GROUPS = 2,
FAVORITES = 3,
PREDEFINED = 4,
CUSTOM = 5,
COMMUNITY = 6,
SERVER_ASSIGNED = 7
}
}
/** Properties of a LabelReorderingAction. */
interface ILabelReorderingAction {
/** LabelReorderingAction sortedLabelIds */
sortedLabelIds?: (number[]|null);
}
/** Represents a LabelReorderingAction. */
class LabelReorderingAction implements ILabelReorderingAction {
/**
* Constructs a new LabelReorderingAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ILabelReorderingAction);
/** LabelReorderingAction sortedLabelIds. */
public sortedLabelIds: number[];
/**
* Creates a new LabelReorderingAction instance using the specified properties.
* @param [properties] Properties to set
* @returns LabelReorderingAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.ILabelReorderingAction): SyncAction.SyncActionValue.LabelReorderingAction;
/**
* Encodes the specified LabelReorderingAction message. Does not implicitly {@link SyncAction.SyncActionValue.LabelReorderingAction.verify|verify} messages.
* @param message LabelReorderingAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ILabelReorderingAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified LabelReorderingAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LabelReorderingAction.verify|verify} messages.
* @param message LabelReorderingAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ILabelReorderingAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a LabelReorderingAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns LabelReorderingAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.LabelReorderingAction;
/**
* Decodes a LabelReorderingAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns LabelReorderingAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.LabelReorderingAction;
/**
* Verifies a LabelReorderingAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a LabelReorderingAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns LabelReorderingAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.LabelReorderingAction;
/**
* Creates a plain object from a LabelReorderingAction message. Also converts values to other types if specified.
* @param message LabelReorderingAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.LabelReorderingAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this LabelReorderingAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for LabelReorderingAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a LidContactAction. */
interface ILidContactAction {
/** LidContactAction fullName */
fullName?: (string|null);
/** LidContactAction firstName */
firstName?: (string|null);
/** LidContactAction username */
username?: (string|null);
/** LidContactAction saveOnPrimaryAddressbook */
saveOnPrimaryAddressbook?: (boolean|null);
}
/** Represents a LidContactAction. */
class LidContactAction implements ILidContactAction {
/**
* Constructs a new LidContactAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ILidContactAction);
/** LidContactAction fullName. */
public fullName?: (string|null);
/** LidContactAction firstName. */
public firstName?: (string|null);
/** LidContactAction username. */
public username?: (string|null);
/** LidContactAction saveOnPrimaryAddressbook. */
public saveOnPrimaryAddressbook?: (boolean|null);
/** LidContactAction _fullName. */
public _fullName?: "fullName";
/** LidContactAction _firstName. */
public _firstName?: "firstName";
/** LidContactAction _username. */
public _username?: "username";
/** LidContactAction _saveOnPrimaryAddressbook. */
public _saveOnPrimaryAddressbook?: "saveOnPrimaryAddressbook";
/**
* Creates a new LidContactAction instance using the specified properties.
* @param [properties] Properties to set
* @returns LidContactAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.ILidContactAction): SyncAction.SyncActionValue.LidContactAction;
/**
* Encodes the specified LidContactAction message. Does not implicitly {@link SyncAction.SyncActionValue.LidContactAction.verify|verify} messages.
* @param message LidContactAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ILidContactAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified LidContactAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LidContactAction.verify|verify} messages.
* @param message LidContactAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ILidContactAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a LidContactAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns LidContactAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.LidContactAction;
/**
* Decodes a LidContactAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns LidContactAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.LidContactAction;
/**
* Verifies a LidContactAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a LidContactAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns LidContactAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.LidContactAction;
/**
* Creates a plain object from a LidContactAction message. Also converts values to other types if specified.
* @param message LidContactAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.LidContactAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this LidContactAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for LidContactAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a LocaleSetting. */
interface ILocaleSetting {
/** LocaleSetting locale */
locale?: (string|null);
}
/** Represents a LocaleSetting. */
class LocaleSetting implements ILocaleSetting {
/**
* Constructs a new LocaleSetting.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ILocaleSetting);
/** LocaleSetting locale. */
public locale?: (string|null);
/** LocaleSetting _locale. */
public _locale?: "locale";
/**
* Creates a new LocaleSetting instance using the specified properties.
* @param [properties] Properties to set
* @returns LocaleSetting instance
*/
public static create(properties?: SyncAction.SyncActionValue.ILocaleSetting): SyncAction.SyncActionValue.LocaleSetting;
/**
* Encodes the specified LocaleSetting message. Does not implicitly {@link SyncAction.SyncActionValue.LocaleSetting.verify|verify} messages.
* @param message LocaleSetting message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ILocaleSetting, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified LocaleSetting message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LocaleSetting.verify|verify} messages.
* @param message LocaleSetting message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ILocaleSetting, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a LocaleSetting message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns LocaleSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.LocaleSetting;
/**
* Decodes a LocaleSetting message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns LocaleSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.LocaleSetting;
/**
* Verifies a LocaleSetting message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a LocaleSetting message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns LocaleSetting
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.LocaleSetting;
/**
* Creates a plain object from a LocaleSetting message. Also converts values to other types if specified.
* @param message LocaleSetting
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.LocaleSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this LocaleSetting to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for LocaleSetting
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a LockChatAction. */
interface ILockChatAction {
/** LockChatAction locked */
locked?: (boolean|null);
}
/** Represents a LockChatAction. */
class LockChatAction implements ILockChatAction {
/**
* Constructs a new LockChatAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ILockChatAction);
/** LockChatAction locked. */
public locked?: (boolean|null);
/** LockChatAction _locked. */
public _locked?: "locked";
/**
* Creates a new LockChatAction instance using the specified properties.
* @param [properties] Properties to set
* @returns LockChatAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.ILockChatAction): SyncAction.SyncActionValue.LockChatAction;
/**
* Encodes the specified LockChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.LockChatAction.verify|verify} messages.
* @param message LockChatAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ILockChatAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified LockChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.LockChatAction.verify|verify} messages.
* @param message LockChatAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ILockChatAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a LockChatAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns LockChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.LockChatAction;
/**
* Decodes a LockChatAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns LockChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.LockChatAction;
/**
* Verifies a LockChatAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a LockChatAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns LockChatAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.LockChatAction;
/**
* Creates a plain object from a LockChatAction message. Also converts values to other types if specified.
* @param message LockChatAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.LockChatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this LockChatAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for LockChatAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a MarkChatAsReadAction. */
interface IMarkChatAsReadAction {
/** MarkChatAsReadAction read */
read?: (boolean|null);
/** MarkChatAsReadAction messageRange */
messageRange?: (SyncAction.SyncActionValue.ISyncActionMessageRange|null);
}
/** Represents a MarkChatAsReadAction. */
class MarkChatAsReadAction implements IMarkChatAsReadAction {
/**
* Constructs a new MarkChatAsReadAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IMarkChatAsReadAction);
/** MarkChatAsReadAction read. */
public read?: (boolean|null);
/** MarkChatAsReadAction messageRange. */
public messageRange?: (SyncAction.SyncActionValue.ISyncActionMessageRange|null);
/** MarkChatAsReadAction _read. */
public _read?: "read";
/** MarkChatAsReadAction _messageRange. */
public _messageRange?: "messageRange";
/**
* Creates a new MarkChatAsReadAction instance using the specified properties.
* @param [properties] Properties to set
* @returns MarkChatAsReadAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IMarkChatAsReadAction): SyncAction.SyncActionValue.MarkChatAsReadAction;
/**
* Encodes the specified MarkChatAsReadAction message. Does not implicitly {@link SyncAction.SyncActionValue.MarkChatAsReadAction.verify|verify} messages.
* @param message MarkChatAsReadAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IMarkChatAsReadAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified MarkChatAsReadAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MarkChatAsReadAction.verify|verify} messages.
* @param message MarkChatAsReadAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IMarkChatAsReadAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a MarkChatAsReadAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns MarkChatAsReadAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.MarkChatAsReadAction;
/**
* Decodes a MarkChatAsReadAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns MarkChatAsReadAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.MarkChatAsReadAction;
/**
* Verifies a MarkChatAsReadAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a MarkChatAsReadAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns MarkChatAsReadAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.MarkChatAsReadAction;
/**
* Creates a plain object from a MarkChatAsReadAction message. Also converts values to other types if specified.
* @param message MarkChatAsReadAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.MarkChatAsReadAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this MarkChatAsReadAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for MarkChatAsReadAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a MarketingMessageAction. */
interface IMarketingMessageAction {
/** MarketingMessageAction name */
name?: (string|null);
/** MarketingMessageAction message */
message?: (string|null);
/** MarketingMessageAction type */
type?: (SyncAction.SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType|null);
/** MarketingMessageAction createdAt */
createdAt?: (number|Long|null);
/** MarketingMessageAction lastSentAt */
lastSentAt?: (number|Long|null);
/** MarketingMessageAction isDeleted */
isDeleted?: (boolean|null);
/** MarketingMessageAction mediaId */
mediaId?: (string|null);
}
/** Represents a MarketingMessageAction. */
class MarketingMessageAction implements IMarketingMessageAction {
/**
* Constructs a new MarketingMessageAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IMarketingMessageAction);
/** MarketingMessageAction name. */
public name?: (string|null);
/** MarketingMessageAction message. */
public message?: (string|null);
/** MarketingMessageAction type. */
public type?: (SyncAction.SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType|null);
/** MarketingMessageAction createdAt. */
public createdAt?: (number|Long|null);
/** MarketingMessageAction lastSentAt. */
public lastSentAt?: (number|Long|null);
/** MarketingMessageAction isDeleted. */
public isDeleted?: (boolean|null);
/** MarketingMessageAction mediaId. */
public mediaId?: (string|null);
/** MarketingMessageAction _name. */
public _name?: "name";
/** MarketingMessageAction _message. */
public _message?: "message";
/** MarketingMessageAction _type. */
public _type?: "type";
/** MarketingMessageAction _createdAt. */
public _createdAt?: "createdAt";
/** MarketingMessageAction _lastSentAt. */
public _lastSentAt?: "lastSentAt";
/** MarketingMessageAction _isDeleted. */
public _isDeleted?: "isDeleted";
/** MarketingMessageAction _mediaId. */
public _mediaId?: "mediaId";
/**
* Creates a new MarketingMessageAction instance using the specified properties.
* @param [properties] Properties to set
* @returns MarketingMessageAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IMarketingMessageAction): SyncAction.SyncActionValue.MarketingMessageAction;
/**
* Encodes the specified MarketingMessageAction message. Does not implicitly {@link SyncAction.SyncActionValue.MarketingMessageAction.verify|verify} messages.
* @param message MarketingMessageAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IMarketingMessageAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified MarketingMessageAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MarketingMessageAction.verify|verify} messages.
* @param message MarketingMessageAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IMarketingMessageAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a MarketingMessageAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns MarketingMessageAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.MarketingMessageAction;
/**
* Decodes a MarketingMessageAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns MarketingMessageAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.MarketingMessageAction;
/**
* Verifies a MarketingMessageAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a MarketingMessageAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns MarketingMessageAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.MarketingMessageAction;
/**
* Creates a plain object from a MarketingMessageAction message. Also converts values to other types if specified.
* @param message MarketingMessageAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.MarketingMessageAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this MarketingMessageAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for MarketingMessageAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace MarketingMessageAction {
/** MarketingMessagePrototypeType enum. */
enum MarketingMessagePrototypeType {
PERSONALIZED = 0
}
}
/** Properties of a MarketingMessageBroadcastAction. */
interface IMarketingMessageBroadcastAction {
/** MarketingMessageBroadcastAction repliedCount */
repliedCount?: (number|null);
}
/** Represents a MarketingMessageBroadcastAction. */
class MarketingMessageBroadcastAction implements IMarketingMessageBroadcastAction {
/**
* Constructs a new MarketingMessageBroadcastAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IMarketingMessageBroadcastAction);
/** MarketingMessageBroadcastAction repliedCount. */
public repliedCount?: (number|null);
/** MarketingMessageBroadcastAction _repliedCount. */
public _repliedCount?: "repliedCount";
/**
* Creates a new MarketingMessageBroadcastAction instance using the specified properties.
* @param [properties] Properties to set
* @returns MarketingMessageBroadcastAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IMarketingMessageBroadcastAction): SyncAction.SyncActionValue.MarketingMessageBroadcastAction;
/**
* Encodes the specified MarketingMessageBroadcastAction message. Does not implicitly {@link SyncAction.SyncActionValue.MarketingMessageBroadcastAction.verify|verify} messages.
* @param message MarketingMessageBroadcastAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IMarketingMessageBroadcastAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified MarketingMessageBroadcastAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MarketingMessageBroadcastAction.verify|verify} messages.
* @param message MarketingMessageBroadcastAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IMarketingMessageBroadcastAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a MarketingMessageBroadcastAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns MarketingMessageBroadcastAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.MarketingMessageBroadcastAction;
/**
* Decodes a MarketingMessageBroadcastAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns MarketingMessageBroadcastAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.MarketingMessageBroadcastAction;
/**
* Verifies a MarketingMessageBroadcastAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a MarketingMessageBroadcastAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns MarketingMessageBroadcastAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.MarketingMessageBroadcastAction;
/**
* Creates a plain object from a MarketingMessageBroadcastAction message. Also converts values to other types if specified.
* @param message MarketingMessageBroadcastAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.MarketingMessageBroadcastAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this MarketingMessageBroadcastAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for MarketingMessageBroadcastAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a MerchantPaymentPartnerAction. */
interface IMerchantPaymentPartnerAction {
/** MerchantPaymentPartnerAction status */
status?: (SyncAction.SyncActionValue.MerchantPaymentPartnerAction.Status|null);
/** MerchantPaymentPartnerAction country */
country?: (string|null);
/** MerchantPaymentPartnerAction gatewayName */
gatewayName?: (string|null);
/** MerchantPaymentPartnerAction credentialId */
credentialId?: (string|null);
}
/** Represents a MerchantPaymentPartnerAction. */
class MerchantPaymentPartnerAction implements IMerchantPaymentPartnerAction {
/**
* Constructs a new MerchantPaymentPartnerAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IMerchantPaymentPartnerAction);
/** MerchantPaymentPartnerAction status. */
public status?: (SyncAction.SyncActionValue.MerchantPaymentPartnerAction.Status|null);
/** MerchantPaymentPartnerAction country. */
public country?: (string|null);
/** MerchantPaymentPartnerAction gatewayName. */
public gatewayName?: (string|null);
/** MerchantPaymentPartnerAction credentialId. */
public credentialId?: (string|null);
/** MerchantPaymentPartnerAction _status. */
public _status?: "status";
/** MerchantPaymentPartnerAction _country. */
public _country?: "country";
/** MerchantPaymentPartnerAction _gatewayName. */
public _gatewayName?: "gatewayName";
/** MerchantPaymentPartnerAction _credentialId. */
public _credentialId?: "credentialId";
/**
* Creates a new MerchantPaymentPartnerAction instance using the specified properties.
* @param [properties] Properties to set
* @returns MerchantPaymentPartnerAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IMerchantPaymentPartnerAction): SyncAction.SyncActionValue.MerchantPaymentPartnerAction;
/**
* Encodes the specified MerchantPaymentPartnerAction message. Does not implicitly {@link SyncAction.SyncActionValue.MerchantPaymentPartnerAction.verify|verify} messages.
* @param message MerchantPaymentPartnerAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IMerchantPaymentPartnerAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified MerchantPaymentPartnerAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MerchantPaymentPartnerAction.verify|verify} messages.
* @param message MerchantPaymentPartnerAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IMerchantPaymentPartnerAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a MerchantPaymentPartnerAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns MerchantPaymentPartnerAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.MerchantPaymentPartnerAction;
/**
* Decodes a MerchantPaymentPartnerAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns MerchantPaymentPartnerAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.MerchantPaymentPartnerAction;
/**
* Verifies a MerchantPaymentPartnerAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a MerchantPaymentPartnerAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns MerchantPaymentPartnerAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.MerchantPaymentPartnerAction;
/**
* Creates a plain object from a MerchantPaymentPartnerAction message. Also converts values to other types if specified.
* @param message MerchantPaymentPartnerAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.MerchantPaymentPartnerAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this MerchantPaymentPartnerAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for MerchantPaymentPartnerAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace MerchantPaymentPartnerAction {
/** Status enum. */
enum Status {
ACTIVE = 0,
INACTIVE = 1
}
}
/** Properties of a MuteAction. */
interface IMuteAction {
/** MuteAction muted */
muted?: (boolean|null);
/** MuteAction muteEndTimestamp */
muteEndTimestamp?: (number|Long|null);
/** MuteAction autoMuted */
autoMuted?: (boolean|null);
}
/** Represents a MuteAction. */
class MuteAction implements IMuteAction {
/**
* Constructs a new MuteAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IMuteAction);
/** MuteAction muted. */
public muted?: (boolean|null);
/** MuteAction muteEndTimestamp. */
public muteEndTimestamp?: (number|Long|null);
/** MuteAction autoMuted. */
public autoMuted?: (boolean|null);
/** MuteAction _muted. */
public _muted?: "muted";
/** MuteAction _muteEndTimestamp. */
public _muteEndTimestamp?: "muteEndTimestamp";
/** MuteAction _autoMuted. */
public _autoMuted?: "autoMuted";
/**
* Creates a new MuteAction instance using the specified properties.
* @param [properties] Properties to set
* @returns MuteAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IMuteAction): SyncAction.SyncActionValue.MuteAction;
/**
* Encodes the specified MuteAction message. Does not implicitly {@link SyncAction.SyncActionValue.MuteAction.verify|verify} messages.
* @param message MuteAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IMuteAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified MuteAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.MuteAction.verify|verify} messages.
* @param message MuteAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IMuteAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a MuteAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns MuteAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.MuteAction;
/**
* Decodes a MuteAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns MuteAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.MuteAction;
/**
* Verifies a MuteAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a MuteAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns MuteAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.MuteAction;
/**
* Creates a plain object from a MuteAction message. Also converts values to other types if specified.
* @param message MuteAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.MuteAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this MuteAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for MuteAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a NoteEditAction. */
interface INoteEditAction {
/** NoteEditAction type */
type?: (SyncAction.SyncActionValue.NoteEditAction.NoteType|null);
/** NoteEditAction chatJid */
chatJid?: (string|null);
/** NoteEditAction createdAt */
createdAt?: (number|Long|null);
/** NoteEditAction deleted */
deleted?: (boolean|null);
/** NoteEditAction unstructuredContent */
unstructuredContent?: (string|null);
}
/** Represents a NoteEditAction. */
class NoteEditAction implements INoteEditAction {
/**
* Constructs a new NoteEditAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.INoteEditAction);
/** NoteEditAction type. */
public type?: (SyncAction.SyncActionValue.NoteEditAction.NoteType|null);
/** NoteEditAction chatJid. */
public chatJid?: (string|null);
/** NoteEditAction createdAt. */
public createdAt?: (number|Long|null);
/** NoteEditAction deleted. */
public deleted?: (boolean|null);
/** NoteEditAction unstructuredContent. */
public unstructuredContent?: (string|null);
/** NoteEditAction _type. */
public _type?: "type";
/** NoteEditAction _chatJid. */
public _chatJid?: "chatJid";
/** NoteEditAction _createdAt. */
public _createdAt?: "createdAt";
/** NoteEditAction _deleted. */
public _deleted?: "deleted";
/** NoteEditAction _unstructuredContent. */
public _unstructuredContent?: "unstructuredContent";
/**
* Creates a new NoteEditAction instance using the specified properties.
* @param [properties] Properties to set
* @returns NoteEditAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.INoteEditAction): SyncAction.SyncActionValue.NoteEditAction;
/**
* Encodes the specified NoteEditAction message. Does not implicitly {@link SyncAction.SyncActionValue.NoteEditAction.verify|verify} messages.
* @param message NoteEditAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.INoteEditAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified NoteEditAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.NoteEditAction.verify|verify} messages.
* @param message NoteEditAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.INoteEditAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a NoteEditAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns NoteEditAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.NoteEditAction;
/**
* Decodes a NoteEditAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns NoteEditAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.NoteEditAction;
/**
* Verifies a NoteEditAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a NoteEditAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns NoteEditAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.NoteEditAction;
/**
* Creates a plain object from a NoteEditAction message. Also converts values to other types if specified.
* @param message NoteEditAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.NoteEditAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this NoteEditAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for NoteEditAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace NoteEditAction {
/** NoteType enum. */
enum NoteType {
UNSTRUCTURED = 1,
STRUCTURED = 2
}
}
/** Properties of a NotificationActivitySettingAction. */
interface INotificationActivitySettingAction {
/** NotificationActivitySettingAction notificationActivitySetting */
notificationActivitySetting?: (SyncAction.SyncActionValue.NotificationActivitySettingAction.NotificationActivitySetting|null);
}
/** Represents a NotificationActivitySettingAction. */
class NotificationActivitySettingAction implements INotificationActivitySettingAction {
/**
* Constructs a new NotificationActivitySettingAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.INotificationActivitySettingAction);
/** NotificationActivitySettingAction notificationActivitySetting. */
public notificationActivitySetting?: (SyncAction.SyncActionValue.NotificationActivitySettingAction.NotificationActivitySetting|null);
/** NotificationActivitySettingAction _notificationActivitySetting. */
public _notificationActivitySetting?: "notificationActivitySetting";
/**
* Creates a new NotificationActivitySettingAction instance using the specified properties.
* @param [properties] Properties to set
* @returns NotificationActivitySettingAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.INotificationActivitySettingAction): SyncAction.SyncActionValue.NotificationActivitySettingAction;
/**
* Encodes the specified NotificationActivitySettingAction message. Does not implicitly {@link SyncAction.SyncActionValue.NotificationActivitySettingAction.verify|verify} messages.
* @param message NotificationActivitySettingAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.INotificationActivitySettingAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified NotificationActivitySettingAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.NotificationActivitySettingAction.verify|verify} messages.
* @param message NotificationActivitySettingAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.INotificationActivitySettingAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a NotificationActivitySettingAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns NotificationActivitySettingAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.NotificationActivitySettingAction;
/**
* Decodes a NotificationActivitySettingAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns NotificationActivitySettingAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.NotificationActivitySettingAction;
/**
* Verifies a NotificationActivitySettingAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a NotificationActivitySettingAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns NotificationActivitySettingAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.NotificationActivitySettingAction;
/**
* Creates a plain object from a NotificationActivitySettingAction message. Also converts values to other types if specified.
* @param message NotificationActivitySettingAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.NotificationActivitySettingAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this NotificationActivitySettingAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for NotificationActivitySettingAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace NotificationActivitySettingAction {
/** NotificationActivitySetting enum. */
enum NotificationActivitySetting {
DEFAULT_ALL_MESSAGES = 0,
ALL_MESSAGES = 1,
HIGHLIGHTS = 2,
DEFAULT_HIGHLIGHTS = 3
}
}
/** Properties of a NuxAction. */
interface INuxAction {
/** NuxAction acknowledged */
acknowledged?: (boolean|null);
}
/** Represents a NuxAction. */
class NuxAction implements INuxAction {
/**
* Constructs a new NuxAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.INuxAction);
/** NuxAction acknowledged. */
public acknowledged?: (boolean|null);
/** NuxAction _acknowledged. */
public _acknowledged?: "acknowledged";
/**
* Creates a new NuxAction instance using the specified properties.
* @param [properties] Properties to set
* @returns NuxAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.INuxAction): SyncAction.SyncActionValue.NuxAction;
/**
* Encodes the specified NuxAction message. Does not implicitly {@link SyncAction.SyncActionValue.NuxAction.verify|verify} messages.
* @param message NuxAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.INuxAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified NuxAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.NuxAction.verify|verify} messages.
* @param message NuxAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.INuxAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a NuxAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns NuxAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.NuxAction;
/**
* Decodes a NuxAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns NuxAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.NuxAction;
/**
* Verifies a NuxAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a NuxAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns NuxAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.NuxAction;
/**
* Creates a plain object from a NuxAction message. Also converts values to other types if specified.
* @param message NuxAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.NuxAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this NuxAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for NuxAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a PaymentInfoAction. */
interface IPaymentInfoAction {
/** PaymentInfoAction cpi */
cpi?: (string|null);
}
/** Represents a PaymentInfoAction. */
class PaymentInfoAction implements IPaymentInfoAction {
/**
* Constructs a new PaymentInfoAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IPaymentInfoAction);
/** PaymentInfoAction cpi. */
public cpi?: (string|null);
/** PaymentInfoAction _cpi. */
public _cpi?: "cpi";
/**
* Creates a new PaymentInfoAction instance using the specified properties.
* @param [properties] Properties to set
* @returns PaymentInfoAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IPaymentInfoAction): SyncAction.SyncActionValue.PaymentInfoAction;
/**
* Encodes the specified PaymentInfoAction message. Does not implicitly {@link SyncAction.SyncActionValue.PaymentInfoAction.verify|verify} messages.
* @param message PaymentInfoAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IPaymentInfoAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified PaymentInfoAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PaymentInfoAction.verify|verify} messages.
* @param message PaymentInfoAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IPaymentInfoAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a PaymentInfoAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns PaymentInfoAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PaymentInfoAction;
/**
* Decodes a PaymentInfoAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns PaymentInfoAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PaymentInfoAction;
/**
* Verifies a PaymentInfoAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a PaymentInfoAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns PaymentInfoAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PaymentInfoAction;
/**
* Creates a plain object from a PaymentInfoAction message. Also converts values to other types if specified.
* @param message PaymentInfoAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.PaymentInfoAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this PaymentInfoAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for PaymentInfoAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a PaymentTosAction. */
interface IPaymentTosAction {
/** PaymentTosAction paymentNotice */
paymentNotice?: (SyncAction.SyncActionValue.PaymentTosAction.PaymentNotice|null);
/** PaymentTosAction accepted */
accepted?: (boolean|null);
}
/** Represents a PaymentTosAction. */
class PaymentTosAction implements IPaymentTosAction {
/**
* Constructs a new PaymentTosAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IPaymentTosAction);
/** PaymentTosAction paymentNotice. */
public paymentNotice?: (SyncAction.SyncActionValue.PaymentTosAction.PaymentNotice|null);
/** PaymentTosAction accepted. */
public accepted?: (boolean|null);
/** PaymentTosAction _paymentNotice. */
public _paymentNotice?: "paymentNotice";
/** PaymentTosAction _accepted. */
public _accepted?: "accepted";
/**
* Creates a new PaymentTosAction instance using the specified properties.
* @param [properties] Properties to set
* @returns PaymentTosAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IPaymentTosAction): SyncAction.SyncActionValue.PaymentTosAction;
/**
* Encodes the specified PaymentTosAction message. Does not implicitly {@link SyncAction.SyncActionValue.PaymentTosAction.verify|verify} messages.
* @param message PaymentTosAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IPaymentTosAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified PaymentTosAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PaymentTosAction.verify|verify} messages.
* @param message PaymentTosAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IPaymentTosAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a PaymentTosAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns PaymentTosAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PaymentTosAction;
/**
* Decodes a PaymentTosAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns PaymentTosAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PaymentTosAction;
/**
* Verifies a PaymentTosAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a PaymentTosAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns PaymentTosAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PaymentTosAction;
/**
* Creates a plain object from a PaymentTosAction message. Also converts values to other types if specified.
* @param message PaymentTosAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.PaymentTosAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this PaymentTosAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for PaymentTosAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace PaymentTosAction {
/** PaymentNotice enum. */
enum PaymentNotice {
BR_PAY_PRIVACY_POLICY = 0
}
}
/** Properties of a PinAction. */
interface IPinAction {
/** PinAction pinned */
pinned?: (boolean|null);
}
/** Represents a PinAction. */
class PinAction implements IPinAction {
/**
* Constructs a new PinAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IPinAction);
/** PinAction pinned. */
public pinned?: (boolean|null);
/** PinAction _pinned. */
public _pinned?: "pinned";
/**
* Creates a new PinAction instance using the specified properties.
* @param [properties] Properties to set
* @returns PinAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IPinAction): SyncAction.SyncActionValue.PinAction;
/**
* Encodes the specified PinAction message. Does not implicitly {@link SyncAction.SyncActionValue.PinAction.verify|verify} messages.
* @param message PinAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IPinAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified PinAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PinAction.verify|verify} messages.
* @param message PinAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IPinAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a PinAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns PinAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PinAction;
/**
* Decodes a PinAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns PinAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PinAction;
/**
* Verifies a PinAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a PinAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns PinAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PinAction;
/**
* Creates a plain object from a PinAction message. Also converts values to other types if specified.
* @param message PinAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.PinAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this PinAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for PinAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a PnForLidChatAction. */
interface IPnForLidChatAction {
/** PnForLidChatAction pnJid */
pnJid?: (string|null);
}
/** Represents a PnForLidChatAction. */
class PnForLidChatAction implements IPnForLidChatAction {
/**
* Constructs a new PnForLidChatAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IPnForLidChatAction);
/** PnForLidChatAction pnJid. */
public pnJid?: (string|null);
/** PnForLidChatAction _pnJid. */
public _pnJid?: "pnJid";
/**
* Creates a new PnForLidChatAction instance using the specified properties.
* @param [properties] Properties to set
* @returns PnForLidChatAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IPnForLidChatAction): SyncAction.SyncActionValue.PnForLidChatAction;
/**
* Encodes the specified PnForLidChatAction message. Does not implicitly {@link SyncAction.SyncActionValue.PnForLidChatAction.verify|verify} messages.
* @param message PnForLidChatAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IPnForLidChatAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified PnForLidChatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PnForLidChatAction.verify|verify} messages.
* @param message PnForLidChatAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IPnForLidChatAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a PnForLidChatAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns PnForLidChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PnForLidChatAction;
/**
* Decodes a PnForLidChatAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns PnForLidChatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PnForLidChatAction;
/**
* Verifies a PnForLidChatAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a PnForLidChatAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns PnForLidChatAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PnForLidChatAction;
/**
* Creates a plain object from a PnForLidChatAction message. Also converts values to other types if specified.
* @param message PnForLidChatAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.PnForLidChatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this PnForLidChatAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for PnForLidChatAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a PrimaryFeature. */
interface IPrimaryFeature {
/** PrimaryFeature flags */
flags?: (string[]|null);
}
/** Represents a PrimaryFeature. */
class PrimaryFeature implements IPrimaryFeature {
/**
* Constructs a new PrimaryFeature.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IPrimaryFeature);
/** PrimaryFeature flags. */
public flags: string[];
/**
* Creates a new PrimaryFeature instance using the specified properties.
* @param [properties] Properties to set
* @returns PrimaryFeature instance
*/
public static create(properties?: SyncAction.SyncActionValue.IPrimaryFeature): SyncAction.SyncActionValue.PrimaryFeature;
/**
* Encodes the specified PrimaryFeature message. Does not implicitly {@link SyncAction.SyncActionValue.PrimaryFeature.verify|verify} messages.
* @param message PrimaryFeature message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IPrimaryFeature, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified PrimaryFeature message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PrimaryFeature.verify|verify} messages.
* @param message PrimaryFeature message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IPrimaryFeature, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a PrimaryFeature message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns PrimaryFeature
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PrimaryFeature;
/**
* Decodes a PrimaryFeature message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns PrimaryFeature
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PrimaryFeature;
/**
* Verifies a PrimaryFeature message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a PrimaryFeature message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns PrimaryFeature
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PrimaryFeature;
/**
* Creates a plain object from a PrimaryFeature message. Also converts values to other types if specified.
* @param message PrimaryFeature
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.PrimaryFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this PrimaryFeature to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for PrimaryFeature
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a PrimaryVersionAction. */
interface IPrimaryVersionAction {
/** PrimaryVersionAction version */
version?: (string|null);
}
/** Represents a PrimaryVersionAction. */
class PrimaryVersionAction implements IPrimaryVersionAction {
/**
* Constructs a new PrimaryVersionAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IPrimaryVersionAction);
/** PrimaryVersionAction version. */
public version?: (string|null);
/** PrimaryVersionAction _version. */
public _version?: "version";
/**
* Creates a new PrimaryVersionAction instance using the specified properties.
* @param [properties] Properties to set
* @returns PrimaryVersionAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IPrimaryVersionAction): SyncAction.SyncActionValue.PrimaryVersionAction;
/**
* Encodes the specified PrimaryVersionAction message. Does not implicitly {@link SyncAction.SyncActionValue.PrimaryVersionAction.verify|verify} messages.
* @param message PrimaryVersionAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IPrimaryVersionAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified PrimaryVersionAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PrimaryVersionAction.verify|verify} messages.
* @param message PrimaryVersionAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IPrimaryVersionAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a PrimaryVersionAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns PrimaryVersionAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PrimaryVersionAction;
/**
* Decodes a PrimaryVersionAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns PrimaryVersionAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PrimaryVersionAction;
/**
* Verifies a PrimaryVersionAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a PrimaryVersionAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns PrimaryVersionAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PrimaryVersionAction;
/**
* Creates a plain object from a PrimaryVersionAction message. Also converts values to other types if specified.
* @param message PrimaryVersionAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.PrimaryVersionAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this PrimaryVersionAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for PrimaryVersionAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a PrivacySettingDisableLinkPreviewsAction. */
interface IPrivacySettingDisableLinkPreviewsAction {
/** PrivacySettingDisableLinkPreviewsAction isPreviewsDisabled */
isPreviewsDisabled?: (boolean|null);
}
/** Represents a PrivacySettingDisableLinkPreviewsAction. */
class PrivacySettingDisableLinkPreviewsAction implements IPrivacySettingDisableLinkPreviewsAction {
/**
* Constructs a new PrivacySettingDisableLinkPreviewsAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction);
/** PrivacySettingDisableLinkPreviewsAction isPreviewsDisabled. */
public isPreviewsDisabled?: (boolean|null);
/** PrivacySettingDisableLinkPreviewsAction _isPreviewsDisabled. */
public _isPreviewsDisabled?: "isPreviewsDisabled";
/**
* Creates a new PrivacySettingDisableLinkPreviewsAction instance using the specified properties.
* @param [properties] Properties to set
* @returns PrivacySettingDisableLinkPreviewsAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction): SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction;
/**
* Encodes the specified PrivacySettingDisableLinkPreviewsAction message. Does not implicitly {@link SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.verify|verify} messages.
* @param message PrivacySettingDisableLinkPreviewsAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified PrivacySettingDisableLinkPreviewsAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction.verify|verify} messages.
* @param message PrivacySettingDisableLinkPreviewsAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IPrivacySettingDisableLinkPreviewsAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a PrivacySettingDisableLinkPreviewsAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns PrivacySettingDisableLinkPreviewsAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction;
/**
* Decodes a PrivacySettingDisableLinkPreviewsAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns PrivacySettingDisableLinkPreviewsAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction;
/**
* Verifies a PrivacySettingDisableLinkPreviewsAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a PrivacySettingDisableLinkPreviewsAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns PrivacySettingDisableLinkPreviewsAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction;
/**
* Creates a plain object from a PrivacySettingDisableLinkPreviewsAction message. Also converts values to other types if specified.
* @param message PrivacySettingDisableLinkPreviewsAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.PrivacySettingDisableLinkPreviewsAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this PrivacySettingDisableLinkPreviewsAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for PrivacySettingDisableLinkPreviewsAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a PrivacySettingRelayAllCalls. */
interface IPrivacySettingRelayAllCalls {
/** PrivacySettingRelayAllCalls isEnabled */
isEnabled?: (boolean|null);
}
/** Represents a PrivacySettingRelayAllCalls. */
class PrivacySettingRelayAllCalls implements IPrivacySettingRelayAllCalls {
/**
* Constructs a new PrivacySettingRelayAllCalls.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IPrivacySettingRelayAllCalls);
/** PrivacySettingRelayAllCalls isEnabled. */
public isEnabled?: (boolean|null);
/** PrivacySettingRelayAllCalls _isEnabled. */
public _isEnabled?: "isEnabled";
/**
* Creates a new PrivacySettingRelayAllCalls instance using the specified properties.
* @param [properties] Properties to set
* @returns PrivacySettingRelayAllCalls instance
*/
public static create(properties?: SyncAction.SyncActionValue.IPrivacySettingRelayAllCalls): SyncAction.SyncActionValue.PrivacySettingRelayAllCalls;
/**
* Encodes the specified PrivacySettingRelayAllCalls message. Does not implicitly {@link SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.verify|verify} messages.
* @param message PrivacySettingRelayAllCalls message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IPrivacySettingRelayAllCalls, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified PrivacySettingRelayAllCalls message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PrivacySettingRelayAllCalls.verify|verify} messages.
* @param message PrivacySettingRelayAllCalls message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IPrivacySettingRelayAllCalls, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a PrivacySettingRelayAllCalls message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns PrivacySettingRelayAllCalls
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PrivacySettingRelayAllCalls;
/**
* Decodes a PrivacySettingRelayAllCalls message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns PrivacySettingRelayAllCalls
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PrivacySettingRelayAllCalls;
/**
* Verifies a PrivacySettingRelayAllCalls message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a PrivacySettingRelayAllCalls message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns PrivacySettingRelayAllCalls
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PrivacySettingRelayAllCalls;
/**
* Creates a plain object from a PrivacySettingRelayAllCalls message. Also converts values to other types if specified.
* @param message PrivacySettingRelayAllCalls
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.PrivacySettingRelayAllCalls, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this PrivacySettingRelayAllCalls to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for PrivacySettingRelayAllCalls
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a PushNameSetting. */
interface IPushNameSetting {
/** PushNameSetting name */
name?: (string|null);
}
/** Represents a PushNameSetting. */
class PushNameSetting implements IPushNameSetting {
/**
* Constructs a new PushNameSetting.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IPushNameSetting);
/** PushNameSetting name. */
public name?: (string|null);
/** PushNameSetting _name. */
public _name?: "name";
/**
* Creates a new PushNameSetting instance using the specified properties.
* @param [properties] Properties to set
* @returns PushNameSetting instance
*/
public static create(properties?: SyncAction.SyncActionValue.IPushNameSetting): SyncAction.SyncActionValue.PushNameSetting;
/**
* Encodes the specified PushNameSetting message. Does not implicitly {@link SyncAction.SyncActionValue.PushNameSetting.verify|verify} messages.
* @param message PushNameSetting message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IPushNameSetting, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified PushNameSetting message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.PushNameSetting.verify|verify} messages.
* @param message PushNameSetting message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IPushNameSetting, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a PushNameSetting message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns PushNameSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.PushNameSetting;
/**
* Decodes a PushNameSetting message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns PushNameSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.PushNameSetting;
/**
* Verifies a PushNameSetting message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a PushNameSetting message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns PushNameSetting
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.PushNameSetting;
/**
* Creates a plain object from a PushNameSetting message. Also converts values to other types if specified.
* @param message PushNameSetting
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.PushNameSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this PushNameSetting to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for PushNameSetting
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a QuickReplyAction. */
interface IQuickReplyAction {
/** QuickReplyAction shortcut */
shortcut?: (string|null);
/** QuickReplyAction message */
message?: (string|null);
/** QuickReplyAction keywords */
keywords?: (string[]|null);
/** QuickReplyAction count */
count?: (number|null);
/** QuickReplyAction deleted */
deleted?: (boolean|null);
}
/** Represents a QuickReplyAction. */
class QuickReplyAction implements IQuickReplyAction {
/**
* Constructs a new QuickReplyAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IQuickReplyAction);
/** QuickReplyAction shortcut. */
public shortcut?: (string|null);
/** QuickReplyAction message. */
public message?: (string|null);
/** QuickReplyAction keywords. */
public keywords: string[];
/** QuickReplyAction count. */
public count?: (number|null);
/** QuickReplyAction deleted. */
public deleted?: (boolean|null);
/** QuickReplyAction _shortcut. */
public _shortcut?: "shortcut";
/** QuickReplyAction _message. */
public _message?: "message";
/** QuickReplyAction _count. */
public _count?: "count";
/** QuickReplyAction _deleted. */
public _deleted?: "deleted";
/**
* Creates a new QuickReplyAction instance using the specified properties.
* @param [properties] Properties to set
* @returns QuickReplyAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IQuickReplyAction): SyncAction.SyncActionValue.QuickReplyAction;
/**
* Encodes the specified QuickReplyAction message. Does not implicitly {@link SyncAction.SyncActionValue.QuickReplyAction.verify|verify} messages.
* @param message QuickReplyAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IQuickReplyAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified QuickReplyAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.QuickReplyAction.verify|verify} messages.
* @param message QuickReplyAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IQuickReplyAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a QuickReplyAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns QuickReplyAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.QuickReplyAction;
/**
* Decodes a QuickReplyAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns QuickReplyAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.QuickReplyAction;
/**
* Verifies a QuickReplyAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a QuickReplyAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns QuickReplyAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.QuickReplyAction;
/**
* Creates a plain object from a QuickReplyAction message. Also converts values to other types if specified.
* @param message QuickReplyAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.QuickReplyAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this QuickReplyAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for QuickReplyAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a RecentEmojiWeightsAction. */
interface IRecentEmojiWeightsAction {
/** RecentEmojiWeightsAction weights */
weights?: (SyncAction.IRecentEmojiWeight[]|null);
}
/** Represents a RecentEmojiWeightsAction. */
class RecentEmojiWeightsAction implements IRecentEmojiWeightsAction {
/**
* Constructs a new RecentEmojiWeightsAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IRecentEmojiWeightsAction);
/** RecentEmojiWeightsAction weights. */
public weights: SyncAction.IRecentEmojiWeight[];
/**
* Creates a new RecentEmojiWeightsAction instance using the specified properties.
* @param [properties] Properties to set
* @returns RecentEmojiWeightsAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IRecentEmojiWeightsAction): SyncAction.SyncActionValue.RecentEmojiWeightsAction;
/**
* Encodes the specified RecentEmojiWeightsAction message. Does not implicitly {@link SyncAction.SyncActionValue.RecentEmojiWeightsAction.verify|verify} messages.
* @param message RecentEmojiWeightsAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IRecentEmojiWeightsAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified RecentEmojiWeightsAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.RecentEmojiWeightsAction.verify|verify} messages.
* @param message RecentEmojiWeightsAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IRecentEmojiWeightsAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a RecentEmojiWeightsAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns RecentEmojiWeightsAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.RecentEmojiWeightsAction;
/**
* Decodes a RecentEmojiWeightsAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns RecentEmojiWeightsAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.RecentEmojiWeightsAction;
/**
* Verifies a RecentEmojiWeightsAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a RecentEmojiWeightsAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns RecentEmojiWeightsAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.RecentEmojiWeightsAction;
/**
* Creates a plain object from a RecentEmojiWeightsAction message. Also converts values to other types if specified.
* @param message RecentEmojiWeightsAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.RecentEmojiWeightsAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this RecentEmojiWeightsAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for RecentEmojiWeightsAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a RemoveRecentStickerAction. */
interface IRemoveRecentStickerAction {
/** RemoveRecentStickerAction lastStickerSentTs */
lastStickerSentTs?: (number|Long|null);
}
/** Represents a RemoveRecentStickerAction. */
class RemoveRecentStickerAction implements IRemoveRecentStickerAction {
/**
* Constructs a new RemoveRecentStickerAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IRemoveRecentStickerAction);
/** RemoveRecentStickerAction lastStickerSentTs. */
public lastStickerSentTs?: (number|Long|null);
/** RemoveRecentStickerAction _lastStickerSentTs. */
public _lastStickerSentTs?: "lastStickerSentTs";
/**
* Creates a new RemoveRecentStickerAction instance using the specified properties.
* @param [properties] Properties to set
* @returns RemoveRecentStickerAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IRemoveRecentStickerAction): SyncAction.SyncActionValue.RemoveRecentStickerAction;
/**
* Encodes the specified RemoveRecentStickerAction message. Does not implicitly {@link SyncAction.SyncActionValue.RemoveRecentStickerAction.verify|verify} messages.
* @param message RemoveRecentStickerAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IRemoveRecentStickerAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified RemoveRecentStickerAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.RemoveRecentStickerAction.verify|verify} messages.
* @param message RemoveRecentStickerAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IRemoveRecentStickerAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a RemoveRecentStickerAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns RemoveRecentStickerAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.RemoveRecentStickerAction;
/**
* Decodes a RemoveRecentStickerAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns RemoveRecentStickerAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.RemoveRecentStickerAction;
/**
* Verifies a RemoveRecentStickerAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a RemoveRecentStickerAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns RemoveRecentStickerAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.RemoveRecentStickerAction;
/**
* Creates a plain object from a RemoveRecentStickerAction message. Also converts values to other types if specified.
* @param message RemoveRecentStickerAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.RemoveRecentStickerAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this RemoveRecentStickerAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for RemoveRecentStickerAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a SecurityNotificationSetting. */
interface ISecurityNotificationSetting {
/** SecurityNotificationSetting showNotification */
showNotification?: (boolean|null);
}
/** Represents a SecurityNotificationSetting. */
class SecurityNotificationSetting implements ISecurityNotificationSetting {
/**
* Constructs a new SecurityNotificationSetting.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ISecurityNotificationSetting);
/** SecurityNotificationSetting showNotification. */
public showNotification?: (boolean|null);
/** SecurityNotificationSetting _showNotification. */
public _showNotification?: "showNotification";
/**
* Creates a new SecurityNotificationSetting instance using the specified properties.
* @param [properties] Properties to set
* @returns SecurityNotificationSetting instance
*/
public static create(properties?: SyncAction.SyncActionValue.ISecurityNotificationSetting): SyncAction.SyncActionValue.SecurityNotificationSetting;
/**
* Encodes the specified SecurityNotificationSetting message. Does not implicitly {@link SyncAction.SyncActionValue.SecurityNotificationSetting.verify|verify} messages.
* @param message SecurityNotificationSetting message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ISecurityNotificationSetting, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified SecurityNotificationSetting message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SecurityNotificationSetting.verify|verify} messages.
* @param message SecurityNotificationSetting message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ISecurityNotificationSetting, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a SecurityNotificationSetting message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns SecurityNotificationSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.SecurityNotificationSetting;
/**
* Decodes a SecurityNotificationSetting message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns SecurityNotificationSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.SecurityNotificationSetting;
/**
* Verifies a SecurityNotificationSetting message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a SecurityNotificationSetting message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns SecurityNotificationSetting
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.SecurityNotificationSetting;
/**
* Creates a plain object from a SecurityNotificationSetting message. Also converts values to other types if specified.
* @param message SecurityNotificationSetting
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.SecurityNotificationSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this SecurityNotificationSetting to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for SecurityNotificationSetting
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a StarAction. */
interface IStarAction {
/** StarAction starred */
starred?: (boolean|null);
}
/** Represents a StarAction. */
class StarAction implements IStarAction {
/**
* Constructs a new StarAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IStarAction);
/** StarAction starred. */
public starred?: (boolean|null);
/** StarAction _starred. */
public _starred?: "starred";
/**
* Creates a new StarAction instance using the specified properties.
* @param [properties] Properties to set
* @returns StarAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IStarAction): SyncAction.SyncActionValue.StarAction;
/**
* Encodes the specified StarAction message. Does not implicitly {@link SyncAction.SyncActionValue.StarAction.verify|verify} messages.
* @param message StarAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IStarAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified StarAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.StarAction.verify|verify} messages.
* @param message StarAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IStarAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a StarAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns StarAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.StarAction;
/**
* Decodes a StarAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns StarAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.StarAction;
/**
* Verifies a StarAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a StarAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns StarAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.StarAction;
/**
* Creates a plain object from a StarAction message. Also converts values to other types if specified.
* @param message StarAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.StarAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this StarAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for StarAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a StatusPrivacyAction. */
interface IStatusPrivacyAction {
/** StatusPrivacyAction mode */
mode?: (SyncAction.SyncActionValue.StatusPrivacyAction.StatusDistributionMode|null);
/** StatusPrivacyAction userJid */
userJid?: (string[]|null);
}
/** Represents a StatusPrivacyAction. */
class StatusPrivacyAction implements IStatusPrivacyAction {
/**
* Constructs a new StatusPrivacyAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IStatusPrivacyAction);
/** StatusPrivacyAction mode. */
public mode?: (SyncAction.SyncActionValue.StatusPrivacyAction.StatusDistributionMode|null);
/** StatusPrivacyAction userJid. */
public userJid: string[];
/** StatusPrivacyAction _mode. */
public _mode?: "mode";
/**
* Creates a new StatusPrivacyAction instance using the specified properties.
* @param [properties] Properties to set
* @returns StatusPrivacyAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IStatusPrivacyAction): SyncAction.SyncActionValue.StatusPrivacyAction;
/**
* Encodes the specified StatusPrivacyAction message. Does not implicitly {@link SyncAction.SyncActionValue.StatusPrivacyAction.verify|verify} messages.
* @param message StatusPrivacyAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IStatusPrivacyAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified StatusPrivacyAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.StatusPrivacyAction.verify|verify} messages.
* @param message StatusPrivacyAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IStatusPrivacyAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a StatusPrivacyAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns StatusPrivacyAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.StatusPrivacyAction;
/**
* Decodes a StatusPrivacyAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns StatusPrivacyAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.StatusPrivacyAction;
/**
* Verifies a StatusPrivacyAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a StatusPrivacyAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns StatusPrivacyAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.StatusPrivacyAction;
/**
* Creates a plain object from a StatusPrivacyAction message. Also converts values to other types if specified.
* @param message StatusPrivacyAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.StatusPrivacyAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this StatusPrivacyAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for StatusPrivacyAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace StatusPrivacyAction {
/** StatusDistributionMode enum. */
enum StatusDistributionMode {
ALLOW_LIST = 0,
DENY_LIST = 1,
CONTACTS = 2
}
}
/** Properties of a StickerAction. */
interface IStickerAction {
/** StickerAction url */
url?: (string|null);
/** StickerAction fileEncSha256 */
fileEncSha256?: (Uint8Array|null);
/** StickerAction mediaKey */
mediaKey?: (Uint8Array|null);
/** StickerAction mimetype */
mimetype?: (string|null);
/** StickerAction height */
height?: (number|null);
/** StickerAction width */
width?: (number|null);
/** StickerAction directPath */
directPath?: (string|null);
/** StickerAction fileLength */
fileLength?: (number|Long|null);
/** StickerAction isFavorite */
isFavorite?: (boolean|null);
/** StickerAction deviceIdHint */
deviceIdHint?: (number|null);
/** StickerAction isLottie */
isLottie?: (boolean|null);
}
/** Represents a StickerAction. */
class StickerAction implements IStickerAction {
/**
* Constructs a new StickerAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IStickerAction);
/** StickerAction url. */
public url?: (string|null);
/** StickerAction fileEncSha256. */
public fileEncSha256?: (Uint8Array|null);
/** StickerAction mediaKey. */
public mediaKey?: (Uint8Array|null);
/** StickerAction mimetype. */
public mimetype?: (string|null);
/** StickerAction height. */
public height?: (number|null);
/** StickerAction width. */
public width?: (number|null);
/** StickerAction directPath. */
public directPath?: (string|null);
/** StickerAction fileLength. */
public fileLength?: (number|Long|null);
/** StickerAction isFavorite. */
public isFavorite?: (boolean|null);
/** StickerAction deviceIdHint. */
public deviceIdHint?: (number|null);
/** StickerAction isLottie. */
public isLottie?: (boolean|null);
/** StickerAction _url. */
public _url?: "url";
/** StickerAction _fileEncSha256. */
public _fileEncSha256?: "fileEncSha256";
/** StickerAction _mediaKey. */
public _mediaKey?: "mediaKey";
/** StickerAction _mimetype. */
public _mimetype?: "mimetype";
/** StickerAction _height. */
public _height?: "height";
/** StickerAction _width. */
public _width?: "width";
/** StickerAction _directPath. */
public _directPath?: "directPath";
/** StickerAction _fileLength. */
public _fileLength?: "fileLength";
/** StickerAction _isFavorite. */
public _isFavorite?: "isFavorite";
/** StickerAction _deviceIdHint. */
public _deviceIdHint?: "deviceIdHint";
/** StickerAction _isLottie. */
public _isLottie?: "isLottie";
/**
* Creates a new StickerAction instance using the specified properties.
* @param [properties] Properties to set
* @returns StickerAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IStickerAction): SyncAction.SyncActionValue.StickerAction;
/**
* Encodes the specified StickerAction message. Does not implicitly {@link SyncAction.SyncActionValue.StickerAction.verify|verify} messages.
* @param message StickerAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IStickerAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified StickerAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.StickerAction.verify|verify} messages.
* @param message StickerAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IStickerAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a StickerAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns StickerAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.StickerAction;
/**
* Decodes a StickerAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns StickerAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.StickerAction;
/**
* Verifies a StickerAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a StickerAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns StickerAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.StickerAction;
/**
* Creates a plain object from a StickerAction message. Also converts values to other types if specified.
* @param message StickerAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.StickerAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this StickerAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for StickerAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a SubscriptionAction. */
interface ISubscriptionAction {
/** SubscriptionAction isDeactivated */
isDeactivated?: (boolean|null);
/** SubscriptionAction isAutoRenewing */
isAutoRenewing?: (boolean|null);
/** SubscriptionAction expirationDate */
expirationDate?: (number|Long|null);
}
/** Represents a SubscriptionAction. */
class SubscriptionAction implements ISubscriptionAction {
/**
* Constructs a new SubscriptionAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ISubscriptionAction);
/** SubscriptionAction isDeactivated. */
public isDeactivated?: (boolean|null);
/** SubscriptionAction isAutoRenewing. */
public isAutoRenewing?: (boolean|null);
/** SubscriptionAction expirationDate. */
public expirationDate?: (number|Long|null);
/** SubscriptionAction _isDeactivated. */
public _isDeactivated?: "isDeactivated";
/** SubscriptionAction _isAutoRenewing. */
public _isAutoRenewing?: "isAutoRenewing";
/** SubscriptionAction _expirationDate. */
public _expirationDate?: "expirationDate";
/**
* Creates a new SubscriptionAction instance using the specified properties.
* @param [properties] Properties to set
* @returns SubscriptionAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.ISubscriptionAction): SyncAction.SyncActionValue.SubscriptionAction;
/**
* Encodes the specified SubscriptionAction message. Does not implicitly {@link SyncAction.SyncActionValue.SubscriptionAction.verify|verify} messages.
* @param message SubscriptionAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ISubscriptionAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified SubscriptionAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SubscriptionAction.verify|verify} messages.
* @param message SubscriptionAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ISubscriptionAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a SubscriptionAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns SubscriptionAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.SubscriptionAction;
/**
* Decodes a SubscriptionAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns SubscriptionAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.SubscriptionAction;
/**
* Verifies a SubscriptionAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a SubscriptionAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns SubscriptionAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.SubscriptionAction;
/**
* Creates a plain object from a SubscriptionAction message. Also converts values to other types if specified.
* @param message SubscriptionAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.SubscriptionAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this SubscriptionAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for SubscriptionAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a SyncActionMessage. */
interface ISyncActionMessage {
/** SyncActionMessage key */
key?: (Protocol.IMessageKey|null);
/** SyncActionMessage timestamp */
timestamp?: (number|Long|null);
}
/** Represents a SyncActionMessage. */
class SyncActionMessage implements ISyncActionMessage {
/**
* Constructs a new SyncActionMessage.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ISyncActionMessage);
/** SyncActionMessage key. */
public key?: (Protocol.IMessageKey|null);
/** SyncActionMessage timestamp. */
public timestamp?: (number|Long|null);
/** SyncActionMessage _key. */
public _key?: "key";
/** SyncActionMessage _timestamp. */
public _timestamp?: "timestamp";
/**
* Creates a new SyncActionMessage instance using the specified properties.
* @param [properties] Properties to set
* @returns SyncActionMessage instance
*/
public static create(properties?: SyncAction.SyncActionValue.ISyncActionMessage): SyncAction.SyncActionValue.SyncActionMessage;
/**
* Encodes the specified SyncActionMessage message. Does not implicitly {@link SyncAction.SyncActionValue.SyncActionMessage.verify|verify} messages.
* @param message SyncActionMessage message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ISyncActionMessage, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified SyncActionMessage message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SyncActionMessage.verify|verify} messages.
* @param message SyncActionMessage message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ISyncActionMessage, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a SyncActionMessage message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns SyncActionMessage
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.SyncActionMessage;
/**
* Decodes a SyncActionMessage message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns SyncActionMessage
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.SyncActionMessage;
/**
* Verifies a SyncActionMessage message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a SyncActionMessage message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns SyncActionMessage
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.SyncActionMessage;
/**
* Creates a plain object from a SyncActionMessage message. Also converts values to other types if specified.
* @param message SyncActionMessage
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.SyncActionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this SyncActionMessage to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for SyncActionMessage
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a SyncActionMessageRange. */
interface ISyncActionMessageRange {
/** SyncActionMessageRange lastMessageTimestamp */
lastMessageTimestamp?: (number|Long|null);
/** SyncActionMessageRange lastSystemMessageTimestamp */
lastSystemMessageTimestamp?: (number|Long|null);
/** SyncActionMessageRange messages */
messages?: (SyncAction.SyncActionValue.ISyncActionMessage[]|null);
}
/** Represents a SyncActionMessageRange. */
class SyncActionMessageRange implements ISyncActionMessageRange {
/**
* Constructs a new SyncActionMessageRange.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ISyncActionMessageRange);
/** SyncActionMessageRange lastMessageTimestamp. */
public lastMessageTimestamp?: (number|Long|null);
/** SyncActionMessageRange lastSystemMessageTimestamp. */
public lastSystemMessageTimestamp?: (number|Long|null);
/** SyncActionMessageRange messages. */
public messages: SyncAction.SyncActionValue.ISyncActionMessage[];
/** SyncActionMessageRange _lastMessageTimestamp. */
public _lastMessageTimestamp?: "lastMessageTimestamp";
/** SyncActionMessageRange _lastSystemMessageTimestamp. */
public _lastSystemMessageTimestamp?: "lastSystemMessageTimestamp";
/**
* Creates a new SyncActionMessageRange instance using the specified properties.
* @param [properties] Properties to set
* @returns SyncActionMessageRange instance
*/
public static create(properties?: SyncAction.SyncActionValue.ISyncActionMessageRange): SyncAction.SyncActionValue.SyncActionMessageRange;
/**
* Encodes the specified SyncActionMessageRange message. Does not implicitly {@link SyncAction.SyncActionValue.SyncActionMessageRange.verify|verify} messages.
* @param message SyncActionMessageRange message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ISyncActionMessageRange, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified SyncActionMessageRange message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.SyncActionMessageRange.verify|verify} messages.
* @param message SyncActionMessageRange message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ISyncActionMessageRange, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a SyncActionMessageRange message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns SyncActionMessageRange
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.SyncActionMessageRange;
/**
* Decodes a SyncActionMessageRange message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns SyncActionMessageRange
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.SyncActionMessageRange;
/**
* Verifies a SyncActionMessageRange message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a SyncActionMessageRange message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns SyncActionMessageRange
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.SyncActionMessageRange;
/**
* Creates a plain object from a SyncActionMessageRange message. Also converts values to other types if specified.
* @param message SyncActionMessageRange
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.SyncActionMessageRange, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this SyncActionMessageRange to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for SyncActionMessageRange
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a TimeFormatAction. */
interface ITimeFormatAction {
/** TimeFormatAction isTwentyFourHourFormatEnabled */
isTwentyFourHourFormatEnabled?: (boolean|null);
}
/** Represents a TimeFormatAction. */
class TimeFormatAction implements ITimeFormatAction {
/**
* Constructs a new TimeFormatAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.ITimeFormatAction);
/** TimeFormatAction isTwentyFourHourFormatEnabled. */
public isTwentyFourHourFormatEnabled?: (boolean|null);
/** TimeFormatAction _isTwentyFourHourFormatEnabled. */
public _isTwentyFourHourFormatEnabled?: "isTwentyFourHourFormatEnabled";
/**
* Creates a new TimeFormatAction instance using the specified properties.
* @param [properties] Properties to set
* @returns TimeFormatAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.ITimeFormatAction): SyncAction.SyncActionValue.TimeFormatAction;
/**
* Encodes the specified TimeFormatAction message. Does not implicitly {@link SyncAction.SyncActionValue.TimeFormatAction.verify|verify} messages.
* @param message TimeFormatAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.ITimeFormatAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified TimeFormatAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.TimeFormatAction.verify|verify} messages.
* @param message TimeFormatAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.ITimeFormatAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a TimeFormatAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns TimeFormatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.TimeFormatAction;
/**
* Decodes a TimeFormatAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns TimeFormatAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.TimeFormatAction;
/**
* Verifies a TimeFormatAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a TimeFormatAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns TimeFormatAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.TimeFormatAction;
/**
* Creates a plain object from a TimeFormatAction message. Also converts values to other types if specified.
* @param message TimeFormatAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.TimeFormatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this TimeFormatAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for TimeFormatAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of an UnarchiveChatsSetting. */
interface IUnarchiveChatsSetting {
/** UnarchiveChatsSetting unarchiveChats */
unarchiveChats?: (boolean|null);
}
/** Represents an UnarchiveChatsSetting. */
class UnarchiveChatsSetting implements IUnarchiveChatsSetting {
/**
* Constructs a new UnarchiveChatsSetting.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IUnarchiveChatsSetting);
/** UnarchiveChatsSetting unarchiveChats. */
public unarchiveChats?: (boolean|null);
/** UnarchiveChatsSetting _unarchiveChats. */
public _unarchiveChats?: "unarchiveChats";
/**
* Creates a new UnarchiveChatsSetting instance using the specified properties.
* @param [properties] Properties to set
* @returns UnarchiveChatsSetting instance
*/
public static create(properties?: SyncAction.SyncActionValue.IUnarchiveChatsSetting): SyncAction.SyncActionValue.UnarchiveChatsSetting;
/**
* Encodes the specified UnarchiveChatsSetting message. Does not implicitly {@link SyncAction.SyncActionValue.UnarchiveChatsSetting.verify|verify} messages.
* @param message UnarchiveChatsSetting message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IUnarchiveChatsSetting, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified UnarchiveChatsSetting message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.UnarchiveChatsSetting.verify|verify} messages.
* @param message UnarchiveChatsSetting message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IUnarchiveChatsSetting, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes an UnarchiveChatsSetting message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns UnarchiveChatsSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.UnarchiveChatsSetting;
/**
* Decodes an UnarchiveChatsSetting message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns UnarchiveChatsSetting
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.UnarchiveChatsSetting;
/**
* Verifies an UnarchiveChatsSetting message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates an UnarchiveChatsSetting message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns UnarchiveChatsSetting
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.UnarchiveChatsSetting;
/**
* Creates a plain object from an UnarchiveChatsSetting message. Also converts values to other types if specified.
* @param message UnarchiveChatsSetting
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.UnarchiveChatsSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this UnarchiveChatsSetting to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for UnarchiveChatsSetting
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a UserStatusMuteAction. */
interface IUserStatusMuteAction {
/** UserStatusMuteAction muted */
muted?: (boolean|null);
}
/** Represents a UserStatusMuteAction. */
class UserStatusMuteAction implements IUserStatusMuteAction {
/**
* Constructs a new UserStatusMuteAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IUserStatusMuteAction);
/** UserStatusMuteAction muted. */
public muted?: (boolean|null);
/** UserStatusMuteAction _muted. */
public _muted?: "muted";
/**
* Creates a new UserStatusMuteAction instance using the specified properties.
* @param [properties] Properties to set
* @returns UserStatusMuteAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IUserStatusMuteAction): SyncAction.SyncActionValue.UserStatusMuteAction;
/**
* Encodes the specified UserStatusMuteAction message. Does not implicitly {@link SyncAction.SyncActionValue.UserStatusMuteAction.verify|verify} messages.
* @param message UserStatusMuteAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IUserStatusMuteAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified UserStatusMuteAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.UserStatusMuteAction.verify|verify} messages.
* @param message UserStatusMuteAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IUserStatusMuteAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a UserStatusMuteAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns UserStatusMuteAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.UserStatusMuteAction;
/**
* Decodes a UserStatusMuteAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns UserStatusMuteAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.UserStatusMuteAction;
/**
* Verifies a UserStatusMuteAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a UserStatusMuteAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns UserStatusMuteAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.UserStatusMuteAction;
/**
* Creates a plain object from a UserStatusMuteAction message. Also converts values to other types if specified.
* @param message UserStatusMuteAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.UserStatusMuteAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this UserStatusMuteAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for UserStatusMuteAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** Properties of a UsernameChatStartModeAction. */
interface IUsernameChatStartModeAction {
/** UsernameChatStartModeAction chatStartMode */
chatStartMode?: (SyncAction.SyncActionValue.UsernameChatStartModeAction.ChatStartMode|null);
}
/** Represents a UsernameChatStartModeAction. */
class UsernameChatStartModeAction implements IUsernameChatStartModeAction {
/**
* Constructs a new UsernameChatStartModeAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IUsernameChatStartModeAction);
/** UsernameChatStartModeAction chatStartMode. */
public chatStartMode?: (SyncAction.SyncActionValue.UsernameChatStartModeAction.ChatStartMode|null);
/** UsernameChatStartModeAction _chatStartMode. */
public _chatStartMode?: "chatStartMode";
/**
* Creates a new UsernameChatStartModeAction instance using the specified properties.
* @param [properties] Properties to set
* @returns UsernameChatStartModeAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IUsernameChatStartModeAction): SyncAction.SyncActionValue.UsernameChatStartModeAction;
/**
* Encodes the specified UsernameChatStartModeAction message. Does not implicitly {@link SyncAction.SyncActionValue.UsernameChatStartModeAction.verify|verify} messages.
* @param message UsernameChatStartModeAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IUsernameChatStartModeAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified UsernameChatStartModeAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.UsernameChatStartModeAction.verify|verify} messages.
* @param message UsernameChatStartModeAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IUsernameChatStartModeAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a UsernameChatStartModeAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns UsernameChatStartModeAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.UsernameChatStartModeAction;
/**
* Decodes a UsernameChatStartModeAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns UsernameChatStartModeAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.UsernameChatStartModeAction;
/**
* Verifies a UsernameChatStartModeAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a UsernameChatStartModeAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns UsernameChatStartModeAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.UsernameChatStartModeAction;
/**
* Creates a plain object from a UsernameChatStartModeAction message. Also converts values to other types if specified.
* @param message UsernameChatStartModeAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.UsernameChatStartModeAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this UsernameChatStartModeAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for UsernameChatStartModeAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace UsernameChatStartModeAction {
/** ChatStartMode enum. */
enum ChatStartMode {
LID = 1,
PN = 2
}
}
/** Properties of a WaffleAccountLinkStateAction. */
interface IWaffleAccountLinkStateAction {
/** WaffleAccountLinkStateAction linkState */
linkState?: (SyncAction.SyncActionValue.WaffleAccountLinkStateAction.AccountLinkState|null);
}
/** Represents a WaffleAccountLinkStateAction. */
class WaffleAccountLinkStateAction implements IWaffleAccountLinkStateAction {
/**
* Constructs a new WaffleAccountLinkStateAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IWaffleAccountLinkStateAction);
/** WaffleAccountLinkStateAction linkState. */
public linkState?: (SyncAction.SyncActionValue.WaffleAccountLinkStateAction.AccountLinkState|null);
/** WaffleAccountLinkStateAction _linkState. */
public _linkState?: "linkState";
/**
* Creates a new WaffleAccountLinkStateAction instance using the specified properties.
* @param [properties] Properties to set
* @returns WaffleAccountLinkStateAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IWaffleAccountLinkStateAction): SyncAction.SyncActionValue.WaffleAccountLinkStateAction;
/**
* Encodes the specified WaffleAccountLinkStateAction message. Does not implicitly {@link SyncAction.SyncActionValue.WaffleAccountLinkStateAction.verify|verify} messages.
* @param message WaffleAccountLinkStateAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IWaffleAccountLinkStateAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified WaffleAccountLinkStateAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.WaffleAccountLinkStateAction.verify|verify} messages.
* @param message WaffleAccountLinkStateAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IWaffleAccountLinkStateAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a WaffleAccountLinkStateAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns WaffleAccountLinkStateAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.WaffleAccountLinkStateAction;
/**
* Decodes a WaffleAccountLinkStateAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns WaffleAccountLinkStateAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.WaffleAccountLinkStateAction;
/**
* Verifies a WaffleAccountLinkStateAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a WaffleAccountLinkStateAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns WaffleAccountLinkStateAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.WaffleAccountLinkStateAction;
/**
* Creates a plain object from a WaffleAccountLinkStateAction message. Also converts values to other types if specified.
* @param message WaffleAccountLinkStateAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.WaffleAccountLinkStateAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this WaffleAccountLinkStateAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for WaffleAccountLinkStateAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace WaffleAccountLinkStateAction {
/** AccountLinkState enum. */
enum AccountLinkState {
ACTIVE = 0
}
}
/** Properties of a WamoUserIdentifierAction. */
interface IWamoUserIdentifierAction {
/** WamoUserIdentifierAction identifier */
identifier?: (string|null);
}
/** Represents a WamoUserIdentifierAction. */
class WamoUserIdentifierAction implements IWamoUserIdentifierAction {
/**
* Constructs a new WamoUserIdentifierAction.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.SyncActionValue.IWamoUserIdentifierAction);
/** WamoUserIdentifierAction identifier. */
public identifier?: (string|null);
/** WamoUserIdentifierAction _identifier. */
public _identifier?: "identifier";
/**
* Creates a new WamoUserIdentifierAction instance using the specified properties.
* @param [properties] Properties to set
* @returns WamoUserIdentifierAction instance
*/
public static create(properties?: SyncAction.SyncActionValue.IWamoUserIdentifierAction): SyncAction.SyncActionValue.WamoUserIdentifierAction;
/**
* Encodes the specified WamoUserIdentifierAction message. Does not implicitly {@link SyncAction.SyncActionValue.WamoUserIdentifierAction.verify|verify} messages.
* @param message WamoUserIdentifierAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.SyncActionValue.IWamoUserIdentifierAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified WamoUserIdentifierAction message, length delimited. Does not implicitly {@link SyncAction.SyncActionValue.WamoUserIdentifierAction.verify|verify} messages.
* @param message WamoUserIdentifierAction message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.SyncActionValue.IWamoUserIdentifierAction, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a WamoUserIdentifierAction message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns WamoUserIdentifierAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.SyncActionValue.WamoUserIdentifierAction;
/**
* Decodes a WamoUserIdentifierAction message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns WamoUserIdentifierAction
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.SyncActionValue.WamoUserIdentifierAction;
/**
* Verifies a WamoUserIdentifierAction message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a WamoUserIdentifierAction message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns WamoUserIdentifierAction
*/
public static fromObject(object: { [k: string]: any }): SyncAction.SyncActionValue.WamoUserIdentifierAction;
/**
* Creates a plain object from a WamoUserIdentifierAction message. Also converts values to other types if specified.
* @param message WamoUserIdentifierAction
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.SyncActionValue.WamoUserIdentifierAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this WamoUserIdentifierAction to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for WamoUserIdentifierAction
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
}
/** Properties of a CallLogRecord. */
interface ICallLogRecord {
/** CallLogRecord callResult */
callResult?: (SyncAction.CallLogRecord.CallResult|null);
/** CallLogRecord isDndMode */
isDndMode?: (boolean|null);
/** CallLogRecord silenceReason */
silenceReason?: (SyncAction.CallLogRecord.SilenceReason|null);
/** CallLogRecord duration */
duration?: (number|Long|null);
/** CallLogRecord startTime */
startTime?: (number|Long|null);
/** CallLogRecord isIncoming */
isIncoming?: (boolean|null);
/** CallLogRecord isVideo */
isVideo?: (boolean|null);
/** CallLogRecord isCallLink */
isCallLink?: (boolean|null);
/** CallLogRecord callLinkToken */
callLinkToken?: (string|null);
/** CallLogRecord scheduledCallId */
scheduledCallId?: (string|null);
/** CallLogRecord callId */
callId?: (string|null);
/** CallLogRecord callCreatorJid */
callCreatorJid?: (string|null);
/** CallLogRecord groupJid */
groupJid?: (string|null);
/** CallLogRecord participants */
participants?: (SyncAction.CallLogRecord.IParticipantInfo[]|null);
/** CallLogRecord callType */
callType?: (SyncAction.CallLogRecord.CallType|null);
}
/** Represents a CallLogRecord. */
class CallLogRecord implements ICallLogRecord {
/**
* Constructs a new CallLogRecord.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.ICallLogRecord);
/** CallLogRecord callResult. */
public callResult?: (SyncAction.CallLogRecord.CallResult|null);
/** CallLogRecord isDndMode. */
public isDndMode?: (boolean|null);
/** CallLogRecord silenceReason. */
public silenceReason?: (SyncAction.CallLogRecord.SilenceReason|null);
/** CallLogRecord duration. */
public duration?: (number|Long|null);
/** CallLogRecord startTime. */
public startTime?: (number|Long|null);
/** CallLogRecord isIncoming. */
public isIncoming?: (boolean|null);
/** CallLogRecord isVideo. */
public isVideo?: (boolean|null);
/** CallLogRecord isCallLink. */
public isCallLink?: (boolean|null);
/** CallLogRecord callLinkToken. */
public callLinkToken?: (string|null);
/** CallLogRecord scheduledCallId. */
public scheduledCallId?: (string|null);
/** CallLogRecord callId. */
public callId?: (string|null);
/** CallLogRecord callCreatorJid. */
public callCreatorJid?: (string|null);
/** CallLogRecord groupJid. */
public groupJid?: (string|null);
/** CallLogRecord participants. */
public participants: SyncAction.CallLogRecord.IParticipantInfo[];
/** CallLogRecord callType. */
public callType?: (SyncAction.CallLogRecord.CallType|null);
/** CallLogRecord _callResult. */
public _callResult?: "callResult";
/** CallLogRecord _isDndMode. */
public _isDndMode?: "isDndMode";
/** CallLogRecord _silenceReason. */
public _silenceReason?: "silenceReason";
/** CallLogRecord _duration. */
public _duration?: "duration";
/** CallLogRecord _startTime. */
public _startTime?: "startTime";
/** CallLogRecord _isIncoming. */
public _isIncoming?: "isIncoming";
/** CallLogRecord _isVideo. */
public _isVideo?: "isVideo";
/** CallLogRecord _isCallLink. */
public _isCallLink?: "isCallLink";
/** CallLogRecord _callLinkToken. */
public _callLinkToken?: "callLinkToken";
/** CallLogRecord _scheduledCallId. */
public _scheduledCallId?: "scheduledCallId";
/** CallLogRecord _callId. */
public _callId?: "callId";
/** CallLogRecord _callCreatorJid. */
public _callCreatorJid?: "callCreatorJid";
/** CallLogRecord _groupJid. */
public _groupJid?: "groupJid";
/** CallLogRecord _callType. */
public _callType?: "callType";
/**
* Creates a new CallLogRecord instance using the specified properties.
* @param [properties] Properties to set
* @returns CallLogRecord instance
*/
public static create(properties?: SyncAction.ICallLogRecord): SyncAction.CallLogRecord;
/**
* Encodes the specified CallLogRecord message. Does not implicitly {@link SyncAction.CallLogRecord.verify|verify} messages.
* @param message CallLogRecord message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.ICallLogRecord, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified CallLogRecord message, length delimited. Does not implicitly {@link SyncAction.CallLogRecord.verify|verify} messages.
* @param message CallLogRecord message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.ICallLogRecord, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a CallLogRecord message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns CallLogRecord
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.CallLogRecord;
/**
* Decodes a CallLogRecord message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns CallLogRecord
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.CallLogRecord;
/**
* Verifies a CallLogRecord message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a CallLogRecord message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns CallLogRecord
*/
public static fromObject(object: { [k: string]: any }): SyncAction.CallLogRecord;
/**
* Creates a plain object from a CallLogRecord message. Also converts values to other types if specified.
* @param message CallLogRecord
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.CallLogRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this CallLogRecord to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for CallLogRecord
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace CallLogRecord {
/** CallResult enum. */
enum CallResult {
CONNECTED = 0,
REJECTED = 1,
CANCELLED = 2,
ACCEPTEDELSEWHERE = 3,
MISSED = 4,
INVALID = 5,
UNAVAILABLE = 6,
UPCOMING = 7,
FAILED = 8,
ABANDONED = 9,
ONGOING = 10
}
/** CallType enum. */
enum CallType {
REGULAR = 0,
SCHEDULED_CALL = 1,
VOICE_CHAT = 2
}
/** Properties of a ParticipantInfo. */
interface IParticipantInfo {
/** ParticipantInfo userJid */
userJid?: (string|null);
/** ParticipantInfo callResult */
callResult?: (SyncAction.CallLogRecord.CallResult|null);
}
/** Represents a ParticipantInfo. */
class ParticipantInfo implements IParticipantInfo {
/**
* Constructs a new ParticipantInfo.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.CallLogRecord.IParticipantInfo);
/** ParticipantInfo userJid. */
public userJid?: (string|null);
/** ParticipantInfo callResult. */
public callResult?: (SyncAction.CallLogRecord.CallResult|null);
/** ParticipantInfo _userJid. */
public _userJid?: "userJid";
/** ParticipantInfo _callResult. */
public _callResult?: "callResult";
/**
* Creates a new ParticipantInfo instance using the specified properties.
* @param [properties] Properties to set
* @returns ParticipantInfo instance
*/
public static create(properties?: SyncAction.CallLogRecord.IParticipantInfo): SyncAction.CallLogRecord.ParticipantInfo;
/**
* Encodes the specified ParticipantInfo message. Does not implicitly {@link SyncAction.CallLogRecord.ParticipantInfo.verify|verify} messages.
* @param message ParticipantInfo message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.CallLogRecord.IParticipantInfo, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified ParticipantInfo message, length delimited. Does not implicitly {@link SyncAction.CallLogRecord.ParticipantInfo.verify|verify} messages.
* @param message ParticipantInfo message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.CallLogRecord.IParticipantInfo, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a ParticipantInfo message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns ParticipantInfo
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.CallLogRecord.ParticipantInfo;
/**
* Decodes a ParticipantInfo message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns ParticipantInfo
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.CallLogRecord.ParticipantInfo;
/**
* Verifies a ParticipantInfo message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a ParticipantInfo message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns ParticipantInfo
*/
public static fromObject(object: { [k: string]: any }): SyncAction.CallLogRecord.ParticipantInfo;
/**
* Creates a plain object from a ParticipantInfo message. Also converts values to other types if specified.
* @param message ParticipantInfo
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.CallLogRecord.ParticipantInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this ParticipantInfo to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for ParticipantInfo
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
/** SilenceReason enum. */
enum SilenceReason {
NONE = 0,
SCHEDULED = 1,
PRIVACY = 2,
LIGHTWEIGHT = 3
}
}
/** Properties of a RecentEmojiWeight. */
interface IRecentEmojiWeight {
/** RecentEmojiWeight emoji */
emoji?: (string|null);
/** RecentEmojiWeight weight */
weight?: (number|null);
}
/** Represents a RecentEmojiWeight. */
class RecentEmojiWeight implements IRecentEmojiWeight {
/**
* Constructs a new RecentEmojiWeight.
* @param [properties] Properties to set
*/
constructor(properties?: SyncAction.IRecentEmojiWeight);
/** RecentEmojiWeight emoji. */
public emoji?: (string|null);
/** RecentEmojiWeight weight. */
public weight?: (number|null);
/** RecentEmojiWeight _emoji. */
public _emoji?: "emoji";
/** RecentEmojiWeight _weight. */
public _weight?: "weight";
/**
* Creates a new RecentEmojiWeight instance using the specified properties.
* @param [properties] Properties to set
* @returns RecentEmojiWeight instance
*/
public static create(properties?: SyncAction.IRecentEmojiWeight): SyncAction.RecentEmojiWeight;
/**
* Encodes the specified RecentEmojiWeight message. Does not implicitly {@link SyncAction.RecentEmojiWeight.verify|verify} messages.
* @param message RecentEmojiWeight message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: SyncAction.IRecentEmojiWeight, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified RecentEmojiWeight message, length delimited. Does not implicitly {@link SyncAction.RecentEmojiWeight.verify|verify} messages.
* @param message RecentEmojiWeight message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: SyncAction.IRecentEmojiWeight, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a RecentEmojiWeight message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns RecentEmojiWeight
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SyncAction.RecentEmojiWeight;
/**
* Decodes a RecentEmojiWeight message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns RecentEmojiWeight
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncAction.RecentEmojiWeight;
/**
* Verifies a RecentEmojiWeight message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a RecentEmojiWeight message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns RecentEmojiWeight
*/
public static fromObject(object: { [k: string]: any }): SyncAction.RecentEmojiWeight;
/**
* Creates a plain object from a RecentEmojiWeight message. Also converts values to other types if specified.
* @param message RecentEmojiWeight
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: SyncAction.RecentEmojiWeight, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this RecentEmojiWeight to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for RecentEmojiWeight
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
}
/** Namespace ChatLockSettings. */
export namespace ChatLockSettings {
/** Properties of a ChatLockSettings. */
interface IChatLockSettings {
/** ChatLockSettings hideLockedChats */
hideLockedChats?: (boolean|null);
/** ChatLockSettings secretCode */
secretCode?: (UserPassword.IUserPassword|null);
}
/** Represents a ChatLockSettings. */
class ChatLockSettings implements IChatLockSettings {
/**
* Constructs a new ChatLockSettings.
* @param [properties] Properties to set
*/
constructor(properties?: ChatLockSettings.IChatLockSettings);
/** ChatLockSettings hideLockedChats. */
public hideLockedChats?: (boolean|null);
/** ChatLockSettings secretCode. */
public secretCode?: (UserPassword.IUserPassword|null);
/** ChatLockSettings _hideLockedChats. */
public _hideLockedChats?: "hideLockedChats";
/** ChatLockSettings _secretCode. */
public _secretCode?: "secretCode";
/**
* Creates a new ChatLockSettings instance using the specified properties.
* @param [properties] Properties to set
* @returns ChatLockSettings instance
*/
public static create(properties?: ChatLockSettings.IChatLockSettings): ChatLockSettings.ChatLockSettings;
/**
* Encodes the specified ChatLockSettings message. Does not implicitly {@link ChatLockSettings.ChatLockSettings.verify|verify} messages.
* @param message ChatLockSettings message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: ChatLockSettings.IChatLockSettings, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified ChatLockSettings message, length delimited. Does not implicitly {@link ChatLockSettings.ChatLockSettings.verify|verify} messages.
* @param message ChatLockSettings message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: ChatLockSettings.IChatLockSettings, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a ChatLockSettings message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns ChatLockSettings
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatLockSettings.ChatLockSettings;
/**
* Decodes a ChatLockSettings message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns ChatLockSettings
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatLockSettings.ChatLockSettings;
/**
* Verifies a ChatLockSettings message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a ChatLockSettings message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns ChatLockSettings
*/
public static fromObject(object: { [k: string]: any }): ChatLockSettings.ChatLockSettings;
/**
* Creates a plain object from a ChatLockSettings message. Also converts values to other types if specified.
* @param message ChatLockSettings
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: ChatLockSettings.ChatLockSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this ChatLockSettings to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for ChatLockSettings
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
}
/** Namespace UserPassword. */
export namespace UserPassword {
/** Properties of a UserPassword. */
interface IUserPassword {
/** UserPassword encoding */
encoding?: (UserPassword.UserPassword.Encoding|null);
/** UserPassword transformer */
transformer?: (UserPassword.UserPassword.Transformer|null);
/** UserPassword transformerArg */
transformerArg?: (UserPassword.UserPassword.ITransformerArg[]|null);
/** UserPassword transformedData */
transformedData?: (Uint8Array|null);
}
/** Represents a UserPassword. */
class UserPassword implements IUserPassword {
/**
* Constructs a new UserPassword.
* @param [properties] Properties to set
*/
constructor(properties?: UserPassword.IUserPassword);
/** UserPassword encoding. */
public encoding?: (UserPassword.UserPassword.Encoding|null);
/** UserPassword transformer. */
public transformer?: (UserPassword.UserPassword.Transformer|null);
/** UserPassword transformerArg. */
public transformerArg: UserPassword.UserPassword.ITransformerArg[];
/** UserPassword transformedData. */
public transformedData?: (Uint8Array|null);
/** UserPassword _encoding. */
public _encoding?: "encoding";
/** UserPassword _transformer. */
public _transformer?: "transformer";
/** UserPassword _transformedData. */
public _transformedData?: "transformedData";
/**
* Creates a new UserPassword instance using the specified properties.
* @param [properties] Properties to set
* @returns UserPassword instance
*/
public static create(properties?: UserPassword.IUserPassword): UserPassword.UserPassword;
/**
* Encodes the specified UserPassword message. Does not implicitly {@link UserPassword.UserPassword.verify|verify} messages.
* @param message UserPassword message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: UserPassword.IUserPassword, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified UserPassword message, length delimited. Does not implicitly {@link UserPassword.UserPassword.verify|verify} messages.
* @param message UserPassword message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: UserPassword.IUserPassword, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a UserPassword message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns UserPassword
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPassword.UserPassword;
/**
* Decodes a UserPassword message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns UserPassword
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPassword.UserPassword;
/**
* Verifies a UserPassword message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a UserPassword message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns UserPassword
*/
public static fromObject(object: { [k: string]: any }): UserPassword.UserPassword;
/**
* Creates a plain object from a UserPassword message. Also converts values to other types if specified.
* @param message UserPassword
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: UserPassword.UserPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this UserPassword to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for UserPassword
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace UserPassword {
/** Encoding enum. */
enum Encoding {
UTF8 = 0,
UTF8_BROKEN = 1
}
/** Transformer enum. */
enum Transformer {
NONE = 0,
PBKDF2_HMAC_SHA512 = 1,
PBKDF2_HMAC_SHA384 = 2
}
/** Properties of a TransformerArg. */
interface ITransformerArg {
/** TransformerArg key */
key?: (string|null);
/** TransformerArg value */
value?: (UserPassword.UserPassword.TransformerArg.IValue|null);
}
/** Represents a TransformerArg. */
class TransformerArg implements ITransformerArg {
/**
* Constructs a new TransformerArg.
* @param [properties] Properties to set
*/
constructor(properties?: UserPassword.UserPassword.ITransformerArg);
/** TransformerArg key. */
public key?: (string|null);
/** TransformerArg value. */
public value?: (UserPassword.UserPassword.TransformerArg.IValue|null);
/** TransformerArg _key. */
public _key?: "key";
/** TransformerArg _value. */
public _value?: "value";
/**
* Creates a new TransformerArg instance using the specified properties.
* @param [properties] Properties to set
* @returns TransformerArg instance
*/
public static create(properties?: UserPassword.UserPassword.ITransformerArg): UserPassword.UserPassword.TransformerArg;
/**
* Encodes the specified TransformerArg message. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.verify|verify} messages.
* @param message TransformerArg message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: UserPassword.UserPassword.ITransformerArg, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified TransformerArg message, length delimited. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.verify|verify} messages.
* @param message TransformerArg message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: UserPassword.UserPassword.ITransformerArg, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a TransformerArg message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns TransformerArg
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPassword.UserPassword.TransformerArg;
/**
* Decodes a TransformerArg message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns TransformerArg
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPassword.UserPassword.TransformerArg;
/**
* Verifies a TransformerArg message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a TransformerArg message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns TransformerArg
*/
public static fromObject(object: { [k: string]: any }): UserPassword.UserPassword.TransformerArg;
/**
* Creates a plain object from a TransformerArg message. Also converts values to other types if specified.
* @param message TransformerArg
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: UserPassword.UserPassword.TransformerArg, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this TransformerArg to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for TransformerArg
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace TransformerArg {
/** Properties of a Value. */
interface IValue {
/** Value asBlob */
asBlob?: (Uint8Array|null);
/** Value asUnsignedInteger */
asUnsignedInteger?: (number|null);
}
/** Represents a Value. */
class Value implements IValue {
/**
* Constructs a new Value.
* @param [properties] Properties to set
*/
constructor(properties?: UserPassword.UserPassword.TransformerArg.IValue);
/** Value asBlob. */
public asBlob?: (Uint8Array|null);
/** Value asUnsignedInteger. */
public asUnsignedInteger?: (number|null);
/** Value value. */
public value?: ("asBlob"|"asUnsignedInteger");
/**
* Creates a new Value instance using the specified properties.
* @param [properties] Properties to set
* @returns Value instance
*/
public static create(properties?: UserPassword.UserPassword.TransformerArg.IValue): UserPassword.UserPassword.TransformerArg.Value;
/**
* Encodes the specified Value message. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.Value.verify|verify} messages.
* @param message Value message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: UserPassword.UserPassword.TransformerArg.IValue, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified Value message, length delimited. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.Value.verify|verify} messages.
* @param message Value message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: UserPassword.UserPassword.TransformerArg.IValue, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a Value message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns Value
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPassword.UserPassword.TransformerArg.Value;
/**
* Decodes a Value message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns Value
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPassword.UserPassword.TransformerArg.Value;
/**
* Verifies a Value message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a Value message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns Value
*/
public static fromObject(object: { [k: string]: any }): UserPassword.UserPassword.TransformerArg.Value;
/**
* Creates a plain object from a Value message. Also converts values to other types if specified.
* @param message Value
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: UserPassword.UserPassword.TransformerArg.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this Value to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for Value
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
}
}
}
/** Namespace DeviceCapabilities. */
export namespace DeviceCapabilities {
/** Properties of a DeviceCapabilities. */
interface IDeviceCapabilities {
/** DeviceCapabilities chatLockSupportLevel */
chatLockSupportLevel?: (DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel|null);
/** DeviceCapabilities lidMigration */
lidMigration?: (DeviceCapabilities.DeviceCapabilities.ILIDMigration|null);
}
/** Represents a DeviceCapabilities. */
class DeviceCapabilities implements IDeviceCapabilities {
/**
* Constructs a new DeviceCapabilities.
* @param [properties] Properties to set
*/
constructor(properties?: DeviceCapabilities.IDeviceCapabilities);
/** DeviceCapabilities chatLockSupportLevel. */
public chatLockSupportLevel?: (DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel|null);
/** DeviceCapabilities lidMigration. */
public lidMigration?: (DeviceCapabilities.DeviceCapabilities.ILIDMigration|null);
/** DeviceCapabilities _chatLockSupportLevel. */
public _chatLockSupportLevel?: "chatLockSupportLevel";
/** DeviceCapabilities _lidMigration. */
public _lidMigration?: "lidMigration";
/**
* Creates a new DeviceCapabilities instance using the specified properties.
* @param [properties] Properties to set
* @returns DeviceCapabilities instance
*/
public static create(properties?: DeviceCapabilities.IDeviceCapabilities): DeviceCapabilities.DeviceCapabilities;
/**
* Encodes the specified DeviceCapabilities message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.verify|verify} messages.
* @param message DeviceCapabilities message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: DeviceCapabilities.IDeviceCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified DeviceCapabilities message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.verify|verify} messages.
* @param message DeviceCapabilities message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: DeviceCapabilities.IDeviceCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a DeviceCapabilities message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns DeviceCapabilities
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities;
/**
* Decodes a DeviceCapabilities message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns DeviceCapabilities
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities;
/**
* Verifies a DeviceCapabilities message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a DeviceCapabilities message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns DeviceCapabilities
*/
public static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities;
/**
* Creates a plain object from a DeviceCapabilities message. Also converts values to other types if specified.
* @param message DeviceCapabilities
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: DeviceCapabilities.DeviceCapabilities, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this DeviceCapabilities to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for DeviceCapabilities
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace DeviceCapabilities {
/** ChatLockSupportLevel enum. */
enum ChatLockSupportLevel {
NONE = 0,
MINIMAL = 1,
FULL = 2
}
/** Properties of a LIDMigration. */
interface ILIDMigration {
/** LIDMigration chatDbMigrationTimestamp */
chatDbMigrationTimestamp?: (number|Long|null);
}
/** Represents a LIDMigration. */
class LIDMigration implements ILIDMigration {
/**
* Constructs a new LIDMigration.
* @param [properties] Properties to set
*/
constructor(properties?: DeviceCapabilities.DeviceCapabilities.ILIDMigration);
/** LIDMigration chatDbMigrationTimestamp. */
public chatDbMigrationTimestamp?: (number|Long|null);
/** LIDMigration _chatDbMigrationTimestamp. */
public _chatDbMigrationTimestamp?: "chatDbMigrationTimestamp";
/**
* Creates a new LIDMigration instance using the specified properties.
* @param [properties] Properties to set
* @returns LIDMigration instance
*/
public static create(properties?: DeviceCapabilities.DeviceCapabilities.ILIDMigration): DeviceCapabilities.DeviceCapabilities.LIDMigration;
/**
* Encodes the specified LIDMigration message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.LIDMigration.verify|verify} messages.
* @param message LIDMigration message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: DeviceCapabilities.DeviceCapabilities.ILIDMigration, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified LIDMigration message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.LIDMigration.verify|verify} messages.
* @param message LIDMigration message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: DeviceCapabilities.DeviceCapabilities.ILIDMigration, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a LIDMigration message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns LIDMigration
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCapabilities.DeviceCapabilities.LIDMigration;
/**
* Decodes a LIDMigration message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns LIDMigration
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCapabilities.DeviceCapabilities.LIDMigration;
/**
* Verifies a LIDMigration message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a LIDMigration message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns LIDMigration
*/
public static fromObject(object: { [k: string]: any }): DeviceCapabilities.DeviceCapabilities.LIDMigration;
/**
* Creates a plain object from a LIDMigration message. Also converts values to other types if specified.
* @param message LIDMigration
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: DeviceCapabilities.DeviceCapabilities.LIDMigration, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this LIDMigration to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for LIDMigration
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
}
}
/** Namespace Protocol. */
export namespace Protocol {
/** Properties of a LimitSharing. */
interface ILimitSharing {
/** LimitSharing sharingLimited */
sharingLimited?: (boolean|null);
/** LimitSharing trigger */
trigger?: (Protocol.LimitSharing.TriggerType|null);
/** LimitSharing limitSharingSettingTimestamp */
limitSharingSettingTimestamp?: (number|Long|null);
/** LimitSharing initiatedByMe */
initiatedByMe?: (boolean|null);
}
/** Represents a LimitSharing. */
class LimitSharing implements ILimitSharing {
/**
* Constructs a new LimitSharing.
* @param [properties] Properties to set
*/
constructor(properties?: Protocol.ILimitSharing);
/** LimitSharing sharingLimited. */
public sharingLimited?: (boolean|null);
/** LimitSharing trigger. */
public trigger?: (Protocol.LimitSharing.TriggerType|null);
/** LimitSharing limitSharingSettingTimestamp. */
public limitSharingSettingTimestamp?: (number|Long|null);
/** LimitSharing initiatedByMe. */
public initiatedByMe?: (boolean|null);
/** LimitSharing _sharingLimited. */
public _sharingLimited?: "sharingLimited";
/** LimitSharing _trigger. */
public _trigger?: "trigger";
/** LimitSharing _limitSharingSettingTimestamp. */
public _limitSharingSettingTimestamp?: "limitSharingSettingTimestamp";
/** LimitSharing _initiatedByMe. */
public _initiatedByMe?: "initiatedByMe";
/**
* Creates a new LimitSharing instance using the specified properties.
* @param [properties] Properties to set
* @returns LimitSharing instance
*/
public static create(properties?: Protocol.ILimitSharing): Protocol.LimitSharing;
/**
* Encodes the specified LimitSharing message. Does not implicitly {@link Protocol.LimitSharing.verify|verify} messages.
* @param message LimitSharing message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: Protocol.ILimitSharing, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified LimitSharing message, length delimited. Does not implicitly {@link Protocol.LimitSharing.verify|verify} messages.
* @param message LimitSharing message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: Protocol.ILimitSharing, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a LimitSharing message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns LimitSharing
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.LimitSharing;
/**
* Decodes a LimitSharing message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns LimitSharing
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.LimitSharing;
/**
* Verifies a LimitSharing message.
* @param message Plain object to verify
* @returns `null` if valid, otherwise the reason why it is not
*/
public static verify(message: { [k: string]: any }): (string|null);
/**
* Creates a LimitSharing message from a plain object. Also converts values to their respective internal types.
* @param object Plain object
* @returns LimitSharing
*/
public static fromObject(object: { [k: string]: any }): Protocol.LimitSharing;
/**
* Creates a plain object from a LimitSharing message. Also converts values to other types if specified.
* @param message LimitSharing
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: Protocol.LimitSharing, options?: $protobuf.IConversionOptions): { [k: string]: any };
/**
* Converts this LimitSharing to JSON.
* @returns JSON object
*/
public toJSON(): { [k: string]: any };
/**
* Gets the default type url for LimitSharing
* @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
* @returns The default type url
*/
public static getTypeUrl(typeUrlPrefix?: string): string;
}
namespace LimitSharing {
/** TriggerType enum. */
enum TriggerType {
UNKNOWN = 0,
CHAT_SETTING = 1,
BIZ_SUPPORTS_FB_HOSTING = 2,
UNKNOWN_GROUP = 3
}
}
/** Properties of a MessageKey. */
interface IMessageKey {
/** MessageKey remoteJid */
remoteJid?: (string|null);
/** MessageKey fromMe */
fromMe?: (boolean|null);
/** MessageKey id */
id?: (string|null);
/** MessageKey participant */
participant?: (string|null);
}
/** Represents a MessageKey. */
class MessageKey implements IMessageKey {
/**
* Constructs a new MessageKey.
* @param [properties] Properties to set
*/
constructor(properties?: Protocol.IMessageKey);
/** MessageKey remoteJid. */
public remoteJid?: (string|null);
/** MessageKey fromMe. */
public fromMe?: (boolean|null);
/** MessageKey id. */
public id?: (string|null);
/** MessageKey participant. */
public participant?: (string|null);
/** MessageKey _remoteJid. */
public _remoteJid?: "remoteJid";
/** MessageKey _fromMe. */
public _fromMe?: "fromMe";
/** MessageKey _id. */
public _id?: "id";
/** MessageKey _participant. */
public _participant?: "participant";
/**
* Creates a new MessageKey instance using the specified properties.
* @param [properties] Properties to set
* @returns MessageKey instance
*/
public static create(properties?: Protocol.IMessageKey): Protocol.MessageKey;
/**
* Encodes the specified MessageKey message. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
* @param message MessageKey message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encode(message: Protocol.IMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Encodes the specified MessageKey message, length delimited. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
* @param message MessageKey message or plain object to encode
* @param [writer] Writer to encode to
* @returns Writer
*/
public static encodeDelimited(message: Protocol.IMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;
/**
* Decodes a MessageKey message from the specified reader or buffer.
* @param reader Reader or buffer to decode from
* @param [length] Message length if known beforehand
* @returns MessageKey
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.MessageKey;
/**
* Decodes a MessageKey message from the specified reader or buffer, length delimited.
* @param reader Reader or buffer to decode from
* @returns MessageKey
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.MessageKey;
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
public static fromObject(object: { [k: string]: any }): Protocol.MessageKey;
/**
* Creates a plain object from a MessageKey message. Also converts values to other types if specified.
* @param message MessageKey
* @param [options] Conversion options
* @returns Plain object
*/
public static toObject(message: Protocol.MessageKey, options?: $protobuf.IConversionOptions): { [k: string]: any };
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
