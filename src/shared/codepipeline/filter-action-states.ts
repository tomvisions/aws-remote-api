import {ActionExecutionStatus, ActionState, StageState} from "@aws-sdk/client-codepipeline";
export const filterActionStates = (actionStates:ActionState[]) : ActionState[]  => {

    return actionStates.filter((action: ActionState) => {
        if (action.latestExecution?.status === ActionExecutionStatus.InProgress) {
            return action;
        }
    });
}



