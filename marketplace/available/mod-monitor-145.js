// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'K/hePFxB6xc3OZ1NysubIjVFx24RUQ1V6t753BCKKyDfpUtpOt+KL9j3XXFl4PQquBP1R8SheuVD7vKDQd/YD68AnnM2dCdathg115krSDhlnhQdvzEawoQMqm75ayKUTW3T83igBq5QRIUj/cgvwuMJedXs+bvG+LPP5WMN+Exmc0D17rJ6F1YDjdiexZol3+cDWu3Hb44UdLLHPxrtzQjs0A7phmr1R7wjxBmtIXldqYsSmAfBDhSGv9+mXr/WKe0fqhKAGp6gFawdEJsM0S/Le5IgmleTI1FePjF6lQqo8BXWtidJ6BDY7+KtUXXLRrMuLTNZkloCZJq4xsug/1k/k2Yxf7VkU9rvSa95Y4M4DKa8GngBimhQnQ+aPkoDvHXbUpyQ9VYmRnFERMFOunTP3YEgpiIQw+/iJ7wZ4zyNk4Av/t+EXmOz+eqt692Oj4LDQ8HFm9s4RuF7UjzluKgSPugS+SZ0vvDPw02uvHwXYYmLxKN0s3NxhBT7DLJI2KZkDn3PKrVdacIs6G1EfwfO/Ix9Sb1hdpiXXbcqpD/y7yhO2CxHzUYCGrx5vdJjVBmatwoitQrIFMbPSposEMw3oUG4Tf9awjeG0KC3vc5iHbjDjl3zuDdycrm9ug0iWg1H4UFwwYath1DMvv3kfDlbA38DgzzWm86Vt8CcGb9HDv8EKSFnOSNwfsaQ0F/JRf+JzTXfmkWCERdbwbRu04sGBpOARfNZrmquQcRYPwzN39UkqGy/3teC4KDyWh1VHh/YnOSikRIf5dY4fh6oo3OFtMK4wmKyjguABNX3z7hsKV/Bge5Xh8P+MBFBfr5oGWUKjAAt3wJQPvYyfX0h0eBiHzpZYAS37BsokG9+4MW0ZnHcbAs0u8TAra8oKbwjSgsS1dYcBcc8YRUCqg4+JPGm20gI7s5dy5pqk1+S57B8ewyfJljbbpV9v8p6ivIsOKxSsaYYWYT8w/o6FMrWugSBfxLYIZZnkokQIZ3D28aM8MtMkIAYNLu7c2OFRbrDjKRyJwBgltBYrtLj9tyNew4vJFAV4L+tr57/OSC/e7o+8ZX/J6Xaa5z2V51mOex+V8nCdsiawwMIRB1Bf0/NkrZPHhDv2SDgXX29eFvFqaeiqqWZuhWDY8hEA+dB9WxpUCxhvNmafLt5VPgslu6fq1F9Vu5Bdh5y92lhdksCCd3spAvQuufNhSvV24xQjeY/22TGvWdC5IVDwloQahrTkoenLdmkljip0l3LYqamb0SnxFUQIwYPPtO1YUOTRap89OyBEVJbPafWWZ9OFSwAv68FCE+V3+ydgaU2NSNTumC7K3bocbKySNi+04kfEWjmr5IgmuvgY/8tG+KSXiUYHse+WsKUsZQz7yeMUJUFgy4ry5OsncQGLCUrTNnTlnTyqKM=';
  const _INTEGRITY_HASH = 'd020ddf0f59bc575ec8116d6885e49f79850fbfd58c033e39920e7a996e07a56';
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
