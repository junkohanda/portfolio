"use client";
import { useState } from "react";

const portfolioData = {
  name: "Junko",
  title: "Data Analyst",
  tagline: "15年の臨床経験 × データサイエンスで、\n医療と社会の課題を解く",
  summary:
    "総合病院で15年以上、病棟・看護教育・外来・管理と多領域で看護師として勤務。主任看護師としてチームマネジメントや新人指導にも携わる中で、現場の課題をデータで解決したいという想いからデータサイエンスの学習を開始。Python・SQL・機械学習を習得し、医療ドメイン知識を活かしたデータ分析プロジェクトに取り組んでいます。",
  strengths: [
    {
      icon: "🏥",
      title: "ドメイン知識",
      desc: "15年超の臨床経験に基づく医療・ヘルスケア領域の深い理解",
    },
    {
      icon: "📊",
      title: "分析力",
      desc: "機械学習モデル構築から施策提案まで一気通貫で実行",
    },
    {
      icon: "🤝",
      title: "コミュニケーション",
      desc: "多職種連携・管理者との折衝・新人指導で培った伝える力",
    },
  ],
  skills: [
    {
      category: "プログラミング",
      items: ["Python (pandas, scikit-learn, matplotlib, seaborn)", "SQL", "HTML / CSS"],
    },
    {
      category: "データ分析・機械学習",
      items: ["ロジスティック回帰", "ランダムフォレスト", "LightGBM", "特徴量エンジニアリング", "EDA"],
    },
    {
      category: "ツール",
      items: ["Google Colaboratory", "Excel / スプレッドシート", "Dify (LLMワークフロー)", "Claude / ChatGPT (AI活用開発)"],
    },
    {
      category: "ビジネススキル",
      items: ["チームマネジメント", "新人教育・指導", "多職種連携", "課題発見・改善提案"],
    },
  ],
  career: [
    {
      period: "現在",
      role: "データサイエンス学習・ポートフォリオ制作",
      org: "キャリアチェンジ準備中",
      desc: "オンライン講座でPython・機械学習を体系的に習得。Kaggleデータやビジネスデータを用いた分析プロジェクトに取り組む。",
      isCurrent: true,
    },
    {
      period: "15年以上",
      role: "看護師 → 主任看護師",
      org: "総合病院",
      desc: "病棟・看護教育部（3年）・外来・管理と多部署で勤務。主任としてチームマネジメント、新人看護師の指導・定着率向上に貢献。",
      isCurrent: false,
    },
  ],
  projects: [
    {
      id: 1,
      title: "機械学習による離職予測モデルの構築と人事施策提案",
      tags: ["Python", "scikit-learn", "ロジスティック回帰", "特徴量エンジニアリング"],
      source: "オンライン講座内プロジェクト",
      question: "どの従業員が離職リスクが高く、どのような施策を打つべきか？",
      approach:
        "HRデータのEDA → 離職要因の多角的分析（残業・評価・報酬の不整合を特定）→ 3モデル比較 → ロジスティック回帰を採用 → 特徴量エンジニアリングで精度改善",
      insight:
        "評価と報酬の不一致が離職の主要因。特徴量の追加・カットオフ調整により離職者を約75%の確率で検出するモデルを構築",
      impact: "離職率2%低減で年間約5,800万円のコスト削減効果を試算し、段階的な導入計画まで提案",
      note: "本プロジェクトは講座内の最終課題として実施したものであり、守秘義務の観点から詳細データ・資料の公開は控えております。選考過程において必要があれば個別にご説明いたします。",
      color: "#2563EB",
      chartData: [100, 88, 75, 68, 60, 55, 50],
      github: null,
    },
    {
      id: 2,
      title: "糖尿病予測モデル — アジア人データの他人種への汎化性検証",
      tags: ["Python", "scikit-learn", "Kaggle", "ロジスティック回帰"],
      source: "オンライン講座内プロジェクト",
      question:
        "アジア人のデータで学習した糖尿病予測モデルは、他人種にも同等の性能を発揮できるのか？",
      approach:
        "Kaggleヘルスケアデータ(約97,000件) → 臨床知識に基づく前処理（1型・妊娠糖尿病除外、データリーク防止）→ 特徴量10項目を医学的根拠で選定 → 人種別に予測精度を比較",
      insight:
        "アジア人モデルの他人種適用でROC-AUC 0.93と高い汎化性を確認。臨床知識による適切な特徴量選定が精度に寄与",
      impact:
        "データサイエンスが受診前段階でのリスク可視化・行動変容の促進に活用できる可能性を示した",
      color: "#0891B2",
      chartData: [65, 70, 78, 83, 88, 91, 93],
      github: "https://github.com/junkohanda/diabetes-risk-model",
    },
    {
      id: 3,
      title: "看護師の意見集約Webアプリ",
      tags: ["Dify", "GPT-4", "LLMワークフロー", "ノーコード"],
      source: "個人開発",
      question: "看護師の声を匿名かつ構造的に集約し、各都道府県の看護協会に届ける仕組みを作れないか？",
      approach:
        "Difyでワークフロー構築 → ユーザー入力（都道府県・職種・経験年数・ライフステージ・勤務場所・意見）→ GPT-4で意見を抽出 → LLM第2段で分類 → 構造化して出力",
      insight:
        "匿名性を担保しつつ、ライフステージ別（独身〜シングル親まで）に意見を分類できる設計。都道府県ソートで看護協会への提出を想定",
      impact:
        "LLMを実務課題に応用し、看護師の多様な声を構造化データとして活用可能にした",
      color: "#7C3AED",
      chartData: [30, 45, 55, 65, 72, 80, 85],
      github: "https://github.com/junkohanda/nurse-opinion-aggregator",
    },
    {
      id: 4,
      title: "看護師向け統合サポートアプリ v2",
      tags: ["要件定義・機能設計", "AI活用開発 (Claude)", "Supabase", "クラウドDB・認証"],
      source: "個人開発",
      question: "勤務後の疲労状態にある看護師が、複数のアプリを使い分けることなく日常を記録・管理できないか？",
      approach:
        "15年の臨床経験から「看護師は夜勤明けに複数アプリを開く余力がない」という課題を定義。日記・気分ログ・シフト管理・ToDo・勉強ノート・医療用語辞典を一つに統合。要件定義・機能設計を自ら担当し、実装はAI（Claude）を活用。v2ではSupabase認証・クラウドDBを導入し実用レベルに進化させた",
      insight:
        "AIコードレビュー（Codex）で8つの問題を発見・修正し品質担保の工程も実施。2交代/3交代制対応・診療科別カテゴリ（30科以上）など、臨床経験がなければ設計できない粒度の仕様が最大の価値",
      impact:
        "ユーザー登録・ログイン機能を備えた実用レベルのWebアプリを実現。AIが書いたコードをAIでレビューし改善するサイクルも確立",
      color: "#059669",
      chartData: [20, 35, 50, 60, 70, 82, 90],
      github: "https://github.com/junkohanda/nurse-support-app-v2",
    },
  ],
};

