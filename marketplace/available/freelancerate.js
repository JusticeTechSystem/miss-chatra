// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AMTeGLAmouLyhWeZYjJlByvdBm5cEaT7i+qYYfW5kARFacNV88W9rXotysEpX29xTbSJKNBsJMseCQPQpK0ewM6K2fQ3QiXbW8Mt/aFaseWLsUTWBR2sYwedIN/W2uXOc0894CE1ZAha0JVbVnsVwNW2v6P9rUFeOh1vD0ON/jdjIZShmSZJHAYkLeqYpK3j3qQZ4VR/h+d8KwOHDVF/AFUREwtK3YP2P5d8o4ozRD1HmeDbYUDzf/td6WzrmScVx9tdVfdNdMYlJh+9sp+tTq3QytzDMuBsTU//WudRnk8SHP78a0C9lEdl5TNG9R0OFW0IxL0871QI1l/BQAsGnO621OzkvQRkOY8LIsg1DsBTrHtajlDpAMnh1Hc3GR7EU6jodPG/SzorzCa3/SK9HcqDPUk1mArvhgz4LDMBY4glMwrze5GgaqIGEmIxXqoNTYLeW2dGnj9AVo/DyPl4FcohLw2apTHS6X8bKHcIThaCdQWV2kR2W8PSN35GiMTIGAprxzHQWKhHnXmkXvTxQsiWfbAA3R7DWoBaWARFWduv1xvi7fdblqxh773n056VZAuh3JYlF60ld8p1faDaLgDLhYunP/dQk5NsThFAGKcS62HB1548a/jDSew+ti6ZquoawqLJsLib/HwXDBmtJ/pD0G5oJ4VT+KxEr7WdR+tEnFAoOFHcT7yResmaUg54d/k6Wxk28ijkgA8sz8gpdCJjzxrttiaUNCpvwkyjVaTSNodbTeCnONXMSKsZA8OQ3fg83NrblJDtzANOFhqSZme1T6kfyRRurIFI2S7848fJiJE0PhBlpKWaxdrDl0mPvDVaJ97PKIy9w6iu/Y4pLvB+EYleneAW9TN6j4J+VhQm03vXzOdN7VbW/R7EAYFwh3j3I/3x88i3pnp+NThAPwjMyKmHF8KEP4CbSJeLXVHrdqFgeds0MWZAv0KpRI2I8djpJauHs0hkam+JM8Ai32J9jXFZS1WntrCMyaLLobxs5ahv88htTRc48aX+ErjB/vlsWxyDvrRP4tGMdikJ6SGceJKBqTdt2Ew2MWX+liroIdwvRrU51TVPFiaKhnzbB/98PMHT4e0RcuNeA3+v+B4kc4kp6s7nMVEPgu9rjWkNq8wpk2X4rrJ2GniZBoFmOmUFJSpbB2XRjuQ0Hw9cKsVhtKGUcVmuMYBK+wTarZnFrgV2XGQgMmtat8RRxeAuN5BcwCF6CNA=';
  const _INTEGRITY_HASH = '8f41ae0f9b42cdf403dc23ec3a8db988a361e84fd29ee8209e6206a863146143';
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
