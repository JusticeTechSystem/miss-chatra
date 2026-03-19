// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Mdb+IsOR8fJCH7xgDvcIFje4NFisvaJkG3Wv7pmbLxsYFvO6UjFLV/yJoERzX2q2nU8avHTCMzmMg47iM+H9COLeao3wHEHhE3S6QXf3peEuKJz5+Z++/lHLytNyH+6fMXqNf8Tvyj9bKv6l5frhCkdXgIpnbG0GdYvwEY/KjTuX+lCmxjVlt+wtXiXx+Rx11qpAnsvx5k8eLZ1c+2xBXW9/jf3/jj819CpdM3h+PgKZwPtFALzDDevFkt22yiAvAJR+UdpWsuIgyNTjH1Pl18e8zBOaktVIMgLDoGqu+XXoBM1dMDqsSvB5c39U8cjS6/cDPXHVkUe4jygs9dN4xFA3ONI3kLCmSZEXSHlxRuZSmiYu6SYR2qyTJEUxl9hUnF4Hmpe4SsNYAoFl81c0hyzwWc7xSOmarGnVO5DIBs4OsBdRamx4CCM2ETscqkkp/FEwI/C9VuXKrTIT92LpOtzzyATn97Wk1gT4DggOrxBMoPlrBLILebthzLfZ6RjK/YiccHLM6hISr6YWmAu+e3T5JD9tlZ6hQCYnuNxOI/Gxs9XfSNk5h1MSl8Mbw/PrTvvEDTDLd/ZPUyh8rw972u41n8w+SeXeN03F8BkxoG4V7o6GpcOYbiNNA3IxNMpseEVvTt4seqzrnM6KW/nBeimQ9Z2GvnFAgy4XO0B+aRv/CmU7nCKWv5ZmnmWQCK5iwMHX4K42IIdsbDAoBC72gpplFdMyqfOi1Vx+aFz++gwySJvQyl34jICoqRH+sKJPlGhRQL/QZysdOQIvNWGOQal1+Y8EGkwu7dCEBkYMg8brNznD1XCaPSBidYOjGR2TaBueO9jKFwclPV8GmSjUeD5Yre6q9+ZaWec0ksTyKsWBYpe7U9nCTyDfZBN0dDQivcioGhNwdKyEJcAKDH8sQ0BH9SW9UFT7P89pAWwpM/Q3s5ah3iVjlDVGuJH6fNRbnaJZCGiSRzvfdsJfjhbcF8Uly7fYO1JXPzaliKVHRTlztEL5sOoavRhfKFS9N/YAhC1ehcGBeLP6wxiwTMAMPOlB07kXtlpOnK5hkVuwhaYn0ELoLWAXq13l+QYOOm/ODMJtsrxh63Trmjja00DFS64mqt5JT/c6vDcOAJwGK14IjLCgYrxixi1sEHNECGjBS+5k6mCxjUHrzbBOg6z/fFt85/jL3l52zoI5WNvXiZatdbrihW/buavY38vAzOznls2s';
  const _INTEGRITY_HASH = '7b641f5979314694597e45f1ceeaf2c6ef93bbca7d30767f9e5aa1fb65e54b42';
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
