import { fetchExecuteTransaction } from '@avnu/gasless-sdk';
import { NextResponse } from 'next/server';
import 'dotenv/config'

export async function POST(req) {
  const { userAddress, typedData, signature, deploymentData } = await req.json();

  try {
    const options = {
      baseUrl: "https://starknet.api.avnu.fi",
      apiKey: process.env.AVNU_KEY
    };

    const parsedSignature = {
      r: BigInt(signature.r),
      s: BigInt(signature.s),
      ...signature,
    };

    console.log('signature ...', parsedSignature);
    // Execute the signed transaction
    const result = await fetchExecuteTransaction(
      userAddress,
      JSON.stringify(typedData),
      parsedSignature,
      options,
      deploymentData
    );
    console.log('result...', await result.json());

    return NextResponse.json({ transactionHash: result.transactionHash }, { status: 200 });
  } catch (error) {
    console.error("Execution error:", error);
    return NextResponse.json(
      { error: error.message || 'Transaction execution failed' },
      { status: 500 }
    );
  }
}