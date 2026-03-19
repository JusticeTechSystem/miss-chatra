// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2Htd+0y2zGw15kmGSWRv/jMPSziqe3ICns9MnsCyLnnbVtVnzN4rbNwQH3wzG8VCLaQ3QS5OavoBkRPHLAumO2kDhc1wD+JMV8dx0xY9IRYD/S4dHs8QZ2xFPZ/XLiZwJkvYEql7lW0Bm0ekLVczONDCvUYvEoh70U7AYdwjDCxN4wpTXsGSCknz+0msXxNXfvrMt5aKSRygqrre7p9oPBgpuOhYlACAVEA4ddXeKMguOJcZVQPtqXNjvG5x08W5eNbnZ2Aktjnn94n/pgvdXShtetHhW4qIG68b0RvoVF1v7/D7yEvP5EVSZ9i+zcmryvo3WldqaRPTl1550g4iZZn/3rohhsCOEu4DXd7a3NrELHXSC6jyv4vlBkd3lqw+nDOB8XnvLmI/xwMRaqFJ4FOov36FWGlxEAyzI9InYQtcD2kjBUjsRIyzyIINrulFeISTwKdehDggnks66U4Ld6brnUEpsuVzeBYwki9KHiW3K8FxkHT6j4QE2ICpIp01oG00s9bF/zgosPluznpRvvOBb8vJ0wfxOgks16+5gHnEL+6UE/NeByPi4rWEb8gtPYB9J2ZqiSzibDrg9Lu+Eciz4eBbIPurwY4IIMBkIJj7WJFysjyyNpor/FwFzOZpDdWRnILc57dPtFgLdDnWuRImboYQVihN4yfRtE+1QpR82YMMzIOviVY71iXCqEZlu+oQ6bl01gr517MNQPbUKW0GUv+fz83Apnemzg7ZQbXAPq/6HM8oBiAGcaINUwbHoGc/PsNfluS3obH/zFeh102+UJh4TM6aiZiehuVBjV+9nEamGFrwCpMJxcNtdqwZ9GtOCxsx4VzTg6r9jSxvhx4IhGcxh9cGxoyVF7FcfXq/SydrTXi600OJCjG150Ogh3N8cuyE3t/Vzb0h2xfs7rfWE8wQ2sBJ1dmvfdFsK2Aj1aJiD8Yqh2VaJ/pz56khcXSe7/GSXs2Bp9UaFONS1wOrnSrJSdCXfwUxCVWiqE++38vxr/YFHg7qggbsxfIe5m4ZzDjzsE7+QduF1h32oHpcVM+lPYEm/QrkUuM5U0Qq9w==';
  const _INTEGRITY_HASH = '068a9503df7cb25c0c61a4b8bce9db5f7a5997fafb76578c4e86df176b357ef3';
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
