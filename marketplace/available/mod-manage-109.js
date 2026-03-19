// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4oiyAs+qjTghfvOxJRqjoFtYAWa9lvvdM7n18bre/Ff8VPk55gV2CNc3wLgmIvDDgyWFecjLsIdy21jpFo2Z5PG2hhooUUqI89VUXfoodrJk8Byp8YFj+N85I7TeoRyrTOPUgFZF7F/TaZKUfH5JoBfn9yQFdo1WVkKqQyotYYafIuGt5ju39ygtYJUMt3raEbhaf47Fu9sRJBUrvJTr2LoDs1EE0ff46eU5unwlhW7zWxtJBDYqESgrtaPeKVThiVRQULkUybuEmav7tB0BP6DDXFNIMppVSRlQxfO8QA4Lbfr2cnG9f3xIvdpiMrLEiTEf4QAJLD2Xsk7xJlK/nYDLfod1SM9tKTR9lBKY46ychypVoGVyzdOYxf1nfqipb0NM2T50SmjXcEr6UmvGhd7Du8w0mStzt6UGv/SCia0DC/On9Z7XnTgmuSNuQzLeCFSiKTCXwKeO2i4AMCySG4lh43+gsb9TGOHlfQ+wZsIPtZlstMliBHLLuq9wtSP9HgKlXDcmXUOpWmt+J8PAXhteRsx73/LSsANtFAJlRhK1AIBRPTxVBrj4+bQOP7i0GetBen3f7s51+H04DoNFwQ1KFZFpmOi55aY4dFouWlrsklQZyJM+iwvGYK8fuqKyatdwdNQkL39fHlTr35kIOYljzdiz9gY9GeDQe4Q81j2rDFoObYYvYP2DY154BvZGao/7bC3aK+HH/xI0af35x0N6xHDgPoSI16JUCIuC+j/3IqNqIo1CKyTdflkfYPzlZe+oCQSrDxJEtdlwsaU5/Oyo4U9asoiawIk/NWoINZL/PsTmPTVuhfxsfNI455Ei5BIoi/qFJPan+MAS6Mz9f16Wna43Rtcd4M5YmO68f2g3BtrLwIwXE8ZpMsipjRfuLXIQg75QEcBRHS8ZdhLIv2QEuGcPbxVUrXFLaMehtGxAW1G0043gzuwbpkuQdVnU8jaS8t8ftB5U5FZaSuA4IrFUrSqPwtlDQGuD2STDCwfHKf72cF90fqp1wus/mqkKit0tL/G9TDudxogUk8iloIVUwpMGqV5sUkS5P+Jd7hpP5O7WZvUhZGqWg85v+knufmzh/d2j9XK1Kmpm1uXzyU0b2ww/sBO9oeKxvHpUTZrSwje1XBPpxqATRKtD7PXZiysJJQsfdl4qlEeXl2ns8Qj/EAcoGEyjsnXLinQw3+BuPaj6reeNDn1cF0L2Nnv7lTi3jXunlpW/J3uKHhh0kTIxJ9mgqvZzBz5RXN5+NmzLrxu2Ro2znWwKo720rZPloVVU2e9Mnw0MF5i8TrI8qGvooL4smoNvzei9UycYGogvgiIcDnrMeS6ZTjn9kvb/354Us/7YyaiiDUy7C9Wn2uEYB4yPdqz7ryOqQccFNMGfqGP4hDStSg==';
  const _INTEGRITY_HASH = 'bd9610366a0dc9934a6fb861b054ede2ff0dc351e3b6d882382c2273a6816e5f';
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
