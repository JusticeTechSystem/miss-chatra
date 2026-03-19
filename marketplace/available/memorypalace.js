// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Sy+0ts1hhlPB6frUZhDAScwdUPWCh13d9LHFMmZs6qhYjpSUxMJaLClnwQ3SytkrJiALKc1Pg2BSr8v3eHeguU2bbqIOjs4ojKpDc3fIIJ9rTogdLVtfL4cSvl19n/yo0lJ88iD9q+RZWzLopQFl19M3MypUUainhp+jWm1+MLo/4fXUsIu18lKtftEg3eur6cLCt1EOYyMTBy9UPh96QcZhipcWqk9/nKO0qFz5f7ls8mbNTuzDdroX9F098Um7zKlOGAvEsAigjvry5ByhDufKZgaOGB6uwsGXDfInmJaGHhgeGgwTPCCM32z6LbVuCXSjJOENCmXElZ2rQ7t3OFv989VtFz8n5eumMMpMgeSnlZzvd/5e71GU3yscfNiOQ98LiTj62DoDrla6iI+th+ikoCgY53ZUt45ZG1ICdFwc+jyZnWOjRyHptHQrW+GAxO8L6qpK8DqcIaNpp6YqRJ/BvR9ZRR+J78p9Kr1NN3ZyIUbJubOmPfy+BhZtTqhDKbMDLvb1aa18ZT7Fwyh41eTj2JLTR0WcFnDMkrlY9llUvRmskIt+XQ9zcqKlEppMPUn2VPAYX0EFJj9ssG7P0pCI6X7wKB28UQnju2UJ1PwnBnpfwn5oxghiP95rmT74Bkfgw1/mv310pwA6YU36VDx8TZv6wb050l80OAfj8mKCILO97ezPMX+vr5bdiQMnouoChYbkLz2fQR+2h2OvM/2zyWDSOXyAo/ygfC5wR1I2FSeYM7kZxEHzmUINqAzvzSUjFf8F5CCmsK3i9L5E4yDEjr7+4Gv4gIOGupBSpw2gJafro9kTuwc64Gkxw8BwafGGAXS33Ll+i95eD8nKOfuL9dAzoexdFivTq2LtkSBlr+UgDO6/FhyRV7L6PyOVUhN1RhVkktC2Le1inciYG2r5o9IuacZi5L81rS/eVJjr0ai4CLnylo+jUE4wCZFEpltP6NpzFCD2AvVmGC0exMyAimrUMr1SewbQaFV1Ptv+5AQAh3Icior7F9ykGEza/hSh3vwpupY8e0hA/VyKGgBe0XmRvll2sC0cw8FZRxQ2LqfDIv1b43oCRf3o4pV9Pv+7aRwtu83JPmmB+F+pIB6yl/Y7xSg0kDCj2gWxBtL5eaaSATTJ7RpywlsHYQAR0lbTzbbu48NmZe81RLRiuZ3aALsGVz4ZHDDXTcq9iGRLTRPIC8cRZv+k6qyE6/9kPS5yYwKRfU1J';
  const _INTEGRITY_HASH = '763f0f32fe2f97c2f114e12a97656b7e818514949185266a3d038ffb3be86360';
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
