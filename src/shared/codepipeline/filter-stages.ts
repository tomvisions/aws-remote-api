import {
    ActionCategory,
    ActionDeclaration,
    ActionExecutionStatus, PipelineDeclaration,
    StageDeclaration,
    StageState
} from "@aws-sdk/client-codepipeline";
import {getPipelineState, putApprovalResult} from "@/shared/codepipeline/aws-sdk";
import {filterActions} from "@/shared/codepipeline/filter-actions";


export const filterStages = (stages: StageDeclaration[] | undefined) : StageDeclaration[] => {

    if (stages === undefined) {
        return [];
    }

    return stages?.filter((stage: StageDeclaration) => {
        const actions: ActionDeclaration[] | undefined = stage.actions;

        if (actions === undefined) {
            return false;
        }

        const filteredActions : ActionDeclaration = filterActions(actions)[0];

        if (filteredActions === undefined) {
            return false;
        }

        return stage;
    });

  //  return filteredStages;
}
        /*
        const states: StageState[] | undefined = await getPipelineState(name);

        if (states === undefined) {
            return false;
        }
        // console.log('the states')
        // console.log(states);
        let token;
        const approvalState = states.filter((state) => {
            //     console.log('the state');
            //   console.log(state);
            if (!state.actionStates?.length) {
                return false;
            }

            const actionState = state.actionStates?.filter((action) => {
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
            console.log('the action state');
            console.log(actionState)
            token = actionState[0].latestExecution?.token;
            return actionState;
        })

        console.log('the state');
        console.log(approvalState);

        //    const token =  approvalState[0].actionStates[0]
        const params = {
            actionName: actionNeeded[0]['name'],
            pipelineName: name,
            result: {
                status: 'Approved',
                summary: 'approved by remote'
            },
            stageName: stage.name,
            token: token

        }

        console.log('params')
        console.log(params);
        const test = await putApprovalResult(params);
        console.log('the result');
        console.log(test);

        //   process.exit(0);
        //  console.log(getPipelineState(name));


//        Array.from(actions ?? []).map((test) => {
        //          console.log('tses')
        //        console.log(test);
        //  }) */
