const crypto = require('crypto');
const fs = require('fs');
const uuid = require('uuid')
const Profile = require("../profile");
const {
	ApiException
} = require('../structs/errors');
const errors = require("../structs/errors");

const {
	application
} = require('express');
const jsonwebtoken = require('jsonwebtoken');

/**
 * 
 * @param {application} app 
 */
module.exports = (app) => {
	//EOS
    app.post('/auth/v1/oauth/token', (req, res) => {
		let access_token = jsonwebtoken.sign({
            "clientId": "ec684b8c687f479fadea3cb2ad83f5c6",
            "role": "GameClient",
            "productId": "prod-fn",
            "iss": "eos",
            "env": "prod",
            "organizationId": "o-aa83a0a9bc45e98c80c1b1c9d92e9e",
            "features": [],
            "deploymentId": "62a9473a2dca46b29ccf17577fcf42d7",
            "sandboxId": "fn",
            "tokenType": "clientToken",
            "exp": 9668532724,
            "iat": 1668529124,
            "jti": "1b10b89e6fea4c45a083fe04f9a71fc3"
          }, "ciao");

		res.json({
            "access_token":access_token,
            "token_type":"bearer",
			"expires_at":"9999-12-31T23:59:59.999Z",
            "features":[],
            "organization_id":"o-aa83a0a9bc45e98c80c1b1c9d92e9e",
            "product_id":"prod-fn",
            "sandbox_id":"fn",
            "deployment_id":"62a9473a2dca46b29ccf17577fcf42d7",
            "expires_in":115200
        });
	});

    app.get('/epic/id/v2/sdk/accounts', (req, res) => {
        res.send([
            {
                "accountId":req.query.accountId,
                "displayName":req.query.accountId,
                "preferredLanguage":"en",
                "linkedAccounts": [],
                "cabinedMode":false,
                "empty":false
            }
        ]);
    });

    app.get('/epic/friends/v1/:accountId/blocklist', (req, res) => {
		res.json([]);
	});

    app.patch('/epic/presence/v1/:gameNsIg/:accountId/presence/:presenceUuid', (req, res) => {
		res.json({
            "own": {
                "accountId":req.params.accountId,
                "status":"online",
                "perNs":[]
            }
        });
	});

    app.get(['/sdk/v1/product/prod-fn','/sdk/v1/default'], (req, res) => {
		res.json({
            "client":{
               "RateLimiter.InventoryClient":{
                  "MessageCount":100,
                  "TimeIntervalInSeconds":60.0
               },
               "BaseService":{
                  "HttpRetryLimit":4,
                  "HttpRetryResponseCodes":[
                     429,
                     503,
                     504
                  ]
               },
               "RateLimiter.AuthClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.PresenceClient.Operations":{
                  "MessageCount":3,
                  "TimeIntervalInSeconds":20.0,
                  "Operation":[
                     "SendUpdate",
                     "SetPresence"
                  ]
               },
               "RateLimiter.ReceiptValidatorClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.LeaderboardsClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.MetricsClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.StatsClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.SDKConfigClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "RequestUpdate"
                  ]
               },
               "RateLimiter.TitleStorageClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.EcomClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.DataStorageClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "GetAccessLinks",
                     "QueryFile",
                     "QueryFileList",
                     "CopyFile",
                     "DeleteFile",
                     "ReadFile",
                     "WriteFile",
                     "DownloadFileRedirected",
                     "UploadFileRedirected"
                  ]
               },
               "LeaderboardsClient":{
                  "MaxUserScoresQueryUserIds":100,
                  "MaxUserScoresQueryStats":25
               },
               "RateLimiter.CustomInvitesClient.Operations":{
                  "MessageCount":50,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "SendCustomInvite"
                  ]
               },
               "HTTP":{
                  "HttpReceiveTimeout":30,
                  "bEnableHttp":true,
                  "HttpTimeout":30,
                  "HttpConnectionTimeout":60,
                  "HttpSendTimeout":30,
                  "MaxFlushTimeSeconds":2.0
               },
               "RateLimiter.FriendClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "QueryFriends",
                     "SendFriendInvite",
                     "DeleteFriend"
                  ]
               },
               "RateLimiter.RTCAdminClient":{
                  "MessageCount":50,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.UserInfoClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "/Script/Engine.NetworkSettings":{
                  "n.VerifyPeer":false
               },
               "WebSockets.LibWebSockets":{
                  "ThreadStackSize":131072,
                  "ThreadTargetFrameTimeInSeconds":0.0333,
                  "ThreadMinimumSleepTimeInSeconds":0.0
               },
               "StatsClient":{
                  "MaxQueryStatsStatNamesStrLength":1900
               },
               "RateLimiter.MetricsClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "RegisterPlayerBackendSession"
                  ]
               },
               "RateLimiter.DataStorageClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "SanitizerClient":{
                  "ReplaceChar":"*",
                  "RequestLimit":10
               },
               "RateLimiter.ModsClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "InstallMod",
                     "UninstallMod",
                     "UpdateMod",
                     "EnumerateMods"
                  ]
               },
               "RateLimiter.ReportsClient.Operations":{
                  "MessageCount":100,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "SendPlayerBehaviorReport"
                  ]
               },
               "RateLimiter.RTCAdminClient.Operations":{
                  "MessageCount":50,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "QueryJoinRoomToken",
                     "Kick",
                     "SetParticipantHardMute"
                  ]
               },
               "RateLimiter.FriendClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.AchievementsClient":{
                  "MessageCount":100,
                  "TimeIntervalInSeconds":60.0
               },
               "LogFiles":{
                  "PurgeLogsDays":5,
                  "MaxLogFilesOnDisk":5,
                  "LogTimes":"SinceStart"
               },
               "RateLimiter":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.AntiCheatClient":{
                  "MessageCount":120,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.ProgressionSnapshot":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "SessionsClient":{
                  "HeartbeatIntervalSecs":30
               },
               "RateLimiter.UserInfoClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "QueryLocalUserInfo",
                     "QueryUserInfo",
                     "QueryUserInfoByDisplayName",
                     "QueryUserInfoByExternalAccount"
                  ]
               },
               "LobbyClient":{
                  "InitialResendDelayMs":100,
                  "MaxConnectionRetries":3,
                  "LobbySocketURL":"wss://api.epicgames.dev/lobby/v1/`deploymentId/lobbies/connect",
                  "NumConsecutiveFailuresAllowed":5,
                  "MaxResendDelayMs":2000,
                  "WebSocketConnectTaskMaxNetworkWaitSeconds":15.0,
                  "RecoveryWaitTimeSecs":2,
                  "InitialRetryDelaySeconds":5,
                  "MaxSendRetries":3,
                  "SentMessageTimeout":5,
                  "HeartbeatIntervalSecs":30,
                  "MaxRetryIntervalSeconds":15
               },
               "RateLimiter.SanctionsClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "QueryActivePlayerSanctions"
                  ]
               },
               "UIClient.SocialURLQueryParamNames":{
                  "OSName":"os_name",
                  "ProductId":"product_id",
                  "SDKCLNumber":"sdk_cl_number",
                  "DeploymentId":"deployment_id",
                  "IntegratedPlatformName":"integrated_platform_name",
                  "SDKVersion":"sdk_version",
                  "OSVersion":"os_version",
                  "UserId":"user_id",
                  "ExchangeCode":"exchange_code"
               },
               "RateLimiter.LobbyClient.ThrottledOperations":{
                  "MessageCount":30,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "CreateLobby",
                     "DestroyLobby",
                     "JoinLobby",
                     "LeaveLobby",
                     "HeartbeatLobby",
                     "UpdateLobby",
                     "PromoteMember",
                     "KickLobbyMember",
                     "SendLobbyInvite",
                     "RejectLobbyInvite",
                     "QueryInvites",
                     "FindLobby",
                     "RefreshRTCToken",
                     "HardMuteMember"
                  ]
               },
               "RateLimiter.SessionsClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.KWSClient":{
                  "MessageCount":20,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.PresenceClient":{
                  "MessageCount":60,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.KWSClient.Operations":{
                  "MessageCount":20,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "CreateUser",
                     "UpdateParentEmail",
                     "QueryAgeGate",
                     "QueryPermissions",
                     "RequestPermissions"
                  ]
               },
               "RateLimiter.InventoryClient.Operations":{
                  "MessageCount":100,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "Open",
                     "Close"
                  ]
               },
               "RateLimiter.LeaderboardsClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "QueryLeaderboardDefinitions",
                     "QueryLeaderboardRanks",
                     "QueryLeaderboardUserScores"
                  ]
               },
               "RateLimiter.SanctionsClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "Messaging.EpicConnect":{
                  "FailedConnectionDelayMultiplier":2.5,
                  "ServerHeartbeatIntervalMilliseconds":0,
                  "FailedConnectionDelayMaxSeconds":180,
                  "ClientHeartbeatIntervalMilliseconds":30000,
                  "FailedConnectionDelayIntervalSeconds":5,
                  "Url":"wss://connect.epicgames.dev"
               },
               "MetricsClient":{
                  "HttpRetryLimit":2
               },
               "RateLimiter.TitleStorageClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "QueryFile",
                     "QueryFileList",
                     "ReadFile"
                  ]
               },
               "RateLimiter.AchievementsClient.Operations":{
                  "MessageCount":100,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "QueryDefinitions",
                     "QueryPlayerAchievements",
                     "UnlockAchievements"
                  ]
               },
               "Messaging.Stomp":{
                  "ClientHeartbeatIntervalMs":30000,
                  "RequestedServerHeartbeatIntervalMs":30000,
                  "Url":"wss://api.epicgames.dev/notifications/v1/`deploymentid`/connect",
                  "BlocklistMessageTypeFilters":[
                     "lobbyinvite"
                  ]
               },
               "TitleStorageClient":{
                  "AccessLinkDurationSeconds":300,
                  "UnusedCachedFileDaysToLive":7,
                  "ClearInvalidFileCacheFrequencyDays":2,
                  "MaxSimultaneousReads":10
               },
               "ConnectClient":{
                  "MaxProductUserIdMappingsQueryUserIds":128,
                  "MinProductUserIdMappingsUpdateTimeInSeconds":900.0
               },
               "RateLimiter.LobbyClient.Operations":{
                  "MessageCount":100,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "GetByLobbyId",
                     "UpdateLobby"
                  ]
               },
               "RateLimiter.AntiCheatClient.Operations":{
                  "MessageCount":120,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "QueryServiceStatus",
                     "SendClientMessage"
                  ]
               },
               "EcomClient":{
                  "PurchaseUrl":"https://launcher-website-prod07.ol.epicgames.com/purchase",
                  "PurchaseCookieName":"EPIC_BEARER_TOKEN",
                  "PurchaseEpicIdUrl":"https://www.epicgames.com/ecom/payment/v1/purchase"
               },
               "RateLimiter.SessionsClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "UpdateSession",
                     "JoinSession",
                     "StartSession",
                     "EndSession",
                     "RegisterPlayers",
                     "SendInvite",
                     "RejectInvite",
                     "QueryInvites",
                     "FindSession",
                     "DestroySession"
                  ]
               },
               "RateLimiter.StatsClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "IngestStat",
                     "QueryStats"
                  ]
               },
               "RateLimiter.ReceiptValidatorClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "VerifyPurchase"
                  ]
               },
               "DataStorageClient":{
                  "AccessLinkDurationSeconds":300,
                  "MaxSimultaneousReads":10,
                  "MaxSimultaneousWrites":10
               },
               "RateLimiter.AuthClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "VerifyAuth",
                     "DeletePersistentAuth",
                     "GenerateClientAuth",
                     "LinkAccount",
                     "QueryIdToken",
                     "VerifyIdToken"
                  ]
               },
               "P2PClient":{
                  "IceServers":[
                     "stun:stun.l.google.com:19302",
                     "stun:turn.rtcp.on.epicgames.com:3478",
                     "turn:turn.rtcp.on.epicgames.com:3478"
                  ],
                  "P2PMinPort":7777,
                  "P2PMaxPort":7876
               },
               "RateLimiter.LobbyClient":{
                  "MessageCount":30,
                  "TimeIntervalInSeconds":60.0
               },
               "SDKAnalytics":{
                  "BaseUrl":"https://api.epicgames.dev/telemetry/data/",
                  "DevPhase":2,
                  "AppEnvironment":"Production",
                  "UploadType":"sdkevents"
               },
               "RateLimiter.ConnectClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "AntiCheat.GameplayData":{
                  "Url":"wss://api.epicgames.dev/cerberus-edge/v1/"
               },
               "AuthClient":{
                  "AccountPortalURLLocaleSuffix":"lang=`code",
                  "PollInterval":5,
                  "RefreshTokenThreshold":100.0,
                  "VPCRegisterURL":"https://epicgames.com/id/register/quick/minor/await?code=`challenge_id&display=embedded",
                  "AuthorizeContinuationEndpoint":"https://epicgames.com/id/login?continuation=`continuation&prompt=skip_merge%20skip_upgrade",
                  "AuthorizeCodeEndpoint":"https://epicgames.com/id/authorize?client_id=`client_id&response_type=code&scope=`scope&redirect_uri=`redirect_uri&display=popup&prompt=login",
                  "AuthorizeContinuationEmbeddedEndpoint":"https://epicgames.com/id/embedded/login?continuation=`continuation&prompt=skip_merge%20skip_upgrade",
                  "VerifyTokenInterval":60.0,
                  "PollExpiresIn":300,
                  "IdTokenCacheMinExpirySeconds":300,
                  "AuthorizeEndpoint":"https://epicgames.com/id/authorize?exchange_code=`exchange_code&scope=`scope&prompt=skip_merge%20skip_upgrade",
                  "AccountPortalScheme":"eos.`client_id://epic/auth",
                  "bOfflineAccountToken":true
               },
               "RateLimiter.ProgressionSnapshot.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "SubmitSnapshot",
                     "DeleteSnapshot"
                  ]
               },
               "XMPP":{
                  "bEnabled":true,
                  "bEnableWebsockets":true,
                  "ThreadStackSize":131072
               },
               "RateLimiter.AntiCheatServer.Operations":{
                  "MessageCount":100000,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "QueryServiceStatus",
                     "SendClientMessage"
                  ]
               },
               "Core.Log":{
                  "LogEOS":"verbose",
                  "LogEOSMessaging":"verbose",
                  "LogEOSConnect":"verbose",
                  "LogEOSAuth":"verbose",
                  "LogHttpSerialization":"verbose",
                  "LogCore":"verbose",
                  "LogHttp":"warning",
                  "LogStomp":"verbose",
                  "LogXmpp":"verbose",
                  "LogEOSSessions":"verbose"
               },
               "UIClient":{
                  "FriendsURL":"https://epic-social-game-overlay-prod.ol.epicgames.com/index.html",
                  "SocialSPAClientId":"cf27c69fe66441e8a8a4e8faf396ee4c",
                  "VPCURLLocaleSuffix":"&lang=`code",
                  "FriendsURLExchangeCodeSuffix":"?exchange_code=`exchange_code",
                  "VPCURL":"https://epicgames.com/id/overlay/quick/minor/verify?code=`challenge_id"
               },
               "RateLimiter.AntiCheatServer":{
                  "MessageCount":100000,
                  "TimeIntervalInSeconds":60.0
               },
               "Messaging.XMPP":{
                  "ReconnectionDelayJitter":1.5,
                  "PingTimeout":30,
                  "ReconnectionDelayBase":4.0,
                  "ServerPort":443,
                  "bPrivateChatFriendsOnly":true,
                  "ReconnectionDelayMax":300.0,
                  "Domain":"prod.ol.epicgames.com",
                  "ReconnectionDelayBackoffExponent":2.0,
                  "ServerAddr":"wss://xmpp-service-prod.ol.epicgames.com",
                  "PingInterval":60
               },
               "RateLimiter.SDKConfigClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.EcomClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "QueryOwnership",
                     "QueryOwnershipToken",
                     "QueryEntitlement",
                     "QueryOffer",
                     "RedeemEntitlements",
                     "Checkout"
                  ]
               },
               "PresenceClient":{
                  "EpicConnectNotificationWaitTime":99999995.0,
                  "PresenceQueryTimeoutSeconds":1.0,
                  "bSetOfflineOnLogoutEnabled":false,
                  "PresenceAutoUpdateInSeconds":999999600.0,
                  "bSetOfflineOnShutdownEnabled":false
               },
               "RateLimiter.CustomInvitesClient":{
                  "MessageCount":50,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.ModsClient":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0
               },
               "RateLimiter.ConnectClient.Operations":{
                  "MessageCount":300,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "LoginAccount",
                     "CreateAccount",
                     "LinkAccount",
                     "UnlinkAccount",
                     "CreateDeviceId",
                     "DeleteDeviceId",
                     "TransferDeviceIdAccount",
                     "QueryExternalAccountMappings",
                     "QueryProductUserIdMappings",
                     "VerifyIdToken"
                  ]
               },
               "RateLimiter.AuthClient.SensitiveOperations":{
                  "MessageCount":12,
                  "TimeIntervalInSeconds":60.0,
                  "Operation":[
                     "GenerateUserAuth"
                  ]
               },
               "RateLimiter.ReportsClient":{
                  "MessageCount":100,
                  "TimeIntervalInSeconds":60.0
               }
            },
            "services":{
               "RTCService":{
                  "BaseUrl":"https://api.epicgames.dev/rtc"
               },
               "DataStorageService":{
                  "BaseUrl":"https://api.epicgames.dev/datastorage"
               },
               "AccountsEpicIdService":{
                  "BaseUrl":"https://api.epicgames.dev"
               },
               "MetricsService":{
                  "BaseUrl":"https://api.epicgames.dev/datarouter"
               },
               "EcommerceService":{
                  "BaseUrl":"https://ecommerceintegration-public-service-ecomprod02.ol.epicgames.com/ecommerceintegration"
               },
               "KWSService":{
                  "BaseUrl":"https://api.epicgames.dev/kws"
               },
               "AntiCheatService":{
                  "BaseUrl":"https://api.epicgames.dev/anticheat"
               },
               "LobbyService":{
                  "BaseUrl":"https://api.epicgames.dev/lobby"
               },
               "StatsAchievementsService":{
                  "BaseUrl":"https://api.epicgames.dev/stats"
               },
               "PriceEngineService":{
                  "BaseUrl":"https://priceengine-public-service-ecomprod01.ol.epicgames.com/priceengine"
               },
               "AccountsService":{
                  "BaseUrl":"https://egp-idsoc-proxy-prod.ol.epicgames.com/account",
                  "RedirectUrl":"accounts.epicgames.com"
               },
               "EcommerceEpicIdService":{
                  "BaseUrl":"https://api.epicgames.dev/epic/ecom"
               },
               "PaymentEpicIdService":{
                  "BaseUrl":"https://api.epicgames.dev/epic/payment"
               },
               "SanctionsService":{
                  "BaseUrl":"https://api.epicgames.dev/sanctions"
               },
               "FriendService":{
                  "BaseUrl":"https://egp-idsoc-proxy-prod.ol.epicgames.com/friends"
               },
               "ReceiptValidatorService":{
                  "BaseUrl":"https://api.epicgames.dev/receipt-validator"
               },
               "FriendEpicIdService":{
                  "BaseUrl":"https://api.epicgames.dev/epic/friends"
               },
               "CatalogService":{
                  "BaseUrl":"https://catalog-public-service-prod06.ol.epicgames.com/catalog"
               },
               "EOSAuthService":{
                  "BaseUrl":"https://api.epicgames.dev"
               },
               "SessionsService":{
                  "BaseUrl":"https://api.epicgames.dev/matchmaking"
               },
               "ModsService":{
                  "BaseUrl":"https://api.epicgames.dev/mods"
               },
               "ReportsService":{
                  "BaseUrl":"https://api.epicgames.dev/player-reports"
               },
               "ProgressionSnapshotService":{
                  "BaseUrl":"https://api.epicgames.dev/snapshots"
               },
               "CustomInvitesService":{
                  "BaseUrl":"https://api.epicgames.dev/notifications"
               },
               "PresenceService":{
                  "BaseUrl":"https://api.epicgames.dev/epic/presence"
               },
               "TitleStorageService":{
                  "BaseUrl":"https://api.epicgames.dev/titlestorage"
               },
               "StatsIngestService":{
                  "BaseUrl":"https://api.epicgames.dev/ingestion/stats"
               },
               "LeaderboardsService":{
                  "BaseUrl":"https://api.epicgames.dev/leaderboards"
               },
               "InventoryService":{
                  "BaseUrl":"https://api.epicgames.dev/inventory"
               }
            },
            "watermark":-934553538
         });
	});

	app.post('/epic/oauth/v2/token', (req, res) => {
		let access_token = jsonwebtoken.sign({
			"sub": "ninja",
			"pfsid": "fn",
			"iss": "https://api.epicgames.dev/epic/oauth/v1",
			"dn": "ninja",
			"nonce": "n-01/jkXYh/9P5JimUEpSisDyK3Xw=",
			"pfpid": "prod-fn",
			"sec": 1,
			"aud": "ec684b8c687f479fadea3cb2ad83f5c6",
			"pfdid": "62a9473a2dca46b29ccf17577fcf42d7",
			"t": "epic_id",
			"scope": req.params.scope,
			"appid": "fghi4567FNFBKFz3E4TROb0bmPS8h1GW",
			"exp": 9668536326,
			"iat": 1668529126,
			"jti": "6e2ad057f3fa4186a2cac0190954956a"
		  }, "ciao");

          let refresh_token = jsonwebtoken.sign({
            "sub": "ninja",
            "pfsid": "fn",
            "iss": "https://api.epicgames.dev/epic/oauth/v1",
            "dn": "ninja",
            "pfpid": "prod-fn",
            "aud": "ec684b8c687f479fadea3cb2ad83f5c6",
            "pfdid": "62a9473a2dca46b29ccf17577fcf42d7",
            "t": "epic_id",
            "appid": "fghi4567FNFBKFz3E4TROb0bmPS8h1GW",
            "scope": req.params.scope,
            "exp": 9668557926,
            "iat": 1668529126,
            "jti": "5c2585dd6fc1414784a6bc735085b2c2"
          }, "ciao");

          let id_token = jsonwebtoken.sign({
            "sub": "ninja",
            "pfsid": "fn",
            "iss": "https://api.epicgames.dev/epic/oauth/v1",
            "dn": "ninja",
            "nonce": "n-e3Kcqw0hulXkbebFRBL8o5AwL3M=",
            "pfpid": "prod-fn",
            "aud": "ec684b8c687f479fadea3cb2ad83f5c6",
            "pfdid": "62a9473a2dca46b29ccf17577fcf42d7",
            "t": "id_token",
            "appid": "fghi4567FNFBKFz3E4TROb0bmPS8h1GW",
            "exp": 9668536326,
            "iat": 1668529126,
            "jti": "d86182adb46341008d49038d87908f7a"
          }, "ciao");

		res.json({
			"scope":"basic_profile friends_list openid presence",
			"token_type":"bearer",
			"access_token": access_token,
			"refresh_token":refresh_token,
			"id_token":id_token,
			"expires_in":115200,
			"expires_at":"9999-12-31T23:59:59.999Z",
			"refresh_expires_in":115200,
			"refresh_expires_at":"9999-12-31T23:59:59.999Z",
			"account_id":"ninja",
			"client_id":"ec684b8c687f479fadea3cb2ad83f5c6",
			"application_id":"fghi4567FNFBKFz3E4TROb0bmPS8h1GW",
			"selected_account_id":"ninja",
			"merged_accounts": []
		 })
	});
}
