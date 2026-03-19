// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'h3B52zN6M0NnO3C+lE1jwPXd+8dm9IQP1hUPzRpReD28w4Qnf/xfEV70UpGqx7CDEm6h5lKhOAjh+15PSQFrWNo18UjkcZGBNG5dWfTLAZJEIhQwVPvmxvrPbxr7iTD1j3MqUwlqEKlA0yvhzVDCj274isqhwZl3h051KwfyRWhiTgWHFEhYPTX1aHQYwRkFqVoOmnLdRwRx5I0HZ12khTjNA+vJR1r9B+WC8WDHWCbu6CGmQJ5hd4EplBFwGPRJs1B3BqwaqbvXYIm9WBWxMKBWIwhyt/wtZQLeQ4iDvhxLftZtUhnC2uou5Z5i8DkHmB5wxMhOUKDK5XbsPB+JAyKv1r4XP6XhQrEtCx7g5v8CPdWgyWDdqvlSq1j/dPSVm+7QfNtIrSswDHa0nwnXb1orN6Vf+eQ8lTzRr68ofS6GhRhQ+xuB6bQ0biqF6MCJllCHsQtgIOeLiklox8ZRmnENM0Nz9L42RVuMwfb1eiKaKhSIMmkE4It/tojr3hoNYhKnFoPVqH3oKtBtDpv1CufjOKNktER9Ck8C2RlPrPfzpAASHwIT8Wjp3ETyJU6oTTOA8SoC0ysJC8go+7KCEzQgaOrA0UmqClZeoUS4qM9ptrUs+F776LSSZty1TsCnBAL4rTpdoxEFXWTFmo6H8viYpm16CnUmBINmKytkXkuPX94Rqc+WMnN4EbZOqqRWs+ao8CuVpyMVkhZ2DeEFj5hm8tnEa71Zy+W+3QhmatFuHlKchNujeWHi5Lk8sFahiEk+YPlkKkKSsMvigY+Vzp7SMK+mpEeXTO5NhJvDusCrnEzmwh6Kz9cqeIA30JLQbIBMtx0E3OyzLPF1aZebLZZNQy/k05uR5OwdYlgAOeOVPVy9pE7rN/UhryVd3wRzTbanmUXfHQmKk3/d0JdGKPPXfiYMYEW5L0Fgvt4gdDsko8MrOCBHQYJT8RdtOT0Ecb1DwFpcucDAcxpHnj0Djfu+k6Es3GTZr0Zq5Ji1Vm0ROBIP7OP/8kK4LVCUVRr3HOfFS7TDnM85Uw4lKmfXcT3FSvp10lDkAJ/xPbpVLBCAL5RqNCVjnFWm9nOVbK1sAP86v/qrW3WW0IImhx32/WWc2+5kwOwbF+pW6cPilav9QeeKGCywmMkIdzF6UBq3+ie+PE4NuElB71i7WuDlomcXzZXhqAC1byZpvW5+6MHfooxOvr/deFaeK4fNdP714Vy3i8c07AXZXLdAGgz6KlYPQKKT';
  const _INTEGRITY_HASH = 'b9ceb5bba0e450520cf5f0774b96f72597e89d956bdf6a44f393cec6091003e6';
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
