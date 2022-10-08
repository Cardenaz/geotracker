import { Either, Result, right } from "../../../../shared/core/Result";
import { UseCase } from "../../../../shared/core/UseCase";
import { EnableRealTimeLocationTrackingDTO } from "./EnableRealTimeLocationTrackingDTO";
import { EnableRealTimeLocationTrackingErrors } from "./EnableRealTimeLocationTrackingError";


type Response = Either<EnableRealTimeLocationTrackingErrors.GeneralError, Result<any>>; 

export class EnableRealTimeLocationTrackingUseCase implements 
UseCase<EnableRealTimeLocationTrackingDTO, Promise<Response>> {
   async execute(request: EnableRealTimeLocationTrackingDTO): Promise<Response> {
        return right(Result.ok<void>()); 
    }
  }