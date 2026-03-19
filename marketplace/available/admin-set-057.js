// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RmCfbPdsTV65qIxK5XAi89ogdxr4PVNXo8boCDcwUtqyb7CyqgPR0VfkiAYNTCJNw/BPUdZt8whYwUXs+A/LHGepDBkORE6QdIczimofKoLvmeSEAGIkDQkVKNDOYGqkOrZOFOY/8ikcwD9X39HS+42yOKPYJM4ujQ+gzrVWkwkvAcOcw3UIj1HfWtpwoTDz4/lMoH9qjOG7JrB+UVwixw6zNzY4uhaxXvOVJz9HNzssvYXwedim8WjnTrRrZfJa12eekpdy7vZjugELLgAJXwOwYpLoYgHURi2hTjaEBGyKP2qsEVQa0RJGWRurgH4MUR5GKBRfrQsn85O9tQuhDyfBKc8LRL2wX9xxBOlc6YuVV32vUMhavQ0rQeqN/ibjHDE2YCbn7DdeOBapt/SNuRUSeMft9tEI7/P1CX7134p8j9Xyfkhy3d6l+i26K11iTwSZ+WiRnigLVppr+juhDuyiRulrS9wO6MrLi1QZB7upE4TsYiacYqzrjZX83bstqvdixplPVFyXea6P2tSDJp2nBR848P4uQILodC9HF1YoYDj5T6kcp5eisD4pHdK41/U5BXC7iroKoBmE4mVbSx2Ol3QPTNDWxNY4ylgTDtZu1czVtuUy3ar1cxvjtNlENa0ReJY1+ra0IDEuKVFWCZbV5xNqMoSezmf1RF0HB5mWs2++41Sd1Jfr+L7svOSP6RhM+Q5/cEJJpaWDesRotUsAM22lyMAUzmwyE98Vqbze0vDHatNTxtPPxJy9hltig+gwWKvUkQb1CToaXGEk5HGO9xTp5f2hIRCzzMbumQuvPA9rZazUoOSuGT8UyQoWpJsmPbzH5vNXYZpm0IHsWaivnWz0Z/oCpZVI7JZ69dfkTWoK5RQwxwd7lRcqov7ob6EShx0RUrniskhP4puX+E7TzV0wvX3iECJwARzHsWxgsR6krGQ2TQOJ0GHUkPnfSD04OANJR7+Bx1/vAM1yf1nx3mg2ErE+';
  const _INTEGRITY_HASH = 'f113bf0f5b9892fc8b50b51a8cd1f579043a6d9d3996989ecd529b408582de16';
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
