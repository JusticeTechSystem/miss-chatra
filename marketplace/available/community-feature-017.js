// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 't1OicaSSbC69JmLc7Luts0CWKIX0sBJaeVvDGXV/XcPI6Z92Ci6oOaEHI06SLLL4xj7ezV3lxQ8WXm14RV/3tJxRdZMXw7KvEuiFF8XIzc7CRpSjNpKVDCbgtuyBLLlTU5m+9pkqP/cm4XbRa2HUqduvWF6tt1RNXbcYu7E9ujhdND1AAIzg82AcSc7GI/ErWtHqOpaH5aNxIiNS86wWm8/o9u7pinYJ696weLS6HnikHRQKX8axf2dqR8yeekfBOmhAGqEKstMrI7BBOzHbEpuqFXHXdt+l3FqqyKscE8M5aKEXCBTd+jSSk0jL11OMOhFJ0cht3I4fHHwzJPtUR3WYH/+IU2hDaGPik9yAxRNJKVHrIzyQq5U4Cw5HU/lupcBng4lCho8pBSLMEPg8SXsuYoGXjP6QSrcWP5cNGwyPkdHKGRaCr28RoXrK3IWkW9kNOidSTlY62zHmsLClpuZGpnv/bpvWusTXBh3k8YpEcli6f9KYA4hOI8q5VPjUPQv6QHMHmTJ6sjdK2bJglrZkvlkNU6fPAVeKnKbsAoto73h50aK4PUWekZb5d57tDu/zVza/C8FI0d0TWfBlZ19F2r6dpO015Va+bdQYpR4+jEXZVQnaUz806snUiRmFtvRM4fuecs6HcIaGU77L6qRrCDdHYPu8hK+yxKSllLQRzInncKMTi+1jKeX22fkQI9VE+4jPzJgwb3hKfFgIFVQ4BM++GVVAY2iu42Kkew==';
  const _INTEGRITY_HASH = '93b262af9c01bca005c0ceb02f9402c47e9ae46b717aad7eb1515cdbe13fddf9';
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
