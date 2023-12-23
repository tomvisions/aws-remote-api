import {
    CodePipelineClient,
    ListPipelinesCommand,
    GetPipelineCommand,
    GetPipelineCommandOutput,
    PipelineDeclaration,
    GetPipelineStateCommand,
    GetPipelineStateCommandOutput, StageState,
    PutApprovalResultCommand
} from "@aws-sdk/client-codepipeline";

const REGION = 'us-east-1'

const client = new CodePipelineClient({'region': REGION});

/**
 * Get all the pipelines
 */
export const getAllPipelines = async () => {
    return await listPipeLinesCommand();
}

/**
 * Get pipeline
 * @param name
 */
export const getPipeline = async (name:string) : Promise<PipelineDeclaration | undefined> => {
    return (await getPipeLineCommand(name)).pipeline;
}

export const putApprovalResult = async (params:any) => {
    return putApprovalResultCommand(params)
}

const putApprovalResultCommand = async (params:any) => {
    try {

        const putApprovalResult = new PutApprovalResultCommand(params);

        return await client.send(putApprovalResult);
    } catch (error: any) {

        return error.toString();
    }
}

export const getPipelineState = async (name:string) : Promise<StageState[] | undefined> => {
    try {

        return (await getPipelineStateCommand(name)).stageStates
    } catch (error: any) {

        return error.toString();
    }
}

/**
 * Calling list pipelines from aws
 */
const getPipelineStateCommand = async (name:string) : Promise<GetPipelineStateCommandOutput> => {
    try {

        const getPipelineStateCommand = new GetPipelineStateCommand({name: name});

        return await client.send(getPipelineStateCommand);
    } catch (error: any) {

        return error.toString();
    }
}

/**
 * Calling list pipelines from aws
 */
const listPipeLinesCommand = async () => {
    try {

        const listPipeLinesCommand = new ListPipelinesCommand({});

        return await client.send(listPipeLinesCommand);
    } catch (error: any) {

        return error.toString();
    }
}


/**
 * Get a specific pipeline
 * @param name
 */
const getPipeLineCommand = async (name:string) : Promise<GetPipelineCommandOutput> => {
    try {


        const getPipeLineCommand = new GetPipelineCommand({name: name});

        return await client.send(getPipeLineCommand);
    } catch (error: any) {

        return error.toString();
    }
}