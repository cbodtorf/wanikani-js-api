import {createPreferencesDataFromJson, createSubscriptionDataFromJson} from '.';
import {IPreferencesData, ISubscriptionData} from './index';

export interface IBaseUserData {
  id: string;
  current_vacation_started_at: string | null;
  level: number;
  max_level_granted_by_subscription: number;
  preferences: IPreferencesData | undefined;
  profile_url: string;
  started_at: string;
  subscribed: boolean;
  subscription: ISubscriptionData | undefined;
  username: string;
}

export function createBaseUserDataFromJson(json: JSON): IBaseUserData | undefined {
  const baseUserDataIsNotExisting: boolean = json === undefined;
  if (baseUserDataIsNotExisting) {
    return undefined;
  }

  const baseUserData: IBaseUserData = {
    id: json['id'],
    current_vacation_started_at: json['current_vacation_started_at'],
    level: json['level'],
    max_level_granted_by_subscription: json['max_level_granted_by_subscription'],
    preferences: createPreferencesDataFromJson(json['preferences']),
    profile_url: json['profile_url'],
    started_at: json['started_at'],
    subscribed: json['subscribed'],
    subscription: createSubscriptionDataFromJson(json['subscription']),
    username: json['username'],
  };

  return baseUserData;
}
