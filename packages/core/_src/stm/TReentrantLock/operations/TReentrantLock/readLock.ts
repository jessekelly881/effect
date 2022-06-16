/**
 * Obtains a read lock in a scoped context.
 *
 * @tsplus fluent ets/TReentrantLock readLock
 */
export function readLock(
  self: TReentrantLock,
  __tsplusTrace?: string
): Effect<Scope, never, number> {
  return Effect.acquireRelease(self.acquireRead.commit(), (_) => self.releaseRead.commit(), __tsplusTrace)
}
