// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KGAUXRmpr+9X2gr1vdsbWvtNG52LniiEl79V2X9UZAegifg0GDzbKZCDvqZ+sGkAsAyCK35r1J9XhurHnzTP/bsw3xzAtFAF6JEVIM9jyIY0akfAOyF6H8p1jHxzXVrcIkjHy2J/5T+T7PWLabi4xE85k9N3GZP2Zgupu9EpucGW3fFec2EfH5Q5HbVr1BwR5QwSwsO/DH/DoZQ0pKye5c6tZ/2AuCywb8F/yXRszKsF3mh55mj4wmtsK3T0c/wdpVZ3W3VQP4mrtSFpt6dqIRppWB8nm0phPB4aW1p/1ycEX8NYTVOJM1yZ/Y9vG1kci1X4RU+cU153Yhqg0hjF5B7ASslRZSTUNQlyX06qfqgIbyhGc22IgBn5T33XKnMRHL6e1ccutq8LWAiTvTlJRUcbjq+XO6bnRTGmw/WcEp/GiL8/OQC+534Ge12fKKqzGQQoFLyhzhC5TcG+k2RnyqaYnpcO/W4tablid+bOZX/XdFO1B+Tv4YPq1SRgJyDynu3lqkQtS9KqKON+zumJyL2VFb38IHqlfpNpQ4Yhs6PoAlm8UR+iALp7LasDaWKA1TNizPXda3rJo2bz8sn7Ubw6obe3m5NcY4LcP3gi/NkBsQTB0TxdBe9lnguHQHnZZsq4Iss=';
  const _INTEGRITY_HASH = '641f6d43c9d4eeecfbdb785cf6f33bbf472cf004a07f82546842ab5806fd4c8c';
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
