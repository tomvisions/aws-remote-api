import { NextResponse } from 'next/server'
import {getPipeline, getPipelineState} from "@/shared/codepipeline";
import {ActionCategory, ActionDeclaration, GetPipelineCommandOutput, ActionExecutionStatus} from "@aws-sdk/client-codepipeline";
import {StageDeclaration} from "@aws-sdk/client-codepipeline";


export async function POST(request: Request) {
    const name = await request.url.slice(request.url.lastIndexOf('/') + 1);
    const pipelineInfo = await getPipeline(name);

//    pipelineInfo.pipeline.
    //console.log(pipelineInfo)

    const test = pipelineInfo.stages.map(async (stage:StageDeclaration) => {
    //    console.log('the stage')
      //  console.log(stage.actions);
        const actions :ActionDeclaration[] | undefined = stage.actions;
        const actionNeeded : any = (actions ?? []).map((action) => {
            if (action.actionTypeId?.category === ActionCategory.Approval) {
                return action;
            }
        });


        console.log('action needed');
        console.log(actionNeeded);
        const states = await getPipelineState(name);

        (states ?? []).map((state) => {
          if (state.latestExecution?.status === ActionExecutionStatus.InProgress) {


          }
        })

        const params = {
            actionName: actionNeeded['name'],
            pipelineName: name,
            result: {
                status: 'Approved',
                summary: 'approved by remote'
            },
            stageName: stage.name,


        }

        process.exit(0);
      //  console.log(getPipelineState(name));



//        Array.from(actions ?? []).map((test) => {
  //          console.log('tses')
    //        console.log(test);
      //  })
    })

    return NextResponse.json(pipelineInfo);
}

