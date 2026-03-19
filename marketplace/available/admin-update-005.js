// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rEYZuLcAp1GjPBWGc/gn3cjsMrYVlHeaIK/FOxnsjXW5G1s6oTExvjSiDAUPOMczmvKA3tsRhODz+kp+3Br+vZrlbK0ZypPHDdkiwIHghTlSY1RfirbVRjWJBu+wVJXHjfU7Ku6FojnMwnS99C2hT7hHV2XhsyPtCh4DS3ctqVdyVEZe/zCZ4fCjZsRr/BTb5N050lmsnb3rgaJbUBewOPidI47Xee9HQASywvkTnJ05+0UHzMzXosHMAqcDiasbWXs34zRN1uWDqvnFVmuaXNxIVQRgb/k8wKvhdTudHh7C6J1b7drKuwsFojTFpMmPYjABCfIQWMecdFQu7sJ8eHhtuDF5yTLy7PqSRPqZvmcG/BwWVmFcDZqdUVP+CRrYB2C+E6BfYbfn3qqVy4hIv/ocoV13uiv09JCQQt9G3Hnrh/lLYi77z/AOoZ/msjoHnZvIh76eE9J++WT0MQ+cBaJxotiVnRQ8m9xfaRS6D8wyiB0SpT1Bj/OaURP9Bc0WW0TA8Rlp9tYAompj4oKkwaPB4vuRPpUmB4x3Vf/aKrE606/8I5xgyN6WUvShOMy5hQzlwspdC02pxjVyiWEqPAFGvZJ1SCr5RRn6zWSuO/Nf0JmRqaR6/eeBC1cwZqwEIckqqd2zyxgc1oQmeOHnM5W2hW3BRNGW4yvjo/Gf5iKLQanBXUVRrZwCXgcTlfnUmSGysnr4IEPKddFg/84lUairVa6kl3LqNdWeD1Nsqj1qC6sDVcxeH2Y4qRMpPje4Qqa5b8lz6kAhheAx4+RUnPPuwZid5vPg5p6vFbuxhwkXxwu8PwNtNYbV6HJzyFcVoGC6Dx/CO/lVZje04XcoLtoKBn55H+rue9sjMEr1neimMAKstBh0q846tiPLfB294ibDbW30uTw7hJYQ/yey/Uy1WJuWGpX7A19vV20MGkytEZf/MEoMDgEnM/kCKIGgQTUHO9nd4Qw592HKA6DL9MngVPIRf0qd66mcH6mkOZA31H7agMLfH5w=';
  const _INTEGRITY_HASH = 'a47f555d70db4512579693b16477ec899650753637a555d2992c61d7b8c6cc71';
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
