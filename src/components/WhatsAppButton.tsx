import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      className="fixed bottom-6 right-6 bg-[#25d366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50" 
      href="https://wa.me/919033878806" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
