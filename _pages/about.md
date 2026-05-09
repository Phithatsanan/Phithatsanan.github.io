---
permalink: /
title: "About"
author_profile: true
---

<section class="pa-hero pa-reveal">
  <h1>
    <span class="pa-typewriter" data-text="Hi, I'm Phithatsanan."></span>
  </h1>
  <p>
    Application Analyst &amp; Admin Support at <strong>Chanwanich</strong> &mdash;
    KMUTT alumnus interested in AI, robotics, and cybersecurity.
  </p>

  <svg class="pa-svg" viewBox="0 0 200 200" aria-hidden="true">
    <defs>
      <linearGradient id="paGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"  stop-color="#6366f1"/>
        <stop offset="50%" stop-color="#06b6d4"/>
        <stop offset="100%" stop-color="#ec4899"/>
      </linearGradient>
    </defs>

    <g class="pa-orbit">
      <circle cx="100" cy="100" r="78" fill="none"
              stroke="url(#paGrad)" stroke-width="1.2"
              stroke-dasharray="3 6" opacity="0.55"/>
      <circle cx="178" cy="100" r="4" fill="#6366f1"/>
    </g>

    <g class="pa-orbit pa-orbit--reverse">
      <circle cx="100" cy="100" r="56" fill="none"
              stroke="url(#paGrad)" stroke-width="1.2"
              stroke-dasharray="2 5" opacity="0.45"/>
      <circle cx="44" cy="100" r="3" fill="#06b6d4"/>
    </g>

    <g class="pa-pulse">
      <circle cx="100" cy="100" r="22" fill="url(#paGrad)" opacity="0.85"/>
    </g>
  </svg>
</section>

<section class="pa-reveal" data-pa-delay="1">
  <h2>What I work on</h2>
  <ul>
    <li>🛠️ Supporting and analysing line-of-business applications at Chanwanich</li>
    <li>🧩 Translating user problems into clear requirements and fixes</li>
    <li>🤖 Side-learning in AI, automation, and security topics</li>
  </ul>
</section>

<section class="pa-reveal" data-pa-delay="2">
  <h2>Tech I use</h2>
  <p class="pa-tech">
    <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python"/>
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript"/>
    <img src="https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
    <img src="https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
    <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white" alt="SQL"/>
  </p>
</section>

<section class="pa-reveal" data-pa-delay="3">
  <h2>Programmatic intro reel</h2>
  <p>
    Rendered from code with <a href="https://www.remotion.dev/">Remotion</a>
    (React + TypeScript) on every push via GitHub Actions &mdash; source lives
    in <code>videos/remotion/</code>.
  </p>

  {% assign remotion_video = site.static_files | where: "path", "/assets/videos/intro-remotion.mp4" | first %}
  {% if remotion_video %}
  <div class="pa-video-wrap">
    <div class="pa-video">
      <video autoplay muted loop playsinline preload="metadata"
             poster="{{ '/assets/videos/intro-remotion.jpg' | relative_url }}">
        <source src="{{ '/assets/videos/intro-remotion.mp4' | relative_url }}" type="video/mp4"/>
      </video>
    </div>
    <div class="pa-video-meta">
      <span>Remotion &middot; React video-as-code</span>
      <code>videos/remotion/src/Intro.tsx</code>
    </div>
  </div>
  {% else %}
  <p><em>The intro reel will appear here once the
    <code>render-intro-videos</code> workflow has rendered it.</em></p>
  {% endif %}
</section>

<section class="pa-reveal" data-pa-delay="4">
  <h2>Whiteboard intro (Manim)</h2>
  <p>
    A second clip rendered with <a href="https://www.manim.community/">Manim</a>
    (Python). Source in <code>videos/manim/intro.py</code>.
  </p>

  {% assign manim_video = site.static_files | where: "path", "/assets/videos/intro-manim.mp4" | first %}
  {% if manim_video %}
  <div class="pa-video-wrap">
    <div class="pa-video">
      <video autoplay muted loop playsinline preload="metadata"
             poster="{{ '/assets/videos/intro-manim.jpg' | relative_url }}">
        <source src="{{ '/assets/videos/intro-manim.mp4' | relative_url }}" type="video/mp4"/>
      </video>
    </div>
    <div class="pa-video-meta">
      <span>Manim &middot; Python motion graphics</span>
      <code>videos/manim/intro.py</code>
    </div>
  </div>
  {% else %}
  <p><em>The Manim clip will appear here once the
    <code>render-intro-videos</code> workflow has rendered it.</em></p>
  {% endif %}
</section>

<section class="pa-reveal" data-pa-delay="5">
  <h2>Get in touch</h2>
  <p>
    Fastest way to reach me is by email &mdash; GitHub, ORCID, and Google
    Scholar are linked in the sidebar.
  </p>
  <ul>
    <li>✉️ <a href="mailto:Phithatsanan@outlook.com">Phithatsanan@outlook.com</a></li>
    <li>💻 <a href="https://github.com/Phithatsanan">github.com/Phithatsanan</a></li>
  </ul>
  <p>Thanks for stopping by. 🙌</p>
</section>
