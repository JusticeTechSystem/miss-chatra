// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uOzzO+tNeiFnm6k9sWQtTyJyhP/vF3vHRG6aRX4YjNNdJ0gAyLTuFsPZVidsZt8L1FmNDzFT+bhtjS7AfBaJXXjszOqCFLatgQmelj+Z3GzUbQUdseSn8JyYR1gMsrl5RqMQge0vowCuNju5zDuyIyBiHjcPZJA9CquGHUCnbjTe1I7KoWlRJTH86v00tKhRImd4Ya+b40qbB7Gb/H9QqEhPC2IR4K0caqmzfPTPKZgFwnEyU23JXgFF7clNOqYfGfRI9Jrr8x667eLBwbBTzWzeSojPmspFCK5e06YOjj1o3emxQlvDWMCyjPU0XfpsVXU/sKboE/MsEZtS69YKYwK5X6pkteuxFydZJ1Ixk6Tpw8+Thwpl1esT8xripieuQRfWWwbAfqxPvViCMwePpxtGovh+/MiCSgML8BZr1QHk1fUFqGq3KXWSBjCr/VqvVlTeyqveU4imckUfUTMYE91x+6z9haOk02a59dLY8EmXnf0GLEWuPWMDSE2TTzvUPX5hBixT4qQjmIkBfrvcVcKR1ThO8T9Z+TnLQSg0w3KU0kkpZv4actPDd36smJlD0pWyV90LTd8Zg+hjYRpBHDp8mcu7An6+JsruDufcTQxU4JUXRl+vrwiycoyMOIKG9zEtv2sC9wPgXCh/MVVi+sLKsC0/inA22YSZo2hz9F3zBkE8JuiZ9D0DBVmQX1cLKqIhzb7HfjBIT92U+kC7Qhox3+WlCmx5oAPgqhTD3jrxh0CNfATosXYG9yqTEhfyJuthF/q2AG0AQxLLaAuFbwSrlnCKTXnrB7HUIv+JAAQ8z2k65swfirFCbzahnM1gXt64OciLdzzuuAxVbAXOSM3A9ddfy+4noSlHC6fVZU+eoX7N4EJeFcpS69zjmcWY2US4c+/Yun02eW7xQk0sK10gGytZGfvQ2ztj2IguNa/uA/xVUkogj2p75FUsoKQT65bGXmT9shkbJ8NRpWusRRc7ni9/hcUG2eoMy9QPitSTKn/X3cuH4jd4Kv0nKI0ocKV576Oc7oiEZ27VKUJ0GV9AmscjWtjpg2TSsliXnLMfwbo6vWQHSp2WID5xmjvcEWkBeqXE4s18In9VzgQxLoT75XFEOw31Pz1l5SFgdMl3M0p4g2msR8twMyz0mQdCon/ttjuokfqkpwTJYFtyT5Y/woEdLiEpjDtDafNFvYp9U/8ba9r9lfpoyKXzdpYt69a9y0/YTMDpt3keWIEWrQVhCjhHVhylUlY2LdZQDK9sd1vMFACqUDegu6QLs66119rGSu/5XQnghd+dAZ+rvyhr7jxAYZSGMlmXIxUl+gAh26L71JhIYONmGK9Y/avxKQ5RjboY+qCZipEBpbCTSebylTi0EbLgiIGExet4IQQq/DdPwDWyaSaYVqznH+or9W7y+iI3kZW3wOTzZKcS17TufxCftWZRLEQH0bNz+z+Tt/4mzKBLES8dp0NGzTqF6mvwTarAAkjROH8cOqdkkeAghw9rfeEv3wbeUi/LzYHlDzuP06qh0BEpXbB9U0vJk81k7zlI0QWa35dcQczddMPOp7bYRu/xV1l5IjtUtbV/kgv15TY8rn4YnkYpv6+141Pryxe27dZsDmJ7MFcH4F2SzB2tNypVQqgykAS3C/yMdNYBvY9KPQX3KPrXab1ivAyTVM9So041WSYsdh9ZB/OjtOtJXYSsOgbgK1MuzX6OORlPjOCRmYzn6PhGglk4VOSDRJYN6/yw9PP/Du1Olbfialua586SNEHcCiC/8c6O4GKmjC79cpSW8om63xhvdxcGvIPXDNMLg2EvtTLgx4PugzJ2BIm9VgmGh/z5CUh2nRqveFC3U/AkxWUM9wvR+XMR92cXdcykX317nOL67c7ZqI/tk2iHb19LRxzhUOvNC9lbBck3evnXPdIdion+gXrav5C0Z1CjgUfaxNlbjL2Lqk8L7PV9bi/7Fg==';
  const _INTEGRITY_HASH = '835edaec66269dc9c2dc83e9054a3d1ca7ffcfbebde4fd26bcf379be446a2775';
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
