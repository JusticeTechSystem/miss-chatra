// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UNfq3/YVSmt6xCSxVvD0Ls0pzfxT2qMIcbWTNWcKnHiPiVYK5jIM6KOvt+GcRgy227Tw45VQPq9be9inOYp8S6m0KGjqeNAIC7y6BCkpDGlwKC+SKWDHEjj6ljnyoA2tdoIghHXABu13sufq538THbYZzpboBt577v/3ZanVCVOyG6HIpEb+7804mZ8vlduqbK95r2t/mGrJvsJqbqPTGGN4ta2QFFJYm+F/t6/jIXbAZA1sTByF6ro5hWQG3DVBjxLBDcnuFylZgqiF2Tf/f9/1VGth3nRhL5/OdQLzmmz9sOKX5DDkvoWQIEyh7pM+UK3XMhxxsdNCLIfBijbUcjELCnQSdgF06BBBSoEFl2M4RGfRsSsh7tEZ/KAVfmRvOLJwtZqa/xSsTb7Xxsq0/cFsUzcFk3SR5zwDDyR25OOjHceRHNss0xhXkG8icy4WoylHmGRqg+pVmz59HfcJt54DhXv1/CzN8kVL9Mh5zdO49wj/jDu538G7WAzqfr+5JtpRJtRZD+zUaSS+jCRCDlzL9Dqx2ei0mxE/gFXmynQnQknPuQ3ygFpiz+69T/AercJHmmcKio0YQssW3NwNoALREJeV6iKBKZlxaNlpAhv2Ed4n5585hYjzZqZijxE5O5v1jqYE4W7BNef+kZRr05dE2Ca4tcLKKMGvIZVZAocFkxbTlC/T+DISz4zZLEw6OogJDxXQrt+Vs2HpRT3NWXX28dfLqd+yhUtGu+nJKeAxoVgvDFsVzXBlKx0fosLXj8VCYb+jebF/ItxA9OvTDO5kkMaX3yBjMvbVFrjtLmaRSGaZTTV6r/Drl6J7yqHqd476ALrOOJeK3xZSKDQNc9fG9tMl1oGlrsE/NZwA4FyhZnw6l4tr2uetZjaLmuFINyXpsiBqx/BpmwziX+xRDyTNfLv5dSO4ILkQLmW6NvvkqId/XtkLD12qAxdBmMPGvNuaJzncJ3FLYD/3g0GVtjmGaGFJzzhSiCrQwijYiqpx2+EgyCOB/NOIeAG9s2yjHeQqu6F1OCvh89Q6myK1viiaggamJQ+YHGxONYSW9x/kDD7qiYdgvDMZ/k1GCjORSypHGT8ZPP8Knj9GnOyQA1/k/Ev8Rk3sLQCqAQlBixRcJsoZA8WenUopK49mvSnr6tKPU50gCJf6+JZ/a9nA0yoKnWSgaKuHQpF1TqvoJ7ULb1LmuOURTaRtYxX9O7uVEN6dJAnOXDOTgP7q+ZmDniG4WWG8mzY8ShZUTa8VwoMPrmhH515meYoreYXodVaCTegTAV1ivf++OVVBpjsmQlgpX9IFQ73qrjLw557Iu0NiQgUaeQHhDBdt8vVirKRqt6UkA6R46n8Ow2/Zf3jlW9AdrRcMqekeoyXp3XGT';
  const _INTEGRITY_HASH = '2c9af29dfcdaf856623214740ba7de28a407b7db3b4b64892a0e92aea5b63abb';
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
