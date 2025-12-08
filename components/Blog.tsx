import React from 'react';
import { Section } from './Section';
import { BLOG_POSTS, PERSONAL_INFO } from '../constants';
import { Globe, ArrowRight, Rss } from 'lucide-react';

export const Blog: React.FC = () => {
    return (
        <Section id="blog" title="Microbial Chronicles" subtitle="Scientific Blogging">
            <div className="text-center mb-10">
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    "Where the microscopic world gets the mega-story treatment." <br />
                    Explore stories from gut health and gene editing to pandemics and probiotics.
                </p>
                <a
                    href={PERSONAL_INFO.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-scientific-accent text-scientific-primary rounded-full font-bold shadow-md hover:bg-yellow-400 transition-all hover:-translate-y-1"
                >
                    <Rss size={18} />
                    Visit Full Blog
                </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {BLOG_POSTS.map((post, index) => (
                    <article
                        key={index}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all group h-full flex flex-col"
                    >
                        <div className="p-6 flex flex-col h-full">
                            <div className="flex items-center gap-2 text-xs text-scientific-secondary font-bold uppercase tracking-wider mb-3">
                                <Globe size={14} />
                                {post.date}
                            </div>

                            <h3 className="text-xl font-bold text-scientific-primary mb-3 line-clamp-2 group-hover:text-scientific-secondary transition-colors">
                                <a href={post.url} target="_blank" rel="noopener noreferrer">
                                    {post.title}
                                </a>
                            </h3>

                            <p className="text-gray-600 text-sm mb-6 flex-grow">
                                {post.description}
                            </p>

                            <a
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-scientific-primary font-semibold text-sm group-hover:gap-2 transition-all mt-auto"
                            >
                                Read Article <ArrowRight size={14} />
                            </a>
                        </div>

                        <div className="h-1 w-full bg-gradient-to-r from-scientific-primary to-scientific-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </article>
                ))}
            </div>
        </Section>
    );
};
