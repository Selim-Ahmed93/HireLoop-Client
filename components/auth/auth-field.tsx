"use client"

import { useId, useState } from "react"
import type { ComponentProps, ReactNode } from "react"
import { Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"

type AuthFieldProps = Omit<ComponentProps<"input">, "type"> & {
  label: string
  type?: "text" | "email" | "password" | "tel"
  icon?: ReactNode
  /** Optional element rendered on the right side of the label row. */
  action?: ReactNode
  /** Optional helper text rendered under the input. */
  hint?: string
}

export function AuthField({
  label,
  type = "text",
  icon,
  action,
  hint,
  id,
  className,
  ...props
}: AuthFieldProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const hintId = hint ? `${inputId}-hint` : undefined
  const [visible, setVisible] = useState(false)

  const isPassword = type === "password"
  const resolvedType = isPassword ? (visible ? "text" : "password") : type

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-3">
        <label
          htmlFor={inputId}
          className="text-[13px] font-medium text-white/75"
        >
          {label}
        </label>
        {action}
      </div>

      <div className="relative">
        {icon ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-white/30"
          >
            {icon}
          </span>
        ) : null}

        <input
          id={inputId}
          type={resolvedType}
          aria-describedby={hintId}
          className={cn(
            "h-11 w-full rounded-xl border border-white/[0.1] bg-white/[0.035] text-[14.5px] text-white transition-[border-color,box-shadow,background-color] placeholder:text-white/30 hover:border-white/[0.16] focus:border-[#6c5ce7]/70 focus:bg-white/[0.05] focus:ring-4 focus:ring-[#6c5ce7]/15 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-[#e5484d]/60 aria-invalid:ring-4 aria-invalid:ring-[#e5484d]/15",
            icon ? "pl-11" : "pl-3.5",
            isPassword ? "pr-11" : "pr-3.5",
            className
          )}
          {...props}
        />

        {isPassword ? (
          <button
            type="button"
            onClick={() => setVisible((value) => !value)}
            aria-label={visible ? "Hide password" : "Show password"}
            aria-pressed={visible}
            className="absolute top-1/2 right-1.5 grid size-8 -translate-y-1/2 place-items-center rounded-lg text-white/35 transition-colors hover:bg-white/[0.06] hover:text-white/70 focus-visible:ring-2 focus-visible:ring-[#8b80f9]/70 focus-visible:outline-none"
          >
            {visible ? (
              <EyeOff className="size-4" aria-hidden="true" />
            ) : (
              <Eye className="size-4" aria-hidden="true" />
            )}
          </button>
        ) : null}
      </div>

      {hint ? (
        <p id={hintId} className="text-[11.5px] leading-5 text-white/35">
          {hint}
        </p>
      ) : null}
    </div>
  )
}
