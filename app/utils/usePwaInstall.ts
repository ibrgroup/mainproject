import { useEffect, useState } from 'react';

type DeferredPromptType = BeforeInstallPromptEvent | null;

export const usePwaInstall = () => {
    const [showModal, setShowModal] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<DeferredPromptType>(null); // Уточнили тип

    useEffect(() => {
      if ('serviceWorker' in navigator && 'beforeinstallprompt' in window) {
        window.addEventListener('beforeinstallprompt', (event: BeforeInstallPromptEvent) => { // Используем точный тип
          event.preventDefault();
          setDeferredPrompt(event);
          setShowModal(true);
        });

        window.addEventListener('appinstalled', () => {
          console.log('Приложение установлено');
        });
      }
    }, []);

    return { showModal, deferredPrompt };
};