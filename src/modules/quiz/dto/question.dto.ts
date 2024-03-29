import { IsNotEmpty, Length } from "class-validator";

export class QuestionDto{
    
    @IsNotEmpty()

    @Length(3, 255)

    question: string;

    @IsNotEmpty()
    quizId: number;
}