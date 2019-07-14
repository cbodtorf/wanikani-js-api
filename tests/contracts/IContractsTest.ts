import {
  IUserData,
} from '../../contracts/wanikani/index';

export class TypeTest {
  constructor() {
    const user: IUserData = {
      object: 'user',
      url: 'https://api.wanikani.com/v2/user',
      data_updated_at: '2018-04-06T14:26:53.022245Z',
      data: {
        id: '5a6a5234-a392-4a87-8f3f-33342afe8a42',
        username: 'example_user',
        level: 5,
        max_level_granted_by_subscription: 60,
        profile_url: 'https://www.wanikani.com/users/example_user',
        started_at: '2012-05-11T00:52:18.958466Z',
        subscribed: true,
        current_vacation_started_at: null,
        subscription: {
          active: true,
          type: 'recurring',
          max_level_granted: 60,
          period_ends_at: '2018-12-11T13:32:19.485748Z',
        },
        preferences: {
          lessons_autoplay_audio: false,
          lessons_batch_size: 5,
          lessons_presentation_order: 'ascending_level_then_subject',
          reviews_autoplay_audio: false,
          reviews_display_srs_indicator: true,
        },
      },
    };

    // tslint:disable no-console
    console.log(`User: ${user}`);
  }
}
