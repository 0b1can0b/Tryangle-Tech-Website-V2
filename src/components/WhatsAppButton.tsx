const WhatsAppButton = () => {
  return (
    <a 
      className="fixed bottom-6 right-6 bg-[#25d366] text-white p-4 shadow-lg hover:scale-110 transition z-50 flex items-center justify-center" 
      href="https://wa.me/919033878806" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <span className="material-symbols-outlined text-3xl">chat</span>
    </a>
  );
};

export default WhatsAppButton;
