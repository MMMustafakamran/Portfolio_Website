import React, { useState, useEffect } from 'react';

const PixelAvatar = ({ state, dialogue }) => {
    // Advanced Color Palette with more shades for dithering and detail
    const colors = {
        skin: {
            base: "#C58F6F",
            shadow: "#9E6F54",
            highlight: "#E2B698",
            darkShadow: "#7A5038",
            mid: "#B07D5E" // New mid-tone for dithering
        },
        hair: {
            base: "#111827",
            highlight: "#2F3B4E",
            shadow: "#000000",
            mid: "#1F2937",
            lightHighlight: "#475569" // Lighter highlight for individual strands
        },
        jacket: {
            base: "#181818",
            shadow: "#000000",
            highlight: "#2C2C2C",
            lapel: "#0F0F0F",
            fabricLight: "#222222" // For fabric texture
        },
        shirt: {
            base: "#FFFFFF",
            shadow: "#E2E8F0",
            button: "#94A3B8",
            fabricShadow: "#D1D5DB" // For shirt texture
        },
        glasses: {
            frame: "#CBD5E1",
            lens: "#38BDF8",
            reflection: "#F0F9FF",
            lensShadow: "#2563EB" // Darker lens tone for gradient
        },
        pants: {
            base: "#181818",
            shadow: "#000000",
            fabricLight: "#222222" // For fabric texture
        },
        shoes: {
            base: "#3F2C22",
            sole: "#1A120E",
            highlight: "#5C4033",
            mid: "#4E362A" // Mid-tone for shoe detail
        },
        macbook: {
            case: "#E2E8F0",
            caseShadow: "#94A3B8",
            screen: "#0F172A",
            bezel: "#000000",
            keyboard: "#1E293B",
            logo: "#FFFFFF",
            trackpad: "#CBD5E1"
        }
    };

    const [idleAction, setIdleAction] = useState('none');
    const [idleTimer, setIdleTimer] = useState(0);

    useEffect(() => {
        if (state === 'idle') {
            const timer = setInterval(() => setIdleTimer(prev => prev + 1), 1000);
            return () => clearInterval(timer);
        } else {
            setIdleTimer(0);
            setIdleAction('none');
        }
    }, [state]);

    useEffect(() => {
        if (idleTimer === 5) {
            const actions = ['gameboy', 'coffee', 'sleep'];
            setIdleAction(actions[Math.floor(Math.random() * actions.length)]);
        }
    }, [idleTimer]);

    const HeadFront = () => (
        <g>
            {/* --- NECK --- */}
            <rect x="29" y="34" width="6" height="4" fill={colors.skin.shadow} />
            <rect x="30" y="34" width="4" height="2" fill={colors.skin.darkShadow} opacity="0.5" />
            {/* Dithered shadow on neck */}
            <rect x="29" y="34" width="1" height="1" fill={colors.skin.darkShadow} opacity="0.3" />
            <rect x="34" y="34" width="1" height="1" fill={colors.skin.darkShadow} opacity="0.3" />
            <rect x="30" y="37" width="1" height="1" fill={colors.skin.shadow} opacity="0.5" />
            <rect x="33" y="37" width="1" height="1" fill={colors.skin.shadow} opacity="0.5" />

            {/* --- EARS (More detail) --- */}
            <rect x="20" y="20" width="2" height="5" fill={colors.skin.base} />
            <rect x="42" y="20" width="2" height="5" fill={colors.skin.base} />
            <rect x="20" y="21" width="1" height="3" fill={colors.skin.shadow} opacity="0.7" />
            <rect x="43" y="21" width="1" height="3" fill={colors.skin.shadow} opacity="0.7" />
            <rect x="21" y="22" width="1" height="1" fill={colors.skin.highlight} opacity="0.4" />
            <rect x="42" y="22" width="1" height="1" fill={colors.skin.highlight} opacity="0.4" />

            {/* --- FACE BASE --- */}
            <rect x="24" y="10" width="16" height="22" fill={colors.skin.base} />
            <rect x="23" y="14" width="18" height="14" fill={colors.skin.base} />
            
            {/* Jawline & Chin (Rounded with shading) */}
            <rect x="25" y="28" width="14" height="4" fill={colors.skin.base} />
            <rect x="27" y="32" width="10" height="2" fill={colors.skin.base} />
            
            {/* Dithered Shading for depth (Cheekbones & Temples) */}
            <rect x="23" y="14" width="1" height="10" fill={colors.skin.shadow} opacity="0.6" />
            <rect x="24" y="14" width="1" height="10" fill={colors.skin.shadow} opacity="0.3" />
            <rect x="24" y="15" width="1" height="1" fill={colors.skin.shadow} opacity="0.6" />
            <rect x="24" y="17" width="1" height="1" fill={colors.skin.shadow} opacity="0.6" />
            <rect x="24" y="19" width="1" height="1" fill={colors.skin.shadow} opacity="0.6" />

            <rect x="40" y="14" width="1" height="10" fill={colors.skin.shadow} opacity="0.6" />
            <rect x="39" y="14" width="1" height="10" fill={colors.skin.shadow} opacity="0.3" />
            <rect x="39" y="15" width="1" height="1" fill={colors.skin.shadow} opacity="0.6" />
            <rect x="39" y="17" width="1" height="1" fill={colors.skin.shadow} opacity="0.6" />
            <rect x="39" y="19" width="1" height="1" fill={colors.skin.shadow} opacity="0.6" />
            
            {/* Chin shadow (Dithered) */}
            <rect x="27" y="33" width="10" height="1" fill={colors.skin.shadow} opacity="0.4" />
            <rect x="28" y="33" width="1" height="1" fill={colors.skin.shadow} opacity="0.7" />
            <rect x="30" y="33" width="1" height="1" fill={colors.skin.shadow} opacity="0.7" />
            <rect x="32" y="33" width="1" height="1" fill={colors.skin.shadow} opacity="0.7" />
            <rect x="34" y="33" width="1" height="1" fill={colors.skin.shadow} opacity="0.7" />

            {/* --- HAIR (Highly detailed Quiff) --- */}
            {/* Sides (Fade with individual pixels) */}
            <rect x="22" y="10" width="2" height="10" fill={colors.hair.base} />
            <rect x="40" y="10" width="2" height="10" fill={colors.hair.base} />
            <rect x="21" y="12" width="1" height="6" fill={colors.hair.mid} />
            <rect x="42" y="12" width="1" height="6" fill={colors.hair.mid} />
            <rect x="21" y="13" width="1" height="1" fill={colors.hair.base} />
            <rect x="21" y="15" width="1" height="1" fill={colors.hair.base} />
            <rect x="42" y="13" width="1" height="1" fill={colors.hair.base} />
            <rect x="42" y="15" width="1" height="1" fill={colors.hair.base} />

            {/* Top Volume (Strands and texture) */}
            <rect x="22" y="4" width="20" height="8" fill={colors.hair.base} />
            <rect x="24" y="2" width="16" height="4" fill={colors.hair.base} />
            <rect x="25" y="1" width="14" height="2" fill={colors.hair.base} />
            
            {/* Hair Strands/Texture */}
            <rect x="26" y="3" width="2" height="4" fill={colors.hair.highlight} />
            <rect x="30" y="2" width="2" height="5" fill={colors.hair.highlight} />
            <rect x="34" y="3" width="2" height="4" fill={colors.hair.highlight} />
            <rect x="38" y="5" width="2" height="3" fill={colors.hair.highlight} />
            {/* Finer highlights */}
            <rect x="27" y="3" width="1" height="2" fill={colors.hair.lightHighlight} opacity="0.7" />
            <rect x="31" y="2" width="1" height="3" fill={colors.hair.lightHighlight} opacity="0.7" />
            <rect x="35" y="3" width="1" height="2" fill={colors.hair.lightHighlight} opacity="0.7" />
            {/* Hairline detail */}
            <rect x="23" y="10" width="1" height="1" fill={colors.hair.base} />
            <rect x="25" y="10" width="1" height="1" fill={colors.hair.base} />
            <rect x="38" y="10" width="1" height="1" fill={colors.hair.base} />
            <rect x="40" y="10" width="1" height="1" fill={colors.hair.base} />

            {/* --- FEATURES --- */}
            {/* Eyebrows (Individual pixels) */}
            <rect x="25" y="18" width="5" height="1" fill={colors.hair.base} />
            <rect x="34" y="18" width="5" height="1" fill={colors.hair.base} />
            <rect x="25" y="18" width="1" height="1" fill={colors.hair.shadow} />
            <rect x="29" y="18" width="1" height="1" fill={colors.hair.shadow} />
            <rect x="34" y="18" width="1" height="1" fill={colors.hair.shadow} />
            <rect x="38" y="18" width="1" height="1" fill={colors.hair.shadow} />

            {/* Eyes (Defined pupil/sclera) */}
            <rect x="26" y="20" width="3" height="2" fill="#FFFFFF" />
            <rect x="27" y="20" width="1" height="2" fill="#1F1510" />
            <rect x="28" y="21" width="1" height="1" fill="#FFFFFF" opacity="0.8" /> {/* Reflection */}
            <rect x="35" y="20" width="3" height="2" fill="#FFFFFF" />
            <rect x="36" y="20" width="1" height="2" fill="#1F1510" />
            <rect x="37" y="21" width="1" height="1" fill="#FFFFFF" opacity="0.8" /> {/* Reflection */}

            {/* Nose (Dithered shading for 3D effect) */}
            <rect x="31" y="22" width="2" height="6" fill={colors.skin.shadow} opacity="0.4" />
            <rect x="31" y="23" width="1" height="1" fill={colors.skin.darkShadow} opacity="0.3" />
            <rect x="32" y="25" width="1" height="1" fill={colors.skin.darkShadow} opacity="0.3" />
            <rect x="30" y="26" width="4" height="1" fill={colors.skin.shadow} opacity="0.5" />
            <rect x="30" y="27" width="1" height="1" fill={colors.skin.shadow} opacity="0.3" />
            <rect x="33" y="27" width="1" height="1" fill={colors.skin.shadow} opacity="0.3" />

            {/* Mouth */}
            <rect x="29" y="29" width="6" height="1" fill="#6D4C41" />
            <rect x="30" y="30" width="4" height="1" fill="#5D4037" opacity="0.5" />
            <rect x="29" y="29" width="1" height="1" fill="#5D4037" />
            <rect x="34" y="29" width="1" height="1" fill="#5D4037" />

            {/* Subtle Stubble (Individual faint pixels) */}
            <rect x="24" y="28" width="16" height="5" fill={colors.skin.darkShadow} opacity="0.05" />
            <rect x="25" y="29" width="1" height="1" fill={colors.skin.darkShadow} opacity="0.1" />
            <rect x="27" y="31" width="1" height="1" fill={colors.skin.darkShadow} opacity="0.1" />
            <rect x="36" y="30" width="1" height="1" fill={colors.skin.darkShadow} opacity="0.1" />
            <rect x="38" y="28" width="1" height="1" fill={colors.skin.darkShadow} opacity="0.1" />

            {/* --- GLASSES (Thin wireframe, detailed lens) --- */}
            <rect x="24" y="19" width="5" height="1" fill={colors.glasses.frame} />
            <rect x="24" y="23" width="5" height="1" fill={colors.glasses.frame} />
            <rect x="23" y="20" width="1" height="3" fill={colors.glasses.frame} />
            <rect x="29" y="20" width="1" height="3" fill={colors.glasses.frame} />
            <rect x="35" y="19" width="5" height="1" fill={colors.glasses.frame} />
            <rect x="35" y="23" width="5" height="1" fill={colors.glasses.frame} />
            <rect x="34" y="20" width="1" height="3" fill={colors.glasses.frame} />
            <rect x="40" y="20" width="1" height="3" fill={colors.glasses.frame} />
            <rect x="30" y="20" width="4" height="1" fill={colors.glasses.frame} />
            
            {/* Lens with gradient and reflection */}
            <rect x="24" y="20" width="5" height="3" fill={colors.glasses.lens} opacity="0.2" />
            <rect x="24" y="22" width="5" height="1" fill={colors.glasses.lensShadow} opacity="0.3" />
            <rect x="35" y="20" width="5" height="3" fill={colors.glasses.lens} opacity="0.2" />
            <rect x="35" y="22" width="5" height="1" fill={colors.glasses.lensShadow} opacity="0.3" />
            <rect x="25" y="20" width="1" height="1" fill={colors.glasses.reflection} opacity="0.7" />
            <rect x="26" y="21" width="1" height="1" fill={colors.glasses.reflection} opacity="0.7" />
            <rect x="36" y="20" width="1" height="1" fill={colors.glasses.reflection} opacity="0.7" />
            <rect x="37" y="21" width="1" height="1" fill={colors.glasses.reflection} opacity="0.7" />
        </g>
    );

    const DetailedTorso = () => (
        <g>
            {/* Jacket Body with Fabric Texture */}
            <rect x="22" y="36" width="20" height="20" fill={colors.jacket.base} />
            {/* Dithered texture for fabric */}
            <rect x="23" y="37" width="1" height="1" fill={colors.jacket.fabricLight} opacity="0.2" />
            <rect x="25" y="38" width="1" height="1" fill={colors.jacket.fabricLight} opacity="0.2" />
            <rect x="27" y="37" width="1" height="1" fill={colors.jacket.fabricLight} opacity="0.2" />
            <rect x="39" y="37" width="1" height="1" fill={colors.jacket.fabricLight} opacity="0.2" />
            <rect x="40" y="39" width="1" height="1" fill={colors.jacket.fabricLight} opacity="0.2" />

            {/* Shoulder definition */}
            <rect x="21" y="36" width="22" height="1" fill={colors.jacket.highlight} opacity="0.4" />
            <rect x="21" y="37" width="1" height="1" fill={colors.jacket.highlight} opacity="0.3" />
            <rect x="42" y="37" width="1" height="1" fill={colors.jacket.highlight} opacity="0.3" />

            {/* Lapels (Sharp edges and shading) */}
            <rect x="28" y="36" width="2" height="6" fill={colors.jacket.lapel} />
            <rect x="28" y="42" width="1" height="8" fill={colors.jacket.lapel} />
            <rect x="34" y="36" width="2" height="6" fill={colors.jacket.lapel} />
            <rect x="35" y="42" width="1" height="8" fill={colors.jacket.lapel} />
            {/* Lapel shadow */}
            <rect x="27" y="36" width="1" height="6" fill={colors.jacket.shadow} opacity="0.5" />
            <rect x="36" y="36" width="1" height="6" fill={colors.jacket.shadow} opacity="0.5" />

            {/* Shirt underneath (Detailed placket and buttons) */}
            <rect x="30" y="36" width="4" height="14" fill={colors.shirt.base} />
            <rect x="30" y="36" width="1" height="14" fill={colors.shirt.shadow} opacity="0.3" />
            <rect x="33" y="36" width="1" height="14" fill={colors.shirt.shadow} opacity="0.3" />
            <rect x="31" y="39" width="2" height="1" fill={colors.shirt.button} opacity="0.9" />
            <rect x="31" y="43" width="2" height="1" fill={colors.shirt.button} opacity="0.9" />
            <rect x="31" y="47" width="2" height="1" fill={colors.shirt.button} opacity="0.9" />
            {/* Shirt fabric shadow/fold */}
            <rect x="32" y="41" width="1" height="1" fill={colors.shirt.fabricShadow} opacity="0.3" />
            <rect x="32" y="45" width="1" height="1" fill={colors.shirt.fabricShadow} opacity="0.3" />

            {/* Jacket Creases/Shading (Dithered) */}
            <rect x="22" y="38" width="1" height="18" fill={colors.jacket.shadow} opacity="0.7" />
            <rect x="23" y="39" width="1" height="1" fill={colors.jacket.shadow} opacity="0.5" />
            <rect x="23" y="42" width="1" height="1" fill={colors.jacket.shadow} opacity="0.5" />
            <rect x="41" y="38" width="1" height="18" fill={colors.jacket.shadow} opacity="0.7" />
            <rect x="40" y="39" width="1" height="1" fill={colors.jacket.shadow} opacity="0.5" />
            <rect x="40" y="42" width="1" height="1" fill={colors.jacket.shadow} opacity="0.5" />
        </g>
    );

    const LegsStanding = () => (
        <g>
            {/* Pants Left with texture and seam */}
            <rect x="24" y="56" width="6" height="14" fill={colors.pants.base} />
            <rect x="24" y="56" width="1" height="14" fill={colors.pants.shadow} opacity="0.6" />
            <rect x="25" y="57" width="1" height="1" fill={colors.pants.fabricLight} opacity="0.2" />
            <rect x="27" y="60" width="1" height="1" fill={colors.pants.fabricLight} opacity="0.2" />

            {/* Pants Right with texture and seam */}
            <rect x="34" y="56" width="6" height="14" fill={colors.pants.base} />
            <rect x="39" y="56" width="1" height="14" fill={colors.pants.shadow} opacity="0.6" />
            <rect x="35" y="58" width="1" height="1" fill={colors.pants.fabricLight} opacity="0.2" />
            <rect x="37" y="62" width="1" height="1" fill={colors.pants.fabricLight} opacity="0.2" />

            {/* Shoes with detail */}
            <rect x="22" y="70" width="10" height="5" fill={colors.shoes.base} />
            <rect x="32" y="70" width="10" height="5" fill={colors.shoes.base} />
            <rect x="22" y="74" width="10" height="1" fill={colors.shoes.sole} />
            <rect x="32" y="74" width="10" height="1" fill={colors.shoes.sole} />
            {/* Shoe shine/detail */}
            <rect x="24" y="71" width="2" height="1" fill={colors.shoes.highlight} opacity="0.6" />
            <rect x="34" y="71" width="2" height="1" fill={colors.shoes.highlight} opacity="0.6" />
            <rect x="23" y="72" width="1" height="1" fill={colors.shoes.mid} />
            <rect x="33" y="72" width="1" height="1" fill={colors.shoes.mid} />
        </g>
    );

    const LegsWalkingFront = () => (
        <g>
            {/* Left Leg - Stepping Up */}
            <rect x="24" y="56" width="6" height="13" fill={colors.pants.base}>
                <animate attributeName="height" values="13;10;13" dur="0.6s" repeatCount="indefinite" />
                <animate attributeName="y" values="56;59;56" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="24" y="56" width="1" height="13" fill={colors.pants.shadow} opacity="0.6">
                <animate attributeName="height" values="13;10;13" dur="0.6s" repeatCount="indefinite" />
                <animate attributeName="y" values="56;59;56" dur="0.6s" repeatCount="indefinite" />
            </rect>
            
            <rect x="22" y="69" width="10" height="5" fill={colors.shoes.base}>
                <animate attributeName="y" values="69;66;69" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="22" y="73" width="10" height="1" fill={colors.shoes.sole}>
                 <animate attributeName="y" values="73;70;73" dur="0.6s" repeatCount="indefinite" />
            </rect>

            {/* Right Leg - Stepping Down/Offset */}
            <rect x="34" y="56" width="6" height="13" fill={colors.pants.base}>
                <animate attributeName="height" values="10;13;10" dur="0.6s" repeatCount="indefinite" />
                <animate attributeName="y" values="59;56;59" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="39" y="56" width="1" height="13" fill={colors.pants.shadow} opacity="0.6">
                <animate attributeName="height" values="10;13;10" dur="0.6s" repeatCount="indefinite" />
                <animate attributeName="y" values="59;56;59" dur="0.6s" repeatCount="indefinite" />
            </rect>

            <rect x="32" y="69" width="10" height="5" fill={colors.shoes.base}>
                 <animate attributeName="y" values="66;69;66" dur="0.6s" repeatCount="indefinite" />
            </rect>
             <rect x="32" y="73" width="10" height="1" fill={colors.shoes.sole}>
                 <animate attributeName="y" values="70;73;70" dur="0.6s" repeatCount="indefinite" />
            </rect>
        </g>
    );

    const ArmsWaving = () => (
        <g>
            <rect x="18" y="38" width="4" height="16" fill={colors.jacket.base} />
            <rect x="18" y="38" width="1" height="16" fill={colors.jacket.shadow} opacity="0.5" />
            <rect x="18" y="54" width="4" height="4" fill={colors.skin.base} />
            <rect x="18" y="54" width="1" height="4" fill={colors.skin.shadow} opacity="0.5" />
            <g>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="180 44 38; 270 44 38; 180 44 38"
                    dur="1.2s"
                    repeatCount="indefinite"
                />
                <rect x="42" y="38" width="4" height="16" fill={colors.jacket.base} />
                <rect x="45" y="38" width="1" height="16" fill={colors.jacket.shadow} opacity="0.5" />
                <rect x="42" y="54" width="4" height="4" fill={colors.skin.base} />
                <rect x="45" y="54" width="1" height="4" fill={colors.skin.shadow} opacity="0.5" />
            </g>
        </g>
    );

    const ArmsPointing = () => (
        <g>
            {/* Left Arm (Static with detail) */}
            <rect x="18" y="38" width="4" height="16" fill={colors.jacket.base} />
            <rect x="18" y="38" width="1" height="16" fill={colors.jacket.shadow} opacity="0.5" />
            <rect x="18" y="54" width="4" height="4" fill={colors.skin.base} />
            <rect x="18" y="54" width="1" height="4" fill={colors.skin.shadow} opacity="0.5" />

            {/* Right Arm (Pointing with detail) */}
            <g transform="translate(42, 38)">
                {/* Arm raised and pointing right */}
                <rect x="0" y="0" width="4" height="8" fill={colors.jacket.base} transform="rotate(-80 2 0)" />
                <rect x="6" y="-2" width="10" height="4" fill={colors.jacket.base} />
                <rect x="6" y="1" width="10" height="1" fill={colors.jacket.shadow} opacity="0.4" />
                {/* Hand */}
                <rect x="16" y="-2" width="4" height="4" fill={colors.skin.base} />
                <rect x="16" y="1" width="4" height="1" fill={colors.skin.shadow} opacity="0.4" />
                {/* Finger */}
                <rect x="20" y="-1" width="3" height="2" fill={colors.skin.base} />
                <rect x="20" y="0" width="3" height="1" fill={colors.skin.shadow} opacity="0.4" />
            </g>
        </g>
    );

    const ArmsSwinging = () => (
        <g>
            <g>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="-20 20 38; 20 20 38; -20 20 38"
                    dur="0.6s"
                    repeatCount="indefinite"
                />
                <rect x="18" y="38" width="4" height="16" fill={colors.jacket.base} />
                <rect x="18" y="38" width="1" height="16" fill={colors.jacket.shadow} opacity="0.5" />
                <rect x="18" y="54" width="4" height="4" fill={colors.skin.base} />
            </g>
            <g>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="20 44 38; -20 44 38; 20 44 38"
                    dur="0.6s"
                    repeatCount="indefinite"
                />
                <rect x="42" y="38" width="4" height="16" fill={colors.jacket.base} />
                <rect x="45" y="38" width="1" height="16" fill={colors.jacket.shadow} opacity="0.5" />
                <rect x="42" y="54" width="4" height="4" fill={colors.skin.base} />
            </g>
        </g>
    );

    const SpeechBubble = ({ text }) => (
        <div className="absolute top-2 left-[82%] z-10">
            <div className="relative bg-slate-900/90 text-slate-100 px-3 py-2.5 rounded-xl border border-cyan-500/60 shadow-[0_6px_20px_rgba(0,0,0,0.35)] font-mono text-[9px] leading-snug flex items-center gap-2 min-w-[120px] max-w-[160px]">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                {text}
                <div
                    className="absolute top-1/2 -translate-y-1/2 -left-3"
                    style={{
                        width: 0,
                        height: 0,
                        borderTop: '6px solid transparent',
                        borderBottom: '6px solid transparent',
                        borderRight: '6px solid rgba(15,23,42,0.95)'
                    }}
                ></div>
            </div>
        </div>
    );

    const renderAvatarBody = () => {
        if (state === 'waving') {
            return (<><HeadFront /><DetailedTorso /><ArmsWaving /><LegsStanding /></>);
        }
        if (state === 'walking') {
            return (<><HeadFront /><DetailedTorso /><ArmsSwinging /><LegsWalkingFront /></>);
        }
        if (state === 'pointing') {
             return (<><HeadFront /><DetailedTorso /><ArmsPointing /><LegsStanding /></>);
        }
        if (state === 'idle') {
            return (<>
                <HeadFront /><DetailedTorso />
                <rect x="18" y="38" width="4" height="16" fill={colors.jacket.base} />
                <rect x="18" y="38" width="1" height="16" fill={colors.jacket.shadow} opacity="0.5" />
                <rect x="18" y="54" width="4" height="4" fill={colors.skin.base} />
                <rect x="18" y="54" width="1" height="4" fill={colors.skin.shadow} opacity="0.5" />
                <rect x="42" y="38" width="4" height="16" fill={colors.jacket.base} />
                <rect x="45" y="38" width="1" height="16" fill={colors.jacket.shadow} opacity="0.5" />
                <rect x="42" y="54" width="4" height="4" fill={colors.skin.base} />
                <rect x="45" y="54" width="1" height="4" fill={colors.skin.shadow} opacity="0.5" />
                <LegsStanding />
            </>);
        }
        if (state === 'working') {
            return (<>
                <HeadFront />
                <rect x="22" y="36" width="20" height="16" fill={colors.jacket.base} />
                <rect x="30" y="36" width="4" height="16" fill={colors.shirt.base} />
                <rect x="22" y="52" width="20" height="6" fill={colors.pants.base} />
                
                {/* MacBook */}
                <rect x="18" y="51" width="28" height="4" fill={colors.macbook.case} />
                <rect x="18" y="55" width="28" height="1" fill={colors.macbook.caseShadow} />
                <rect x="20" y="36" width="24" height="15" fill={colors.macbook.bezel} rx="1" />
                <rect x="21" y="37" width="22" height="13" fill={colors.macbook.screen} />
                <rect x="31" y="41" width="2" height="2" fill={colors.macbook.logo} opacity="0.95" />
                <rect x="31" y="40" width="1" height="1" fill={colors.macbook.logo} opacity="0.95" />
                <rect x="20" y="51" width="24" height="2" fill={colors.macbook.keyboard} />
                <rect x="28" y="53" width="8" height="1" fill={colors.macbook.trackpad} />

                {/* Hands typing */}
                <rect x="16" y="44" width="4" height="8" fill={colors.jacket.base} transform="rotate(10 18 48)" />
                <rect x="44" y="44" width="4" height="8" fill={colors.jacket.base} transform="rotate(-10 46 48)" />
                <rect x="19" y="50" width="4" height="3" fill={colors.skin.base} />
                <rect x="41" y="50" width="4" height="3" fill={colors.skin.base} />
            </>);
        }
        return <HeadFront />;
    };

    return (
        <div className="relative inline-block">
            {dialogue && <SpeechBubble text={dialogue} />}
            <svg width="64" height="80" viewBox="0 0 64 80" fill="none" className="drop-shadow-2xl">
                {renderAvatarBody()}
            </svg>
        </div>
    );
};

export default PixelAvatar;