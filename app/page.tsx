"use client";
import { quizQuestions } from "@/lib/questions";
import { useState } from "react";
import { submitQuiz } from "@/app/action";

export default function QuizPage() {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = async () => {
    const score = await submitQuiz(answers);
    setResult(score);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-blue mb-6">Biology 101 Quiz</h1>

        {quizQuestions.map((q) => (
          <div key={q.id} className="mb-4">
            <p className="text-lg text-blue font-medium">{q.question}</p>
            {q.options.map((option) => (
              <label key={option} className="block mt-2 cursor-pointer">
                <input
                  type="radio"
                  name={q.id}
                  value={option}
                  onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Quiz
        </button>

        {result !== null && (
          <p className="mt-4 text-lg font-semibold text-center text-green-600">
            Your score: {result}/{quizQuestions.length}
          </p>
        )}
      </div>
    </div>
  );
}
