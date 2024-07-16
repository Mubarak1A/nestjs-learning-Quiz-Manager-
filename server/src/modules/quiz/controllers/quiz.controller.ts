import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';

@Controller('quiz')
export class QuizController {
    constructor(
        private readonly quizService: QuizService
    ) {}

    @Get('/')
    async getAllQuiz(): Promise<Quiz[]> {
        return await this.quizService.getAllQuiz();
    }

    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number) {
        return this.quizService.getQuizById(id)
    }

    @Post("/create")
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto){
        return this.quizService.createNewQuiz(quizData);
    }
}
