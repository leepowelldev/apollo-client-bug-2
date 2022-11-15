# @apollo/client mutation onError handlers

## Installation

`npm install` then `npm start`

## Bug

The bug can be found in `App.tsx` where the mutation request returns a 500
response, this triggers both `onError` handlers set in the `useMutation` options
and the `createEvent` options - according to the docs, the `createEvent` option
should override the `useMutation` option.

## Expected

Only the `createEvent`s `onError` handler should be called. This works as
expected when used with a `useLazyQuery`.
