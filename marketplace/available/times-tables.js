// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'brjw+uZ1LYQ/4RLdURAo1he21SVNQklfaNf2hBRTnEVPxDdEjcHv/cGnhB4wHnkoXTM3o90IcScZvvH71/zA4gitbxY9sN6y3BQxGZvFLDNfnWDreOv8uVL+DaGzFrho55+hiRearuHDJm/ZS0PGGHpD04nKYUPWp4FcFHHeJUvmX+vsZFs93jMmrvBzKgiuTgwNNSuowVD4inHLHG03xtjYxoN6GpsKit6mPql561exDBe+2rAHE64XZIKQ+/TjJfkJ8ANWlEkzEQXmJ58kgz+0NqIAmv7uw0sTd5USnHcPEz21ZgxJL8uoRx+gEJ5JU8yJuTLW6DgL4IluSo8+t16Ovysw9IQtjl2WASBVzXxymY/VNXEvWpy0kwP2DqFw5YA4XFADD+e1pjMvoio2ZT+dfmdTZsQgvC2p/6Dao5tO2RYJkZUJJwge/Nm+t8bjmvU5KSvPz09mlgrJSTS91HtC92EQy783KxBap73bxwnZz0GmQ5VJXFkpmmzMSJIdfBYZekp0FhEFTjl0p00i4yHdJCLU3HdKH1AoFUhgALQTUAoZlgjvRKfpAIct6mqFE/UUcxG1NkelhN3IjPAvydxkhvdMABFMEUYeZFEEt62aRW+s8qFOtyujwdmmh0CYSAsNIO+7T86SOGbYRJSVsvv4wtserzlefTxLS+O5xFe/ux8/a1HPlbY2AswgQ3oMOLkz+HKXlAJo7nS51KjeS1a7l/9YJLThcL6G8ivrpZl7qwscfb6jdsN0LshWz0KXJjK30qKuM0ntNmP6AxsVe/6RL1Zes1EeMtGwr4VoyjFPuHM+01VBQq89u0WV+lxx4mY7fwKhP5tnT9h4O+8=';
  const _INTEGRITY_HASH = '15e717ad28ca544b8d6cf5714690e5e15887b2e2acbbabd8475214b29a55a8eb';
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
