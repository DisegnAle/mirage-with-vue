import axiosMockAdapter from 'axios-mock-adapter'
import { axiosConfig } from './axiosConfig';
import articles from '../mocks/articles';

const axiosMockAdapterConfig = () => {
  const MockAdapter = axiosMockAdapter
  const mock = new MockAdapter(axiosConfig, { onNoMatch: "throwException" });
  mock.onGet('/articles').reply(200, articles);
};

export default axiosMockAdapterConfig;
