import { NextResponse } from 'next/server'
import {getAllPipelines} from "@/shared/codepipeline/aws-sdk";

export async function GET() {
    const res = (await getAllPipelines()).pipelines;

    return NextResponse.json(res);
}

