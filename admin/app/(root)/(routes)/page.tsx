"use client"
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/button';
import { useStoreModal } from '@/hooks/use-store.modal';
import Image from 'next/image';
import { useEffect } from 'react';


const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};

export default SetupPage;