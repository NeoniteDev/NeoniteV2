const path = require('path');
var configFile = path.join(__dirname, '/config/config.json');
var config = require(configFile);
module.exports = {
  channels: {
    'client-matchmaking': {
      states: [],
      cacheExpire: '9999-12-31T23:59:59.999Z'
    },
    tk: {
      states: [
        {
          validFrom: new Date().toISOString(),
          activeEvents: [],
          state: {
            k: [
              '001B8CDAE8386ACB5DFE26FA59C10B40:XA9kqeHyWLK/xsRzYLCkooN/dBRNTyjy5sw9Jv+8nRs=',
              '03FBE2522823B14E3BD161BBCDAE4A85:kvHfxKURiw97DzzEt5xAUxVMFfxGya3Xw3kI7ORGEgM=',
              'A6855B699FE10FE50301AFE1A4FA74CB:fKXFbKW6dUWHLSC8M4KLAg1elVXH+wYouFbpvvtiIcY=',
              '82669F5A2F9B703D1A6BEA3BCB922D7D:Leu9rrDPaqZd3izIU+IKpFcP/NNcqSncLkV2lapQL6k=',
              '3AC281E7A5EAA2765CFE02AC98B04FC8:R/hWNn8BcRRovJE/L7h15VDrJ0H4VqBBVt6XVvq2Ebw=',
              '79F7D9C856E8CF354109D3298F076C06:Ak3TOM0i0Mq/KYxd7SDlSuS7o55USaf+urL6WqnmalY='
            ]
          }
        }
      ],
      cacheExpire: '9999-12-31T23:59:59.999Z'
    },
    'community-votes': {
      states: [
        {
          validFrom: new Date().toISOString(),
          activeEvents: [],
          state: {
            electionId: '',
            candidates: [],
            electionEnds: '9999-12-31T23:59:59.999Z',
            numWinners: 1
          }
        }
      ],
      cacheExpire: '9999-12-31T23:59:59.999Z'
    },
    'client-events': {
      states: [
        {
          validFrom: new Date().toISOString(),
          activeEvents: [
            {
              eventType: 'EventFlag.Season9',
              activeUntil: '9999-12-31T23:59:59.999Z',
              activeSince: new Date().toISOString()
            },
            {
              eventType: 'EventFlag.Season9.Phase1',
              activeUntil: '9999-12-31T23:59:59.999Z',
              activeSince: new Date().toISOString()
            },
            {
              eventType: `EventFlag.LobbySeason${config.season}`,
              activeUntil: '9999-12-31T23:59:59.999Z',
              activeSince: new Date().toISOString()
            },
            {
              eventType: 'EventFlag.Season9.Phase2',
              activeUntil: '9999-12-31T23:59:59.999Z',
              activeSince: new Date().toISOString()
            },
          ],
          state: {
            activeStorefronts: [],
            eventNamedWeights: {},
            activeEvents: [
              {
                instanceId: '1gjvo0jkfchv90s38mh0limpm2[2]0',
                devName: `LobbySeason${config.season}`,
                eventName: `LobbySeason${config.season}`,
                eventStart: new Date().toISOString(),
                eventEnd: '9999-12-31T23:59:59.999Z',
                eventType: `EventFlag.LobbySeason${config.season}`
              }
            ],
            seasonNumber: config.season,
            seasonTemplateId: `AthenaSeason:athenaseason${config.season}`,
            matchXpBonusPoints: 0,
            seasonBegin: new Date().toISOString(),
            seasonEnd: '9999-12-31T23:59:59.999Z',
            seasonDisplayedEnd: '9999-12-31T23:59:59.999Z',
            weeklyStoreEnd: '9999-12-31T23:59:59.999Z',
            stwEventStoreEnd: '9999-12-31T23:59:59.999Z',
            stwWeeklyStoreEnd: '9999-12-31T23:59:59.999Z',
            dailyStoreEnd: '9999-12-31T23:59:59.999Z'
          }
        }
      ],
      cacheExpire: '9999-12-31T23:59:59.999Z'
    }
  },
  eventsTimeOffsetHrs: 0,
  cacheIntervalMins: 15,
  currentTime: new Date().toISOString()
}