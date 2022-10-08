import { Result } from "../../../../shared/core/Result";
import { UseCaseError } from "../../../../shared/core/UseCaseError";

export namespace EnableRealTimeLocationTrackingErrors {

    export class GeneralError extends Result<UseCaseError> {

        constructor() {
            super(false, {
                message: `An error occured`
            } as UseCaseError )
        }
        
    }
}