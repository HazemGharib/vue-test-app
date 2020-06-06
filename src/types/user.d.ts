export type User = {
  name: string;
  job: string;
};

export type UserResponse = {
  name: string;
  job: string;
  id: string;
  createdAt: string;
};

export type UserListItem = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type UserList = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserListItem[];
  ad: {
    company: string;
    url: string;
    text: string;
  };
};
