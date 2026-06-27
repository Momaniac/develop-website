"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Gradient Blob ─── */
export function GradientBlob({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(15,9,79,0.22), rgba(100,3,84,0.18), rgba(41,0,142,0.16))",
        ...style,
      }}
    />
  );
}

/* ─── Glass Card ─── */
export function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: "0 24px 60px rgba(0,0,0,0.10)" } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`rounded-[28px] border border-black/[0.06] bg-white/90 backdrop-blur-md shadow-[0_18px_50px_rgba(0,0,0,0.05)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section Title ─── */
export function SectionTitle({
  kicker,
  title,
  text,
  align = "center",
  dark = false,
}: {
  kicker: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-xs font-semibold uppercase tracking-[0.3em] ${dark ? "text-white/60" : "text-develop-plum"}`}
      >
        {kicker}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-text-primary"}`}
      >
        {title}
      </motion.h2>
      {text && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${dark ? "text-white/70" : "text-text-secondary"}`}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

/* ─── Stat Card ─── */
export function StatCard({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
    >
      <div className="text-sm font-medium text-text-muted">{label}</div>
      <div className="mt-2 text-4xl font-bold tracking-tight text-text-primary lg:text-5xl">
        {value}
      </div>
      {description && (
        <div className="mt-3 text-sm leading-6 text-text-secondary">{description}</div>
      )}
    </motion.div>
  );
}

/* ─── Pill ─── */
export function Pill({ children, className = "", variant = "light" }: { children: React.ReactNode; className?: string; variant?: "light" | "dark" }) {
  const styles = variant === "dark"
    ? "border-white/15 bg-white/[0.08] text-white/70 backdrop-blur-md"
    : "border-black/10 bg-white text-text-secondary shadow-sm";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium ${styles} ${className}`}
    >
      {children}
    </span>
  );
}

/* ─── Button ─── */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  type,
  disabled = false,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "white" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  const base = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer";
  const sizes = {
    sm: "rounded-xl px-4 py-2 text-sm",
    md: "rounded-2xl px-6 py-3 text-sm",
    lg: "rounded-2xl px-8 py-4 text-base",
  };
  const variants = {
    primary:
      "bg-white text-hero-base shadow-lg hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(167,139,250,0.35)] active:translate-y-0",
    secondary:
      "border border-black/10 bg-white text-text-primary hover:border-develop-plum hover:text-develop-plum shadow-sm",
    ghost: "text-text-secondary hover:text-develop-blue",
    white:
      "bg-white text-hero-base shadow-lg hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(167,139,250,0.35)] active:translate-y-0",
    outline:
      "border-[1.5px] border-white/25 bg-transparent text-white hover:border-white/50 hover:bg-white/[0.06]",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${disabled ? "pointer-events-none opacity-60" : ""} ${className}`;

  if (href) {
    if (href.startsWith("#")) {
      return <a href={href} className={cls} onClick={onClick}>{children}</a>;
    }
    if (href.startsWith("/")) {
      return <Link href={href} className={cls} onClick={onClick}>{children}</Link>;
    }
    if (href.startsWith("mailto:") || href.startsWith("tel:")) {
      return <a href={href} className={cls} onClick={onClick}>{children}</a>;
    }
    return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" onClick={onClick}>{children}</a>;
  }
  return <button type={type} disabled={disabled} onClick={onClick} className={cls}>{children}</button>;
}

/* ─── Icon Box ─── */
export function IconBox({
  children,
  variant = "gradient",
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "gradient" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = { sm: "h-10 w-10", md: "h-12 w-12", lg: "h-14 w-14" };
  const variants = {
    gradient:
      "bg-[linear-gradient(135deg,var(--accent),var(--accent-2),var(--accent-3))] text-white shadow-lg",
    light:
      "bg-[linear-gradient(135deg,rgba(15,9,79,0.08),rgba(100,3,84,0.08),rgba(41,0,142,0.08))] text-develop-blue",
    dark: "bg-develop-blue text-white",
  };
  return (
    <div
      className={`flex items-center justify-center rounded-2xl ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
