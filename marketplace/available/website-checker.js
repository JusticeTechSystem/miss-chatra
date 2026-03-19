// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9mSdTc+lvOSrp5zEiUbkqcVLYra0rpzEpxJfZ9Lnibl/AYpxeZynrlS9mBPnrfcNebroYNH1OstclSMMieUXzq785G8MwKzHj3eQvXW+sRKElVEBssPKLBeR6VSDpNKEwOx38Tm88Go0jHP4nCYB4wsCyPUv+JeuxEiCe77b4paxGBHhUBSPT0Nuc7EldaaqLJmkZ2nE3os6gJIHxVYpqbJtRMUPwQzKtF1NaR0vxMWdG2qRIXZwoJRWmx4ij5JARPJcJjyo6Qdva4DLUq2+pFdFzvexDACX2X+WtBx0wwWDDpKylw/7pJsysTMDaqmlcZpntVGRvAWaw7lMmusisWI2eka+3RukM9xNaWhbKMdOHrOEkYA/Ow7gh4rwPPXvqS7eH1/yaWpGBg3EiaKEeoXttEORYBM2Oqiu9V9Zzwqvb75NrnWS0hxHqOsgrWX5I+qDRCdP8nEL3bHg1XzPfcV41qL4ZRj4StfCXvgS4Q+qlW8pQvUA4PWcoK7OA4loIrU3HqNxZeXVWwxZDLQP3+2mGkMgaxgexNArJ0KD9x+OOak3Meb0mqurfVkq30xkriP2mDXnss9VH0rKq31kPvCA/T4QsnPzFbtlZisw9V81H4XPtbpunQ/wpwMw2ZmtHZmGN8STRqwGoYqcP48nM8fWNBe6g8120AQlINpRxyAT1+Afwep7mdhoMepl9EhotMOtQAu+tvLFoV1fXvI9cKUisrsqTJDIeOgMSqHFQDXfXsKFrDHqXSeAq7VFM5ybbHvylt1ABotxQNusZU0FC693e0+m3ofSR+bn0tP934czEcHWcJlyWM0a6pmD7+2BBqMcfDy10uimBdHfsAVsFjlQZnSrrwzVIIO0aSZCxDeS80nNVnzCxzcPR77GrMpw+5Nxqkb7qLOB+PdV8NxU0JOl8tNRPKMWJLPAs2/kbBPbt+Vxjk5NR/vqIWxMLTLM6i/IPs5AiF/eRzizVCM4kO3ANkLgJA1L1WNtsBzlDZxyOp5VW1ThWLaxt20wmKb/RfFKuIwdz70Hs16trGoUJi2zQciYT+nM4CgaGy9g+8JHKLrCZgER+ReVSgP/LdwWakPUwSUMqq0VCyjCHHhAjGe4MVlFKgdotNiNaxyPbvWvAKzKP/aGRUDHd5La1adaPbf5PmmcdGhRSdhHhLK0ceRh4i6oiGgwnYB+WeNrvjXJck8RMnt6uQBlP6ULMFbfcWlUMvEXZ4GESrPoyXcxCI0+/iVSErANyYZZF104Uuuf+F9cAEP9DY3fD0mI7qPqedK2etW4hWL+/qiYpKKXSKJ4Kle8COOnrNtl6INwsShXqjULzOpxlMPNPGv0ni76e2hH5eS4xZcuCWmn+hRPA8ET7UH2nQmffWVJOwfEbPycQT5VPJfRikEK04nplb7lEF96NjV7OMRjxAUx1cX904N+O9D+LzqNxXjM9tNxHrag83EAhiJ42KiV1sT1VA0GMxjBft+SmyQ7XWRwzjepWSzo2hLntX9dseyrXNCbf2TSMaUJZ49Q6vBkEyN7DBOjCymf51IG2a9/cN5bwfMgFXm/oX/SMrZWmVCnBCFFzowIToM7MVAs8vHeoL+a0dR3g1waPfOm+9QauH8t';
  const _INTEGRITY_HASH = '9f547ed220a063c79a354a8cba503a35cc60f90e514402b338d7703beddaf9e4';
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
