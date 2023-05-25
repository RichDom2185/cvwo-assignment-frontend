export type TodoItem = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  tags?: string[];
  reminderDate?: Date;
  reminderTime?: Date;
};
