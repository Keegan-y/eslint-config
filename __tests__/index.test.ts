import getLintMessage from '../lib/get-lint-messge';

const filesRoot = '__files__';

describe('Test ESLint Config', () => {
  it('no-file-to-test', async () => {
    await expect(getLintMessage(`${filesRoot}/no-file-to-test.js`)).rejects.toThrow(Error);
  });

  it('no-error', async () => {
    expect(await getLintMessage(`${filesRoot}/no-error.js`)).toBeUndefined();
  });

  it('no-console', async () => {
    const message = await getLintMessage(`${filesRoot}/no-console.js`);
    expect(message.ruleId).toEqual('no-console');
  });

  it('react-hooks/exhaustive-deps', async () => {
    const message = await getLintMessage(`${filesRoot}/ErrorIndicator.jsx`);
    expect(message.ruleId).toEqual('react-hooks/exhaustive-deps');
  });

  it('@typescript-eslint/naming-convention', async () => {
    const message = await getLintMessage(`${filesRoot}/kebab-case-interface.d.ts`);
    expect(message.ruleId).toEqual('@typescript-eslint/naming-convention');
  });

  it('@typescript-eslint/explicit-module-boundary-types', async () => {
    const message = await getLintMessage(`${filesRoot}/sum.ts`);
    expect(message.ruleId).toEqual('@typescript-eslint/explicit-module-boundary-types');
  });

  it('@typescript-eslint/ban-types', async () => {
    const message = await getLintMessage(`${filesRoot}/ErrorIndicator.tsx`);
    expect(message.ruleId).toEqual('@typescript-eslint/ban-types');
  });

  it('mjs:prefer-module', async () => {
    const message = await getLintMessage(`${filesRoot}/prefer-module.mjs`);
    expect(message.ruleId).toEqual('unicorn/prefer-module');
  });

  it('cjs:node/no-exports-assign', async () => {
    const message = await getLintMessage(`${filesRoot}/prefer-commonjs.cjs`);
    expect(message.ruleId).toEqual('node/no-exports-assign');
  });

  it('jsdoc:syntax', async () => {
    const message = await getLintMessage(`${filesRoot}/clamp.js`);
    expect(message.ruleId).toEqual('jsdoc/require-param-description');
  });

  it('tsdoc:syntax', async () => {
    const message = await getLintMessage(`${filesRoot}/clamp.ts`);
    expect(message.ruleId).toEqual('tsdoc/syntax');
  });

  it('markdown:eqeqeq', async () => {
    const message = await getLintMessage(`${filesRoot}/eqeqeq.md`);
    expect(message.ruleId).toEqual('eqeqeq');
  });

  it('markdown:react/no-array-index-key', async () => {
    const message = await getLintMessage(`${filesRoot}/no-array-index-key.md`);
    expect(message.ruleId).toEqual('react/no-array-index-key');
  });

  it('mdx:eqeqeq', async () => {
    const message = await getLintMessage(`${filesRoot}/eqeqeq.mdx`);
    expect(message.ruleId).toEqual('eqeqeq');
  });

  it('mdx:react/no-array-index-key', async () => {
    const message = await getLintMessage(`${filesRoot}/no-array-index-key.mdx`);
    expect(message.ruleId).toEqual('react/no-array-index-key');
  });

  it('mdx:Icons.stories', async () => {
    // TODO: Parse mdx error for this test case
    const message = await getLintMessage(`${filesRoot}/Icons.stories.mdx`);
    expect(message.ruleId).toBeNull();
  });
});
