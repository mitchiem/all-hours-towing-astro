export function hashKey(key: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function pickVariant<T>(items: T[], key: string): T {
  if (!items || items.length === 0) throw new Error('pickVariant: empty items');
  const idx = hashKey(key) % items.length;
  return items[idx];
}

export function pickMany<T>(items: T[], key: string, count: number): T[] {
  if (!items || items.length === 0) return [];
  const result: T[] = [];
  let h = hashKey(key);
  const used = new Set<number>();
  for (let i = 0; i < Math.min(count, items.length); i++) {
    h = (h * 1103515245 + 12345) >>> 0;
    let idx = h % items.length;
    let attempts = 0;
    while (used.has(idx) && attempts < items.length) { idx = (idx + 1) % items.length; attempts++; }
    used.add(idx);
    result.push(items[idx]);
  }
  return result;
}
