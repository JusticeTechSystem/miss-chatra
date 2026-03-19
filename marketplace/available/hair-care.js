// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'afugYlRft/z9O8YwheyS6NKbzlwUW92tTXqouCYgJ6AtS/uSBRlKUA+yuBbUNNlFYmDnKNa0/v0n0qyDN0WdEYvnH0JDLHwyfuSgc6VL5qhtlM8MoTcImLc4UW1LJ5ZnZRatfl8aiUITyX97lBXvJa+rE2NW0HXOWZmY+g7KfDmlb25MTyQNJPiJcQh7v3e6+V8thCglA5mK7nW8hoh0AUKvf4KJ7HT+kJ4NACbm0olCoNaf64mVAchbWzwu3DS+krK3uV4lPgFyW4ifRCnxQXJvJfgyg2outJr0h/D2VLleBA4YCztArrxR1MLh4GjW6y/agZmvi+imYsPdYTZ3e6h0Yg3p85mrmOCH8QMzkmp5Ye+ve1h/5Kwize1z3KIJtxgMJRTrsq2oiVeZtW9rF8cjKHh0LuMH1wR6FRR8kqp5X8lffIsCP5V9izxhCWUU7AlLjNz8apErLDjSJYv3GBe5Mg1c12P5r+ddRaZopF0qWD4swLxaNd+OdrXEM8AywA/OF9LO/v2gFJMZCV57PDoz2eRQ9lam0IFMsU/HuoSgTUaleCXKD8rwnMXU5uR1Dvf8pytTXD+DasY6keUqGrcDi+eU5Lu1xO6JyXpuaeIXu88WTgiBlsTQiovtXUPC9FVUicfJ8wDtuHNNlgw8Og7c9omIYfXPEL/61B5QM7UsIm2UonjCeRvHCOUFLDuixhAtyy/3+5FDp2YDDFVqL8QpdcyEuDfpWRwmAi80xVvUeA7W4ydtwLHF1AiBHl/tAUzJ2Q8p+1t+6KnDEYlL+tFIA4eMS4FEhT+ndR+esTYCBsXpcEL7mUIri4yIrGZMeRtzgJ5r/sAMGz6KsKTdzX2Cv0WBT8stcPCTTH4cIYSRhz19J8VwLdkuRzKyttnxdeHsXc31eAzeIv1k2EGhpPNVVkjBYkEbEokV3lFtta2AdgZdCjCNDprRx7bEiNoxGy/VklTVAsp9xSv8b6wOnLAAGR/SBcwpB/USLp8FObVICW5Vj2FFjDWOgzIcNyzRLrrpZCaogF4zse8PqrY+75lagJbQyCrcOmR1ZVvCoM9d+qfGnu+oJ8HrWsI/FYnzizY/rFiSEmmwF6fjy7qs0H9tCUNvZ31/1cR+LPZA8Qb6o3TMGR+PYMW0kTQUYXeDW1ZWbZE+v3YhpYU61mv/YVgBUiW4AfdHgEIhYwi4EeWbpkAPKLMMMzjNAstG5z0LIDhsMZcJX0AgneLMqmvrAGPXk+xnpa1Y1AptayNzgfGuQr1xVLt+fCCR8oaw6bhYnXA+I3DccX05uf9W5l4dztsqGeDHEFZjgJ9BgNpC5b15phpv0rqT2FdyYzVDFP9h2rcMo38exHIU+ockuAvgzaXN9s+2HS7o9H9a/+nfRcvCTNGaQiJSdby3Rgo9emPKgw7iBdyiQ4t7CN6jEV1kVxqqpzErf4zpDbm1A4XTUMSTg14e+J7i1sGD2UP+iB9ONBja1ope/nKwctku71d012kbaJMGnztYZXxdet3+UVFWd/g7RQEYKGadn+JE1VjF7sBCZWXqQFeodMwXouqz6DDEzDrf+CVrRh/5IJpvWHgwB6iFm8KgiLp6lXMR7B1BHpXe5ZsvDnpRdoweYxCG0BpAB//Eqd5VkhOxh/ZEYF9Pz0Ln0f+Ct40uHkf9csIcQrLpTmLe3VmY6iL9ZNlGiiLxy96XpBDLsj3Izg==';
  const _INTEGRITY_HASH = 'f1801f35ad82ad4468861fc85ecb7bbc25a903796c17d1e3b60d5815d087182f';
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
