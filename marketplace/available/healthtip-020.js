// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TP+EwvGakeevasM7OWSSaDL2bWy9vWNZyfm9AB5DAFs0n6mQ52gQTdyNcpoDWWCrrZMTsPgVpVMDtOooxuoFrmijC054ec0HfElXhi3QPhR3cNjoswCTgItwDwonALnf4qgKg4PocNnmx3mPSC4sgU+g8w0ow7bgTamOQJhhQWZ5sAJ4CMLu9j+4R1TKwG25IlfATkFHr1GgwDsXv5eUiNoN7B3gndeTmDHKZCZdXGMD8GrKo5BRZO/hSvm1feTcWYvLzcsU+Y01FMokMe9SPzy6EgBJnHjhPDDgBhCsyfwgqbFEjZNMWcfydG1uIcto7obi9V/7q5ROOLp8zLpgK/DMua8yGTwOV30qVz3XYgUrwne6Sq/RwTiRLGfBLDXyBwcsetrbiZnVDIjGN3wuvsWlN89DgeQTGVhv/iriz+jx6FsMTLc/68Jj1fCqHUAwGAmSTMqWPgMVQRaUHTAZR6HvLMwdHQq130TutUawPxGFYpaFp1aX3F02ZMQw1Am/XKBvxADyL/Ve8NPByKwWbR6GswRRDm1Pne6FHcOFPi+ne7HV7JO3SbsJz79Jfxu4fgZbZg9AZiCZq2VDX/82Wg864RH5UgVni2SlPsW3zi1YIW3W3mPfZv72l1fkzqfqKQFODAJ+6qsd4XDS9cWQf5+iVM9CclO+dZgt26jeKrAjewVTnmrsvBUp0McVkTxv3mTAgXkbALzATdOAUwdp9Yd224T0Syj2HneiTSwZ9AUPH9q0goJRbyKfJZ33VtxMR/SSfCkweZqhbbQI+g4vb/GAVs/FXSWTkZfQ+iUy79ZUSdv6deDwG/wazd1MzXuU8X7sHfi0hW0ddxig7hrOlE2KcZuk4HeB6TKlrPIil7uWA3HKxGFOs4OCZ1aR+Nf9WL4P+scouvYjisa3280AOW55fIOk/m66WXxHtTeocRDGZ7v3yb1dFH2goyc=';
  const _INTEGRITY_HASH = '148e2dcaa815bc63089eec08963f2025a5c2a5ea42eadce031f53b50ef4047a5';
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
