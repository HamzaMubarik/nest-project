import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Quiz } from "../entites/quiz.entity";
import { QuizRepository } from "../repositories/quiz.repository";

@Injectable()

export class QuizService {
    
    constructor(@InjectRepository(QuizRepository) private quizRepository: QuizRepository){}

    getAllQuiz(){
    
        return [1, 2, 3, 'from quiz service'];
    }

    async getQuizById(id: number): Promise<Quiz>{
        return await this.quizRepository.findOne(id, {relations: ['questions']});
    }

    async createNewQuiz(quiz: CreateQuizDto ){
        try {
            return await this.quizRepository.save(quiz);
        } catch(e) {
            console.log('in catch',e);
            
        }

       
    }
}