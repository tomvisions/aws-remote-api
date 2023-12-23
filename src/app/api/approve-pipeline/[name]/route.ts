import { NextResponse } from 'next/server'
import {getPipeline, getPipelineState, putApprovalResult,} from "@/shared/codepipeline/aws-sdk";
import {
    ActionCategory,
    ActionDeclaration,
    GetPipelineCommandOutput,
    ActionExecutionStatus,
    StageState
} from "@aws-sdk/client-codepipeline";
import {StageDeclaration} from "@aws-sdk/client-codepipeline";
import {act} from "react-dom/test-utils";
import {filterStages} from "@/shared/codepipeline/filter-stages";
import {pipe} from "next/dist/build/webpack/config/utils";
import {filterStates} from "@/shared/codepipeline/filter-states";
import {isBoolean} from "util";
import {STATUS_CODES} from "http";


export async function POST(request: Request) {
    const name = await request.url.slice(request.url.lastIndexOf('/') + 1);
    const pipelineInfo = await getPipeline(name);
    const filteredStage: StageDeclaration = filterStages(pipelineInfo?.stages)[0];

    if (!filteredStage.actions?.length) {
        return NextResponse.json(pipelineInfo);
    }

    const action = filteredStage.actions[0];

    const states: StageState[] | undefined = await getPipelineState(name);

    if (states === undefined) {
        return NextResponse.json(pipelineInfo);
    }

    const filteredState = filterStates(states)[0];

    console.log('filteredState')
    console.log(filteredState);

    //   filteredState[0].latestExecution.token;
    /*
        const params = {
            actionName: action.name,
            pipelineName: name,
            result: {
                status: 'Approved',
                summary: 'approved by remote'
            },
            stageName: stage.name,
         //   token: token

}
*/

    return NextResponse.json(filteredState);
}
    /*
//    pipelineInfo.pipeline.
    //console.log(pipelineInfo)

    const test = pipelineInfo.stages.filter(async (stage:StageDeclaration) => {
        const actions :ActionDeclaration[] | undefined = stage.actions;
        if (actions === undefined) {
           return false;
        }
        const actionNeeded : ActionDeclaration[] = (actions).filter((action : ActionDeclaration) => {

            if (action.actionTypeId?.category === ActionCategory.Approval) {
                return action;
            }
        });

        if (!actionNeeded.length) {
            return false;
        }

        console.log('action needed');
        console.log(actionNeeded);
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
      //  })
    })
*/
