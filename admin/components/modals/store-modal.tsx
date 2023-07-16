"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { useStoreModal } from "@/hooks/use-store.modal";

export const StoreModal = () => {

    const storeModal = useStoreModal();

    return (
        <Modal title="Create store"
            description="Add a new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}

        >
            Future Create store form
        </Modal>
    );
};
