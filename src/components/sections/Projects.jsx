import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    return (
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Google Docs Clone</h3>
                            <p className="text-grey-400 mb-4">
                                A simple project is made to emulate a typical word processor, with multi-user editing in mind.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "Typescript", "Firebase"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/brndncho/google_docs_clone" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project ➜
                                </a>
                            </div>
                        </div>
                        
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Your Wishlist</h3>
                            <p className="text-grey-400 mb-4">
                                Web application that allows users to add, edit, and delete items to their wishlist.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "Express", "PostgreSQL"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/brndncho/your-wishlist" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project ➜
                                </a>
                            </div>
                        </div>
                        
                        {/* uncomment after adding more projects
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                            <p className="text-grey-400 mb-4">
                                A cloud platform that allows users to store and share files.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "Docker"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project ➜
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                            <p className="text-grey-400 mb-4">
                                A cloud platform that allows users to store and share files.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "Docker"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project ➜
                                </a>
                            </div>
                        </div>
                        */}

                    </div>
                </div>
            </RevealOnScroll>    
        </section>
    );
}