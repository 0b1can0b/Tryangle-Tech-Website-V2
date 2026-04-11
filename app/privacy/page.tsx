import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-headline font-bold mb-8">Privacy Protocol</h1>
      <div className="prose prose-lg max-w-none font-sans text-on-surface-variant leading-relaxed space-y-6">
        <p>At Tryangle Tech, we treat your data with the same architectural integrity we apply to our engineering projects. This Privacy Protocol outlines how we handle information.</p>
        
        <h2 className="text-2xl font-headline font-bold text-on-surface mt-12">1. Data Collection</h2>
        <p>We collect only the essential information required to provide our consultancy services. This includes contact details provided through our inquiry forms.</p>
        
        <h2 className="text-2xl font-headline font-bold text-on-surface mt-12">2. Usage of Information</h2>
        <p>Your data is used exclusively for communication and project management. We do not sell, trade, or otherwise transfer your information to outside parties.</p>
        
        <h2 className="text-2xl font-headline font-bold text-on-surface mt-12">3. Security Standards</h2>
        <p>We implement industry-standard security measures to maintain the safety of your personal information. Our digital infrastructure is audited regularly for vulnerabilities.</p>
        
        <h2 className="text-2xl font-headline font-bold text-on-surface mt-12">4. Contact Us</h2>
        <p>If you have any questions regarding this protocol, you may contact our data protection officer at info@tryangle.tech.</p>
      </div>
    </div>
  );
}
