# Timer and Stopwatch — Logic

## Timer (countdown)

- State
  - `timeLeft` (ms): remaining time in milliseconds (single source of truth).
  - `isRunning` (boolean): whether the countdown is active.

- Behavior
  - When `isRunning` becomes `true`, start one `setInterval` (tick e.g. 10ms).
  - On each tick use a functional updater: `setTimeLeft(prev => Math.max(prev - tick, 0))`.
  - If the result is `0`, clear the interval and set `isRunning` to `false`.

- Inputs
  - Hour/minute/second inputs parse integers and recompute `timeLeft` by composing milliseconds so editing one unit preserves others.
  - Inputs are disabled while `isRunning` to prevent mid-count edits.

## Stopwatch (count up)

- State
  - `elapsed` (ms): total elapsed milliseconds.
  - `isRunning` (boolean): whether the stopwatch is running.

- Behavior
  - When `isRunning` becomes `true`, start a `setInterval` at the chosen granularity (10ms or 100ms).
  - Increment with a functional updater: `setElapsed(prev => prev + tick)`.
  - Stopping clears the interval; resetting sets `elapsed` to `0` and stops running.

- Display
  - Convert ms to hours/minutes/seconds/centiseconds via integer division and modulo for padded numeric segments.
