export type Message = {
  type: 'user' | 'bot';
  text: string;
  options?: string[];
};

export type ChatHistory = Message[];