// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/tIZZgEwlBm1OvbpidoJcDq3s1t3XQ1JYcWxVHjZGNnlwvEpOLm/NuLjipTIbBvWP6Uu7oy0JIhwf0l7/cqp6w/gh8JhOgDE5snBC33lOTwcC/AmJQzG72GcLz3zxkc0OUjwbPaLHkXzldjz5VOVoywUTRCn7oXMx2Gl/eN8VR2nHAsyyYj7CcgCYibhv7yIXUHhxWlOjihCUnMspeW4oCwwCoR3kdxInU4BnNLprtdrMKN+GAxD9d+nFN9yw5RJ4FWUKYWog7c3/o5AMUXbrzxr4b9pAXN8uUQm9ER41uYlqliA8dvP0MJJXDeSDG3f/SRkMQviDD0ESpZTbEdHU6lBlFnzCvHE2xtu80YPvAbxxxIyMRNyCGO7LfpMwecXgMlyiQkDWLNnaox6TcIk5SPw2IGuXrtQTkCYbvRPv5WwRWy+/iadyKVqkbyNYJapfiGYGneUvMisSlL4174AaWuYEG+Lug/w51WnZk93y8lajFSxdXrbw4nBzEnimTGq5fMidzF7+1lQeqBVCmNLXXE6WBt7LKDDanjFhoq2+YzoRw41S3v89UCMsJUFxcKouFOysMzJ6qI0mrIBE0s2mIJ6MS1cfN3rFGARnpKBwE4vMhVt9SD4WzoQmmDh9IwmPLLFPNf3GTiYYB3Q2mjOv5Wjtbo0e9ORmHVxQfKP4NleLQZpT6MSPQzAgv19an3vPkcry3808ExESOn0kQQAA2Mj2l0/k1FEV0AkhhPBcL6YJnjaNXYXxQNW';
  const _INTEGRITY_HASH = '9099e6a198afe40d56bcc9e45390bbe15e4cdb172f90bfcbf6384980e20b8744';
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
