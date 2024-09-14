export const mockAxios = jest.fn().mockImplementation(params => new Promise(resolve => resolve(params)));

function MockAxios(params: Record<any, any>): Promise<Record<any, any>> {
  return mockAxios(params) as Promise<Record<any, any>>;
}

MockAxios.prototype.get = jest.fn();
MockAxios.prototype.post = jest.fn();

export default MockAxios;
