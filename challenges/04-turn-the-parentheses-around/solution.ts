function decode(message: string): string {
  let decodedMessage = message
  while (decodedMessage.includes('(')) {
    const innerLeftIdx = decodedMessage.lastIndexOf('(')
    const innerRightIdx = decodedMessage
      .indexOf(')', innerLeftIdx)
    const reversed = decodedMessage
      .slice(innerLeftIdx + 1, innerRightIdx)
      .split('')
      .reverse()
      .join('')
    const leftChunk = decodedMessage.slice(0, innerLeftIdx)
    const rightChunk = decodedMessage.slice(innerRightIdx + 1)
    decodedMessage = `${leftChunk}${reversed}${rightChunk}`
  }
  return decodedMessage
}
