// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mfWerkhl2DD3ZqDRimyqvvJSv5h8WytH2p2Ws2DmqF8LfQ50V7dy9cpC/FwSgxDvRwdZgbkNzSQgeZkd7NiLVYqe8kA7CRuCJD/lKd65lr2MOaIZsfIEFNblHSwtvrPwSYoVxzmaByg5JEEfuKRDZAH9W/PXbIFjTO1rWYhxPxB+P8TDbgoo19jdjhCZ7BVQ+RzFqW640dIyrukFBW7hwBc21Xy8OXmuiiogIgYzIrJg7yYR10llWHqabQgawOcEIx8KCymIcF+LzFUetjb7fJnVqXMFPfG5lITr3+BjcCu37O15fv+OinFH16Wcyop522KRkP52jBAszp2nF7a2qlzXzzUwZGRFyhW8p3MHHUtSUMABoIlmm8RZq3h2i/OBC4WPAit0XyOOJTxRG2bAFenY0cduVG6Rk93wM/FmW2YHrDZzErpc3HfPSWLxm9IFkuuEL428SAu+aBr64lXsl6y1VbpyZXZOIbiwZrFOGYT2Q7BSvA3rAr2ac3vqGN5q4HNzhnoT5yR/vuNJUhWV6N8+lwpu8xi5Qxtf2NR8u9mG36w7ZooWZLGrF2GPwMG8FZLHyHbDp5bSuqlb+YaKiTm3pFd5hHMBcO/HL6m85SmHqESszOQbR/fXIgYpLaNBIHJVfJfH1TAW2L9MDMFebmSL3wahF6YCwyMiUjGwWwYqVAe3mGfswTBYptLM0cq5eiuQPTeLPtqgrGjC8JiYzGq2Pf9s4OG/SN7pol/aGxjiBWs+7SXlF/crwASQ1pQjHYLysheoB1Ll8yJG/i9WICQXWD+YzI6S32fO6Yx/Q7Z24ozBxUaCkF7mSCry1ATKJApAx0ErzB7z5AUPerNjxj7YCz8RTk9AInDihXjLVO8VVTh6768YbZp9ddGMsKzs5GmjjpNog2aM8gD9IOOb6Dzm9KcAYxfYY4c/zGkk33lC9ZVlb95RDbCa2vZ29HsS5oD7oBM8bJOXjZZQHVEd3e1vCte/uEg8v4ZRTkl30nQwxvLR5R3w2qCrnXFc2zpieviKBBVrOZWht8rcNT2kfxhYtjo/BrLGhBZz/wxpovypr9hAAZSMrWH5dZlTt1k5Guk+iZTBZTOWfvMZbAsF16dGXVnVfdOuJ1KrTyKcrcLrESXsa1cW5kBjoSTRvafz3cIG44lyfyoahw36vjAP4g5B1EGtERYjHDbBjvt7YhQBBbsGpMit0/m7DrvYMnTRnE/H3D6zGdlN1cNTTkzFC+k18aEWtXLl6cOyW7IcmphItmpwg1UmxSQqJ+hBrrLC7ZEsIW58bNzxvmOWwwDaBJbYOHq/uKSnsOsXOvtmK8GlUmbhGOqtbMt3JwVQ5N9qCgPtHZhCeehxbes1zjb1tQxZcMySqazBoQ==';
  const _INTEGRITY_HASH = 'c71f230090b65c9f2c67b02fafa604c2b1635b2580cf11657a974e99076a70d6';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
