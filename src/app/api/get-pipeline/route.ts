import { NextResponse } from 'next/server'
import {getPipeline} from "@/shared/codepipeline";

export async function GET(request: Request) {
 //  console.log('the requst')
   // console.log(request);
    console.log('sdasdfasdf')
    console.log(request.url);
   // const {name}: Pipeline = await request.json();

 //   const res = await getPipeline(name);

  //  return NextResponse.json(res);
}

