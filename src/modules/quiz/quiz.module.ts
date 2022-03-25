import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './controllers/question.controller';
import { QuizController } from './controllers/quiz.controller';
import { QuizRepository } from './repositories/quiz.repository';
import {QuizService} from './services/quiz.service';
import {QuestionService} from './services/question.service';
import { QuestionRepository } from './repositories/question.repository';

@Module({
    controllers: [QuizController, QuestionController],
    imports: [TypeOrmModule.forFeature([QuizRepository, QuestionRepository])],
    providers : [QuizService, QuestionService],
})
export class QuizModule {}
