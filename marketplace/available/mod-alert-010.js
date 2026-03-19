// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zA7tj66AKJZ3dTtkpompAmcQ0TBOH3TM/Uq7by1IWzWAf9M7HWu3dbELXSmMyRpZrABLxHrL/qmscnkZqxop0jYvdb2uoZoXq8ArTSyyFxABxXNhL0Me1YDKbHw6xysca8n9Ig30rNOUcojQx+Duq6AqmUbk1SEEtSAQGgoco9yp1YtYw44dEmkmG6AA1df5DEtD/IWuYqxVZceBKFEbdA8CDKq0jnONPRGJ2pX6ThAHLLLDE8ZUMvkHMNW1li2LqNU17ZD45lS+ZfQxZl7Q5unRhCDFAIzzFL5dELpjwsBHAZAXKrXYR3Cc1xiFkhn1Vp8gSWuk+fOszWhQYJZbGGccCMBOjzwylHAWDCkRSQeLpRzasVCnJp0tmeQbf4/WseAuoYw3McZsHHsDDK/+tdq6fBWZMZg165ug/gwXCytbtDww1o4j8ATuMmWctzV0Ru+wGOGXhRtWwgAZ9JBoYzYDoZIxIn6h/ljdtFdBP8Jrl4cICfyJ2oyYyX9QoGtCIlbg8833sz8EuruQXA0/JN2uWEI5iYfg3R3WGGh0v6rRSbzlE+waZ80hRnBosVm1cYCYCNEKUbV50uGatIitkGmdymVVM5fayLGNwDHJhdYugRD78CgjDH8rj6EJjHT5+HvEaerQDJHvn1zbAVmDhRjePT6CtjLZs6DxuFPzX6Ym54cg419RIE4NOZCYWQ+srorGD8BS1Y86WU3DbnE/CWXtktUP4Xz6aOgvnNDxIYY7ruaFdvXpkRWNNIdbFPkFUnwv2bfgD4TDQssqm/EUhETd9krkfVJNOPHwQowlPa/UmWy+mC/4FhbPjIlUmnLJQgKYNFxMLN4z0vuPyafidy4WXi+96Za/ywTozii/hcM8bp5nBx/o8un9am/1sZvQSdIniHYUBZYshtQVBXFZygUFaiGDdgbuE+Q2T70Cn8vF80HYezPGuahuxC4TV05cAqiDz/VkahOQ3gEIjj1NLLfAV2NkDVsQMYUlXU6kDDt7kLiY1EMkGZfoq7J5y9Z1WOOsUXQuXfyHtEonoC1ZqhjjP0N/77tUVckvrhH3vrPf5vnhx/NnQai2eCwNDh7ufF8uFoDsSStOsmo6HOPBBKkfHEpENI1+eqpoqp4X3B8/HVe51V8Srhz6KMMaQH00Le/9wTGefcVXW179Bij6tx901FyHWD7bWX7nxKiyzdQeG5BBnX2XBftCdpm5ZNRTySKkU4LfODaWqS3LRpVFtSuJYpCJDzwVmNXZa8vDYnQirdn6E684ZHiGc2XKf90rMmDKTGPEnepPeDeufpmv95FEtp7Io3EKq/iYj8rufSEywWRRhMbHfnRUOKVhgaJw1ZF4yMfqrctztwT82GipIHFq21pUvCsP2A==';
  const _INTEGRITY_HASH = '170a47a56583c9a4b0c3a1802dee3b6cd6d99a78f25e5fd58fa94fed9eb4199c';
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
