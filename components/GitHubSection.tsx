"use client";

import { useEffect, useState } from "react";

type GHUser = {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

type GHRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
};

export default function GitHubSection() {
  const [user, setUser] = useState<GHUser | null>(null);
  const [repos, setRepos] = useState<GHRepo[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadGitHubData() {
      const username = "tamil239";
      try {
        const [uRes, rRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
          )
        ]);

        if (!uRes.ok) throw new Error("GitHub user fetch failed");

        const uData = await uRes.json();
        const rData = rRes.ok ? await rRes.json() : [];

        setUser(uData);
        setRepos(rData);

        const langCount: Record<string, number> = {};
        rData.forEach((r: GHRepo) => {
          if (r.language) {
            langCount[r.language] = (langCount[r.language] || 0) + 1;
          }
        });
        const topLangs = Object.keys(langCount)
          .sort((a, b) => langCount[b] - langCount[a])
          .slice(0, 5);

        setLanguages(topLangs);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadGitHubData();
  }, []);

  return (
    <section id="github">
      <div className="wrap">
        <div className="eyebrow">OPEN SOURCE</div>
        <h2 className="section-title">GitHub Activity</h2>
        <p className="section-sub">
          Live statistics, top repositories, and contributions directly from my GitHub profile.
        </p>

        <div className="gh-card glass grad-border" id="ghCard">
          {loading ? (
            <p className="gh-loading">Loading live GitHub data...</p>
          ) : error || !user ? (
            <p className="gh-loading">
              Live GitHub data is unavailable right now — view my profile directly at{" "}
              <a
                href="https://github.com/tamil239"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", textDecoration: "underline" }}
              >
                github.com/tamil239
              </a>
              .
            </p>
          ) : (
            <>
              <div className="gh-top">
                <div className="gh-user">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="gh-avatar"
                    src={user.avatar_url}
                    alt={`${user.login} avatar`}
                  />
                  <div>
                    <h3>{user.name || user.login}</h3>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/{user.login}
                    </a>
                  </div>
                </div>

                <div className="chip-row">
                  {languages.length > 0 ? (
                    languages.map((l, i) => (
                      <span key={i} className="chip">
                        {l}
                      </span>
                    ))
                  ) : (
                    <span className="chip">Python &amp; Deep Learning</span>
                  )}
                </div>
              </div>

              <div className="gh-stats">
                <div className="gh-stat glass">
                  <b>{user.public_repos ?? "—"}</b>
                  <span>Repositories</span>
                </div>
                <div className="gh-stat glass">
                  <b>{user.followers ?? "—"}</b>
                  <span>Followers</span>
                </div>
                <div className="gh-stat glass">
                  <b>{user.following ?? "—"}</b>
                  <span>Following</span>
                </div>
                <div className="gh-stat glass">
                  <b>{repos.length}</b>
                  <span>Recent Repos</span>
                </div>
              </div>

              <div className="gh-repos">
                {repos.length > 0 ? (
                  repos.slice(0, 6).map((r) => (
                    <a
                      key={r.id}
                      href={r.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gh-repo glass grad-border"
                      data-cursor="hover"
                    >
                      <h4>{r.name}</h4>
                      <p>
                        {(
                          r.description || "No description provided."
                        ).slice(0, 90)}
                      </p>
                      <div className="meta">
                        <span>★ {r.stargazers_count}</span>
                        <span>{r.language || "Code"}</span>
                      </div>
                    </a>
                  ))
                ) : (
                  <p className="gh-loading">No public repositories found.</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
