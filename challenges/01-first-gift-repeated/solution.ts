function findFirstRepeated(gifts: number[]): number {
  const seen = new Set<number>()
  for (const gift of gifts) {
    if(seen.has(gift)) return gift
    seen.add(gift)
  }
  return -1
}
