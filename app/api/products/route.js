import { NextResponse } from "next/server";


const 

export async function GET(){
 return NextResponse.json({
   "hello": "world",
   "name" :"neha"
 })
}