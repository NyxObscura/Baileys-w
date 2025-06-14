import { Adv } from './Adv'
import { Cert } from './Cert'
import { WAChatLockSettings } from './ChatLockSettings'
import { CompanionReg } from './CompanionReg'
import { DeviceCapabilities } from './DeviceCapabilities'
import { E2E } from './WAE2E'
import { Ephemeral } from './Ephemeral'
import { HistorySync } from './HistorySync'
import { LidMigrationSyncPayload } from './LidMigrationSyncPayload'
import { MdStorageChatRowOpaqueData } from './MdStorageChatRowOpaqueData'
import { MdStorageMsgRowOpaqueData } from './MdStorageMsgRowOpaqueData'
import { MmsRetry } from './MmsRetry'
import { Protocol } from './Protocol'
import { Reporting } from './Reporting'
import { ServerSync } from './ServerSync'
import { SignalLocalStorageProtocol } from './SignalLocalStorageProtocol'
import { SignalWhisperTextProtocol } from './SignalWhisperTextProtocol'
import { StatusAttributions } from './StatusAttributions'
import { SyncAction } from './SyncAction'
import { UserPassword } from './UserPassword'
import { VnameCert } from './VnameCert'
import { Wa6 } from './Wa6'
import { Web } from './Web'
const proto = {
...Adv,
...Cert,
...ChatLockSettings,
...CompanionReg, 
...DeviceCapabilities,
...E2E,
...Ephemeral,
...HistorySync,
...LidMigrationSyncPayload, 
...MdStorageChatRowOpaqueData, 
...MdStorageMsgRowOpaqueData, 
...MmsRetry,
...Protocol,
...Reporting,
...ServerSync,
...SignalLocalStorageProtocol, 
...SignalWhisperTextProtocol, 
...StatusAttributions, 
...SyncAction,
...UserPassword,
...VnameCert,
...Wa6,
...Web
}
export { proto }