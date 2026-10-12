import React, { useState } from 'react';
import { X, MessageSquare, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { DISPLAY_PHONE, getTemplateCommissionUrl } from '../../utils/whatsapp';
import type { Template } from '../../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedTemplate?: Template | null;
}

export const CommissionModal: React.FC<Props> = ({ isOpen, onClose, selectedTemplate }) => {
  const [projectScope, setProjectScope] = useState('Full Bespoke Website');
  const [timeline, setTimeline] = useState('Standard (2-3 Weeks)');

  if (!isOpen) return null;

  const targetUrl = selectedTemplate
    ? getTemplateCommissionUrl(selectedTemplate.title)
    : `https://wa.me/6285219583336?text=${encodeURIComponent(
        `Hi NECTOR.UI! I would like to commission a custom website (${projectScope}, timeline: ${timeline}). Could you share your availability and estimated project fee?`
      )}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="mono badge-subtle">STUDIO COMMISSION</span>
            <h2>Commission a Website</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {selectedTemplate ? (
            <div className="modal-template-context">
              <span className="context-label mono">COMMISSIONING DESIGN INSPIRED BY:</span>
              <div className="context-card">
                <strong>{selectedTemplate.title}</strong>
                <p>{selectedTemplate.tagline}</p>
              </div>
            </div>
          ) : (
            <p className="modal-intro">
              NECTOR.UI creates bespoke digital experiences for studios, founders, architecture firms, and distinctive wedding celebrations.
            </p>
          )}

          <div className="modal-workflow">
            <span className="mono workflow-heading">OUR WORKING PROCESS</span>
            <div className="workflow-steps">
              <div className="wf-step">
                <span className="wf-num mono">01</span>
                <div>
                  <strong>Discovery & Brief</strong>
                  <p>Discussion of your brand identity, requirements, and reference aesthetics.</p>
                </div>
              </div>
              <div className="wf-step">
                <span className="wf-num mono">02</span>
                <div>
                  <strong>Art Direction & Code</strong>
                  <p>Design token architecture, bespoke layout, and production frontend engineering.</p>
                </div>
              </div>
              <div className="wf-step">
                <span className="wf-num mono">03</span>
                <div>
                  <strong>Responsive Hardening</strong>
                  <p>Testing across screen widths, accessibility checks, and performance optimization.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-options">
            <div className="opt-field">
              <label className="mono">DESIRED SCOPE</label>
              <select value={projectScope} onChange={e => setProjectScope(e.target.value)}>
                <option value="Full Bespoke Website">Full Bespoke Website (3-5 Pages)</option>
                <option value="Single Page Monograph / Portfolio">Single Page Monograph / Portfolio</option>
                <option value="Custom Wedding Celebration & RSVP">Custom Wedding Celebration & RSVP</option>
                <option value="Frontend Component Library & System">Frontend Component Library & System</option>
              </select>
            </div>

            <div className="opt-field">
              <label className="mono">TARGET TIMELINE</label>
              <select value={timeline} onChange={e => setTimeline(e.target.value)}>
                <option value="Expedited (7-10 Days)">Expedited (7-10 Days)</option>
                <option value="Standard (2-3 Weeks)">Standard (2-3 Weeks)</option>
                <option value="Flexible / Next Month">Flexible / Next Month</option>
              </select>
            </div>
          </div>

          <div className="modal-disclosure">
            <ShieldAlert size={15} />
            <span>
              This will launch WhatsApp directly at <strong>{DISPLAY_PHONE}</strong> with your consultation details prefilled.
            </span>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-modal-cancel" onClick={onClose}>
            Close
          </button>
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-modal-submit"
            onClick={onClose}
          >
            <MessageSquare size={16} />
            <span>Open WhatsApp Consultation</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};
