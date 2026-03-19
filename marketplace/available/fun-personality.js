// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BHQpBhbM8AExvozfkIeTPKhXTfLDqAQPXYcvvVHPyPtyhgd0GLI01Mf9sqn/D5YatqDb2ZDwLhnfOwW1dr708AEj8vb18qaj/DC4w7IEe/gg2FRoIeBwYBEWcHlxQm1/gvC7i5likYeJ0jJY1wuT0ro0sR9SiXiKDTdl6tGXllt3tcSHfnNHIEXM/lBa9tHkquTulYbsozvmvNJrq1YEQtiI2M+IAgkhNH8C9x2fGupOphMSHE8NGMn8xfVzJNcWMUvOOp3lvEB7xTR3DNU2XT3o+9urSugIKTPKVmTVicAxk50qGFZHHyX1Cef2ubCPd5C5FhFNXd8pfoH0OfQ2CQf/Jay88KpLVkqbkFqiE7xY0ttfJ8jrNeevpvqwrllFz14VfUkl4LTHw4gAS/iHwSF/iGE+GEtV/mIZZc9bUfOGY0wag4bgRwQlA5G0QDZPhsUnvNkvLgZUeLq5nzvIZr8dwlHi8f0zB2BdZnX5zejFs5tekyOschC6ASrHniW726HCuXHLpbIuEXebTCBJCa29utlY9IRxLqqYOdw834OPcEOutsnb98f0HwXZCAN/o89eUocVie+P5o73PPXkVKxZHtAjJWAcMKU2KFi9+AisL7oT4UXlAXaPLMKJvJM3qLA+7eGAJrv5ymAQ9BSouJJOcKImdX7+KTb9t9Pg/CILZkV5sOmeEw6B82d+3AGoKBQDKQmy74li//rJVavBSRW6ucNA26tVUq1QXwtGANWVQXRsE0EjV8zrSlvV9wzcBpuz6JEqKxRYU4wjsHrD83H2NSZj4y9zBCciQ26xj06xzzR9NRdoj5/gGljACDBA6b8YqtGHAn8N2VydFBUx2KfQOo5GDe2cTGsZWUz/cnNEc13NtFG0OoMqaRYJLc5BWoPGrCzqkpa6pO/LHdt0jowuwK9YaqnuwS+QKycay+nrCkgryv/Mz25fCCG+V2ttnx/TgfYu5gDlxD1BzB3pUnP+/Nmt6OFAsdEzeAB2LiQANIvNjXmTcN2+uV4UAbbmK9/JAStp1Na4GRJSi+K4U8bKk7KcHa+vExc9cxWeZ/bLJIdu1+8Z9TT0fbBlj2g4ER0POBWX8W4zIumBbg1rruQrvUC7cHaG8r2M39SzIcKLtC5Z6mRdChhZwLQHjnq4bI1wZdUOIRx3/IYMx0ZXxWV+9VRr88k2EMuYPG0Iu42ja/6zZ5xovGq5yJ1ZmnIF9RyvReG0BpN/U9hISuqJtV/elH6XxDlExAhNJNVmHxNITqIAc/aPti3qhGYMvdI7UuaQo3kAuwTn+Qwda5KB1xjjEe4seL+0t2nzcZMQBEOXOHEHSjHyaB/6Usuj9SUgsbOo2lVpL9Fp8IKozvCGZLuQ8iv0xkVeW+zrsxvawmxpYMwzWdvDKjAH4d+HQZZ5SUVNIeoy3dZ3mz8O//3xnIX8m0evVV9d7VI+FH0RFrx9W4FWDAVVex9W7XbVd4LuviEwAZ2xTUmzEaeeGa6VrZubszbbELdlUSXZ/wsPY0OAZL8RFlEGB2oUTmbuVGc8g+gtez7dK8pgIChHLljv4cZkb/AYHFoh0Q3i3BuxZUSZkCr3kFZmN3LCtejV54Txmwt6cGe7cdjcM+/xx6Fy0jfXIReRP8QyKPyvRpjxermGiAckxD5OS0n3hfUhTHE0BxSi34vng7STRMpFf9mKhQb/aDM89seMrJZPvIGTdxp5Fb5AVRMiwobjQe12Di/yg8SuHXnxPllL6uIaU1dlvWBb1nzaG34GUuXaE5kL+tyL9KY3x9EIGmS1Ws2rnxza+jUjan6Sy/HYqrS6ZEPM5/7GZC6yP3VcAqS7ON20J5DLqkMJsXbDDu93qWem21XFDYAmTZin6uOiCZBemzfNHJ9um7zTQdJnkf5Cf3VdAUWv/Rxw04CWpHkePyv6gVsXBsI1EP2mxlFF52uhI75stW9WubRlLV5+iNgfP+jspA==';
  const _INTEGRITY_HASH = 'da079571ecd136e05778842c7748b3fa25f273b10083b979cea91b809d94aa3d';
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
