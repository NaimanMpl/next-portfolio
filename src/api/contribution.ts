export interface Commit {
  message: string;
}

export interface ContributionData {
  type: string;
  created_at: string;
  payload: {
    commits: Commit[];
  };
}

export interface Contribution {
  created_at: string;
  commits: Commit[];
}
