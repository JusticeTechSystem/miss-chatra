// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XHsr16xHyUZeeb2VYp8it6MsahAJcHy/TBT80pkVmST5tQW0yfGwFe/TYADcF8wYKvZD8CtOBpyC6Uja46kOFN+se8wNvYDi8ZZ2CPvjaZjEMTVQCfSIqYCnXyU1mYxq2ygfFkZ1ToQQjG3NpM2LcPB2qTs9KMfMikbt20K5JHpCnTobSJGmwDAEjKyzzvHvKo2lJJa+LzWhDQNIeJGwF0txUx4iimPbqTJhTdy/C3Me8fiM5IaxycG93q7ebIpb0AWFNQMKbPity4DcaqsV9q3qTnhw3tLEMVkZrkFsYmbaDCN1hhz0oH3qKBuC2hPyRJ9QHmcNemh8JGrqdKvO5zGPIPpmQc8NSqvQHg3W2bXSEh8cdOvCqno5RXEY2j80YV9tzs2JKGNYeEyN+VC67mlfP4RqFlmUwere4A4VylXUjPZVNnD1IboA3waiKaYOZMQHyADwSFcmlmnxbm4QESNiVgX/Ln4LeEnXQtl4fUsnY7qK5L+e5Bupkex70A3eKOKw2779hRxZ7SVw8oo2iDdXPpovS4xIjoza/9EvfzonT48thYd3XUqZ9pc0jHrjS+YGupU0PanNVeXa4Z3aHtxlI5MmuDImqCHFV9PGjHdSvrIkTbvilsVutlpVqVTX1KOboKS9sIkG3YizC6lLzFsVSbgApPJJ/E60wTPVFcnF3aW/GRuTlaUXoAYthRKUSFkl0+BTazNV6g56Jmfj/FIwhCZdPWqn5JBx0/GAHUR69ZOD3ahLPmK7BcsV1+ynpw1oJXAGE7uhZ72/uPXYlyi9uaDdBpBZKhuAVfJIx5WXVRxjpAP7xK9iDq+NqlVAhpuOPJ5J/LX/o6RWjjlkcAFF2U654ElE2WGO++/zpYoHZ6pK9Ydkd+oace4pianhR4PeWkY604+49Iyr7znC1ernF8qR4IUS/2CVnemzDkep457ahSZXjGDfMR8=';
  const _INTEGRITY_HASH = 'bacdad847f24b32dc961232512e234531aa6601916553446e24c5251549e1a24';
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
