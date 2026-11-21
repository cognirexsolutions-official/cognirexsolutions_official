"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { careerSchema } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Link2 } from "lucide-react";
import { z } from "zod";

type FormData = z.infer<typeof careerSchema>;

export default function CareerApplicationForm({ initialRole = "General Expression of Interest" }: { initialRole?: string }) {
  const [serverStatus, setServerStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
    applicationId?: string;
  }>({
    type: "idle",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      positionOfInterest: initialRole || "General Expression of Interest",
      experience: "1-3 years",
      linkedIn: "",
      resumeUrl: "",
      privacyConsent: false,
      honeypot: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setServerStatus({ type: "loading", message: "Transmitting application securely..." });

    try {
      const careersEmail =
        process.env.NEXT_PUBLIC_CAREERS_EMAIL ||
        process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
        "info@cognirexsolutions.in";

      // 1. Direct FormSubmit.co dispatch for zero-backend application delivery
      const formSubmitPromise = fetch(`https://formsubmit.co/ajax/${encodeURIComponent(careersEmail)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Candidate Name": data.fullName,
          "Email Address": data.email,
          "Phone Number": data.phone,
          "Position Applied": data.positionOfInterest,
          "Experience Level": data.experience,
          "LinkedIn Profile": data.linkedIn,
          "Resume Link": data.resumeUrl,
          "Brief Introduction": data.shortIntroduction,
          _subject: `New Career Application: ${data.fullName} (${data.positionOfInterest})`,
          _template: "table",
          _captcha: "false",
          _replyto: data.email,
        }),
      }).catch((err) => {
        console.warn("FormSubmit careers notice:", err);
        return null;
      });

      // 2. Local API dispatch
      const apiPromise = fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch((err) => {
        console.warn("Internal careers API notice:", err);
        return null;
      });

      const [formSubmitRes, apiRes] = await Promise.all([
        formSubmitPromise,
        apiPromise,
      ]);

      let appId: string | undefined;
      if (apiRes && apiRes.ok) {
        try {
          const resData = await apiRes.json();
          if (resData?.id) appId = resData.id;
        } catch {}
      }

      const formSubmitOk = formSubmitRes ? formSubmitRes.ok : false;
      const apiOk = apiRes ? apiRes.ok : false;

      if (formSubmitOk || apiOk) {
        setServerStatus({
          type: "success",
          message: "Your application has been received successfully. Our hiring team will review your profile.",
          applicationId: appId || `APP-${Date.now().toString(36).toUpperCase()}`,
        });
        reset();
      } else {
        setServerStatus({
          type: "error",
          message: "Unable to accept application at this time. Please check your form fields and retry.",
        });
      }
    } catch (err) {
      console.error(err);
      setServerStatus({
        type: "error",
        message: "Network error communicating with the server. Please check your internet connection.",
      });
    }
  };

  return (
    <div className="bg-white border border-[#E5E1ED] rounded-3xl p-6 sm:p-10 shadow-card">
      {serverStatus.type === "success" ? (
        <div className="py-10 px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
            <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full mb-3 inline-block">
            Submission Confirmed
          </span>

          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#1F1B2E] mb-3">
            Your Form is Submitted Accurately!
          </h3>

          <p className="text-sm text-[#6F6A7C] max-w-lg mx-auto leading-relaxed mb-6">
            Thank you for introducing yourself. Your candidate application has been recorded and safely transmitted to the Cognirex Solutions team. We review every profile and will contact you directly for matching engineering and digital opportunities.
          </p>

          {serverStatus.applicationId && (
            <div className="mb-6">
              <span className="text-xs font-mono font-semibold text-[#7C3AED] bg-[#EEE8FA] px-4 py-2 rounded-xl inline-block border border-[#7C3AED]/20">
                Application Reference: {serverStatus.applicationId}
              </span>
            </div>
          )}

          <button
            type="button"
            onClick={() => {
              setServerStatus({ type: "idle", message: "" });
              reset();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] hover:text-[#5B21B6] transition-colors bg-[#EEE8FA] px-5 py-2.5 rounded-xl hover:bg-[#7C3AED] hover:text-white cursor-pointer"
          >
            <span>Submit Another Introduction</span>
          </button>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <h3 className="font-heading font-bold text-2xl text-[#1F1B2E] mb-2">
              General Expression of Interest
            </h3>
            <p className="text-sm text-[#6F6A7C]">
              Share your background and tell us about the digital technologies you enjoy working with. We review every introduction for upcoming projects.
            </p>
          </div>

          {serverStatus.type === "error" && (
            <div className="mb-8 p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm">Submission Error</h4>
                <p className="text-xs text-rose-800 mt-1">{serverStatus.message}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Anti-spam honeypot */}
        <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1B2E] mb-2">
              Full Name <span className="text-[#7C3AED]">*</span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              {...register("fullName")}
              className="w-full px-4 py-3 rounded-xl bg-[#F8F7FC] border border-[#E5E1ED] text-sm text-[#1F1B2E] focus:bg-white focus:border-[#7C3AED] focus:outline-none transition-colors"
            />
            {errors.fullName && (
              <p className="text-xs text-rose-600 mt-1.5">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1B2E] mb-2">
              Email Address <span className="text-[#7C3AED]">*</span>
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              {...register("email")}
              className="w-full px-4 py-3 rounded-xl bg-[#F8F7FC] border border-[#E5E1ED] text-sm text-[#1F1B2E] focus:bg-white focus:border-[#7C3AED] focus:outline-none transition-colors"
            />
            {errors.email && (
              <p className="text-xs text-rose-600 mt-1.5">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1B2E] mb-2">
              Phone Number <span className="text-[#7C3AED]">*</span>
            </label>
            <input
              type="tel"
              placeholder="Your contact number"
              {...register("phone")}
              className="w-full px-4 py-3 rounded-xl bg-[#F8F7FC] border border-[#E5E1ED] text-sm text-[#1F1B2E] focus:bg-white focus:border-[#7C3AED] focus:outline-none transition-colors"
            />
            {errors.phone && (
              <p className="text-xs text-rose-600 mt-1.5">{errors.phone.message}</p>
            )}
          </div>

          {/* Position of Interest */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1B2E] mb-2">
              Area of Interest <span className="text-[#7C3AED]">*</span>
            </label>
            <select
              {...register("positionOfInterest")}
              className="w-full px-4 py-3 rounded-xl bg-[#F8F7FC] border border-[#E5E1ED] text-sm text-[#1F1B2E] focus:bg-white focus:border-[#7C3AED] focus:outline-none transition-colors"
            >
              <option value="General Expression of Interest">General Expression of Interest</option>
              <option value="Digital & Software Engineering">Digital & Software Engineering</option>
              <option value="AI & Intelligent Systems">AI & Intelligent Systems</option>
              <option value="Product Design & UX">Product Design & UX</option>
              <option value="Automation & System Integration">Automation & System Integration</option>
            </select>
            {errors.positionOfInterest && (
              <p className="text-xs text-rose-600 mt-1.5">{errors.positionOfInterest.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Experience */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1B2E] mb-2">
              Experience Level <span className="text-[#7C3AED]">*</span>
            </label>
            <select
              {...register("experience")}
              className="w-full px-4 py-3 rounded-xl bg-[#F8F7FC] border border-[#E5E1ED] text-sm text-[#1F1B2E] focus:bg-white focus:border-[#7C3AED] focus:outline-none transition-colors"
            >
              <option value="0-1 years">0–1 years (Early Career)</option>
              <option value="1-3 years">1–3 years</option>
              <option value="3-5 years">3–5 years</option>
              <option value="5-8 years">5–8 years</option>
              <option value="8+ years">8+ years</option>
            </select>
            {errors.experience && (
              <p className="text-xs text-rose-600 mt-1.5">{errors.experience.message}</p>
            )}
          </div>

          {/* LinkedIn Profile */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1B2E] mb-2">
              LinkedIn Profile <span className="text-[#7C3AED]">*</span>
            </label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/yourprofile"
              {...register("linkedIn")}
              className="w-full px-4 py-3 rounded-xl bg-[#F8F7FC] border border-[#E5E1ED] text-sm text-[#1F1B2E] focus:bg-white focus:border-[#7C3AED] focus:outline-none transition-colors"
            />
            {errors.linkedIn && (
              <p className="text-xs text-rose-600 mt-1.5">{errors.linkedIn.message}</p>
            )}
          </div>
        </div>

        {/* Resume Link */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1B2E] mb-2">
            Resume / CV Link <span className="text-[#7C3AED]">*</span>
            <span className="text-gray-400 font-normal lowercase ml-1.5">(Google Drive, Dropbox, Notion, or cloud document)</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7C3AED]">
              <Link2 className="w-4 h-4" />
            </div>
            <input
              type="url"
              placeholder="https://drive.google.com/file/d/... or public resume URL"
              {...register("resumeUrl")}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8F7FC] border border-[#E5E1ED] text-sm text-[#1F1B2E] focus:bg-white focus:border-[#7C3AED] focus:outline-none transition-colors"
            />
          </div>
          <p className="text-[11px] text-[#6F6A7C] mt-1.5">
            Please ensure link sharing permissions are set to &ldquo;Anyone with the link can view&rdquo;.
          </p>
          {errors.resumeUrl && (
            <p className="text-xs text-rose-600 mt-1.5">{errors.resumeUrl.message}</p>
          )}
        </div>

        {/* Short Introduction */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1B2E] mb-2">
            Short Introduction <span className="text-[#7C3AED]">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about the problems you enjoy solving, recent projects or technologies you're excited about..."
            {...register("shortIntroduction")}
            className="w-full px-4 py-3 rounded-xl bg-[#F8F7FC] border border-[#E5E1ED] text-sm text-[#1F1B2E] focus:bg-white focus:border-[#7C3AED] focus:outline-none transition-colors resize-none"
          />
          {errors.shortIntroduction && (
            <p className="text-xs text-rose-600 mt-1.5">{errors.shortIntroduction.message}</p>
          )}
        </div>

        {/* Privacy Consent */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("privacyConsent")}
              className="mt-1 w-4 h-4 rounded text-[#7C3AED] focus:ring-[#7C3AED] border-[#E5E1ED]"
            />
            <span className="text-xs text-[#6F6A7C] leading-relaxed">
              I consent to Cognirex processing my application details for future opportunities in accordance with the privacy policy.
            </span>
          </label>
          {errors.privacyConsent && (
            <p className="text-xs text-rose-600 mt-1.5">{errors.privacyConsent.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            variant="yellow"
            size="lg"
            isLoading={isSubmitting}
            className="w-full sm:w-auto"
          >
            Submit Expression of Interest
          </Button>
        </div>
      </form>
      </>
      )}
    </div>
  );
}
