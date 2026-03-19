// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'r+E4lAP+o+jzypc0F7ZvGy/aGRCHTNO5yd1T4w4m5JaMTV2SMiIcLwGl48AYlGWyFJWUiDXlGhEllNnEP66krrHSaBCTVtRelJ6E41qY6L4SbK8sK9kC1VHj01ILJkXovwDu70NMmqm0xhN4K+0N+0a1Pp8NelEVPHZop6HurI7jHvHn3rrCei/59l7dVOq0RXdM9v4vxS3NPITJsJXP9VnDsMU1s22YDAG5rX0vAw8Ao5X2hx3FXtOsdD6jTRIAb+QhUmLR312IG8/jttSQFnAjzKgXVSF8NzgtKJS1unJKQ3QyNrYE+GL1Oq2JTVXJEW719nMUHFB0djpoQKkp0zbAUWpbfEaWxTeni6GqfE6N3Xset39cuOXD93rg+qEv3qCPM90WGwtVDm90OAx+ItqKcXv0fMTHEK+bDZlSinBLvMYYw9pmmszxk4vST3AwWhowCFlLxP6VIQK7rScZW6Hl0HT3U6BcHy1jI82rZ1Ilcdy9vgY0zXaIHACdFGkO1mxBcqiDBIXs0Jc2cDsdgvBoKq7t62JXyByvNoEcsQd57KKwTon1COVWrBYs6JgFAZFYSjrzr8La0Zp2BrGbKIB8xUqExdJofbf8PE6H66F7ZvC5ZD2iXFixRIa7kpJQ9RSZNM/x2WPMFnFIxY/qDGlbzSHxGD0aK7op/sQJ2jdbyPjSoFSXnp9pJK2KEFQfxnFuL42M9dtLOd81SvVSpW+/lKHkCpaY7tvt8lthEhqLDh3GJBWFFQqIPOSOUJ7e4+xWbm3BwjC7HC/OtbGwlC583fEtg2JRonIrMhIZGaB1NCsCrLyyRWuLh1hHwWfpNMU3e5pUHRSLlVBjtQh2b2XIWOW9xWtf2iPIAqdhJIodXX6zlbNn7BkncNR/Y30Ga6d7zUNSWuJPpcMI3UEROguSY6CmIJOO/t2FilSMrDWTh67eM/VrFub4BZNOKpyonjVDglhi0Bqd94OW6Z7Wh+f4WPAv8ArgjtpGMwamR1vc2Kp1zRyIGTonnqyW8hCDiqVQiLA/X+XULhXrsed1ZjBUUXVPOBNsRExXqwJSCIMnmUZ8gy/IMWqQ1WpLzyz07QI2yF+Eb3XDVbXucN4YYNf8u1lQm4z2cUIsDZhImhPwGli2pt+Gy+32xlESGe5VU/Ee1ixR3kHoih+Fg1nI0P2SwAX3m4XaTMu58mZEQnnHS0kSkUAlYUuYXc1f2dPJsz5/YF2NFXJeP6rcOjBpDP2KjEtH6N1HZCtNtQT7kDt39lg1U8DXr+F6CVHnkhPDKeungKy0RhJavd173HRUFAgO0AYut7cUluhkiXs2IjqOjevX4CDdYun7og5HIaFmQodYFF26bKhVh/MYupQQgrHtr56UFzgOkjPAS2gW49eYvs61IRNkZ3KC5E07Bvmz2SvqbzZOPqXcSfIQA6FG9T6frn92HfwJapzoBOJXfmCsosCJtxjjTD0tADLi4DoEDUoX+kK/rtd5dtcTFPs9ZNuWBComzpE0N0r/IBhlDKURd3PSroeQFWLIOPBnrHfT2Xqgz1ubkZNQdUfme1dHZrkgzh18xETh4956On2DrGsWeqJfGAyi1JAYCTEm5MQjNkarY3Rh90H1PdTrp5eMAbTEulqE2/MbPm+VgsoMGQ1RrnsGPQkQsnvKHV1EzptOd+6PKC7biEjKv31kAz7fCt7MIP13e7ULL3qiW54qSrcZCvgTmW4+7FaTKspssb6Jz7lfACNUjMBmB/UJqnoxRVRRcuehgI2H4Sr1tzofqmeN+mVYva+rD2DTg6ACoR0jA7a8OVa8CbEQ2UIAyVdJ0cPXEqirO9D8bsptDNY884/PI2dfDOvA';
  const _INTEGRITY_HASH = '29eae9cffa28832d70cf7c1723828b31b3980366c49d286270db58b2503cd1be';
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
