const assert = require('assert');
const app = require('../../src/app');

const chai = require('chai').use(require('chai-as-promised'));
const { expect } = chai;

describe('\'test\' service', () => {
  const service = app.service('test');
  const testData = {
    text: 'This is a test'
  };
  let id = -1;

  it('The service registers', async () => {
    assert.ok(service, 'Registered the service');
  });
  it('Creates test data', async () => {
    const result = await app.service('test').create(testData);
    id = result.id;

    expect(result).to.include(testData);
  });
  it('Delete data, should return 200', async () => {
    if (id === -1) throw new Error('ID is not set');
    const result = await app.service('test').remove(id);

    expect(result).to.be.fulfilled;
  });
});
