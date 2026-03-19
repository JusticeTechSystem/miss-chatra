// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/uEJOhrTDvtX3oIVY3WvfXp/Y0VVRVpNMdxtGhyL2/NUdUaub7DinIm1Uny32ULMIs749xPnc6xJTsVBrSu6hO6YCHmjZRXY3Za7ZV6TMnyw02Gprg0S+IZsL5EWVzDipoXVte/4urTrliKH4iNYkb29FkIN/cAtjRYwosFwmdsZM9DDZvJPN0SUUDqFHH6FC0pf9QuCxtNfnBQ5dZcQjUXh+4CU7ptMITWwiQ4A48Y6JZxta85kaPlHuZCk4JW2uA3IxADTD8qZCmxvgobD4HEKvi86i59LhKwxNLallTcEhsW8oNjZOhxfPD8pUKjD1hm5veDt6v3/Y/pQpofHa4ZeSiuCPvoaQBiBUxstLfaf5GuQfOze+9sRLZobNiI1qz2rvNm7BYfOfxpJYnOOXEL6KqQgcxBZzrFPAjhPdXyaAGLazU/9GCMzpkIZ8Tap0+kLk3Q4UY7fhRyRhQ9ATpluW/hhnzx9iTBCPYDsXZKsBmN4GCL2RKQ+8hhYEU3s2SApWExRyyDQESm85/gBIkOE4naaA8WMsxYRnw/ljR6hkOABuQMSVShq9LPPDpOOLMMR5MctR7dNWV+zWj8y4jTdJu9S29wilqTuHHCYSpWA84blB5LAmtS7rZL9GB6OVq5sQs5v4CuzO7jgsWIOJR5Wkwe7g38ZKpZCgpX3E0kZbqmWjXU2xNpDvmgj7N5ZFC2l0/n+w14EgyK6xbsZswoqaG9XftIydYcpend2xUL0Q3gvg52O1VuweWAtRYi6TYIscVJ1853BUnjQgz5gK2jSiF6zqrr9PcUFgScu676zw1n82Q65EaN4ic+kQCH/6LAs0IOKpWjX+0sPWRuTAu9/++1T+k5wN3CwenHkP1UIy1cRkruaR9QxJT0L1UHW3WwKUSo0QRCmAsWJODZHUWrLBlhioIUsw74H91hypQ1d1R876uTWlpFlUipcmQBOfDObjTiy//b+kzLoc2tQNtspUBTtLcFug8w0xmXui56vTUMha3suyl25w759EAnVZJOv0RVtZqdghWiZ47BbHuEW';
  const _INTEGRITY_HASH = '8655592a3bd4863b4f7e342424c553e1aa76099a9a6fd11cc441542911883e08';
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
