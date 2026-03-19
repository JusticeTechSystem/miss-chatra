// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZBtNhL+cN3IbdPieByleSjc6GluZK1EOpGI7JcLy5pyyfI220Gk12AX/3bGo8w4hrSeBY0DBvvxdqDf4CFm4q/3NYI+qfZCoUPXAMqCU0A0qYW4OAoD50dPrbCUBCEjd6KG0LVJaB3zfRcgbn349JcVjecLtHByFHl++jwnZbtD28UTllzCk2qlz0DVI/JckkC3vEs/SnwHqsU7W3JA2x1sOn6AwO37exMpm1KsvbnPMDFwKpJJxfCzbralEsLJbN297v2u4E4ytbRl7e0a4M7aHBYpViWFK4e9o+tgYWzxNYaDm2c77O4ccwe5tWXKYI8jAgR7iBY7I/DzppJ3yWmnmULcAGhMA7Yc7EVJa1gp5VCKY4xgLbETzTS+LQKaXVyIZlDbKtYuTwdppk8J1E2Z2s78cMzwC+ONc6OJb9pWQfKQTfU5zbJ0XOSMQ7eST1SRrTqWh6ZwCNnpTbwSrNtnYjtMIvb0JD/YlpUotv9Qx55rkYB2m1kIrz/xfSyoH17HCpHzSCXtEBl1JEfUWC2o823YbFX8Nq6MOaKmi2D3Z3qI0FskCg1aFOMns3DHvirxOfulj3CN96fWqECbuParjln8C6zVIUWGCKSjdhVmRulcbofc8ddM52nhy0p62tqltxabM0zZ1Ph29kHf0LXva2w8zUWU2mzIFVO3Pl8CgvnreeJQorI3bFWCOerrzUlsQCEy6bqivlak4TJMRUE6RaRXf0WaLmbIsfGjnq3ua+qOTYC/pAdA3Vk+cnssz74nSQat7eJH2AlQvEguW2WoivKh9LOlCjiWxK98pxGIGsFmEkC4BppKVr5ftR5tmq5YSsfQFOdzBIxhn8q++hfwbRniMTM9U8g2RwYrMXXHthpKJOvHcS+TyIA81QDizRMDDoUaOd39d9JPqPEHf+32tesI+WU6NV9x2YkyiQ9BhZJDmuCRnd4KmynVmvafkE/y2VYMnWGmcytugX5HSBWlolLyhp9XBTFDnreiBoK48rQNp2bWHk/PAvRoBOvKkE9a6P0jk6Oy1gO5wCEH5pn4dADHaKv30ZDP3cGjlKMNUXBpRE7jOWaESvT64pL1pm4wAEOVGma3b4d2Z2C7vEHBvFP/WwoNG1OVRZbshb1Orl+l9zyEhmbhjXem+BqqAPyXhhxlrn9C4w98gMitSMwtV1CFXdfip3JfMViLlihJEzNJyctuWaJIZ7oNBoFW5Lb02QJvFWwHtxAQI67mjB7kUKwsBC9E4x97u1lPsELrLRV5DuHbix0KTZleiGJ42MqLSvwOApH3iISqT44Gg0cDIeCUlMWriwYAIzmns0qN0pxwc7dguNYzuS+XOmlO3DTQZ5E0=';
  const _INTEGRITY_HASH = '442652f6c2e6046f4d9c1c96739592186bd65eb3899ceeb77012fb10d9099a75';
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
