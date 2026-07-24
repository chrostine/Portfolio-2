// CaseCarousel — Coverflow-agtig karrusel til casearray.ts
// Funktionelt: samme rolle som work.astro (mapper casearray) + case.astro
// (link, video der afspiller ved hover, titel, programs, tekst, pil).
// Stilen herunder er BEVIDST holdt simpel/adskilt fra case.astro, så du frit
// kan style dette kort uden at røre case.astro eller work.astro.
//
// Kræver: npm install framer-motion

import * as React from "react"
import { useCallback, useEffect, useMemo, useRef } from "react"
import {
    motion,
    useMotionValue,
    useReducedMotion,
    useTransform,
    type MotionValue,
} from "framer-motion"

// -----------------------------------------------------------------------------
// Typer — matcher (et udsnit af) Case fra casearray.ts
// -----------------------------------------------------------------------------

type CaseItem = {
    slug: string
    titel: string
    video: string
    displayText: string
    programs: string[]
    url?: string
}

type Transition = {
    duration?: number
    delay?: number
}

type Props = {
    cases: CaseItem[]
    basePath?: string // fx "/work/" — sæt til det du bruger til case-siderne
    activeWidth?: number
    activeHeight?: number
    restWidth?: number
    restHeight?: number
    gap?: number
    radius?: number
    showArrows?: boolean
    arrowColor?: string
    arrowBackground?: string
    arrowSize?: number
    arrowPosition?: number
    autoplay?: boolean
    autoplayDirection?: "leftToRight" | "rightToLeft"
    transition?: Transition
    style?: React.CSSProperties
    className?: string
}

type Sizing = {
    restWidth: number
    restHeight: number
    activeWidth: number
    activeHeight: number
}

const RENDER_RANGE = 6

const DEFAULTS: Required<Omit<Props, "style" | "className" | "cases">> = {
    basePath: "/work/",
    activeWidth: 700,
    activeHeight: 440,
    restWidth: 220,
    restHeight: 300,
    gap: 30,
    radius: 2,
    showArrows: true,
    arrowColor: "#000000",
    arrowBackground: "#FFFFFF",
    arrowSize: 56,
    arrowPosition: 95,
    autoplay: false,
    autoplayDirection: "rightToLeft",
    transition: { duration: 0.4, delay: 2.5 },
}

// -----------------------------------------------------------------------------
// Helpers (samme matematik som Coverflow-motoren)
// -----------------------------------------------------------------------------

function relOf(index: number, pos: number, count: number): number {
    let rel = (((index - pos) % count) + count) % count
    if (rel > count / 2) rel -= count
    return rel
}

function xForRel(rel: number, s: Sizing, gap: number): number {
    const ar = Math.abs(rel)
    const c1 = s.activeWidth / 2 + gap + s.restWidth / 2
    const pitch = s.restWidth + gap
    const mag = ar <= 1 ? ar * c1 : c1 + (ar - 1) * pitch
    return (rel < 0 ? -1 : 1) * mag
}

function blendForRel(rel: number): number {
    return Math.min(Math.abs(rel), 1)
}

// -----------------------------------------------------------------------------
// Card — video + titel/programs/tekst-overlay, pakket i et <a>-link.
// Klik på et sidekort centrerer det. Klik på det aktive (centrerede) kort
// navigerer til case-siden (linket får lov at virke som normalt).
// -----------------------------------------------------------------------------

