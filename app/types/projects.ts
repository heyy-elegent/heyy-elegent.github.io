interface ProjectUrl {
  text: string;
  url: string;
}

export interface Project {
  title: string;
  date: string;
  subtext: string;
  url?: string;
  github?: string;
  tech?: string[];
  urls?: ProjectUrl[];
  featured?: boolean;
}