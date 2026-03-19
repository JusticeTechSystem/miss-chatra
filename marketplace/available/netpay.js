// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'i0hfooanKHgECi/iKsM2KS2WqsmBQsi90WfrF/LEF5qMQF8pVamSJ9UuAko/U2mQ/FYH/WJMMgKX19s1GsTKjHHsCX4B+SXG4yUOIltjZMWVv2qwPLalUCJKsmsbGxOH1cuDldy0VqD6NWq9mTDb7dcnytT+IdozhiVLXK4sWwScaYyilHznFagXkLOj/NmBHF7+D6f4qLhbT5F9rrRBruOQwfRtEaw9loKlGQZDf5h7ZZDjDTE64C5YqDyqFhKNmlBfznM0UhLwPuxOpe0RQWx6LBKq4vvZjEvgImxxeJI/y+FOHchp5hnQUnKg2ehhKS9E6sjfg/QE/UBNVfuEYSf3JEVzMPvGuwwJ9o47OK9kpwMYjHmhdWGm6DLoQTBcmnrSyVTNd1/IEh6ns6qXpuuVP52PLnKwz9x773btE5owDh1IDPysIZvGR4CDkA6OVBGgObEuvzukDj7xZm/VROo67qxhXt+gHW/gjX+CRGoLe7fbNAmfZPhVP+K4MuNkvQPMWGdWKfbHi14S8f5QoydWQX2dGPBiT8k3PUgo6fsXbY0eLbUKHrADpVu54LYtN3PYn0UryUDLAT/5jPgzTrkxsWXfwn9orcDdAG/lBeMbNrNrPvttAFFcee82qAW4IkUCqj/rtod9083Q+OufiD8h3F+fi5piMxc9hgT2rgLqfYhE67YOhzLbxxwzMTK+5rVrmARsJVtUKVOMkoOVTDj/lIunviFwiEOeC+lC/CFBb4e2/AekYX9DqbOOn0Tz9slJgar0k8g/XHfIcJMHY+7ptrnBDo6tMx0rzHMk91GQ7yjKc2f6oUt7xnWji/IwdGpGOtFJlZ/NkZq0NO4Ei73CPNGhZS8bmWsCXbyhyo48F0mlSxwyLw+HQoHug7+h/wGt7YGzMcEBZkgsev2/Xye94Bxuj4KoJfhtDtVscs6nIvYWR90wJT+nSEO9wV+M1iyvpFBOZpTSudUD9eovG1QZVIC+0w86cK1FqzYKgMjdItF8gyauLoZHmj40umHtWjrrfiziFj2l4cRI+/zmJMDN4FpOLLU08ysE6b0GAFANfSXWHktj1RmX3sa5MffL/iuV9g9Tr+8OgY8zbmbw6aVLe+OIJmB9WYwD0zCcU6aMyRIUFkB8B7IvYDmiU01Ank+YyAizsHPQr9XGRanibt6z0Dm+djBegKdlPk/6zUeLD2Y8zx0M6If3PRg4u0k=';
  const _INTEGRITY_HASH = 'fafd6be7c5ebf22577d74721318caded2a6279f9ba3ef98d0c88ffd807a65eb6';
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
