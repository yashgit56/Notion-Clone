"use client" ;

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Toolbar } from "@/app/(main)/_components/toolbar";
import { useParams } from "next/navigation";

interface DocumentIdPageProps {
    documentId: Id<"documents">
};

const DocumentIdPage = ({
    documentId
}: DocumentIdPageProps) => {
    const document = useQuery(api.documents.getById, {
        documentId: documentId ,
    }) ;

    if(document === undefined){
        <div>
            Loading... 
        </div>
    }

    if(document === null){
        return ( <div> Not Found </div> ) ;
    }

    return(
        <div className="pb-40">
            <div className="h-[35vh]" />
            <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
                {/* <Toolbar initialData={document} /> */}
            </div>
        </div>
    );
};

export default DocumentIdPage;