function Card({
    item,
    index,
    pos,
    count,
    R,
    sizing,
    gap,
    radius,
    goTo,
    href,
}: {
    item: CaseItem
    index: number
    pos: MotionValue<number>
    count: number
    R: number
    sizing: Sizing
    gap: number
    radius: number
    goTo: (index: number) => void
    href: string
}) {
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const x = useTransform(pos, (p: number) =>
        xForRel(relOf(index, p, count), sizing, gap)
    )
    const opacity = useTransform(pos, (p: number) => {
        const ar = Math.abs(relOf(index, p, count))
        return ar <= R ? 1 : ar >= R + 1 ? 0 : 1 - (ar - R)
    })
    const zIndex = useTransform(pos, (p: number) =>
        Math.round(1000 - Math.abs(relOf(index, p, count)) * 100)
    )
    const width = useTransform(pos, (p: number) => {
        const a = blendForRel(relOf(index, p, count))
        return sizing.activeWidth + (sizing.restWidth - sizing.activeWidth) * a
    })
    const height = useTransform(pos, (p: number) => {
        const a = blendForRel(relOf(index, p, count))
        return (
            sizing.activeHeight + (sizing.restHeight - sizing.activeHeight) * a
        )
    })
    const borderRadius = useTransform(pos, (p: number) => {
        const a = blendForRel(relOf(index, p, count))
        const w =
            sizing.activeWidth + (sizing.restWidth - sizing.activeWidth) * a
        const h =
            sizing.activeHeight + (sizing.restHeight - sizing.activeHeight) * a
        return (Math.max(0, Math.min(20, radius)) / 20) * (Math.min(w, h) / 2)
    })
    const boxShadow = useTransform(pos, (p: number) =>
        Math.abs(relOf(index, p, count)) < 0.5
            ? "0 24px 70px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.06)"
            : "0 14px 40px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.05)"
    )
    // Tekst-overlayet toner ind, jo tættere kortet er på centrum.
    const textOpacity = useTransform(pos, (p: number) => {
        const a = blendForRel(relOf(index, p, count))
        return 1 - a
    })

    const handlePointerEnter = () => {
        const v = videoRef.current
        if (!v) return
        const p = v.play()
        if (p) p.catch(() => {})
    }
    const handlePointerLeave = () => {
        const v = videoRef.current
        if (!v) return
        v.pause()
        v.currentTime = 0
    }

    const handleClick = (e: React.MouseEvent) => {
        const rel = Math.abs(relOf(index, pos.get(), count))
        if (rel > 0.5) {
            // Ikke det centrerede kort: klik centrerer det i stedet for at navigere.
            e.preventDefault()
            goTo(index)
        }
        // Er kortet allerede centreret, får <a href> lov at navigere normalt.
    }

    return (
        <motion.div
            style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                x,
                zIndex,
                opacity,
            }}
        >
            <motion.a
                href={href}
                onClick={handleClick}
                onMouseEnter={handlePointerEnter}
                onMouseLeave={handlePointerLeave}
                style={{
                    display: "block",
                    x: "-50%",
                    y: "-50%",
                    width,
                    height,
                    borderRadius,
                    overflow: "hidden",
                    position: "relative",
                    boxShadow,
                    cursor: "pointer",
                    background: "#111",
                }}
                className="case-carousel-card"
            >
                <video
                    ref={videoRef}
                    src={item.video}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        pointerEvents: "none",
                    }}
                />

                {/* gradient for læsbar tekst */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0) 70%)",
                        pointerEvents: "none",
                    }}
                />

                {/* tekst-overlay — style frit, klasserne er blot kroge */}
                <motion.div
                    style={{
                        opacity: textOpacity,
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        padding: "1.25rem",
                        color: "#fff",
                        pointerEvents: "none",
                    }}
                    className="case-carousel-text"
                >
                    <h3 className="case-carousel-title text-lg font-medium leading-tight">
                        {item.titel}
                    </h3>
                    <p className="case-carousel-programs text-xs opacity-70 mt-1">
                        {item.programs.join(", ")}
                    </p>
                    <p className="case-carousel-desc text-sm opacity-90 mt-2 line-clamp-2">
                        {item.displayText}
                    </p>
                </motion.div>
            </motion.a>
        </motion.div>
    )
}

// -----------------------------------------------------------------------------
// ArrowButton
// -----------------------------------------------------------------------------

function ArrowButton({
    side,
    onClick,
    color,
    background,
    size,
    position,
}: {
    side: "left" | "right"
    onClick: () => void
    color: string
    background: string
    size: number
    position: number
}) {
    const isLeft = side === "left"
    const p = Math.max(0, Math.min(100, position))
    const inset = `calc((50% - ${size}px) * ${(100 - p) / 100})`
    return (
        <button
            type="button"
            aria-label={isLeft ? "Forrige" : "Næste"}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
                e.stopPropagation()
                onClick()
            }}
            style={{
                position: "absolute",
                top: "50%",
                [isLeft ? "left" : "right"]: inset,
                transform: "translateY(-50%)",
                width: size,
                height: size,
                borderRadius: "50%",
                border: "none",
                background,
                color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: 0,
                zIndex: 2000,
                boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                WebkitTapHighlightColor: "transparent",
            }}
        >
            <svg
                width={size * 0.4}
                height={size * 0.4}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pointerEvents: "none" }}
            >
                {isLeft ? (
                    <polyline points="15 18 9 12 15 6" />
                ) : (
                    <polyline points="9 18 15 12 9 6" />
                )}
            </svg>
        </button>
    )
}

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

