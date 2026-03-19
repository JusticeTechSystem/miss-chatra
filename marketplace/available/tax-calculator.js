// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KlKnwUh+MG8ShJNdFiHxOwWtwW8ZwXPknLONpS1EiK6ICpEdgubpSInVUbo1ITTI/YcEdZT8Ug92aZs6pD/3ZMeYWUm6Q4kHM1+4znf6EdOLD+bwj6BJN4tIbfg6AaZmuTs7DTApHIJkR1pTGinCK7sneqeyRg6KQs1ER0OVSQ5QwnD2PiSAZgAnz7SFN3yMH/KItA1YdgFaCLoEN/lvE0FRnVRO5Jz2zXHo8o4SsBFTzLezr9F7SPLtJsFXJLrTce9qvVzMxDrgHUcKrtB7fiITkcp2QDVr5H8E1MyDsMGT3hGlrqMcNy7ufiboJHktgkorRuLy0CXyUT7YtUdhKUMdjfDoEZpeK5uCOP+yXsqEseq4HGyFW1U1xyJh58XkRFkYvrYZjpgObpAl0i4oQmm+JjU53ehcaHTbY01Ev9wd5XkR0sh7DvfuN1+xwt/Ejk4fUDvZ1ayTKM2qvyVptrsktKRiPBh9xgAFBci9/B+fLRvL6yvw8elyHyNhb8laIRe0od1SfaeUAt7FEp2OnLo6QVGlNWsu9dbhwf/u90jyvCWBYOMSNGbC+QIdoeb9mMyohHMzrj6JZhSOjFzlYUw=';
  const _INTEGRITY_HASH = '8b13047cfb5be6045f785c9e995913f9864903f02bfef58ed0fa9364a4b0949e';
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
