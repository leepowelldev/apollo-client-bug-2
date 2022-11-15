import { graphql, setupWorker } from 'msw';
import { CREATE_EVENT } from './queries';

const worker = setupWorker(
  graphql.mutation(CREATE_EVENT, (_, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(500),
      ctx.data({
        createEvent: null,
        errors: [new Error('Something bad happened')],
      })
    );
  })
);

export { worker };
