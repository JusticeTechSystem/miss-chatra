// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OF7GaWlLYyBHkpFcDrqMSsqcfoDKM6qlQ06lbn3odKRHqcDqwX6RD2LQqzl+SC6LoCeMdwdkkLhpuykv6B3kG6bLlGTVbG80aSmCVFGPBRGnaIlEHoXptSlajddIZGn5Rkt/5nrmGFH31gnLdb263hs9N+QccZHn4uIgEi0D0BmuWPH7/gHg/fZ+DoDrZGp++BNTfmnZTHpZR+biM0cBQaone7fcpW6K57dT2caCA9AKCSwgKU0picC4e0vnRqZRbIgqS4cGl8EOTvTAV3Y721k3McADh+7VUMvEpRAw3tfGTqNuXISKDn1+gY9mTcGFLMngGsIyAplRWT56vkap66Rjra520GNfniooax+awzVzPje+jZmN4GYEsd+T8bX+ZaKhYEKeu35K/sXz0PiPBr3JONuaz8cFyD552AA6M1pC/5KbO3e+nrmN2vscLyYLk+U6Tof9InjncSSHplIGkT1uZIZh7M5GGB7+1n6Aje6jRBfdX3E8EO2iR2mgHtQ+Ss0YcJJhPYDM6piEk/wTDlC63RLFIYimaocBeuV6WdZrIJx6bbH5Rot6w5SfwXjdjuBDc43wst6SeizoS7lI01XiDpGKA2NTZlE0mBed0xjMoEh3a9lUgielkAzP6M88WBe/DdqFeUJZ0of7R9CG7eXHbhyNhm5qarCOT7vMZ3WataElOfa9uV0tJ6tpnXhpz0WecNQ0AZfcPNKNc7i3Pi8mH73ASCpM/0xQL2iCZMvJK5TaPS27saTVciUJ0kJX4LB65d8KmQAA/iQ99RBR2PvFkUDgiIepfi9jIdxDrtPk3p1P/w15/vgQnFInvVwXc5L6sPHMMcFIKM40oQysl09PNmprTu5BEtzOZx61OlQvFCvahceGQRgNeTGYqJUwjWUr4caCVB73t/aYPAwVYvE9fex4SWGbkUjGV4wz6N2zXgU9o0t1KHokgzmwm86gWYAZ+/HopTMdm5iY8OW8OFgocWREGCXIge7njlH5CN1lpk8SE0o=';
  const _INTEGRITY_HASH = '24e80ae73e0ce6f477612b186505e9c6218eb71efe5901878f258347ca7b3ca3';
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
