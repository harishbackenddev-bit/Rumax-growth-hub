import React, { useState } from "react";
import { SocialMetaIcon, InstagramIcon, Twittericon, Staricon, Contenticon, Imageicon, Videoicon } from "@/utils/svgicons";


type ContentType = "content" | "image" | "video";

const platforms = [
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: (
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0a7bbd] text-[18px] font-extrabold leading-none text-white sm:h-10 sm:w-10 sm:text-[20px]">
        in
      </span>
    ),
  },
  {
    id: "meta",
    label: "Facebook",
    icon: <SocialMetaIcon/>
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: (
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-[#f9a03f] via-[#e1306c] to-[#7a3fd0] text-white sm:h-10 sm:w-10">
        <InstagramIcon/>
      </span>
    ),
  },
  {
    id: "x",
    label: "X / Twitter",
    icon: (
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white sm:h-10 sm:w-10">
        <Twittericon/>
      </span>
    ),
  },
];

const AiGenerator = () => {
  // ---- form state ----
  const [contentType, setContentType] = useState<ContentType>("content");
  const [brief, setBrief] = useState("");
  const [tone, setTone] = useState("");
  const [length, setLength] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([
    "linkedin",
  ]);

  // ---- result state ----
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);

  const togglePlatform = (id: string) =>
    setSelectedPlatforms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );

  const handleGenerate = () => {
    if (!brief.trim()) {
      alert("Please enter a content brief.");
      return;
    }

    const platformLabels = platforms
      .filter((p) => selectedPlatforms.includes(p.id))
      .map((p) => p.label);

    const tagMap: Record<string, string[]> = {
      "A few (3–5)": [
        "#RumaxCare",
        "#HomeCare",
        "#LiveInSupport",
        "#CompassionateCare",
      ],
      "Many (8–10)": [
        "#RumaxCare",
        "#LiveInSupport",
        "#HomeCare",
        "#ElderlyCare",
        "#DignityInCare",
        "#CompassionateCare",
        "#UKCareServices",
        "#CareAtHome",
        "#FamilyFirst",
        "#PeaceOfMind",
      ],
    };
    const tags = tagMap[hashtags] || [];

    const header =
      contentType === "content"
        ? `✨ ${brief}`
        : contentType === "image"
        ? `🖼️ Image concept: ${brief}`
        : `🎬 Video concept: ${brief}`;

    const body = [
      header,
      "",
      `Tone: ${tone || "Not specified"} · Length: ${
        length || "Not specified"
      } · Platforms: ${platformLabels.join(", ") || "None selected"}`,
      "",
      brief,
      "",
      "Drafted by Rumax AI. Edit freely before scheduling.",
    ];

    if (tags.length) {
      body.push("", tags.join(" "));
    }

    setGeneratedContent(body.join("\n"));
  };

  const handleBack = () => setGeneratedContent(null);

  // ---------- RESULT VIEW ----------
  if (generatedContent !== null) {
    return (
      <main
        id="page"
        className="min-w-0 flex-1 px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-[28px] lg:pt-[36px]"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-2xl font-medium leading-tight sm:text-[28px] lg:text-[32px]">
              AI Content Generator
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-[16px]">
              Create social media content, refine drafts, and export
              platform-ready posts using AI.
            </p>
          </div>

          <div
            id="head-actions"
            className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-3"
          >
            <button
              onClick={() => navigator.clipboard?.writeText(generatedContent)}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-line bg-panelhead/60 px-3 text-[13px] hover:bg-panelhead sm:h-[44px] sm:gap-2 sm:px-4 sm:text-[15px]"
            >
              Copy
            </button>
            <button
              onClick={handleBack}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-line bg-panelhead/60 px-3 text-[13px] hover:bg-panelhead sm:h-[44px] sm:gap-2 sm:px-4 sm:text-[15px]"
            >
              Back
            </button>
            <button
              onClick={() => alert("Saved as draft")}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-line bg-panelhead/60 px-3 text-[13px] hover:bg-panelhead sm:h-[44px] sm:gap-2 sm:px-4 sm:text-[15px]"
            >
              Save Draft
            </button>
            <button
              onClick={() => alert("Scheduled")}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-brand px-3 text-[13px] font-medium hover:bg-indigo-700 sm:h-[44px] sm:gap-2 sm:px-4 sm:text-[15px]"
            >
              Schedule Post
            </button>
          </div>
        </div>

        <section
          id="panel"
          className="mt-5 rounded-2xl bg-panel p-2 sm:mt-6 sm:p-3"
        >
          <div className="flex items-center gap-3 px-2 pt-2 sm:px-3 sm:pt-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-plum">
              <Staricon/>
            </span>
            <h2 className="text-[18px] sm:text-[20px]">Generated Content</h2>
          </div>

          <div className="mx-2 mt-3 flex items-center overflow-x-auto border-b border-line pb-3 pl-1 sm:mx-3 sm:pl-2">
            <div className="flex shrink-0 items-center gap-1 text-slate-300">
              {["bold", "italic", "underline"].map((c) => (
                <button
                  key={c}
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded hover:bg-panelhead hover:text-white"
                >
                  {c[0].toUpperCase()}
                </button>
              ))}
              <span className="mx-2 h-5 w-px bg-line" />
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded hover:bg-panelhead hover:text-white"
              >
                •
              </button>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded hover:bg-panelhead hover:text-white"
              >
                1.
              </button>
              <span className="mx-2 h-5 w-px bg-line" />
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded hover:bg-panelhead hover:text-white"
              >
                ↩
              </button>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded hover:bg-panelhead hover:text-white"
              >
                ↪
              </button>
            </div>
          </div>

          <div
            contentEditable
            suppressContentEditableWarning
            className="m-2 min-h-[360px] whitespace-pre-wrap rounded-xl border border-line bg-panelhead/60 p-4 text-[14px] leading-[1.55] text-slate-100 outline-none sm:m-3 sm:min-h-[480px] sm:p-6 sm:text-[15px]"
          >
            {generatedContent}
          </div>
        </section>
      </main>
    );
  }

  // ---------- FORM VIEW ----------
  return (
    <main
      id="page"
      className="min-w-0 flex-1 px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-[28px] lg:pt-[36px]"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl font-medium leading-tight sm:text-[28px] lg:text-[32px]">
            AI Content Generator
          </h1>
          <p className="mt-1 text-sm text-slate-500 sm:text-[16px]">
            Create social media content, refine drafts, and export
            platform-ready posts using AI.
          </p>
        </div>
        <div
          id="head-actions"
          className="flex flex-wrap items-center gap-2 sm:gap-3"
        >
          <button
            onClick={() => {
              setBrief("");
              setTone("");
              setLength("");
              setHashtags("");
              setContentType("content");
              setSelectedPlatforms(["linkedin"]);
            }}
            className="inline-flex h-10 items-center gap-2 rounded-md border border-line bg-panelhead/60 px-3 text-sm hover:bg-panelhead sm:h-[44px] sm:px-4 sm:text-[15px]"
          >
            Discard
          </button>
          <button
            onClick={handleGenerate}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-brand px-3 text-sm font-medium hover:bg-indigo-700 sm:h-[44px] sm:px-4 sm:text-[15px]"
          >
            <Staricon/>
            Generate Content
          </button>
        </div>
      </div>

      <section
        id="panel"
        className="mt-5 rounded-2xl bg-panel p-2 sm:mt-6 sm:p-3"
      >
        <div className="flex items-center gap-3 px-2 pt-2 sm:px-3 sm:pt-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-plum">
                 <Staricon/>
          </span>
          <h2 className="text-[18px] sm:text-[20px]">Content Configuration</h2>
        </div>

        <div className="space-y-4 p-2 sm:space-y-5 sm:p-3">
          {/* Content Type */}
          <div>
            <p className="mb-3 text-[14px] text-slate-200 sm:text-[15px]">
              Content Type
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {(
                [
                  { id: "content", label: "Content", desc: "Text posts & captions" },
                  { id: "image", label: "Image", desc: "Social media graphics" },
                  { id: "video", label: "Video", desc: "Video scripts & ideas" },
                ] as { id: ContentType; label: string; desc: string }[]
              ).map((t) => {
                const active = contentType === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setContentType(t.id)}
                    className={`flex h-[78px] w-full items-center gap-3 rounded-xl border px-4 text-left transition sm:w-[295px] ${
                      active
                        ? "border-brand bg-brand"
                        : "border-line bg-panelhead/60 hover:bg-panelhead"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12 ${
                        active
                          ? "bg-white text-brand"
                          : "bg-panelhead text-slate-200"
                      }`}
                    >
                      {t.id === "content" && (
                      <Contenticon/>
                      )}
                      {t.id === "image" && (
                       
                       <Imageicon/>
                      )}
                      {t.id === "video" && (
                      <Videoicon/>
                      )}
                    </span>
                    <span>
                      <span className="block text-[14px] sm:text-[15px]">
                        {t.label}
                      </span>
                      <span
                        className={`block text-[11px] sm:text-[12px] ${
                          active ? "text-indigo-100" : "text-slate-400"
                        }`}
                      >
                        {t.desc}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Brief */}
          <div>
            <label className="mb-2 block text-[13px] text-slate-200 sm:text-[14px]">
              Content Brief
            </label>
            <textarea
              rows={4}
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
              className="w-full resize-none rounded-md border border-line bg-panelhead/60 px-4 py-3 text-[14px] text-white placeholder-slate-400 outline-none transition focus:border-indigo-400 sm:text-[15px]"
              placeholder="Describe the post you want... e.g., 'Announce our new live-in support packages with a warm, reassuring tone for families.'"
            />
          </div>

          {/* Selects */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-[13px] text-slate-200 sm:text-[14px]">
                Tone
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="h-11 w-full appearance-none rounded-md border border-line bg-panelhead/60 px-3 pr-9 text-[14px] text-slate-300 outline-none transition focus:border-indigo-400 [&>option]:bg-panel sm:text-[15px]"
              >
                <option value="">Select</option>
                <option>Warm &amp; Reassuring</option>
                <option>Professional</option>
                <option>Friendly</option>
                <option>Informative</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-[13px] text-slate-200 sm:text-[14px]">
                Length
              </label>
              <select
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="h-11 w-full appearance-none rounded-md border border-line bg-panelhead/60 px-3 pr-9 text-[14px] text-slate-300 outline-none transition focus:border-indigo-400 [&>option]:bg-panel sm:text-[15px]"
              >
                <option value="">Select</option>
                <option>Short (≈50 words)</option>
                <option>Medium (≈120 words)</option>
                <option>Long (≈250 words)</option>
              </select>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <label className="mb-2 block text-[13px] text-slate-200 sm:text-[14px]">
                Hashtags
              </label>
              <select
                value={hashtags}
                onChange={(e) => setHashtags(e.target.value)}
                className="h-11 w-full appearance-none rounded-md border border-line bg-panelhead/60 px-3 pr-9 text-[14px] text-slate-300 outline-none transition focus:border-indigo-400 [&>option]:bg-panel sm:text-[15px]"
              >
                <option value="">Select</option>
                <option>None</option>
                <option>A few (3–5)</option>
                <option>Many (8–10)</option>
              </select>
            </div>
          </div>

          {/* Platforms */}
          <div>
            <label className="mb-2 block text-[13px] text-slate-200 sm:text-[14px]">
              Target Platform(s)
            </label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {platforms.map((p) => {
                const active = selectedPlatforms.includes(p.id);
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => togglePlatform(p.id)}
                    className={`flex h-[94px] flex-col items-center justify-center gap-2 rounded-lg border text-[12px] transition sm:text-[13px] ${
                      active
                        ? "border-brand bg-brand/20"
                        : "border-line bg-panelhead/50 hover:bg-panelhead"
                    }`}
                  >
                    {p.icon}
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AiGenerator;