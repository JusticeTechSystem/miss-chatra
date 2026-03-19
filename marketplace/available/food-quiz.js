// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UHI9rnrBSaik0xQYrZR41tOjxaFyTl5rBv20z5RnRQCFcvL8FbcCgwkQf3qKFvQaSTW1cXYlz9kdo4LZRF99wfI6VTVQi981mZ2muM2qgvKDbSwIaHvoZAs2T+EaSzC7//tdWta3hquvqSMJ4mAcUCJ9FCJVgFKUD1xltTwirAzn5nN+qSkuc/u6H8H5R3on0UyJo6ZjjHJKp/3znRp1HswCleaX3wA95wUH4wKR6igB/Ai51WLcfx66LuyoVH3yuLLcRK8XBK6xku67tm26oTu7vfeeeWt6nlmYsvecKJqp4Q08oz/EFTQsU7dqCrjpkd5flh5YycUz51kUGByzqj/YDpWTBDYACBZNsqVEzZeXiJh22wzsFhJgTGvxvMWH6Xhi8vHF9YbSKoHenGRyOEGq/nNpwnDP6EHz8o9OppMSajrQQiqrV1DSzUn26mVQaeiGTnxGFvjseSvcfdVbEE/9+uCC9n35SLLvwvael/aekvee48b4Bxts6Ge11bpy4bidsS5kGAfn4VtJ6WMc8qZlPFQ2qlhipOxEydrS4R562w+w1acYzXw8QRniopBmY/33O7XOyJUwHfOqZdsSDKKZvLapHXt0t6NB9aBpYCo5X+wzuLqilI7t92aRII76uJ+31iXD4G6cQparLEME3YbhFFHnN/s8lU0OTbDN6Z7iAoSlxH1QTXmMkLKJzc3c63/rqEZd/sHP6niUxiVpgvuNuer44KYzfJK8xGeM2BubmkYJUgP9E/LbbQZ+eu0eSwIbSvZOyzpM1OZygPB5xl2YKKVX8qm2DA4VFXIl3bXRHfiBRCZb+xbfovRCPj+UYvx1ZbFM27GpuXv5Uk9BdET2m2xHjLgMItuh7dNk2OInTIH5fH8te+f1AQDOg3SOuVxTuy7fdTA4bcdmD02SzO1fFb8pYynMaO3MrOKW1Y0JYqxZa1jGO/lRTv3TsEKw2ghNosw/x7vJlsU0VvEx5+ZadC4TL31CwyGfI0yKPBqTMPV3fh/1eZg4wmE5AebNs4r5NQ/C4KOn8PlkPWubikz2Un01tAX7aLB5mkHV9whJROBY0fViVm01CN3TMELK0q2Ju9KaGMeWxBnGsCg4aNsMst7lylTUOb+eE9vPdcgte1yVwYg6vMfBU738CljLsN0UHODFMJoeJ4AUS13UcDC7jW/MYwvSy6f9kXu2nBoYsYPrCQXbFnZPrSfFaFKSt5fZO9HG8gRC7LPcHhljoWyy/gyNtb9Fqm5J1wqOB6LRiSEK7fskqFhnL6bzSQuq0b7oMcQoxuy5kKYUUZSncbCLIze7Ur330/usW+ujirj9kE3f9QcPrJ3NcEfzf5iAXfQajViuhl3Q8mkyCYEQRzjMh48c/Ptj63jTyYE0Yqdk3o817Re8YYJy3qtogYHhLPeUOhNEMP4zmRiXhVQ1QFl9tveEZoZWy6+6K8awFeOcbAas6HZg7g==';
  const _INTEGRITY_HASH = '3c77bc5a1d00f474ff1fe9e4cf80074e590189f52dcb5ea3cb861f1cf9fa6b1d';
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
