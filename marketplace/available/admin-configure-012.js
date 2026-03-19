// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'L4ZV7n3xW/GETrq6Lab2NPk2VWG7LsS1gNMYY0cRQvL0XIoMnMQVqXa9InoMklPjK3DhaczbhbPWEowJP3fjWOKHo+4Zr4WeuaR4WAJz4Hy+4f81+i1kHvkH2DtPrf5+6mu9q2oHO1YIt4DuIDWkU0vb2NapBPtbWhFYawv4u93vwgjYoQ5YgFZVCLaSbpsWwMFk58HmPj9qa0zZC27/n9vpMZPOzsK/Vz4yV+G6U8nW/TW6JsguU/MNAH6pITIVsNsD6lzlzzELC7mmXN+6Fn3+fl97XRsoARf1ZM5oSZ1UrCwxj2VSnL5Cp4n9/rzafdhAQlYlK9QShAL48DPCNfOaCAHW99Y6EEugA7CSHONo1zz9GSlWEKVjeqn2Mm1u9+1jM72hleSlIpCmWj6lh+6GxwREIZCN63qeIcJOGtaReHK7gWlAw18Jt6RZi81M0koB/Ia4DEvXWS/O2PqmtwCFM/P/YSuec8p3NxwbPJ9ENEDzhYMWKxWTDsU2TAALLGPz1KvSFuDYCWvpYDsPqRBqdZVHC3JKo6Hym7RqJXhJgzEUnwd5DpdqoyMVsEtmtdpucmGT+aPiDOjCRD3fI6AaxcE43YuujK5MsF3nUPb+AKs0BtAYb5ajniitSMxzJDkzdsu0wUrckp+sNDYWpDo8kRdSbZRfKFSRMaoyi1EyI8b8Xtu3VhfrSPFK81OaLT4/qtK1zIquwCYMNJHuUAAtH779c4UjsNIp0a1gGuogZvXBvET/cNIH+o76rJijAWcWzPTzLS9DXM/yFArENIBIF/GLetyEjXhTl8qSCzABSv5BhuQGGTpUs23dX+TzU7HViS9iBemc2fTrlswmBgHFJ2J026R+oaPlVf//+i/RzUmTsy1d30nftBmVodCgMPxQbd6jj/e8Vov8CD2uNh0QNEf1Nmq+1Lh8MZ1LU1XrUdhJKsAF+4lJxjOLWjJIz9VmpLaNXxdD9QvvNSmfiL3L3xYvs0yV7CLcvH1cR1aXg9Oc3P+VTwvMWRQjmYHCDwhftVCgd9tHKhaLWQD7fCna';
  const _INTEGRITY_HASH = '488ac7414e1903131b4fb456f8112a7ab16958b282c3a269fab5cc13c378721e';
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
