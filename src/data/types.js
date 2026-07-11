/**
 * @typedef {"project" | "hobby" | "writing" | "client" | "talk" | "now"} EntryType
 */

/**
 * @typedef {Object} TimelineEntry
 * @property {string} date - ISO date, e.g. "2026-07-11"
 * @property {EntryType} type
 * @property {string} title
 * @property {string} blurb - one line
 * @property {string} [link] - external URL
 * @property {string} [slug] - internal deep-dive page key
 * @property {string[]} [tags]
 */

export const ENTRY_TYPES = ['project', 'hobby', 'writing', 'client', 'talk', 'now'];

export const TYPE_LABELS = {
  project: 'Project',
  hobby: 'Hobby',
  writing: 'Writing',
  client: 'Client',
  talk: 'Talk',
  now: 'Now',
};
