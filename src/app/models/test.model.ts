export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Platform {
  platform: Platform;
}

export interface Store {
  id: number;
  name: string;
  slug: string;
}

export interface Store {
  store: Store;
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface Added_by_statu {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface Clip {
  320: string;
  640: string;
  full: string;
}

export interface Clip {
  clip: string;
  clips: Clip;
  video: string;
  preview: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface Esrb_rating {
  id: number;
  name: string;
  slug: string;
  name_en: string;
  name_ru: string;
}

export interface Short_screenshot {
  id: number;
  image: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Parent_platform {
  platform: Platform;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  slug: string;
  name: string;
  playtime: number;
  platforms: Platform[];
  stores: Store[];
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: Added_by_statu;
  metacritic: number;
  suggestions_count: number;
  updated: string;
  id: number;
  score?: any;
  clip: Clip;
  tags: Tag[];
  esrb_rating: Esrb_rating;
  user_game?: any;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  short_screenshots: Short_screenshot[];
  parent_platforms: Parent_platform[];
  genres: Genre[];
}

export interface ApiResponse {
  count: number;
  next: string;
  previous?: any;
  user_platforms: boolean;
  results: Game[];
}
