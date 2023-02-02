export interface JobPost {
  id: number;
  title: string;
  location: string;
  description: string;
  requirements: string[];
}

export interface SearchBarProps {
  value: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export interface RenderDataProps {
  data: JobPost[];
}

export interface JobCardProps {
  job: JobPost;
}
