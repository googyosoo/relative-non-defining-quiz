
import React, { useState, useCallback } from 'react';
import ExplanationPage from './components/ExplanationPage';
import QuizPage from './components/QuizPage';

type Page = 'explanation' | 'quiz';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('explanation');

  const navigateTo = useCallback((newPage: Page) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-800">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto max-w-5xl px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-sky-700">
            관계사의 계속적 용법 마스터하기
          </h1>
          <nav>
            <button
              onClick={() => navigateTo('explanation')}
              className={`px-3 py-2 text-sm md:text-base font-semibold rounded-md ${page === 'explanation' ? 'text-sky-600 bg-sky-100' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              개념 학습
            </button>
            <button
              onClick={() => navigateTo('quiz')}
              className={`ml-2 px-3 py-2 text-sm md:text-base font-semibold rounded-md ${page === 'quiz' ? 'text-sky-600 bg-sky-100' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              퀴즈 풀기
            </button>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto max-w-5xl p-4 md:p-8">
        {page === 'explanation' ? (
          <ExplanationPage onStartQuiz={() => navigateTo('quiz')} />
        ) : (
          <QuizPage onBackToExplanation={() => navigateTo('explanation')} />
        )}
      </main>

      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>&copy; 2024 Relative Clause Master. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
