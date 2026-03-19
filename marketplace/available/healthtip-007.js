// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0udu98Pf1yXlHZfxGG9t2UsFNin30CqpP6VdM4jSwRoWkv49mAFBLPShbfnZiRga4GHuzLF7L1cHLaGF9Gn37F1LKvB4ORGWzLopQcKNTdT7vDIaR0yAn1zC9YzzM+llfnlVAtGE3x4qillAk7Cd+Mt2qgDcLNbOUuA8+LhRBN2f6543fi2C/+t+gR+J4qBPkRdXZrUsfANUuIPYZLx4OmOiDbT/ESVWFvqug/yhsXkdA/Kf6ElSyiLrgL9qn6c80KKYpvQ98hhmvJdgYxUQF9dYRGWFIkWCCWWbiqpSi3TI88cBVGL+UAYhDOyCldy1jKUyoTYa2cmPsk/v0w+QBDZ4pQgRnF7eVm5TywJG+92jAK4kJ10m83LAbwQv5eaRewrHdUVKfoAzbBiT6gCBYHvZ10igkFo3+sNv92pXWkBTBRP/CKJyrx9TFn/SPsOIpEWnshwnDOI8Bk0ZwKKGyh7CspeQa9Q9KkdQ3QyXLoAC6aDLY0ETU+oT6EgMZqoQaCLmZ6HFaMvcg1j3BZaMIQY8E7ve+WDe2LAR1JLhUSRURUEUcQVxJU8IjttTe08H9nIkKULaaKBgMhxsIVW0kjeAubt3XWrUf1/q5qsBro06MFi3KspgxwxnhQpT9ftFilPMiJDoznZx1kg+x2WQWx54RerulsCvbaPS1Dlx6n6VPLMX8PoBvCYzyafeqNwEH2OFq5uOu5pC3eiaqp8mxOYRSjANADtn1QoiUo78VWkRjuX0uZR8aXhz3crxQjjbonCj6XToiJbnU08MuCMgRyFtsW7x+sz0JIAJvoTqpfbhC8hBccf0k3ObFctAYc/EsGfXTQHMqbIsTT9JC+hQ7ArP7qXVJm3OvXv9W2SPb2+EWAcVcbOIO3/+uwkUZcPgSOWP+L7R/vbs7Yn7gs4RPjFWM5VLFMgUtr7pLL+ZTRaWTrXTLzGeBg==';
  const _INTEGRITY_HASH = '17f3f8983ee6814d9ef85288660ff2fdcfd01ba768e41f137f16ca9cbb4141ed';
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
