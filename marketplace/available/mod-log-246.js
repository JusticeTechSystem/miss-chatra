// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5Wj2XvPnk7q3KV/TKBDJ6QecYNeTYt+jm+2BCOd3Zn4mUO0mkyaXTKukMnhbNvRxZx4dbxCbEEKBvNfqHz+CeqoVaXIEiI6izrCR7Gz1/ScyURCuQxOE4q4MFEyQHB3rQd1JvpBUImjzY7AKvVUzBaDs5nfitHMEZPo4jvfcUhYRbBYnyoaWbIrLsjMxqElgLjYLBrCgY3zLPItt6pdwaM31RbBpMhp/XiCr4BR1wQ5duTvr/KnICgHvbocnqBkhhjpXgJG4fbocbGgZNiWDz1nTJLV4l4gGMu9t3s8pcPIBYT5M8I3mDedyCNCw14zmlPOofVL/79K6ysUYGCnzNPXQF6saRLrafj6d6rnVeFNa5ctsrlaMaMCtVQ0ufkvV7ufHOyibdHfou0T67TZKJTjv04Pd33MmBTrjtlExGYM6Ya4l6NOxsVhV2Rc5LXAl3xOsr8KVT9NHJ9cyX6+LsD4yo7K3z2NzZ4T6wtZHjM88ABwQmGxe7YjgrKkIkPDDYwJO502hpqSz0ipRAwFTZNdkuB3CCVsh6SSadzgQ1ilVbEARxtrV8MP8D7h/V6sxsNrO/lyMckJvqUzN/9olT4KngnO7Nym5huM2gIt+a8F2bsPAYjYquDkxqKVDlW05QyP5N/kfBlODrZ9AQvP0IdxIdVwDbk37SXA/bFP9+UZfHnbs7q0xMuq/oUenQFTL33wsvHZL0oGWnlF9l8hZ16XdrkIr6bZ3G4quLSQRWVUiU2oAcNi9DBRqj2zOPc+OXf0CD287Jmm+XL3sbiiWp2tpd/bfCqiigV69HmtmIOFgW4wQdboIfStC6cbgSmnXlIx6FLsBrWLzofU1E6OhPyJwuh+88S1rC+R7aobi7HH8KxENRkDiRzAXyK2FFZ4cjEuL6JxZ0uz3CGji5hzNMvhkiXmBvRDL21tqQJczDWoNYb7ieu4I7YpvzwRBCJLdzIwMHN64wFyclNJ54oaKi3sD6jWscB6SuCVjSTCxiCeG2li902+vodh04LeWr2+ifhgnR/qQb1FA+gTsgkOiMTB+MbAypRiS7BavQn1sBSskFMCMLc9Z5TpSXNQ2JVHmoI2P9EYKI/xZj0IlzDtk97zxg6S9f1ZFhQ2giEA3jhAaslXYG781Ue1xJDZ6LxDsaTqEamNWCfG8ZK39Sh/a7XTAb3iLFlC+iSGugRKfDR9nErBWs3IBkLpUDiiyL7wEoSSF1TpqO3g9kjDKBXXLxqyLuifRTNFjPmpPDYGAbaSZCRnTX3DAaGNoLDYJZbijjVI6czv1k7dl0UmNEp7+XfcK43ZDHq+hh2nMYprGzvjNVYiaFByy4q+yBpMAjGO+hkYavryJU9F8AA==';
  const _INTEGRITY_HASH = '5638e788adea37f7a2a76b8154298ec1bd02548be8cf628f7e2d3a76ee036107';
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
