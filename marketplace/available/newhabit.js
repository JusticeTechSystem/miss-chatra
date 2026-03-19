// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9QrtjRu9VSVDcqW7xO3hE/AOq0dpy8KVD3Z25pxyGRtg7VWmj2lreHHvOGne4irHc9zc5DlLQ4u4qWv2eyrzVXJkl5gsDOij69TZCRF6q+0UsrhgeSCXMn4k2Tu1H9o3pN+4nqRuhIh/S70cpnX8UgJdZxupZM6d4oQPWVqNNgGJceSU09wgs5CfPx41j8dHdhE8daN0aRLRvHvTO/ShKWMBCHu/NtT5lDeHIuqu8wP0IliNpjSDKRM2sG+DohlMQrWqx5n0dckH4dIKyGchqlHPwtS2VhHE3sld5Kg0x2nTUqQu4FHpbcY4vpClmRrPtL6E/P5OdOU6hNIH3NArWY7MQfpiKUNzwLnMm3EAtAtuXPQd4m/CQZ1cyDz8mPsOWHU5s2mxq4VXGpyA5TJQxLnl1Mkq4e12RtUWysW3OdMmoU0OpmCKs3BE+8Iifc36RNRfyEDzE7aoV+ymgK6dQovC0uAS8QWLxiY9W7RWU50NrpAWvWrwJz4EvQWfFMeQSMs1UsuND1T1OP1ndBvHVz8hFbXfsuNQURJ8yD3WYGgpPOtc8HCKWKOtYFW+qBM9RlRofKo7lXBxL2CGKhGFJxOESd6kq/J3YDKzWqtSR5dvj2iFsB+v7494TFWQyeKsYwy6eoM6p+9xCAtyDd0RxN3laxiGkNZG5pO2CsLYr3b3qGGDtpPP36j3Z3ySfGRKGAaFIlgoapR7h0JAxVeWDnmVpTlUylx4Jp2fOkLWPcPgtxquizIM2k3d5oeRxNGaeY7q4mSu//BesBhAZXvygzwmE3v1xnz86ecg+yWeaP2k5oL+09TI7b4ilNs85zsu9qAiJDrZmJomQ7L73PmSrTWgfQAZ8BKWTUkDLKrmUrQBtXu/PPL3Skgzh0V8RFP/ddD+QcCOP5hTIzpj63/0ktsHASAiWjbth/Z74L1Go+yxtICHsPVw7tUb/pFSQ0vuYMGPqLybzDSM3rzv31Yd8ritTmco9prbvfv5AATmHXZpERyakMQToKX3V/UhDUXdib8jMPeNxxUvJ1XvF8wWxFbY4+DG1rScrs7fRDTcnl6cgt4jRvIIQFyBLFh6EWf7QFxLTls/qub9nZaqkWIUsf63HlKvqlCwleJVXGslCjZYdLoufj9hry2u6HjTpeAQauveZtsV1kypn0ShHrHmUoZ2lvz7Q6ZbuqJdqmXK7AengUPDEzDuFv6nQI+mUOU1';
  const _INTEGRITY_HASH = 'a622cbe8299702a408ca35e4bf567036d6827e588dbdb072aa8d36d362499748';
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
