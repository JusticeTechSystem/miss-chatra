// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3pIgBMGX0YcNo5Qqwf+T4xh8LLqiAl1ZNJSIxoVob+kyq5+OIJ0RlGVXeCovXeupznZHXsLhtKRA6R/XdtdP+zdbDvoVYb9PjMCa0kAEd81ekm2u8RqBUFiv1MkFy+9PYmpUhIEaoL9Nrsda9dKjqzKaaKu/Aw4fpKKsyPiS3KLwl93FdLGVLJu3ihGG4vmuAvFisj6VbhEoEtsU2IVv0pDx0jZBn5nZg3F5VNbai0ikWwVpSaJXerctey6SnKSJRdwpPvNTJ7qvQgVnDhHBBWpwpcI/ECow6/KFvNtfX173lAHpxq+SJbEk9nALKADvc9Ji5WVhj0eKB8RkTFelPFlhe+q89Qb+W7Dj0p95fxxNDUhNuKIwUqpWneIi5D+XgzzPYcyQejP263MkTzynXOVWaLVxW//ViZYMw77ignUTdHYYGelJ6o5bLYp+NKmWzkCnqV5Kh+cIMggxDbk+Xb3mtCFTBgpBXPCL5NDyOE3pjgh0XRmpC+EBJRuKob+66r/H614ZAaEsMsU0WSo5Ns4r9+bwDL7etbl1BsjNfaoxN3bQyDOIJuNZWWlFqlKPpS9dAd3HkKsVJbEPD5VCjnRdBLVTs8zqEjU1MSXT1A099z8GW64cpva/cxe0/7Buqv9OEm/bevmAJaiWxZancPFT5gZsHkEmFUOw3cxPrrRQfizHHQJrbn4ehEedNXM8ITYkTcZ6Dc3FWMjnC7iyvStJTmvGPoirLGobUdA2eu/LMAZjw/teLztqv0QtUejd+o3OnjBVNQcTkQCZgLh0DW7h9dmPPSRcbIxJnjIjc6Uu5A2GLzpARWAhETWkKhovPI9tJ9QE/ZEWatEbakuBGbGtg0GcHV7GrwneiAYgdc0QZpa7wkRX/CZxYMoxwdL5Rz9SAPv6CVVO3z2/fFy568gSaTVf/fjHGOA+rpXZAjhZgJa0tkcRcnYKrWrAxP2pNjXBC9KT5YBSGJjfKsg5QFwSQEv3d0FLIUl7vu05XUcgRNbP0pTQCLSTS61qVBW8CZ94+kS3iKouJCe7Hh2ii6dtnmzwasoBVhe+bbCVn8FpBKkwxKm3rZ8Qma+y4PzsgsruKT0z7m4tdMcPknkB2L4V1i/QtA/j06sRMNv+sFKndkv64cMc9oolC4I3vq8jmv3mYVUw5SThWbE7dZ9p8KbzBOMMf58dxUgQnvDilA0hxDDWhxKK7ynGVh1hpCqr0pPHnLsPA1Z+vw4tb9GfxLQ27YnwW+aYcffNlUuolR80wbHQvXFKJyXge4AHGD1YhfqBF/wim62qUDp44xwkrnhp3TIqnQ2JdC0aKIte+Foo8O3CXj4zCMUVD+Hg5JvBKU1LtbQv+FGL6Ezfy81Mqt3Gz6j1rT5VnUnZvzdlfT4USDDvAgaoDQ==';
  const _INTEGRITY_HASH = '4b90fcc4eb4a7472200d3b6c3288cc244b5b2f1c5c310ea0ad66703288ad7955';
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
