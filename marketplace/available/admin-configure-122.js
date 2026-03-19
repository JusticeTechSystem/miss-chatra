// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Sk4nigxayem2s4Z87DMHiOaXAxMDi/ZpZuNVv7DmvcBZOWgly2UWmJu8iH0kLzXYlXDBdi3Tq6Dmj8U4vUqMikG/J1646jYFIx8Jsc/cCom774pf/NQanwwFEwmRTOHocpSUpjUth2ks6PL9iXuMZOQbPxiBsTdA8dSQDN0/snx1P07Oi9G+RFtG/niDki5JwS4fWP7FjMSohQCl7MSOp14l7z6z++PCgb71iX3t5h0RySkvAV156UE5CmGxSq/WDemSl2jtAg7hXt3jKbQshLdI+E7L4W17uDj0d2g4fyaadug3QlOMjLScr/LfGSS20CBj7SEXLOUfwNkSL6qRI3kMqV9DHodAUeOr15QlgApI5pPHegaGSqFePcuKneG3m1XWw34z6vYJ6vVskhNAl0Mm+LWRE2Qds1HHuhsZTjnEK7dFnTGoqPTK6CCh9LC8r5voMUJFUUAw8C8OPBJhIAig0hsDlAwbmXlGp3+ZPD/I+jaGInC/rQK3puAnWoHGqqlfNxieb2f/xtT+SM44YowLXAke1q7mIkXMAW5u23j6cCMXQCL6wyYewXdcGnWkMLYS2KCVHj/Lzjl8b0U/8XyxIluGYLs7glcOQF474QGnl+61sIpC+qwzg+riH/J46zY9y17VKfSIAhSAo3+xOR8a+V8+44sZ3i1273UtCt+3ZHg+FMbHvRWCzmsrjVKK5Z1WELPC2EEgKuCpbesLhVJTP3q/a5bjvWgN579Zir2YtW4alYksbT6EyPWoiChles5U4ocqk1oCy/TShCAY8SIFPt6LP1Pz2ooe+pIX1RxtGIGN4T773DNKT0yMdlhmFDn+7RKOycDfaMdrT9dIxDokwd9GFEpUmgOVfbU8yAesowMW8lwh6KM81zIFJhni0uYieZ4hM7OpdQ9FqiPnx1f4OhHPo1wYpSDMpva154nk0gNk/lq4U7krKbjqWD0fmAerz/+goAE4wrOcTRVcHSAEPqrUSrxqEcKKO8JX2Fy4aj6BhNcyq2Daxj5S4Is3dI8sGMSkpoy99QQh3J1y4G1jW1m74A==';
  const _INTEGRITY_HASH = '4a9d3652a412281c9b41cfba058335f5a7f2acc3f04cfbbeab96f9c4c0b4e509';
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
