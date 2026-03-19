// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lOiUE0J0ReWroDjDmI6F5cJajvLW8hGXZi2BJ531eHVxEJWdaDg9yE7lhUGY6hByxgJhSfCEw4yUS0k0kjGAcIn6MPGCe9Ky51s2wNaC5OX/RT6imxS7eKefJzpnLxrEOojVk2LFYhCeTEGf87hX5kSqZxA0M4DMolm6R0L3bG9UDj7WzTWBvCXZTU7s4yrGaSEt1vPduKFZnSb12BhedvO4HG/Gi39b5F2KOTScncI3no/6dm5w10dhU0Pl7jS/mjVh0/JRPKprRG4Of5vREjh2cxhYkz/zVUC2HJC/zcQXxyDK+nFrofyI+qfiYD5tbNibS6dWdchIBNGP2P/y6s3/7dqF0ujiRIiNEfAHKsfmcd1Vx5Yed0myI3Dg/s7KcuHwQz4LZC8MileOIVZwrxTm4uYnFQBMMng3pnJZ047fidWb81smvdiWGdN725wP/eQHO57x/w+Z33L/aKjmHUDHZrcEHPWPt4WHo2s7eYVPXiQz9+Lh+jwQiIxag07LPjbDhuMzY0ab998uzla8rybgrm00RVj836NVgKwJRr9Itxa9Bfo4Qiv8PLOE0ulrBTIS/4mMcoQ7YTOR44UO2nb6K0fsTwpqdQTajuXLUP7S';
  const _INTEGRITY_HASH = '1d3dcebca11201a9eac8ffd98abe18912061e3e66a0071e2994ece639e19a2f1';
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
