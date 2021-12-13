import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  it('should be defined', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(new AuthGuard()).toBeDefined();
  });
});
