import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {QuestionDto} from '../dto/question.dto';
import { Question } from "../entites/question.entity";
import { QuestionRepository } from "../repositories/question.repository";
import { Quiz } from "../entites/quiz.entity";

@Injectable()

export class QuestionService {
   constructor(@InjectRepository(QuestionRepository) private questionRepository: QuestionRepository)
   {}

  async createQuestion(
     question: QuestionDto,
     quiz: Quiz
   ): Promise<Question> {
    const newQuestion =  await this.questionRepository.save({
         question: question.question
      });

      quiz.questions = [newQuestion, ...quiz.questions]
      await quiz.save();
      return newQuestion;
   }
}