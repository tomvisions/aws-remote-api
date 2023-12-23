import { NextResponse } from 'next/server'
import {getPipeline} from "@/shared/codepipeline/aws-sdk";

export async function GET(request: Request) {
    const name = await request.url.slice(request.url.lastIndexOf('/') + 1);
    const pipelineInfo = await getPipeline(name);

    return NextResponse.json(pipelineInfo);
}

