import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface QuizPageProps {
  onBackToExplanation: () => void;
}

const quizData: QuizQuestion[] = [
  {
    id: 1,
    type: 'blank',
    question: 'I visited my grandmother,',
    questionSuffix: 'lives in Busan.',
    answer: 'who',
    explanation: ', who: 사람 선행사(my grandmother)를 부가 설명하므로 주격 관계대명사 who를 사용합니다.',
  },
  {
    id: 2,
    type: 'choice',
    question: 'He told a lie, ___ made me angry.',
    options: ['that', 'which', 'what', 'who'],
    answer: 'which',
    explanation: ', which: 앞 문장 전체(He told a lie)를 선행사로 받으므로 which를 사용합니다. that은 계속적 용법에 쓸 수 없습니다.',
  },
  {
    id: 3,
    type: 'blank',
    question: 'We will go to the park,',
    questionSuffix: 'we can have a picnic.',
    answer: 'where',
    explanation: ', where: 장소 선행사(the park)를 부가 설명하므로 관계부사 where를 사용합니다. (= and there)',
  },
  {
    id: 4,
    type: 'choice',
    question: 'The story is about a man, ___ wife suddenly disappears.',
    options: ['which', 'that', 'whose', 'who'],
    answer: 'whose',
    explanation: ', whose: 선행사(a man)의 소유(wife)를 나타내므로 소유격 관계대명사 whose를 사용합니다.',
  },
  {
    id: 5,
    type: 'blank',
    question: 'I remember 2002,',
    questionSuffix: 'the World Cup was held in Korea.',
    answer: 'when',
    explanation: ', when: 시간 선행사(2002)를 부가 설명하므로 관계부사 when을 사용합니다. (= and then)',
  },
  {
    id: 6,
    type: 'choice',
    question: '다음 중 어법상 올바른 문장을 고르세요.',
    options: [
      'This is the book, that I read.',
      'I met a friend, who he is a singer.',
      'She gave me a gift, which was very expensive.',
      'He failed the test, what was a surprise.'
    ],
    answer: 'She gave me a gift, which was very expensive.',
    explanation: '정답 문장 외에는, (a) that은 계속적 용법 불가, (b) 관계대명사절 안에 중복 주어(he) 사용 불가, (d) what은 계속적 용법 불가 규칙에 위배됩니다.',
  },
  {
    id: 7,
    type: 'choice',
    question: 'This is my mentor, ___ I have known for years.',
    options: ['who', 'whose', 'whom', 'that'],
    answer: 'whom',
    explanation: ', whom: 사람 선행사(my mentor)가 뒤따르는 절에서 목적어(I have known him) 역할을 하므로 목적격 관계대명사 whom을 사용합니다. 구어체에서는 who를 쓰기도 하지만, 문법적으로는 whom이 더 정확합니다.'
  }
];

const QuizPage: React.FC<QuizPageProps> = ({ onBackToExplanation }) => {
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (id: number, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [id]: answer.trim() }));
  };
  
  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    setUserAnswers({});
    setSubmitted(false);
  };

  const score = quizData.reduce((total, q) => {
    return total + (userAnswers[q.id]?.toLowerCase() === q.answer.toLowerCase() ? 1 : 0);
  }, 0);

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-200">
      <h2 className="text-2xl font-bold text-sky-800 mb-1">실력 점검 퀴즈</h2>
      <p className="text-slate-600 mb-6">배운 내용을 확인해 보세요!</p>

      {submitted && (
        <div className="mb-8 p-6 rounded-lg bg-sky-50 border border-sky-200 text-center">
          <h3 className="text-2xl font-bold text-sky-800">채점 결과</h3>
          <p className="text-4xl font-bold my-2">
            <span className={score > 3 ? "text-green-500" : "text-red-500"}>{score}</span> / {quizData.length}
          </p>
          <p className="text-slate-700">{score > 5 ? "훌륭해요! 완벽하게 이해했네요." : score > 3 ? "잘했어요! 조금만 더 복습해봐요." : "아쉬워요. 개념 학습을 다시 한번 살펴볼까요?"}</p>
        </div>
      )}

      <div className="space-y-8">
        {quizData.map((q, index) => (
          <div key={q.id} className={`p-5 rounded-lg border ${submitted ? (userAnswers[q.id]?.toLowerCase() === q.answer.toLowerCase() ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200') : 'bg-slate-50 border-slate-200'}`}>
            <p className="font-semibold text-slate-800 mb-4">
              {index + 1}. {q.question}
              {q.type === 'blank' && (
                <>
                  <input
                    type="text"
                    className="w-24 mx-2 px-2 py-1 border-b-2 border-slate-400 focus:border-sky-500 bg-transparent outline-none text-center"
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                    value={userAnswers[q.id] || ''}
                    disabled={submitted}
                  />
                  {q.questionSuffix}
                </>
              )}
            </p>
            {q.type === 'choice' && (
              <div className="space-y-2">
                {q.options?.map((option, i) => (
                  <label key={i} className={`block p-3 rounded-md cursor-pointer transition ${userAnswers[q.id] === option ? 'bg-sky-100 border-sky-300 ring-2 ring-sky-300' : 'bg-white hover:bg-sky-50 border'}`}>
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={option}
                      className="mr-3"
                      onChange={() => handleInputChange(q.id, option)}
                      checked={userAnswers[q.id] === option}
                      disabled={submitted}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
             {submitted && (
                <div className="mt-4 p-3 rounded-lg bg-white border border-slate-200 text-sm">
                  <p className="font-bold">
                    {userAnswers[q.id]?.toLowerCase() === q.answer.toLowerCase() ? <span className="text-green-600">정답!</span> : <span className="text-red-600">오답</span>} 
                    <span className="text-slate-500 ml-2">정답은 <strong className="text-sky-700">{q.answer}</strong> 입니다.</span>
                  </p>
                  <p className="text-slate-600 mt-1">{q.explanation}</p>
                </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-sky-600 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-sky-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            정답 제출하기
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="w-full sm:w-auto bg-green-600 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-green-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            다시 풀기
          </button>
        )}
         <button
            onClick={onBackToExplanation}
            className="w-full sm:w-auto bg-slate-500 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-slate-600 transition-transform transform hover:scale-105 shadow-lg"
          >
            개념 다시보기
          </button>
      </div>
    </div>
  );
};

export default QuizPage;