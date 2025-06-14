const proto = {
...require('./Adv/Adv').Adv, 
...require('./Cert/Cert').Cert, 
...require('./ChatLockSettings/ChatLockSettings').ChatLockSettings, 
...require('./CompanionReg/CompanionReg').CompanionReg, 
...require('./DeviceCapabilities/DeviceCapabilities').DeviceCapabilities, 
...require('./E2E/E2E').E2E, 
...require('./Ephemeral/Ephemeral').Ephemeral, 
...require('./HistorySync/HistorySync').HistorySync, 
...require('./LidMigrationSyncPayload/LidMigrationSyncPayload').LidMigrationSyncPayload, 
...require('./MdStorageChatRowOpaqueData/MdStorageChatRowOpaqueData').MdStorageChatRowOpaqueData, 
...require('./MdStorageMsgRowOpaqueData/MdStorageMsgRowOpaqueData').MdStorageMsgRowOpaqueData, 
...require('./MmsRetry/MmsRetry').MmsRetry, 
...require('./Protocol/Protocol').Protocol, 
...require('./Reporting/Reporting').Reporting, 
...require('./ServerSync/ServerSync').ServerSync, 
...require('./SignalLocalStorageProtocol/SignalLocalStorageProtocol').SignalLocalStorageProtocol,
...require('./SignalWhisperTextProtocol/SignalWhisperTextProtocol').SignalWhisperTextProtocol,
...require('./StatusAttributions/StatusAttributions').StatusAttributions, 
...require('./SyncAction/SyncAction').SyncAction,
...require('./UserPassword/UserPassword').UserPassword,
...require('./VnameCert/VnameCert').VnameCert,
...require('./Wa6/Wa6').Wa6,
...require('./Web/Web').Web
}
module.exports = {
proto
}