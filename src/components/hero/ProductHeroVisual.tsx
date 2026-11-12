"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Activity,
  CheckCircle2,
  Workflow,
  Globe,
  Database,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ProductHeroVisual() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "ai" | "workflow">("dashboard");

  return (
    <div className="relative w-full max-w-[540px] mx-auto lg:max-w-none">
      {/* Outer Glow / Framing */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#7C3AED]/20 via-[#A78BFA]/20 to-[#FACC15]/20 rounded-3xl blur-xl opacity-75 pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative bg-[#1F1B2E] text-white rounded-2xl border border-[#3D3558] shadow-2xl overflow-hidden">
        {/* Terminal / App Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#171424] border-b border-[#312B47]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] font-mono text-[#A78BFA] font-medium tracking-tight">
              cognirex-cloud-engine // v2.6.4
            </span>
          </div>

          {/* Interactive Visual Tabs */}
          <div className="flex items-center gap-1 bg-[#252038] p-1 rounded-lg">
            <button
              type="button"
              onClick={() => setActiveTab("dashboard")}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors ${
                activeTab === "dashboard"
                  ? "bg-[#7C3AED] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Dashboard
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ai")}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors ${
                activeTab === "ai"
                  ? "bg-[#7C3AED] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              AI Assistant
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("workflow")}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors ${
                activeTab === "workflow"
                  ? "bg-[#7C3AED] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Automation
            </button>
          </div>
        </div>

        {/* Tab 1: Operational Software Dashboard Mockup */}
        {activeTab === "dashboard" && (
          <div className="p-5 space-y-4 animate-in fade-in duration-200">
            {/* Top Stat Bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#27223C] p-3 rounded-xl border border-[#3A3356]">
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                  Active Pipelines
                </div>
                <div className="text-xl font-heading font-extrabold text-[#FACC15] mt-0.5">
                  18 Live
                </div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>99.98% Healthy</span>
                </div>
              </div>

              <div className="bg-[#27223C] p-3 rounded-xl border border-[#3A3356]">
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                  Sync Latency
                </div>
                <div className="text-xl font-heading font-extrabold text-white mt-0.5">
                  184 ms
                </div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                  <Zap className="w-3 h-3" />
                  <span>Sub-second Edge</span>
                </div>
              </div>

              <div className="bg-[#27223C] p-3 rounded-xl border border-[#3A3356]">
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                  Data Accuracy
                </div>
                <div className="text-xl font-heading font-extrabold text-[#C4B5FD] mt-0.5">
                  100%
                </div>
                <div className="text-[10px] text-gray-400 flex items-center gap-1 mt-1">
                  <Activity className="w-3 h-3" />
                  <span>Strict Type Validation</span>
                </div>
              </div>
            </div>

            {/* Simulated Live Event Stream */}
            <div className="bg-[#171424] rounded-xl p-3 border border-[#2D2745] font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-[11px] text-gray-400 pb-1 border-b border-[#2D2745]">
                <span>STREAM: /api/v2/events</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-[#A78BFA]">[09:42:15]</span>
                <span className="text-emerald-400">POST</span>
                <span>/v1/inquiry/create</span>
                <span className="text-gray-400 text-[10px]">201 Created (42ms)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-[#A78BFA]">[09:42:16]</span>
                <span className="text-blue-400">DISPATCH</span>
                <span>FormSubmit.co &rarr; Direct Inbox</span>
                <span className="text-gray-400 text-[10px]">Delivered</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-[#A78BFA]">[09:42:18]</span>
                <span className="text-[#FACC15]">RAG_QUERY</span>
                <span>Synthesize engineering scope</span>
                <span className="text-gray-400 text-[10px]">Verified 3 sources</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Domain-Specific AI Assistant Mockup */}
        {activeTab === "ai" && (
          <div className="p-5 space-y-3.5 animate-in fade-in duration-200">
            <div className="flex items-center gap-2.5 pb-2 border-b border-[#312B47]">
              <div className="w-7 h-7 rounded-lg bg-[#7C3AED] flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Cognirex RAG Knowledge Engine</div>
                <div className="text-[10px] text-emerald-400">Grounded strictly in verified technical docs</div>
              </div>
            </div>

            {/* Chat Bubble: User */}
            <div className="flex justify-end">
              <div className="bg-[#7C3AED]/25 border border-[#7C3AED]/40 text-xs text-purple-100 rounded-2xl rounded-tr-sm px-3.5 py-2 max-w-[85%]">
                Can our inventory and CRM synchronize automatically whenever an inquiry is submitted?
              </div>
            </div>

            {/* Chat Bubble: AI */}
            <div className="flex justify-start">
              <div className="bg-[#27223C] border border-[#3A3356] text-xs text-gray-200 rounded-2xl rounded-tl-sm p-3.5 max-w-[90%] space-y-2">
                <p>
                  Yes. We engineer event-driven webhook pipelines that normalize inquiry payloads and asynchronously update both your internal database and CRM records simultaneously.
                </p>
                <div className="pt-2 border-t border-[#3A3356]/80 flex items-center gap-2 text-[10px] text-[#C4B5FD]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Grounding: Architecture Spec §4.2 (Zero hallucinations)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Event-Driven Automation Pipeline Mockup */}
        {activeTab === "workflow" && (
          <div className="p-5 space-y-4 animate-in fade-in duration-200">
            <div className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">
              Automated Orchestration Pipeline
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#27223C] border border-[#3A3356]">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-white">Trigger: Client Inquiry Received</div>
                  <div className="text-[10px] text-gray-400">Validated via strict Zod schema on Edge</div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#27223C] border border-[#3A3356]">
                <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/20 text-[#A78BFA] flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-white">Parallel Dispatch: FormSubmit &amp; Database</div>
                  <div className="text-[10px] text-gray-400">Zero-backend email forwarding + MongoDB log</div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#27223C] border border-[#3A3356]">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-white">Audit Tracking ID Generated</div>
                  <div className="text-[10px] text-gray-400">Reference code delivered to visitor instantly</div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>
          </div>
        )}

        {/* Footer Meta Strip */}
        <div className="px-4 py-2.5 bg-[#171424] border-t border-[#312B47] flex items-center justify-between text-[11px] text-gray-400">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>Cloudflare Edge + Next.js App Router</span>
          </div>
          <Link
            href="/services/custom-software"
            className="text-[#C4B5FD] hover:text-white inline-flex items-center gap-1 font-semibold transition-colors"
          >
            <span>Learn Architecture</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

