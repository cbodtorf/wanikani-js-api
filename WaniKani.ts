import {
  IUser,
} from './contracts/index';

import {
  ConfigService,
  HttpClient,
  Registry,
  User,
} from './lib/index';

export class WaniKaniApi {
  private _configService: ConfigService;

  constructor(authToken?: string) {

    const authTokenIsSet: boolean = authToken !== undefined;
    const authTokenToUse: string | null = authTokenIsSet
                ? (authToken as string)
                : null;

    const registeredConfigService: ConfigService = Registry.getElement('ConfigService');
    const configServiceAlreadyExists: boolean =  registeredConfigService !== undefined;

    if (configServiceAlreadyExists) {
      this._configService = registeredConfigService;
    } else {
      this._configService = new ConfigService();

      this._configService.set('endpoint', 'https://api.wanikani.com/v2');
      this._configService.set('authToken', (authTokenToUse as string));
      Registry.register('ConfigService', this._configService);
    }
  }

  public static withCustomConfigService(configService: ConfigService): WaniKaniApi {
    const waniKaniApi: WaniKaniApi = new WaniKaniApi();

    waniKaniApi.configService = configService;

    return waniKaniApi;
  }

  public get endpoint(): string {
    return this._configService.get('endpoint');
  }

  public set endpoint(endpoint: string) {
    this._configService.set('endpoint', endpoint);
  }

  public get authToken(): string {
    return this._configService.get('authToken');
  }

  public set authToken(authToken: string) {
    this._configService.set('authToken', authToken);
  }

  public get configService(): ConfigService {
    return this._configService;
  }

  public set configService(configService: ConfigService) {
    this._configService = configService;
  }

  public withAuthToken(authToken: string): WaniKaniApi {
    const config: Map<string, any> = this._configService.getCopyOfConfig();

    const newConfigService: ConfigService = new ConfigService();
    newConfigService.loadConfig(config);
    newConfigService.set('authToken', authToken);

    const newWaniKaniApi: WaniKaniApi = WaniKaniApi.withCustomConfigService(newConfigService);

    return newWaniKaniApi;
  }

  public async getUser(): Promise<IUser> {
    const authTokenIsNotSet: boolean = this._configService.get('authToken') === undefined;
    if (authTokenIsNotSet) {
      throw new Error('Error: Authtoken must be provided to use "getUser"');
    }

    const httpClient: HttpClient = new HttpClient(this._configService);

    const userDataAsJson: JSON = await httpClient.get('/user');

    const errorGettingData: boolean = userDataAsJson['message'] !== undefined;

    if (errorGettingData) {
      throw new Error(userDataAsJson['message']);
    }

    const user: IUser = new User(this._configService);
    return user;
  }
}
