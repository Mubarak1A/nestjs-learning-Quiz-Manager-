import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Option } from "../entities/option.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOptionDto } from "../dto/create-option.dto";
import { Question } from "../entities/question.entity";
import { text } from "stream/consumers";

@Injectable()
export class OptionService {
    constructor(
        @InjectRepository(Option) private readonly optionRepositoty: Repository<Option>
    ){}

    async createOption(option: CreateOptionDto, question: Question) {
        const newOption = await this.optionRepositoty.save({
            text: option.text,
            isCorrect: option.isCorrect,
        })

        question.options = [...question.options, newOption]
        await question.save()

        return newOption
    }
}