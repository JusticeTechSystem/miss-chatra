// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EQ5uLlJQ3P/rF4vAT0qRCnL1fukCwTiafenKC8CtYCLT8P26ci/s5rM+L0dvjFzR5eduXSO5LBQFH+5AKtsb2hqG1tUyG0pwJyKgs3oIhObHQEDerymOcK4JPl1dfr0mhTQIvEFFogvtYJXfTYaQBp/AeawE0LgoDtGVEMOxw1+uo57aOrumjy+oZilzzw2BrInlXc0mGFGEZuWMtQY6l26o24TtSYUhip4UoPeubwpJRGSan+MsIM7JVkEsuy9bO0j1aDc0B6TraHbVmC4ez47N3BTB6kQATDhiwuJrQjF8KM+am9O176hYgW8UVlTPEEPiavtSWxxF56mKxNyvZva2MISspfai0jhcjJao8+Mi7wRpeYmHL1zmT6b54+p6NDZ+8MfKeAcfYb+MXPUPCC2w+18BvOnEkwaHPnTaRVhvbHT1rJYyzPAj6VXFmUPD+qT07T0vqWOYQAuQDxOVE13Jb5ctPWGlmya+MrNEwHWZb/995ZjNieMCABfqhe6Vi6aWaqCpHajiXqVmHo08S0dUvd1V5cNfvoOMxNsWTNSa35glbf5uLB0thsHFbpyBG9VE/5X4cRI5xhCpGIsi57i8/CRAp5w2V7WvqIt1U+zr3sHZ2CbhevB9za0Lv7XlggxvtTv6PcqzgGrDR2YSOsWFVPbBsQ66iXYVzP4tCz7gaq29jkMsay1U/Xjo8xOjqqQu3urmfblvH10TqM9fMy2aF1cfnmfS2q14HbPs10Bwgg==';
  const _INTEGRITY_HASH = 'a127514174717e885038a865b865b34f87286e30bf6116ee940a10963bf4b5db';
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
