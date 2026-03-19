// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nd2m1K512Tq7kE00TlMlhCtNDjI6MXMCDkR/Kn9CHUR7rnbe0POkS7CiLykrIv+67TnbJVCF1MBtBlTsfG+r4qjglR9eMyg+oyiSwyF8LEbcB5gwSJCxm5sYJtDYXthnzaKAuX3+9Hn2T6+T1XzSGRjX94bU0DJKLV2Jy6SP5dPwOZ8gRor65m81jQsmc3blNOS7d87WVQUgtvEV9caS9WvehHMqlEfZOespb8UWrtuB1V3ZjvqXpw0Fjao5PUwmK0m4eLRiZRRC7u0xYp76QlAwNV/CRpQN9DT6gYY/P0xv64Z1NSpa5W96U+RLCTNiRs/wyWMOMl6bS4OCkavFEtCkmFKG+0A6j8QC9nIOJu0Ic9aSE5J+avtBhDoM+r/WocPJpyfmHcqMyICxHrWPRn6XGBR8DC8lw7aooogJRcgxXt/tji2IlUUzJ6nZJt5OECD7PHCmr+5SLEhW1KbzfXlKjMtpNbuB6pqLubRcmp9dyOkOl9V+Ju7bL0fsKdMuzFkP0ashCzgAdUetoFD9+39tsjF2SOat02M6T0XHrlKj5j3x2GGFxXRthbaEJ1QnBmbjbSuapWXhIG7y+rbqixifj8fSHJMUoo9/OGguSuApTZvHLz+JiI0mwCEsswC9wDZPdirGJg8uCy3sOGVLlmOcBEqU68S1M547YgMUKl1w4xobZv4VTXIoPrP/CAIUnMH3QpZJ/WIjl4GWRXgjHvSRzQTKD0PU7urMurAEagBcdESF3+TBDeeGuBSJUx4ic7RgTM9DiNE7Jz5Tu9mPzmfDSx//GTWpDrVUFNJsjYnXCsh1Xk3HCdA2FdvV2AmRilIKEBRoo5XgBJpp6vXEcExH5rq2trPW0wFYmTNuWKk+Vf18x2FIQOdP9bL7zipyD7Pb9nVca6vWsAG4kSTyhfTBp7Aqjvo/rmwrZtNjI9RL4Dx+fF5uwaiKohqfi2IHR/hpVCZNkW0W4lmhJg3Iyj8/T6EBgQB+lgH53Z0bcGg3dVvZBHBiRtmgm9BKJbTKur1QGn9AFikKrNGpGLocZnPPpS+WnFE3CnGISbvFJ0uxieCAvWqUb73Izoarm8E04F+wa+YnmK8wIWRaUDKT67p5/PKxEKbnFKC2zKUXbMc/5yHH56a+eSPiP4OvgV84x7W9Yq/Rz7JXbdfGrp4LbOJqKzTPabTkcg3dcdynzOG3dt2Y8BylArRsVSho17dDhedPtGnmeofhf9hB7BPq3W9de2vUj14GlFUK3cc55S0qrFxNNjoIPSHSDG8LDJhoA+SwUSuMDKfbdYgH6KvN7MAdsjrjmJWRBBXG1eZI8083mwWoIgizq7gyQAlockcV2BVsUGVwv05YxQ==';
  const _INTEGRITY_HASH = '17dab223d1997b7c81effac0218c9ca3821e3cb76798c72a09619273fc4851c0';
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
