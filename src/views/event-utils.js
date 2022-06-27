
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
  description: '詳細説明',
  start: todayStr + 'T17:00:00',
  end: todayStr + 'T17:30:00',
  resourceId: 'a'
  },
  {
    id: createEventId(),
    title: 'Timed event',
  description: '詳細説明',
  start: todayStr + 'T17:00:00',
  end: todayStr + 'T17:30:00',
  resourceId: 'b'
  }
]

export function createEventId() {
  return String(eventGuid++)
}
