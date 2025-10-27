import React from 'react';

interface ExplanationPageProps {
  onStartQuiz: () => void;
}

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 mb-8">
        <h2 className="text-2xl font-bold text-sky-800 mb-4 border-b-2 border-sky-200 pb-2">{title}</h2>
        {children}
    </div>
);

const Example: React.FC<{ good?: boolean; children: React.ReactNode }> = ({ good, children }) => (
    <div className={`p-3 my-2 rounded-md text-sm md:text-base ${good ? 'bg-sky-50 border-l-4 border-sky-500' : 'bg-slate-100 border-l-4 border-slate-400'}`}>
        {children}
    </div>
);


const ExplanationPage: React.FC<ExplanationPageProps> = ({ onStartQuiz }) => {
  return (
    <div className="animate-fade-in">
      <InfoCard title="📝 관계사의 계속적 용법이란?">
        <p className="text-lg text-slate-700 leading-relaxed">
          관계사의 <strong>계속적 용법</strong>은 이미 설명된 명사(선행사)에 대해 부가적인 정보를 덧붙일 때 사용해요. 마치 대화를 하다가 '아, 그리고 말이야...' 하면서 추가 정보를 주는 것과 비슷해요. 가장 큰 특징은 관계사 앞에 항상 콤마(,)가 온다는 점입니다!
        </p>
      </InfoCard>

      <InfoCard title="🔍 한정적 용법 vs 계속적 용법">
        <p className="mb-4">두 용법은 콤마(,) 하나로 의미가 크게 달라질 수 있어요.</p>
        <div className="grid md:grid-cols-2 gap-6">
            <div>
                <h3 className="font-semibold text-lg text-rose-600 mb-2">한정적 용법 (콤마 없음)</h3>
                <p className="mb-2">선행사를 구체적으로 꾸며줘서 '어떤' 명사인지 범위를 좁혀주는 필수 정보입니다.</p>
                <Example>
                    <p>I have a son <strong className="text-rose-600">who is a doctor</strong>.</p>
                    <p className="text-slate-600 text-sm mt-1">→ (여러 아들 중) 의사인 아들이 한 명 있다.</p>
                </Example>
            </div>
            <div>
                <h3 className="font-semibold text-lg text-sky-600 mb-2">계속적 용법 (콤마 있음)</h3>
                <p className="mb-2">이미 알려진 선행사에 대한 부가 설명으로, 없어도 문장의 핵심 의미는 변하지 않아요.</p>
                <Example good>
                    <p>I have a son, <strong className="text-sky-600">who is a doctor</strong>.</p>
                    <p className="text-slate-600 text-sm mt-1">→ 아들이 한 명 있는데, 그는 의사다. (아들은 한 명뿐)</p>
                </Example>
            </div>
        </div>
      </InfoCard>

      <InfoCard title="💡 계속적 용법에 쓰이는 관계사들">
        <div>
            <h3 className="font-semibold text-xl text-slate-700 mb-3">1. 관계대명사: who, whom, which, whose</h3>
            <ul className="space-y-4">
                <li>
                    <p><code className="font-bold text-md bg-sky-100 text-sky-800 px-2 py-1 rounded">, who</code> (사람 - 주격)</p>
                    <Example good><p>This is my friend, <strong className="text-sky-600">who</strong> is from Canada.</p></Example>
                </li>
                <li>
                    <p><code className="font-bold text-md bg-sky-100 text-sky-800 px-2 py-1 rounded">, whom</code> (사람 - 목적격)</p>
                    <Example good><p>This is Mr. Kim, <strong className="text-sky-600">whom</strong> I respect very much.</p></Example>
                    <p className="text-slate-600 text-sm mt-1 px-3">→ 선행사(Mr. Kim)가 뒤따르는 문장('I respect him very much')에서 목적어 역할을 할 때 사용해요.</p>
                </li>
                <li>
                    <p><code className="font-bold text-md bg-sky-100 text-sky-800 px-2 py-1 rounded">, which</code> (사물 또는 앞 문장 전체)</p>
                    <Example good><p>I bought a new book, <strong className="text-sky-600">which</strong> is very interesting.</p></Example>
                    <Example good><p>He didn't come to the party, <strong className="text-sky-600">which</strong> made her sad. (그가 파티에 안 온 사실 전체)</p></Example>
                </li>
                 <li>
                    <p><code className="font-bold text-md bg-sky-100 text-sky-800 px-2 py-1 rounded">, whose</code> (소유격)</p>
                    <Example good><p>I know a girl, <strong className="text-sky-600">whose</strong> father is a famous actor.</p></Example>
                </li>
            </ul>
            <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                <p className="font-bold text-amber-800">🚨 중요! <code className="bg-amber-200 rounded px-1">that</code>, <code className="bg-amber-200 rounded px-1">what</code>은 계속적 용법에 절대 사용할 수 없어요!</p>
            </div>
        </div>
        <div className="mt-8">
            <h3 className="font-semibold text-xl text-slate-700 mb-3">2. 관계부사: where, when</h3>
             <ul className="space-y-4">
                <li>
                    <p><code className="font-bold text-md bg-teal-100 text-teal-800 px-2 py-1 rounded">, where</code> (장소)</p>
                    <Example good><p>We moved to Seoul, <strong className="text-teal-600">where</strong> my father works.</p></Example>
                </li>
                <li>
                    <p><code className="font-bold text-md bg-teal-100 text-teal-800 px-2 py-1 rounded">, when</code> (시간)</p>
                    <Example good><p>The final exam is in December, <strong className="text-teal-600">when</strong> we'll be very busy.</p></Example>
                </li>
            </ul>
        </div>
      </InfoCard>
      
      <div className="text-center mt-12">
        <button
          onClick={onStartQuiz}
          className="bg-sky-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-sky-700 transition-transform transform hover:scale-105 shadow-lg"
        >
          개념 확인 퀴즈 시작!
        </button>
      </div>
    </div>
  );
};

export default ExplanationPage;