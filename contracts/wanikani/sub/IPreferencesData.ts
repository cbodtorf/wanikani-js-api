export interface IPreferencesData {
  lessons_autoplay_audio: boolean;
  lessons_batch_size: number;
  lessons_presentation_order: string;
  reviews_autoplay_audio: boolean;
  reviews_display_srs_indicator: boolean;
}

export function createPreferencesDataFromJson(json: JSON): IPreferencesData | undefined {
  const preferencesDataIsNotExisting: boolean = json === undefined;
  if (preferencesDataIsNotExisting) {
    return undefined;
  }

  const preferencesData: IPreferencesData = {
    lessons_autoplay_audio: json['lessons_autoplay_audio'],
    lessons_batch_size: json['lessons_batch_size'],
    lessons_presentation_order: json['lessons_presentation_order'],
    reviews_autoplay_audio: json['reviews_autoplay_audio'],
    reviews_display_srs_indicator: json['reviews_display_srs_indicator'],
  };

  return preferencesData;
}
