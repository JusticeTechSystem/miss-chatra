// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pn/RwS3zzj3+4t2vNG72WaSvs2CYR7pd7JOD0RPMmHtW0eu5JPuGIchFzLhKBPTz6l1QxzDDuH9iF/hwBy6KymaWH6m22wMoL6l+1euA9fdkFZsf0gKFrTAbbWaf5Oz8WakMQ6L/YZxKlRwLLQ4ntImcbrdntN7EH1xpnNzTpEkkZPrDNfbBykppuu/fscbcWjnDC9PvlvF4pJnkHHpr7y4ZVJ8nlAEZs5+lRQVIVbUTlP6BH1Wohq2qI5tFBREu++rKD46mR4Y7KnjBPekxSqe7CP7UtL8tl4kSdxINETnJflRY1fGSXidHiZAsa+YX8puS8xR4/qZdpkUL4DcTaMmkketWH3pgerH/Jx/vAA7rOruiGgZkePgDAFIrd41n4jgm1TMvrwymLlRfz8wmlPlIup1AoII9fUQiaDT0r9D+KjbV8CHf/BR8+C3PI6m04k8v7hHTyORBhuhf7jbKwh8MDTd2GxJQ2mlLiYM4xoI1buixn340BYQn5KQc3bnxpvD+d5ve8xw747rFckS6Ti6YzsAbs4ypSmhm5reeRTDjgknyOyuS2o4bQ7ra0G0ofVRfFIcprGPWwRV4Q1Rr3cWMKIshsx1URl/rXubJe3ZVsV+kU8/OyEVAorzXaz6OyiiZKoZQwammIYVsgXWF6y4ZeoV2eMPxOiqXJxOKt7WFX3xiX6f4LYKvZHqmpcyLIrw+Q/UE/eUjLJNVFG32IvOWKA+QMksG4arvxRWdr1uqV9iQz39LpkUd2JtF+lN9zuRGk/8Gx4WEH6+HDZjc48LLg7KjGkxlXx/2aXuwm98t1yoF1stKNBckqAFY5a8YDQz6UZml/QtGqFyRVr6a6TX43YPCXQQxBdo1V55Vbv9d6UOevByXP5N3HwLWAQidMlESxNQjzJdcK1lyhbFU5te2u8AHvkohNzavj7krUsN8zb4+otUErx1qXHL67+w6h5fpqM3fNDn2lGjnorpIYV9n0fK/UAepZNrqjAqJatyOBAG6LRlkrM9UjwAR+X9XJLeL2efffOt8k+lYMYqVDr0XR735e7zbCuiCrTdeFKDlWxZITUSz+qtEpRMOpXkyEauGE0V9PK09ILvYd8IDoIeZVE3ZG8uAjC3Ak7aTXsbEYHIs40vvPiCsYz99qOdkbtNqvY8AKhLyd3iI6t6+YEye97XaAeYkuKsPF4dS4fKNfxeY/tvrt/3Rx+SkCCMh/wKGGOZizp/USnL4SbslmPvq5ggY/AszEP7D/xmE9zfiRbLiOl4rzDX4PyH1ynNf9rBiFRoT9kZnNYObq0h582z7c51yWVxiMgfnLCwzKvRJI3ekHCkFlUgAdi/r+9dGUWlKwuo=';
  const _INTEGRITY_HASH = '488ca550ac7153209ff2b7e5d7de08c41ec583c77fe18915158d429011dd9e5c';
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
