// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UTB8appitVPCLFRtl+ZLREB4CsXwQIEe+R9tg2aLP3Ixr28QTao1/+N4W/kUYsoXm1SsHEOd1aLhp40/sCZz6zWBb6Wsq0YCwQ5Hsv18XztAL84S2Tc7PUy91MmwK+pS6NmOeN6UZ+wr7pItsX0v4Vs0dM9qN5YtFdTPc/DZUBLRFWUrlg8Svz1KcEHUXeiBySwaARQsXlfD+7ENTDGOHNfynfKFD1Nq+xU1GniFWdqXn/1iF7AeSENqp1aNG1ygL5MvfDoPKm8YNnA6/8wCt02QBgEAkQPKLMwqN2bHEM+jo/KhbZmBHu7VsPYCkHOGdjB8bJB7Pqtw3em3EE3A0FBXFP2reLJ8HIg/Pqi6oXsHN9a0EMvVF3DMm5YltRRfG9ZMo9ucZa9qgtgb5Coh9frNdsDnh1n/C411tb63x3ZbwslI7ahFnNxL/YgIIXQ029fd4DQk3SWJRPYz/BmZNBv41xGQWiJXT7l9dO4yR2uZmMVPVwl4bHGhPihVxwofNGlgv964mlPGMXBIOvprTlr7QuxmEPnEVsjIp96eRznhtS/PTV1KrxADivrrh43VsAFgNIkKbdLwGPcbbqGfTDb0uhsoh+bMlicWOY3ImVTXMrpqBIh2cUAnfUhx2Lg/YNKTOXz/lLsyfCM75MxtefyR0kYeUIeuhjv8O0e+8HR1JIecKZ6m+uUyuYvmUt6G4DV5pKhcewuky0GbOlwJfEM5ACb5IfbH';
  const _INTEGRITY_HASH = '06e19aba766aa6776c0c8784dc683d4ff1c6bb2b25db4c7d785c16d23ee545f4';
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
