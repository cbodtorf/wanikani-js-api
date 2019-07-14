import {WaniKaniApi} from '../../WaniKani';
import {IUser} from './index';

export interface IWaniKaniApi {
  endpoint: string;
  authToken: string;

  getUser(): Promise<IUser>;
  withAuthToken(authToken: string): WaniKaniApi;
}
