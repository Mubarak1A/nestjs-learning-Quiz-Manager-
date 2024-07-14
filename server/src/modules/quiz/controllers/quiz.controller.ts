import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/createQuiz.dto';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService) {}

    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz();
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
