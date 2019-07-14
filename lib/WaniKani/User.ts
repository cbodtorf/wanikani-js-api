import {ConfigService} from '../index';

import {createUserDataFromJson, IUserData} from '../../contracts';

import {Owner} from './index';

export class User extends Owner {

  constructor(configService?: ConfigService) {
    super(configService);
  }

  public async asUserData(): Promise<IUserData> {
    const data: JSON = await super.asJson();

    const userData: IUserData = createUserDataFromJson(data);

    return userData;
  }

  protected _getBaseUrl(): string {
    return `/user`;
  }
}
