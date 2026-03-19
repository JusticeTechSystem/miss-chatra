// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pULSEj+pPqFsEE/FJXDDzBDx3pnbUkiNPB1g2x5cY0OIwiDDkQbkD9SwUStfQb8P7kQfDloCmmWOL2rwdAMe38tXodhVJsL1rpoJgGM/3muQHFiO66+8XodcbDu15STqlSz9+kG71Ej1cCj2iCgodDCfAM24qHM0QG8zToVUElrwctm0cwtNQdtjU/kVabX7lBjURCJ0jMfoof80fzeFogbfg4YeKX4fwu+BxaG/IHCvh5L89F7+NSFOqPk0tJ2cJMIX5Dpoimgf2aoZ6UlwQdaWuwKD3iHu80R6Wziw1IkPv0lczUGBko0FUrtSN9AJAIjdc5FdX+z7naOI2G2dxIn2RV7tP3lEX1aZkg9p5g7WZIPlZQllLNuYWymr0bW0x9HzJwmAzhR/5yTmT2zOAAXbFlBEd37/tMmpy7n4uxBdNXax/tA3jX7vM2wM5sb9Ze8gVMdaiWpgHHnc+QdeK4TjVzZX7A1pHao51FbobWliKCdMd/F0McOWkGs0ExCYTV+ntnNPC2cSABzAt0yUoCY/U/6xOFvVIDRzPM48y/mwGFdhcPUET+cAsZ6uFSzGFb4aW4WDCrAjWP86Y0insIP0bdz2wKJNxx/l2LjCjjoMdJitWibd+Ny7eEIzYWYGYzfuJbrUgUMtt9fC6lZ/TZmQYmg4m8DwgihDF3vYGTXcE2DkAH4ogBckWD7VKDdYIaWqF/Sjb7TTuAY7z3Zz2de/GATWqAETfYGdRoOMaN1PMa2bHkJ3cFl31kqYbeObXuHs+LGsxQuuIjqOAT6YDjh+H3CSsM7u8nqtzp1iEPpbSnprTt7s764hgwxOT0x/Vr55Jkzg/7VHhqq5j6fckNKd0tZpzR0xnQt43Yas+bhONx0NwO+7tZL/K8Ha5cosjvKm915akoVza9bO/5EQRdCgB67b+M8t0FFYPvrNPRI9kwOWOhr/gzeFkq9Zhe5gpJrr4fEzIovnKnS5cSnA1wb+5ZTb7kh9NltIKA1W9f25WFAfCKOXABaBMAsuefolhSVw23DwVTyJir+MJwLLfRDbbjRoLV/6Hc5xlCZC3AJStEwzaE+ZMYD06Ui2Mm3m+dQmobuj6Ox++6Dbd9EVAkZ/5TQ+AlmBd3jhLE+HmFoV9IAWylT+63yRl1O7XdW/98JScBz2pPOxaCAFz7OlbUlQdFpcJ+D0V6gNlFRLCUIbQRBMxsw7+PCjiVgN+7ks7RHHaHM31qWs1OB2wNFJByxZQmavvRFxL3yGzOFE0TlE0MpzBejryHF8olnRdCujnzYkUOmTXCPHQThd4VPxodhzOT532wKNWNh5UuQWgpSZNdWiOXM6XoxV7Cq3+VzJBdOmOd7OFQmBjeyx2EVpAW3vn1j7RmNMreCdpAer';
  const _INTEGRITY_HASH = '0996d7fe0cac33bfe704a8ba9ff21e9e080d88c0d1f82bbb147e7138b6e21245';
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
