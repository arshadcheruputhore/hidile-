import { Play } from "lucide-react";

// Watch Demo Button Component
export const WatchDemoButton = ({ onClick }) => {

    return (
        <button
            onClick={onClick}
            className={`inline-flex items-center justify-center rounded-xl border border-blue-500/50 bg-white/90 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 backdrop-blur-sm transition-colors max-lg:w-full focus:outline-none`}
        >
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full">
                <Play className="h-3.5 w-3.5" />
            </span>
            Watch Demo
        </button>
    );
};