import {IBaseUserData} from './index';
import {createBaseUserDataFromJson} from './sub';

export interface IUserData {
  object: string;
  url: string;
  data_updated_at: string;
  data: IBaseUserData | undefined;
}

export function createUserDataFromJson(json: JSON): IUserData {
  const userData: IUserData = {
    object: json['object'],
    url: json['url'],
    data_updated_at: json['data_updated_at'],
    data: createBaseUserDataFromJson(json['data']),
  };

  return userData;
}
