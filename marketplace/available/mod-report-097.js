// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YTYo/C/74ke1rBgkFPT4fqY+e+xmYWQKJFLTgMbBwuqXN1QtwIv09zVZ6OD8NKnRM2wrLVOGDjteNNanmLY/mgq7f0tpFHB0F9Zm7wnrtIoFRaMY28n2CTrnPx1vWyD2fHgRACM1AqKtsmyIv3hNZPlU7gVKQT1n0iKLj64v4e40VAVUbx9LbrVXf+2QIlHinZiRIhgVU6oykW1VDx08WwPsbMMbOxG+FtwkYafAr/2bu0BjcdarZratbG9sFC5BEvnzHCQvQTVBTUsD9cJddw+8YUmwrLosLDoGEYsGuXXIA3ZfJ77syQo4n4qTzSOHCE07tqyZ0PhIyzhQMhkVJIF8GgMGKmisNefNaMEnk+kEImcZwsKK1TVXzxSdR7lh5BZHLe2TGxcf6yCWJZJo8LUQtLgO7Vt/b9bOwJt3yWF3Vfx9r1vXu5Xe6DiJt3mOsYSJpycTmP9JLDbs8xsY4KsU5G8Fk6bSFyyAlBgpKkzLU1aRZNrgUfO9vED9Az68tjY90etqg6T0mz4TyYY0PP1us/QRTthDkO3/RKsnATQlo453/aGDQyOkykjofaHS/vZtcRt6IpXlr0TxNPuAubwXJglkceYTMwpcmEPl1GCKk+C8+XoQCZ2lUqc2QrkDF4Ms/b6yW3vlu0wWaPsK7E5HG0By+Nos6AAjiC/dLilh53PkaDtTGvbyX+5+952HV6jj6LW/jNKgGu++FeelplsvtIs+eW4hpoy+R9QYr8V04X8Pxk/D2jeEKgTKLGZBId0T/0D21kcWQlReFJB1qm9btbBbBIGl3l55Pwui6XJlR4OH1e0FgkKuoxqEl6/f1dZrX0QSq3EZBg0IKG+VvU1Sv7o6EOStVxG0zJ0AA/PaHcGBcIN//DSB/fJ4yZObRumtSqwAvXYTfhENOC658AqfAwX24X3sHtyJqnuJoo+s8m7QO1mIUBg3FjsFSNi5uKBunCLAOo9GmqxCMwBITsp51dJ8+Eeri2rFriwKJmfDLmUHktH1rDkxbENxGBgsqUmOYNGbGLxpRxUVhEm1l0F3YqRvTxFn1sm2qsLVE27UqoHbYv4+Lfyrg56cZnifWyag9pPcI714dw3TsQ6NQ8K8h6RDTozfE9sso84SP2N3Fr9PetY05vk2UbK+qcnwqip5obTngFALtpfNoOKbwoNpqRdLMzuGrEmVzqW+/AmTTAE1x5dWmrpSEgWJRVENZL531b+gUn5FtbNPtpeKOKabLe/dzP+gvngYmgN6D1gWQhmcYDJQxoepivDD7oANl0Ejc/Fj/H/9JHLmTaWtKjy9dmm4vtzrzecZqom/O90uFNgYq4WBWjJrJlyvaNlT22bHOMSUPf5odqlL78ssQ6Kzu5SpGsy2PV2y/Tz+ZDIaGCU=';
  const _INTEGRITY_HASH = '811ebf9928e7fed84634f8c0b30d01c65f224de0066fee40c37fd2698ede6a94';
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
