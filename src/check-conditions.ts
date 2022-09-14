import { Filter } from '@directus/shared/types';
import { validatePayload } from '@directus/shared/utils';

export function checkConditions(item: Record<string, any>, conditions: Filter) {
    const errors = validatePayload(conditions, item, { requireAll: true });
    return errors.length === 0;
}
