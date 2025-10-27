
export interface QuizQuestion {
  id: number;
  type: 'choice' | 'blank';
  question: string;
  questionSuffix?: string;
  options?: string[];
  answer: string;
  explanation: string;
}
