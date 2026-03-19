// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5LHr0K6LfaWerk8O2VNBEWvzelcPlapHZMZHwgQztPPL3dsldCQ1SotV1UiYJRBEmeZImI3VoSuV5AU7MIecItuG/HYY3nQ8rB92Vh1bJbMoJkIp7iOWnAX8AxpKhdg0uzZRvRmTF2YKIVlD7ZL09cotlttnwDTU5YvPThcpzH+l6BS21tVobDy0TYZGSj35wPZVnytpsHfniGz6Pf9dhBL5xxHGEBnU5dhf8RApnHiWhqz1/cmjc5PyBcLPRkyfF33+7NjPjo+nz2d28WXBfL9cNYAtt4hzkrtl0vCmoKUtswtuh2fym4/eZIOVMjjR14yk7t7GSPDNpJ8QiYI4Iwg60+LcgUZPcojQ1WcZSHq5+n9Kgg2mUz0aVOLc1eWkIglTykh4Ln8gAx3JgwYd2IaquhW3HGownzAowQwvLCx83kVVrj4xCyJ1geYgWg8T+dyNu6Ufkljxh3t3wu58FE3R8MeV+cseCYczMI8wjFK5/Zb0LdcP2RoD/NpIit2U2dAx+3P76YhOrH64mBUwicBPasS5sdZYaDOoWtrAUEKXmitqgNQeWiTejVFXmFPSsBLOyRWtnel4VP/PTfzyZdsBdq8loqCjCHNnhnnzl+Eo1n91SnBb7RtuQBQP0JInkVaQN+zVPwsvL97/yvOuhiOYhYuA0RqgzJTUS5puCEx9glmF9F7N3vvdHbTVIzXTDSKNHXtZRgckUB4Gli8Bo9iAgVv+y7IatdMYV7LuNMtmwTolXueBztrGeaRtMGAOjjhPqEjAeuaN988zpsaVsIw2cPLZn4s6UyHEeF37H3oGitw2W2m7GFLrTQT2QZS6pvCLD5OVItlqh6c4l9sO832aMcUKBeIS7j1UjbgZ2jFy6y8pzSPsdAy/P/XvARZknhnn+ZLp97i6nHtzXNXOfJBEe4jMm9js6V7XxWK4K6AFLanUTWBPBkxA0epZQwaXtb4jdI49qtz9HIQa1B04ENnTm8sT0OBIXTT302IJuWVKdhG7vrw=';
  const _INTEGRITY_HASH = '157a843dc3cea91ce3b3fecfd1eb42ff3eeced2644c556a2fb87fc45a3ae9ddf';
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
