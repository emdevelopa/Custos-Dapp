// app/agreement/agreementTemplate/[id]/generateStaticParams.js

export async function generateStaticParams() {
    const paths = agreementData.map((item) => ({
      id: item.id.toString(),
    }));
    return paths;
  }
  