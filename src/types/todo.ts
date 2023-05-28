export type TodoItem = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  tags: string[];
  reminderDate?: Date;
  reminderTime?: Date;
};

export type TodoApiItem = {
  id: string;
  title?: string;
  description?: string;
  completed: boolean;
  tag?: string;
  date?: string;
  time?: string;
  // user_id: string;
  // created_at: string;
  // updated_at: string;
};
