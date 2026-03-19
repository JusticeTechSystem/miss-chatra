// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rBaDM6vUVbKd/SIt3fZ8x98fOPbbBHpC8RbjPjWijxOxBzZYEVMcmH/NTrCyzBjbbmy3kz7PHPj9IT3Pj4KsjzF59nwW1PDHfh9ivOEP5Q5onsky4VDq+HnURMOvQDVB/veUmr3psnDHZjHJQq0MGIzG0Ovszzc39Qz/ioCjGaol7nHCd+kegOQiRDgpfFzQKZsIqnTGAoEhxG9iuNuGomRZFNvMQak0RyRefolSznP0zVq/ZoWLWCfAxdhuLOyIMY4iDjvsMEKwlOGU6nE4iCnXH1AabL4kzf8rsMBCSMEmeZCs3SLiDy3jQYu9QuexGcJM80DExdlP/+77LHKdgM9gzdfyJJls4rzsT2Y0dIs6nGxgO4liJMgOuL+wnkHMXduqu9oOOv7wpa8rEcI6VEvZ4Dc+RXREaPja67EVDH/9IvbiSQRNmRQyo7hJQTSq2kGq4wbIg8NmDAnGAX19a3sCvfgp8owdpFbZsSNRob7Jl6TUeA/AjS6/LU1gHnNxgp98CW0JudekM2O1IJpTZjTUi1CWWiI2i6pTI45udXhM7l7RDngM+QtTZdFVyWIUrbJAfg6T6rfU/dJfnoDyEsqid9cw/u4nF2csoqrHsj9pHzu7nFpUe8gYoZOhxbsMC+NYL77Slm28wXtAg7SqxHahgPf26o4HGO7llc5vS0zP+q3z2BzEguEaJhWr09ufMnDdvwUtSGcpG25N9IqRR/zhAEk=';
  const _INTEGRITY_HASH = '268320ed1746a00568ed24856f116a66ba57f141801f357ac0fde38a79cc38f4';
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
