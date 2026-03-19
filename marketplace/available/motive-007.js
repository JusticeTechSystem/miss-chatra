// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iJCrvnbrlBREo7kK8EKBhyzgKOzXNIYFDbqeMgmSEYExcmIyGuS3IMLrALcu9VVSbIrKnf84r1Bl/LQFgLEceDIgPHshJWxKRR1D3Q5scB2L4iAxArKgRQncWNtuwZAHPyKVt5+pIBo5LHyJ3zkFZE7No3XNAE59MLcYI70wgpW46d0wAqtPmwegToZEwKpItPt0OGg1132n9CRhqd2xi0G1ciFJvJfLiQmHCy0KTTr0RKkg/Xjl7bnPPqhaPiomIAK/UBRs2aG9T2d+qe8/SIs5cybucE64C+N0+zRBTeseNNLHjUqxWOTgBKyYW5Rq5k9yZwOmxfwW9FxDolmEuCZJsvzGdeDeHyqhY7aNRt60F7wpduQTgLuqz+/2Di7vzD24ekuxjkkB3bGfUQnpu/ul0LMjX9BM+qd05EMKqRZug+vBZMLpckyHxBChp0Y1t5mMy/8Mv8enA9N4fJrDF91zqtLsSbE5T4hrzjIKbej8FizgQE39afBjJ8d/vUHueDuZgitD1Il9ogl9wrWiwP/YxScz0KK0/aEHJxPVpg8sB+FPbxyXIc0Ao5zTBXzWkLavjZuZjg+lC5Vuwdj7kqXTQkXjgtxTHS+4AhrDYa74i0sdELu+LjRBTnR+5DYJEmB0mtQ9F2FgtTdOmq6CzLfZ4W4e+2LIaPstqGXQKfynLnRzfRipZNl18EkGOYLO38Ft64W0yWVmXr5p0HRWbIS0SdImh8fOH3hAc/XC6DC0eR+iPVPxF7kxgIbpxJMf9in4+SDJ64uYClw2Hpd8yI21fdYz2+2jcXK3h2v1djd8uyGlTtALwKusbAHaUSK9QQqHvg+GVfX12Nuxq603MMgqi/PEHaNf027Ufu46L8NzPAkzoyMHPu0oY4x8p6Ma6bNnOLBIDgBJSTfvn+4Kz6n6mgUD4KOBNBDcn1H5MTXAJL8gCgf/JdRRCFKV43ByBOxTYVTtDrQucDspOGuWKZdt1XoU0/3KbuEggEqMbDE7lgh45aMBa+H7kRMBxqjJZsSqcRqxIBF8kQm/KlI=';
  const _INTEGRITY_HASH = 'ff79d4b557d0ad79b94bd4644c08319497d89defe76f4a7a4bda6ef877c362c1';
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
