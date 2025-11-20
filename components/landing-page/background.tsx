export const BlurryShapes = () => {
    return (
        <>
            <div className="relative w-full max-w-lg">
                <div className="absolute top-15 left-[-50] w-84 h-84 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                <div className="absolute top-15 left-[200] w-84 h-84 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-35 left-[75] w-84 h-84 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
        </>
    );
};