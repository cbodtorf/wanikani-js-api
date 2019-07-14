export interface ISubscriptionData {
  active: boolean;
  type: string;
  max_level_granted: number;
  period_ends_at: string;
}

export function createSubscriptionDataFromJson(json: JSON): ISubscriptionData | undefined {
  const subscriptionDataIsNotExisting: boolean = json === undefined;
  if (subscriptionDataIsNotExisting) {
    return undefined;
  }

  const subscriptionData: ISubscriptionData = {
    active: json['active'],
    type: json['type'],
    max_level_granted: json['max_level_granted'],
    period_ends_at: json['period_ends_at'],
  };

  return subscriptionData;
}
