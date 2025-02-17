import { fetchBuildTypedData, fetchExecuteTransaction } from '@avnu/gasless-sdk';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { userAddress, calls, gasTokenAddress, maxGasTokenAmount, accountClassHash } = await req.json();
  
  try {
    const options = {
      // baseUrl: "https://starknet.api.avnu.fi",
      apiKey: process.env.NEXT_PUBLIC_AVNU_KEY
    };

    // Prepare the unsigned transaction
    const typedData = await fetchBuildTypedData(
      userAddress,
      calls,
      gasTokenAddress,
      maxGasTokenAmount,
      options,
      accountClassHash
    );

    console.log('server-side typed data...', typedData)

    // const replacer = (key, value) => 
    //   typeof value === 'bigint' ? value.toString() : value;

    return NextResponse.json({ typedData }, { status: 200 });

  } catch (error) {
    console.error("Preparation error:", error);
    return NextResponse.json(
      { error: error.message || 'Transaction preparation failed' },
      { status: 500 }
    );
  }
}