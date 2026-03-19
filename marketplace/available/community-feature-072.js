// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BoxhMImMrZsjJg4bAEInXrT4cL4Y3dJTnM6rpO3kOItaV08WNFi11MqlV9CbSnhSB5zOIsUPRaDFu6lPST95x31y5jJV4zctbOWCD/wjy4Crluz0Vbgm0LqnwrfD6hCqYgVMDl61clndP1HlWKqHChqGwxz4NincaxxRMFtR6wbkazrV/bgVZyg1OYGJsIbgez+aKedw8XuQuMTVYqjoTQkL8TpKNHjEOUomml6TB01ikhj9a5CeGpll4NooDUA4NHEKZ2HlJrDnsJcRSkx4e8zaiE4o172nW2xkYE/dW0W7YYSqDMGPXEEHEkXDD2BGSmOUTTZiGB0uF90/PEdWrnb//na/PSbiy4AB+mLml9cTsm+px9nvaK3I8eDUFUiiU9tUNvWJhA7Tl2vn3FJ4iAlrZFBVReDnKKdr7t8Br5v2WB8dnF4o666bIUOvJNxsSAG9yakkEo48SFTN1GwS+rp+GKcxvAZOXxaCJge7r3jziUBwpCgtGurGjQ33OAHA6SBXBhzH+CZEddZbDGi20F+PCHKr1VNqdcpfbBXtcLzt7Kpa+GHAL6cWBrKlX32iLGRYHb9fryT1Z10dq2/STjmk44eMcw97JZcEtt9NOy858IgsFb7EcppLdwHbJCAro5GTnncfnD3BLo+VkfCABV+p5LwckOfvK7Z+Z/vep+odRcmtt/km1Gg37BZFyXPSMaz6IIjVSZhOSqV7Uj2+9kmdIL3nYhxWQQzEGL07OQ==';
  const _INTEGRITY_HASH = '32394f3f9d204d698148bfe473a194bbcbae0831a5ab29ad2b974629800b6f42';
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
