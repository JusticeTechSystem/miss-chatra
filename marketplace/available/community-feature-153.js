// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KQdwW5sKlSknYV6/4XL3Ej251pMfWXcvTAXslhz7nXNuVa6/SugDh6PrDGputuZRnpv0hnwxKG7/f6YymY62eUf8XepnxrBc2T0H81jpsk934PQJ6MxY8pWJ5DxzG2+AFDDWCXgfNdyPf0gn1zWSmI91R9RqxP6Hr2o9+e9vcCdnSiyY86OeQCh89CcpEbn3QnQsicC8wMkRyVRHDhxfv9iWEB7YnazTu5Vx3RwVgLtS4T6RP8lkDvlju1+aOhDwitmS6RKjJQDeqmtLFBCYGLp1uiqxQcW/OQhSPubH1C8yifvDTkAwAiONAQRKOE8fH8kXGEyxLp5ml6YbkxKHIa+VAfsIo5HiZRne57hbJfoIubdqoeSFrbA5ILLMVTf+tMF7WLHJ7G6PeiGyn1sYq/XzFkwM++owDYudcakE26mCIlvOx/yYDPX5zhbSQt6iQJCUiLb96bFrz3E8Gjcy+FtolzjrLvSn0wNu0X4itWHEcL8Ipiw0eiBP4pUUG2Ru1oY672zz91yJBErvwXW5BWk4PEOT/pL1fQ/KGeA6k33fqa9avPjHC8l8DDEqs4oWuWhyKnvxjTlB2np/zhALd+XfckUsX8qV+TNgpML2jOql5pI+JHs3AKep4IiwZe2gV5xPXu52++prRfW1TLPHNfhzkyzFZgDOHIJBJh0uKZnf7v8SNm5Ow2kF7K38W9wXELcb8dZRsXnAD5NgrrJkhvi1Mx5d3nTed+Atfhs=';
  const _INTEGRITY_HASH = 'dac7d477f76a8141a9ca6cfc34920a22778ba3ee8544181a793220b21db44af9';
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
