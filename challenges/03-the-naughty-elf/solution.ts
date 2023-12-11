function findNaughtyStep(original: string, modified: string): string {
  const longer = original.length > modified.length ? original : modified
  const shorter = original.length < modified.length ? original : modified
  return longer
    .split('')
    .find((letter, idx)=> letter !== shorter[idx]) || ''
}