const navItems = [
  { id: "hero", label: "Top" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function MiniChart({ data, color, width = 120, height = 40 }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * (height - 8) - 4;
      return `${x},${y}`;
    })
    .join(" ");
  const areaPoints = `0,${height} ${points} ${width},${height}`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ display: "block" }}>
      <defs>
        <linearGradient id={`grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0.01" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#grad-${color.replace("#", "")})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Nav() {
  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(255,255,255,0.88)", backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)", borderBottom: "1px solid #E5E7EB", padding: "0 32px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600, color: "#1E293B" }}>
          {portfolioData.name}
          <span style={{ color: "#94A3B8", fontWeight: 400, marginLeft: 8 }}>Data Analyst</span>
        </div>
        <div style={{ display: "flex", gap: 28 }}>
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#64748B", textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 400 }}>
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "linear-gradient(170deg, #FAFBFF 0%, #F0F4FF 40%, #FFF 100%)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(#CBD5E1 0.8px, transparent 0.8px)", backgroundSize: "32px 32px", opacity: 0.4 }} />
      <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, opacity: 0.07 }} width="100%" height="300" viewBox="0 0 1200 300" preserveAspectRatio="none">
        <path d="M0,280 Q200,200 400,240 T800,180 T1200,220" fill="none" stroke="#2563EB" strokeWidth="2" />
        <path d="M0,260 Q300,160 600,200 T1200,140" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
      </svg>
      <div style={{ position: "relative", textAlign: "center", maxWidth: 720, padding: "0 24px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #E2E8F0", borderRadius: 100, padding: "6px 18px", marginBottom: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#64748B" }}>転職活動中 — 2026年3月〜</span>
        </div>
        <h1 style={{ fontFamily: "'Noto Sans JP', 'Outfit', sans-serif", fontSize: 50, fontWeight: 800, color: "#0F172A", lineHeight: 1.3, margin: "0 0 12px 0" }}>
          {portfolioData.name}
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, color: "#2563EB", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 28px 0", fontWeight: 500 }}>
          {portfolioData.title}
        </p>
        <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 20, color: "#334155", lineHeight: 1.8, margin: "0 0 40px 0", whiteSpace: "pre-line" }}>
          {portfolioData.tagline}
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#projects" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 14, fontWeight: 600, background: "#2563EB", color: "#fff", borderRadius: 10, padding: "14px 32px", textDecoration: "none", boxShadow: "0 4px 14px rgba(37,99,235,0.25)" }}>
            プロジェクトを見る →
          </a>
          <a href="#contact" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 14, fontWeight: 600, background: "#fff", color: "#1E293B", border: "1.5px solid #D1D5DB", borderRadius: 10, padding: "14px 32px", textDecoration: "none" }}>
            お問い合わせ
          </a>
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 52, flexWrap: "wrap" }}>
          {["看護師15年+", "Python", "SQL", "機械学習", "Dify / LLM", "AI活用開発"].map((t) => (
            <span key={t} style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 12, color: "#475569", background: "#fff", borderRadius: 8, padding: "7px 14px", border: "1px solid #E2E8F0", fontWeight: 500, boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <SectionLabel text="About" />
        <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 30, fontWeight: 700, color: "#0F172A", margin: "12px 0 20px 0" }}>
          自己紹介
        </h2>
        <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 15, color: "#475569", lineHeight: 2, maxWidth: 660, margin: "0 0 48px 0" }}>
          {portfolioData.summary}
        </p>

        {/* Strengths */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18, marginBottom: 56 }}>
          {portfolioData.strengths.map((s) => (
            <div key={s.title} style={{ background: "#F8FAFC", borderRadius: 14, padding: "24px", border: "1px solid #E2E8F0" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 16, fontWeight: 700, color: "#0F172A", margin: "0 0 8px 0" }}>{s.title}</h3>
              <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 13, color: "#64748B", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Career Timeline */}
        <h3 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 22, fontWeight: 700, color: "#0F172A", margin: "0 0 28px 0" }}>
          経歴
        </h3>
        <div style={{ position: "relative", paddingLeft: 36 }}>
          <div style={{ position: "absolute", left: 8, top: 8, bottom: 8, width: 2, background: "linear-gradient(to bottom, #2563EB, #E2E8F0)", borderRadius: 1 }} />
          {portfolioData.career.map((c, i) => (
            <div key={i} style={{ marginBottom: 40, position: "relative" }}>
              <div style={{ position: "absolute", left: -36, top: 6, width: 18, height: 18, borderRadius: "50%", background: c.isCurrent ? "#2563EB" : "#CBD5E1", border: "3px solid #fff", boxShadow: `0 0 0 2px ${c.isCurrent ? "#2563EB" : "#E2E8F0"}` }} />
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#94A3B8", fontWeight: 500 }}>{c.period}</span>
                {c.isCurrent && <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: "#fff", background: "#2563EB", borderRadius: 100, padding: "2px 10px", fontWeight: 600 }}>NOW</span>}
              </div>
              <h4 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 18, fontWeight: 700, color: "#0F172A", margin: "4px 0 2px 0" }}>{c.role}</h4>
              <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 13, color: "#2563EB", margin: "0 0 6px 0", fontWeight: 500 }}>{c.org}</p>
              <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 14, color: "#64748B", lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 24px", background: "#F8FAFC" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <SectionLabel text="Skills" />
        <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 30, fontWeight: 700, color: "#0F172A", margin: "12px 0 48px 0" }}>
          スキルセット
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
          {portfolioData.skills.map((skill) => (
            <div key={skill.category} style={{ background: "#fff", borderRadius: 14, padding: "24px", border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 14px 0" }}>
                {skill.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skill.items.map((item) => (
                  <span key={item} style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 12, color: "#1E293B", background: "#F1F5F9", borderRadius: 6, padding: "5px 12px", fontWeight: 500, lineHeight: 1.4 }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff", borderRadius: 16, border: "1px solid #E2E8F0", overflow: "hidden",
        transition: "box-shadow 0.3s, transform 0.3s",
        boxShadow: hovered ? "0 20px 50px rgba(15,23,42,0.10)" : "0 1px 4px rgba(15,23,42,0.04)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <div style={{ background: `linear-gradient(135deg, ${project.color}08, ${project.color}04)`, padding: "20px 28px 16px", borderBottom: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, color: project.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Case Study 0{project.id}
          </span>
          <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 11, color: "#94A3B8", marginLeft: 12 }}>
            {project.source}
          </span>
        </div>
        <MiniChart data={project.chartData} color={project.color} width={100} height={32} />
      </div>

      <div style={{ padding: "24px 28px" }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: "#64748B", background: "#F1F5F9", borderRadius: 4, padding: "3px 8px", fontWeight: 500 }}>
              {tag}
            </span>
          ))}
        </div>

        <h3 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 17, fontWeight: 700, color: "#0F172A", margin: "0 0 18px 0", lineHeight: 1.5 }}>
          {project.title}
        </h3>

        <InfoRow icon="？" label="問い" value={project.question} />
        <InfoRow icon="→" label="手法" value={project.approach} />
        <InfoRow icon="💡" label="示唆" value={project.insight} highlight />

        <div style={{ background: `${project.color}08`, border: `1px solid ${project.color}20`, borderRadius: 10, padding: "12px 16px", marginTop: 16, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, color: project.color, textTransform: "uppercase", letterSpacing: "0.06em", flexShrink: 0 }}>
            Impact
          </span>
          <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 13, color: "#0F172A", fontWeight: 600, lineHeight: 1.5 }}>
            {project.impact}
          </span>
        </div>

        {project.note && (
          <div
            onClick={() => setExpanded(!expanded)}
            style={{ marginTop: 12, cursor: "pointer" }}
          >
            <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 11, color: "#94A3B8" }}>
              {expanded ? "▼" : "▶"} 備考
            </span>
            {expanded && (
              <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 12, color: "#94A3B8", lineHeight: 1.7, marginTop: 6, padding: "10px 12px", background: "#F8FAFC", borderRadius: 8 }}>
                {project.note}
              </p>
            )}
          </div>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              marginTop: 16, padding: "8px 16px",
              background: "#0F172A", color: "#fff", borderRadius: 8,
              textDecoration: "none", fontSize: 12,
              fontFamily: "'Outfit', sans-serif", fontWeight: 500,
              transition: "opacity 0.2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub で見る
          </a>
        )}
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value, highlight }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
        <span style={{ fontSize: 10, opacity: 0.5 }}>{icon}</span>
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
          {label}
        </span>
      </div>
      <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 13, color: highlight ? "#0F172A" : "#475569", fontWeight: highlight ? 600 : 400, lineHeight: 1.7, margin: 0, paddingLeft: 16 }}>
        {value}
      </p>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <SectionLabel text="Projects" />
        <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 30, fontWeight: 700, color: "#0F172A", margin: "12px 0 12px 0" }}>
          プロジェクト
        </h2>
        <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 14, color: "#64748B", margin: "0 0 48px 0", lineHeight: 1.8 }}>
          「問い → 手法 → 示唆 → インパクト」の流れで、データ分析とアプリ開発の実績を紹介します。
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 24 }}>
          {portfolioData.projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 24px 100px", background: "#0F172A", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-40%", right: "-15%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <SectionLabel text="Contact" light />
        <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 26, fontWeight: 700, color: "#F8FAFC", margin: "12px 0 16px 0" }}>
          お問い合わせ
        </h2>
        <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 14, color: "#94A3B8", lineHeight: 1.8, margin: "0 0 40px 0" }}>
          データアナリストとしてのキャリアに関するご相談や
          <br />カジュアル面談のお誘い、お気軽にご連絡ください。
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: "Email", value: "junko.kimura.316@gmail.com" },
            { label: "GitHub", value: "github.com/junkohanda" },
            { label: "LinkedIn", value: "linkedin.com/junko-handa-ds87" },
          ].map((c) => (
            <div key={c.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "18px 26px", minWidth: 155 }}>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: "#64748B", margin: "0 0 6px 0", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
                {c.label}
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "#CBD5E1", margin: 0 }}>
                {c.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#0B1120", padding: "20px 24px", textAlign: "center", fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "#475569" }}>
      © 2026 {portfolioData.name} — Built with Next.js & Vercel, designed with AI (Claude)
    </footer>
  );
}

function SectionLabel({ text, light }) {
  return (
    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 600, color: light ? "#60A5FA" : "#2563EB", letterSpacing: "0.12em", textTransform: "uppercase" }}>
      {text}
    </span>
  );
}

export default function Portfolio() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700;800&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        a:hover { opacity: 0.85; }
        ::selection { background: #2563EB20; color: #0F172A; }
      `}</style>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
