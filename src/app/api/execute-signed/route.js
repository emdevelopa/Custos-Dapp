import { fetchExecuteTransaction } from '@avnu/gasless-sdk';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { userAddress, typedData, signature, deploymentData } = await req.json();

  try {
    const options = {
      baseUrl: "https://starknet.api.avnu-fi",
      apiKey: process.env.NEXT_PUBLIC_AVNU_KEY
    };

    // Execute the signed transaction
    const result = await fetchExecuteTransaction(
      userAddress,
      JSON.stringify(typedData),
      signature,
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