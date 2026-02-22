import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookMarked } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
}

export function StarredRepos() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStarredRepos = async () => {
            try {
                setLoading(true);
                // Check session storage first
                const cachedRepos = sessionStorage.getItem('starred_repos_necookie');
                if (cachedRepos) {
                    setRepos(JSON.parse(cachedRepos));
                    setLoading(false);
                    return;
                }

                const token = import.meta.env.VITE_GITHUB_TOKEN;
                const headers: HeadersInit = {
                    Accept: 'application/vnd.github.v3+json',
                };

                if (token) {
                    headers.Authorization = `token ${token}`;
                }

                const response = await fetch(
                    'https://api.github.com/users/Necookie/starred?sort=created&direction=desc',
                    { headers }
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }

                const data: Repo[] = await response.json();
                const topRepos = data.slice(0, 6);

                // Cache the results
                sessionStorage.setItem('starred_repos_necookie', JSON.stringify(topRepos));
                setRepos(topRepos);
            } catch (err: any) {
                setError(err.message || 'An error occurred while fetching repos');
            } finally {
                setLoading(false);
            }
        };

        fetchStarredRepos();
    }, []);

    if (error) {
        return (
            <section className="py-24 border-t border-card">
                <div className="flex items-center gap-4 mb-16">
                    <span className="font-mono text-muted text-xl">04.</span>
                    <h2 className="text-3xl font-bold text-main flex items-center gap-3">
                        Developer Radar <Star className="w-6 h-6 text-accent" />
                    </h2>
                </div>
                <div className="p-6 rounded border border-red-500/50 bg-red-500/10 text-red-500">
                    <p className="font-mono">Error fetching GitHub data: {error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 border-t border-card">
            <FadeIn>
                <div className="flex items-center gap-4 mb-16">
                    <span className="font-mono text-muted text-xl">04.</span>
                    <h2 className="text-3xl font-bold text-main flex items-center gap-3">
                        Developer Radar <Star className="w-6 h-6 text-accent" />
                    </h2>
                </div>
            </FadeIn>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {loading ? (
                    // Skeleton loader
                    Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="p-6 rounded-xl border border-base bg-card/50 animate-pulse h-48" />
                    ))
                ) : (
                    repos.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-6 rounded-xl border border-card bg-card/20 hover:bg-card hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <BookMarked className="w-5 h-5 text-accent" />
                                <div className="flex items-center gap-3 text-xs font-mono text-muted">
                                    {repo.language && (
                                        <span className="flex items-center gap-1">
                                            <span className="w-2 h-2 rounded-full bg-accent/80" />
                                            {repo.language}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-main mb-2 group-hover:text-accent transition-colors line-clamp-1">
                                {repo.name}
                            </h3>

                            <p className="text-sm text-muted mb-6 flex-grow line-clamp-3">
                                {repo.description || 'No description provided.'}
                            </p>

                            <div className="flex items-center gap-4 text-xs font-mono text-muted mt-auto">
                                <span className="flex items-center gap-1 group-hover:text-main transition-colors">
                                    <Star className="w-4 h-4" /> {repo.stargazers_count}
                                </span>
                                <span className="flex items-center gap-1 group-hover:text-main transition-colors">
                                    <GitFork className="w-4 h-4" /> {repo.forks_count}
                                </span>
                            </div>
                        </a>
                    ))
                )}
            </motion.div>
        </section>
    );
}
