// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'G5kjIhOAjoAU/Nk9b/eH158Fx4ImLnCJap6+6JgH2VQdVCzBj3NYhll9900j69N8quBURKgl+w9yNgHFZIpWutsJJj///BzUnhAzT7ycjNHa2J2EO/RjO440mwa0MFZB7i22kmwu5Xh/AbCYdW8ZgOdBjX/Eyt/e/pKZIVpb2mpKXRcB01ZutGKsKQ95a+duEH9LQFkb2DhbIZrCsGDYflTilNQBZ9gkdXOGk/LwHrxkfw5+GHsyREsHPRXMPHiMuLivWWpiREKY6irckdTTOymvEU6NU5CRI8TvtpzhRg97vb+7JSPK90snBOh8xPFWfBq3HEDV1IUEEv7N3GBs2XD8kuGjpzI+t2wgW5ppQJqocFiPsNPWnEs8O64NqzuLmOiZdazQam7VKdlUs4AD2fIljfaGM9lHmEYWxppjoabuwZSIA49fXlm89zR11MyT17jr3SKZvWfcucbrStRU2nH5M5H65466P0xRERTMVhsePoOLk7oDD4m4aMqpXjHGqeVzrVDj6hIrZ8wrtkCZMh18MjZVIZrf3sG/I3gkga8nn3FX7kdFJJ6HfkhLscdyb75t8YMKfZ71BEfOqcYJ52IrZtyJbJ1+c+xyPfMKX+pqLRxB11WvI7ctqVSBsi8NCFeh68ck/w1NigSoNchMT96l8BmuXecVS+42Jr1tUjb18KxdttxCc9qrWR5lIOBoXHFYCxowFP2XnQCmcRP8KLrwKv4TnOgp';
  const _INTEGRITY_HASH = '7c3b2de58f25b2fc5914a1be046f0052bf8636e3047e27d87b093bcbf011743b';
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