export default function CaseCarousel(props: Props) {
    const {
        cases,
        basePath,
        activeWidth,
        activeHeight,
        restWidth,
        restHeight,
        gap,
        radius,
        showArrows,
        arrowColor,
        arrowBackground,
        arrowSize,
        arrowPosition,
        autoplay,
        autoplayDirection,
        transition: transitionProp,
        style,
        className,
    } = { ...DEFAULTS, ...props }

    const prefersReducedMotion = useReducedMotion()
    const count = Math.max(1, cases.length)

    const sizing: Sizing = useMemo(
        () => ({ restWidth, restHeight, activeWidth, activeHeight }),
        [restWidth, restHeight, activeWidth, activeHeight]
    )

    const moveDur =
        typeof transitionProp?.duration === "number"
            ? transitionProp.duration
            : 0.5
    const dwell =
        typeof transitionProp?.delay === "number"
            ? Math.max(0, transitionProp.delay)
            : 1.2

    const R = Math.max(1, Math.min(RENDER_RANGE, Math.floor(count / 2) - 1))

    // ---- Ét rAF-drev (uændret motor fra Coverflow-komponenten) ----------
    const pos = useMotionValue(0)
    const targetRef = useRef(0)
    const rafRef = useRef<number | null>(null)
    const lastTRef = useRef<number | null>(null)
    const autoplayingRef = useRef(false)
    const dirRef = useRef(1)
    const dwellAccRef = useRef(0)
    const moveDurRef = useRef(moveDur)
    moveDurRef.current = moveDur
    const dwellRef = useRef(dwell)
    dwellRef.current = dwell
    const reducedRef = useRef(prefersReducedMotion)
    reducedRef.current = prefersReducedMotion
    // Pause autoplay mens musen er over karrusellen, så man kan nå at hover'e
    // et kort og se videoen uden at det glider væk under en.
    const isHoveredRef = useRef(false)

    const tick = useCallback(
        (t: number) => {
            const last = lastTRef.current ?? t
            const dt = Math.min((t - last) / 1000, 1 / 30)
            lastTRef.current = t

            const cur = pos.get()
            const diff = targetRef.current - cur
            const dur = Math.max(0.08, moveDurRef.current)
            const step = (1 / dur) * dt
            const arriving = reducedRef.current || Math.abs(diff) <= step

            if (arriving) {
                pos.set(targetRef.current)
                if (autoplayingRef.current && !isHoveredRef.current) {
                    dwellAccRef.current += dt
                    if (dwellAccRef.current >= Math.max(0, dwellRef.current)) {
                        dwellAccRef.current = 0
                        targetRef.current += dirRef.current
                    }
                    rafRef.current = requestAnimationFrame(tick)
                    return
                }
                if (autoplayingRef.current) {
                    // Hoveret: bliv i live-loopet, men ryk ikke target endnu.
                    rafRef.current = requestAnimationFrame(tick)
                    return
                }
                rafRef.current = null
                lastTRef.current = null
                return
            }

            pos.set(cur + Math.sign(diff) * step)
            rafRef.current = requestAnimationFrame(tick)
        },
        [pos]
    )

    const ensureRunning = useCallback(() => {
        if (rafRef.current == null) {
            lastTRef.current = null
            rafRef.current = requestAnimationFrame(tick)
        }
    }, [tick])

    const goNext = useCallback(() => {
        targetRef.current += 1
        ensureRunning()
    }, [ensureRunning])
    const goPrev = useCallback(() => {
        targetRef.current -= 1
        ensureRunning()
    }, [ensureRunning])
    const goTo = useCallback(
        (index: number) => {
            const cur = targetRef.current
            let d = index - cur
            d = ((d % count) + count) % count
            if (d > count / 2) d -= count
            targetRef.current = cur + d
            ensureRunning()
        },
        [ensureRunning, count]
    )

    useEffect(() => {
        return () => {
            if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
            rafRef.current = null
        }
    }, [])

    useEffect(() => {
        const on = autoplay && count > 1
        autoplayingRef.current = on
        if (on) {
            dirRef.current = autoplayDirection === "leftToRight" ? -1 : 1
            dwellAccRef.current = 0
            ensureRunning()
        }
        return () => {
            autoplayingRef.current = false
        }
    }, [autoplay, autoplayDirection, count, ensureRunning])

    useEffect(() => {
        if (autoplay) return
        const onKey = (e: KeyboardEvent) => {
            if (!isHoveredRef.current) return
            if (e.key === "ArrowLeft") {
                e.preventDefault()
                goPrev()
            } else if (e.key === "ArrowRight") {
                e.preventDefault()
                goNext()
            }
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [autoplay, goPrev, goNext])

    const containerStyle: React.CSSProperties = {
        ...style,
        position: "relative",
        width: "100%",
        height: "100%",
        minWidth: 320,
        minHeight: 240,
        overflow: "hidden",
        userSelect: "none",
        touchAction: "pan-y",
        outline: "none",
    }

    const cards = cases.map((item, i) => (
        <Card
            key={item.slug}
            item={item}
            index={i}
            pos={pos}
            count={count}
            R={R}
            sizing={sizing}
            gap={gap}
            radius={radius}
            goTo={goTo}
            href={`${basePath}${item.slug}`}
        />
    ))

    const arrows = showArrows && count > 1 && (
        <>
            <ArrowButton
                side="left"
                onClick={goPrev}
                color={arrowColor}
                background={arrowBackground}
                size={arrowSize}
                position={arrowPosition}
            />
            <ArrowButton
                side="right"
                onClick={goNext}
                color={arrowColor}
                background={arrowBackground}
                size={arrowSize}
                position={arrowPosition}
            />
        </>
    )

    return (
        <div
            className={className}
            tabIndex={0}
            onMouseEnter={() => {
                isHoveredRef.current = true
            }}
            onMouseLeave={() => {
                isHoveredRef.current = false
            }}
            onFocus={() => {
                isHoveredRef.current = true
            }}
            onBlur={() => {
                isHoveredRef.current = false
            }}
            style={containerStyle}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    isolation: "isolate",
                    zIndex: 0,
                }}
            >
                {cards}
            </div>
            {arrows}
        </div>
    )
}
