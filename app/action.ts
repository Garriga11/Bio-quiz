"use server";
import { quizQuestions } from "@/lib/questions";

export async function submitQuiz(userAnswers: { [key: string]: string }) {
    let score = 0;

    quizQuestions.forEach((q) => {
        if (userAnswers[q.id] === q.correctAnswer) {
            score++;
        }
    });

    return score;
}
