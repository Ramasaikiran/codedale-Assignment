

export const Footer = () => {
    return (
        <footer className="bg-neutral-100 py-12 border-t border-neutral-200">
            <div className="container mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-neutral-800 rounded-md flex items-center justify-center text-white font-bold text-sm">
                        C
                    </div>
                    <span className="font-bold text-lg tracking-tight text-neutral-800">CodeDale</span>
                </div>
                <p className="text-neutral-500 text-sm">
                    © {new Date().getFullYear()} CodeDale. All rights reserved.
                </p>
                <div className="flex justify-center gap-6 mt-6">
                    <a href="#" className="text-neutral-500 hover:text-neutral-800 text-sm transition-colors">Privacy Policy</a>
                    <a href="#" className="text-neutral-500 hover:text-neutral-800 text-sm transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};
