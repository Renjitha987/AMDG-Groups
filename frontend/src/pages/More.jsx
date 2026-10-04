import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Shield, FileText, Scale, Mail, Phone, Lock, CheckCircle2 } from 'lucide-react';
import { fetchLegal } from '../api';

export default function More() {
  const [activeTab, setActiveTab] = useState('copyright');
  const [legalData, setLegalData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#privacy') setActiveTab('privacy');
    else if (location.hash === '#terms') setActiveTab('terms');
    else if (location.hash === '#copyright') setActiveTab('copyright');
  }, [location]);

  useEffect(() => {
    async function load() {
      const data = await fetchLegal(activeTab);
      setLegalData(data);
    }
    load();
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-50/40">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#1f1f1f] via-[#2c3e50] to-[#1f1f1f] text-white py-16 sm:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-amdg-blue font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20">
            Legal &amp; Compliance
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-montserrat tracking-tight mt-3">
            Policy &amp; Terms
          </h1>
          <p className="text-base sm:text-lg font-bitter text-gray-300 mt-2 italic">
            Privacy Policy, Copyright Terms, and Terms &amp; Conditions of AMDG GROUP OF COMPANIES.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-10 overflow-x-auto">
          <button
            onClick={() => setActiveTab('copyright')}
            className={`flex items-center gap-2 py-3 px-6 font-montserrat font-bold text-sm border-b-2 transition-all shrink-0 ${
              activeTab === 'copyright'
                ? 'border-amdg-blue text-amdg-blue'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Shield className="w-4 h-4" />
            Copyright Terms
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 py-3 px-6 font-montserrat font-bold text-sm border-b-2 transition-all shrink-0 ${
              activeTab === 'terms'
                ? 'border-amdg-blue text-amdg-blue'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Scale className="w-4 h-4" />
            Terms and Conditions
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 py-3 px-6 font-montserrat font-bold text-sm border-b-2 transition-all shrink-0 ${
              activeTab === 'privacy'
                ? 'border-amdg-blue text-amdg-blue'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Lock className="w-4 h-4" />
            Privacy Policy
          </button>
        </div>

        {/* Tab 1: Copyright Terms */}
        {activeTab === 'copyright' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8 animate-fade-in font-bitter text-gray-800">
            <div className="border-b border-gray-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amdg-blue">Intellectual Property</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-gray-900 mt-1">
                Copyright Terms
              </h2>
              <p className="text-sm text-gray-500 font-semibold mt-1">
                © AMDG GROUP OF COMPANIES. All Rights Reserved.
              </p>
            </div>

            <div className="space-y-6 text-sm sm:text-base leading-relaxed">
              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  1. Ownership
                </h3>
                <p>
                  All content, including but not limited to text, graphics, logos, icons, images, designs, brochures, and documentation, found in AMDG Group's materials and publications (including this brochure), are the exclusive property of <strong className="text-gray-900">AMDG GROUP OF COMPANIES</strong>, unless otherwise stated.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  2. Copyright Protection
                </h3>
                <p>
                  This document and all its contents are protected under <strong>Indian Copyright Law</strong> and applicable <strong>international copyright conventions</strong>. Unauthorized copying, reproduction, modification, distribution, or republication of any part of this document, in any form or by any means, is strictly prohibited without prior written permission from AMDG Group.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  3. Use of Content
                </h3>
                <p>
                  The use of AMDG Group’s materials is permitted only:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>For informational or educational purposes,</li>
                  <li>With clear and full attribution to AMDG Group,</li>
                  <li>Without any alteration to the original content,</li>
                  <li>And not for commercial resale, duplication, or public broadcast without permission.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  4. Trademarks &amp; Branding
                </h3>
                <p>
                  The names, logos, slogans, brand identity, and visual elements (such as "Deliver Excellence", "Foster Innovation", and “Empower Growth”) used within this brochure and other AMDG publications are trademarks or registered trademarks of AMDG Group. Use of these marks without prior written consent is strictly forbidden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  5. Third-Party Rights
                </h3>
                <p>
                  If any third-party content is used or referenced within AMDG materials, such use is with proper attribution and does not imply any endorsement. All rights of the respective owners are acknowledged.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  6. Confidentiality
                </h3>
                <p>
                  All proprietary information shared within AMDG Group’s documents is confidential and intended for designated readers. Any unauthorized sharing, dissemination, or commercial use of this information is a breach of our confidentiality terms.
                </p>
              </div>

              {/* Reporting Violations Box */}
              <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-2">
                  7. Reporting Violations
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  To report any copyright or intellectual property violations related to AMDG Group content, please contact:
                </p>
                <div className="text-xs sm:text-sm font-semibold text-gray-800 space-y-1">
                  <p className="text-amdg-blue font-bold font-montserrat">Legal Affairs Team — AMDG GROUP OF COMPANIES</p>
                  <p>Email: <a href="mailto:amdg.hub@gmail.com" className="text-amdg-blue hover:underline">amdg.hub@gmail.com</a></p>
                  <p>Phone: <a href="tel:+916282268453" className="text-amdg-blue hover:underline">+91 62822 68453</a></p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Terms and Conditions */}
        {activeTab === 'terms' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8 animate-fade-in font-bitter text-gray-800">
            <div className="border-b border-gray-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amdg-blue">User Agreement</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-gray-900 mt-1">
                Terms and Conditions
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-1">
                Effective Date: 20 June 2025 • Company: AMDG GROUP OF COMPANIES
              </p>
            </div>

            <div className="space-y-6 text-sm sm:text-base leading-relaxed">
              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  1. Introduction
                </h3>
                <p>
                  By accessing or engaging with AMDG Group’s services, platforms, or communications—including printed brochures, digital content, or company offerings—you agree to be bound by the following Terms and Conditions. Please read them carefully.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  2. Services Provided
                </h3>
                <p>
                  AMDG Group provides a range of services and solutions in the fields of media, innovation, digital design, consulting, and community development. All services are delivered with a commitment to integrity, excellence, and social impact.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  3. Intellectual Property
                </h3>
                <p>
                  All materials produced by AMDG Group, including but not limited to text, graphics, branding elements, and digital media, are the intellectual property of AMDG Group. You may not use, copy, reproduce, modify, distribute, or publish any content without prior written permission.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  4. User Responsibilities
                </h3>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-700">
                  <li>Must provide accurate and truthful information when requested.</li>
                  <li>Are responsible for maintaining the confidentiality of any non-public information shared.</li>
                  <li>Must not misuse or misrepresent AMDG Group’s name, brand, or services.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  5. Confidentiality
                </h3>
                <p>
                  AMDG Group maintains strict confidentiality regarding all client projects, communications, and proprietary information. Likewise, clients and partners are expected to treat shared information with the same level of confidentiality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  6. Code of Conduct
                </h3>
                <p>
                  AMDG Group operates under a strong ethical framework. We uphold transparency, inclusivity, and sustainability. All stakeholders are expected to act with mutual respect and professionalism. Harassment, discrimination, or unethical conduct will not be tolerated.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  7. Payment &amp; Contracts
                </h3>
                <p>
                  All services rendered by AMDG Group must be supported by written agreement or proposal. Payment terms, cancellation policies, and delivery timelines are defined in individual project agreements. Late payments may incur interest or result in service suspension.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  8. Liability Disclaimer
                </h3>
                <p>
                  AMDG Group is not liable for: Any indirect, incidental, or consequential damages arising from the use of its services; Or errors caused by third-party vendors, platforms, or systems beyond AMDG’s control.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  9. Termination of Service
                </h3>
                <p>
                  AMDG Group reserves the right to terminate any service or client relationship if there is a breach of agreement or ethical code, misuse of intellectual property is identified, or behavior is deemed detrimental to AMDG Group’s vision and values.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  10. Amendments
                </h3>
                <p>
                  These Terms and Conditions may be updated periodically. Clients and users are encouraged to review them regularly. Continued use of our services implies acceptance of the latest version.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-1">
                  11. Governing Law
                </h3>
                <p>
                  These Terms shall be governed by the laws of <strong>India</strong>, with jurisdiction in the <strong>State of Kerala</strong>.
                </p>
              </div>

              {/* Contact Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-2">
                  12. Contact Information
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  For inquiries or concerns related to these Terms and Conditions, please contact:
                </p>
                <div className="text-xs sm:text-sm font-semibold text-gray-800 space-y-1">
                  <p className="text-amdg-blue font-bold font-montserrat">Legal &amp; Compliance Department — AMDG GROUP OF COMPANIES</p>
                  <p>Phone: <a href="tel:+916282268453" className="text-amdg-blue hover:underline">+91 62822 68453</a></p>
                  <p>Email: <a href="mailto:groupamdg.india@gmail.com" className="text-amdg-blue hover:underline">groupamdg.india@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Privacy Policy */}
        {activeTab === 'privacy' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-6 animate-fade-in font-bitter text-gray-800">
            <div className="border-b border-gray-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amdg-blue">Data Protection</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-gray-900 mt-1">
                Privacy Policy
              </h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                AMDG GROUP OF COMPANIES is committed to safeguarding your privacy. We collect customer information—such as your name, telephone number, email, and shipping address—strictly for the fulfillment of orders via Memory Moulds, service quotations, and client support communications.
              </p>
              <p>
                We do not sell, rent, or trade your personal data with any unauthorized third parties. All communications conducted via WhatsApp Chat and official contact channels are kept strictly confidential between you and the AMDG Group team.
              </p>
              <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-emerald-700 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5" />
                <span>Your information is safe and handled under highest ethical principles.</span>
              </div>
            </div>
          </div>
        )}

      </section>
    </div>
  );
}
