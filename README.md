# summer-chores

Small JS practice project for working with callbacks, promises, and async/await.

The idea is that someone has a list of chores to finish on a Saturday. Each chore takes a different amount of time, and after mowing the yard there is a chance they get too tired and fall asleep before finishing everything.

## Files

 `callbackVersion.js` first version using callbacks
 `promiseVersion.js` same chore idea, but using promises
 `asyncAwaitVersion.js` same promise setup, but using async/await

## How to run it

Make sure Node is installed, then run:

```bash
node callbackVersion.js
```

or:

```bash
node promiseVersion.js
```

or:

```bash
node asyncAwaitVersion.js
```

The outcome may be different every time because the falling asleep part uses random chance.
