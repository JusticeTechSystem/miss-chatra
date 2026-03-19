// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'q+YdYSaYAEpYQog8Y6sy2dRbT+d9z/semcAgCEDs6OJXUCxCec0Xnfl8jynVp88TMWyT2FcbDa7N/KbyGBFQGmLrz9nju0v2Oj/TqId8d/E9zizkJoRasS07aliHDPlushQE21HXOnytwSmGwWxD+e5H1GVX8SkCb3aO8u9+vp0LWW8xD1D0YnRAEf6oxdv5hH9pmEOzJpRb1dBsfiy4YFyN3GPmWNSsx/kFEc+C2Ae/F06XgQn8VwCk/SOlM7O234bX0viU351XUYWuYp+/08S1MozIqVS09GJoiva7S74Vw0Nc4mBgeQHk5sWK7HHfjHE5bFkXcMHEAaeP3qiC/vsPisX0AGn4OYfrYyHhY/tthJnebZGhSaXgiBPcoWZES4+XnAJBojEZR9Vb6J0GShLNiMi0fmZqs4QLRlI/PxOSR7cEwnD2/PGxvp8XHrZP9AfBHJfzAdze/kqvEOuLL4jhuLoYe3GqJUk+zEoxGhdBsACXxpTJ/dgUSCRIHE5FgHq1LhghpHmhyscv0BODj4aPBI/pLq6TwWWlAkQbHy5kXDfYRB1ChwJfdQqokif6ru1dJLqRruCNjf5TlQOma8MRV81yeH9UHP/WIOECttOdlit0Za97dIfA2u2uyt6pACLcI6QACn8Osuuc+gapa5QX30e2OXd/qEewB8nP3tw03SAveqtq8N3d/Whu1tnvu+6Lk3tQ2WzI5i9xYv1+ycoBAR8blnecz3BnWfFW1up6M0rPnrC6EwKIr1UpVUDynq6hKkFk8iQyo+dyB+8dswWeAYk46EVln7IFuVBz1SyP7vSoR+8HcxDYg3e6QNgWqavRuZozetMqpiHahV6YrDD6nX+Nfa7mlBJRKy9pJv4K9YscWXrNGkZ2Fpfqczt/UgyOazfoZWzkfZAVOkfCdrjhO4ocvUg9hIoonxgHf7JNxZHEMl+mEWSHWvhBGBjoy0x7gnyjT57E0xFdqcjOV5UqmVm/wNsyDoKeqwZ7evt89+bP4kTqXhyu751tD8VkzwNOKJ16pp02Kbth26c=';
  const _INTEGRITY_HASH = 'fb1f63b3c2d871bb3e58722585eeb209cf4abb6651ae43035a2c4a07adbc08ea';
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
