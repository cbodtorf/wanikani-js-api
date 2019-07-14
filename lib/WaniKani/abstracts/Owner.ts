import {ConfigService, HttpClient, Registry} from '../../index';

export abstract class Owner {

  protected _configService: ConfigService;
  protected _httpClient: HttpClient;

  constructor(configService?: ConfigService) {

    const configServiceIsSet: boolean = configService !== undefined;

    this._configService = configServiceIsSet
                          ? configService
                          : Registry.getElement('ConfigService');

    this._httpClient = new HttpClient(this._configService);
  }

  public async asJson(): Promise<JSON> {
    const data: JSON = await this._getData();

    const errorGettingData: boolean = data['message'] !== undefined;

    if (errorGettingData) {
      throw new Error(data['message']);
    }

    return data;
  }

  protected abstract _getBaseUrl(): string;

  private _getData(): Promise<JSON> {
    const url: string = this._getBaseUrl();

    return this._httpClient.get(url);
  }
}
