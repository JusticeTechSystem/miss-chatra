// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'O7Qa/j4xRsX5j9AZfaUZG4btGW+6/2vZYB/g+0DFTBHq/yCHHQUU+dpbD4/p2qobNnodug+48OzRVeqYhDtxm5Su3y4hu6Je2NqaWiPOufH7SI25CPWNMkDeamMQRlSHRBwuORV+cF+/Vhhbwm1ieytJV+Vc7npCOmU5u8BLG8EchhbhqCZclLkn9a34QCdHIz700UW8rY+j6s9tZSIDOq68wuApJ5F2p3fV8La+PFCjpveh06+TVybKWZEs38qrluMzQVh1s90pk3Cm12IBI1X34oxKHXQWcvZ8fONRYuy8VEP7oJ47wLv1JNLUbOsJ7ZT12Jk3MkiIXMydy43nO2dT9UGeuDVGXqZd/r0iQo4j+qo/I+KvmRA/18Rc9fDGjk+8rbkClU3Z8DEMKogMeCNcfvW+qNMgWC/zpc+LkXectoT3CmUtNWPyiZ87VnedrVM/CrgqWhJrbDllRx/vAJxAtefBOIgknWNs4n0CvKPWxm0La9lyuWzNAdUvODXwpxuNjXZpgs/ceb/yrlcEKokXxVy1STUWHhQOEHED+io+ozLyDWKUok3OY3RPvo0g+4y3ZJ5OATLUcr6lsxiUqpXNtNxkPViOWNrCgcn0qwuiBIRTJI5WUcnUUzmSRYFKSnAzEdWzRkViHBZ2raeNFJ5sPiFXSQ+peYRCAdjIdZj5xU1YD2NjvieUo4/IgBcHP47BMb0+RbOgRwnVqLBk8tSwChE943rWXoEXrc4grYuHLxkJzScbl/WFVpt4Xdq0KQR3js6JjhOsu5lQdn5m5KIQ5LPZAa2hfCzO2zG+xC+QmdmLm8oi+2e5yP10+iUQsQ25v2utx43sLn8Ram/GKKpZYmoEN0s3f1IQLEg07xZZbjqCVWj9fsI+j1NsEk4DsJsUsTghVm6qHkRImqopKpb0pkFBBvp6J9XC1tP0YXtwTL5C0e4128370yEH5q3QUMtIfJuOZiQYUmqVjZLJut69pJkwkC/y0OmvCn2QcRooWGb4TlMcydym88aai7q4IfMZPJlYJ6gCIKHFB9WqflLLbNM3sftvtjJ8m30Ji7bgIS7drpR/GSa7NDgm3ovdjfY9v5nL2BcTqiQzMz0znMIA1kKvLY60uNSNxGsCl43yiRuaCHr23eThs0VGHFFcDCy1gGOzohahnnQm/tcIqPnU08KBKngs7zsLgX5VVaznEUogCy42hZnFS3hYQaElj/u4RT7JJQm/wN6OLMoFy7vQ4V+irFmFq1+/gPgxC2i3pswMMjt+gzIHuN0NjD9rQWGrV/olE2glmMT1PQCcLB5sjJ/RVLgq2VNcVTczEhSTZIiaVS6HAg21gWhDRqFkVucfNm84a4mRSYLxPBdlcHK77d8Q7ww=';
  const _INTEGRITY_HASH = '423bca2282d7acdb51fbfafb45e61fe944d3abaa6be0179d0240669e5248d5cd';
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
