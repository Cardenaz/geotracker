import { EnableRealTimeLocationTrackingUseCase } from "./EnableRealTimeLocationTrackingUseCase";
import { startTrackingWasherUseCase } from "./index";

describe("Start Trip", () => {

    let useCase : EnableRealTimeLocationTrackingUseCase; 
beforeAll(() => {
useCase = new EnableRealTimeLocationTrackingUseCase(); 

})

    it("exists", () => {
        expect(startTrackingWasherUseCase).toBeDefined(); 
    }); 

    it("should enable the real time tracking of the washer", async () => {

        const result = await useCase.execute({}); 

        expect(result.isRight).toBeTruthy(); 
    }); 
})