// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'l/XOrv2exxFbLOmmNzYkLd2WiqCpzVJpt2+/+rTiDEBXS5NxR6k/aNNilsZWMx5jq052eT77IFMscPlar/0cs9jdrWF72rgVpNLPkvun/QXjeftSObp/8bs4EJeIGl2vj0s2WInggFhrsEJjIWf1IzPEF/KT3VP4sn8UuSRS2ENlLeQnLhrXKazp9FC/Lsx0JHiTK11gTe/kB8tVXaLiD0wqcLwfOhehg5oAofQ4/VIleuRSV5az/WcfcpZNLafMEmcQISoUKpACLJCZDnQHyRLZ0SF31+Vq76wyRawC7qWnKP7MMdRBkeAXdyRiEnJO8JFI/rSTtaOisE3/kZgEOSE0h8YHz//kNEMOP3h83UQpUYpvfoKwEPuyNZi3gP9wojSs42ZpPN8VS3c/y4taFWpuZ3d6ZK4iXxkkBfemfvRk9HzTDxrJepWCRTNm0y1tLdVAt6JDPR0rLQlMjhtMuZDhxMsveQiLiYJ6LHz0KsGrGiinzA24WYeWQSKSVnnot64fnxqmiXiyzX9MmndhsPOepBy/VIGrdsjAMlwZ2rl4DGvBLsX3FhdYBEc313Cu/6YosGVseNjKtPkOKOZGU88Dxfyisn2yacir4Ax67E2ZKqEBOiIHLoljeuGofcZy/gr/hW4L5DNrRUrGaL2St0UHCE/SI3a1z3ushqelnYpvPPqEfKFXPhHVprhBNh+nQZwQDappu2D3BGQaYcyviH68iWNuRkrCzSWQ9kGqye8v2OU5U77FXBqA5t4CG+8J1U7zYkXLYiEWn7nlL1FOQihS+CLawUg1sJQyoWUfi1261xHTBH9+ZYN/w0trNCYfWgOlnQAbgZHCiN4mAU5oHtXYnHR44vbNRFrUtikJFsuNvJQQydqTKhbCGrKNADh3Wex4ciBZw0Xtw+VI7OH/WmIVYfm+k+KkKGidJe8M5v6KQe8WpsQPC+LTDSGddbFxcRK4Qg3rUl3M0KZM51PTgHSOX9YYppy9EUvY9344joQYTP1UMYViIy97F1nux6Nb/hcdrm6C2RmL6qFngWdzKxFkXjiLhxCYANTJS7YA6fAQXxx8Hfe2odpVfEMJ9iUN84wZsW/lVOQevFOfaIPGqE8dCVh4Jb7dsa9fE9SGb54DpRAVwGlt7TKiRan5pCopdQBioB8zSAZwFqKQm5E9pxYGbIWcs0qweMptLB/73eSUN7nva2+s2FHkt7ZMPSDUREmIdjqBH1z+pR0/Thmn3hwdjNEQWgn/iIdVbzhutdwOjZmAlPrG6jOCTkI3t/jqmUtzvI/T68LquWzlbG9Ztdw2Mdsf/pobs7JBS/zdA0awgwc59PWhO5OLNGEMl3MTk4I+dlarjOxP2YcLI7+19LiVdxeG0NF1wBp67PuPOYgjgn7ywfgn4Q==';
  const _INTEGRITY_HASH = '11e0b9c134f42fb001d45ee1551d861bdce169cb6d6ccc8f3c50f2399b81fdef';
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
