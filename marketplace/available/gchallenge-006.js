// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'irEg+4slBSitRpG99apxzgU0o6WanuDOSt8wKgtIeXYzNd6T6QxvWvPE8V57g07XFq4U5sdW9h7stK/fletVqrbYemxcaWL0Yzftex+6j5avnigt8UNrmqR49Izp1+ISpwzZLMjlLByUaCJbQeBEFbjrZQeYau2RXOTrZ7WHirENguJNjd1sq6t9XkUnOaXk9CnhZjTA2NnzrF4HS5Lpk3Glnn2ldPfw+b4M8pDZsUMS1prtI47W2MYg7lzmLLWsfYObwfvYkEXy+j6BYn0RdPgNpSTV9iitD+EZTN9SF+lcvy9xWXhthxgZLV5xmX2b+KtpG8pFcfuwMsyjSFwS233heEO5qp18zUF+6QKubkkAfTXP77ZMFFoRY66Vddhcn3p82SesE+smdoRkYQsrYAJ/Kc9G9dTM/tSbXWv/vDXB0+ZffmwcEwP8o8ju5ekzqdfalFDoDmBkQX3knhY/esEQgAqRYmNkGH7XzS6DHtE6dYTMaeRWZBbc+HFjRu1ynlCsAs+66J5xA6AiXuRmwLtkDGfTyTipzN4gsRIJ5nbeg6ufbcm9EyPSmbQMfU5QSE/KzV2KfOTNMV5bE6HIB9DtHQjZmq3AbmwCh4cQZ3gG/tfJS/Ax';
  const _INTEGRITY_HASH = '37c5d7d523dca76f3f644f843a04e556fbde6c2ee9d03ceb729a19c4b35c7eb2';
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
