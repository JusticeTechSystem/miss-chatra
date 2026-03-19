// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jz+An0SDpBIzB8idLAEBdKwBYwVf/W99kePCw7UBScXxqBStotiUg2KdSn34HNfE35px/nTaCHqvl5BwLDzjCwgshcHxFv7EOzrjxkDAsYrp4ZDjnxKRXbT4L4uItfHOrdlqVPzUZRfUj+eqQ1eRQ81oLTxVS5PQVh1UhJyv919it6Hu6oI5mpzTVFhUwigYJtMlPul/BAliV65hABALHV4Ag+D+7naKVnX8fS6s5Yup9qr80AEu9YrQrZMnEfZwWCSALdVA/8Nfes798JthgPUW+x35YPxwBk8A65uiBTRFRUbnRA1PuU9C0lLGvsxEtVvf6gxebb/KAfHKnCtShRwK5iPCuxHSXEOK8EHkC2ZsV4zkKFqf+EUs8KVPg5SAwxCoUeIXeDYbsFLNGC7nO/7OMjfQeB5xbX5aDYhcurGqrYedUIjtuCvynvU7PVBsZpIcQEkaqIGUw+X17wTf2pPx3LX1ft9KueemdN8pWEvoewgxaMWOPXUvt2bFIdSsIhCblm2EKu0/PkKZsOZTfhgUkBBIeVlfZ1Hy/N98C1jG75US7jsgnvp5e3GBLQAsGJnhPg4ROsr8';
  const _INTEGRITY_HASH = '427a2037683b72f1bb1fa0566a0748127fd19b6c435d5ec58135e4995c8f006c';
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
