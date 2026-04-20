import type { FieldData } from '@/components/visuals/ChampionsField';

/**
 * The inaugural Champions Field — 2025.
 *
 * Per the Champions Conference spec § 10 ("Initial Champions Conference
 * Selection, Option A"), the 2025 field is the top 24 of the final CFP
 * committee rankings released December 7, 2025 — pre-bowls, post-
 * conference-championship weekend.
 *
 * Seed order is the source of truth. Division (I/II/III) is derived
 * from seed inside the ChampionsField component via the snake-draft
 * pattern defined in the build spec § 3.
 *
 * `name` is the full form used at desktop/tablet widths; `shortName`
 * swaps in at <640px where the column is narrower. The short-name set
 * was written to feel coherent as a group (no "U of X", no hyphenated
 * compressions) — if one feels wrong, flag rather than edit in place.
 */
export const fieldData: FieldData = {
  season: '2025',
  cfpCutSeed: 12,
  teams: [
    { seed: 1,  name: 'Indiana',       shortName: 'Indiana',    record: '13-0', conference: 'Big Ten' },
    { seed: 2,  name: 'Ohio State',    shortName: 'Ohio St',    record: '12-1', conference: 'Big Ten' },
    { seed: 3,  name: 'Georgia',       shortName: 'Georgia',    record: '12-1', conference: 'SEC' },
    { seed: 4,  name: 'Texas Tech',    shortName: 'Texas Tech', record: '12-1', conference: 'Big 12' },
    { seed: 5,  name: 'Oregon',        shortName: 'Oregon',     record: '11-1', conference: 'Big Ten' },
    { seed: 6,  name: 'Ole Miss',      shortName: 'Ole Miss',   record: '11-1', conference: 'SEC' },
    { seed: 7,  name: 'Texas A&M',     shortName: 'Texas A&M',  record: '11-1', conference: 'SEC' },
    { seed: 8,  name: 'Oklahoma',      shortName: 'Oklahoma',   record: '10-2', conference: 'SEC' },
    { seed: 9,  name: 'Alabama',       shortName: 'Alabama',    record: '10-3', conference: 'SEC' },
    { seed: 10, name: 'Miami (FL)',    shortName: 'Miami',      record: '10-2', conference: 'ACC' },
    { seed: 11, name: 'Notre Dame',    shortName: 'Notre Dame', record: '10-2', conference: 'Independent' },
    { seed: 12, name: 'BYU',           shortName: 'BYU',        record: '11-2', conference: 'Big 12' },
    { seed: 13, name: 'Texas',         shortName: 'Texas',      record: '9-3',  conference: 'SEC' },
    { seed: 14, name: 'Vanderbilt',    shortName: 'Vandy',      record: '10-2', conference: 'SEC' },
    { seed: 15, name: 'Utah',          shortName: 'Utah',       record: '10-2', conference: 'Big 12' },
    { seed: 16, name: 'USC',           shortName: 'USC',        record: '9-3',  conference: 'Big Ten' },
    { seed: 17, name: 'Arizona',       shortName: 'Arizona',    record: '9-3',  conference: 'Big 12' },
    { seed: 18, name: 'Michigan',      shortName: 'Michigan',   record: '9-3',  conference: 'Big Ten' },
    { seed: 19, name: 'Virginia',      shortName: 'Virginia',   record: '10-3', conference: 'ACC' },
    { seed: 20, name: 'Tulane',        shortName: 'Tulane',     record: '10-3', conference: 'American' },
    { seed: 21, name: 'Houston',       shortName: 'Houston',    record: '9-3',  conference: 'Big 12' },
    { seed: 22, name: 'Georgia Tech',  shortName: 'Ga Tech',    record: '9-3',  conference: 'ACC' },
    { seed: 23, name: 'Iowa',          shortName: 'Iowa',       record: '8-4',  conference: 'Big Ten' },
    { seed: 24, name: 'James Madison', shortName: 'JMU',        record: '12-1', conference: 'Sun Belt' },
  ],
};
