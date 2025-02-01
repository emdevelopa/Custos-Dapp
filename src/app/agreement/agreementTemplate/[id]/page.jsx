// app/agreement/agreementTemplate/[id]/page.jsx
'use client'; // Marking this file as a Client Component

import Loading from '@/components/loading';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

// Your agreement data (this could come from an API or a static file in practice)
const agreementData = [
    {
      id: 1,
      title: "Definitions",
      content:
        "NON-DISCLOSURE AGREEMENT\nThis Non-Disclosure Agreement (\"Agreement\") is entered into as of October 10, 2024, by and between:\nDisclosing party\nIngoude Company 123 Anywhere St. Any City 12345\nReceiving party\nLarana Inc. 123 Anywhere St. Any City 12345\n1. Definitions \nConfidential Information: Any financial reports, technical data, customer lists, or proprietary processes related to Ingoude Company's software development projects. \nPermitted Purpose: To evaluate a potential partnership between Ingoude Company and Larana Inc. for developing new software solutions. \n2. Obligations of the Receiving Party \nThe Receiving Party agrees to:\n Keep all technical data and customer lists confidential. \nUse such information solely to evaluate the potential partnership. \nTake reasonable steps to prevent unauthorized disclosure.  \n3. Exclusions from Confidentiality \nThe Receiving Party’s obligations shall not apply to any information that: \nBecomes publicly available through no fault of Larana Inc.;\n Is obtained from a third party without obligation of confidentiality; \nIs independently developed by Larana Inc. without reference to the Confidential Information;\nIs required to be disclosed under applicable law.  \n4. Return or Destruction of Materials Upon termination of this Agreement, Larana Inc. will return or destroy all data provided by Ingoude Company.  ",
    },
    {
      id: 2,
      title: "Obligations of the Receiving Party",
      content:
        "The Receiving Party agrees to: Keep all technical data and customer lists confidential. Use such information solely to evaluate the potential partnership. Take reasonable steps to prevent unauthorized disclosure.",
    },
    {
      id: 3,
      title: "Exclusions from Confidentiality",
      content:
        "The Receiving Party’s obligations shall not apply to any information that: Becomes publicly available through no fault of Larana Inc.; Is obtained from a third party without obligation of confidentiality; Is independently developed by Larana Inc. without reference to the Confidential Information; Is required to be disclosed under applicable law.",
    },
    {
      id: 4,
      title: "Return or Destruction of Materials",
      content:
        "NON-DISCLOSURE AGREEMENT\nThis Non-Disclosure Agreement (\"Agreement\") is entered into as of October 10, 2024, by and between:\nDisclosing party\nIngoude Company 123 Anywhere St. Any City 12345\nReceiving party\nLarana Inc. 123 Anywhere St. Any City 12345\n1. Definitions \nConfidential Information: Any financial reports, technical data, customer lists, or proprietary processes related to Ingoude Company's software development projects. \nPermitted Purpose: To evaluate a potential partnership between Ingoude Company and Larana Inc. for developing new software solutions. \n2. Obligations of the Receiving Party \nThe Receiving Party agrees to:\n Keep all technical data and customer lists confidential. \nUse such information solely to evaluate the potential partnership. \nTake reasonable steps to prevent unauthorized disclosure.  \n3. Exclusions from Confidentiality \nThe Receiving Party’s obligations shall not apply to any information that: \nBecomes publicly available through no fault of Larana Inc.;\n Is obtained from a third party without obligation of confidentiality; \nIs independently developed by Larana Inc. without reference to the Confidential Information;\nIs required to be disclosed under applicable law.  \n4. Return or Destruction of Materials Upon termination of this Agreement, Larana Inc. will return or destroy all data provided by Ingoude Company.  ",
    },
    {
      id: 5,
      title: "Term",
      content:
        "NON-DISCLOSURE AGREEMENT\nThis Non-Disclosure Agreement (\"Agreement\") is entered into as of October 10, 2024, by and between:\nDisclosing party\nIngoude Company 123 Anywhere St. Any City 12345\nReceiving party\nLarana Inc. 123 Anywhere St. Any City 12345\n1. Definitions \nConfidential Information: Any financial reports, technical data, customer lists, or proprietary processes related to Ingoude Company's software development projects. \nPermitted Purpose: To evaluate a potential partnership between Ingoude Company and Larana Inc. for developing new software solutions. \n2. Obligations of the Receiving Party \nThe Receiving Party agrees to:\n Keep all technical data and customer lists confidential. \nUse such information solely to evaluate the potential partnership. \nTake reasonable steps to prevent unauthorized disclosure.  \n3. Exclusions from Confidentiality \nThe Receiving Party’s obligations shall not apply to any information that: \nBecomes publicly available through no fault of Larana Inc.;\n Is obtained from a third party without obligation of confidentiality; \nIs independently developed by Larana Inc. without reference to the Confidential Information;\nIs required to be disclosed under applicable law.  \n4. Return or Destruction of Materials Upon termination of this Agreement, Larana Inc. will return or destroy all data provided by Ingoude Company.  ",
    },
    {
      id: 6,
      title: "No License",
      content:
        "NON-DISCLOSURE AGREEMENT\nThis Non-Disclosure Agreement (\"Agreement\") is entered into as of October 10, 2024, by and between:\nDisclosing party\nIngoude Company 123 Anywhere St. Any City 12345\nReceiving party\nLarana Inc. 123 Anywhere St. Any City 12345\n1. Definitions \nConfidential Information: Any financial reports, technical data, customer lists, or proprietary processes related to Ingoude Company's software development projects. \nPermitted Purpose: To evaluate a potential partnership between Ingoude Company and Larana Inc. for developing new software solutions. \n2. Obligations of the Receiving Party \nThe Receiving Party agrees to:\n Keep all technical data and customer lists confidential. \nUse such information solely to evaluate the potential partnership. \nTake reasonable steps to prevent unauthorized disclosure.  \n3. Exclusions from Confidentiality \nThe Receiving Party’s obligations shall not apply to any information that: \nBecomes publicly available through no fault of Larana Inc.;\n Is obtained from a third party without obligation of confidentiality; \nIs independently developed by Larana Inc. without reference to the Confidential Information;\nIs required to be disclosed under applicable law.  \n4. Return or Destruction of Materials Upon termination of this Agreement, Larana Inc. will return or destroy all data provided by Ingoude Company.  ",
    },
  ];

