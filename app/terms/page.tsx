import React from 'react';

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-headline font-bold mb-8">Legal Framework</h1>
      <div className="prose prose-lg max-w-none font-sans text-on-surface-variant leading-relaxed space-y-6">
        <p>Welcome to Tryangle Tech. By engaging with our services or accessing our digital platforms, you agree to the following legal framework.</p>
        
        <h2 className="text-2xl font-headline font-bold text-on-surface mt-12">1. Intellectual Property</h2>
        <p>All architectural designs, codebases, and creative assets produced by Tryangle Tech remain the intellectual property of the firm until explicitly transferred via contract.</p>
        
        <h2 className="text-2xl font-headline font-bold text-on-surface mt-12">2. Service Engagement</h2>
        <p>Our consultancy services are provided on a project-by-project basis. Specific deliverables and timelines are outlined in individual Service Level Agreements (SLAs).</p>
        
        <h2 className="text-2xl font-headline font-bold text-on-surface mt-12">3. Limitation of Liability</h2>
        <p>Tryangle Tech provides high-precision engineering solutions. However, we are not liable for indirect or consequential damages arising from the use of our digital products beyond the scope of our insurance coverage.</p>
        
        <h2 className="text-2xl font-headline font-bold text-on-surface mt-12">4. Governing Law</h2>
        <p>This framework is governed by the laws of the Republic of India. Any disputes shall be settled in the courts of Ahmedabad, Gujarat.</p>
      </div>
    </div>
  );
}
