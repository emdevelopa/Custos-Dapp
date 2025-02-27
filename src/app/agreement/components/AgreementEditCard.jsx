import { handleClientScriptLoad } from "next/script";
import AgreementModal from "../create/page";
import React from "react";

const AgreementEditCard = ({ title, content, onBack }) => {
    const [templateCreate, setTemplateCreate] = React.useState(false);

    const handleClick = () => {
        setTemplateCreate(true);
    }

    return (
        <div>
            {!templateCreate ? <div className="w-full flex flex-col items-center py-8 gap-6">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-2 text-gray-300 w-[80%]">{content}</p>
                <div className="flex items-center gap-10 mt-5">
                    <button onClick={onBack} className="px-3 py-1 bg-blue-00 rounded">Return</button>
                    <button className="px-3 py-1 border-gradient rounded" onClick={handleClick}>Continue</button>
                </div>
            </div>
                :
                <AgreementModal initialStep={1} ttitle={title} tcontent={content} agreement="B" />}
        </div>
    )
};

export default AgreementEditCard;
