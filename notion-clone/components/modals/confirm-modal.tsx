"use client" ;

import { 
     AlertDialog,
     AlertDialogAction,
     AlertDialogCancel,
     AlertDialogContent,
     AlertDialogDescription,
     AlertDialogFooter,
     AlertDialogHeader,
     AlertDialogTitle,
     AlertDialogTrigger 
} from "../ui/alert-dialog";

import { Chicle } from "next/font/google";

interface ConfirmModalProps {
    children: React.ReactNode;
    onConfirm: () => void ;
};

export const ConfirmModal = ({
    children,
    onConfirm
}: ConfirmModalProps) => {
    const handleConfirm = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation() ;
        onConfirm() ;
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger onClick={(e) => e.stopPropagation()} asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure you want to delete this note ?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action can not be reversed.    
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={e => e.stopPropagation()}>
                        Cancel 
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirm}>
                        Confirm 
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}