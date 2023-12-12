import { NextResponse } from 'next/server'
import {getAllPipelines} from "@/shared/codepipeline";

export async function GET() {
    const res = (await getAllPipelines()).pipelines;

    return NextResponse.json(res);
}

