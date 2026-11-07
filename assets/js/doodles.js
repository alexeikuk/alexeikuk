document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('main');
    if (!hero) return;

    const svgs = [
        `<svg viewBox="0 0 512 512"><path d="M 164 228 C 156 320 196 398 256 436 C 316 398 356 320 348 228" fill="none"/><path d="M 138 206 C 138 146 188 120 256 120 C 324 120 374 146 374 206 C 374 222 356 228 336 228 L 176 228 C 156 228 138 222 138 206 Z" fill="none"/><path d="M 256 120 Q 258 86 280 74" fill="none"/><path d="M 198 262 C 194 308 204 346 224 368" fill="none"/></svg>`,
        `<svg viewBox="0 0 512 512"><path d="M 256 68 C 256 68 372 222 372 324 C 372 390 320 444 256 444 C 192 444 140 390 140 324 C 140 222 256 68 256 68 Z" fill="none"/></svg>`,
        `<svg viewBox="0 0 512 512"><path d="M 264 64 C 244 138 308 176 332 232 C 362 298 338 386 286 426 C 242 456 176 436 152 380 C 128 324 156 250 198 208 C 186 246 206 270 222 266 C 204 202 224 116 264 64 Z" fill="none"/><path d="M 258 228 C 248 274 292 298 302 342 C 312 388 282 432 248 432 C 214 432 192 396 206 352 C 216 320 246 284 258 228 Z" fill="none"/></svg>`,
        `<svg viewBox="0 0 512 512"><path d="M 256 64 C 284 64 306 88 294 116 C 336 108 368 136 348 172 C 338 188 320 194 312 204 C 362 204 388 242 360 280 C 344 300 322 302 310 312 C 346 322 356 360 324 384 C 302 400 274 394 256 408 C 238 394 210 400 188 384 C 156 360 166 322 202 312 C 190 302 168 300 152 280 C 124 242 150 204 200 204 C 192 194 174 188 164 172 C 144 136 176 108 218 116 C 206 88 228 64 256 64 Z" fill="none"/><path d="M 256 112 L 256 408 Q 256 438 242 456" fill="none"/><path d="M 256 196 L 298 164 M 256 212 L 214 180 M 256 276 L 310 240 M 256 290 L 202 254 M 256 350 L 294 324" fill="none"/></svg>`,
        `<svg viewBox="0 0 512 512"><path d="M 256 72 L 256 440 M 96 164 L 416 348 M 96 348 L 416 164" fill="none"/><polygon points="256,196 308,226 308,286 256,316 204,286 204,226" fill="none"/><path d="M 224 106 L 256 138 L 288 106 M 224 406 L 256 374 L 288 406 M 114 202 L 156 198 L 146 156 M 366 356 L 356 314 L 398 310 M 146 356 L 156 314 L 114 310 M 398 202 L 356 198 L 366 156" fill="none"/></svg>`
    ];

    const colors = ['#059669', '#10b981', '#34d399', '#047857', '#0f766e'];
    const count = 35;
    const points = [];
    const maxAttempts = 1500;
    let attempts = 0;

    while (points.length < count && attempts < maxAttempts) {
        attempts++;
        const x = Math.random() * 94 + 3;
        const y = Math.random() * 88 + 6;

        if (x > 26 && x < 74 && y > 30 && y < 70) {
            continue;
        }

        const tooClose = points.some(p => {
            const dx = (p.x - x) * 1.5;
            const dy = p.y - y;
            return Math.sqrt(dx * dx + dy * dy) < 8.2;
        });

        if (!tooClose || attempts > 1000) {
            points.push({ x, y });
        }
    }

    const pool = [];
    while (pool.length < points.length) {
        pool.push(...[...svgs].sort(() => Math.random() - 0.5));
    }

    points.forEach((point, index) => {
        const doodle = document.createElement('div');
        doodle.className = 'hero-doodle';

        const isBig = Math.random() > 0.35;
        const size = isBig
            ? Math.floor(Math.random() * 20) + 46
            : Math.floor(Math.random() * 14) + 28;

        const rotate = Math.floor(Math.random() * 360);
        const color = colors[Math.floor(Math.random() * colors.length)];
        const opacity = (0.45 + Math.random() * 0.45).toFixed(2);

        doodle.innerHTML = pool[index];
        doodle.style.left = `${point.x}%`;
        doodle.style.top = `${point.y}%`;
        doodle.style.width = `${size}px`;
        doodle.style.height = `${size}px`;
        doodle.style.color = color;
        doodle.style.opacity = opacity;
        doodle.style.transform = `translate(-50%, -50%) rotate(${rotate}deg)`;

        hero.appendChild(doodle);
    });

    const copyBtn = document.getElementById('copy-email-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText('alexeikuklev1@gmail.com');
            const emailText = document.getElementById('email-text');
            const original = emailText.textContent;
            emailText.textContent = 'Скопировано';
            setTimeout(() => {
                emailText.textContent = original;
            }, 2000);
        });
    }
});
