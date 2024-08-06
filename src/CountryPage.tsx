import { getCountries } from 'wasp/client/operations'

// TypeScript automatically infers the return values and type-checks
// the payloads.
const countries = await getCountries()