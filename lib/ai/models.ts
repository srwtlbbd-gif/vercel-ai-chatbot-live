export const DEFAULT_CHAT_MODEL: string = "chat-model";

export type ChatModel = {
  id: string;
  name: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "chat-model",
    name: "GPT-4o",
    description: "OpenAI's most advanced multimodal model with vision and text capabilities",
  },
  {
    id: "chat-model-reasoning",
    name: "o1-preview",
    description:
      "OpenAI's advanced reasoning model for complex problems",
  },
  // Optional: Anthropic Claude models (requires ANTHROPIC_API_KEY)
  // Uncomment below to enable Claude support:
  // {
  //   id: "claude-sonnet",
  //   name: "Claude 3.5 Sonnet",
  //   description: "Anthropic's balanced model for most tasks",
  // },
];
