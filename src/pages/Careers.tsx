import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  UploadCloud,
  CheckCircle2,
  X,
  ChevronDown,
  ShieldCheck,
  ChevronRight,
  FileText,
  Users,
  Target,
  Award,
  Trash2,
  Plus,
} from 'lucide-react';
import { useSEO } from '@/lib/useSEO';
import { PageTransition } from '@/components/PageTransition';

interface Job {
  id: string;
  title: string;
  department: 'sales' | 'sourcing' | 'logistics' | 'admin';
  deptLabel: string;
  type: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

const JOBS_DATA: Job[] = [
  {
    id: 'ie-job-001',
    title: 'Sales Country Head (1 Vacancy)',
    department: 'sales',
    deptLabel: 'Sales & Business Development',
    type: 'Full-time',
    overview: 'Lead the national sales strategy and drive enterprise procurement partnerships within your assigned country. You will be responsible for expanding our B2B client base and managing regional sales executives.',
    responsibilities: [
      'Develop and execute localized sales strategies to secure new enterprise clients.',
      'Lead negotiations and close high-value B2B procurement and supply contracts.',
      'Manage and mentor a regional team of EU Sales Executives.',
      'Analyze market trends to identify new sourcing and supply chain opportunities.'
    ],
    requirements: [
      '5+ years of B2B sales leadership experience in industrial or procurement sectors.',
      'Proven track record of closing six-figure enterprise contracts.',
      'Strong regional network of manufacturing and industrial connections.',
      'Excellent negotiation and strategic planning skills.'
    ],
    benefits: [
      'Competitive base salary + uncapped commission',
      'Executive car allowance & travel budget',
      'Health insurance & wellness benefits',
      'Annual global leadership retreat'
    ],
  },
  {
    id: 'ie-job-002',
    title: 'Sales Executive (1 Vacancy per EU Country)',
    department: 'sales',
    deptLabel: 'Sales & Business Development',
    type: 'Full-time',
    overview: 'Drive outbound sales and B2B client acquisition across the EU. We are hiring one dedicated Sales Executive per EU country to build local relationships and expand our procurement network.',
    responsibilities: [
      'Identify and prospect potential B2B clients within your assigned EU country.',
      'Conduct product presentations and pitch supply chain solutions to key decision-makers.',
      'Maintain CRM hygiene and build a robust sales pipeline.',
      'Collaborate with the Country Head to meet and exceed quarterly revenue targets.'
    ],
    requirements: [
      '2+ years of B2B sales or account management experience.',
      'Native fluency in the language of your assigned EU country, plus professional English.',
      'Strong communication, presentation, and relationship-building skills.',
      'Familiarity with industrial supply chains or procurement is a plus.'
    ],
    benefits: [
      'Competitive base salary + performance bonuses',
      'Remote/Hybrid work environment',
      'Comprehensive sales training program',
      'Opportunity for rapid career progression'
    ],
  },
  {
    id: 'ie-job-003',
    title: 'Sourcing Specialist (1 Vacancy)',
    department: 'sourcing',
    deptLabel: 'Sourcing & Supply Chain',
    type: 'Full-time',
    overview: 'Manage the procurement lifecycle by sourcing high-quality industrial materials, electronics, and mechanical parts from verified global manufacturers while ensuring strict adherence to EU standards.',
    responsibilities: [
      'Identify, vet, and onboard reliable manufacturing partners and suppliers.',
      'Negotiate pricing, SLAs, and lead times to ensure optimal cost-efficiency.',
      'Conduct regular audits and compliance checks on incoming materials.',
      'Work closely with logistics and sales to ensure smooth product delivery.'
    ],
    requirements: [
      '3+ years of experience in global sourcing or supply chain management.',
      'Strong understanding of EU import regulations and quality standards (ISO).',
      'Excellent analytical and negotiation skills.',
      'Fluent in English; additional languages are advantageous.'
    ],
    benefits: [
      'Hybrid workflow options',
      'International travel opportunities for supplier audits',
      'Premium private healthcare',
      'Continuous professional development budget'
    ],
  },
  {
    id: 'ie-job-004',
    title: 'Logistics Coordinator (1 Vacancy)',
    department: 'logistics',
    deptLabel: 'Logistics & Operations',
    type: 'Full-time',
    overview: 'Ensure seamless, end-to-end movement of goods across borders. You will oversee DDP shipping, customs clearance, and warehouse distribution to guarantee our clients receive their orders on time.',
    responsibilities: [
      'Coordinate international freight (air, sea, and land) with 3PL partners.',
      'Manage all customs documentation, tariffs, and import/export compliance.',
      'Monitor shipments in real-time and proactively resolve any transit delays.',
      'Optimize freight routes to reduce transportation costs and lead times.'
    ],
    requirements: [
      '2+ years of experience in international logistics, freight forwarding, or customs.',
      'Deep knowledge of European import/export regulations and DDP terms.',
      'Strong organizational skills and ability to manage multiple shipments simultaneously.',
      'Proficiency in logistics tracking software and ERP systems.'
    ],
    benefits: [
      'Competitive salary and performance incentives',
      'Flexible working hours',
      'Comprehensive health coverage',
      'Dynamic and fast-paced operational environment'
    ],
  },
  {
    id: 'ie-job-005',
    title: 'Admin, Accounting & Finance Officer (1 Vacancy)',
    department: 'admin',
    deptLabel: 'Administration & Finance',
    type: 'Full-time',
    overview: 'Maintain the financial and administrative backbone of our operations. You will handle accounting, payroll, general administration, and ensure our shipment financial records are perfectly updated.',
    responsibilities: [
      'Manage daily accounting tasks, including invoicing, accounts payable/receivable, and payroll.',
      'Update shipment financial ledgers and reconcile cross-border transaction costs.',
      'Oversee general office administration and internal HR compliance.',
      'Prepare monthly financial reports and assist with annual audits.'
    ],
    requirements: [
      'Degree in Accounting, Finance, or Business Administration.',
      '3+ years of experience in corporate accounting or financial administration.',
      'Proficiency in modern accounting software (e.g., Xero, QuickBooks, or SAP).',
      'High attention to detail and strong ethical standards.'
    ],
    benefits: [
      'Stable, predictable working hours',
      'Generous paid time off',
      'Health and wellness allowances',
      'Supportive and collaborative team culture'
    ],
  }
];

/* ─── Application Drawer Portal ─────────────────────────────────────── */

interface DrawerProps {
  job: Job;
  onClose: () => void;
}

const ApplicationDrawer: React.FC<DrawerProps> = ({ job, onClose }) => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStage, setSubmitStage] = useState<
    'idle' | 'secure_connect' | 'transmitting' | 'verifying' | 'success'
  >('idle');
  const [trackingNumber, setTrackingNumber] = useState('');

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const isProcessing =
    submitStage === 'secure_connect' ||
    submitStage === 'transmitting' ||
    submitStage === 'verifying';

  const handleClose = () => {
    if (!isProcessing) onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setResumeFile(e.target.files[0]);
      setErrors((p) => ({ ...p, resume: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!applicantName.trim()) errs.name = 'Full name is required.';
    if (!applicantEmail.trim()) errs.email = 'Corporate email is required.';
    else if (!/\S+@\S+\.\S+/.test(applicantEmail))
      errs.email = 'Please provide a valid corporate email.';
    if (!applicantPhone.trim()) errs.phone = 'Contact number is required.';
    if (!coverLetter.trim()) errs.cover = 'Please write a brief summary of your background.';
    if (!resumeFile) errs.resume = 'Please attach your professional CV / resume.';
    if (!agreedToTerms) errs.terms = 'You must consent to data processing for recruitment purposes.';

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitStage('secure_connect');
    setTimeout(() => setSubmitStage('transmitting'), 1200);
    setTimeout(() => setSubmitStage('verifying'), 2500);
    setTimeout(() => {
      setTrackingNumber(`IE-HR-${Math.floor(10000 + Math.random() * 90000)}`);
      setSubmitStage('success');
    }, 3800);
  };

  const inputCls = (field: string) =>
    `w-full px-4 py-3.5 bg-white border rounded-xl focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all text-nordic-black text-sm placeholder:text-nordic-grey/50 ${
      errors[field] ? 'border-red-400 bg-red-50/30' : 'border-beige/80'
    }`;

  const drawer = (
    <>
      {/* ── Backdrop ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={handleClose}
        className="fixed inset-0 bg-nordic-black/60 backdrop-blur-sm"
        style={{ zIndex: 9998 }}
      />

      {/* ── Panel ── */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        className="fixed top-0 right-0 h-full w-full max-w-xl bg-white shadow-2xl flex flex-col"
        style={{ zIndex: 9999 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Fixed Header ── */}
        <div className="shrink-0 px-6 pt-6 pb-5 border-b border-beige bg-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-block text-[9px] font-bold uppercase tracking-[0.18em] text-terracotta bg-terracotta/10 px-3 py-1 rounded-full mb-2">
                Applying For
              </span>
              <h2 className="text-xl font-bold text-nordic-black leading-tight">{job.title}</h2>
              <p className="text-xs text-nordic-grey mt-0.5 flex items-center gap-1.5">
                <span className="font-medium text-nordic-black/70">{job.deptLabel}</span>
                <span className="text-beige">•</span>
                <MapPin size={11} className="shrink-0" />
                {/* {job.location} */}
              </p>
            </div>
            <button
              onClick={handleClose}
              disabled={isProcessing}
              className="shrink-0 mt-1 w-8 h-8 rounded-full border border-beige flex items-center justify-center text-nordic-grey hover:text-terracotta hover:border-terracotta transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* ── Scrollable Body ── */}
        <div className="flex-1 overflow-y-auto">

          {/* Processing state */}
          {isProcessing && (
            <div className="h-full flex flex-col items-center justify-center gap-6 text-center px-8 py-16">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-beige" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.1, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-4 border-t-terracotta border-r-transparent border-b-transparent border-l-transparent"
                />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={submitStage}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-1.5 max-w-xs"
                >
                  <h4 className="text-base font-bold text-nordic-black">
                    {submitStage === 'secure_connect' && 'Establishing Secure Sourcing Tunnel'}
                    {submitStage === 'transmitting' && 'Encrypting Application Payload'}
                    {submitStage === 'verifying' && 'Verifying Credentials'}
                  </h4>
                  <p className="text-xs text-nordic-grey leading-relaxed">
                    {submitStage === 'secure_connect' &&
                      'Connecting to Helsinki HR server via AES-256 protocol…'}
                    {submitStage === 'transmitting' &&
                      'Uploading your resume and contact metadata securely…'}
                    {submitStage === 'verifying' &&
                      'Running final checksum audits on attached documents…'}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* Success state */}
          {submitStage === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-6 text-center px-8 py-12"
            >
              <div className="w-16 h-16 rounded-full bg-sage/15 flex items-center justify-center">
                <CheckCircle2 size={36} className="text-sage stroke-[2]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-nordic-black">Application Submitted!</h3>
                <p className="text-sm text-nordic-grey leading-relaxed max-w-xs mx-auto">
                  Thank you,{' '}
                  <span className="font-semibold text-nordic-black">{applicantName}</span>. Your
                  application for{' '}
                  <span className="font-semibold text-nordic-black">{job.title}</span> has been
                  logged on our secure server.
                </p>
              </div>

              {/* Receipt card */}
              <div className="w-full max-w-sm bg-cream/60 border border-beige rounded-2xl p-5 text-left space-y-3">
                {[
                  { label: 'Recruitment Code', value: trackingNumber, mono: true },
                  { label: 'Submission Date', value: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) },
                  { label: 'File Verified', value: resumeFile?.name ?? 'N/A' },
                ].map((row, i, arr) => (
                  <div
                    key={row.label}
                    className={`flex justify-between items-center ${i < arr.length - 1 ? 'pb-3 border-b border-beige/50' : ''}`}
                  >
                    <span className="text-[10px] font-bold text-nordic-grey uppercase tracking-wider">
                      {row.label}
                    </span>
                    <span
                      className={`text-xs font-semibold text-nordic-black ${row.mono ? 'font-mono text-terracotta' : ''}`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-nordic-grey max-w-xs leading-relaxed">
                A sourcing coordinator will review your credentials and contact you within 2
                business days. Please save your recruitment code for reference.
              </p>

              <button
                onClick={onClose}
                className="px-7 py-3 bg-nordic-black hover:bg-terracotta text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all"
              >
                Close & Return
              </button>
            </motion.div>
          )}

          {/* Form */}
          {submitStage === 'idle' && (
            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-nordic-grey">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={applicantName}
                    onChange={(e) => {
                      setApplicantName(e.target.value);
                      setErrors((p) => ({ ...p, name: '' }));
                    }}
                    placeholder="e.g. Erik Koskinen"
                    className={inputCls('name')}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-[10px] font-semibold">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-nordic-grey">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    value={applicantEmail}
                    onChange={(e) => {
                      setApplicantEmail(e.target.value);
                      setErrors((p) => ({ ...p, email: '' }));
                    }}
                    placeholder="erik@company.fi"
                    className={inputCls('email')}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[10px] font-semibold">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-nordic-grey">
                  Contact Number
                </label>
                <input
                  type="tel"
                  value={applicantPhone}
                  onChange={(e) => {
                    setApplicantPhone(e.target.value);
                    setErrors((p) => ({ ...p, phone: '' }));
                  }}
                  placeholder="+358 40 123 4567"
                  className={inputCls('phone')}
                />
                {errors.phone && (
                  <p className="text-red-500 text-[10px] font-semibold">{errors.phone}</p>
                )}
              </div>

              {/* Cover / Summary */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-nordic-grey">
                  Professional Summary & Fit
                </label>
                <textarea
                  rows={4}
                  value={coverLetter}
                  onChange={(e) => {
                    setCoverLetter(e.target.value);
                    setErrors((p) => ({ ...p, cover: '' }));
                  }}
                  placeholder="Summarise your experience and why you're an ideal fit for this role…"
                  className={`${inputCls('cover')} resize-none`}
                />
                {errors.cover && (
                  <p className="text-red-500 text-[10px] font-semibold">{errors.cover}</p>
                )}
              </div>

              {/* CV Upload */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-nordic-grey">
                  CV / Resume Attachment
                </label>
                {!resumeFile ? (
                  <div
                    className={`relative border-2 border-dashed rounded-xl p-5 text-center transition-all cursor-pointer ${
                      errors.resume
                        ? 'border-red-400 bg-red-50/20'
                        : 'border-beige hover:border-terracotta bg-beige/10 hover:bg-beige/20'
                    }`}
                  >
                    <input
                      type="file"
                      accept=".pdf,.docx,.doc"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <UploadCloud size={24} className="mx-auto text-nordic-grey mb-2" />
                    <p className="text-xs font-bold text-nordic-black uppercase tracking-wider">
                      Click or drag CV here
                    </p>
                    <p className="text-[10px] text-nordic-grey mt-0.5">
                      Accepts PDF, DOC, DOCX up to 10 MB
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between bg-sage/5 border border-sage/30 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-sage/15 text-sage flex items-center justify-center shrink-0">
                        <FileText size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-nordic-black truncate">{resumeFile.name}</p>
                        <p className="text-[9px] text-nordic-grey uppercase tracking-wider">
                          {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB · Ready to upload
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setResumeFile(null)}
                      className="shrink-0 ml-3 p-1.5 text-nordic-grey hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                )}
                {errors.resume && (
                  <p className="text-red-500 text-[10px] font-semibold">{errors.resume}</p>
                )}
              </div>

              {/* GDPR Consent */}
              <div className="space-y-1.5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="gdprConsent"
                    checked={agreedToTerms}
                    onChange={(e) => {
                      setAgreedToTerms(e.target.checked);
                      setErrors((p) => ({ ...p, terms: '' }));
                    }}
                    className="mt-0.5 w-4 h-4 rounded accent-terracotta cursor-pointer shrink-0"
                  />
                  <span className="text-xs text-nordic-grey leading-relaxed select-none">
                    I consent to IndoEuro Core Oy storing my personal details, email, and professional
                    records for secure B2B sourcing vacancy evaluation. Data is stored in our EU
                    database in compliance with GDPR.
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-red-500 text-[10px] font-semibold">{errors.terms}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-terracotta hover:bg-terracotta/90 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                Submit Audited Application <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>

        {/* ── Fixed Footer ── */}
        {submitStage === 'idle' && (
          <div className="shrink-0 px-6 py-3 border-t border-beige bg-cream/50 flex items-center justify-center gap-1.5">
            <ShieldCheck size={12} className="text-sage" />
            <span className="text-[9px] text-nordic-grey uppercase tracking-widest font-bold">
              SSL Encrypted · Helsinki HR Node
            </span>
          </div>
        )}
      </motion.div>
    </>
  );

  return createPortal(
    <AnimatePresence>{drawer}</AnimatePresence>,
    document.body
  );
};

/* ─── Main Careers Page ─────────────────────────────────────────────── */

export const Careers = () => {
  useSEO({
    title: 'Careers at IndoEuro Core Oy | Join Our Global Sourcing & Integration Team',
    description:
      'Build the future of B2B global trade. Explore premium opportunities in international sourcing, logistics, software engineering, and digital growth at our Helsinki headquarters.',
    keywords:
      'Careers IndoEuro Core Oy, B2B Sourcing Jobs Finland, Software Engineering Helsinki, Supply Chain Vacancies Europe',
  });

  const [activeCategory, setActiveCategory] = useState<
    'all' | 'sales' | 'sourcing' | 'logistics' | 'admin'
  >('all');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 3;

  const filterCategories: { label: string; value: typeof activeCategory }[] = [
    { label: 'All Openings', value: 'all' },
    { label: 'Sales & Business', value: 'sales' },
    { label: 'Sourcing', value: 'sourcing' },
    { label: 'Logistics', value: 'logistics' },
    { label: 'Admin & Finance', value: 'admin' },
  ];

  const filteredJobs =
    activeCategory === 'all'
      ? JOBS_DATA
      : JOBS_DATA.filter((j) => j.department === activeCategory);

  const visibleJobs = showAll ? filteredJobs : filteredJobs.slice(0, INITIAL_COUNT);
  const hiddenCount = filteredJobs.length - INITIAL_COUNT;

  const toggleExpand = (id: string) =>
    setExpandedJobId((prev) => (prev === id ? null : id));

  const handleCategoryChange = (val: typeof activeCategory) => {
    setActiveCategory(val);
    setExpandedJobId(null);
    setShowAll(false);
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-24 bg-cream grainy-bg min-h-screen relative overflow-hidden">

        {/* Ambient glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            style={{
              background: 'radial-gradient(circle, rgba(156,175,136,0.15) 0%, rgba(156,175,136,0) 70%)',
              willChange: 'transform',
            }}
            className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full"
          />
          <div
            style={{
              background: 'radial-gradient(circle, rgba(217,119,87,0.12) 0%, rgba(217,119,87,0) 70%)',
              willChange: 'transform',
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

          {/* ── Hero ── */}
          <header className="mb-20 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 bg-white text-nordic-black text-xs font-bold uppercase tracking-[0.15em] rounded-full mb-6 shadow-sm border border-beige"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta" />
              </span>
              Grow With Us
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-nordic-black"
            >
              Constructing the{' '}
              <span className="text-terracotta">Future of Global Trade.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-nordic-grey leading-relaxed max-w-3xl mx-auto"
            >
              IndoEuro Core Oy coordinates enterprise supply solutions between audited global
              manufacturing hubs and European companies. We look for individuals who value quality,
              reliability, and precision.
            </motion.p>
          </header>

          {/* ── Values Grid ── */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold mb-10 text-center text-nordic-black">
              Our Team Principles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: 'High-Trust Culture',
                  desc: 'We operate with a flat Nordic organisation. We believe in absolute autonomy, flexible working habits, and sustainable life-work balances.',
                },
                {
                  icon: Target,
                  title: 'Cross-Border Impact',
                  desc: 'Your work coordinates complex value chains between Indian manufacturing nodes, European customs corridors, and Nordic SME clients.',
                },
                {
                  icon: Award,
                  title: 'Unwavering Excellence',
                  desc: 'From high-tolerance mechanical components to sub-100ms web experiences, we never cut corners on quality.',
                },
              ].map((perk, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/50 backdrop-blur-sm border border-beige rounded-3xl p-8 hover:bg-white hover:scale-[1.02] hover:border-terracotta/40 transition-all duration-300 soft-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center mb-6">
                    <perk.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-nordic-black">{perk.title}</h3>
                  <p className="text-sm text-nordic-grey leading-relaxed">{perk.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Vacancies ── */}
          <section className="mb-24">

            {/* Section header + filters on same row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-10">
              <div className="shrink-0">
                <h2 className="text-3xl font-bold text-nordic-black">Available Vacancies</h2>
                <p className="text-sm text-nordic-grey mt-1">
                  Real-time open positions in Helsinki and remote.
                </p>
              </div>

              {/* ── Single-row scrollable filter strip ── */}
              <div className="-mx-1 px-1">
                <div className="flex flex-wrap md:flex-nowrap items-center gap-1.5 bg-beige/30 p-1.5 rounded-[1.5rem] md:rounded-full border border-beige/60 w-full md:w-max">
                  {filterCategories.map((cat) => {
                    const isActive = activeCategory === cat.value;
                    return (
                      <button
                        key={cat.value}
                        onClick={() => handleCategoryChange(cat.value)}
                        className={`relative whitespace-nowrap px-4 py-2 text-[11px] font-bold uppercase tracking-wider rounded-full transition-colors duration-200 ${
                          isActive
                            ? 'text-white'
                            : 'text-nordic-grey hover:text-nordic-black'
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="activeFilterBg"
                            className="absolute inset-0 bg-terracotta rounded-full -z-10"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10">{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── Job cards ── */}
            <div className="space-y-5">
              <AnimatePresence mode="popLayout">
                {filteredJobs.length > 0 ? (
                  <>
                    {visibleJobs.map((job) => {
                      const isExpanded = expandedJobId === job.id;
                      return (
                        <motion.div
                          key={job.id}
                          layout="position"
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.97 }}
                          transition={{ duration: 0.35 }}
                          className={`relative overflow-hidden rounded-3xl border transition-all duration-500 group ${
                            isExpanded
                              ? 'bg-white border-terracotta/60 shadow-xl ring-2 ring-terracotta/10 scale-[1.01]'
                              : 'bg-white/80 backdrop-blur-xl border-beige/60 hover:border-terracotta/30 hover:shadow-2xl hover:shadow-terracotta/10 hover:-translate-y-1'
                          }`}
                        >
                          {/* Ambient hover glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-terracotta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          {/* Card header */}
                          <div
                            onClick={() => toggleExpand(job.id)}
                            className="relative p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 cursor-pointer select-none z-10"
                          >
                            <div className="space-y-3 flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-3">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-terracotta bg-terracotta/10 border border-terracotta/20 px-3.5 py-1.5 rounded-full shadow-sm">
                                  {job.deptLabel}
                                </span>
                                <span className="text-xs text-nordic-grey font-medium flex items-center gap-1.5 bg-white/60 px-3 py-1 rounded-full border border-beige/40">
                                  <Clock size={12} className="text-nordic-black/40" /> {job.type}
                                </span>
                              </div>
                              <h3 className="text-2xl font-extrabold text-nordic-black tracking-tight group-hover:text-terracotta transition-colors duration-300">
                                {job.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-nordic-grey">
                                <span className="flex items-center gap-1">
                                  {/* <MapPin size={13} /> {job.location} */}
                                </span>
                                <span className="text-terracotta font-semibold text-sm">
                                  {/* {job.salary} */}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedJob(job);
                                }}
                                className="px-7 py-3.5 bg-gradient-to-r from-nordic-black to-nordic-black/90 text-white hover:from-terracotta hover:to-terracotta/90 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg hover:shadow-terracotta/30 transition-all duration-300"
                              >
                                Apply Now
                              </button>
                              <div
                                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-500 ${
                                  isExpanded
                                    ? 'rotate-180 border-terracotta text-terracotta bg-terracotta/10 shadow-inner'
                                    : 'border-beige text-nordic-black group-hover:border-terracotta/30 group-hover:bg-white'
                                }`}
                              >
                                <ChevronDown size={16} />
                              </div>
                            </div>
                          </div>

                          {/* Expandable details */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.32, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <div className="border-t border-beige/40 bg-cream/20 px-6 lg:px-8 py-7 space-y-7">
                                  <div>
                                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-nordic-grey mb-2">
                                      Role Overview
                                    </h5>
                                    <p className="text-sm text-nordic-grey leading-relaxed">
                                      {job.overview}
                                    </p>
                                  </div>

                                  <div className="grid md:grid-cols-2 gap-7">
                                    <div>
                                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-nordic-grey mb-3">
                                        Key Responsibilities
                                      </h5>
                                      <ul className="space-y-2.5">
                                        {job.responsibilities.map((r, i) => (
                                          <li
                                            key={i}
                                            className="text-sm text-nordic-grey flex items-start gap-2.5"
                                          >
                                            <ChevronRight
                                              size={13}
                                              className="text-terracotta shrink-0 mt-0.5"
                                            />
                                            {r}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-nordic-grey mb-3">
                                        Qualifications & Fit
                                      </h5>
                                      <ul className="space-y-2.5">
                                        {job.requirements.map((r, i) => (
                                          <li
                                            key={i}
                                            className="text-sm text-nordic-grey flex items-start gap-2.5"
                                          >
                                            <ChevronRight
                                              size={13}
                                              className="text-sage shrink-0 mt-0.5"
                                            />
                                            {r}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="pt-5 border-t border-beige/40 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                                    <div>
                                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-nordic-grey mb-2">
                                        Compensation & Benefits
                                      </h5>
                                      <div className="flex flex-wrap gap-2">
                                        {job.benefits.map((b, i) => (
                                          <span
                                            key={i}
                                            className="text-[11px] bg-white border border-beige text-nordic-black px-3 py-1 rounded-full font-medium"
                                          >
                                            {b}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                    <button
                                      onClick={() => setSelectedJob(job)}
                                      className="px-6 py-3 bg-terracotta hover:bg-terracotta/90 text-white text-[11px] font-bold uppercase tracking-wider rounded-full transition-all inline-flex items-center gap-2 shrink-0 self-start sm:self-center"
                                    >
                                      Apply for this role <ArrowRight size={13} />
                                    </button>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}

                    {/* Load More / Show Less */}
                    {filteredJobs.length > INITIAL_COUNT && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-center pt-4"
                      >
                        <button
                          onClick={() => setShowAll((v) => !v)}
                          className="group inline-flex items-center gap-2.5 px-7 py-3.5 border-2 border-terracotta/30 hover:border-terracotta text-nordic-black hover:text-terracotta text-xs font-bold uppercase tracking-wider rounded-full transition-all bg-white hover:bg-terracotta/5"
                        >
                          {showAll ? (
                            <>Show Less</>
                          ) : (
                            <>
                              <Plus
                                size={15}
                                className="group-hover:rotate-90 transition-transform duration-300"
                              />
                              Load {hiddenCount} More{' '}
                              {hiddenCount === 1 ? 'Opening' : 'Openings'}
                            </>
                          )}
                        </button>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16 bg-white border border-beige rounded-3xl"
                  >
                    <Briefcase className="mx-auto text-beige mb-4" size={36} />
                    <h4 className="text-lg font-bold text-nordic-black">No Openings Listed</h4>
                    <p className="text-sm text-nordic-grey max-w-xs mx-auto mt-1">
                      There are no positions currently listed under this division. Check back soon
                      or submit a general inquiry.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* ── Open Application CTA ── */}
          <section className="bg-nordic-black text-white rounded-[2.5rem] p-8 lg:p-12 soft-shadow border border-white/5 relative overflow-hidden text-center max-w-5xl mx-auto">
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(156,175,136,0.15) 0%, rgba(156,175,136,0) 70%)',
                willChange: 'transform',
                zIndex: 0,
              }}
            />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 relative z-10">
              Don't see a perfect structural fit?
            </h3>
            <p className="text-sm text-white/70 max-w-xl mx-auto mb-8 relative z-10 leading-relaxed">
              We are constantly seeking brilliant procurement agents, platform developers, and
              quality compliance auditors who share our commitment. Submit a spontaneous application
              directly.
            </p>
            <Link
              to="/contact"
              className="px-7 py-3.5 bg-white text-nordic-black font-bold uppercase tracking-wider text-xs rounded-full hover:bg-terracotta hover:text-white transition-all shadow-sm relative z-10 inline-block"
            >
              Spontaneous Application
            </Link>
          </section>
        </div>
      </div>

      {/* ── Application Drawer (portalled to body) ── */}
      {selectedJob && (
        <ApplicationDrawer job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </PageTransition>
  );
};
