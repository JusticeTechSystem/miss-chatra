// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bPLWkgRj72Jr1QnKNzm3KVQ/93kefU0RWU5bK93bOeTyYT3Vbk3Bxp4fnx+kNoREPIljI/l7q2H67L/YiaMUAYkua9U3LD9ICwVl9ecCiHtHYSt8+dMU5cRc/FHXGWjLxzoWftrXfzp96fit/9k+mI7oIVrJ0MyaKCK8cKrn6r6OX8gpUhS9kSVnla2F67POw7c5NEjc3qLI96TJA/jZfulbM10+C5kz2mHY4Y/BvLZGWu8QA5WYbAPHS1/KGl61V325B9kQMkPHSr2TtDyiwQGuQxDYf62xTeZ/6FbY0M8ClxkLNSW0cnBexszQa84y0XRW1guR5gDlerJobLq3JX3PxjPsj70GG1cHP7OG07sb6iJ8QKKuYWrLavz8eO+JX1d1lK+MGqBjgzcQTRqYpIq3+96jBq7Hx7SDdJMeCxQdI9C5jJAK7JgQCG56ZzGsf78S0AEvtgEgCujwtLXgIKTC+alrpMRrvSI8Nz17ISdeaHlq2MpTBpRJzJY+cIL9ourAFpq2SYTmgfAXhuNh9bIraQaorg513fU7dbUH6qJhm/utMPHyh8dcYqb8rLBPe9kN4sVi7MyPkAbk1fPxXw9GnvH4iT2FrpdCpfHWtKeiBQWJLLtItK12xWq4iDLLpVD0t3DsXB2OLJ1kxylFYaeb7H/D99+c/Gtxq7igNuVgcT3gbbJ8bh1+YfQWacbh2icjHqU6oZklsbswHq9j5plNoKVzxD9bWY7/XTXNewGF4Z1wxZliSI5dFS2zmznjZH7mKeZjjNVuH6N4ofnH4aJhGHO+ujB7a6qhT0QKBqzyFSrcRfvurSHsVA6xfcMpyrY4JQf3zmpoYvdFyLTJ/ge9x45MfQHiobkLijF1wJru80DPxCpCNb3kbHOijrBFiE1ztDIZvtidBq/S07A/b7le6uEvIitLKQFDv9xxrymigAH/qQhGCi4q1oNQm4sFfPj+umJauECxdMHBGykhtmx122ZzUHFJX2Qn4IQPLg==';
  const _INTEGRITY_HASH = '2a9e1cdb9e85851fdaaae880f80d04b6bda571f382850f103d6824349cfe1247';
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