const AgreementPage = ({ params }) => {
  const { id } = params;

  
  const agreement = agreementData.find((item) => item.id === parseInt(id));
  const [content, setContent] = useState(agreement.content);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchAgreementData = async () => {
    setLoading(true);
    try {
      // Simulate a delay (fetch data here if needed)
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('An error occurred while loading the agreement.');
      setLoading(false);
    }
  };


  useState(() => {
    fetchAgreementData();
  }, []);

 

  if (!agreement) {
    return <p>Agreement not found.</p>;
  }




  if (loading) {
    return (
      <div className="text-[#EAFBFF] flex justify-center items-center h-screen">
        <Loading text={`Loading Agreement from  Blockchain...`} />
      </div>
    );
  } 
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };


  const handleSave = async () => {
    try {
      setLoading(true);
      setError(null);
      // Simulate saving data (replace with actual save logic)
      console.log(`Saving: ${content}`);
      setIsEditing(false);
    } catch (err) {
      setError('An error occurred while saving the agreement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="flex items-start float-left">
      <button
        className="w-fit text-[#EAFBFF]"
        onClick={() => window.history.back()}
      >
        <div className="w-fit flex justify-start items-center">
          <FaArrowLeft className="mr-2 mt-[3px] text-[#EAFBFF]" />
          <p className="text-[#EAFBFF] font-bold">Back</p>
        </div>
      </button>
    </div>

    <div className="w-full py-8 px-4 flex justify-center">
      <div className="w-full max-w-[780px]">
        {/* Centered Header with white background */}
        <h2 className="text-[#091219] text-[24px] font-semibold text-center bg-white py-2 px-4">
          {agreement.title}
        </h2>

        {error && (
          <div className="bg-red-500 text-white p-2 mt-4 rounded">
            <p>{error}</p>
          </div>
        )}

        {isEditing ? (
          <div className="mt-4">
            <textarea
              value={content}
              onChange={handleContentChange}
              rows="10"
              className="w-full p-2 bg-[#091219] text-[#EAFBFF] border border-[#19B1D2] rounded"
            />
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={handleSave}
                disabled={loading}
                className="bg-gradient-to-r from-[#19B1D2] to-[#0094FF] text-white px-4 py-2 rounded"
              >
                {loading ? 'Saving...' : 'Save'}
              </button>
              <button
                onClick={toggleEditMode}
                className="bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
            <div className="mt-0">
            <pre className="bg-white px-4 py-2 text-[16px] text-[#091219] whitespace-pre-wrap">{content}</pre>
            
            <div className="mt-4 flex flex-col sm:flex-row sm:justify-between">
              <button
                onClick={toggleEditMode}
                className="text-[#EAFBFF] border border-[#19B1D2] bg-[#091219] px-6 py-3 rounded-[104px] mb-4 sm:mb-0"
              >
                Edit Agreement
              </button>
          
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={toggleEditMode}
                  className="bg-gradient-to-r from-[#19B1D2] to-[#0094FF] text-white px-6 py-3 rounded-[104px] mb-4 sm:mb-0"
                >
                  Print Agreement
                </button>
          
                <button
                  onClick={toggleEditMode}
                  className="text-[#EAFBFF] border border-[#19B1D2] bg-[#091219] px-6 py-3 rounded-[104px] mb-4 sm:mb-0"
                >
                  Validate Agreement
                </button>
              </div>
            </div>
          </div>
          
        )}
      </div>
    </div>
  </>
  );
};

export default AgreementPage;
