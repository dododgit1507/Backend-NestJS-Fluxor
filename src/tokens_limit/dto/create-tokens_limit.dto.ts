import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class CreateTokensLimitDto {

    @IsNotEmpty()
    @IsNumber()
    limit_monthly: number;

    @IsNotEmpty()
    @IsNumber()
    cost_per_token: number;

    @IsNotEmpty()
    @IsBoolean()
    auto_refill: boolean;

    @IsNotEmpty()
    @IsNumber() 
    refill_amount: number;

    @IsNotEmpty()
    @IsNumber()
    umbrall_advertising_tokens: number;

}
