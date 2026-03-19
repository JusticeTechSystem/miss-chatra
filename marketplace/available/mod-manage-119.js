// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tvTbtWEomhNL/MMPPgQq2fQlffpR6rORFhgpVGn3qBkiUWvf1PBodHJ1BTvLxKHcFwfu3w8ErnSL14CN7iGd0HkKmX6y0l4hFAG21RI607zAHHdXM6G6FJiYX9of4MqxNnp5ZvPifFjketMISkh04fyjYqTSJNbFwYpsGsjZCGtXvxV4W542LOEXJ2UvuIRcb6M0PBuWOM4UthRwdt6EUxY4nGbdWOoB3IQnPcAkBNeYpWSI5BP+GRsnzX16jBB+YQpAHwcN6aljQJ0GsT8dru6gen+uFzmTSv0qm3Dhj5aAJhUNVkMNKkzha2mGPXZ3R4JZya304U6G2CI99vqEn9cLNXG5QS/epJQ4znwKbiTe/lAHnFODQSxL7jU0Huu/5ahAGdqOUhhbT638T14iiASqZovwcMBFz/o80mkZD2uc0PiMUga5ONipt38oXx0QzLbWXfvWUVCKT+7t3LxiM5exECrm5KOpG702JroIP1KsxcsEpjT9fEQoGKFpFB/BJsqcp17AnfUm9FOB2l3iV7PlHc9FqDU3pAKSsQOLKa79SPUZPQJtN+MIS1TXULT8j+q5ZVAHR7Ra0YYdIbwuwl/+Dav0Yjc2MYIJE6vh/Cs2ZopQUSRXHYY3rkceFwcaVC3NueG4AGSxdI7LFH7Mze290vm+50GW5nrEw3uO6WrEddKVP/FzGHnVJ5flhJpQ9rq+WQB2aRZvcV1Q0qFYB8znrvPzGVfQDhkok2L+32grKL/d3KlGmh+8uOfNFsghu6NzGofNMXnLTesL8G4JGrSNl9Ws6rmhjVrfKet2Uez4E4Ea8cUNtizR8iMq+POrkXUatmWRbhj9Rb4+X4aF4YzVctcfwkHX9bbLLiPnotrDJ0Lm+oF0kSjxsmre5za6o1ua765Bu0maVbBAVPjjXUpSc6P8PxhJ8Vqk8gYrDaKAOlzINIk1uD2dz1b+g8Z8W2KON8LStkj5J7//t7fVf18gPMPl9WpxVMH2+f6j7tJ3O2nxcg/1Bzcm5kvhLOWg8TY3cohVC9QX1trOHejj2jpLBMUePvD3bc7weYG+WPPX4NclstGP+IHfrjs+KQmSSRBTyMUdWZR2OvJr3SaenoUE9H4rhlD4suxO0TLQeQQkcUtIiHlObQJwS7GgRqmaaBvTBO+dK11G50V3Ez0xRGdc1B+sMDEpliKUXJaw41c+CMEBKU1z/p+6Ghx9iDGFld3WVzBJvIxrzvYGgvS8F6KfU6KysFR6m2tny4UHm00khaE6dstbZxqvFrlQv21i6NpOqyv8Qw/0D/ZEEjTD+ojZlMt04kzGlzh8FdRagZdcMmvi8n+Sg/iay6uYu8SnA7S6Nsonhh6sSX19fC2lpyS2ofoWV52TUDzduyn9kxGJ4d4F5Jo4Hw==';
  const _INTEGRITY_HASH = 'c0c83731e35813623631c2a5aa2376aaa1dec566f39f9759faf950022837b758';
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
