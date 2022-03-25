import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuestionDto } from "../dto/question.dto";
import { Question } from "../entites/question.entity";
import { QuestionService } from "../services/question.service";
import { QuizService } from "../services/quiz.service";


@Controller('question')

export class QuestionController{
    constructor(private questionService: QuestionService, private quizService: QuizService){

    }

    @Post('/create')

    @UsePipes(ValidationPipe)

    async saveQuestions(@Body() question: QuestionDto): Promise<Question>{

        const quiz = await this.quizService.getQuizById(question.quizId);

        return await this.questionService.createQuestion(question, quiz);
    }
}