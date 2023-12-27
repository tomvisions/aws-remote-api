/*import {ActionExecutionStatus, ActionState, StageState} from "@aws-sdk/client-codepipeline";
import {getPipelineState} from "@/shared/codepipeline/aws-sdk";
import {filterActionStates} from "@/shared/codepipeline/get-action-states";

export const filterActionStates = async (name:any)=> {
    const states: StageState[] | undefined = await getPipelineState(name);

    if (!states?.length) {
        return false;
    }
    const approvalState = states.filter( async (state: StageState) => {
        //     console.log('the state');
        //   console.log(state);
        if (!state.actionStates?.length) {
            return false;
        }

        const actionState : ActionState[] | undefined = await getActionStates(state);
   /*     const actionState = state.actionStates?.filter((action) => {
            //      console.log('the action')
            //    console.log(action);
            if (action.latestExecution?.status === ActionExecutionStatus.InProgress) {
                return action;
            }

            return false;
        });

        if (!actionState?.length) {
            return false;
        }
      //  console.log('the action state');
      //  console.log(actionState)
     //   token = actionState[0].latestExecution?.token;
        return actionState;
    });

    return approvalState;
}

*/

