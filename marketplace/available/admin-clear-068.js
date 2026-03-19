// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:20:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SZbZlSYWlt84nVy/MWRY04wk4UNle2RayS/10rHmBmxSecuCdwhBMNodFP3Ur7qXpfhKs3PXNY1pVmITaI6B7WMTIBDTLpFvL0IhTjYg5+DQcM6qGimbKkI637K8DPQb483HQ9j5Ws8gyU5FM9kOjttu81iJacA1gzHmDeaJW7L+zpstYAp+M+oNzzuVkhnCb2YgsTwls0gqlWHpxIQZR9HEqE1lbs2fL/mz3Wb9WAInTAG1qQ+j1nLzhjuj00Iq7f56ywivUNM8sdBOSM9j/lRMUlj3iTakRo1cyyWGE+1W2Dj5fidILGz2nXJgcgvKjh4V8imRdAph7GQcM5YBUF40CSHITS5k4tkVvWomSQ8u/QEH83rQenw9mRJUmZr/v+gfwYnn3hljD47eFXHQYnTX008/Rb3MKTmvUS08TJ8BCetEMEYlr2bmDNJm9tAR5cZi35/BjA5VYAZqyRZ4jgTKBdrRLDS+2SVpm8hGeutf6S0t/pk54eamkqjjrmm+yFz5kacOBc24VopId2tUvrOu6tLyR9OAb5JrZXiYmvUvS6bbzY9BGqlfp7P7et0hoVbGBgAbSCVgyvOzHAA+a1vKUWUXdLXMQ8cO5BUCd2Tr95mBMa4e+KCzEA1KkUHRIcU6dXwcmf3ebAODGCpdtWAnZeY07lh7qE9dTNmcT++CgQRPOW9BW7+9s4D/2Ho0yj0cLnVuZWLgpConuJ45hodpnrQhJbwi8RxmuoV183PTof3mTdbnPwFwZNXqWXiYj4FIhIRPNJu4YNQHNMtp6RrWavqcqjY470+Fgk6dhKCDYYPaBpN019h84sokceiHU/PVxqvrPTzClfEs0nqtygDNLvmiRUO0bEHUaI8D/XlIHVe9u/yfjRXf3QObkR09PKbJoujVk2Y9Fgn0WHg3VZJqyEBweJTcUI1b2C4Z2LmfjMKrW74JOD8w52alPYVvr5NDoCWMqXKZnwWuUn8MV/toh7o5xmmbc+LFwsr6lN/qTuyGUjA=';
  const _INTEGRITY_HASH = '7814ba7ff179f7ee178b5880287875238c872399834bd182f139c4a9ba244c08';
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
