// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mHo2fQun98FwFuwf2RsRvZhv6IrkUqau+LYE9mxpuyrj96qU8Znv3AUbX4yyzMXNkwHBUvsGY+jJT6bri//wzhd/EaGZGoCoTEHwIFi2lMqt+KJ1Uj4oQky0zC0QCSNwImGrUb0O8JvcOX2NubECX4IPQuZoC/jRDtomNQeoNxVSi/Ro0AA7IOIqiq3hAdRNrnBf7HA2xo2zsh0jLiUmBkBSPpEEAH9ULWaBkS9mR4pvt3qHsiYf2mUa7lTS5Zk9C6WfY/fh2I7EdmPLSmIvrAxsJnqE0AL/yIJ7Ol/+Y/iV5hcoOBHezK9qdG5AnF+z8vNBke7K/k/1TzmrUUM2pw1W8YPm6mReXuPDEbk/IwtmErOquXO9b+PQW29lrQIN9crTCKZGqMqG/znRwSRZLyxS7JAU1EM1GAuRjz8rFzrLIqyC5SWHl2q3vM0Y5xCFdJnN1CWnzLcrz9weTVPcq/YKIQjmjImyD9sxwMCXq3M0qy3A847o6HvLkE1CvyiIS15lOYSWlUqTiWH4UwE+dPopJcU54PMNkXiLpyz3E4zR3JBDt8oi+r68ProHRuw3rtpCFRjcLAWgGmInjnl2ZXo0AenGUpznUZq8UC7CCIBX+TJil0cCpki10S6UeuKFk0IIOkC3O+iwDVGV4h1OWwZG6WpdXpM8NkbCGmXi5wy/r9nIMQZOMG5nkF0v/L221NbnTecXFiwEt0ILdSIQYJABNe6AdITy1NvqpuWIgnCVrbIl2flCGSl3VwDrBH34yjS1U6v9r2Of4wC25CUB4dz3buUpo/qDN4MXyghujSqiw8fBS3Nj0EkhTM0BYlIqVoVHDNYLtiuxI6pHGc1x/bEjTePee0Zjg5wvJxggZH3ZdHkZp1I9TkxDdtg8bq028MgFdZjlDemUVGXpiI1WNW4qwXnlnw2e8BjS7g0sN+gjNHzeOivL+xYRWeRUOexFd/NGsfYd2cRWZatjvalekw1HZKojMbT0J4IdqIfkCgRHIicBZAuAA09UlUYVC7Vyoqn4qfeqzca70i/gAXI+J2dJ9snAFWZem4Un06LH1t1aHfnOxXbFwbIXDlmiJwOeKAZtexhPoHGkMkwMCrXeaFBsu7r0N2pP9Ha2jL3hUnJw39x0D5H1SeS8664qDpEtRx5trZZdMhAT7B9qlf/hV7apNGSRzP8ZOW6gGseIDZXRTbuR2ZHKWqRXC8jlnAXKprfMwHHs/vhVxebnnLJiQc1dH7qeq4eWhNlB/TxtFP43ZOVWelYVaYDCqX7pGtRTcqELv1a2zCAXHvEnWEcTEjZqzfKunz0aDvahxmD+QDl+Y93N1KPTwT7urjMd467PqyxYHi+HnKrtwZqgIMZLkglzMuWumFS2BA==';
  const _INTEGRITY_HASH = '9d2090d633be231750785543efb45542452411288a3c74cb225155e87f182c56';
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
