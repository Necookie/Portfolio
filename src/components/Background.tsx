

export function Background() {
    return (
        <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none overflow-hidden bg-[var(--bg-base)] transition-colors duration-300">
            {/* Glowing Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[var(--accent)] opacity-20 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--bg-card)] opacity-40 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '14s' }} />
            <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-[var(--accent)] opacity-10 blur-[90px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
}
