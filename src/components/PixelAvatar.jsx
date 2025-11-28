import React, { useState, useEffect } from 'react';

const PixelAvatar = ({ state, dialogue }) => {
    const skin = "#8D5524";
    const skinShadow = "#6F431B";
    const hair = "#0F172A";
    const hairHighlight = "#1E293B";
    const glassesFrame = "#000000";
    const glassesLens = "#38BDF8";
    const jacket = "#334155";
    const jacketShadow = "#1E293B";
    const jacketHighlight = "#475569";
    const shirt = "#F8FAFC";
    const shirtShadow = "#CBD5E1";
    const pants = "#1E293B";
    const shoes = "#654321"; // Dark brown

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
            <rect x="29" y="34" width="6" height="4" fill={skinShadow} />
            <rect x="24" y="10" width="16" height="24" fill={skin} />
            <rect x="22" y="14" width="20" height="16" fill={skin} />
            <rect x="23" y="14" width="1" height="4" fill={skinShadow} />
            <rect x="26" y="20" width="2" height="2" fill="#3E2723" />
            <rect x="36" y="20" width="2" height="2" fill="#3E2723" />
            <rect x="31" y="24" width="2" height="1" fill={skinShadow} opacity="0.5" />
            <rect x="29" y="28" width="6" height="1" fill="#3E2723" />
            <rect x="28" y="27" width="1" height="1" fill="#3E2723" opacity="0.5" />
            <rect x="35" y="27" width="1" height="1" fill="#3E2723" opacity="0.5" />
            <rect x="22" y="8" width="20" height="6" fill={hair} />
            <rect x="24" y="8" width="8" height="2" fill={hairHighlight} />
            <rect x="20" y="10" width="4" height="8" fill={hair} />
            <rect x="40" y="10" width="4" height="8" fill={hair} />
            <rect x="26" y="6" width="4" height="2" fill={hair} />
            <rect x="34" y="6" width="4" height="2" fill={hair} />
            <rect x="23" y="18" width="18" height="2" fill={glassesFrame} />
            <rect x="23" y="18" width="6" height="5" fill={glassesLens} opacity="0.6" />
            <rect x="24" y="19" width="2" height="2" fill="white" opacity="0.4" />
            <rect x="35" y="18" width="6" height="5" fill={glassesLens} opacity="0.6" />
            <rect x="36" y="19" width="2" height="2" fill="white" opacity="0.4" />
            <rect x="23" y="18" width="1" height="5" fill={glassesFrame} />
            <rect x="29" y="18" width="1" height="5" fill={glassesFrame} />
            <rect x="34" y="18" width="1" height="5" fill={glassesFrame} />
            <rect x="40" y="18" width="1" height="5" fill={glassesFrame} />
            <rect x="30" y="19" width="4" height="1" fill={glassesFrame} />
        </g>
    );

    const LegsStanding = () => (
        <g>
            <rect x="24" y="56" width="6" height="14" fill={pants} />
            <rect x="34" y="56" width="6" height="14" fill={pants} />
            <rect x="22" y="70" width="10" height="5" fill={shoes} />
            <rect x="32" y="70" width="10" height="5" fill={shoes} />
        </g>
    );

    const LegsWalking = () => (
        <g>
            <rect x="24" y="56" width="6" height="14" fill={pants}>
                <animate attributeName="height" values="14;12;14" dur="0.4s" repeatCount="indefinite" />
            </rect>
            <rect x="22" y="70" width="10" height="5" fill={shoes}>
                <animate attributeName="y" values="70;68;70" dur="0.4s" repeatCount="indefinite" />
            </rect>
            <rect x="34" y="56" width="6" height="14" fill={pants}>
                <animate attributeName="height" values="12;14;12" dur="0.4s" repeatCount="indefinite" />
            </rect>
            <rect x="32" y="70" width="10" height="5" fill={shoes}>
                <animate attributeName="y" values="68;70;68" dur="0.4s" repeatCount="indefinite" />
            </rect>
        </g>
    );

    const ArmsWaving = () => (
        <g>
            {/* Left arm (static) */}
            <rect x="18" y="38" width="4" height="16" fill={jacket} />
            <rect x="18" y="54" width="4" height="4" fill={skin} />
            {/* Right arm (waving - starts at 180°, rotates clockwise to 270°) */}
            <g>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="180 44 38; 270 44 38; 180 44 38"
                    dur="1.2s"
                    repeatCount="indefinite"
                />
                <rect x="42" y="38" width="4" height="16" fill={jacket} />
                <rect x="42" y="54" width="4" height="4" fill={skin} />
            </g>
        </g>
    );

    const ArmsSwinging = () => (
        <g>
            <g>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="-10 20 38; 10 20 38; -10 20 38"
                    dur="0.4s"
                    repeatCount="indefinite"
                />
                <rect x="18" y="38" width="4" height="16" fill={jacket} />
                <rect x="18" y="54" width="4" height="4" fill={skin} />
            </g>
            <g>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="10 44 38; -10 44 38; 10 44 38"
                    dur="0.4s"
                    repeatCount="indefinite"
                />
                <rect x="42" y="38" width="4" height="16" fill={jacket} />
                <rect x="42" y="54" width="4" height="4" fill={skin} />
            </g>
        </g>
    );

    const SpeechBubble = ({ text }) => (
        <div className="absolute top-2 left-[82%]">
            <div className="relative bg-slate-900/90 text-slate-100 px-3 py-2.5 rounded-xl border border-cyan-500/60 shadow-[0_6px_20px_rgba(0,0,0,0.35)] font-mono text-[9px] leading-snug flex items-center gap-2 min-w-[120px] max-w-[160px]">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                {text}
                {/* Tail pointing from avatar to bubble (attached) */}
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
                <div
                    className="absolute top-1/2 -translate-y-1/2 -left-[0.55rem]"
                    style={{
                        width: 0,
                        height: 0,
                        borderTop: '5px solid transparent',
                        borderBottom: '5px solid transparent',
                        borderRight: '5px solid rgba(51,65,85,0.95)'
                    }}
                ></div>
            </div>
        </div>
    );

    const renderAvatarBody = () => {
        const commonBody = <>
            <rect x="22" y="36" width="20" height="20" fill={jacket} />
            <rect x="30" y="36" width="4" height="20" fill={shirt} />
            <rect x="30" y="36" width="1" height="20" fill={shirtShadow} />
            <rect x="22" y="36" width="2" height="20" fill={jacketHighlight} />
            <rect x="40" y="36" width="2" height="20" fill={jacketHighlight} />
            <rect x="23" y="48" width="4" height="1" fill={jacketShadow} />
            <rect x="37" y="48" width="4" height="1" fill={jacketShadow} />
        </>;

        if (state === 'waving') {
            return (<><HeadFront />{commonBody}<ArmsWaving /><LegsStanding /></>);
        }
        if (state === 'walking') {
            return (<><HeadFront />{commonBody}<ArmsSwinging /><LegsWalking /></>);
        }
        if (state === 'idle' && idleAction === 'none') {
            return (<>
                <HeadFront />{commonBody}
                <rect x="18" y="38" width="4" height="16" fill={jacket} />
                <rect x="18" y="54" width="4" height="4" fill={skin} />
                <rect x="42" y="38" width="4" height="16" fill={jacket} />
                <rect x="42" y="54" width="4" height="4" fill={skin} />
                <LegsStanding />
            </>);
        }
        if (state === 'working') {
            return (<>
                <HeadFront />
                <rect x="16" y="50" width="32" height="2" fill="#334155" />
                <rect x="22" y="36" width="20" height="16" fill={jacket} />
                <rect x="30" y="36" width="4" height="16" fill={shirt} />
                <rect x="22" y="52" width="20" height="6" fill={pants} />
                <rect x="20" y="36" width="24" height="14" fill="#1E293B" />
                <rect x="28" y="40" width="8" height="8" fill="#06B6D4" opacity="0.5" />
                <rect x="18" y="44" width="4" height="8" fill={jacket} />
                <rect x="42" y="44" width="4" height="8" fill={jacket} />
                <rect x="20" y="51" width="6" height="3" fill={skin} />
                <rect x="38" y="51" width="6" height="3" fill={skin} />
            </>);
        }
        if (state === 'reading') {
            return (<>
                <HeadFront />{commonBody}<LegsStanding />
                <rect x="24" y="48" width="16" height="12" fill="#F1F5F9" />
                <rect x="24" y="48" width="2" height="12" fill="#475569" />
                <rect x="38" y="48" width="2" height="12" fill="#475569" />
                <rect x="20" y="38" width="4" height="12" fill={jacket} />
                <rect x="40" y="38" width="4" height="12" fill={jacket} />
                <rect x="22" y="50" width="4" height="4" fill={skin} />
                <rect x="38" y="50" width="4" height="4" fill={skin} />
            </>);
        }
        return (<>
            <HeadFront />{commonBody}<LegsStanding />
            <rect x="18" y="38" width="4" height="14" fill={jacket} />
            <rect x="42" y="38" width="4" height="14" fill={jacket} />
            <rect x="26" y="46" width="12" height="8" fill="#F8FAFC" />
            <rect x="34" y="48" width="2" height="2" fill="#EF4444" />
            <rect x="24" y="48" width="4" height="4" fill={skin} />
            <rect x="36" y="48" width="4" height="4" fill={skin} />
        </>);
    };

    return (
        <div className="relative">
            {dialogue && <SpeechBubble text={dialogue} />}
            <svg width="64" height="80" viewBox="0 0 64 80" fill="none" className="drop-shadow-2xl">
                {renderAvatarBody()}
            </svg>
        </div>
    );
};

export default PixelAvatar;
